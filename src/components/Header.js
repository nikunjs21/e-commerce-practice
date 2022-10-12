import { useContext } from "react";
import { Badge, Button, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/auth-context";

const Header = () => {
    const location = useLocation();
    const authContext = useContext(AuthContext);

    const setLogoutHandler = () => {
        authContext.logout();
    }
    const totalItems = useSelector(state => state.cart.totalItems);

    return (
        <Navbar bg="dark" expand="lg" variant="dark" style={{
            padding: '0 20px'
        }}>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/orders" active={location.pathname === '/orders'}>Orders</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            {authContext.isLoggedIn && <>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/cart" variant="primary" style={{ marginRight: '10px', position: 'relative' }}>
                            <ion-icon name="cart-outline" style={{ fontSize: '35px', verticalAlign: 'middle', marginTop: '10px' }}></ion-icon>
                            <Badge style={{ position: 'absolute', top: 0, right: 0, padding: '2px' }} bg="danger">{totalItems}</Badge>
                        </Link>
                        <Button onClick={setLogoutHandler}>Logout</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </>}
        </Navbar>
    )
}

export default Header;
