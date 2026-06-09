/* @ds-bundle: {"format":3,"namespace":"MonnyCreaxDesignSystem_019dda","components":[{"name":"App","sourcePath":"uploads/monnycreax-portal.jsx"}],"sourceHashes":{"ui_kits/_shared/Components.jsx":"37ea9533ce64","ui_kits/_shared/data.js":"ec9558be58a0","ui_kits/admin/AdminApp.jsx":"aeda31e8c642","ui_kits/client/ClientApp.jsx":"f75e39b8a891","ui_kits/staff/StaffApp.jsx":"66841707374a","uploads/monnycreax-portal.jsx":"661f5148e818"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MonnyCreaxDesignSystem_019dda = window.MonnyCreaxDesignSystem_019dda || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/_shared/Components.jsx
try { (() => {
/* Shared UI kit primitives — extracted from src/App.jsx */
const {
  useState
} = React;

// ───── ICONS (lucide-style inline SVG, raw markup) ─────
const ICON_PATHS = {
  dashboard: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  card: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  alert: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  chevron: '<polyline points="9 18 15 12 9 6"/>',
  chevronDown: '<polyline points="6 9 12 15 18 9"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>',
  menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  dollar: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  check2: '<polyline points="20 6 9 17 4 12"/>'
};
const Icon = ({
  name,
  size = 17,
  color = "currentColor",
  fill = "none",
  strokeWidth = 2
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: color,
  strokeWidth: strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    flexShrink: 0
  },
  dangerouslySetInnerHTML: {
    __html: ICON_PATHS[name] || ""
  }
});

// ───── PRIMITIVES ─────
const Avatar = ({
  init,
  size = "md",
  scheme = "amber"
}) => {
  const sizes = {
    sm: 28,
    md: 36,
    lg: 48
  };
  const fonts = {
    sm: 11,
    md: 13,
    lg: 16
  };
  const schemes = {
    amber: {
      bg: "#FEF3C7",
      fg: "#92400E"
    },
    purple: {
      bg: "#EDE9FE",
      fg: "#5B21B6"
    },
    blue: {
      bg: "#DBEAFE",
      fg: "#1E40AF"
    },
    green: {
      bg: "#D1FAE5",
      fg: "#065F46"
    },
    red: {
      bg: "#FEE2E2",
      fg: "#B91C1C"
    }
  };
  const c = schemes[scheme];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: sizes[size],
      height: sizes[size],
      borderRadius: 9999,
      background: c.bg,
      color: c.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
      fontSize: fonts[size],
      flexShrink: 0
    }
  }, init);
};
const Badge = ({
  tone = "gray",
  children
}) => {
  const tones = {
    amber: {
      bg: "#FEF3C7",
      fg: "#92400E"
    },
    green: {
      bg: "#D1FAE5",
      fg: "#065F46"
    },
    red: {
      bg: "#FEE2E2",
      fg: "#B91C1C"
    },
    blue: {
      bg: "#DBEAFE",
      fg: "#1E40AF"
    },
    purple: {
      bg: "#EDE9FE",
      fg: "#5B21B6"
    },
    gray: {
      bg: "#F3F4F6",
      fg: "#4B5563"
    }
  };
  const c = tones[tone] || tones.gray;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: c.bg,
      color: c.fg,
      padding: "3px 10px",
      borderRadius: 9999,
      fontSize: 11,
      fontWeight: 600,
      fontFamily: "DM Sans, sans-serif",
      whiteSpace: "nowrap"
    }
  }, children);
};
const STATUS_TONES = {
  active: "green",
  completed: "blue",
  pending: "amber",
  "at-risk": "red",
  paid: "green",
  overdue: "red",
  open: "amber",
  resolved: "green",
  "in-progress": "blue",
  high: "red",
  medium: "amber",
  low: "gray",
  brief: "gray",
  deliverable: "blue",
  admin: "amber",
  staff: "blue",
  client: "green",
  Lead: "gray",
  Qualified: "blue",
  "Proposal Sent": "purple",
  "Contract Signed": "amber"
};
const StatusBadge = ({
  status,
  label
}) => /*#__PURE__*/React.createElement(Badge, {
  tone: STATUS_TONES[status] || "gray"
}, label || status);
const Card = ({
  children,
  style = {},
  padding = 24,
  hover = false
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: "1px solid #F3F4F6",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    borderRadius: 16,
    padding,
    ...style
  }
}, children);
const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  children,
  icon
}) => {
  const variants = {
    primary: {
      bg: "#F59E0B",
      fg: "#030712",
      border: "none"
    },
    secondary: {
      bg: "#F3F4F6",
      fg: "#4B5563",
      border: "none"
    },
    ghost: {
      bg: "#fff",
      fg: "#374151",
      border: "1px solid #E5E7EB"
    },
    dark: {
      bg: "#030712",
      fg: "#fff",
      border: "none"
    },
    blue: {
      bg: "#3B82F6",
      fg: "#fff",
      border: "none"
    }
  };
  const sizes = {
    sm: {
      px: 12,
      py: 7,
      fs: 12
    },
    md: {
      px: 16,
      py: 10,
      fs: 13
    }
  };
  const v = variants[variant],
    s = sizes[size];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: v.bg,
      color: v.fg,
      border: v.border,
      padding: `${s.py}px ${s.px}px`,
      borderRadius: 12,
      fontFamily: "DM Sans, sans-serif",
      fontWeight: 700,
      fontSize: s.fs,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      transition: "all 200ms"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 13,
    color: "currentColor"
  }), children);
};
const ProgressBar = ({
  pct,
  color = "#F59E0B",
  height = 8
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height,
    background: "#F3F4F6",
    borderRadius: 9999,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: "100%",
    width: `${pct}%`,
    background: color,
    borderRadius: 9999,
    transition: "width 300ms"
  }
}));
const MilestoneIcon = ({
  status
}) => {
  if (status === "completed") return /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "#10B981",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
  if (status === "in-progress") return /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 17,
    color: "#F59E0B"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 17,
      height: 17,
      borderRadius: 9999,
      border: "2px solid #D1D5DB",
      boxSizing: "border-box",
      flexShrink: 0
    }
  });
};
const Stat = ({
  icon,
  label,
  value,
  change,
  tint = "amber"
}) => {
  const tints = {
    amber: {
      bg: "#FFFBEB",
      fg: "#D97706"
    },
    blue: {
      bg: "#EFF6FF",
      fg: "#2563EB"
    },
    green: {
      bg: "#ECFDF5",
      fg: "#059669"
    },
    purple: {
      bg: "#F5F3FF",
      fg: "#7C3AED"
    },
    red: {
      bg: "#FEF2F2",
      fg: "#DC2626"
    }
  };
  const t = tints[tint];
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: t.bg,
      color: t.fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19,
    color: t.fg
  })), change !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      fontFamily: "DM Sans",
      color: change >= 0 ? "#059669" : "#DC2626"
    }
  }, change >= 0 ? "+" : "", change, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: "-0.02em",
      color: "#111827"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "DM Sans, sans-serif",
      fontSize: 13,
      color: "#6B7280",
      marginTop: 2
    }
  }, label));
};

// ───── LAYOUT ─────
const NAV = {
  client: [["dashboard", "Dashboard", "dashboard"], ["projects", "My Projects", "briefcase"], ["documents", "Documents", "folder"], ["messages", "Messages", "message"], ["invoices", "Invoices", "card"], ["support", "Support", "help"]],
  admin: [["dashboard", "Dashboard", "dashboard"], ["clients", "Clients", "users"], ["crm", "CRM Pipeline", "target"], ["projects", "Projects", "briefcase"], ["invoices", "Invoices", "file"], ["reports", "Reports", "chart"], ["team", "Team & Access", "shield"], ["settings", "Settings", "settings"]],
  staff: [["dashboard", "Dashboard", "dashboard"], ["projects", "My Projects", "briefcase"], ["tasks", "My Tasks", "check"], ["messages", "Messages", "message"], ["files", "Files", "folder"]]
};
const Sidebar = ({
  role,
  page,
  setPage,
  profile
}) => {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      background: "#030712",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
      height: "100vh",
      position: "sticky",
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      background: "#F59E0B",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "16,6 18.5,13 26,13 20,17.5 22.5,25 16,20.5 9.5,25 12,17.5 6,13 13.5,13",
    fill: "#030712"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Syne, sans-serif",
      fontWeight: 800,
      fontSize: 17,
      letterSpacing: "-0.02em"
    }
  }, "MonnyCreax")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    init: profile.initials,
    size: "sm",
    scheme: profile.scheme
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "#fff",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, profile.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9CA3AF",
      textTransform: "capitalize"
    }
  }, role))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: 8,
      overflowY: "auto"
    }
  }, NAV[role].map(([p, label, icon]) => {
    const active = page === p;
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: () => setPage(p),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 12,
        fontFamily: "DM Sans, sans-serif",
        fontSize: 13,
        background: active ? "#F59E0B" : "transparent",
        color: active ? "#030712" : "#9CA3AF",
        fontWeight: active ? 700 : 500,
        border: "none",
        cursor: "pointer",
        marginBottom: 2,
        transition: "all 200ms",
        textAlign: "left"
      },
      onMouseEnter: e => {
        if (!active) {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          e.currentTarget.style.color = "#fff";
        }
      },
      onMouseLeave: e => {
        if (!active) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#9CA3AF";
        }
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 17,
      color: "currentColor"
    }), /*#__PURE__*/React.createElement("span", null, label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      try {
        window.top.location.href = "../../login.html";
      } catch (e) {
        window.location.href = "../../login.html";
      }
    },
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      borderRadius: 12,
      background: "transparent",
      color: "#6B7280",
      border: "none",
      cursor: "pointer",
      fontFamily: "DM Sans",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout",
    size: 17,
    color: "currentColor"
  }), /*#__PURE__*/React.createElement("span", null, "Log Out"))));
};
const Header = ({
  title,
  subtitle,
  profile
}) => /*#__PURE__*/React.createElement("header", {
  style: {
    background: "#fff",
    borderBottom: "1px solid #F3F4F6",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 20
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "Syne, sans-serif",
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: "-0.02em",
    color: "#111827",
    margin: 0,
    lineHeight: 1.2
  }
}, title), subtitle && /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "DM Sans",
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2
  }
}, subtitle)), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("button", {
  style: {
    width: 36,
    height: 36,
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "bell",
  size: 17,
  color: "#6B7280"
}), /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 7,
    height: 7,
    background: "#EF4444",
    borderRadius: 9999,
    border: "2px solid #fff"
  }
})), /*#__PURE__*/React.createElement(Avatar, {
  init: profile.initials,
  size: "md",
  scheme: profile.scheme
})));
const PortalShell = ({
  role,
  profile,
  page,
  setPage,
  title,
  subtitle,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    height: "100vh",
    background: "#F9FAFB",
    overflow: "hidden",
    fontFamily: "DM Sans, sans-serif"
  }
}, /*#__PURE__*/React.createElement(Sidebar, {
  role: role,
  page: page,
  setPage: setPage,
  profile: profile
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement(Header, {
  title: title,
  subtitle: subtitle,
  profile: profile
}), /*#__PURE__*/React.createElement("main", {
  style: {
    flex: 1,
    overflowY: "auto"
  }
}, children)));

// Export to window
Object.assign(window, {
  Icon,
  Avatar,
  Badge,
  StatusBadge,
  Card,
  Button,
  ProgressBar,
  MilestoneIcon,
  Stat,
  Sidebar,
  Header,
  PortalShell,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/data.js
try { (() => {
// Mock data — pulled directly from src/App.jsx
const MOCK_PROJECTS = [{
  id: "p1",
  clientName: "TechVision Co",
  title: "Complete Clarity Package",
  package: "Complete Clarity",
  value: 750,
  status: "active",
  progress: 65,
  startDate: "2026-03-15",
  dueDate: "2026-05-10",
  milestones: [{
    id: "m1",
    title: "Discovery & Brief",
    status: "completed",
    date: "2026-03-22"
  }, {
    id: "m2",
    title: "Brand Strategy",
    status: "completed",
    date: "2026-04-05"
  }, {
    id: "m3",
    title: "Visual Identity",
    status: "in-progress",
    date: "2026-04-25"
  }, {
    id: "m4",
    title: "Brand Guidelines",
    status: "pending",
    date: "2026-05-02"
  }, {
    id: "m5",
    title: "Final Delivery",
    status: "pending",
    date: "2026-05-10"
  }],
  files: [{
    id: "f1",
    name: "Discovery_Brief_v1.pdf",
    size: "2.4 MB",
    uploadedBy: "TechVision Co",
    date: "2026-03-18",
    type: "brief"
  }, {
    id: "f2",
    name: "Brand_Strategy_Document.pdf",
    size: "5.1 MB",
    uploadedBy: "MonnyCreax",
    date: "2026-04-05",
    type: "deliverable"
  }, {
    id: "f3",
    name: "Visual_Identity_Concept_v1.pdf",
    size: "12.8 MB",
    uploadedBy: "MonnyCreax",
    date: "2026-04-20",
    type: "deliverable"
  }],
  updates: [{
    id: "u1",
    text: "Visual Identity Concept v1 uploaded for review",
    date: "2026-04-20"
  }, {
    id: "u2",
    text: "Brand Strategy milestone completed",
    date: "2026-04-05"
  }, {
    id: "u3",
    text: "Discovery session completed successfully",
    date: "2026-03-22"
  }],
  messages: [{
    id: "msg1",
    sender: "Amara Osei",
    role: "admin",
    text: "The Visual Identity concepts are ready for your review. Please share feedback by Friday.",
    time: "10:32 AM"
  }, {
    id: "msg2",
    sender: "Sarah Mitchell",
    role: "client",
    text: "Looks great! I have questions about the colour palette. Can we schedule a call?",
    time: "2:15 PM"
  }, {
    id: "msg3",
    sender: "Amara Osei",
    role: "admin",
    text: "Absolutely! I'll send a calendar invite for Thursday at 3 PM.",
    time: "3:01 PM"
  }]
}, {
  id: "p2",
  clientName: "Apex Speakers",
  title: "Rapid Clarity Package",
  package: "Rapid Clarity",
  value: 500,
  status: "active",
  progress: 30,
  startDate: "2026-04-10",
  dueDate: "2026-05-15",
  milestones: [{
    id: "m1",
    title: "Discovery & Brief",
    status: "completed",
    date: "2026-04-15"
  }, {
    id: "m2",
    title: "Messaging Framework",
    status: "in-progress",
    date: "2026-04-28"
  }, {
    id: "m3",
    title: "Final Delivery",
    status: "pending",
    date: "2026-05-15"
  }],
  files: [],
  updates: [],
  messages: []
}];
const MOCK_CLIENTS = [{
  id: "c1",
  name: "Sarah Mitchell",
  company: "TechVision Co",
  email: "sarah@techvision.co",
  location: "Lagos, Nigeria",
  package: "Complete Clarity",
  status: "active",
  ltv: 750,
  avatar: "SM",
  scheme: "amber"
}, {
  id: "c2",
  name: "David Okafor",
  company: "Apex Speakers",
  email: "david@apexspeakers.com",
  location: "Accra, Ghana",
  package: "Rapid Clarity",
  status: "active",
  ltv: 500,
  avatar: "DO",
  scheme: "blue"
}, {
  id: "c3",
  name: "Zanele Nkosi",
  company: "Nkosi Leadership",
  email: "zanele@nkosileadership.co.za",
  location: "Johannesburg, SA",
  package: "Premium Clarity",
  status: "completed",
  ltv: 1200,
  avatar: "ZN",
  scheme: "green"
}, {
  id: "c4",
  name: "Marcus Tetteh",
  company: "Tetteh Ventures",
  email: "marcus@tettehventures.com",
  location: "London, UK",
  package: "Complete Clarity",
  status: "at-risk",
  ltv: 750,
  avatar: "MT",
  scheme: "red"
}];
const MOCK_INVOICES = [{
  id: "inv1",
  clientId: "c1",
  clientName: "TechVision Co",
  project: "Complete Clarity Package",
  amount: 750,
  status: "paid",
  issued: "2026-03-15",
  due: "2026-03-29",
  paid: "2026-03-22"
}, {
  id: "inv2",
  clientId: "c2",
  clientName: "Apex Speakers",
  project: "Rapid Clarity Package",
  amount: 500,
  status: "pending",
  issued: "2026-04-10",
  due: "2026-04-24",
  paid: null
}, {
  id: "inv3",
  clientId: "c3",
  clientName: "Nkosi Leadership",
  project: "Premium Clarity + Support",
  amount: 1200,
  status: "paid",
  issued: "2026-01-10",
  due: "2026-01-24",
  paid: "2026-01-20"
}, {
  id: "inv4",
  clientId: "c4",
  clientName: "Tetteh Ventures",
  project: "Complete Clarity Package",
  amount: 750,
  status: "overdue",
  issued: "2026-02-20",
  due: "2026-03-06",
  paid: null
}];
const MOCK_CRM = [{
  id: "d1",
  company: "FutureEdge Inc",
  contact: "Priya Sharma",
  value: 1200,
  stage: "Lead",
  probability: 20,
  close: "2026-06-01",
  owner: "Amara Osei"
}, {
  id: "d2",
  company: "Beacon Advisory",
  contact: "Jomo Mwangi",
  value: 750,
  stage: "Qualified",
  probability: 40,
  close: "2026-05-20",
  owner: "Kwame Addo"
}, {
  id: "d3",
  company: "Orbit Creatives",
  contact: "Fatima Al-Rashid",
  value: 500,
  stage: "Proposal Sent",
  probability: 60,
  close: "2026-05-10",
  owner: "Amara Osei"
}, {
  id: "d4",
  company: "Summit Leaders",
  contact: "Bernard Asante",
  value: 1200,
  stage: "Contract Signed",
  probability: 90,
  close: "2026-05-05",
  owner: "Amara Osei"
}, {
  id: "d5",
  company: "Nexus Media",
  contact: "Chioma Obi",
  value: 750,
  stage: "Qualified",
  probability: 35,
  close: "2026-06-15",
  owner: "Kwame Addo"
}];
const MOCK_TICKETS = [{
  id: "t1",
  clientId: "c1",
  subject: "Question about colour palette revisions",
  status: "open",
  priority: "medium",
  created: "2026-04-22"
}, {
  id: "t2",
  clientId: "c2",
  subject: "File download issue on mobile",
  status: "resolved",
  priority: "high",
  created: "2026-04-18"
}, {
  id: "t3",
  clientId: "c4",
  subject: "Invoice discrepancy",
  status: "open",
  priority: "high",
  created: "2026-04-15"
}];
const MOCK_TEAM = [{
  id: "a1",
  name: "Amara Osei",
  email: "amara@monnycreax.com",
  role: "admin",
  title: "Founder & Brand Strategist",
  avatar: "AO",
  projects: 3
}, {
  id: "s1",
  name: "Kwame Addo",
  email: "kwame@monnycreax.com",
  role: "staff",
  title: "Brand Designer",
  avatar: "KA",
  projects: 2
}, {
  id: "s2",
  name: "Ama Boateng",
  email: "ama@monnycreax.com",
  role: "staff",
  title: "Copywriter",
  avatar: "AB",
  projects: 1
}];
Object.assign(window, {
  MOCK_PROJECTS,
  MOCK_CLIENTS,
  MOCK_INVOICES,
  MOCK_CRM,
  MOCK_TICKETS,
  MOCK_TEAM
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/data.js", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminApp.jsx
try { (() => {
// Admin Suite screens
const {
  useState: useStateA
} = React;
const AdminDashboard = () => {
  const team = [{
    name: "Amara Osei",
    init: "AO",
    scheme: "amber",
    count: 3,
    pct: 100,
    color: "#F59E0B"
  }, {
    name: "Kwame Addo",
    init: "KA",
    scheme: "blue",
    count: 2,
    pct: 67,
    color: "#3B82F6"
  }, {
    name: "Ama Boateng",
    init: "AB",
    scheme: "green",
    count: 1,
    pct: 33,
    color: "#10B981"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "briefcase",
    label: "Active Projects",
    value: "2",
    change: 12,
    tint: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "dollar",
    label: "Revenue (Month)",
    value: "$2,450",
    change: 8,
    tint: "green"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "card",
    label: "Pending Invoices",
    value: "$500",
    change: -5,
    tint: "purple"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "help",
    label: "Open Tickets",
    value: "2",
    change: 20,
    tint: "red"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15,
      color: "#111827"
    }
  }, "Revenue vs Invoiced"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#6B7280"
    }
  }, "Last 6 months")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      fontSize: 11,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "#6B7280"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: "#F59E0B",
      borderRadius: 2
    }
  }), "Collected"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "#6B7280"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: "#8B5CF6",
      borderRadius: 2
    }
  }), "Invoiced"))), /*#__PURE__*/React.createElement(RevenueChart, null)), /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15,
      color: "#111827",
      marginBottom: 4
    }
  }, "Package Mix"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#6B7280",
      marginBottom: 16
    }
  }, "Active projects by tier"), /*#__PURE__*/React.createElement(PackageDonut, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15,
      color: "#111827",
      marginBottom: 14
    }
  }, "Alerts"), [{
    tone: "red",
    text: "Tetteh Ventures invoice overdue 14 days",
    icon: "alert"
  }, {
    tone: "amber",
    text: "TechVision Co milestone due in 2 days",
    icon: "clock"
  }, {
    tone: "amber",
    text: "3 unread support tickets",
    icon: "help"
  }, {
    tone: "red",
    text: "Marcus Tetteh marked at-risk — last contact 21d",
    icon: "alert"
  }].map((a, i) => {
    const tones = {
      red: "#FEF2F2",
      amber: "#FFFBEB"
    };
    const fg = {
      red: "#DC2626",
      amber: "#D97706"
    };
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        padding: 12,
        background: tones[a.tone],
        borderRadius: 12,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 17,
      color: fg[a.tone]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#111827",
        lineHeight: 1.4
      }
    }, a.text));
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15,
      color: "#111827",
      marginBottom: 14
    }
  }, "Team Workload"), team.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    init: t.init,
    size: "md",
    scheme: t.scheme
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#6B7280"
    }
  }, t.count, " project", t.count !== 1 && "s")), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: t.pct,
    color: t.color,
    height: 6
  })))))));
};

// Inline SVG charts (no external lib)
const RevenueChart = () => {
  const data = [{
    m: "Nov",
    c: 1200,
    i: 1500
  }, {
    m: "Dec",
    c: 1800,
    i: 2000
  }, {
    m: "Jan",
    c: 2400,
    i: 2400
  }, {
    m: "Feb",
    c: 1500,
    i: 1900
  }, {
    m: "Mar",
    c: 2200,
    i: 2400
  }, {
    m: "Apr",
    c: 2450,
    i: 2950
  }];
  const max = 3200,
    w = 600,
    h = 180,
    pad = 24;
  const cw = w - pad * 2,
    ch = h - pad;
  const xs = i => pad + i / (data.length - 1) * cw;
  const ys = v => pad + ch - v / max * ch;
  const path = key => "M " + data.map((d, i) => `${xs(i)} ${ys(d[key])}`).join(" L ");
  const area = key => path(key) + ` L ${xs(data.length - 1)} ${pad + ch} L ${xs(0)} ${pad + ch} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: "100%",
      height: "auto"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "amberFill",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#F59E0B",
    stopOpacity: "0.3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#F59E0B",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area("c"),
    fill: "url(#amberFill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: path("i"),
    fill: "none",
    stroke: "#8B5CF6",
    strokeWidth: "2",
    strokeDasharray: "5 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: path("c"),
    fill: "none",
    stroke: "#F59E0B",
    strokeWidth: "2.5"
  }), data.map((d, i) => /*#__PURE__*/React.createElement("g", {
    key: d.m
  }, /*#__PURE__*/React.createElement("circle", {
    cx: xs(i),
    cy: ys(d.c),
    r: "3.5",
    fill: "#fff",
    stroke: "#F59E0B",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: xs(i),
    y: h - 4,
    textAnchor: "middle",
    fontSize: "11",
    fontFamily: "DM Sans",
    fill: "#9CA3AF"
  }, d.m))));
};
const PackageDonut = () => {
  const data = [{
    label: "Rapid",
    value: 1,
    color: "#FBBF24"
  }, {
    label: "Complete",
    value: 2,
    color: "#F59E0B"
  }, {
    label: "Premium",
    value: 1,
    color: "#8B5CF6"
  }];
  const total = data.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  const r = 50,
    c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 140 140",
    width: "120",
    height: "120"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(70 70) rotate(-90)"
  }, data.map(d => {
    const len = d.value / total * c;
    const seg = /*#__PURE__*/React.createElement("circle", {
      key: d.label,
      r: r,
      fill: "none",
      stroke: d.color,
      strokeWidth: "20",
      strokeDasharray: `${len} ${c}`,
      strokeDashoffset: -acc
    });
    acc += len;
    return seg;
  })), /*#__PURE__*/React.createElement("text", {
    x: "70",
    y: "70",
    textAnchor: "middle",
    fontFamily: "Syne",
    fontWeight: "800",
    fontSize: "22",
    fill: "#111827"
  }, total), /*#__PURE__*/React.createElement("text", {
    x: "70",
    y: "86",
    textAnchor: "middle",
    fontFamily: "DM Sans",
    fontSize: "10",
    fill: "#6B7280"
  }, "projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "5px 0",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: d.color,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "#374151"
    }
  }, d.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Syne",
      fontWeight: 700
    }
  }, d.value)))));
};
const AdminClients = () => {
  const [q, setQ] = useStateA("");
  const filtered = MOCK_CLIENTS.filter(c => (c.name + c.company).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 11
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15,
    color: "#9CA3AF"
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search clients\u2026",
    style: {
      width: "100%",
      background: "#fff",
      border: "1px solid #E5E7EB",
      borderRadius: 12,
      padding: "9px 14px 9px 36px",
      fontSize: 13,
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Add Client")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#F9FAFB"
    }
  }, ["Client", "Package", "Status", "LTV", "Location", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "12px 20px",
      textAlign: "left",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: 700,
      color: "#6B7280"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.id,
    style: {
      borderTop: "1px solid #F3F4F6",
      cursor: "pointer"
    },
    onMouseEnter: e => e.currentTarget.style.background = "#FFFBEB",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    init: c.avatar,
    size: "sm",
    scheme: c.scheme
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6B7280"
    }
  }, c.company)))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      color: "#374151"
    }
  }, c.package), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: c.status,
    label: c.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      fontFamily: "Syne",
      fontWeight: 800
    }
  }, "$", c.ltv.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      color: "#6B7280"
    }
  }, c.location), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      textAlign: "right",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 15,
    color: "#9CA3AF"
  }))))))));
};
const AdminCRM = () => {
  const stages = ["Lead", "Qualified", "Proposal Sent", "Contract Signed"];
  const stageDeals = s => MOCK_CRM.filter(d => d.stage === s);
  const stageValue = s => stageDeals(s).reduce((sum, d) => sum + d.value, 0);
  const weighted = MOCK_CRM.reduce((s, d) => s + d.value * d.probability / 100, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "#6B7280"
    }
  }, "Pipeline Total"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 22,
      color: "#111827"
    }
  }, "$", MOCK_CRM.reduce((s, d) => s + d.value, 0).toLocaleString())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "#6B7280"
    }
  }, "Weighted Forecast"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 22,
      color: "#F59E0B"
    }
  }, "$", Math.round(weighted).toLocaleString())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "#6B7280"
    }
  }, "Deals"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 22,
      color: "#111827"
    }
  }, MOCK_CRM.length)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12
    }
  }, stages.map(stage => /*#__PURE__*/React.createElement("div", {
    key: stage,
    style: {
      background: "#F3F4F6",
      borderRadius: 16,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 12,
      padding: "0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 13,
      color: "#111827"
    }
  }, stage), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6B7280"
    }
  }, stageDeals(stage).length, " deal", stageDeals(stage).length !== 1 && "s", " \xB7 $", stageValue(stage).toLocaleString()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, stageDeals(stage).map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 14,
      border: "1px solid transparent",
      cursor: "pointer",
      transition: "border 200ms"
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = "#F59E0B",
    onMouseLeave: e => e.currentTarget.style.borderColor = "transparent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 13,
      color: "#111827",
      marginBottom: 2
    }
  }, d.company), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6B7280",
      marginBottom: 10
    }
  }, d.contact), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 16,
      color: "#F59E0B",
      marginBottom: 8
    }
  }, "$", d.value.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "#6B7280",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, d.probability, "% likely"), /*#__PURE__*/React.createElement("span", null, d.close)), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: d.probability,
    height: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 11,
      color: "#6B7280"
    }
  }, d.owner))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "transparent",
      border: "1px dashed #D1D5DB",
      borderRadius: 12,
      padding: 12,
      color: "#6B7280",
      fontSize: 12,
      cursor: "pointer",
      fontFamily: "DM Sans"
    }
  }, "+ Add Deal"))))));
};
const AdminInvoices = () => {
  const total = MOCK_INVOICES.reduce((s, i) => s + i.amount, 0);
  const pending = MOCK_INVOICES.filter(i => i.status === "pending").reduce((s, i) => s + i.amount, 0);
  const overdue = MOCK_INVOICES.filter(i => i.status === "overdue").reduce((s, i) => s + i.amount, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "dollar",
    label: "Total Invoiced",
    value: `$${total.toLocaleString()}`,
    tint: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "clock",
    label: "Pending",
    value: `$${pending.toLocaleString()}`,
    tint: "purple"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "alert",
    label: "Overdue",
    value: `$${overdue.toLocaleString()}`,
    tint: "red"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #F3F4F6"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15
    }
  }, "All Invoices"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "plus"
  }, "Create Invoice")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#F9FAFB"
    }
  }, ["Client", "Project", "Issued", "Due", "Amount", "Status", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "12px 20px",
      textAlign: "left",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: 700,
      color: "#6B7280"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, MOCK_INVOICES.map(i => /*#__PURE__*/React.createElement("tr", {
    key: i.id,
    style: {
      borderTop: "1px solid #F3F4F6"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      fontWeight: 600
    }
  }, i.clientName), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      color: "#6B7280"
    }
  }, i.project), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      color: "#6B7280"
    }
  }, i.issued), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      color: "#6B7280"
    }
  }, i.due), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      fontFamily: "Syne",
      fontWeight: 800
    }
  }, "$", i.amount.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: i.status,
    label: i.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 20px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 17,
    color: "#9CA3AF"
  }))))))));
};
const AdminPlaceholder = ({
  label,
  hint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24
  }
}, /*#__PURE__*/React.createElement(Card, {
  padding: 48
}, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    color: "#6B7280"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "chart",
  size: 32,
  color: "#D1D5DB"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 16,
    color: "#111827",
    marginTop: 12
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    marginTop: 4
  }
}, hint))));
const AdminApp = () => {
  const [page, setPage] = useStateA("dashboard");
  const profile = {
    name: "Amara Osei",
    initials: "AO",
    scheme: "purple"
  };
  const titles = {
    dashboard: ["Dashboard", "MonnyCreax operations at a glance"],
    clients: ["Clients", "Directory of every active and past client"],
    crm: ["CRM Pipeline", "Track every deal from lead to signed"],
    projects: ["Projects", "All projects across every client"],
    invoices: ["Invoices", "Billing across the business"],
    reports: ["Reports", "Health, revenue, and delivery metrics"],
    team: ["Team & Access", "Members and permissions"],
    settings: ["Settings", "Business configuration and integrations"]
  };
  const [title, subtitle] = titles[page];
  const screens = {
    dashboard: /*#__PURE__*/React.createElement(AdminDashboard, null),
    clients: /*#__PURE__*/React.createElement(AdminClients, null),
    crm: /*#__PURE__*/React.createElement(AdminCRM, null),
    projects: /*#__PURE__*/React.createElement(AdminPlaceholder, {
      label: "Projects table",
      hint: "Filterable list of every project across the agency."
    }),
    invoices: /*#__PURE__*/React.createElement(AdminInvoices, null),
    reports: /*#__PURE__*/React.createElement(AdminPlaceholder, {
      label: "Reports & analytics",
      hint: "KPI cards, revenue charts, client health table."
    }),
    team: /*#__PURE__*/React.createElement(AdminPlaceholder, {
      label: "Team & Access",
      hint: "Member list and permission matrix."
    }),
    settings: /*#__PURE__*/React.createElement(AdminPlaceholder, {
      label: "Settings",
      hint: "Business profile and integrations."
    })
  };
  return /*#__PURE__*/React.createElement(PortalShell, {
    role: "admin",
    profile: profile,
    page: page,
    setPage: setPage,
    title: title,
    subtitle: subtitle
  }, screens[page]);
};
window.AdminApp = AdminApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client/ClientApp.jsx
try { (() => {
// Client Portal screens
const {
  useState: useStateC
} = React;
const ClientDashboard = ({
  profile
}) => {
  const project = MOCK_PROJECTS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "briefcase",
    label: "Active Projects",
    value: "1",
    tint: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "alert",
    label: "Pending Actions",
    value: "2",
    tint: "red"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "message",
    label: "Unread Messages",
    value: "3",
    tint: "blue"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "help",
    label: "Open Tickets",
    value: "1",
    tint: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#92400E",
      marginBottom: 6
    }
  }, "Active Project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 18,
      color: "#111827",
      margin: 0
    }
  }, project.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#6B7280",
      marginTop: 2
    }
  }, "Due ", project.dueDate)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: project.status,
    label: "Active"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "#374151"
    }
  }, "Overall Progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 14,
      color: "#F59E0B"
    }
  }, project.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: project.progress
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #F3F4F6",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 14,
      color: "#111827",
      marginBottom: 12
    }
  }, "Milestones"), project.milestones.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0",
      borderBottom: "1px solid #F9FAFB"
    }
  }, /*#__PURE__*/React.createElement(MilestoneIcon, {
    status: m.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: m.status === "completed" ? "#9CA3AF" : "#111827",
      textDecoration: m.status === "completed" ? "line-through" : "none"
    }
  }, m.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9CA3AF"
    }
  }, m.date)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: m.status,
    label: m.status.replace("-", " ")
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 14,
      color: "#111827",
      marginBottom: 14
    }
  }, "Quick Actions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, [["upload", "Upload File"], ["message", "New Message"], ["card", "View Invoices"], ["help", "Get Support"]].map(([icon, label]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    style: {
      background: "#F9FAFB",
      border: "1px solid #F3F4F6",
      borderRadius: 12,
      padding: "14px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      cursor: "pointer",
      fontFamily: "DM Sans",
      fontSize: 12,
      fontWeight: 600,
      color: "#374151"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "#F59E0B"
  }), label)))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 14,
      color: "#111827",
      marginBottom: 14
    }
  }, "Recent Activity"), project.updates.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.id,
    style: {
      display: "flex",
      gap: 10,
      padding: "8px 0",
      borderBottom: "1px solid #F9FAFB"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: "#F59E0B",
      marginTop: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#374151",
      lineHeight: 1.4
    }
  }, u.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9CA3AF",
      marginTop: 2
    }
  }, u.date))))))));
};
const ClientProjects = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16
  }
}, MOCK_PROJECTS.map(p => /*#__PURE__*/React.createElement(Card, {
  key: p.id,
  padding: 20
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 14
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 16,
    color: "#111827",
    margin: 0
  }
}, p.title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2
  }
}, p.package, " \xB7 Due ", p.dueDate)), /*#__PURE__*/React.createElement(StatusBadge, {
  status: p.status,
  label: "Active"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    color: "#6B7280"
  }
}, p.milestones.filter(m => m.status === "completed").length, "/", p.milestones.length, " milestones"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Syne",
    color: "#F59E0B"
  }
}, p.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
  pct: p.progress
})))));
const ClientMessages = () => {
  const [messages, setMessages] = useStateC(MOCK_PROJECTS[0].messages);
  const [text, setText] = useStateC("");
  const send = () => {
    if (!text.trim()) return;
    setMessages([...messages, {
      id: "n" + Date.now(),
      sender: "Sarah Mitchell",
      role: "client",
      text,
      time: "Now"
    }]);
    setText("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      height: "calc(100% - 0px)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid #F3F4F6"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15,
      color: "#111827"
    }
  }, MOCK_PROJECTS[0].title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#6B7280"
    }
  }, "with Amara Osei")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, messages.map(m => {
    const isClient = m.role === "client";
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        justifyContent: isClient ? "flex-end" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "70%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: isClient ? "#F59E0B" : "#F3F4F6",
        color: isClient ? "#030712" : "#111827",
        padding: "10px 14px",
        borderRadius: 16,
        fontSize: 13,
        lineHeight: 1.45
      }
    }, m.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#9CA3AF",
        marginTop: 4,
        textAlign: isClient ? "right" : "left"
      }
    }, m.sender, " \xB7 ", m.time)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid #F3F4F6",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Type a message\u2026",
    style: {
      flex: 1,
      background: "#F3F4F6",
      border: "none",
      borderRadius: 12,
      padding: "10px 14px",
      fontSize: 13,
      fontFamily: "DM Sans",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: send,
    icon: "send"
  }, "Send"))));
};
const ClientInvoices = () => {
  const myInvoices = MOCK_INVOICES.filter(i => i.clientId === "c1" || i.clientId === "c2");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13,
      fontFamily: "DM Sans"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "#F9FAFB"
    }
  }, ["Project", "Issued", "Due", "Amount", "Status", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "12px 20px",
      textAlign: "left",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: 700,
      color: "#6B7280"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, myInvoices.map(i => /*#__PURE__*/React.createElement("tr", {
    key: i.id,
    style: {
      borderTop: "1px solid #F3F4F6"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 20px",
      fontWeight: 600
    }
  }, i.project), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 20px",
      color: "#6B7280"
    }
  }, i.issued), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 20px",
      color: "#6B7280"
    }
  }, i.due), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 20px",
      fontFamily: "Syne",
      fontWeight: 800,
      color: "#111827"
    }
  }, "$", i.amount.toLocaleString()), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 20px"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: i.status,
    label: i.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 20px",
      textAlign: "right"
    }
  }, i.status === "pending" && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "Pay Now"))))))));
};
const ClientSupport = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  icon: "plus"
}, "New Ticket"), MOCK_TICKETS.filter(t => t.clientId === "c1").map(t => /*#__PURE__*/React.createElement(Card, {
  key: t.id,
  padding: 20
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    background: t.status === "open" ? "#F59E0B" : "#10B981",
    marginTop: 7
  }
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 14
  }
}, t.subject), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2
  }
}, "Opened ", t.created))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 6
  }
}, /*#__PURE__*/React.createElement(StatusBadge, {
  status: t.priority,
  label: t.priority
}), /*#__PURE__*/React.createElement(StatusBadge, {
  status: t.status,
  label: t.status
}))))));
const ClientPlaceholder = ({
  label
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24
  }
}, /*#__PURE__*/React.createElement(Card, {
  padding: 48
}, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    color: "#6B7280"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "folder",
  size: 32,
  color: "#D1D5DB"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 16,
    color: "#111827",
    marginTop: 12
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    marginTop: 4
  }
}, "Files and documents appear here."))));
const ClientApp = () => {
  const [page, setPage] = useStateC("dashboard");
  const profile = {
    name: "Sarah Mitchell",
    initials: "SM",
    scheme: "amber"
  };
  const titles = {
    dashboard: ["Dashboard", "Welcome back, Sarah"],
    projects: ["My Projects", "Track every project in flight"],
    documents: ["Documents", "All your project files"],
    messages: ["Messages", "Talk to your strategy team"],
    invoices: ["Invoices", "Pay and track your billing"],
    support: ["Support", "We're here to help"]
  };
  const [title, subtitle] = titles[page];
  const screens = {
    dashboard: /*#__PURE__*/React.createElement(ClientDashboard, {
      profile: profile
    }),
    projects: /*#__PURE__*/React.createElement(ClientProjects, null),
    documents: /*#__PURE__*/React.createElement(ClientPlaceholder, {
      label: "Documents"
    }),
    messages: /*#__PURE__*/React.createElement(ClientMessages, null),
    invoices: /*#__PURE__*/React.createElement(ClientInvoices, null),
    support: /*#__PURE__*/React.createElement(ClientSupport, null)
  };
  return /*#__PURE__*/React.createElement(PortalShell, {
    role: "client",
    profile: profile,
    page: page,
    setPage: setPage,
    title: title,
    subtitle: subtitle
  }, screens[page]);
};
window.ClientApp = ClientApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client/ClientApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/staff/StaffApp.jsx
try { (() => {
// Staff Workspace screens
const {
  useState: useStateS
} = React;
const STAFF_TASKS_INIT = [{
  id: "t1",
  title: "Visual Identity",
  project: "TechVision Co",
  due: "2026-04-25",
  done: false
}, {
  id: "t2",
  title: "Brand Guidelines",
  project: "TechVision Co",
  due: "2026-05-02",
  done: false
}, {
  id: "t3",
  title: "Messaging Framework",
  project: "Apex Speakers",
  due: "2026-04-28",
  done: false
}, {
  id: "t4",
  title: "Discovery Brief",
  project: "Apex Speakers",
  due: "2026-04-15",
  done: true
}, {
  id: "t5",
  title: "Logo concepts v1",
  project: "TechVision Co",
  due: "2026-04-22",
  done: true
}];
const StaffDashboard = () => {
  const [tasks, setTasks] = useStateS(STAFF_TASKS_INIT);
  const toggle = id => setTasks(tasks.map(t => t.id === id ? {
    ...t,
    done: !t.done
  } : t));
  const done = tasks.filter(t => t.done).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "briefcase",
    label: "Assigned Projects",
    value: "2",
    tint: "blue"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "check",
    label: "Pending Tasks",
    value: String(tasks.length - done),
    tint: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "message",
    label: "Unread Messages",
    value: "5",
    tint: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15
    }
  }, "My Tasks Today"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#6B7280",
      fontFamily: "DM Sans",
      fontWeight: 600
    }
  }, done, "/", tasks.length, " done")), tasks.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => toggle(t.id),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "10px 0",
      borderBottom: "1px solid #F9FAFB",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #F9FAFB",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: t.done ? "none" : "2px solid #D1D5DB",
      background: t.done ? "#10B981" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 1,
      flexShrink: 0
    }
  }, t.done && /*#__PURE__*/React.createElement(Icon, {
    name: "check2",
    size: 13,
    color: "#fff",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: t.done ? "#9CA3AF" : "#111827",
      textDecoration: t.done ? "line-through" : "none"
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9CA3AF",
      marginTop: 2
    }
  }, t.project, " \xB7 due ", t.due))))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15,
      marginBottom: 14
    }
  }, "My Projects"), MOCK_PROJECTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      padding: "12px 0",
      borderBottom: "1px solid #F9FAFB"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6B7280"
    }
  }, p.clientName)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 14,
      color: "#3B82F6"
    }
  }, p.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: p.progress,
    color: "#3B82F6",
    height: 6
  }))))));
};
const StaffTasks = () => {
  const [tasks, setTasks] = useStateS(STAFF_TASKS_INIT);
  const toggle = id => setTasks(tasks.map(t => t.id === id ? {
    ...t,
    done: !t.done
  } : t));
  const done = tasks.filter(t => t.done).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15
    }
  }, "All Tasks"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#6B7280",
      fontFamily: "DM Sans",
      fontWeight: 600
    }
  }, done, "/", tasks.length, " done")), tasks.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => toggle(t.id),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 0",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #F9FAFB",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: t.done ? "none" : "2px solid #D1D5DB",
      background: t.done ? "#10B981" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 1,
      flexShrink: 0
    }
  }, t.done && /*#__PURE__*/React.createElement(Icon, {
    name: "check2",
    size: 13,
    color: "#fff",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: t.done ? "#9CA3AF" : "#111827",
      textDecoration: t.done ? "line-through" : "none"
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9CA3AF",
      marginTop: 2
    }
  }, t.project, " \xB7 due ", t.due)), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, t.project.split(" ")[0])))));
};
const StaffMessages = () => {
  const [messages, setMessages] = useStateS([{
    id: "m1",
    sender: "Amara Osei",
    role: "admin",
    text: "Kwame — please prep the visual identity board for Friday review.",
    time: "9:14 AM"
  }, {
    id: "m2",
    sender: "Kwame Addo",
    role: "staff",
    text: "On it. Dropping the first pass into Files this afternoon.",
    time: "9:42 AM"
  }, {
    id: "m3",
    sender: "Sarah Mitchell",
    role: "client",
    text: "Looking forward to seeing it!",
    time: "10:05 AM"
  }]);
  const [text, setText] = useStateS("");
  const send = () => {
    if (!text.trim()) return;
    setMessages([...messages, {
      id: "n" + Date.now(),
      sender: "Kwame Addo",
      role: "staff",
      text,
      time: "Now"
    }]);
    setText("");
  };
  const ROLE_COLOR = {
    staff: {
      bg: "#3B82F6",
      fg: "#fff"
    },
    admin: {
      bg: "#F3F4F6",
      fg: "#111827"
    },
    client: {
      bg: "#FEF3C7",
      fg: "#92400E"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid #F3F4F6"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Syne",
      fontWeight: 800,
      fontSize: 15
    }
  }, "TechVision Co \xB7 Project Thread"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#6B7280"
    }
  }, "Amara Osei \xB7 Sarah Mitchell \xB7 Kwame Addo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, messages.map(m => {
    const c = ROLE_COLOR[m.role];
    const isMe = m.role === "staff";
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        justifyContent: isMe ? "flex-end" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "70%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: c.bg,
        color: c.fg,
        padding: "10px 14px",
        borderRadius: 16,
        fontSize: 13,
        lineHeight: 1.45
      }
    }, m.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#9CA3AF",
        marginTop: 4,
        textAlign: isMe ? "right" : "left"
      }
    }, m.sender, " \xB7 ", m.time)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid #F3F4F6",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Type a message\u2026",
    style: {
      flex: 1,
      background: "#F3F4F6",
      border: "none",
      borderRadius: 12,
      padding: "10px 14px",
      fontSize: 13,
      fontFamily: "DM Sans",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "blue",
    onClick: send,
    icon: "send"
  }, "Send"))));
};
const StaffPlaceholder = ({
  label,
  hint
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 24
  }
}, /*#__PURE__*/React.createElement(Card, {
  padding: 48
}, /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    color: "#6B7280"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "folder",
  size: 32,
  color: "#D1D5DB"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Syne",
    fontWeight: 800,
    fontSize: 16,
    color: "#111827",
    marginTop: 12
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    marginTop: 4
  }
}, hint))));
const StaffApp = () => {
  const [page, setPage] = useStateS("dashboard");
  const profile = {
    name: "Kwame Addo",
    initials: "KA",
    scheme: "blue"
  };
  const titles = {
    dashboard: ["Dashboard", "Welcome back, Kwame"],
    projects: ["My Projects", "Projects assigned to you"],
    tasks: ["My Tasks", "Today's deliverables"],
    messages: ["Messages", "Project conversations"],
    files: ["Files", "Files from assigned projects"]
  };
  const [title, subtitle] = titles[page];
  const screens = {
    dashboard: /*#__PURE__*/React.createElement(StaffDashboard, null),
    projects: /*#__PURE__*/React.createElement(StaffPlaceholder, {
      label: "My Projects",
      hint: "Progress cards for assigned projects."
    }),
    tasks: /*#__PURE__*/React.createElement(StaffTasks, null),
    messages: /*#__PURE__*/React.createElement(StaffMessages, null),
    files: /*#__PURE__*/React.createElement(StaffPlaceholder, {
      label: "Files",
      hint: "Files from assigned projects with Upload Deliverable CTA."
    })
  };
  return /*#__PURE__*/React.createElement(PortalShell, {
    role: "staff",
    profile: profile,
    page: page,
    setPage: setPage,
    title: title,
    subtitle: subtitle
  }, screens[page]);
};
window.StaffApp = StaffApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/staff/StaffApp.jsx", error: String((e && e.message) || e) }); }

// uploads/monnycreax-portal.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
// ─── MOCK DATA ────────────────────────────────────────────────────────────────

const USERS = {
  client: {
    id: "c1",
    name: "Sarah Mitchell",
    email: "sarah@techvision.co",
    role: "client",
    company: "TechVision Co",
    avatar: "SM"
  },
  admin: {
    id: "a1",
    name: "Amara Osei",
    email: "amara@monnycreax.com",
    role: "admin",
    avatar: "AO"
  },
  staff: {
    id: "s1",
    name: "Kwame Addo",
    email: "kwame@monnycreax.com",
    role: "staff",
    avatar: "KA"
  }
};
const PROJECTS = [{
  id: "p1",
  clientId: "c1",
  clientName: "TechVision Co",
  title: "Complete Clarity Package",
  package: "Complete Clarity",
  value: 750,
  status: "active",
  progress: 65,
  startDate: "2026-03-15",
  dueDate: "2026-05-10",
  assignees: ["a1", "s1"],
  milestones: [{
    id: "m1",
    title: "Discovery & Brief",
    status: "completed",
    date: "2026-03-22"
  }, {
    id: "m2",
    title: "Brand Strategy",
    status: "completed",
    date: "2026-04-05"
  }, {
    id: "m3",
    title: "Visual Identity",
    status: "in-progress",
    date: "2026-04-25"
  }, {
    id: "m4",
    title: "Brand Guidelines",
    status: "pending",
    date: "2026-05-02"
  }, {
    id: "m5",
    title: "Final Delivery",
    status: "pending",
    date: "2026-05-10"
  }],
  files: [{
    id: "f1",
    name: "Discovery_Brief_v1.pdf",
    size: "2.4 MB",
    uploadedBy: "TechVision Co",
    date: "2026-03-18",
    type: "brief"
  }, {
    id: "f2",
    name: "Brand_Strategy_Document.pdf",
    size: "5.1 MB",
    uploadedBy: "MonnyCreax",
    date: "2026-04-05",
    type: "deliverable"
  }, {
    id: "f3",
    name: "Visual_Identity_Concept_v1.pdf",
    size: "12.8 MB",
    uploadedBy: "MonnyCreax",
    date: "2026-04-20",
    type: "deliverable"
  }],
  updates: [{
    id: "u1",
    text: "Visual Identity Concept v1 uploaded for review",
    date: "2026-04-20",
    type: "file"
  }, {
    id: "u2",
    text: "Brand Strategy milestone completed and approved",
    date: "2026-04-05",
    type: "milestone"
  }, {
    id: "u3",
    text: "Discovery session completed successfully",
    date: "2026-03-22",
    type: "milestone"
  }],
  messages: [{
    id: "msg1",
    sender: "Amara Osei",
    role: "admin",
    text: "The Visual Identity concepts are ready for your review. Please share your feedback by Friday.",
    date: "2026-04-20",
    time: "10:32 AM"
  }, {
    id: "msg2",
    sender: "Sarah Mitchell",
    role: "client",
    text: "Looks great so far! I have a few questions about the colour palette. Can we schedule a call?",
    date: "2026-04-21",
    time: "2:15 PM"
  }, {
    id: "msg3",
    sender: "Amara Osei",
    role: "admin",
    text: "Absolutely! I'll send a calendar invite for Thursday at 3 PM.",
    date: "2026-04-21",
    time: "3:01 PM"
  }]
}, {
  id: "p2",
  clientId: "c2",
  clientName: "Apex Speakers",
  title: "Rapid Clarity Package",
  package: "Rapid Clarity",
  value: 500,
  status: "active",
  progress: 30,
  startDate: "2026-04-10",
  dueDate: "2026-05-15",
  assignees: ["s1"],
  milestones: [{
    id: "m1",
    title: "Discovery & Brief",
    status: "completed",
    date: "2026-04-15"
  }, {
    id: "m2",
    title: "Messaging Framework",
    status: "in-progress",
    date: "2026-04-28"
  }, {
    id: "m3",
    title: "Final Delivery",
    status: "pending",
    date: "2026-05-15"
  }],
  files: [{
    id: "f1",
    name: "Speaker_Brief.pdf",
    size: "1.8 MB",
    uploadedBy: "Apex Speakers",
    date: "2026-04-12",
    type: "brief"
  }],
  updates: [{
    id: "u1",
    text: "Discovery Brief received and reviewed",
    date: "2026-04-15",
    type: "milestone"
  }],
  messages: []
}, {
  id: "p3",
  clientId: "c3",
  clientName: "Nkosi Leadership",
  title: "Premium Clarity + Support",
  package: "Premium Clarity",
  value: 1200,
  status: "completed",
  progress: 100,
  startDate: "2026-01-10",
  dueDate: "2026-03-28",
  assignees: ["a1", "s1"],
  milestones: [{
    id: "m1",
    title: "Discovery & Brief",
    status: "completed",
    date: "2026-01-20"
  }, {
    id: "m2",
    title: "Brand Strategy",
    status: "completed",
    date: "2026-02-10"
  }, {
    id: "m3",
    title: "Visual Identity",
    status: "completed",
    date: "2026-03-01"
  }, {
    id: "m4",
    title: "Brand Guidelines",
    status: "completed",
    date: "2026-03-15"
  }, {
    id: "m5",
    title: "Final Delivery",
    status: "completed",
    date: "2026-03-28"
  }],
  files: [],
  updates: [],
  messages: []
}];
const CLIENTS = [{
  id: "c1",
  name: "Sarah Mitchell",
  company: "TechVision Co",
  email: "sarah@techvision.co",
  phone: "+1 555-0101",
  location: "Lagos, Nigeria",
  package: "Complete Clarity",
  status: "active",
  ltv: 750,
  joinDate: "2026-03-10",
  avatar: "SM"
}, {
  id: "c2",
  name: "David Okafor",
  company: "Apex Speakers",
  email: "david@apexspeakers.com",
  phone: "+1 555-0102",
  location: "Accra, Ghana",
  package: "Rapid Clarity",
  status: "active",
  ltv: 500,
  joinDate: "2026-04-08",
  avatar: "DO"
}, {
  id: "c3",
  name: "Zanele Nkosi",
  company: "Nkosi Leadership",
  email: "zanele@nkosileadership.co.za",
  phone: "+27 555-0103",
  location: "Johannesburg, SA",
  package: "Premium Clarity",
  status: "completed",
  ltv: 1200,
  joinDate: "2026-01-05",
  avatar: "ZN"
}, {
  id: "c4",
  name: "Marcus Tetteh",
  company: "Tetteh Ventures",
  email: "marcus@tettehventures.com",
  phone: "+44 555-0104",
  location: "London, UK",
  package: "Complete Clarity",
  status: "at-risk",
  ltv: 750,
  joinDate: "2026-02-20",
  avatar: "MT"
}];
const INVOICES = [{
  id: "inv1",
  clientId: "c1",
  clientName: "TechVision Co",
  project: "Complete Clarity Package",
  amount: 750,
  status: "paid",
  issued: "2026-03-15",
  due: "2026-03-29",
  paid: "2026-03-22"
}, {
  id: "inv2",
  clientId: "c2",
  clientName: "Apex Speakers",
  project: "Rapid Clarity Package",
  amount: 500,
  status: "pending",
  issued: "2026-04-10",
  due: "2026-04-24",
  paid: null
}, {
  id: "inv3",
  clientId: "c3",
  clientName: "Nkosi Leadership",
  project: "Premium Clarity + Support",
  amount: 1200,
  status: "paid",
  issued: "2026-01-10",
  due: "2026-01-24",
  paid: "2026-01-20"
}, {
  id: "inv4",
  clientId: "c4",
  clientName: "Tetteh Ventures",
  project: "Complete Clarity Package",
  amount: 750,
  status: "overdue",
  issued: "2026-02-20",
  due: "2026-03-06",
  paid: null
}];
const CRM_PIPELINE = [{
  id: "d1",
  company: "FutureEdge Inc",
  contact: "Priya Sharma",
  value: 1200,
  stage: "Lead",
  probability: 20,
  close: "2026-06-01",
  owner: "Amara Osei"
}, {
  id: "d2",
  company: "Beacon Advisory",
  contact: "Jomo Mwangi",
  value: 750,
  stage: "Qualified",
  probability: 40,
  close: "2026-05-20",
  owner: "Kwame Addo"
}, {
  id: "d3",
  company: "Orbit Creatives",
  contact: "Fatima Al-Rashid",
  value: 500,
  stage: "Proposal Sent",
  probability: 60,
  close: "2026-05-10",
  owner: "Amara Osei"
}, {
  id: "d4",
  company: "Summit Leaders",
  contact: "Bernard Asante",
  value: 1200,
  stage: "Contract Signed",
  probability: 90,
  close: "2026-05-05",
  owner: "Amara Osei"
}, {
  id: "d5",
  company: "Nexus Media",
  contact: "Chioma Obi",
  value: 750,
  stage: "Qualified",
  probability: 35,
  close: "2026-06-15",
  owner: "Kwame Addo"
}];
const TICKETS = [{
  id: "t1",
  clientId: "c1",
  clientName: "Sarah Mitchell",
  subject: "Question about colour palette revisions",
  status: "open",
  priority: "medium",
  created: "2026-04-22",
  updated: "2026-04-23"
}, {
  id: "t2",
  clientId: "c2",
  clientName: "David Okafor",
  subject: "File download issue on mobile",
  status: "resolved",
  priority: "high",
  created: "2026-04-18",
  updated: "2026-04-19"
}, {
  id: "t3",
  clientId: "c4",
  clientName: "Marcus Tetteh",
  subject: "Invoice discrepancy",
  status: "open",
  priority: "high",
  created: "2026-04-15",
  updated: "2026-04-15"
}];
const TEAM = [{
  id: "a1",
  name: "Amara Osei",
  email: "amara@monnycreax.com",
  role: "admin",
  title: "Founder & Brand Strategist",
  avatar: "AO",
  projects: 3
}, {
  id: "s1",
  name: "Kwame Addo",
  email: "kwame@monnycreax.com",
  role: "staff",
  title: "Brand Designer",
  avatar: "KA",
  projects: 2
}, {
  id: "s2",
  name: "Ama Boateng",
  email: "ama@monnycreax.com",
  role: "staff",
  title: "Copywriter",
  avatar: "AB",
  projects: 1
}];
const REVENUE_DATA = [{
  month: "Jan",
  collected: 1200,
  invoiced: 1200
}, {
  month: "Feb",
  collected: 750,
  invoiced: 750
}, {
  month: "Mar",
  collected: 750,
  invoiced: 750
}, {
  month: "Apr",
  collected: 250,
  invoiced: 1250
}, {
  month: "May",
  collected: 0,
  invoiced: 1950
}, {
  month: "Jun",
  collected: 0,
  invoiced: 0
}];
const PACKAGE_DATA = [{
  name: "Rapid ($500)",
  value: 1,
  color: "#f59e0b"
}, {
  name: "Complete ($750)",
  value: 2,
  color: "#8b5cf6"
}, {
  name: "Premium ($1200)",
  value: 1,
  color: "#10b981"
}];

// ─── UTILITY COMPONENTS ───────────────────────────────────────────────────────

const Av = ({
  init,
  size = "md",
  scheme = "amber"
}) => {
  const sz = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-12 h-12 text-base"
  }[size];
  const cl = {
    amber: "bg-amber-100 text-amber-700",
    purple: "bg-violet-100 text-violet-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-emerald-100 text-emerald-700",
    red: "bg-red-100 text-red-700"
  }[scheme];
  return /*#__PURE__*/React.createElement("div", {
    className: `${sz} ${cl} rounded-full flex items-center justify-center font-bold flex-shrink-0`
  }, init);
};
const Badge = ({
  s,
  children
}) => {
  const map = {
    active: "bg-emerald-100 text-emerald-700",
    completed: "bg-blue-100 text-blue-700",
    pending: "bg-amber-100 text-amber-700",
    "at-risk": "bg-red-100 text-red-700",
    paid: "bg-emerald-100 text-emerald-700",
    overdue: "bg-red-100 text-red-700",
    open: "bg-amber-100 text-amber-700",
    resolved: "bg-emerald-100 text-emerald-700",
    "in-progress": "bg-blue-100 text-blue-700",
    high: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-gray-100 text-gray-600",
    Lead: "bg-gray-100 text-gray-600",
    Qualified: "bg-blue-100 text-blue-700",
    "Proposal Sent": "bg-violet-100 text-violet-700",
    "Contract Signed": "bg-amber-100 text-amber-700",
    brief: "bg-gray-100 text-gray-600",
    deliverable: "bg-blue-100 text-blue-700",
    admin: "bg-amber-100 text-amber-700",
    staff: "bg-blue-100 text-blue-700"
  };
  const key = s || children;
  return /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-0.5 rounded-full text-xs font-semibold ${map[key] || "bg-gray-100 text-gray-600"}`
  }, children);
};
const Stat = ({
  icon: I,
  label,
  value,
  sub,
  color = "amber",
  change
}) => {
  const bg = {
    amber: "bg-amber-50 text-amber-600",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    purple: "bg-violet-50 text-violet-600",
    red: "bg-red-50 text-red-600"
  }[color];
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-10 h-10 rounded-xl ${bg} flex items-center justify-center`
  }, /*#__PURE__*/React.createElement(I, {
    size: 19
  })), change !== undefined && /*#__PURE__*/React.createElement("span", {
    className: `text-xs font-semibold ${change >= 0 ? "text-emerald-600" : "text-red-500"}`
  }, change >= 0 ? "+" : "", change, "%")), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-black text-gray-900 tracking-tight"
  }, value), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 mt-0.5"
  }, label), sub && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, sub));
};
const MilestoneStep = ({
  status
}) => {
  if (status === "completed") return /*#__PURE__*/React.createElement(CheckCircle, {
    size: 17,
    className: "text-emerald-500 flex-shrink-0"
  });
  if (status === "in-progress") return /*#__PURE__*/React.createElement(Clock, {
    size: 17,
    className: "text-amber-500 flex-shrink-0"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "w-[17px] h-[17px] rounded-full border-2 border-gray-300 flex-shrink-0"
  });
};
const ProgressBar = ({
  pct,
  color = "bg-amber-400",
  h = "h-2"
}) => /*#__PURE__*/React.createElement("div", {
  className: `${h} bg-gray-100 rounded-full overflow-hidden`
}, /*#__PURE__*/React.createElement("div", {
  className: `${h} ${color} rounded-full transition-all`,
  style: {
    width: `${pct}%`
  }
}));

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────

const NAV = {
  client: [{
    icon: LayoutDashboard,
    label: "Dashboard",
    page: "dashboard"
  }, {
    icon: Briefcase,
    label: "My Projects",
    page: "projects"
  }, {
    icon: FolderOpen,
    label: "Documents",
    page: "documents"
  }, {
    icon: MessageSquare,
    label: "Messages",
    page: "messages"
  }, {
    icon: CreditCard,
    label: "Invoices",
    page: "invoices"
  }, {
    icon: HelpCircle,
    label: "Support",
    page: "support"
  }],
  admin: [{
    icon: LayoutDashboard,
    label: "Dashboard",
    page: "dashboard"
  }, {
    icon: Users,
    label: "Clients",
    page: "clients"
  }, {
    icon: Target,
    label: "CRM Pipeline",
    page: "crm"
  }, {
    icon: Briefcase,
    label: "Projects",
    page: "projects"
  }, {
    icon: FileText,
    label: "Invoices",
    page: "invoices"
  }, {
    icon: BarChart2,
    label: "Reports",
    page: "reports"
  }, {
    icon: Shield,
    label: "Team & Access",
    page: "team"
  }, {
    icon: Settings,
    label: "Settings",
    page: "settings"
  }],
  staff: [{
    icon: LayoutDashboard,
    label: "Dashboard",
    page: "dashboard"
  }, {
    icon: Briefcase,
    label: "My Projects",
    page: "projects"
  }, {
    icon: CheckCircle,
    label: "My Tasks",
    page: "tasks"
  }, {
    icon: MessageSquare,
    label: "Messages",
    page: "messages"
  }, {
    icon: FolderOpen,
    label: "Files",
    page: "files"
  }]
};
const Sidebar = ({
  role,
  page,
  setPage,
  user,
  onLogout
}) => {
  const [collapsed, setCollapsed] = useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    className: `${collapsed ? "w-[62px]" : "w-[220px]"} bg-gray-950 text-white flex flex-col transition-all duration-200 flex-shrink-0 h-screen sticky top-0 overflow-hidden`
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-5 flex items-center gap-3 border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Star, {
    size: 15,
    className: "text-gray-950",
    fill: "currentColor"
  })), !collapsed && /*#__PURE__*/React.createElement("span", {
    className: "font-black text-lg tracking-tight text-white"
  }, "MonnyCreax")), !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement(Av, {
    init: user.avatar,
    size: "sm",
    scheme: "amber"
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-white truncate"
  }, user.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 capitalize"
  }, user.role)))), /*#__PURE__*/React.createElement("nav", {
    className: "flex-1 p-2 space-y-0.5 overflow-y-auto"
  }, NAV[role].map(({
    icon: I,
    label,
    page: p
  }) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setPage(p),
    className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${page === p ? "bg-amber-400 text-gray-950 font-bold" : "text-gray-400 hover:bg-white/5 hover:text-white"}`
  }, /*#__PURE__*/React.createElement(I, {
    size: 17,
    className: "flex-shrink-0"
  }), !collapsed && /*#__PURE__*/React.createElement("span", null, label)))), /*#__PURE__*/React.createElement("div", {
    className: "p-2 border-t border-white/10 space-y-0.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCollapsed(!collapsed),
    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-white/5 hover:text-gray-300 transition-all"
  }, /*#__PURE__*/React.createElement(Menu, {
    size: 17
  }), !collapsed && /*#__PURE__*/React.createElement("span", null, collapsed ? "Expand" : "Collapse")), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-red-900/40 hover:text-red-400 transition-all"
  }, /*#__PURE__*/React.createElement(LogOut, {
    size: 17
  }), !collapsed && /*#__PURE__*/React.createElement("span", null, "Log Out"))));
};

// ─── HEADER ───────────────────────────────────────────────────────────────────

const Header = ({
  title,
  subtitle,
  user
}) => {
  const [open, setOpen] = useState(false);
  const notes = [{
    text: "New message from Sarah Mitchell",
    time: "5m ago",
    dot: "bg-amber-400"
  }, {
    text: "Invoice INV-004 is overdue — Tetteh Ventures",
    time: "2h ago",
    dot: "bg-red-500"
  }, {
    text: "Visual Identity concept v1 uploaded",
    time: "1d ago",
    dot: "bg-blue-400"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-20"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-black text-gray-900 tracking-tight"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 mt-0.5"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "w-9 h-9 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors relative"
  }, /*#__PURE__*/React.createElement(Bell, {
    size: 17,
    className: "text-gray-600"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-12 w-80 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3 border-b border-gray-100 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-gray-800"
  }, "Notifications"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    className: "text-gray-400 hover:text-gray-600"
  }, /*#__PURE__*/React.createElement(X, {
    size: 15
  }))), notes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.dot}`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-700"
  }, n.text), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, n.time)))))), /*#__PURE__*/React.createElement(Av, {
    init: user.avatar,
    size: "md",
    scheme: "amber"
  })));
};

// ─── LOGIN ────────────────────────────────────────────────────────────────────

const Login = ({
  onLogin
}) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gray-950 flex items-center justify-center p-4",
    style: {
      backgroundImage: "radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(139,92,246,0.06) 0%, transparent 60%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-amber-400/30"
  }, /*#__PURE__*/React.createElement(Star, {
    size: 26,
    className: "text-gray-950",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl font-black text-white tracking-tight"
  }, "MonnyCreax"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 mt-2 text-sm"
  }, "Strategy before design. Clarity in delivery.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl p-8 shadow-2xl"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-black text-gray-900 mb-6"
  }, "Sign in to your portal"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com",
    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-gray-50"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-gray-50"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"
  }, "Quick Demo Access"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2"
  }, [{
    role: "client",
    label: "Client",
    name: "Sarah Mitchell",
    cl: "bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100"
  }, {
    role: "admin",
    label: "Admin",
    name: "Amara Osei",
    cl: "bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100"
  }, {
    role: "staff",
    label: "Staff",
    name: "Kwame Addo",
    cl: "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100"
  }].map(({
    role,
    label,
    name,
    cl
  }) => /*#__PURE__*/React.createElement("button", {
    key: role,
    onClick: () => onLogin(USERS[role]),
    className: `py-3 px-2 rounded-xl border text-center transition-all font-semibold ${cl}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-black"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] mt-0.5 opacity-70 truncate"
  }, name))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onLogin(USERS.client),
    className: "w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-950 font-black rounded-xl transition-colors tracking-tight text-sm"
  }, "Sign In"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 text-center mt-4"
  }, "Use demo buttons above to explore each role"))));
};

// ─── CLIENT SECTIONS ──────────────────────────────────────────────────────────

const ClientDash = ({
  user
}) => {
  const proj = PROJECTS.filter(p => p.clientId === "c1" && p.status === "active")[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: Briefcase,
    label: "Active Projects",
    value: "1",
    color: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: AlertCircle,
    label: "Pending Actions",
    value: "2",
    color: "red"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: MessageSquare,
    label: "Unread Messages",
    value: "1",
    color: "blue"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: HelpCircle,
    label: "Open Tickets",
    value: "1",
    color: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900"
  }, proj.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 mt-0.5"
  }, "Due ", proj.dueDate, " \u2022 Started ", proj.startDate)), /*#__PURE__*/React.createElement(Badge, {
    s: "active"
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Overall Progress"), /*#__PURE__*/React.createElement("span", {
    className: "font-black text-amber-600"
  }, proj.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: proj.progress
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, proj.milestones.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: `flex items-center gap-3 p-3 rounded-xl ${m.status === "in-progress" ? "bg-amber-50 border border-amber-200" : "bg-gray-50"}`
  }, /*#__PURE__*/React.createElement(MilestoneStep, {
    status: m.status
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-sm flex-1 ${m.status === "completed" ? "line-through text-gray-400" : m.status === "in-progress" ? "font-semibold text-gray-900" : "text-gray-500"}`
  }, m.title), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, m.date), m.status === "in-progress" && /*#__PURE__*/React.createElement(Badge, {
    s: "in-progress"
  }, "In Progress"))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-3"
  }, "Quick Actions"), [{
    icon: MessageSquare,
    label: "Message the team"
  }, {
    icon: Download,
    label: "Download latest file"
  }, {
    icon: CreditCard,
    label: "View invoice"
  }, {
    icon: HelpCircle,
    label: "Open support ticket"
  }].map(({
    icon: I,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    key: label,
    className: "w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-amber-50 text-sm text-gray-600 hover:text-amber-700 transition-colors text-left group"
  }, /*#__PURE__*/React.createElement(I, {
    size: 15,
    className: "text-amber-500"
  }), label, /*#__PURE__*/React.createElement(ChevronRight, {
    size: 13,
    className: "ml-auto text-gray-300 group-hover:text-amber-400"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-3"
  }, "Recent Activity"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, proj.updates.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.id,
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-700"
  }, u.text), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, u.date)))))))));
};
const ClientProjects = () => {
  const [sel, setSel] = useState(null);
  const [tab, setTab] = useState("milestones");
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState(PROJECTS[0].messages);
  const projs = PROJECTS.filter(p => p.clientId === "c1");
  if (sel) {
    return /*#__PURE__*/React.createElement("div", {
      className: "p-6 space-y-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 text-sm"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setSel(null);
        setTab("milestones");
      },
      className: "text-gray-400 hover:text-amber-600 font-medium"
    }, "My Projects"), /*#__PURE__*/React.createElement(ChevronRight, {
      size: 13,
      className: "text-gray-300"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-900 font-semibold"
    }, sel.title)), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between mb-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-black text-gray-900"
    }, sel.title), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500 mt-1"
    }, sel.startDate, " \u2192 ", sel.dueDate, " \u2022 $", sel.value)), /*#__PURE__*/React.createElement(Badge, {
      s: sel.status
    }, sel.status)), /*#__PURE__*/React.createElement("div", {
      className: "mb-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-sm mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-gray-500"
    }, "Progress"), /*#__PURE__*/React.createElement("span", {
      className: "font-black text-amber-600"
    }, sel.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
      pct: sel.progress,
      h: "h-3"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex border-b border-gray-100 mb-5 gap-1"
    }, ["milestones", "files", "updates", "messages"].map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(t),
      className: `px-4 py-2.5 text-sm font-bold capitalize border-b-2 transition-colors ${tab === t ? "border-amber-400 text-amber-600" : "border-transparent text-gray-400 hover:text-gray-700"}`
    }, t))), tab === "milestones" && /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, sel.milestones.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.id,
      className: `flex items-center gap-4 p-4 rounded-xl ${m.status === "in-progress" ? "bg-amber-50 border border-amber-200" : "bg-gray-50"}`
    }, /*#__PURE__*/React.createElement(MilestoneStep, {
      status: m.status
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("p", {
      className: `text-sm font-semibold ${m.status === "completed" ? "line-through text-gray-400" : "text-gray-900"}`
    }, m.title), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, m.date)), /*#__PURE__*/React.createElement(Badge, {
      s: m.status
    }, m.status === "in-progress" ? "In Progress" : m.status)))), tab === "files" && /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, sel.files.map(f => /*#__PURE__*/React.createElement("div", {
      key: f.id,
      className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0"
    }, /*#__PURE__*/React.createElement(FileText, {
      size: 18,
      className: "text-red-400"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-900 truncate"
    }, f.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mt-0.5"
    }, f.size, " \u2022 ", f.uploadedBy, " \u2022 ", f.date)), /*#__PURE__*/React.createElement(Badge, {
      s: f.type
    }, f.type), /*#__PURE__*/React.createElement("button", {
      className: "w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 transition-colors"
    }, /*#__PURE__*/React.createElement(Download, {
      size: 13,
      className: "text-gray-600"
    })))), /*#__PURE__*/React.createElement("button", {
      className: "w-full p-4 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-amber-300 hover:text-amber-600 transition-colors flex items-center justify-center gap-2 font-medium"
    }, /*#__PURE__*/React.createElement(Upload, {
      size: 15
    }), " Upload brief or asset")), tab === "updates" && /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, sel.updates.map(u => /*#__PURE__*/React.createElement("div", {
      key: u.id,
      className: "flex gap-4 p-4 bg-gray-50 rounded-xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0"
    }, u.type === "file" ? /*#__PURE__*/React.createElement(Upload, {
      size: 15,
      className: "text-amber-600"
    }) : /*#__PURE__*/React.createElement(CheckCircle, {
      size: 15,
      className: "text-amber-600"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-semibold text-gray-900"
    }, u.text), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-1"
    }, u.date))))), tab === "messages" && /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, msgs.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.id,
      className: `flex gap-3 ${m.role === "client" ? "flex-row-reverse" : ""}`
    }, /*#__PURE__*/React.createElement(Av, {
      init: m.sender.split(" ").map(x => x[0]).join(""),
      size: "sm",
      scheme: m.role === "client" ? "amber" : "purple"
    }), /*#__PURE__*/React.createElement("div", {
      className: `max-w-xs p-3.5 rounded-2xl text-sm ${m.role === "client" ? "bg-amber-400 text-gray-950" : "bg-gray-100 text-gray-800"}`
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-xs mb-1 opacity-70"
    }, m.sender), /*#__PURE__*/React.createElement("p", null, m.text), /*#__PURE__*/React.createElement("p", {
      className: `text-xs mt-1.5 ${m.role === "client" ? "text-amber-700" : "text-gray-400"}`
    }, m.time)))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3 mt-2"
    }, /*#__PURE__*/React.createElement("input", {
      value: msg,
      onChange: e => setMsg(e.target.value),
      placeholder: "Write a message\u2026",
      className: "flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50",
      onKeyDown: e => {
        if (e.key === "Enter" && msg.trim()) {
          setMsgs(p => [...p, {
            id: Date.now(),
            sender: "Sarah Mitchell",
            role: "client",
            text: msg.trim(),
            date: "2026-04-28",
            time: "Now"
          }]);
          setMsg("");
        }
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (msg.trim()) {
          setMsgs(p => [...p, {
            id: Date.now(),
            sender: "Sarah Mitchell",
            role: "client",
            text: msg.trim(),
            date: "2026-04-28",
            time: "Now"
          }]);
          setMsg("");
        }
      },
      className: "px-4 py-2.5 bg-amber-400 text-gray-950 rounded-xl hover:bg-amber-500 transition-colors"
    }, /*#__PURE__*/React.createElement(Send, {
      size: 15
    }))))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-4"
  }, projs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => {
      setSel(p);
      setTab("milestones");
    },
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:border-amber-300 cursor-pointer transition-all hover:shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 mt-0.5"
  }, "Package: ", p.package, " \u2022 Value: $", p.value, " \u2022 Due ", p.dueDate)), /*#__PURE__*/React.createElement(Badge, {
    s: p.status
  }, p.status)), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: p.progress
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-xs text-gray-400 mt-2"
  }, /*#__PURE__*/React.createElement("span", null, p.milestones.filter(m => m.status === "completed").length, "/", p.milestones.length, " milestones completed"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-amber-600"
  }, p.progress, "%")))));
};
const ClientDocuments = () => {
  const files = PROJECTS.filter(p => p.clientId === "c1").flatMap(p => p.files.map(f => ({
    ...f,
    projectName: p.title
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900"
  }, "All Documents"), /*#__PURE__*/React.createElement("button", {
    className: "flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors"
  }, /*#__PURE__*/React.createElement(Upload, {
    size: 14
  }), " Upload File")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, files.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement(FileText, {
    size: 18,
    className: "text-red-400"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-900 truncate"
  }, f.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 mt-0.5"
  }, f.projectName, " \u2022 ", f.size, " \u2022 ", f.date)), /*#__PURE__*/React.createElement(Badge, {
    s: f.type
  }, f.type), /*#__PURE__*/React.createElement("button", {
    className: "w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 transition-colors"
  }, /*#__PURE__*/React.createElement(Download, {
    size: 13,
    className: "text-gray-600"
  })))))));
};
const ClientMessages = () => {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState(PROJECTS[0].messages);
  const send = () => {
    if (msg.trim()) {
      setMsgs(p => [...p, {
        id: Date.now(),
        sender: "Sarah Mitchell",
        role: "client",
        text: msg.trim(),
        date: "Today",
        time: "Now"
      }]);
      setMsg("");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col",
    style: {
      height: "calc(100vh - 180px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-black text-gray-900"
  }, "Complete Clarity Package"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Project thread with MonnyCreax team")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-5 space-y-4 overflow-y-auto"
  }, msgs.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: `flex gap-3 ${m.role === "client" ? "flex-row-reverse" : ""}`
  }, /*#__PURE__*/React.createElement(Av, {
    init: m.sender.split(" ").map(x => x[0]).join(""),
    size: "sm",
    scheme: m.role === "client" ? "amber" : "purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: `max-w-xs p-3.5 rounded-2xl text-sm ${m.role === "client" ? "bg-amber-400 text-gray-950 ml-auto" : "bg-gray-100 text-gray-800"}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xs mb-1 opacity-60"
  }, m.sender), /*#__PURE__*/React.createElement("p", null, m.text), /*#__PURE__*/React.createElement("p", {
    className: `text-xs mt-1.5 ${m.role === "client" ? "text-amber-700" : "text-gray-400"}`
  }, m.time))))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-t border-gray-100 flex gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    value: msg,
    onChange: e => setMsg(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Write a message\u2026",
    className: "flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    className: "px-4 py-2.5 bg-amber-400 text-gray-950 rounded-xl hover:bg-amber-500 transition-colors"
  }, /*#__PURE__*/React.createElement(Send, {
    size: 15
  })))));
};
const ClientInvoices = () => /*#__PURE__*/React.createElement("div", {
  className: "p-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-5"
}, "My Invoices"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-3"
}, INVOICES.filter(i => i.clientId === "c1").map(inv => /*#__PURE__*/React.createElement("div", {
  key: inv.id,
  className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0"
}, /*#__PURE__*/React.createElement(DollarSign, {
  size: 18,
  className: "text-emerald-500"
})), /*#__PURE__*/React.createElement("div", {
  className: "flex-1"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-sm font-black text-gray-900"
}, inv.project), /*#__PURE__*/React.createElement("p", {
  className: "text-xs text-gray-500 mt-0.5"
}, "Issued ", inv.issued, " \u2022 Due ", inv.due, inv.paid ? ` • Paid ${inv.paid}` : "")), /*#__PURE__*/React.createElement("div", {
  className: "text-right mr-2"
}, /*#__PURE__*/React.createElement("p", {
  className: "font-black text-gray-900"
}, "$", inv.amount.toLocaleString()), /*#__PURE__*/React.createElement(Badge, {
  s: inv.status
}, inv.status)), inv.status === "pending" && /*#__PURE__*/React.createElement("button", {
  className: "px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors"
}, "Pay Now"))))));
const ClientSupport = () => {
  const [show, setShow] = useState(false);
  const [subj, setSubj] = useState("");
  const [body, setBody] = useState("");
  const [tickets, setTickets] = useState(TICKETS.filter(t => t.clientId === "c1"));
  const submit = () => {
    if (subj.trim() && body.trim()) {
      setTickets(p => [{
        id: Date.now(),
        clientId: "c1",
        clientName: "Sarah Mitchell",
        subject: subj.trim(),
        status: "open",
        priority: "medium",
        created: "2026-04-28",
        updated: "2026-04-28"
      }, ...p]);
      setSubj("");
      setBody("");
      setShow(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(!show),
    className: "flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 14
  }), " New Ticket")), show && /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "Open a Support Ticket"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("input", {
    value: subj,
    onChange: e => setSubj(e.target.value),
    placeholder: "Subject",
    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: body,
    onChange: e => setBody(e.target.value),
    rows: 4,
    placeholder: "Describe your issue\u2026",
    className: "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50 resize-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    className: "px-6 py-2.5 bg-amber-400 text-gray-950 rounded-xl text-sm font-black hover:bg-amber-500 transition-colors"
  }, "Submit Ticket"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(false),
    className: "px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
  }, "Cancel")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "Your Tickets"), tickets.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400"
  }, "No tickets yet.") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, tickets.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${t.status === "open" ? "bg-amber-400" : "bg-emerald-500"}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-900"
  }, t.subject), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Created ", t.created, " \u2022 Updated ", t.updated)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Badge, {
    s: t.priority
  }, t.priority), /*#__PURE__*/React.createElement(Badge, {
    s: t.status
  }, t.status)))))));
};

// ─── ADMIN SECTIONS ───────────────────────────────────────────────────────────

const AdminDash = () => /*#__PURE__*/React.createElement("div", {
  className: "p-6 space-y-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-2 lg:grid-cols-4 gap-4"
}, /*#__PURE__*/React.createElement(Stat, {
  icon: Activity,
  label: "Active Projects",
  value: "2",
  change: 15,
  color: "amber"
}), /*#__PURE__*/React.createElement(Stat, {
  icon: DollarSign,
  label: "Revenue This Month",
  value: "$500",
  change: -12,
  color: "green"
}), /*#__PURE__*/React.createElement(Stat, {
  icon: FileText,
  label: "Pending Invoices",
  value: "2",
  color: "red"
}), /*#__PURE__*/React.createElement(Stat, {
  icon: HelpCircle,
  label: "Open Tickets",
  value: "2",
  color: "purple"
})), /*#__PURE__*/React.createElement("div", {
  className: "grid lg:grid-cols-3 gap-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-5"
}, "Revenue vs Invoiced"), /*#__PURE__*/React.createElement(ResponsiveContainer, {
  width: "100%",
  height: 220
}, /*#__PURE__*/React.createElement(AreaChart, {
  data: REVENUE_DATA
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "g1",
  x1: "0",
  y1: "0",
  x2: "0",
  y2: "1"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "5%",
  stopColor: "#f59e0b",
  stopOpacity: 0.25
}), /*#__PURE__*/React.createElement("stop", {
  offset: "95%",
  stopColor: "#f59e0b",
  stopOpacity: 0
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "g2",
  x1: "0",
  y1: "0",
  x2: "0",
  y2: "1"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "5%",
  stopColor: "#8b5cf6",
  stopOpacity: 0.15
}), /*#__PURE__*/React.createElement("stop", {
  offset: "95%",
  stopColor: "#8b5cf6",
  stopOpacity: 0
}))), /*#__PURE__*/React.createElement(CartesianGrid, {
  strokeDasharray: "3 3",
  stroke: "#f3f4f6"
}), /*#__PURE__*/React.createElement(XAxis, {
  dataKey: "month",
  tick: {
    fontSize: 11
  }
}), /*#__PURE__*/React.createElement(YAxis, {
  tick: {
    fontSize: 11
  }
}), /*#__PURE__*/React.createElement(Tooltip, {
  formatter: v => `$${v}`
}), /*#__PURE__*/React.createElement(Area, {
  type: "monotone",
  dataKey: "collected",
  stroke: "#f59e0b",
  fill: "url(#g1)",
  strokeWidth: 2.5,
  name: "Collected"
}), /*#__PURE__*/React.createElement(Area, {
  type: "monotone",
  dataKey: "invoiced",
  stroke: "#8b5cf6",
  fill: "url(#g2)",
  strokeWidth: 2,
  name: "Invoiced",
  strokeDasharray: "5 3"
}), /*#__PURE__*/React.createElement(Legend, null)))), /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-4"
}, "Package Mix"), /*#__PURE__*/React.createElement(ResponsiveContainer, {
  width: "100%",
  height: 155
}, /*#__PURE__*/React.createElement(RPieChart, null, /*#__PURE__*/React.createElement(Pie, {
  data: PACKAGE_DATA,
  cx: "50%",
  cy: "50%",
  innerRadius: 42,
  outerRadius: 65,
  dataKey: "value",
  paddingAngle: 3
}, PACKAGE_DATA.map((e, i) => /*#__PURE__*/React.createElement(Cell, {
  key: i,
  fill: e.color
}))), /*#__PURE__*/React.createElement(Tooltip, null))), /*#__PURE__*/React.createElement("div", {
  className: "space-y-2 mt-2"
}, PACKAGE_DATA.map(d => /*#__PURE__*/React.createElement("div", {
  key: d.name,
  className: "flex items-center gap-2 text-xs"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-3 h-3 rounded-full flex-shrink-0",
  style: {
    backgroundColor: d.color
  }
}), /*#__PURE__*/React.createElement("span", {
  className: "text-gray-600 flex-1"
}, d.name), /*#__PURE__*/React.createElement("span", {
  className: "font-black text-gray-900"
}, d.value)))))), /*#__PURE__*/React.createElement("div", {
  className: "grid lg:grid-cols-2 gap-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-4"
}, "\u26A0 Alerts"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-3"
}, [{
  text: "Invoice overdue: Tetteh Ventures ($750)",
  type: "error"
}, {
  text: "Pending invoice: Apex Speakers ($500) due Apr 24",
  type: "warning"
}, {
  text: "High-priority ticket: Marcus Tetteh open",
  type: "error"
}, {
  text: "Visual Identity awaiting client feedback",
  type: "warning"
}].map((a, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: `flex items-start gap-3 p-3 rounded-xl ${a.type === "error" ? "bg-red-50" : "bg-amber-50"}`
}, /*#__PURE__*/React.createElement(AlertCircle, {
  size: 15,
  className: `${a.type === "error" ? "text-red-500" : "text-amber-500"} mt-0.5 flex-shrink-0`
}), /*#__PURE__*/React.createElement("p", {
  className: "text-sm text-gray-700"
}, a.text))))), /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-4"
}, "Team Workload"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-4"
}, TEAM.map(m => /*#__PURE__*/React.createElement("div", {
  key: m.id,
  className: "flex items-center gap-3"
}, /*#__PURE__*/React.createElement(Av, {
  init: m.avatar,
  size: "sm",
  scheme: "purple"
}), /*#__PURE__*/React.createElement("div", {
  className: "flex-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex justify-between mb-1.5"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-sm font-semibold text-gray-900"
}, m.name), /*#__PURE__*/React.createElement("p", {
  className: "text-xs text-gray-400"
}, m.projects, " projects")), /*#__PURE__*/React.createElement(ProgressBar, {
  pct: m.projects / 4 * 100,
  color: m.projects >= 3 ? "bg-red-400" : m.projects === 2 ? "bg-amber-400" : "bg-emerald-400"
}))))))));
const AdminClients = () => {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);
  const filtered = CLIENTS.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.company.toLowerCase().includes(q.toLowerCase()));
  if (sel) return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel(null),
    className: "text-gray-400 hover:text-amber-600 font-medium"
  }, "Clients"), /*#__PURE__*/React.createElement(ChevronRight, {
    size: 13,
    className: "text-gray-300"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-900 font-semibold"
  }, sel.name)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-5 mb-6 pb-6 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement(Av, {
    init: sel.avatar,
    size: "lg",
    scheme: "purple"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-black text-gray-900"
  }, sel.name), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm mt-0.5"
  }, sel.company)), /*#__PURE__*/React.createElement(Badge, {
    s: sel.status
  }, sel.status)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 mt-4"
  }, [{
    I: Mail,
    v: sel.email
  }, {
    I: Phone,
    v: sel.phone
  }, {
    I: MapPin,
    v: sel.location
  }, {
    I: Package,
    v: sel.package
  }, {
    I: Calendar,
    v: `Joined ${sel.joinDate}`
  }, {
    I: DollarSign,
    v: `LTV: $${sel.ltv}`
  }].map(({
    I,
    v
  }) => /*#__PURE__*/React.createElement("div", {
    key: v,
    className: "flex items-center gap-2 text-sm text-gray-600"
  }, /*#__PURE__*/React.createElement(I, {
    size: 13,
    className: "text-gray-400 flex-shrink-0"
  }), " ", v))))), /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-3"
  }, "Project History"), PROJECTS.filter(p => p.clientId === sel.id).length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400"
  }, "No projects yet.") : PROJECTS.filter(p => p.clientId === sel.id).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-900"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, p.startDate, " \u2192 ", p.dueDate)), /*#__PURE__*/React.createElement("p", {
    className: "font-black text-gray-900"
  }, "$", p.value), /*#__PURE__*/React.createElement(Badge, {
    s: p.status
  }, p.status)))));
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 relative"
  }, /*#__PURE__*/React.createElement(Search, {
    size: 15,
    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search clients\u2026",
    className: "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50"
  })), /*#__PURE__*/React.createElement("button", {
    className: "px-4 py-2.5 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 14
  }), " Add Client")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("tr", null, ["Client", "Package", "Status", "LTV", "Joined", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "px-5 py-3.5 text-left text-xs font-black text-gray-400 uppercase tracking-widest"
  }, h)))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, filtered.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.id,
    onClick: () => setSel(c),
    className: "hover:bg-amber-50/50 cursor-pointer transition-colors"
  }, /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Av, {
    init: c.avatar,
    size: "sm",
    scheme: "purple"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-gray-900"
  }, c.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, c.company)))), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4 text-sm text-gray-600"
  }, c.package), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4"
  }, /*#__PURE__*/React.createElement(Badge, {
    s: c.status
  }, c.status)), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4 text-sm font-black text-gray-900"
  }, "$", c.ltv), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4 text-sm text-gray-500"
  }, c.joinDate), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4"
  }, /*#__PURE__*/React.createElement(ChevronRight, {
    size: 15,
    className: "text-gray-300"
  }))))))));
};
const AdminCRM = () => {
  const stages = ["Lead", "Qualified", "Proposal Sent", "Contract Signed"];
  const projected = CRM_PIPELINE.reduce((s, d) => s + d.value * d.probability / 100, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-2.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 font-bold uppercase tracking-widest"
  }, "Total Pipeline"), /*#__PURE__*/React.createElement("p", {
    className: "font-black text-gray-900"
  }, "$", CRM_PIPELINE.reduce((s, d) => s + d.value, 0).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-2.5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 font-bold uppercase tracking-widest"
  }, "Weighted Forecast"), /*#__PURE__*/React.createElement("p", {
    className: "font-black text-amber-600"
  }, "$", projected.toFixed(0)))), /*#__PURE__*/React.createElement("button", {
    className: "flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 14
  }), " Add Deal")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-4"
  }, stages.map(stage => {
    const deals = CRM_PIPELINE.filter(d => d.stage === stage);
    const stageVal = deals.reduce((s, d) => s + d.value, 0);
    return /*#__PURE__*/React.createElement("div", {
      key: stage
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-black text-gray-700"
    }, stage), /*#__PURE__*/React.createElement("span", {
      className: "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold"
    }, deals.length)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mb-3 font-semibold"
    }, "$", stageVal.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, deals.map(d => /*#__PURE__*/React.createElement("div", {
      key: d.id,
      className: "bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-amber-300 transition-all cursor-pointer hover:shadow-md"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm font-black text-gray-900"
    }, d.company), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 mt-0.5"
    }, d.contact), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-lg font-black text-amber-600"
    }, "$", d.value.toLocaleString()), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-gray-500"
    }, d.probability, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
      pct: d.probability,
      h: "h-1.5"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-400"
    }, d.close), /*#__PURE__*/React.createElement("span", {
      className: "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-semibold"
    }, d.owner.split(" ")[0])))), /*#__PURE__*/React.createElement("div", {
      className: "p-3 border-2 border-dashed border-gray-200 rounded-2xl text-center hover:border-amber-300 cursor-pointer transition-colors"
    }, /*#__PURE__*/React.createElement(Plus, {
      size: 14,
      className: "text-gray-300 mx-auto"
    }))));
  })));
};
const AdminProjects = () => {
  const [filter, setFilter] = useState("all");
  const [showNew, setShowNew] = useState(false);
  const shown = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 flex-wrap"
  }, ["all", "active", "completed"].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    className: `px-4 py-2 rounded-xl text-sm font-bold capitalize transition-colors ${filter === f ? "bg-amber-400 text-gray-950" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`
  }, f === "all" ? "All Projects" : f)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowNew(!showNew),
    className: "ml-auto px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 14
  }), " New Project")), showNew && /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-amber-200 shadow-sm p-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "Create New Project"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, ["Project Title", "Client", "Package", "Value", "Start Date", "Due Date"].map(f => /*#__PURE__*/React.createElement("div", {
    key: f
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5 block"
  }, f), /*#__PURE__*/React.createElement("input", {
    className: "w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "px-5 py-2.5 bg-amber-400 text-gray-950 rounded-xl text-sm font-black hover:bg-amber-500 transition-colors"
  }, "Create Project"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowNew(false),
    className: "px-5 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
  }, "Cancel"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("tr", null, ["Project", "Client", "Package", "Progress", "Due", "Status", ""].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "px-5 py-3.5 text-left text-xs font-black text-gray-400 uppercase tracking-widest"
  }, h)))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, shown.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.id,
    className: "hover:bg-amber-50/40 transition-colors"
  }, /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-gray-900"
  }, p.title)), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4 text-sm text-gray-500"
  }, p.clientName), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4 text-sm text-gray-500"
  }, p.package), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 w-28"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: p.progress
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-gray-500 w-8"
  }, p.progress, "%"))), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4 text-sm text-gray-500"
  }, p.dueDate), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4"
  }, /*#__PURE__*/React.createElement(Badge, {
    s: p.status
  }, p.status)), /*#__PURE__*/React.createElement("td", {
    className: "px-5 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    className: "w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
  }, /*#__PURE__*/React.createElement(Eye, {
    size: 12
  })), /*#__PURE__*/React.createElement("button", {
    className: "w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
  }, /*#__PURE__*/React.createElement(Edit, {
    size: 12
  }))))))))));
};
const AdminInvoices = () => {
  const [inv, setInv] = useState(INVOICES);
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: DollarSign,
    label: "Total Invoiced",
    value: "$3,200",
    color: "green"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: Clock,
    label: "Pending",
    value: "$500",
    color: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: AlertCircle,
    label: "Overdue",
    value: "$750",
    color: "red"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900"
  }, "All Invoices"), /*#__PURE__*/React.createElement("button", {
    className: "flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 14
  }), " Create Invoice")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, inv.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement(FileText, {
    size: 18,
    className: "text-emerald-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-gray-900"
  }, i.clientName), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, i.project, " \u2022 Issued ", i.issued, " \u2022 Due ", i.due)), /*#__PURE__*/React.createElement("p", {
    className: "font-black text-gray-900 mr-2"
  }, "$", i.amount.toLocaleString()), /*#__PURE__*/React.createElement(Badge, {
    s: i.status
  }, i.status), /*#__PURE__*/React.createElement("button", {
    className: "w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors ml-2"
  }, /*#__PURE__*/React.createElement(MoreVertical, {
    size: 13,
    className: "text-gray-400"
  })))))));
};
const AdminReports = () => {
  const perfData = [{
    pkg: "Rapid",
    onTime: 90
  }, {
    pkg: "Complete",
    onTime: 75
  }, {
    pkg: "Premium",
    onTime: 100
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: DollarSign,
    label: "Revenue YTD",
    value: "$2,950",
    change: 22,
    color: "green"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: Briefcase,
    label: "Projects Delivered",
    value: "1",
    color: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: Users,
    label: "Active Clients",
    value: "3",
    change: 50,
    color: "purple"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: Target,
    label: "On-Time Rate",
    value: "88%",
    color: "blue"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "Monthly Revenue"), /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: 200
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: REVENUE_DATA
  }, /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#f3f4f6"
  }), /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "month",
    tick: {
      fontSize: 11
    }
  }), /*#__PURE__*/React.createElement(YAxis, {
    tick: {
      fontSize: 11
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    formatter: v => `$${v}`
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "collected",
    fill: "#f59e0b",
    radius: [5, 5, 0, 0],
    name: "Collected"
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "invoiced",
    fill: "#8b5cf6",
    radius: [5, 5, 0, 0],
    name: "Invoiced",
    opacity: 0.55
  }), /*#__PURE__*/React.createElement(Legend, null)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "On-Time % by Package"), /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: 200
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: perfData,
    layout: "vertical"
  }, /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#f3f4f6"
  }), /*#__PURE__*/React.createElement(XAxis, {
    type: "number",
    domain: [0, 100],
    tick: {
      fontSize: 11
    }
  }), /*#__PURE__*/React.createElement(YAxis, {
    dataKey: "pkg",
    type: "category",
    tick: {
      fontSize: 11
    },
    width: 60
  }), /*#__PURE__*/React.createElement(Tooltip, {
    formatter: v => `${v}%`
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "onTime",
    fill: "#10b981",
    radius: [0, 5, 5, 0],
    name: "On-Time %"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "Client Health Overview"), /*#__PURE__*/React.createElement("table", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("tr", null, ["Client", "Package", "LTV", "Tickets", "Invoice Status", "Health"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "pb-3 text-left text-xs font-black text-gray-400 uppercase tracking-widest"
  }, h)))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, CLIENTS.map(c => {
    const inv = INVOICES.find(i => i.clientId === c.id);
    const tix = TICKETS.filter(t => t.clientId === c.id);
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "py-3.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement(Av, {
      init: c.avatar,
      size: "sm",
      scheme: "purple"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-semibold text-gray-900"
    }, c.name))), /*#__PURE__*/React.createElement("td", {
      className: "py-3.5 text-sm text-gray-500"
    }, c.package), /*#__PURE__*/React.createElement("td", {
      className: "py-3.5 text-sm font-black text-gray-900"
    }, "$", c.ltv), /*#__PURE__*/React.createElement("td", {
      className: "py-3.5 text-sm text-gray-500"
    }, tix.length), /*#__PURE__*/React.createElement("td", {
      className: "py-3.5"
    }, inv ? /*#__PURE__*/React.createElement(Badge, {
      s: inv.status
    }, inv.status) : /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-400"
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      className: "py-3.5"
    }, /*#__PURE__*/React.createElement(Badge, {
      s: c.status
    }, c.status)));
  })))));
};
const AdminTeam = () => /*#__PURE__*/React.createElement("div", {
  className: "p-6 space-y-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between mb-5"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900"
}, "Team Members"), /*#__PURE__*/React.createElement("button", {
  className: "flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors"
}, /*#__PURE__*/React.createElement(Plus, {
  size: 14
}), " Invite Member")), /*#__PURE__*/React.createElement("div", {
  className: "space-y-3"
}, TEAM.map(m => /*#__PURE__*/React.createElement("div", {
  key: m.id,
  className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
}, /*#__PURE__*/React.createElement(Av, {
  init: m.avatar,
  size: "md",
  scheme: m.role === "admin" ? "amber" : "blue"
}), /*#__PURE__*/React.createElement("div", {
  className: "flex-1"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-sm font-black text-gray-900"
}, m.name), /*#__PURE__*/React.createElement("p", {
  className: "text-xs text-gray-400"
}, m.title, " \u2022 ", m.email)), /*#__PURE__*/React.createElement(Badge, {
  s: m.role
}, m.role), /*#__PURE__*/React.createElement("span", {
  className: "text-xs text-gray-400"
}, m.projects, " projects"), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-1.5"
}, /*#__PURE__*/React.createElement("button", {
  className: "w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
}, /*#__PURE__*/React.createElement(Edit, {
  size: 13
})), /*#__PURE__*/React.createElement("button", {
  className: "w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-colors"
}, /*#__PURE__*/React.createElement(Trash2, {
  size: 13,
  className: "text-red-400"
}))))))), /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-4"
}, "Permission Matrix"), /*#__PURE__*/React.createElement("div", {
  className: "overflow-x-auto"
}, /*#__PURE__*/React.createElement("table", {
  className: "w-full"
}, /*#__PURE__*/React.createElement("thead", {
  className: "border-b border-gray-100"
}, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
  className: "pb-3 text-left text-xs font-black text-gray-400 uppercase tracking-widest"
}, "Feature"), ["Admin", "Staff", "Client"].map(r => /*#__PURE__*/React.createElement("th", {
  key: r,
  className: "pb-3 text-center text-xs font-black text-gray-400 uppercase tracking-widest"
}, r)))), /*#__PURE__*/React.createElement("tbody", {
  className: "divide-y divide-gray-50"
}, [["Full Clients Directory", true, false, false], ["CRM Pipeline", true, false, false], ["Financial Reports", true, false, false], ["Team Management", true, false, false], ["All Projects View", true, true, false], ["Assigned Projects Only", true, true, true], ["File Upload", true, true, true], ["Client Messaging", true, true, true], ["Own Invoices", true, false, true], ["Support Tickets", true, true, true]].map(([feature, ...perms]) => /*#__PURE__*/React.createElement("tr", {
  key: feature
}, /*#__PURE__*/React.createElement("td", {
  className: "py-3 text-sm text-gray-700"
}, feature), perms.map((has, i) => /*#__PURE__*/React.createElement("td", {
  key: i,
  className: "py-3 text-center"
}, has ? /*#__PURE__*/React.createElement(CheckCircle, {
  size: 16,
  className: "text-emerald-500 mx-auto"
}) : /*#__PURE__*/React.createElement(X, {
  size: 16,
  className: "text-gray-200 mx-auto"
}))))))))));
const AdminSettings = () => /*#__PURE__*/React.createElement("div", {
  className: "p-6 space-y-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-5"
}, "Business Settings"), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-2 gap-5"
}, [["Business Name", "MonnyCreax"], ["Business Email", "hello@monnycreax.com"], ["Website", "monnycreax.com"], ["Currency", "USD ($)"], ["Time Zone", "Africa/Lagos (WAT)"], ["Invoice Prefix", "INV-"]].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
  key: label
}, /*#__PURE__*/React.createElement("label", {
  className: "text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5 block"
}, label), /*#__PURE__*/React.createElement("input", {
  defaultValue: val,
  className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-50"
})))), /*#__PURE__*/React.createElement("button", {
  className: "mt-6 px-6 py-3 bg-amber-400 text-gray-950 rounded-xl text-sm font-black hover:bg-amber-500 transition-colors"
}, "Save Changes")), /*#__PURE__*/React.createElement("div", {
  className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-gray-900 mb-4"
}, "Integrations"), /*#__PURE__*/React.createElement("div", {
  className: "space-y-3"
}, [{
  name: "Stripe",
  desc: "Payment processing",
  status: "Connect"
}, {
  name: "PayPal",
  desc: "Alternative payments",
  status: "Connect"
}, {
  name: "Google Drive",
  desc: "File storage sync",
  status: "Connected"
}, {
  name: "Zapier",
  desc: "Automation workflows",
  status: "Connect"
}].map(({
  name,
  desc,
  status
}) => /*#__PURE__*/React.createElement("div", {
  key: name,
  className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0"
}, /*#__PURE__*/React.createElement(Zap, {
  size: 18,
  className: "text-amber-500"
})), /*#__PURE__*/React.createElement("div", {
  className: "flex-1"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-sm font-bold text-gray-900"
}, name), /*#__PURE__*/React.createElement("p", {
  className: "text-xs text-gray-400"
}, desc)), /*#__PURE__*/React.createElement("button", {
  className: `px-4 py-1.5 rounded-xl text-xs font-bold transition-colors ${status === "Connected" ? "bg-emerald-100 text-emerald-700" : "bg-amber-400 text-gray-950 hover:bg-amber-500"}`
}, status))))));

// ─── STAFF SECTIONS ───────────────────────────────────────────────────────────

const StaffDash = () => {
  const myProj = PROJECTS.filter(p => p.assignees.includes("s1"));
  const tasks = myProj.flatMap(p => p.milestones.filter(m => m.status !== "completed").map(m => ({
    ...m,
    proj: p.title
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: Briefcase,
    label: "Assigned Projects",
    value: myProj.length.toString(),
    color: "amber"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: CheckCircle,
    label: "Pending Tasks",
    value: tasks.length.toString(),
    color: "blue"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: MessageSquare,
    label: "Unread Messages",
    value: "2",
    color: "purple"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "My Tasks Today"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: `flex items-center gap-3 p-3.5 rounded-xl ${t.status === "in-progress" ? "bg-amber-50 border border-amber-200" : "bg-gray-50"}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "w-4 h-4 accent-amber-400 flex-shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-900"
  }, t.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, t.proj)), /*#__PURE__*/React.createElement(Badge, {
    s: t.status
  }, t.status === "in-progress" ? "In Progress" : "Pending"))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900 mb-4"
  }, "My Projects"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, myProj.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "p-4 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-gray-900"
  }, p.title), /*#__PURE__*/React.createElement(Badge, {
    s: p.status
  }, p.status)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-2.5"
  }, "Client: ", p.clientName, " \u2022 Due ", p.dueDate), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: p.progress
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-amber-600 font-black mt-1 text-right"
  }, p.progress, "%")))))));
};
const StaffProjects = () => {
  const myProj = PROJECTS.filter(p => p.assignees.includes("s1"));
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-4"
  }, myProj.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mt-0.5"
  }, "Client: ", p.clientName, " \u2022 Package: ", p.package, " \u2022 Value: $", p.value)), /*#__PURE__*/React.createElement(Badge, {
    s: p.status
  }, p.status)), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Progress"), /*#__PURE__*/React.createElement("span", {
    className: "font-black text-amber-600"
  }, p.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    pct: p.progress,
    h: "h-2.5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, p.milestones.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(MilestoneStep, {
    status: m.status
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-sm ${m.status === "completed" ? "line-through text-gray-300" : "text-gray-700"}`
  }, m.title)))))));
};
const StaffTasks = () => {
  const init = PROJECTS.filter(p => p.assignees.includes("s1")).flatMap(p => p.milestones.map(m => ({
    ...m,
    proj: p.title,
    done: m.status === "completed"
  })));
  const [tasks, setTasks] = useState(init);
  const toggle = i => setTasks(prev => prev.map((t, idx) => idx === i ? {
    ...t,
    done: !t.done
  } : t));
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900"
  }, "My Tasks"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-gray-400"
  }, tasks.filter(t => t.done).length, "/", tasks.length, " completed")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, tasks.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `flex items-center gap-4 p-4 rounded-xl transition-all ${t.done ? "bg-gray-50 opacity-50" : t.status === "in-progress" ? "bg-amber-50 border border-amber-200" : "bg-gray-50"}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: t.done,
    onChange: () => toggle(i),
    className: "w-4 h-4 accent-amber-400 flex-shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: `text-sm font-semibold ${t.done ? "line-through text-gray-400" : "text-gray-900"}`
  }, t.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, t.proj, " \u2022 Due ", t.date)), /*#__PURE__*/React.createElement(Badge, {
    s: t.done ? "completed" : t.status
  }, t.done ? "completed" : t.status === "in-progress" ? "In Progress" : "pending"))))));
};
const StaffMessages = () => {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState(PROJECTS[0].messages);
  const p = PROJECTS.find(p => p.assignees.includes("s1") && p.messages.length > 0);
  const send = () => {
    if (msg.trim()) {
      setMsgs(prev => [...prev, {
        id: Date.now(),
        sender: "Kwame Addo",
        role: "staff",
        text: msg.trim(),
        date: "Today",
        time: "Now"
      }]);
      setMsg("");
    }
  };
  if (!p) return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center"
  }, /*#__PURE__*/React.createElement(MessageSquare, {
    size: 32,
    className: "text-gray-200 mx-auto mb-3"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm"
  }, "No active message threads")));
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col",
    style: {
      height: "calc(100vh - 180px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-b border-gray-100"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-black text-gray-900"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Client: ", p.clientName, " \u2022 Team thread")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-5 space-y-4 overflow-y-auto"
  }, msgs.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: `flex gap-3 ${m.role === "staff" ? "flex-row-reverse" : ""}`
  }, /*#__PURE__*/React.createElement(Av, {
    init: m.sender.split(" ").map(x => x[0]).join(""),
    size: "sm",
    scheme: m.role === "client" ? "amber" : m.role === "admin" ? "purple" : "blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: `max-w-xs p-3.5 rounded-2xl text-sm ${m.role === "staff" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`
  }, /*#__PURE__*/React.createElement("p", {
    className: `font-bold text-xs mb-1 ${m.role === "staff" ? "text-blue-200" : "text-gray-400"}`
  }, m.sender), /*#__PURE__*/React.createElement("p", null, m.text), /*#__PURE__*/React.createElement("p", {
    className: `text-xs mt-1.5 ${m.role === "staff" ? "text-blue-300" : "text-gray-400"}`
  }, m.time))))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-t border-gray-100 flex gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    value: msg,
    onChange: e => setMsg(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Write a message\u2026",
    className: "flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    className: "px-4 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
  }, /*#__PURE__*/React.createElement(Send, {
    size: 15
  })))));
};
const StaffFiles = () => {
  const files = PROJECTS.filter(p => p.assignees.includes("s1")).flatMap(p => p.files.map(f => ({
    ...f,
    proj: p.title
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-black text-gray-900"
  }, "Project Files"), /*#__PURE__*/React.createElement("button", {
    className: "flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-950 rounded-xl text-sm font-bold hover:bg-amber-500 transition-colors"
  }, /*#__PURE__*/React.createElement(Upload, {
    size: 14
  }), " Upload Deliverable")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, files.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement(FileText, {
    size: 18,
    className: "text-blue-400"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-gray-900 truncate"
  }, f.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, f.proj, " \u2022 ", f.size, " \u2022 ", f.date)), /*#__PURE__*/React.createElement(Badge, {
    s: f.type
  }, f.type), /*#__PURE__*/React.createElement("button", {
    className: "w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
  }, /*#__PURE__*/React.createElement(Download, {
    size: 13,
    className: "text-gray-600"
  })))))));
};

// ─── PAGE TITLES ──────────────────────────────────────────────────────────────

const TITLES = {
  dashboard: {
    title: "Dashboard",
    admin: "Business Overview",
    client: u => `Welcome back, ${u.name.split(" ")[0]}`,
    staff: "My Overview"
  },
  projects: {
    title: "Projects",
    admin: "All project records",
    client: () => "Your active & past projects",
    staff: "My assigned projects"
  },
  documents: {
    title: "Documents",
    admin: "Document management",
    client: () => "Secure file access",
    staff: ""
  },
  messages: {
    title: "Messages",
    admin: "All project communications",
    client: () => "Project-tied messaging",
    staff: "Approved communications"
  },
  invoices: {
    title: "Invoices",
    admin: "Invoice management",
    client: () => "Your payment history",
    staff: ""
  },
  support: {
    title: "Support",
    admin: "",
    client: () => "Get help from the team",
    staff: ""
  },
  clients: {
    title: "Clients",
    admin: "All client records",
    client: () => "",
    staff: ""
  },
  crm: {
    title: "CRM Pipeline",
    admin: "Deal tracking & forecasting",
    client: () => "",
    staff: ""
  },
  reports: {
    title: "Reports",
    admin: "Business performance insights",
    client: () => "",
    staff: ""
  },
  team: {
    title: "Team & Access",
    admin: "Members & permissions",
    client: () => "",
    staff: ""
  },
  settings: {
    title: "Settings",
    admin: "Portal configuration",
    client: () => "",
    staff: ""
  },
  tasks: {
    title: "My Tasks",
    admin: "",
    client: () => "",
    staff: "Your assigned work items"
  },
  files: {
    title: "Files",
    admin: "",
    client: () => "",
    staff: "Files from assigned projects"
  }
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");
  const login = u => {
    setUser(u);
    setPage("dashboard");
  };
  const logout = () => {
    setUser(null);
    setPage("dashboard");
  };
  if (!user) return /*#__PURE__*/React.createElement(Login, {
    onLogin: login
  });
  const meta = TITLES[page] || {};
  const title = meta.title || page;
  const subtitle = typeof meta[user.role] === "function" ? meta[user.role](user) : meta[user.role] || "";
  const renderPage = () => {
    if (user.role === "client") switch (page) {
      case "dashboard":
        return /*#__PURE__*/React.createElement(ClientDash, {
          user: user
        });
      case "projects":
        return /*#__PURE__*/React.createElement(ClientProjects, null);
      case "documents":
        return /*#__PURE__*/React.createElement(ClientDocuments, null);
      case "messages":
        return /*#__PURE__*/React.createElement(ClientMessages, null);
      case "invoices":
        return /*#__PURE__*/React.createElement(ClientInvoices, null);
      case "support":
        return /*#__PURE__*/React.createElement(ClientSupport, null);
      default:
        return /*#__PURE__*/React.createElement(ClientDash, {
          user: user
        });
    }
    if (user.role === "admin") switch (page) {
      case "dashboard":
        return /*#__PURE__*/React.createElement(AdminDash, null);
      case "clients":
        return /*#__PURE__*/React.createElement(AdminClients, null);
      case "crm":
        return /*#__PURE__*/React.createElement(AdminCRM, null);
      case "projects":
        return /*#__PURE__*/React.createElement(AdminProjects, null);
      case "invoices":
        return /*#__PURE__*/React.createElement(AdminInvoices, null);
      case "reports":
        return /*#__PURE__*/React.createElement(AdminReports, null);
      case "team":
        return /*#__PURE__*/React.createElement(AdminTeam, null);
      case "settings":
        return /*#__PURE__*/React.createElement(AdminSettings, null);
      default:
        return /*#__PURE__*/React.createElement(AdminDash, null);
    }
    if (user.role === "staff") switch (page) {
      case "dashboard":
        return /*#__PURE__*/React.createElement(StaffDash, null);
      case "projects":
        return /*#__PURE__*/React.createElement(StaffProjects, null);
      case "tasks":
        return /*#__PURE__*/React.createElement(StaffTasks, null);
      case "messages":
        return /*#__PURE__*/React.createElement(StaffMessages, null);
      case "files":
        return /*#__PURE__*/React.createElement(StaffFiles, null);
      default:
        return /*#__PURE__*/React.createElement(StaffDash, null);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-screen bg-gray-50 overflow-hidden"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    role: user.role,
    page: page,
    setPage: setPage,
    user: user,
    onLogout: logout
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col overflow-hidden min-w-0"
  }, /*#__PURE__*/React.createElement(Header, {
    title: title,
    subtitle: subtitle,
    user: user
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 overflow-y-auto"
  }, renderPage())));
}
Object.assign(__ds_scope, { App });
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/monnycreax-portal.jsx", error: String((e && e.message) || e) }); }

__ds_ns.App = __ds_scope.App;

})();
