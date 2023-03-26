import React, { useEffect, useState } from 'react'
import SupplierSignInHeader from '../../../components/supplier/signin/SupplierSignInHeader'
import SupplierSignInSidebar from '../../../components/supplier/signin/SupplierSignInSidebar'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import '../../../assets/css/supplier.css';

const SupplierSignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <SupplierSignInHeader />
      <section className='supplier-auth'>
        <SupplierSignInSidebar />
        <div className='supplier-auth-right'>
          <div className='auth-forms-outer'>
            <div className='auth-titlebar'>
              <span className='auth-icon'><i className="bi bi-person"></i></span>
              <h4 className='text-primary'>Login to your supplier panel</h4>
              <p className='mb-0'>Welcome back, you’ve been missed!</p>
            </div>
            <div className='auth-forms'>
              <Form.Group className="form-group form-group-icon">
                <span className='control-icon'><i className="bi bi-person"></i></span>
                <Form.Control type="text" placeholder="Email Id or Mobile number" />
              </Form.Group>
              <Form.Group className="form-group form-group-icon">
                <span className='control-icon'><i className="bi bi-lock"></i></span>
                <Form.Control type="password" placeholder="Enter Password" />
                <button className='btn btn-pwd'><i className="bi bi-eye"></i></button>
                {/* <button className='btn btn-pwd'><i className="bi bi-eye-slash"></i></button> */}
              </Form.Group>
              <div className='forms-footer'>
                <div className="checkbox checkbox-primary">
                  <input type="checkbox" className="filled-in" id="rememberme" name='rememberme' />
                  <label htmlFor='rememberme'>Remember Me</label>
                </div>
                <Link to="/supplier/forgot-password" className='text-primary'>Forgot Password ?</Link>
              </div>
              <div className='d-grid'>
                <Button variant="primary btn-radius btn-padding" onClick={() => { navigate('/supplier/admin/dashboard') }}>Log In</Button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SupplierSignIn