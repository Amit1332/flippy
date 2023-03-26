import React from 'react';
import SupplierSignInHeader from '../../../components/supplier/signin/SupplierSignInHeader'
import SupplierSignInSidebar from '../../../components/supplier/signin/SupplierSignInSidebar'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const SupplierForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <SupplierSignInHeader />
      <section className='supplier-auth'>
        <SupplierSignInSidebar />
        <div className='supplier-auth-right'>
          <div className='auth-forms-outer'>
            <div className='auth-titlebar'>
              <span className='auth-icon'><i className="bi bi-lock"></i></span>
              <h4 className='text-primary'>Forgot password?</h4>
              <p className='mb-0'>Enter your details to recieve a reset link</p>
            </div>
            <div className='auth-forms'>
              <Form.Group className="form-group form-group-icon">
                <span className='control-icon'><i className="bi bi-person"></i></span>
                <Form.Control type="text" placeholder="Enter email address" />
              </Form.Group>
              <div className='d-grid'>
                <Button variant="primary btn-radius btn-padding">Submit</Button>
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
            <div className='auth-titlebar'>
              <span className='auth-icon'><i className="bi bi-check2-circle"></i></span>
              <h4 className='text-primary'>Verify your email</h4>
              <p className='mb-0'>We sent a 6-digit verification code to your email. Enter the code from
                the email in the field below.</p>
            </div>
            <div className='auth-forms'>
              <Form.Group className="form-group form-group-otp">
                <Form.Control type="text" placeholder="-" value={1} />
                <Form.Control type="text" placeholder="-" value={2} />
                <Form.Control type="text" placeholder="-" value={3} />
                <Form.Control type="text" placeholder="-" value={4} />
                <Form.Control type="text" placeholder="-" value={5} />
                <Form.Control type="text" placeholder="-" value={6} />
              </Form.Group>
              <div className='forms-otp'>
                <p>Resend Code in : <span>01:30</span></p>
              </div>
              <div className='d-grid'>
                <Button variant="primary btn-radius btn-padding" onClick={() => { navigate('/supplier/reset-password') }}>Verify my email</Button>
              </div>
              <div className='forms-back'>
                <Link to="/supplier/sign-in" className='text-gray auth-link'><i className="bi bi-chevron-left me-2"></i>Back to Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SupplierForgotPassword