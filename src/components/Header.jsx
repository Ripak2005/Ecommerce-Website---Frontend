import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { CartData } from "../context/CartContext";

const Header = ({ isAuth }) => {
  const navigate = useNavigate();
  const { setUser, setIsAuth } = UserData();
  const { totalItem } = CartData();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged out");
  };
  return (
    <Navbar
      expand="lg"
      className="lg-body-tertiary"
      style={{ backgroundColor: "#E4D8B1" }}
    >
      <Container>
        <Navbar.Brand style={{ color: "#320801", fontWeight: "700" }}>
          DKart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScoll" />
        <Navbar.Collapse id="navbarScoll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{ color: "#320801", fontWeight: "600" }}>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link style={{ color: "#0B0B0C" }}>
              <Link to="/products">Products</Link>
            </Nav.Link>
            {isAuth && (
              <Nav.Link style={{ color: "#0B0B0C" }}>
                <Link to="/account">Account</Link>
              </Nav.Link>
            )}
          </Nav>

          {isAuth && (
            <Button
              variant="success"
              className="mx-2"
              style={{ fontSize: "20px" }}
              onClick={() => navigate("/cart")}
            >
              <FaCartShopping />{" "}
              <sup style={{ background: "red", padding: '4px', borderRadius: '50%' }}>{totalItem}</sup>
            </Button>
          )}

          {isAuth ? (
            <Button onClick={logoutHandler} variant="danger">
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              style={{ borderColor: "#85694A", color: "#272521" }}
              variant="outline"
            >
              Get Started
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
