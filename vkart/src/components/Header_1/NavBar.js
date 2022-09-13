import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bottom-header">
        <ul>
          <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/mobiles">Mobiles</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/appliances">Appliances</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/beauty">Beauty</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavBar;
          