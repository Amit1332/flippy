import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col, Card, Tab, Tabs, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import GetStarted from '../../../components/website/getStarted/getStarted';

import appStore from '../../../assets/images/shop-categories/app-store.png';
import shopCategories from '../../../assets/images/shop-categories/shop-categories2.png';
import shopCategories1 from '../../../assets/images/shop-categories/sc2.png';
import shopCategories2 from '../../../assets/images/shop-categories/sc3.png';
import shopCategories3 from '../../../assets/images/shop-categories/sc4.png';
import shopCategories4 from '../../../assets/images/shop-categories/sc5.png';
import shopCategories5 from '../../../assets/images/shop-categories/sc5.png';
import p1 from '../../../assets/images/product/p1.png';
import p2 from '../../../assets/images/product/p2.png';
import p3 from '../../../assets/images/product/p3.png';
import p4 from '../../../assets/images/product/p4.png';
import s1 from '../../../assets/images/selling-store/s1.png';
import s2 from '../../../assets/images/selling-store/s2.png';
import s3 from '../../../assets/images/selling-store/s3.png';
import s4 from '../../../assets/images/selling-store/s4.png';
import c1 from '../../../assets/images/Choose-brand/c1.png';
import c2 from '../../../assets/images/Choose-brand/c2.png';
import c3 from '../../../assets/images/Choose-brand/c3.png';
import c4 from '../../../assets/images/Choose-brand/c4.png';
import c5 from '../../../assets/images/Choose-brand/c5.png';
import c6 from '../../../assets/images/Choose-brand/c6.png';
import c7 from '../../../assets/images/Choose-brand/c7.png';
import card from '../../../assets/images/cash-back/card.png';
import pimg from '../../../assets/images/cash-back/p-img.png';
import bannerImg from '../../../assets/images/banner/banner.png';
// import '../../../assets/css/custom.css';


// slider js start
const mostSellingSlider = {
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  dots: false,
  items: 5,
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
    },
    1365: {
      items: 5
    }
  }
};
const bannerSlider = {
  loop: true,
  autoplay: true,
  margin: 0,
  nav: false,
  dots: true,
  items: 1,
  animateOut: 'fadeOut',
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
};
// slider js end



const Home = () => {
  return (
    <>
      <section className='home-banner-section'>
      <Container>
          <Row>
        <OwlCarousel className='owl-theme' {...bannerSlider}>
          <div className='item'>
            <Card className='home-bg'>
              <a href='#'>
              <img className='w-100' src={bannerImg} alt="Flippy7" />
              </a>
            </Card>
          </div>
          <div className='item'>
            <Card className='home-bg'>
            <a href='#'>
              <img className='w-100' src={bannerImg} alt="Flippy7" />
              </a>
            </Card>
          </div>
          <div className='item'>
            <Card className='home-bg'>
            <a href='#'>
              <img className='w-100' src={bannerImg} alt="Flippy7" />
              </a>
            </Card>
          </div>          
        </OwlCarousel>
        </Row>
        </Container>
      </section>
      <section className='shop-categories box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h2 className='h2'>Shop Our Top Categories</h2>
                <Button variant="outline-secondary">View All</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={2} md={4}>
              <div className='sc-box'>
                <div className='sc-img'>
                  <img src={shopCategories} alt="Flippy7" />
                </div>
                <div className='sc-content'>
                  <h3>Men’s Wear</h3>
                  <a href='#'>View All <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col xl={2} md={4}>
              <div className='sc-box'>
                <div className='sc-img'>
                  <img src={shopCategories1} alt="Flippy7" />
                </div>
                <div className='sc-content'>
                  <h3>Women’s Wear</h3>
                  <a href='#'>View All <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col xl={2} md={4}>
              <div className='sc-box'>
                <div className='sc-img'>
                  <img src={shopCategories2} alt="Flippy7" />
                </div>
                <div className='sc-content'>
                  <h3>Kid’s Wear</h3>
                  <a href='#'>View All <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col xl={2} md={4}>
              <div className='sc-box'>
                <div className='sc-img'>
                  <img src={shopCategories3} alt="Flippy7" />
                </div>
                <div className='sc-content'>
                  <h3>Beauty</h3>
                  <a href='#'>View All <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col xl={2} md={4}>
              <div className='sc-box'>
                <div className='sc-img'>
                  <img src={shopCategories4} alt="Flippy7" />
                </div>
                <div className='sc-content'>
                  <h3>Electronics</h3>
                  <a href='#'>View All <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </Col>
            <Col xl={2} md={4}>
              <div className='sc-box'>
                <div className='sc-img'>
                  <img src={shopCategories5} alt="Flippy7" />
                </div>
                <div className='sc-content'>
                  <h3>Health & Personal</h3>
                  <a href='#'>View All <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='most-sell-section box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h2 className='h2'>Most Selling Products</h2>
                <Button variant="outline-secondary">View All</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className='Card-box-list'>
                <OwlCarousel className='owl-theme slider-btn' {...mostSellingSlider}>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p1} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p2} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p3} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p4} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p1} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p2} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p3} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>


                </OwlCarousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Best Selling Store section Start */}
      <section className='best-sell-section box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h2 className='h2'>Best Selling Store</h2>
              </div>
            </Col>
          </Row>
          <Row className='bs-boxs'>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={s1} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <ul>
                      <li>Bags</li>
                      <li>Perfumes</li>
                    </ul>
                    <div className='b-label'> <i className="bi bi-tag me-2"></i> Delivery with in 24 hour</div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={s2} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label primary'>
                    <p>staples</p>
                  </div>
                  <Card.Title>NOW Delivery</Card.Title>
                  <div>
                    <ul>
                      <li>Mobile</li>
                      <li>Gadgets</li>
                    </ul>
                    <div className='b-label'> <i className="bi bi-tag me-2"></i> Delivery with in 24 hour</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={s3} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Bevmo</Card.Title>
                  <div>
                    <ul>
                      <li>Cosmetics</li>
                      <li>Makeup</li>
                    </ul>
                    <div className='b-label'> <i className="bi bi-tag me-2"></i> Delivery with in 24 hour</div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={s4} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label green'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Ouicktly</Card.Title>
                  <div>
                    <ul>
                      <li>Shoes</li>
                      <li>Sneakers</li>
                    </ul>
                    <div className='b-label'> <i className="bi bi-tag me-2"></i> Delivery with in 24 hour</div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Todays Best Deals For You! section Start */}
      <section className='Today-best-section box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h2 className='h2'>Todays Best Deals For You!</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className='Card-box-list'>
                <OwlCarousel className='owl-theme slider-btn' {...mostSellingSlider}>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p1} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p2} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p3} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p4} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p1} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p2} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p3} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </OwlCarousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Todays Best Deals For You! section end */}
      {/* Choose By Brand section Start */}
      <section className='choose-brand-section box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h3 className='h2'>Choose By Brand</h3>
              </div>
            </Col>
          </Row>
          <Row className='choose-brand'>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c1} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c2} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c3} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c4} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c5} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c6} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c7} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>

                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card>
                <img className='w-100' src={c1} alt="Flippy7" />
                <Card.Body>
                  <div className='s-label'>
                    <p>staples</p>
                  </div>
                  <Card.Title>Staples</Card.Title>
                  <div>
                    <p>Delivery with in 24 hour</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>
      {/* Choose By Brand end */}

      {/* Get up To 70% Off section Start */}
      <section className='get-upto-section box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h3 className='h2'>Get up To 70% Off</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card className='item-box'>
                <Card.Body>
                  <div className='g-label'>
                    <p className='offer'>Save</p>
                    <p className='price'>₹ 560</p>
                    <p className='g-dcs'>Explore Our all types Dresses for Men</p>
                  </div>
                  <div className='p-button'>
                    <a href="#" className="btn-white">Learn More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </Card.Body>
                <div className='img-bg'>
                  <img className='p-img' src={pimg} alt="Flippy7" />
                </div>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='item-box item-box-right'>
                <Card.Body>
                  <div className='g-label'>
                    <p className='offer'>Min 60% off</p>
                    <div className='g-price-tag'> Get Coupon Code <span className='price'>- Flippy7</span></div>
                    <p className='g-dcs'>Explore Our all types Dresses for Men</p>
                  </div>
                  <div className='p-button'>
                    <a href="#" className="btn-white">Learn More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </Card.Body>
                <div className='img-bg'>
                  <img className='p-img' src={pimg} alt="Flippy7" />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Get up To 70% Off section end */}
      {/* Todays Best Deals For You section Start */}
      <section className='today-best-section box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h3 className='h2'>Todays Best Deals For You!</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills" className="flex-Row faq-list">
                    <Nav.Item>
                      <Nav.Link eventKey="Gadgets">Gadgets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Fashion">Fashion</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Toys">Toys</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="Gadgets">
                      <div className='Card-box-list'>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p1} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p2} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p3} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p4} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p1} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p2} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p3} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p4} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p1} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p2} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fashion">
                      <div className='Card-box-list'>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p3} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p4} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p1} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p2} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p3} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p4} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p1} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p2} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Toys">
                      <div className='Card-box-list'>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p3} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p4} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p1} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                        <Card className='item-box'>
                          <div className='img-bg'>
                            <img className='p-img' src={p2} alt="Flippy7" />
                          </div>
                          <Card.Body>
                            <div className='s-label'>
                              <i className="bi bi-heart"></i>
                            </div>
                            <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                            <div>
                              <strong>₹ 675.00</strong>
                              <p>5 types of shoos available</p>
                              <div className='rateing d-flex'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </section>
      {/* Todays Best Deals For You section end */}

      {/* Get 20% Cash Back section start */}
      <section className='cash-back-section box-space'>
        <Container>
          <Row className="cash-back-box">
            <Col md={7}>
              <div className='cash-back-content'>
                <h4 className='h4'>Get 20% Cash Back</h4>
                <p>on Flippy7.com</p>
                <div className='app-buttons mt-4'>
                  <a href='#' className='btn-primary'>
                    Learn More
                  </a>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className='cash-img'>
                <img className='card' src={card} alt="Flippy7" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Get 20% Cash Back section end */}

      {/* Weekly Popular Products section Start */}
      <section className='Today-best-section box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='page-title'>
                <h3 className='h2'>Weekly Popular Products</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className='Card-box-list'>
                <OwlCarousel className='owl-theme slider-btn' {...mostSellingSlider}>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p1} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p2} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p3} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p4} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p1} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p2} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='item'>
                    <Card className='item-box'>
                      <div className='img-bg'>
                        <img className='p-img' src={p3} alt="Flippy7" />
                      </div>
                      <Card.Body>
                        <div className='s-label'>
                          <i className="bi bi-heart"></i>
                        </div>
                        <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                        <div>
                          <strong>₹ 675.00</strong>
                          <p>5 types of shoos available</p>
                          <div className='rateing d-flex'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </OwlCarousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Weekly Popular Products section end */}

      <GetStarted />
    </>
  )
}

export default Home