import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import headerLogo from '../../../assets/images/logo.svg';

const SupplierSignUpHeader = () => {
  const navigate = useNavigate();

  return (
    <section className='supplier-auth-header'>
      <div className='header-logo'>
        <Link to={'/supplier'}>
          <img src={headerLogo} alt="Flippy7" />
        </Link>
      </div>
      <div className='header-button'>
        <p>Already a member?</p>
        <Button variant="outline-primary btn-radius btn-padding" onClick={() => { navigate('/supplier/sign-in') }}><i className="bi bi-person me-2"></i>Sign in</Button>
      </div>
    </section>
  )
}

export default SupplierSignUpHeader