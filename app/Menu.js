'use client'

import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart,  
  Menu as MenuIcon, 
  X 
  
} from 'lucide-react';
import { DashboardComp } from '@/helpers/DashboardComp';
import { AuthCheck } from '@/helpers/AuthCheck';
import Link from 'next/link';


export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg sticky-top py-3">
      <div className="container">
        
        <Link className="navbar-brand fw-bold fs-2" href="/">
          <span className="text-primary">Avon</span>
          <span className="text-dark">Shop</span>
        </Link>
        
      
        <button 
          className="navbar-toggler border-0 p-2" 
          type="button" 
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
        </button>
        
      
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

          <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5 px-3" href="/">Home</Link>
            </li>

            
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle fw-semibold fs-5 px-3" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                More Pages
                <ChevronDown size={18} className="ms-1" />
              </Link>
              <ul className="dropdown-menu border-0 shadow-lg p-2">
                <li><Link className="dropdown-item fs-6 py-2" href="#">Shirts</Link></li>
                <li><Link className="dropdown-item fs-6 py-2" href="#">Pants</Link></li>
                <li><Link className="dropdown-item fs-6 py-2" href="#">Outerwear</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item fs-6 py-2" href="#">All Men's</Link></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5 px-3" href="#">New Arrivals</Link>
            </li>
          </ul>
          
        
          <form className="d-flex mx-auto my-3 my-lg-0 position-relative" style={{ maxWidth: '500px' }}>
            <input 
              className="form-control me-2 ps-5 py-3 rounded-pill fs-5 shadow-sm border-0 bg-light" 
              type="search" 
              placeholder="Search products..." 
              aria-label="Search"
            />
            <Search size={24} className="position-absolute top-50 translate-middle-y ms-3 text-primary" />
          </form>
          
         
          <ul className="navbar-nav ms-auto gap-2 d-flex align-items-center">
            
      
            <li className="nav-item">
              <Link className="nav-link position-relative p-2" href="#">
                <div className="rounded-circle bg-light p-2 d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                  <ShoppingCart size={26} className="text-primary" />
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6 px-2">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </li>
            
            <li className='nav-item'>
              <DashboardComp />
          
              
              </li>
            
            
            
            <li className="nav-item ms-2">
            <AuthCheck />  
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}