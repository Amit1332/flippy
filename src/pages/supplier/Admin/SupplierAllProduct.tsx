import React from 'react'
import { Button, Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import productImg from '../../../assets/images/supplier/product-img.png';
import StarRatingNumber from '../../../components/supplier/StarRatingNumber';

const SupplierAllProduct = () => {
    let productItems = ['', '', '', '', '', '', '', '', '', ''];

    return (
        <div className="page-content ps-0 pe-0 pb-0">
            <div className='page-header'>
                <div className='page-header-left'>
                    <h4>All  Products</h4>
                    <ol className='page-breadcrumbs'>
                        <li><a href=''>Products</a></li>
                        <li><a>All Products</a></li>
                    </ol>
                </div>
                <div className='page-header-right'>
                    <Button variant="white btn-radius"><i className="bi bi-plus-circle me-2"></i>Upload Bulk Products</Button>
                    <Button variant="primary btn-radius ms-2"><i className="bi bi-plus-circle me-2"></i>Add Product</Button>
                </div>
            </div>
            <div className='content-area'>
                <Row>
                    <Col md={12}>
                        <Card className='card shadow-none card-noborder card-table card-filter'>
                            <Card.Header>
                                <div className='card-header-left'>
                                    <Form.Group className="form-group mb-0 form-group-icon">
                                        <span className='control-icon'><i className="bi bi-search"></i></span>
                                        <Form.Control type="text" placeholder="Search..." />
                                    </Form.Group>
                                </div>
                                <div className='card-header-right'>
                                    <Form.Group className="form-group mb-0">
                                        <Form.Control type="date" />
                                    </Form.Group>
                                    <Button variant="white ms-2"><i className="bi bi-filter me-2"></i>Filters</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className='p-0'>
                                <div className='nav-tabs-box'>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All<span>24</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="published-tab" data-bs-toggle="tab" data-bs-target="#published" type="button" role="tab" aria-controls="published" aria-selected="false">Published<span>12</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="out-of-stock-tab" data-bs-toggle="tab" data-bs-target="#out-of-stock" type="button" role="tab" aria-controls="out-of-stock" aria-selected="false">Out of Stock<span>12</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="block-tab" data-bs-toggle="tab" data-bs-target="#block" type="button" role="tab" aria-controls="block" aria-selected="false">Block<span>12</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="pending" aria-selected="false">Pending<span>7</span></button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Product</th>
                                                        <th>Stock</th>
                                                        <th>Price</th>
                                                        <th>Orders</th>
                                                        <th>Rating</th>
                                                        <th>Published</th>
                                                        <th>Status</th>
                                                        <th className='tbl-action'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productItems.map((item, index) => {
                                                        return (

                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox checkbox-primary checkbox-small">
                                                                        <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                        <label htmlFor='allrecords'></label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>Half Sleeve Round Neck T-Shirts</h6>
                                                                            <p>Category : Fashion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>80</td>
                                                                <td><b>₹109.00</b></td>
                                                                <td>30</td>
                                                                <td><StarRatingNumber /></td>
                                                                <td>
                                                                    <div className="switch-box">
                                                                        <label className="switch" htmlFor="switchpublished">
                                                                            <input type="checkbox" name="switchpublished" id="switchpublished" />
                                                                            <div className="slider round"></div>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className='status published'>Published</div>
                                                                </td>
                                                                <td className='tbl-action'>
                                                                    <Dropdown className='dots-dropdown'>
                                                                        <Dropdown.Toggle variant="icon" id="dropdown-basic">
                                                                            <i className="bi bi-three-dots"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#"><i className="bi bi-pencil-square me-2"></i>Edit</Dropdown.Item>
                                                                            <Dropdown.Item href="#" className='text-danger'><i className="bi bi-trash3 me-2"></i>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>)
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="published" role="tabpanel" aria-labelledby="published-tab">
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Product</th>
                                                        <th>Stock</th>
                                                        <th>Price</th>
                                                        <th>Orders</th>
                                                        <th>Rating</th>                                                        
                                                        <th className='tbl-action'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productItems.map((item, index) => {
                                                        return (

                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox checkbox-primary checkbox-small">
                                                                        <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                        <label htmlFor='allrecords'></label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>Half Sleeve Round Neck T-Shirts</h6>
                                                                            <p>Category : Fashion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>80</td>
                                                                <td><b>₹109.00</b></td>
                                                                <td>30</td>
                                                                <td><StarRatingNumber /></td>                                                                
                                                                <td className='tbl-action'>
                                                                    <Dropdown className='dots-dropdown'>
                                                                        <Dropdown.Toggle variant="icon" id="dropdown-basic">
                                                                            <i className="bi bi-three-dots"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#"><i className="bi bi-pencil-square me-2"></i>Edit</Dropdown.Item>
                                                                            <Dropdown.Item href="#" className='text-danger'><i className="bi bi-trash3 me-2"></i>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>)
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="out-of-stock" role="tabpanel" aria-labelledby="out-of-stock-tab">
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Product</th>
                                                        <th>Stock</th>
                                                        <th>Price</th>
                                                        <th>Orders</th>
                                                        <th>Rating</th>                                                        
                                                        <th className='tbl-action'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productItems.map((item, index) => {
                                                        return (

                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox checkbox-primary checkbox-small">
                                                                        <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                        <label htmlFor='allrecords'></label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>Half Sleeve Round Neck T-Shirts</h6>
                                                                            <p>Category : Fashion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>80</td>
                                                                <td><b>₹109.00</b></td>
                                                                <td>30</td>
                                                                <td><StarRatingNumber /></td>                                                                
                                                                <td className='tbl-action'>
                                                                    <Dropdown className='dots-dropdown'>
                                                                        <Dropdown.Toggle variant="icon" id="dropdown-basic">
                                                                            <i className="bi bi-three-dots"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#"><i className="bi bi-pencil-square me-2"></i>Edit</Dropdown.Item>
                                                                            <Dropdown.Item href="#" className='text-danger'><i className="bi bi-trash3 me-2"></i>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>)
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="block" role="tabpanel" aria-labelledby="block-tab">
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Product</th>
                                                        <th>Stock</th>
                                                        <th>Price</th>
                                                        <th>Orders</th>
                                                        <th>Rating</th>                                                        
                                                        <th className='tbl-action'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productItems.map((item, index) => {
                                                        return (

                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox checkbox-primary checkbox-small">
                                                                        <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                        <label htmlFor='allrecords'></label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>Half Sleeve Round Neck T-Shirts</h6>
                                                                            <p>Category : Fashion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>80</td>
                                                                <td><b>₹109.00</b></td>
                                                                <td>30</td>
                                                                <td><StarRatingNumber /></td>
                                                                <td className='tbl-action'>
                                                                    <Dropdown className='dots-dropdown'>
                                                                        <Dropdown.Toggle variant="icon" id="dropdown-basic">
                                                                            <i className="bi bi-three-dots"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#"><i className="bi bi-pencil-square me-2"></i>Edit</Dropdown.Item>
                                                                            <Dropdown.Item href="#" className='text-danger'><i className="bi bi-trash3 me-2"></i>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="pending-tab">
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Product</th>
                                                        <th>Stock</th>
                                                        <th>Price</th>
                                                        <th>Orders</th>
                                                        <th>Rating</th>
                                                        <th className='tbl-action'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productItems.map((item, index) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox checkbox-primary checkbox-small">
                                                                        <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                        <label htmlFor='allrecords'></label>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>Half Sleeve Round Neck T-Shirts</h6>
                                                                            <p>Category : Fashion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>80</td>
                                                                <td><b>₹109.00</b></td>
                                                                <td>30</td>
                                                                <td><StarRatingNumber /></td>
                                                                <td className='tbl-action'>
                                                                    <Dropdown className='dots-dropdown'>
                                                                        <Dropdown.Toggle variant="icon" id="dropdown-basic">
                                                                            <i className="bi bi-three-dots"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#"><i className="bi bi-pencil-square me-2"></i>Edit</Dropdown.Item>
                                                                            <Dropdown.Item href="#" className='text-danger'><i className="bi bi-trash3 me-2"></i>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SupplierAllProduct