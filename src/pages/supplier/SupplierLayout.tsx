import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
// import '../../assets/css/supplier.css';
// import '../../assets/css/supplier-admin.css';
const SupplierLayout = () => {
    const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)

    useEffect(() => {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute(
            "href",
            "../../assets/css/supplier.css"
        );
        document.head.appendChild(linkElement);

        setLinkElementLoaded(true)
    }, []);
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}

export default SupplierLayout