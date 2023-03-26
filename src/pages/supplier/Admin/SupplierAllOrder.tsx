import React from 'react'
import { Button, Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import productImg from '../../../assets/images/supplier/product-img.png';
import StarRatingNumber from '../../../components/supplier/StarRatingNumber';

const SupplierAllOrder = () => {
    let productItems = ['', '', '', '', '', '', '', '', '', ''];
    return (
        <div className="page-content ps-0 pe-0 pb-0">
            <div className='page-header'>
                <div className='page-header-left'>
                    <h4>All Orders</h4>
                    <ol className='page-breadcrumbs'>
                        <li><a href=''>Orders</a></li>
                        <li><a>All Orders</a></li>
                    </ol>
                </div>
                <div className='page-header-right'>
                    <Button variant="white btn-radius"><i className="bi bi-check2-circle me-2"></i>Accept All Orders</Button>
                </div>
            </div>
            <div className='content-area'>
                <Row>
                    <Col md={12}>
                        <Card className='card shadow-none card-noborder card-table card-filter'>
                            <Card.Body className='p-0'>
                                <div className='nav-tabs-box'>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="allproduct-tab" data-bs-toggle="tab" data-bs-target="#allproducttab" type="button" role="tab" aria-controls="allproducttab" aria-selected="true"><i className="bi bi-box me-2"></i>All Orders</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="breachingtoday-tab" data-bs-toggle="tab" data-bs-target="#breachingtodaytab" type="button" role="tab" aria-controls="breachingtodaytab" aria-selected="false"><i className="bi bi-clock me-2"></i>Breaching Today<span>24</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="breachpending-tab" data-bs-toggle="tab" data-bs-target="#breachpendingtab" type="button" role="tab" aria-controls="breachpendingtab" aria-selected="false"><i className="bi bi-pause-circle me-2"></i>Breach Pending<span>4</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="acceptedorders-tab" data-bs-toggle="tab" data-bs-target="#acceptedorderstab" type="button" role="tab" aria-controls="acceptedorderstab" aria-selected="false"><i className="bi bi-check2-circle me-2"></i>Accepted Orders</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="cancelled-tab" data-bs-toggle="tab" data-bs-target="#cancelledtab" type="button" role="tab" aria-controls="cancelledtab" aria-selected="false"><i className="bi bi-x-circle me-2"></i>Cancelled</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="downloadinvoice-tab" data-bs-toggle="tab" data-bs-target="#downloadinvoicetab" type="button" role="tab" aria-controls="downloadinvoicetab" aria-selected="false"><i className="bi bi-download me-2"></i>Download Invoice</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="allproducttab" role="tabpanel" aria-labelledby="allproduct-tab">
                                            <div className='filterbox'>
                                                <Row>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='SKU & ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Order Number' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Product ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <div className='filtergroup-button'>
                                                            <Button variant="white">Clear</Button>
                                                            <Button variant="primary"><i className="bi bi-filter me-2"></i>Filter</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Order No</th>
                                                        <th>Product</th>
                                                        <th>Customer</th>
                                                        <th>Quantity</th>
                                                        <th>Size</th>
                                                        <th>SKU ID</th>
                                                        <th>Product Id</th>
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
                                                                <td><b>#F7234</b></td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>350 ml Glass Grocery</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Chris Glasser</td>
                                                                <td>01</td>
                                                                <td>Free Size</td>
                                                                <td><b>ksty3456</b></td>
                                                                <td>6574675</td>
                                                                <td className='tbl-action'>
                                                                    <Button variant="primary  btn-radius" size="sm">Accept</Button>
                                                                    <Button variant="white  btn-radius" size="sm">Cancel</Button>
                                                                </td>
                                                            </tr>)
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="breachingtodaytab" role="tabpanel" aria-labelledby="breachingtoday-tab">
                                            <div className='filterbox'>
                                                <Row>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='SKU & ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Order Number' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Product ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <div className='filtergroup-button'>
                                                            <Button variant="white">Clear</Button>
                                                            <Button variant="primary"><i className="bi bi-filter me-2"></i>Filter</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Order No</th>
                                                        <th>Product</th>
                                                        <th>Customer</th>
                                                        <th>Quantity</th>
                                                        <th>Product Id</th>
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
                                                                <td><b>#F7234</b></td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>350 ml Glass Grocery</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Chris Glasser</td>
                                                                <td>01</td>
                                                                <td>6574675</td>
                                                                <td className='tbl-action'>
                                                                    <Button variant="primary  btn-radius" size="sm">Accept</Button>
                                                                    <Button variant="white  btn-radius" size="sm">Cancel</Button>
                                                                </td>
                                                            </tr>)
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="breachpendingtab" role="tabpanel" aria-labelledby="breachpending-tab">
                                            <div className='filterbox'>
                                                <Row>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='SKU & ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Order Number' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Product ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <div className='filtergroup-button'>
                                                            <Button variant="white">Clear</Button>
                                                            <Button variant="primary"><i className="bi bi-filter me-2"></i>Filter</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Order No</th>
                                                        <th>Product</th>
                                                        <th>Customer</th>
                                                        <th>Quantity</th>
                                                        <th>Product Id</th>
                                                        <th>Date</th>
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
                                                                <td><b>#F7234</b></td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>350 ml Glass Grocery</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Chris Glasser</td>
                                                                <td>01</td>
                                                                <td>6574675</td>
                                                                <td>21 Nov, 2023</td>
                                                                <td className='tbl-action'>
                                                                    <Button variant="primary  btn-radius" size="sm">Accept</Button>
                                                                    <Button variant="white  btn-radius" size="sm">Cancel</Button>
                                                                </td>
                                                            </tr>)
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="acceptedorderstab" role="tabpanel" aria-labelledby="acceptedorders-tab">
                                            <div className='filterbox'>
                                                <Row>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='SKU & ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Order date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Order Number' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Product ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date minimum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="date" placeholder='Dispatch date maximum' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <div className='filtergroup-button'>
                                                            <Button variant="white">Clear</Button>
                                                            <Button variant="primary"><i className="bi bi-filter me-2"></i>Filter</Button>
                                                        </div>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Label className='me-3'>Label Downloaded</Form.Label>
                                                            <div className="checkbox checkbox-primary checkbox-inline">
                                                                <input type="checkbox" className="filled-in" id="labeldownloadyes" name='labeldownload' />
                                                                <label htmlFor='labeldownloadyes'>Yes</label>
                                                            </div>
                                                            <div className="checkbox checkbox-primary checkbox-inline">
                                                                <input type="checkbox" className="filled-in" id="labeldownloadno" name='labeldownload' />
                                                                <label htmlFor='labeldownloadno'>No</label>
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="4" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Label className='me-3'>SLA Status</Form.Label>
                                                            <div className="checkbox checkbox-primary checkbox-inline">
                                                                <input type="checkbox" className="filled-in" id="slabreached" name='slaatatus' />
                                                                <label htmlFor='slabreached'>Breached</label>
                                                            </div>
                                                            <div className="checkbox checkbox-primary checkbox-inline">
                                                                <input type="checkbox" className="filled-in" id="slabreachedsoon" name='slaatatus' />
                                                                <label htmlFor='slabreachedsoon'>Breached Soon</label>
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Order No</th>
                                                        <th>Product</th>
                                                        <th>Customer</th>
                                                        <th>Quantity</th>
                                                        <th>Product Id</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th className='tbl-action'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </td>
                                                        <td><b>#F7234</b></td>
                                                        <td>
                                                            <div className='tbl-prodbox'>
                                                                <div className='prodbox-img'>
                                                                    <img src={productImg} alt="Flippy7" />
                                                                </div>
                                                                <div className='prodbox-content'>
                                                                    <h6>350 ml Glass Grocery</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Chris Glasser</td>
                                                        <td>01</td>
                                                        <td>6574675</td>
                                                        <td>21 Nov, 2023</td>
                                                        <td>
                                                            <div className='status published'>Breached</div>
                                                        </td>
                                                        <td className='tbl-action'>
                                                            <Button variant="primary  btn-radius" size="sm"><i className="bi bi-download me-2"></i>Label</Button>
                                                            <Button variant="light-danger btn-circle" size="sm"><i className="bi bi-info-circle"></i></Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </td>
                                                        <td><b>#F7234</b></td>
                                                        <td>
                                                            <div className='tbl-prodbox'>
                                                                <div className='prodbox-img'>
                                                                    <img src={productImg} alt="Flippy7" />
                                                                </div>
                                                                <div className='prodbox-content'>
                                                                    <h6>350 ml Glass Grocery</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Chris Glasser</td>
                                                        <td>01</td>
                                                        <td>6574675</td>
                                                        <td>21 Nov, 2023</td>
                                                        <td>
                                                            <div className='status breachingsoon'>Breaching Soon</div>
                                                        </td>
                                                        <td className='tbl-action'>
                                                            <Button variant="primary btn-radius" size="sm"><i className="bi bi-download me-2"></i>Label</Button>
                                                            <Button variant="light-gray btn-circle" size="sm"><i className="bi bi-info-circle"></i></Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="cancelledtab" role="tabpanel" aria-labelledby="cancelled-tab">
                                            <div className='filterbox'>
                                                <Row>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='SKU & ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Product ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Order Number' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <div className='filtergroup-button'>
                                                            <Button variant="white">Clear</Button>
                                                            <Button variant="primary"><i className="bi bi-filter me-2"></i>Filter</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Order No</th>
                                                        <th>Product</th>
                                                        <th>Size</th>
                                                        <th>Quantity</th>
                                                        <th>Customer</th>
                                                        <th>Cancellation Reason</th>
                                                        <th>Cancellation Date</th>
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
                                                                <td><b>#F7234</b></td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>350 ml Glass Grocery</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Free Size</td>
                                                                <td>01</td>
                                                                <td>Chris Glasser</td>
                                                                <td>Customer cancellation</td>
                                                                <td>12 Mar, 11:30</td>
                                                            </tr>)
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="tab-pane fade" id="downloadinvoicetab" role="tabpanel" aria-labelledby="downloadinvoice-tab">
                                            <div className='filterbox'>
                                                <Row>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='SKU & ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Product ID' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Control type="text" placeholder='Order Number' />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="3" md="6">
                                                        <div className='filtergroup-button'>
                                                            <Button variant="white">Clear</Button>
                                                            <Button variant="primary"><i className="bi bi-filter me-2"></i>Filter</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Table responsive hover className='mb-0 table-kp'>
                                                <thead>
                                                    <tr>
                                                        <th className='tbl-checkbox'>
                                                            <div className="checkbox checkbox-primary checkbox-small">
                                                                <input type="checkbox" className="filled-in" id="allrecords" name='allrecords' />
                                                                <label htmlFor='allrecords'></label>
                                                            </div>
                                                        </th>
                                                        <th>Order No</th>
                                                        <th>Product</th>
                                                        <th>Customer</th>
                                                        <th>Quantity</th>
                                                        <th>Size</th>
                                                        <th>SKU ID</th>
                                                        <th>Product Id</th>
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
                                                                <td><b>#F7234</b></td>
                                                                <td>
                                                                    <div className='tbl-prodbox'>
                                                                        <div className='prodbox-img'>
                                                                            <img src={productImg} alt="Flippy7" />
                                                                        </div>
                                                                        <div className='prodbox-content'>
                                                                            <h6>350 ml Glass Grocery</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>Chris Glasser</td>
                                                                <td>01</td>
                                                                <td>Free Size</td>
                                                                <td><b>ksty3456</b></td>
                                                                <td>6574675</td>
                                                                <td className='tbl-action'>
                                                                    <Button variant="primary btn-radius" size="sm"><i className="bi bi-download me-2"></i>Download</Button>
                                                                </td>
                                                            </tr>)
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

export default SupplierAllOrder