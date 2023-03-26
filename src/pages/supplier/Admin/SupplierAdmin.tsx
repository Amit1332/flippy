import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SupplierBottombar from './SupplierBottombar'
import SupplierNavbar from './SupplierNavbar'
import SupplierTopbar from './SupplierTopbar'
// import '../../../assets/css/supplier-admin.css'

const SupplierAdmin = () => {
  const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-sidebar-size', 'lg');

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute(
      "href",
      "../../../assets/css/supplier-admin.css"
    );
    document.head.appendChild(linkElement);

    setLinkElementLoaded(true)
  }, []);
  return (
    <div className='layout-wrapper' id="layout-wrapper">
      <SupplierTopbar />
      <SupplierNavbar />
      <div className="main-content">
        <Outlet></Outlet>
      </div>
      {/* <SupplierBottombar /> */}
    </div>
  )
}

export default SupplierAdmin
