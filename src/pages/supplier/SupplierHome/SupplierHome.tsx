import React, { useEffect, useState } from 'react'
import SupplierFooter from '../../../components/supplier/footer/SupplierFooter'
import SupplierHeader from '../../../components/supplier/header/SupplierHeader'
const SupplierHome = () => {
  // const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)

  // useEffect(() => {
  //   const linkElement = document.createElement("link");
  //   linkElement.setAttribute("rel", "stylesheet");
  //   linkElement.setAttribute("type", "text/css");
  //   linkElement.setAttribute(
  //     "href",
  //     "../../../assets/css/supplier.css"
  //   );
  //   document.head.appendChild(linkElement);

  //   setLinkElementLoaded(true)
  // }, []);
  return (
    <>
      <SupplierHeader />
      <div>SupplierHome</div>
      <SupplierFooter />
    </>
  )
}

export default SupplierHome