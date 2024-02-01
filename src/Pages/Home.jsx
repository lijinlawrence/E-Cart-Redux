import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWhishlist } from '../redux/slice/whishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'



function Home() {

  const data = useFetch(`https://dummyjson.com/products`)
  // console.log(data);
  const dispatch = useDispatch()
  return (
    <>
      <Container>
      <Row className="" style={{marginTop:'100px'}}>
        {
          data?.length>0.?data?.map((products,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3} >
            <Card className='shadow rounded' style={{ width: '16rem', height:'25rem' }}>
          <Card.Img style={{height:'200px'}} variant="top" src={products?.thumbnail} />
          <Card.Body>
            <Card.Title className='fw-bold'>{products?.title.slice(0,20)}</Card.Title>
            <Card.Text>
              <p>{products?.description.slice(0,45)}...</p>
              <h5>${products?.price}</h5>
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(addToWhishlist(products))} className='btn'><i className='fa-solid fa-heart text-danger fa-1x'></i></Button>
              <Button className='btn' onClick={()=>dispatch(addToCart(products))}><i className='fa-solid fa-cart-shopping text-success fa-1x'></i></Button>
            </div>
          </Card.Body>
        </Card>
            </Col>
          )):<p className='text-danger'>Nothing to display</p>
        }
      </Row>
      </Container>
     
    </>
  )
}

export default Home