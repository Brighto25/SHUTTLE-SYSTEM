function Navbar({ user }) {
  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <nav id="main-nav">
      <div className="nav-logo">
        Shuttle<span>Pass</span>
      </div>
      <div className="nav-user">
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 500, fontSize: ".88rem" }}>{user.name}</div>
          <div style={{ fontSize: ".75rem", color: "var(--text3)" }}>
            {user.index}
          </div>
        </div>
        <div className="nav-avatar">{initials}</div>
      </div>
    </nav>
  );
}

export default Navbar;
