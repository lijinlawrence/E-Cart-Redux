import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWhishlist } from '../redux/slice/whishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'





function Whishlist() {

  const whishlistArray = useSelector((state)=>state.whishlistReducer)
  const dispatch=useDispatch()

  const handleWhishlistCart = (products)=>{
    dispatch(addToCart(products))
    dispatch(removeFromWhishlist(products.id))
  }

  return (
    <Container>
    <Row className='' style={{marginTop:'100px'}}>
      {
        
        whishlistArray?.length>0.?whishlistArray?.map((products,index)=>(
          
          <Col key={index} className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3} >
          <Card className='shadow rounded' style={{ width: '16rem', height:'25rem' }}>
        <Card.Img style={{height:'200px'}} variant="top" src={products?.thumbnail} />
        <Card.Body>
          <Card.Title className='fw-bold'>{products?.title.slice(0,45)}</Card.Title>
          <Card.Text>
            <p>{products?.description.slice(0,55)}...</p>
            <h5>${products?.price}</h5>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(removeFromWhishlist(products.id))}  className='btn'><i className='fa-solid fa-trash text-danger fa-1x'></i></Button>
            <Button className='btn' onClick={()=>handleWhishlistCart(products)}><i className='fa-solid fa-cart-shopping text-success fa-1x'></i></Button>
          </div>
        </Card.Body>
      </Card>
          </Col>
        )):<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        
          <img height={'50%'} width={'50%'} src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />
          <h3 className='text-center text-danger mt-3'>Whishlist Is Empty!!</h3>
          <Link  style={{textDecoration:'none'}} className='btn btn-warning rounded mt-5' to={'/'}>Back to home</Link>
        </div>

      }
    </Row>
    </Container>
  )
}

export default Whishlist