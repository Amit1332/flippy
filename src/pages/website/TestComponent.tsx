import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import WebsiteFooter from '../../components/website/footer/WebsiteFooter';
import WebsiteHeader from '../../components/website/header/WebsiteHeader';




const testSlider = {
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 4,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
};

const TestComponent = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <OwlCarousel className='owl-theme' {...testSlider}>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 1
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 2
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 3
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 4
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 5
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 6
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 7
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 8
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 9
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 10
                                    </Card>
                                </div>
                                <div className='item'>
                                    <Card className=''>
                                        Slide 11
                                    </Card>
                                </div>
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TestComponent