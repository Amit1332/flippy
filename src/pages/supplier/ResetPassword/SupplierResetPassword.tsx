import React, { useState } from 'react'
import SupplierSignInHeader from '../../../components/supplier/signin/SupplierSignInHeader'
import SupplierSignInSidebar from '../../../components/supplier/signin/SupplierSignInSidebar'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SupplierResetPassword = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  return (
    <>
      <SupplierSignInHeader />
      <section className='supplier-auth'>
        <SupplierSignInSidebar />
        <div className='supplier-auth-right'>
          <div className='auth-forms-outer'>
            <div className='auth-titlebar'>
              <span className='auth-icon'><i className="bi bi-lock"></i></span>
              <h4 className='text-primary'>Reset your password</h4>
              <p className='mb-0'>Enter your new password</p>
            </div>
            <div className='auth-forms'>
              <Form.Group className="form-group form-group-icon">
                <span className='control-icon'><i className="bi bi-lock"></i></span>
                <Form.Control type="text" placeholder="Enter New Password" />
              </Form.Group>
              <Form.Group className="form-group form-group-icon">
                <span className='control-icon'><i className="bi bi-lock"></i></span>
                <Form.Control type="text" placeholder="Enter Confirm Password" />
              </Form.Group>
              <div className='d-grid'>
                <Button variant="primary btn-radius btn-padding">Save & Continue</Button>
              </div>
              <div className='forms-back'>
                <Link to="/supplier/sign-in" className='text-gray auth-link'><i className="bi bi-chevron-left me-2"></i>Back to Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='supplier-auth'>
        <SupplierSignInSidebar />
        <div className='supplier-auth-right'>
          <div className='auth-forms-outer'>
            <div className='auth-titlebar at-success'>
              <span className='auth-icon'><i className="bi bi-check2-circle"></i></span>
              <h4 className='text-primary'>Password Reset Successfully</h4>
              <p className='mb-0'>Your Flippy Seven account password reset
                successfully, Now you can login with new password</p>
            </div>
            <div className='auth-forms'>
              <div className='d-grid'>
                <Button variant="primary btn-radius btn-padding" onClick={() => { navigate('/supplier/sign-in') }}>Back to Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SupplierResetPassword