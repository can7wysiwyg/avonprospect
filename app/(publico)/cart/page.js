'use client'
import React, { useState, useEffect } from 'react'
import { Trash2, ShoppingBag, Plus, Minus, ArrowLeft, CreditCard, Truck } from 'lucide-react'
import Link from 'next/link'
import { getCart, removeCartItem, emptyCartItems } from '@/helpers/core/CartFuncs'
import axios from 'axios'
import { ApiUrl } from '@/helpers/ApiUrl'
import { getSupertoken } from '@/helpers/AccessToken'

export default function ShoppingCart({ cartItems: initialCartItems }) {
  const [cartItems, setCartItems] = useState([])
  const [step, setStep] = useState('cart') // 'cart' or 'checkout'
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    address: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const usertoken = getSupertoken()

  useEffect(() => {
    const items = getCart().map(item => ({ ...item, quantity: 1 }));
    setCartItems(items);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
  }, 0)

  const shippingCost = subtotal > 100 ? 0 : 15

  // Total cost
  const total = subtotal + shippingCost

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    // Check if the new quantity exceeds available stock
    const item = cartItems.find(item => item._id === id)
    if (newQuantity > item.stockQuantity) {
      alert(`Sorry, only ${item.stockQuantity} items are available in stock.`)
      return
    }

    const updatedCart = cartItems.map(item => 
      item._id === id ? { ...item, quantity: newQuantity } : item
    )
    setCartItems(updatedCart)
  }

  // Remove item from cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id)
    removeCartItem(id)
    window.location.reload()
    setCartItems(updatedCart)
  }

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = 'Phone number is required'
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Prepare cart data for submission
      const cartData = {
        ...formData,
        cartContents: cartItems.map(item => ({
          product: item._id,
          quantity: item.quantity
        })),
        amount: total
      }
      
      const response = await axios.post(`${ApiUrl}/shopper/add_to_cart`, cartData, {
        headers: {
          Authorization: `Bearer ${usertoken}`
        }
      })
      
      if(response.data.msg) {
        alert(response.data.msg)
        setCartItems([])
        emptyCartItems()
        window.location.reload()
        setFormData({
          fullname: '',
          email: '',
          phonenumber: '',
          address: '',
        })
      }
      
      // Return to cart view
      setStep('cart')
    } catch (error) {
      console.error('Error submitting order:', error)
      alert('There was an error placing your order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <div className="empty-cart text-center py-5">
          <div className="empty-cart-icon mb-4">
            <ShoppingBag size={80} color="#ccc" />
          </div>
          <h2 className="mb-3">Your cart is empty</h2>
          <p className="text-muted mb-4">Looks like you have not added any items to your cart yet.</p>
          <Link href="/products" className="btn btn-primary btn-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="shopping-cart">
      <div className="container py-4">
        <h1 className="mb-4 fw-bold">{step === 'cart' ? 'Shopping Cart' : 'Checkout'}</h1>
        
        {step === 'checkout' && (
          <button 
            onClick={() => setStep('cart')} 
            className="btn btn-link text-decoration-none mb-3 ps-0"
          >
            <ArrowLeft size={18} className="me-1" /> Back to cart
          </button>
        )}
        
        <div className="row g-4">
          <div className="col-lg-8">
            {step === 'cart' ? (
              <div className="card shadow-sm">
                {/* Mobile cart items header - only visible on small screens */}
                <div className="card-header bg-white py-3 d-md-none">
                  <h5 className="mb-0">Your Items</h5>
                </div>
                
                {/* Desktop cart items header - hidden on small screens */}
                <div className="card-header bg-white py-3 d-none d-md-block">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <h5 className="mb-0">Product</h5>
                    </div>
                    <div className="col-2 text-center">
                      <h5 className="mb-0">Price</h5>
                    </div>
                    <div className="col-2 text-center">
                      <h5 className="mb-0">Quantity</h5>
                    </div>
                    <div className="col-2 text-end">
                      <h5 className="mb-0">Total</h5>
                    </div>
                  </div>
                </div>
                
                <div className="card-body p-0">
                  {cartItems.map((item) => (
                    <div key={item._id} className="cart-item border-bottom p-3">
                      <div className="row align-items-center">
                        {/* Product Image & Info */}
                        <div className="col-md-6 col-12 mb-3 mb-md-0">
                          <div className="d-flex align-items-center">
                            <div className="cart-item-image me-3">
                              <img 
                                src={item.photo} 
                                alt={item.name} 
                                className="img-fluid rounded"
                                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                              />
                            </div>
                            <div className="cart-item-details">
                              <h6 className="mb-1">{item.name}</h6>
                              <div className="d-md-none">
                                <span className="fw-bold me-2">Price:</span>
                                <span className="fw-bold">MWK{item.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Price - desktop only */}
                        <div className="col-md-2 col-12 text-center d-none d-md-block">
                          <div className="fw-bold">MWK{item.price}</div>
                        </div>
                        
                        {/* Quantity */}
                        <div className="col-md-2 col-6 text-center">
                          <div className="d-md-none mb-1 fw-medium">Quantity:</div>
                          <div className="quantity-control d-flex align-items-center justify-content-center">
                            <button 
                              className="btn btn-sm btn-outline-secondary quantity-btn"
                              onClick={() => updateQuantity(item._id, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="quantity-display">
                              {Math.max(1, Math.min(item.quantity, item.stockQuantity))}
                            </span>
                            <button 
                              className="btn btn-sm btn-outline-secondary quantity-btn"
                              onClick={() => updateQuantity(item._id, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <div className="mt-1 small text-muted">
                            {item.stockQuantity > 0 ? `${item.stockQuantity} available` : 'Out of stock'}
                          </div>
                        </div>
                        
                        {/* Item Total & Remove */}
                        <div className="col-md-2 col-6 text-end">
                          <div className="d-md-none mb-1 fw-medium">Total:</div>
                          <div className="fw-bold mb-2">
                            MWK{(item.price * item.quantity)}
                          </div>
                          <button 
                            className="btn btn-sm text-danger p-0"
                            onClick={() => removeItem(item._id)}
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} className="me-1" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="card-footer bg-white py-3">
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                    <Link href="/products" className="btn btn-outline-secondary w-100 w-sm-auto">
                      <ArrowLeft size={18} className="me-1" /> Continue Shopping
                    </Link>
                    <button 
                      className="btn btn-primary w-100 w-sm-auto"
                      onClick={() => setStep('checkout')}
                    >
                      Proceed to Checkout <ArrowLeft size={18} className="ms-1" style={{ transform: 'rotate(180deg)' }} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Checkout Form */
              <div className="card shadow-sm">
                <div className="card-header bg-white py-3">
                  <h5 className="mb-0">Shipping Information</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="fullname" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                          id="fullname"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                        {errors.fullname && (
                          <div className="invalid-feedback">{errors.fullname}</div>
                        )}
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          required
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="phonenumber" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phonenumber ? 'is-invalid' : ''}`}
                          id="phonenumber"
                          name="phonenumber"
                          value={formData.phonenumber}
                          onChange={handleInputChange}
                          placeholder="+265 88 456 890"
                          required
                        />
                        {errors.phonenumber && (
                          <div className="invalid-feedback">{errors.phonenumber}</div>
                        )}
                      </div>
                      
                      <div className="col-12">
                        <label htmlFor="address" className="form-label">Full Address *</label>
                        <textarea
                          className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                          id="address"
                          name="address"
                          rows="3"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Your address"
                          required
                        />
                        {errors.address && (
                          <div className="invalid-feedback">{errors.address}</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="d-grid mt-4">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing Order...
                          </>
                        ) : (
                          <>Place Order</>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span className="fw-bold">MWK{subtotal}</span>
                </div>
              
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold fs-5">MWK{total}</span>
                </div>
                
                {step === 'cart' && (
                  <div className="d-grid mt-3 d-lg-block d-none">
                    <button 
                      className="btn btn-primary btn-lg w-100"
                      onClick={() => setStep('checkout')}
                    >
                      Checkout
                    </button>
                  </div>
                )}
                
                {/* Cart Items Summary (Visible on Checkout) */}
                {step === 'checkout' && (
                  <div className="mt-3">
                    <h6 className="mb-3">Cart Items ({cartItems.length})</h6>
                    <div className="summary-items">
                      {cartItems.map((item) => (
                        <div key={item._id} className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <div className="small-image me-2">
                              <img 
                                src={item.photo} 
                                alt={item.name}
                                className="img-fluid rounded"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                              />
                            </div>
                            <div>
                              <div className="small fw-bold">{item.name}</div>
                              <div className="text-muted small">Qty: {item.quantity}</div>
                            </div>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold">MWK{(item.price * item.quantity)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .cart-item {
          transition: background-color 0.2s;
        }
        
        .cart-item:hover {
          background-color: #f8f9fa;
        }
        
        .quantity-input::-webkit-inner-spin-button,
        .quantity-input::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        .quantity-input {
          -moz-appearance: textfield;
        }
        
        .quantity-control {
          max-width: 120px;
          margin: 0 auto;
        }
        
        .quantity-display {
          display: inline-block;
          min-width: 30px;
          padding: 0 5px;
          font-weight: 500;
        }
        
        .quantity-btn {
          border-radius: 4px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0 5px;
          border: 1px solid #dee2e6;
        }
        
        .summary-items {
          max-height: 300px;
          overflow-y: auto;
        }
        
        .form-control:focus,
        .btn:focus {
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
        
        @media (max-width: 767px) {
          .cart-item {
            padding: 15px 10px;
          }
          
          .cart-item-image {
            width: 70px;
          }
          
          .quantity-control {
            margin: 0;
          }
          
          .fw-medium {
            font-weight: 500;
          }
        }
        
        @media (min-width: 576px) {
          .w-sm-auto {
            width: auto !important;
          }
        }
      `}</style>
    </div>
  )
}