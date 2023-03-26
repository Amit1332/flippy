import React from 'react'
import { Link } from 'react-router-dom';
import signUpSidebarVector from '../../../assets/images/supplier/signup-sidebar.svg';

const SupplierSignUpSidebar = () => {
  return (
    <div className='supplier-auth-left'>
      <div className='auth-sidebar'>

        <div className='sidebar-content'>
          <ul className='stepper-navbar'>
            <li className='done'>
              <a>
                <div className='step-number'>1</div>
                <div className=''>
                  <h6>Your Details</h6>
                  <p className='mb-0'>Please provide your phone and email</p>
                </div>
              </a>
            </li>
            <li className='active'>
              <a>
                <div className='step-number'>2</div>
                <div className=''>
                  <h6>Verify Your GSTIN</h6>
                  <p className='mb-0'>Please provide GSTIN & Pan</p>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className='step-number'>3</div>
                <div className=''>
                  <h6>Add Your Bank Account</h6>
                  <p className='mb-0'>Please provide your bank details</p>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div className='step-number'>4</div>
                <div className=''>
                  <h6>Pickup & Registered Address</h6>
                  <p className='mb-0'>Please provide your address</p>
                </div>
              </a>
            </li>
          </ul>
          <div className='sidebar-counting'>
            <ul className='sidebar-number list-unstyled'>
              <li>
                <h4>700+</h4>
                <p>Categories</p>
              </li>
              <li>
                <h4>18,000+</h4>
                <p>Suppliers</p>
              </li>
            </ul>
            <h6 className='sidebar-small-title'>All you need to sell on</h6>
            <ul className='sidebar-bullet  list-unstyled'>
              <li>GSTIN</li>
              <li>Bank Account</li>
            </ul>
          </div>

        </div>
        <div className='sidebar-img w-100 mt-4'>
          <img src={signUpSidebarVector} alt="Flippy7" />
        </div>
        <div className='sidebar-link'>
          <ul className='list-unstyled mb-0'>
            <li><Link to={'#'}>Terms & Conditions</Link></li>
            <li><Link to={'#'}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div className='sidebar-copyright'><p>© 2023 Flippy7. All rights reserved.</p></div>
      </div>
    </div>
  )
}

export default SupplierSignUpSidebar