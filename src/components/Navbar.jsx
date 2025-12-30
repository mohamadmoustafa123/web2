import { Link, Outlet } from "react-router-dom";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
export default function NavBar() {
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "white",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 50,
    padding: "16px",
  };

  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    fontSize: "18px",
    fontWeight: 600,
    textDecoration: "none",
    color: "black",
    transition: "color 0.3s ease",
  };

  const hoverStyle = (e) => {
    e.target.style.color = "blue";
  };

  const unhoverStyle = (e) => {
    e.target.style.color = "black";
  };
  return (
    <>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link
              to="/HomePage"
              style={linkStyle}
              onMouseEnter={hoverStyle}
              onMouseLeave={unhoverStyle}
            >
              
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={linkStyle}
              onMouseEnter={hoverStyle}
              onMouseLeave={unhoverStyle}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={linkStyle}
              onMouseEnter={hoverStyle}
              onMouseLeave={unhoverStyle}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
