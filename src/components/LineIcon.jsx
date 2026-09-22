export function LineIcon({ name, size, className = "", style = {}, ariaHidden = true, ...props }) {
  // Map common icon names to Lineicons class names
  const iconMap = {
    // Navigation & UI
    "menu": "lni lni-menu",
    "close": "lni lni-close",
    "x": "lni lni-close",
    "chevron-down": "lni lni-chevron-down",
    "chevron-up": "lni lni-chevron-up",
    "chevron-right": "lni lni-chevron-right",
    "chevron-left": "lni lni-chevron-left",
    "arrow-right": "lni lni-arrow-right",
    "arrow-left": "lni lni-arrow-left",

    // Actions & Charity
    "gift": "lni lni-gift",
    "heart": "lni lni-heart",
    "hand-heart": "lni lni-heart",
    "handshake": "lni lni-handshake",
    "sparkles": "lni lni-star",
    "star": "lni lni-star",
    "shield-check": "lni lni-shield",
    "badge-check": "lni lni-checkmark-circle",
    "check": "lni lni-checkmark",
    "users": "lni lni-users",
    "user": "lni lni-user",
    "play": "lni lni-play",

    // Communication & Meta
    "mail": "lni lni-envelope",
    "phone": "lni lni-phone",
    "message": "lni lni-comments",
    "calendar": "lni lni-calendar",
    "clock": "lni lni-timer",
    "world": "lni lni-world",
    "globe": "lni lni-world",
    "building": "lni lni-apartment",
  };

  const iconClass = iconMap[name] || `lni lni-${name}`;
  const customStyle = size ? { fontSize: typeof size === "number" ? `${size}px` : size, ...style } : style;

  return (
    <i
      className={`${iconClass} ${className}`.trim()}
      style={customStyle}
      aria-hidden={ariaHidden ? "true" : undefined}
      {...props}
    />
  );
}

export default LineIcon;
