import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{height:"40px"}} src="square.jpg" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto ml">
            <Nav.Link href="Signup">Signup</Nav.Link>
            <Nav.Link href="Forgetpassword">Forgetpassword</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="Sidebar">Sidebar</Nav.Link>
            <Nav.Link href="Content">Content</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* slider */}
      <Carousel fade>
      <Carousel.Item>
        <img className='e' src="https://th.bing.com/th/id/OIP.W8apTKARTqVhmLzMCisNmAHaEs?pid=ImgDet&rs=1" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='e' src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='e' src="https://www.imagelighteditor.com/img/bg-after.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Header
