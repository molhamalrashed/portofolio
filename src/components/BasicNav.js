import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from 'react';

function BasicNav() {
 const [activeNow, setActiveNow] = useState('home');
 const [scrolled, setScrolled] = useState(false);


 useEffect(()=> {
 const onScroll = () => {
  if(window.scrollY > 50){
    setScrolled(true)
  } else{setScrolled(false)}
 }

 window.addEventListener('scroll', onScroll);
 return () => window.removeEventListener('scroll', onScroll);
 },[])
  return (
    <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt = "Logo"
            src = "https://res.cloudinary.com/dtb1hpuil/image/upload/v1700777557/q7_ly4wlv.jpg"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" 
            onClick={()=> {setActiveNow("home")}}
            className = {activeNow === "home"? "active navbar-link" : "navbar-link"}>Home</Nav.Link>
            <Nav.Link href="#skills" 
            onClick={()=> {setActiveNow("skills")}}
            className = {activeNow === "skills"? "active navbar-link" : "navbar-link"}>Skills</Nav.Link>
            <Nav.Link href="#projects" 
            onClick={()=> {setActiveNow("projects")}}
            className = {activeNow === "projects"? "active navbar-link" : "navbar-link"}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
              <a href="a"><img src = "" alt = ""></img></a>
            </div>
            <button className="btn btn-primary" onClick={()=> {console.log("contact me")}}>Contact me</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;