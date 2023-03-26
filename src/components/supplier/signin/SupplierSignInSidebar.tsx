import React from 'react'
import signInSidebarVector from '../../../assets/images/supplier/signin-sidebar.svg';

const SupplierSignInSidebar = () => {
  return (

    <div className='supplier-auth-left'>
      <div className='auth-sidebar'>
        <div className='sidebar-img'>
          <img src={signInSidebarVector} alt="Flippy7" />
        </div>
        <div className='sidebar-content'>
          <h4>Why Flippy7</h4>
          <ul className='sidebar-bullet  list-unstyled'>
            <li>Sell Online to I Cr+ Customer at 3% Commission</li>
            <li>Become a flippy7 seller & grow your business</li>
            <li>700+ Categories to sell online</li>
            <li>11 Crore+ Customers buying across India</li>
          </ul>
        </div>
      </div>
      <div className='sidebar-copyright'><p>© 2023 Flippy7. All rights reserved.</p></div>
    </div>
  )
}

export default SupplierSignInSidebar