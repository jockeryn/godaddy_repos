import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo'

function Header() {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Logo />  
                </Navbar.Brand>  
            </Container>
        </Navbar> 
     );
}

export default Header;