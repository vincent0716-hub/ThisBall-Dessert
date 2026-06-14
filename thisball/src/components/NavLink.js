import { Router, Routes, Route, Link, NavLink } from "react-router-dom";
function NavItem({ to, label, disabled, children }) {
  if (disabled) {
    return (
      <Link
        to={to}
        style={{
          color: "#aaa",
          pointerEvents: "none", // 點擊完全失效
          cursor: "not-allowed",
        }}
      >
        {children}
      </Link>
    );
  }
  return <Link to={to}>{children}</Link>;
}
export default NavItem;
