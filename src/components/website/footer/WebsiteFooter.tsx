import React from 'react'
import { Container, Row, Col, Nav, Navbar, Accordion } from 'react-bootstrap'
import headerLogo from '../../../assets/images/logo.svg';
import stripe from '../../../assets/images/payment-method/stripe.png';
import visa from '../../../assets/images/payment-method/visa.png';
import master from '../../../assets/images/payment-method/master.png';
import aPay from '../../../assets/images/payment-method/app-pay.png';
import qPay from '../../../assets/images/payment-method/q-pay.png';
import paymentPay from '../../../assets/images/payment-method/payment-pay.png';
import apPay from '../../../assets/images/payment-method/app-pay.png';
const WebsiteFooter = () => {
  return (
    <footer>
      <Container>
        <Row className='footer1'>
          <Col xl={4} lg={4} md={12}>
            <div className='left-footer'>
              <img className='mb-4' src={headerLogo} alt="Flippy7" />
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
              <div className='payment-icon'>
                <h5>Accepted payments</h5>
                <ul>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={stripe} alt="Flippy7" />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={visa} alt="Flippy7" />                      
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={master} alt="Flippy7" />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={aPay} alt="Flippy7" />                     
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={qPay} alt="Flippy7" />                    
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={paymentPay} alt="Flippy7" />                      
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={apPay} alt="Flippy7" />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <img className='p-img' src={stripe} alt="Flippy7" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={8} md={12}>
            <div className='right-footer'>
              <div className='menu-list'>
                <h5>About Us</h5>
                <Navbar>
                  <Nav.Link href="#">About Flippy 7</Nav.Link>
                  <Nav.Link href="#">Careers</Nav.Link>
                  <Nav.Link href="#">News & Blogs</Nav.Link>
                  <Nav.Link href="#">Help</Nav.Link>
                  <Nav.Link href="#">Press Center</Nav.Link>
                  <Nav.Link href="#">Shop by location</Nav.Link>
                  <Nav.Link href="#">Flippy 7 Brand</Nav.Link>
                  <Nav.Link href="#">Affiliate & Partners</Nav.Link>
                  <Nav.Link href="#">Ideas & Guides</Nav.Link>
                </Navbar>
              </div>
              <div className='menu-list'>
                <h5>Services</h5>
                <Navbar>
                  <Nav.Link href="#">Gift Card</Nav.Link>
                  <Nav.Link href="#">Mobile App</Nav.Link>
                  <Nav.Link href="#">Shipping & Delivery</Nav.Link>
                  <Nav.Link href="#">Order Pickup</Nav.Link>
                  <Nav.Link href="#">Account Signup</Nav.Link>
                </Navbar>
              </div>
              <div className='menu-list'>
                <h5>Help</h5>
                <Navbar>
                  <Nav.Link href="#">Flippy 7 Help</Nav.Link>
                  <Nav.Link href="#">Returns</Nav.Link>
                  <Nav.Link href="#">Track Orders</Nav.Link>
                  <Nav.Link href="#">Contact Us</Nav.Link>
                  <Nav.Link href="#">Feedback</Nav.Link>
                  <Nav.Link href="#">Security & Fraud</Nav.Link>                  
                </Navbar>
              </div>
              <div className='menu-list'>
                <h5>Get in Touch</h5>
                <ul>
                  <li>  
                  <i className="bi bi-telephone"></i>                  
                    <a>0755 4857712</a>
                  </li>
                  <li>  
                  <i className="bi bi-envelope"></i>                  
                    <a>help@flippyseven.com</a>
                  </li>
                  <li>  
                  <i className="bi bi-geo-alt"></i>                  
                    <a>3755 Commercial St SE Salem, Corner  with Sunny Boulevard, 3755 Commercial OR 97302</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>More About Flippy 7</Accordion.Header>
        <Accordion.Body>
          <h5>Welcome To Flippy Seven</h5>
          <p>FlippySeven is a Professional Shopping Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Shopping, with a focus on dependability and “Spec” Shopping & Retail. We're working to turn our passion for Shopping into a booming . We hope you enjoy our Shopping as much as we enjoy offering them to you. Basically, nowadays people are more dependent on online products and services that's why we also, take forward a step to help you.</p>
          <p>Our first wish is to provide you with a better solution to solve your problem. So, kindly if you don't get any solution then mention it in the comment section. Also, we are trying to provide fresh & latest content that provides you ideas about all updated information that's happening in the world. In the below section you can get more ideas about our site like our website category and content category.</p>
          <h5>What is Our Goal?</h5>
          <p>There are millions of websites created every day, also, there is much fake content spread on the internet. So, Our main goal is to provide you with 100% Original and Safe products that provides you a great and better experience on the world wide web. We mainly focus on our service so and improving it regularly to provide a better user experience to all users. Basically, we focus on the E-commerce niche so, our main priority is to search for new products & designs it in front of you to learn something new.</p>
          <h5>What is our Service?</h5>
          <p>We are mainly focused on the Fashion category so, we provide Fashion related product if you are interested then you can visit daily to get more latest products. Soon the brand opened up a much wider variety of men’s wear, women’s wear, kids wear, home & kitchen, men's & women's footwear and all men & women accessories which rendered it as a one stop shop for all. During the course of its evolution, a one-stop-store, draping the world with joy and finest Indian elegance.</p>
          <p>On our website flippyseven you get can all E-commerce related information also, we focus on many other categories and we hope you like also, the content of other categories that are maintained on our website. So, you can visit our website homepage to know all category details here you can visit our homepage Click here - https://flippyseven.com</p>
          <h5>About FlippySeven</h5>
          <p>As you can see already we mention what is our goal and Service again we repeat that we mainly focus on E-commerce Category to help people. This Website is Created By FlippySeven to help people because many people are still spending hours of time to get exact product so, this is the only motive to create https://flippyseven.com to help people and provide them a better shopping experience.We will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
          <p>Thanks For Visiting Our Site Have a nice day!</p>

          <h5 className='text-orange'>Online Shopping</h5>
          <h6>Women Western</h6>
        </Accordion.Body>
      </Accordion.Item>      
    </Accordion>
        </Row>
        <Row className='bottom-footer'>
            <div className='f-left'>
            <ul>
                  <li>  
                  <i className="bi bi-bag"></i>                  
                    <a>Become Seller</a>
                  </li>
                  <li>  
                  <i className="bi bi-gift"></i>                  
                    <a>Gift Cards</a>
                  </li>
                  <li>  
                  <i className="bi bi-info-circle"></i>                  
                    <a>Help Center</a>
                  </li>
                </ul>
            </div>
            <div className='mb-footer'>
              <p>All Right reserved by Flippy 7 | 2022</p>
            </div>
            <div className='br-footer'>
            <ul>
                  <li>                                    
                    <a> <i className="bi bi-facebook"></i> </a>
                  </li>
                  <li>                                    
                    <a> <i className="bi bi-instagram"></i> </a>
                  </li>
                  <li>                                    
                    <a> <i className="bi bi-twitter"></i> </a>
                  </li>
                  <li>                                    
                    <a> <i className="bi bi-linkedin"></i> </a>
                  </li>
                  
                </ul>
            </div>
        </Row>
      </Container>
    </footer>
  )
}

export default WebsiteFooter