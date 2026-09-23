import os
import sys
import ftplib
import ssl

def deploy():
    host = os.environ.get("FTP_HOST", "").strip()
    user = os.environ.get("FTP_USER", "").strip()
    passwd = os.environ.get("FTP_PASS", "").strip()
    local_dir = "./out"

    if "://" in host:
        host = host.split("://")[-1]
    host = host.split("/")[0].strip()

    print(f"Connecting to FTP host: {host} with user: {user}...")

    ftp = None
    try:
        print("Attempting FTPS (TLS) connection...")
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        ftp = ftplib.FTP_TLS(context=ctx)
        ftp.connect(host, 21, timeout=30)
        ftp.login(user, passwd)
        ftp.prot_p()
        print("✓ Connected securely via FTPS.")
    except Exception as e:
        print(f"FTPS connection failed ({e}), attempting standard FTP...")
        try:
            ftp = ftplib.FTP()
            ftp.connect(host, 21, timeout=30)
            ftp.login(user, passwd)
            print("✓ Connected via standard FTP.")
        except Exception as e2:
            print(f"❌ Failed to connect to FTP server: {e2}")
            sys.exit(1)

    try:
        remote_dirs = ftp.nlst()
    except Exception:
        remote_dirs = []

    target_root = "public_html" if "public_html" in remote_dirs else ""
    if target_root:
        print(f"Found 'public_html' folder. Target remote path: /{target_root}")
    else:
        print("Target remote path: / (root)")

    def ensure_remote_dir(remote_path):
        if not remote_path:
            return
        parts = remote_path.replace("\\", "/").strip("/").split("/")
        current = ""
        for part in parts:
            current += "/" + part
            try:
                ftp.mkd(current)
            except Exception:
                pass

    if not os.path.exists(local_dir):
        print(f"❌ Local build directory '{local_dir}' does not exist!")
        sys.exit(1)

    total_files = 0
    for root, dirs, files in os.walk(local_dir):
        rel_dir = os.path.relpath(root, local_dir).replace("\\", "/")
        if rel_dir == ".":
            remote_sub = target_root
        else:
            remote_sub = f"{target_root}/{rel_dir}".strip("/")

        ensure_remote_dir(remote_sub)

        for file in files:
            local_path = os.path.join(root, file)
            if remote_sub:
                remote_file = f"/{remote_sub}/{file}"
            else:
                remote_file = f"/{file}"

            with open(local_path, "rb") as f:
                ftp.storbinary(f"STOR {remote_file}", f)
            print(f"✓ Uploaded: {remote_file}")
            total_files += 1

    try:
        ftp.quit()
    except Exception:
        pass

    print(f"\n🎉 Successfully deployed {total_files} files to Hostinger!")

if __name__ == "__main__":
    deploy()
