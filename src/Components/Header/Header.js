import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import "./Header.css";
import Logo from "../../assets/mp 2.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="Navigation">
      <Navbar
        style={{
          backgroundColor: "#000",
          height: "70px"
        }}
      >
        <NavbarBrand href="/" className="mr-auto ml-5 Brand p-3">
          <img src={Logo} alt="Logo" width="80px" height="50px" />
        </NavbarBrand>

        <Nav className="mr-md-5">
          <NavItem>
            <NavLink exact to="/" className="NavLink">
              Burger Builder
            </NavLink>

            <NavLink exact to="/orders" className="NavLink">
              Oreders
            </NavLink>

            <NavLink exact to="/login" className="NavLink">
              LogIn
            </NavLink>

          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
