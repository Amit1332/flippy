import React from 'react'
import { Link } from 'react-router-dom'
import headerLogoFull from '../../../assets/images/logo.svg';
import HeaderLogoSmall from '../../../assets/images/logo-sm.svg';

const SupplierNavbar = () => {
    return (
        <div className="app-menu navbar-menu">

            <div className="navbar-brand-box">

                <Link to={''} className="logo">
                    <span className="logo-sm">
                        <img src={HeaderLogoSmall} alt="" height="55" />
                    </span>
                    <span className="logo-lg">
                        <img src={headerLogoFull} alt="" height="55" />
                    </span>
                </Link>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <ul className="navbar-nav" id="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/supplier/admin/dashboard'} className="nav-link menu-link">
                            <i className="bi bi-house-door"></i> <span data-key="t-widgets">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link menu-link" to={'#sidebarProducts'} data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProducts">
                            <i className="bi bi-box-seam"></i> <span data-key="t-dashboards">Products</span>
                        </Link>
                        <div className="collapse menu-dropdown" id="sidebarProducts">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <Link to={'/supplier/admin/products'} className="nav-link" data-key="t-analytics"> All Products </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={''} className="nav-link" data-key="t-analytics"> Bulk Upload </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link menu-link" to={'#sidebarOrders'} data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarOrders">
                            <i className="bi bi-cart"></i> <span data-key="t-dashboards">Orders</span>
                        </Link>
                        <div className="collapse menu-dropdown" id="sidebarOrders">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <Link to={'/supplier/admin/orders'} className="nav-link" data-key="t-analytics">All Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={''} className="nav-link" data-key="t-analytics">Order Reviews</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link menu-link">
                            <i className="bi bi-archive"></i> <span data-key="t-widgets">Recommendation</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link menu-link">
                            <i className="bi bi-upload"></i> <span data-key="t-widgets">Upload Files</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link menu-link">
                            <i className="bi bi-gift"></i> <span data-key="t-widgets">Coupon</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link menu-link">
                            <i className="bi bi-truck"></i> <span data-key="t-widgets">RTO Managment</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link menu-link">
                            <i className="bi bi-ticket-detailed"></i> <span data-key="t-widgets">Support Ticket</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={''} className="nav-link menu-link">
                            <i className="bi bi-currency-rupee"></i> <span data-key="t-widgets">Payout</span>
                        </Link>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                            <i className="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboards</span>
                        </a>
                        <div className="collapse menu-dropdown" id="sidebarDashboards">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <a href="dashboard-analytics.html" className="nav-link" data-key="t-analytics"> Analytics </a>
                                </li>
                                <li className="nav-item">
                                    <a href="dashboard-crm.html" className="nav-link" data-key="t-crm"> CRM </a>
                                </li>
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link" data-key="t-ecommerce"> Ecommerce </a>
                                </li>
                                <li className="nav-item">
                                    <a href="dashboard-crypto.html" className="nav-link" data-key="t-crypto"> Crypto </a>
                                </li>
                                <li className="nav-item">
                                    <a href="dashboard-projects.html" className="nav-link" data-key="t-projects"> Projects </a>
                                </li>
                                <li className="nav-item">
                                    <a href="dashboard-nft.html" className="nav-link" data-key="t-nft"> NFT</a>
                                </li>
                                <li className="nav-item">
                                    <a href="dashboard-job.html" className="nav-link"><span data-key="t-job">Job</span> <span className="badge badge-pill bg-success" data-key="t-new">New</span></a>
                                </li>
                            </ul>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default SupplierNavbar