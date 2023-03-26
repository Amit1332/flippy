import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import appStore from '../../../assets/images/shop-categories/app-store.png';
import googleStore from '../../../assets/images/shop-categories/google-store.png';
import getMobile from '../../../assets/images/shop-categories/layer2.png';
const GetStarted = () => {
    return (
        <section className='ready-to-get-section box-space'>
            <Container>
                <Row className="get-start-box">
                    <Col md={7}>
                        <div className='get-start-content'>
                            <h4 className='h4'>Ready to get started?</h4>
                            <p>Download the Flippy 7 app to find Cloths, Shoes, Toys and Watch's to buy, save and share your favourite products and get real-time alerts.</p>
                            <div className='app-buttons mt-4'>
                                <a href='#' className='me-4'>                                   
                                    <img src={appStore} alt="Flippy7" />
                                </a>
                                <a href='#'>
                                <img src={googleStore} alt="Flippy7" />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className='get-img'>
                        <img src={getMobile} alt="Flippy7" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetStarted