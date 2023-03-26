import React from 'react'
import { Button, Container, Form, Row, Col, Breadcrumb, Card, Dropdown, DropdownButton, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import p1 from '../../../assets/images/product/p1.png';
import p2 from '../../../assets/images/product/p2.png';
import p3 from '../../../assets/images/product/p3.png';
import p4 from '../../../assets/images/product/p4.png';
const Shop = () => {
  return (
    <>
      {/* inner banner section */}

      <section className='inner-page-title box-space'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='Box-title-content'>
                <h1>Man’s Wears</h1>
                <Breadcrumb>
                  <i className="bi bi-house-door me-2"></i> <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Shoes
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>Man’s Wear V1</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='shopping-box-section box-space'>
        <Container>
          <Row>
            <Col  xl={3} md={12}>
              <div className='s-filter-box'>
                <div className='filter-total'>
                  <div className='ft-left'>
                    <h5>FILTERS</h5>
                    <p>10000+ Products</p>
                  </div>
                  <div className='ft-right'>
                    <button className='text-danger'> Clear All</button>
                  </div>
                </div>
                <div className='category-list'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Category</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Accupressure Rollers"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Analog Watches"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Ayurvedic Products"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Bangles & Bracelets"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Bike Covers"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Bedsheets"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <a className='text-danger'>Show more</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='category-list'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Ratings</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="4.5 & up"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(1991)</label>
                          </li>                          
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="4.5 & up"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(1991)</label>
                          </li>                          
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="4.5 & up"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(1991)</label>
                          </li>                          
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="4.5 & up"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(1991)</label>
                          </li>                          
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="4.5 & up"
                                    name="group1"                                   
                                  />
                            </Form>
                            <label>(1991)</label>
                          </li>                          
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='category-list'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Brand</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Kalini"
                                    name="Kalini"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Ethnic basket"
                                    name="Ethnic basket"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="7Threads"
                                    name="7Threads"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Varanga"
                                    name="Varanga"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Sangria"
                                    name="Sangria"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Vishudh"
                                    name="Vishudh"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <a className='text-danger'>Show more</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='category-list'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Price</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Rs. 521 and Less"
                                    name="price"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Rs. 521 to Rs. 738"
                                    name="price"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Rs. 738 to Rs. 955"
                                    name="price"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Rs. 955 to Rs. 1172"
                                    name="price"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="Rs. 1172 And Above"
                                    name="price"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>                          
                          <li>
                            <a className='text-danger'>Show more</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='category-list'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Color</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li className='multicolor'>
                            <Form>                             
                            <Form.Check
                                    inline
                                    label="Multi"
                                    name="Multi"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li className='blue-color'>
                            <Form>                             
                            <Form.Check
                                    inline
                                    label="Blue"
                                    name="Blue"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li className='Red-color'>
                            <Form>                             
                            <Form.Check
                                    inline
                                    label="Red"
                                    name="Red"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li className='Yellow-color'>
                            <Form>                             
                            <Form.Check
                                    inline
                                    label="Yellow"
                                    name="Yellow"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li className='Black-color'>
                            <Form>                             
                            <Form.Check
                                    inline
                                    label="Black"
                                    name="Black"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li className='Green-color'>
                            <Form>                             
                            <Form.Check
                                    inline
                                    label="Green"
                                    name="Green"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li className='Pink-color'>
                            <Form>                             
                            <Form.Check
                                    inline
                                    label="Pink"
                                    name="Pink"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>
                          <li>
                            <a className='text-danger'>+31 More</a>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='category-list'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Discount Range</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="10% and above"
                                    name="Discount Range"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>                                                  
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="20% and above"
                                    name="Discount Range"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>                                                  
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="30% and above"
                                    name="Discount Range"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>                                                  
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="40% and above"
                                    name="Discount Range"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>                                                  
                          <li>
                            <Form>
                            <Form.Check
                                    inline
                                    label="50% and above"
                                    name="Discount Range"                                   
                                  />
                            </Form>
                            <label>(18)</label>
                          </li>                                                  
                         
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
            <Col xl={9} md={12}>
              <div className='product-counter'>
                <div className='pc-left'>
                  <p>Showing <span className='p-count'>10,000+</span> total results</p>
                </div>
                <div className='pc-right'>
                  <ul>
                    <li>
                      <p>Sort by: </p>
                    </li>
                    <li>
                      <DropdownButton id="dropdown-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Most Popular</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">1</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">2</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">2</Dropdown.Item>
                      </DropdownButton>
                    </li>
                    <li>
                      <div className='list-view-button'>
                        <button><i className="bi bi-grid"></i></button>
                        <button><i className="bi bi-list-ul"></i></button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='all-shopping-list Card-box-list'>
                <Card className='item-box'>
                  <div className='img-bg'>
                  <img className='p-img' src={p1} alt="Flippy7" />
                  </div>
                  <Card.Body>
                    <div className='s-label'>
                      <i className="bi bi-heart"></i>
                    </div>
                    <Card.Title> <Link to={'#'}>TDX Sinkers</Link> </Card.Title>
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
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
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
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
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
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
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
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
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
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
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
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
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
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
                    <Card.Text>
                      <strong>₹ 675.00</strong>
                      <p>5 types of shoos available</p>
                      <div className='rateing d-flex'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  )
}

export default Shop