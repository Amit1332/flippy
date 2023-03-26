import React, { useEffect, useState } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import WebsiteFooter from '../../components/website/footer/WebsiteFooter'
import WebsiteHeader from '../../components/website/header/WebsiteHeader'
// import '../../assets/css/custom.css';

const WebsiteLayout = () => {
    const [isLinkElementLoaded, setLinkElementLoaded] = useState(false)
    useEffect(() => {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute(
            "href",
            "../../assets/css/custom.css"
        );
        document.head.appendChild(linkElement);

        setLinkElementLoaded(true)
    }, []);

    // useEffect(() => {
    //     const linkElement = document.createElement("link");
    //     linkElement.setAttribute("rel", "stylesheet");
    //     linkElement.setAttribute("type", "text/css");
    //     if (window.location.pathname === "/") {
    //         linkElement.setAttribute("href", "../../assets/css/custom.css");
    //     } 
    //     document.head.appendChild(linkElement);
    //     return () => {
    //         document.head.removeChild(linkElement);
    //     };
    // }, []);

    return (
        <>
            <WebsiteHeader />
            <Outlet></Outlet>
            <WebsiteFooter />
        </>
    )
}

export default WebsiteLayout