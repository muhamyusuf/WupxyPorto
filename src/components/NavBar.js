import { useState, useEffect} from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }

            window.addEventListener("scroll", onScroll);

            return window.removeEventListener("scroll", onScroll);
        }
    },[])

    const onUpdateActiveLink=(value)=>{ 
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" variant="dark" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand className="Mybrand" href="#home">
                    <h1>Wupxy.</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink =='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink =='about' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink =='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink =='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                        <span className="navbar-right-side">
                            <div className="Mysocial-media">
                                <a href="https://www.instagram.com/muhamyusuf_/?hl=id"><img src={navIcon3} alt=""/></a>
                                <a href="https://www.facebook.com/profile.php?id=100006930314992"><img src={navIcon2} alt=""/></a>
                                <a href="https://www.linkedin.com/in/muhammad-yusuf-28851a245/"><img src={navIcon1} alt=""/></a>
                            </div>
                        </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;