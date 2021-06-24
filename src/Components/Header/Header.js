import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import "./Header.css";
import Logo from "../../assets/mp 2.png";

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
            <NavLink href="#" className="NavLink">
              Someth
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
