import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {

   const whishlist = useSelector((state)=>state.whishlistReducer)
   const cart = useSelector((state)=>state.cartReducer)



  return (
    <>
      
        <Navbar style={{zIndex:'1'}} expand="lg" className="bg-light position-fixed top-0 w-100 bg-black">
     
        <Container>
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',fontWeight:"bold"}}><img width={90} height={60} src="https://www.techasoft.com/uploads/ekart_logo.png" alt="" />
</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/whishlist'} style={{fontWeight:'bold',textDecoration:'none'}}><i className='fa-solid fa-heart fa-beat me-2 text-danger'></i>Whishlist
            <Badge className='rounded ms-2 bg-success'>{whishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'/cart'} style={{fontWeight:'bold',textDecoration:'none'}}><i className='fa-solid fa-shopping-cart fa-beat me-2 text-light'></i>Cart
            <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   

    </>
  )
}

export default Header