import "../styles.css";
import "../projects.css";
import "../project-detail.css";
import "../gallery.css";
import "../donate.css";
import "../contact.css";
import "../get-involved.css";
import "../blog.css";
import ClientShell from "../components/ClientShell";

export const metadata = {
  title: "My Birthday Charity Foundation (MBCF) | Transforming Lives",
  description:
    "My Birthday Charity Foundation is a Nigerian nonprofit supporting vulnerable children and communities through food, education, healthcare, and birthday joy.",
  keywords: [
    "Charity",
    "NGO Nigeria",
    "Birthday Outreach",
    "Children Support",
    "Education Aid",
    "Food Relief",
    "Donation",
    "Volunteer Nigeria",
  ],
  authors: [{ name: "My Birthday Charity Foundation" }],
  openGraph: {
    title: "My Birthday Charity Foundation | Bringing Smiles & Hope",
    description:
      "Join our mission to celebrate, educate, and empower vulnerable children across communities in Nigeria.",
    siteName: "My Birthday Charity Foundation",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#680324",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
