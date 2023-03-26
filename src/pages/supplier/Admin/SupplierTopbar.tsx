import React, { useEffect } from 'react'
import avatar from '../../../assets/images/avatar.jpg';

const SupplierTopbar = () => {
    

    return (
        <>
            <header id="page-topbar">
                <div className="layout-width">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                                <span className="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>

                            <form className="app-search d-none d-md-block">
                                <div className="position-relative">
                                    <input type="text" className="form-control" placeholder="Search keyword here ..." autoComplete='off' id="search-options" value="" />
                                    <span className="bi bi-search search-widget-icon"></span>
                                    <span className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                                </div>
                                <div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                                    <div>
                                        <div className="dropdown-header mt-2">
                                            <h6 className="text-overflow text-muted mb-1 text-uppercase">Product</h6>
                                        </div>
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                                            <span>Analytics Dashboard</span>
                                        </a>
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                                            <span>Help Center</span>
                                        </a>
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                                            <span>My account settings</span>
                                        </a>
                                        <div className="dropdown-header mt-2">
                                            <h6 className="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                                        </div>
                                    </div>

                                    <div className="text-center pt-3 pb-1">
                                        <a href="pages-search-results.html" className="btn btn-primary btn-sm">View All Results <i className="ri-arrow-right-line ms-1"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="d-flex align-items-center">

                            <div className="dropdown d-md-none topbar-head-dropdown header-item">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-search fs-22"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                                    <form className="p-3">
                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="dropdown ms-sm-3 header-item topbar-user">
                                <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="d-flex align-items-center">
                                        <img className="rounded-circle header-profile-user" src={avatar} alt="Header Avatar" />
                                        <span className="text-start ms-xl-2">
                                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                                        </span>
                                    </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <h6 className="dropdown-header">Welcome Anna!</h6>
                                    <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                                    <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="pages-profile-settings.html"><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></a>
                                    <a className="dropdown-item" href="auth-logout-basic.html"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SupplierTopbar