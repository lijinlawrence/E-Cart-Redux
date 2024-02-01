import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <>
       
 
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-light'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='text-light'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='text-light'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <Link to={'/'} style={{textDecoration:'none',fontWeight:"bold"}}><img width={90} height={60} src="https://www.techasoft.com/uploads/ekart_logo.png" alt="" /></Link>

              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-decoration-none'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-decoration-none'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-decoration-none'>
                  Vue
                </a>
              </p>
              <p>
                
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to={'/'} style={{textDecoration:'none'}} >Home</Link>
                
                
               
              </p>
              <p>
              <Link to={'/whishlist'} style={{textDecoration:'none'}} >Whishlist</Link>
              </p>
              <p>
              <Link to={'/cart'} style={{textDecoration:'none'}} >Cart</Link>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset text-decoration-none fw-bold' href='https://e-cart.com/'>
          e-cart.com
        </a>
      </div>
    </MDBFooter>
  

    </>
  )
}

export default Footer