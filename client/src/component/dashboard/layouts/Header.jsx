import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../../store/context";
import { useDispatch } from "react-redux";
import user1 from "../../../.././src/Images/diyansh.png";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
// import { ReactComponent as LogoWhite } from "../../../assets/images/logos/xtremelogowhite.svg";
// import user1 from "../../../assets/images/users/user1.jpg";

const Header = (props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };


  const navigate = useNavigate();
  const onLogoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(authActions.restore());
    navigate("/");
  };
  return (
    <Navbar className="bg-red-900" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          {/* <LogoWhite /> */}
        </NavbarBrand>
        <Button
          color="dark"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="dark"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="dark">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle mt-3"
              width="40"
            ></img>
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem href="/" onClick={onLogoutHandler}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
