'use client'

import React from 'react'
import { Search, ShoppingCart, User, Heart, Home, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { AuthCheck } from '@/helpers/AuthCheck';
import { DashboardComp } from '@/helpers/DashboardComp';
import "./styles/menuStyles.css"




export default function Menu() {
  return (
    <div>

   {/* Offcanvas Cart */}
   <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart" aria-labelledby="My Cart">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-circle pt-2">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Perfume</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">MWK120000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Perfume</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">MWK80000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Perfume</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">MWK50000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Total (MWK)</span>
                <strong>MWK250K</strong>
              </li>
            </ul>
            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </div>
        </div>
      </div>

      {/* Offcanvas Search */}
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasSearch" aria-labelledby="Search">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="text-primary text-uppercase mb-3">
              Search
            </h4>
            <div className="search-bar border rounded-2 border-dark-subtle">
              <form id="search-form" className="text-center d-flex align-items-center" action="" method="">
                <input type="text" className="form-control border-0 bg-transparent" placeholder="Search Here" />
                <Search className="fs-4 me-3" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="container py-2">
          <div className="row py-4 pb-0 pb-sm-4 align-items-center">
            {/* Logo */}
            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
              <div className="main-logo">
                <Link href="/">
                {/* Avon Products */}
                  <img src="https://www.theladders.com/s3proxy/company-photo.theladders.com/6443/b91960a4-cead-4854-8320-737fc81d634b.png" />
                </Link>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
              <div className="search-bar border rounded-2 px-3 border-dark-subtle">
                <form id="search-form" className="text-center d-flex align-items-center" action="" method="">
                  <input 
                    type="text" 
                    className="form-control border-0 bg-transparent"
                    placeholder="Search for avon products here" 
                  />
                  <Search size={24} />
                </form>
              </div>
            </div>

            {/* Contact Info & Icons */}
            <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
              <div className="support-box text-end d-none d-xl-block">
                <span className="fs-6 secondary-font text-muted">Phone</span>
                <h5 className="mb-0">+265 88 334 3323</h5>
              </div>
              <div className="support-box text-end d-none d-xl-block">
                <span className="fs-6 secondary-font text-muted">Email</span>
                <h5 className="mb-0">youravon@plug.com</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <hr className="m-0" />
        </div>

        {/* Navigation Component */}
        <div className="container">
          <nav className="main-menu d-flex navbar navbar-expand-lg">
            {/* Mobile View Icons */}
            <div className="d-flex d-lg-none align-items-end mt-3">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <Link href="/" className="mx-3">
                    <User className="fs-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mx-3">
                    <Heart className="fs-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart">
                    <ShoppingCart className="fs-4 position-relative" />
                    <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                      03
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch"
                    aria-controls="offcanvasSearch">
                    <Search className="fs-4" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hamburger Menu Button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Offcanvas Navigation Menu */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header justify-content-center">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body justify-content-between">
                {/* Category Filter Dropdown */}
                <select className="filter-categories border-0 mb-0 me-5">
                  <option>Shop by Category</option>
                  <option>Clothes</option>
                  <option>Perfumes</option>
                  <option>Lotions</option>
                  <option>Body Sprays</option>




                </select>

                {/* Main Navigation Links */}
                <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                  <li className="nav-item">
                    <Link href="/" className="nav-link active">Home</Link>
                    <Home className="fs-4" />
                  </li>
                  <li className="nav-item">
                <DashboardComp />
              </li>
                  <li className="nav-item dropdown">
                     <Link href="!#" className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown"
                      aria-expanded="false">Pages</Link> 
                      
                    <ul className="dropdown-menu" aria-labelledby="pages">
                      <li>
                        <Link href="/" className="dropdown-item">
                          About Us
                          
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="dropdown-item">
                          Shop
                          
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="dropdown-item">
                          Contact Us
                          
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">New Arrivals</Link>
                    <ShoppingBasket className='fs-4' />
                    
                  </li>

                  <li className="nav-item">
                    <AuthCheck />
                    <User className="fs-4" />
                  </li>

                  
                </ul>

                {/* Desktop View Icons */}
                <div className="d-none d-lg-flex align-items-end">
                  <ul className="d-flex justify-content-end list-unstyled m-0">
                    
                    <li>
                      <Link href="/" className="mx-3">
                        <Heart className="fs-4" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                        aria-controls="offcanvasCart">
                        <ShoppingCart className="fs-4 position-relative" />
                        <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                          03
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>


    </div>
  )
}


