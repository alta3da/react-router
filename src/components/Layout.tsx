import { Link, NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end style={{margin: "20px"}}>Home</NavLink>
        <NavLink to="/about" style={{margin: "20px"}}>About</NavLink>
        <NavLink to="/posts" style={{margin: "20px"}}>Posts</NavLink>
        <NavLink to="/login" style={{margin: "20px"}}>Login</NavLink>
      </nav>
      <div style={{ margin: "20px" }}>
        <Outlet />
      </div>
    </>
  );
};
