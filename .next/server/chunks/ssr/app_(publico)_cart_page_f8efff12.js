module.exports = {

"[project]/app/(publico)/cart/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// 'use client'
// import React, { useState, useEffect } from 'react'
// import { Trash2, ShoppingBag, Plus, Minus, ArrowLeft, CreditCard, Truck } from 'lucide-react'
// import Link from 'next/link'
// import { getCart, removeCartItem, emptyCartItems } from '@/helpers/core/CartFuncs'
// import axios from 'axios'
// import { ApiUrl } from '@/helpers/ApiUrl'
// import { getSupertoken } from '@/helpers/AccessToken'
// export default function ShoppingCart({ cartItems: initialCartItems }) {
//   const [cartItems, setCartItems] = useState([])
//   const [step, setStep] = useState('cart') // 'cart' or 'checkout'
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     phonenumber: '',
//     address: '',
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [errors, setErrors] = useState({})
//   const usertoken = getSupertoken()
//   useEffect(() => {
//     const items = getCart().map(item => ({ ...item, quantity: 1 }));
//     setCartItems(items);
//   }, []);
//   const subtotal = cartItems.reduce((acc, item) => {
//     return acc + (item.price * item.quantity)
//   }, 0)
//    const shippingCost = subtotal > 100 ? 0 : 15
//   // Total cost
//    const total = subtotal + shippingCost
//   // Update quantity
//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return
//     // Check if the new quantity exceeds available stock
//     const item = cartItems.find(item => item._id === id)
//     if (newQuantity > item.stockQuantity) {
//       alert(`Sorry, only ${item.stockQuantity} items are available in stock.`)
//       return
//     }
//     const updatedCart = cartItems.map(item => 
//       item._id === id ? { ...item, quantity: newQuantity } : item
//     )
//     setCartItems(updatedCart)
//   }
//   // Remove item from cart
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter(item => item._id !== id)
//     removeCartItem(id)
//     window.location.reload()
//     setCartItems(updatedCart)
//   }
//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value
//     })
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ''
//       })
//     }
//   }
//   // Validate form
//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.fullname.trim()) {
//       newErrors.fullname = 'Full name is required'
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = 'Email is invalid'
//     }
//     if (!formData.phonenumber.trim()) {
//       newErrors.phonenumber = 'Phone number is required'
//     }
//     if (!formData.address.trim()) {
//       newErrors.address = 'Address is required'
//     }
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) {
//       return
//     }
//     setIsSubmitting(true)
//     try {
//       // Prepare cart data for submission
//       const cartData = {
//         ...formData,
//         cartContents: cartItems.map(item => ({
//           product: item._id,
//           quantity: item.quantity
//         })),
//         amount: total
//       }
//       const response = await axios.post(`${ApiUrl}/shopper/add_to_cart`, cartData, {
//         headers: {
//           Authorization: `Bearer ${usertoken}`
//         }
//       })
//       if(response.data.msg) {
//         alert(response.data.msg)
//         setCartItems([])
//         emptyCartItems()
//         window.location.reload()
//       setFormData({
//         fullname: '',
//         email: '',
//         phonenumber: '',
//         address: '',
//       })
//       }
//       // Return to cart view
//       setStep('cart')
//     } catch (error) {
//       console.error('Error submitting order:', error)
//       alert('There was an error placing your order. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }
//   // If cart is empty
//   if (cartItems.length === 0) {
//     return (
//       <div className="container py-5">
//         <div className="empty-cart text-center py-5">
//           <div className="empty-cart-icon mb-4">
//             <ShoppingBag size={80} color="#ccc" />
//           </div>
//           <h2 className="mb-3">Your cart is empty</h2>
//           <p className="text-muted mb-4">Looks like you have not added any items to your cart yet.</p>
//           <Link href="/products" className="btn btn-primary btn-lg">
//             Continue Shopping
//           </Link>
//         </div>
//       </div>
//     )
//   }
//   return (
//     <div className="shopping-cart">
//       <div className="container py-5">
//         <h1 className="mb-4 fw-bold">{step === 'cart' ? 'Shopping Cart' : 'Checkout'}</h1>
//         {step === 'checkout' && (
//           <button 
//             onClick={() => setStep('cart')} 
//             className="btn btn-link text-decoration-none mb-3 ps-0"
//           >
//             <ArrowLeft size={18} className="me-1" /> Back to cart
//           </button>
//         )}
//         <div className="row g-4">
//           <div className="col-lg-8">
//             {step === 'cart' ? (
//               <div className="card shadow-sm">
//                 <div className="card-header bg-white py-3">
//                   <div className="row align-items-center">
//                     <div className="col-6">
//                       <h5 className="mb-0">Product</h5>
//                     </div>
//                     <div className="col-2 text-center d-none d-md-block">
//                       <h5 className="mb-0">Price</h5>
//                     </div>
//                     <div className="col-2 text-center">
//                       <h5 className="mb-0">Quantity</h5>
//                     </div>
//                     <div className="col-2 text-end">
//                       <h5 className="mb-0">Total</h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body p-0">
//                   {cartItems.map((item) => (
//                     <div key={item._id} className="cart-item border-bottom p-3">
//                       <div className="row align-items-center">
//                         {/* Product Image & Info */}
//                         <div className="col-md-6 col-12 mb-3 mb-md-0">
//                           <div className="d-flex align-items-center">
//                             <div className="cart-item-image me-3">
//                               <img 
//                                 src={item.photo} 
//                                 alt={item.name} 
//                                 className="img-fluid rounded"
//                                 style={{ maxWidth: '80px', maxHeight: '80px', objectFit: 'cover' }}
//                               />
//                             </div>
//                             <div className="cart-item-details">
//                               <h6 className="mb-1">{item.name}</h6>
//                               <div className="text-muted small d-md-none">
//                                 MWK{item.price}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* Price */}
//                         <div className="col-md-2 col-12 text-center d-none d-md-block">
//                           <div className="fw-bold">MWK{item.price}</div>
//                         </div>
//                         {/* Quantity */}
//                         <div className="col-md-2 col-6 text-center">
//                           <div className="quantity-control d-flex align-items-center justify-content-center">
//                             <button 
//                               className="btn btn-sm btn-outline-secondary border-0"
//                               onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                               aria-label="Decrease quantity"
//                             >
//                               <Minus size={16} />
//                             </button>
//                             <span>
//   {Math.max(1, Math.min(item.quantity, item.stockQuantity))}
// </span>
//                             <button 
//                               className="btn btn-sm btn-outline-secondary border-0"
//                               onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                               aria-label="Increase quantity"
//                             >
//                               <Plus size={16} />
//                             </button>
//                           </div>
//                           <div className="mt-1 small text-muted">
//                             {item.stockQuantity > 0 ? `${item.stockQuantity} available` : 'Out of stock'}
//                           </div>
//                         </div>
//                         {/* Item Total & Remove */}
//                         <div className="col-md-2 col-6 text-end">
//                           <div className="fw-bold mb-2">
//                             MWK{(item.price * item.quantity)}
//                           </div>
//                           <button 
//                             className="btn btn-sm text-danger p-0"
//                             onClick={() => removeItem(item._id)}
//                             aria-label="Remove item"
//                           >
//                             <Trash2 size={16} className="me-1" /> Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="card-footer bg-white py-3">
//                   <div className="d-flex justify-content-between align-items-center">
//                     <Link href="/products" className="btn btn-outline-secondary">
//                       <ArrowLeft size={18} className="me-1" /> Continue Shopping
//                     </Link>
//                     <button 
//                       className="btn btn-primary"
//                       onClick={() => setStep('checkout')}
//                     >
//                       Proceed to Checkout <ArrowLeft size={18} className="ms-1" style={{ transform: 'rotate(180deg)' }} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               /* Checkout Form */
//               <div className="card shadow-sm">
//                 <div className="card-header bg-white py-3">
//                   <h5 className="mb-0">Shipping Information</h5>
//                 </div>
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit}>
//                     <div className="row g-3">
//                       <div className="col-12">
//                         <label htmlFor="fullname" className="form-label">Full Name *</label>
//                         <input
//                           type="text"
//                           className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
//                           id="fullname"
//                           name="fullname"
//                           value={formData.fullname}
//                           onChange={handleInputChange}
//                           placeholder="Enter your full name"
//                           required
//                         />
//                         {errors.fullname && (
//                           <div className="invalid-feedback">{errors.fullname}</div>
//                         )}
//                       </div>
//                       <div className="col-md-6">
//                         <label htmlFor="email" className="form-label">Email Address *</label>
//                         <input
//                           type="email"
//                           className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="you@example.com"
//                           required
//                         />
//                         {errors.email && (
//                           <div className="invalid-feedback">{errors.email}</div>
//                         )}
//                       </div>
//                       <div className="col-md-6">
//                         <label htmlFor="phonenumber" className="form-label">Phone Number *</label>
//                         <input
//                           type="tel"
//                           className={`form-control ${errors.phonenumber ? 'is-invalid' : ''}`}
//                           id="phonenumber"
//                           name="phonenumber"
//                           value={formData.phonenumber}
//                           onChange={handleInputChange}
//                           placeholder="+265 88 456 890"
//                           required
//                         />
//                         {errors.phonenumber && (
//                           <div className="invalid-feedback">{errors.phonenumber}</div>
//                         )}
//                       </div>
//                       <div className="col-12">
//                         <label htmlFor="address" className="form-label">Full Address *</label>
//                         <textarea
//                           className={`form-control ${errors.address ? 'is-invalid' : ''}`}
//                           id="address"
//                           name="address"
//                           rows="3"
//                           value={formData.address}
//                           onChange={handleInputChange}
//                           placeholder="Your address"
//                           required
//                         />
//                         {errors.address && (
//                           <div className="invalid-feedback">{errors.address}</div>
//                         )}
//                       </div>
//                     </div>
//                     <div className="d-grid mt-4">
//                       <button 
//                         type="submit" 
//                         className="btn btn-primary btn-lg"
//                         disabled={isSubmitting}
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                             Processing Order...
//                           </>
//                         ) : (
//                           <>Place Order</>
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Order Summary */}
//           <div className="col-lg-4">
//             <div className="card shadow-sm">
//               <div className="card-header bg-white py-3">
//                 <h5 className="mb-0">Order Summary</h5>
//               </div>
//               <div className="card-body">
//                 <div className="d-flex justify-content-between mb-2">
//                   <span>Subtotal</span>
//                   <span className="fw-bold">MWK{subtotal}</span>
//                 </div>
//                 <hr />
//                 <div className="d-flex justify-content-between mb-2">
//                   <span className="fw-bold">Total</span>
//                   <span className="fw-bold fs-5">MWK{total}</span>
//                 </div>
//                 {step === 'cart' && (
//                   <div className="d-grid mt-3">
//                     <button 
//                       className="btn btn-primary btn-lg"
//                       onClick={() => setStep('checkout')}
//                     >
//                       Checkout
//                     </button>
//                   </div>
//                 )}
//                 {/* Cart Items Summary (Visible on Checkout) */}
//                 {step === 'checkout' && (
//                   <div className="mt-3">
//                     <h6 className="mb-3">Cart Items ({cartItems.length})</h6>
//                     <div className="summary-items">
//                       {cartItems.map((item) => (
//                         <div key={item._id} className="d-flex justify-content-between align-items-center mb-2">
//                           <div className="d-flex align-items-center">
//                             <div className="small-image me-2">
//                               <img 
//                                 src={item.photo} 
//                                 alt={item.name}
//                                 className="img-fluid rounded"
//                                 style={{ width: '40px', height: '40px', objectFit: 'cover' }}
//                               />
//                             </div>
//                             <div>
//                               <div className="small fw-bold">{item.name}</div>
//                               <div className="text-muted small">Qty: {item.quantity}</div>
//                             </div>
//                           </div>
//                           <div className="text-end">
//                             <div className="fw-bold">MWK{(item.price * item.quantity)}</div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx global>{`
//         .cart-item {
//           transition: background-color 0.2s;
//         }
//         .cart-item:hover {
//           background-color: #f8f9fa;
//         }
//         .quantity-input::-webkit-inner-spin-button,
//         .quantity-input::-webkit-outer-spin-button {
//           -webkit-appearance: none;
//           margin: 0;
//         }
//         .quantity-input {
//           -moz-appearance: textfield;
//         }
//         .summary-items {
//           max-height: 300px;
//           overflow-y: auto;
//         }
//         .form-control:focus,
//         .btn:focus {
//           box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
//         }
//         @media (max-width: 768px) {
//           .cart-item {
//             padding: 15px 10px;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }
__turbopack_context__.s({
    "default": (()=>ShoppingCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$core$2f$CartFuncs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helpers/core/CartFuncs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helpers/ApiUrl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$AccessToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/helpers/AccessToken.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function ShoppingCart({ cartItems: initialCartItems }) {
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('cart') // 'cart' or 'checkout'
    ;
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullname: '',
        email: '',
        phonenumber: '',
        address: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const usertoken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$AccessToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupertoken"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$core$2f$CartFuncs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCart"])().map((item)=>({
                ...item,
                quantity: 1
            }));
        setCartItems(items);
    }, []);
    const subtotal = cartItems.reduce((acc, item)=>{
        return acc + item.price * item.quantity;
    }, 0);
    const shippingCost = subtotal > 100 ? 0 : 15;
    // Total cost
    const total = subtotal + shippingCost;
    // Update quantity
    const updateQuantity = (id, newQuantity)=>{
        if (newQuantity < 1) return;
        // Check if the new quantity exceeds available stock
        const item = cartItems.find((item)=>item._id === id);
        if (newQuantity > item.stockQuantity) {
            alert(`Sorry, only ${item.stockQuantity} items are available in stock.`);
            return;
        }
        const updatedCart = cartItems.map((item)=>item._id === id ? {
                ...item,
                quantity: newQuantity
            } : item);
        setCartItems(updatedCart);
    };
    // Remove item from cart
    const removeItem = (id)=>{
        const updatedCart = cartItems.filter((item)=>item._id !== id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$core$2f$CartFuncs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeCartItem"])(id);
        window.location.reload();
        setCartItems(updatedCart);
    };
    // Handle input change
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };
    // Validate form
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.fullname.trim()) {
            newErrors.fullname = 'Full name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phonenumber.trim()) {
            newErrors.phonenumber = 'Phone number is required';
        }
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        try {
            // Prepare cart data for submission
            const cartData = {
                ...formData,
                cartContents: cartItems.map((item)=>({
                        product: item._id,
                        quantity: item.quantity
                    })),
                amount: total
            };
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$ApiUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUrl"]}/shopper/add_to_cart`, cartData, {
                headers: {
                    Authorization: `Bearer ${usertoken}`
                }
            });
            if (response.data.msg) {
                alert(response.data.msg);
                setCartItems([]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$core$2f$CartFuncs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptyCartItems"])();
                window.location.reload();
                setFormData({
                    fullname: '',
                    email: '',
                    phonenumber: '',
                    address: ''
                });
            }
            // Return to cart view
            setStep('cart');
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('There was an error placing your order. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    // If cart is empty
    if (cartItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-cart text-center py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty-cart-icon mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                            size: 80,
                            color: "#ccc"
                        }, void 0, false, {
                            fileName: "[project]/app/(publico)/cart/page.js",
                            lineNumber: 686,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(publico)/cart/page.js",
                        lineNumber: 685,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3",
                        children: "Your cart is empty"
                    }, void 0, false, {
                        fileName: "[project]/app/(publico)/cart/page.js",
                        lineNumber: 688,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted mb-4",
                        children: "Looks like you have not added any items to your cart yet."
                    }, void 0, false, {
                        fileName: "[project]/app/(publico)/cart/page.js",
                        lineNumber: 689,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/products",
                        className: "btn btn-primary btn-lg",
                        children: "Continue Shopping"
                    }, void 0, false, {
                        fileName: "[project]/app/(publico)/cart/page.js",
                        lineNumber: 690,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(publico)/cart/page.js",
                lineNumber: 684,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(publico)/cart/page.js",
            lineNumber: 683,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-51f4b1c7c612807c" + " " + "shopping-cart",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-51f4b1c7c612807c" + " " + "container py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-51f4b1c7c612807c" + " " + "mb-4 fw-bold",
                        children: step === 'cart' ? 'Shopping Cart' : 'Checkout'
                    }, void 0, false, {
                        fileName: "[project]/app/(publico)/cart/page.js",
                        lineNumber: 701,
                        columnNumber: 9
                    }, this),
                    step === 'checkout' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStep('cart'),
                        className: "jsx-51f4b1c7c612807c" + " " + "btn btn-link text-decoration-none mb-3 ps-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 18,
                                className: "me-1"
                            }, void 0, false, {
                                fileName: "[project]/app/(publico)/cart/page.js",
                                lineNumber: 708,
                                columnNumber: 13
                            }, this),
                            " Back to cart"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(publico)/cart/page.js",
                        lineNumber: 704,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-51f4b1c7c612807c" + " " + "row g-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-51f4b1c7c612807c" + " " + "col-lg-8",
                                children: step === 'cart' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-51f4b1c7c612807c" + " " + "card shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-header bg-white py-3 d-md-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-51f4b1c7c612807c" + " " + "mb-0",
                                                children: "Your Items"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                lineNumber: 718,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 717,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-header bg-white py-3 d-none d-md-block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-51f4b1c7c612807c" + " " + "row align-items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-51f4b1c7c612807c" + " " + "col-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "mb-0",
                                                            children: "Product"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 725,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-51f4b1c7c612807c" + " " + "col-2 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "mb-0",
                                                            children: "Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 728,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-51f4b1c7c612807c" + " " + "col-2 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "mb-0",
                                                            children: "Quantity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 731,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 730,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-51f4b1c7c612807c" + " " + "col-2 text-end",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "mb-0",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 734,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 733,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                lineNumber: 723,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 722,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-body p-0",
                                            children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-51f4b1c7c612807c" + " " + "cart-item border-bottom p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-51f4b1c7c612807c" + " " + "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-md-6 col-12 mb-3 mb-md-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-51f4b1c7c612807c" + " " + "d-flex align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-51f4b1c7c612807c" + " " + "cart-item-image me-3",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: item.photo,
                                                                                alt: item.name,
                                                                                style: {
                                                                                    width: '80px',
                                                                                    height: '80px',
                                                                                    objectFit: 'cover'
                                                                                },
                                                                                className: "jsx-51f4b1c7c612807c" + " " + "img-fluid rounded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                                lineNumber: 747,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                            lineNumber: 746,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-51f4b1c7c612807c" + " " + "cart-item-details",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                    className: "jsx-51f4b1c7c612807c" + " " + "mb-1",
                                                                                    children: item.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                                    lineNumber: 755,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-51f4b1c7c612807c" + " " + "d-md-none",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-51f4b1c7c612807c" + " " + "fw-bold me-2",
                                                                                            children: "Price:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                                            lineNumber: 757,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "jsx-51f4b1c7c612807c" + " " + "fw-bold",
                                                                                            children: [
                                                                                                "MWK",
                                                                                                item.price
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                                            lineNumber: 758,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                                    lineNumber: 756,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                            lineNumber: 754,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                    lineNumber: 745,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 744,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-md-2 col-12 text-center d-none d-md-block",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-51f4b1c7c612807c" + " " + "fw-bold",
                                                                    children: [
                                                                        "MWK",
                                                                        item.price
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                    lineNumber: 766,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 765,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-md-2 col-6 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "d-md-none mb-1 fw-medium",
                                                                        children: "Quantity:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 771,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "quantity-control d-flex align-items-center justify-content-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>updateQuantity(item._id, item.quantity - 1),
                                                                                "aria-label": "Decrease quantity",
                                                                                className: "jsx-51f4b1c7c612807c" + " " + "btn btn-sm btn-outline-secondary quantity-btn",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                                    size: 16
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                                    lineNumber: 778,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                                lineNumber: 773,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-51f4b1c7c612807c" + " " + "quantity-display",
                                                                                children: Math.max(1, Math.min(item.quantity, item.stockQuantity))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                                lineNumber: 780,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>updateQuantity(item._id, item.quantity + 1),
                                                                                "aria-label": "Increase quantity",
                                                                                className: "jsx-51f4b1c7c612807c" + " " + "btn btn-sm btn-outline-secondary quantity-btn",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    size: 16
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                                    lineNumber: 788,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                                lineNumber: 783,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 772,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "mt-1 small text-muted",
                                                                        children: item.stockQuantity > 0 ? `${item.stockQuantity} available` : 'Out of stock'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 791,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 770,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-md-2 col-6 text-end",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "d-md-none mb-1 fw-medium",
                                                                        children: "Total:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 798,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "fw-bold mb-2",
                                                                        children: [
                                                                            "MWK",
                                                                            item.price * item.quantity
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 799,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeItem(item._id),
                                                                        "aria-label": "Remove item",
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "btn btn-sm text-danger p-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 16,
                                                                                className: "me-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                                lineNumber: 807,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " Remove"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 802,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 797,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 742,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item._id, false, {
                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                    lineNumber: 741,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 739,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-footer bg-white py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-51f4b1c7c612807c" + " " + "d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/products",
                                                        className: "btn btn-outline-secondary w-100 w-sm-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                size: 18,
                                                                className: "me-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 818,
                                                                columnNumber: 23
                                                            }, this),
                                                            " Continue Shopping"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 817,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setStep('checkout'),
                                                        className: "jsx-51f4b1c7c612807c" + " " + "btn btn-primary w-100 w-sm-auto",
                                                        children: [
                                                            "Proceed to Checkout ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                size: 18,
                                                                className: "ms-1",
                                                                style: {
                                                                    transform: 'rotate(180deg)'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 824,
                                                                columnNumber: 43
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 820,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                lineNumber: 816,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 815,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(publico)/cart/page.js",
                                    lineNumber: 715,
                                    columnNumber: 15
                                }, this) : /* Checkout Form */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-51f4b1c7c612807c" + " " + "card shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-header bg-white py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-51f4b1c7c612807c" + " " + "mb-0",
                                                children: "Shipping Information"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                lineNumber: 833,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 832,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-body",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit,
                                                className: "jsx-51f4b1c7c612807c",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-51f4b1c7c612807c" + " " + "row g-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-12",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "fullname",
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "form-label",
                                                                        children: "Full Name *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 839,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "fullname",
                                                                        name: "fullname",
                                                                        value: formData.fullname,
                                                                        onChange: handleInputChange,
                                                                        placeholder: "Enter your full name",
                                                                        required: true,
                                                                        className: "jsx-51f4b1c7c612807c" + " " + `form-control ${errors.fullname ? 'is-invalid' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 840,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    errors.fullname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "invalid-feedback",
                                                                        children: errors.fullname
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 851,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 838,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-md-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "email",
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "form-label",
                                                                        children: "Email Address *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 856,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        id: "email",
                                                                        name: "email",
                                                                        value: formData.email,
                                                                        onChange: handleInputChange,
                                                                        placeholder: "you@example.com",
                                                                        required: true,
                                                                        className: "jsx-51f4b1c7c612807c" + " " + `form-control ${errors.email ? 'is-invalid' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 857,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "invalid-feedback",
                                                                        children: errors.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 868,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 855,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-md-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "phonenumber",
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "form-label",
                                                                        children: "Phone Number *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 873,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        id: "phonenumber",
                                                                        name: "phonenumber",
                                                                        value: formData.phonenumber,
                                                                        onChange: handleInputChange,
                                                                        placeholder: "+265 88 456 890",
                                                                        required: true,
                                                                        className: "jsx-51f4b1c7c612807c" + " " + `form-control ${errors.phonenumber ? 'is-invalid' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 874,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    errors.phonenumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "invalid-feedback",
                                                                        children: errors.phonenumber
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 885,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 872,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-51f4b1c7c612807c" + " " + "col-12",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "address",
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "form-label",
                                                                        children: "Full Address *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 890,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        id: "address",
                                                                        name: "address",
                                                                        rows: "3",
                                                                        value: formData.address,
                                                                        onChange: handleInputChange,
                                                                        placeholder: "Your address",
                                                                        required: true,
                                                                        className: "jsx-51f4b1c7c612807c" + " " + `form-control ${errors.address ? 'is-invalid' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 891,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "invalid-feedback",
                                                                        children: errors.address
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 902,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                lineNumber: 889,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 837,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-51f4b1c7c612807c" + " " + "d-grid mt-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: isSubmitting,
                                                            className: "jsx-51f4b1c7c612807c" + " " + "btn btn-primary btn-lg",
                                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        role: "status",
                                                                        "aria-hidden": "true",
                                                                        className: "jsx-51f4b1c7c612807c" + " " + "spinner-border spinner-border-sm me-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                        lineNumber: 915,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Processing Order..."
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: "Place Order"
                                                            }, void 0, false)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 908,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 907,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                lineNumber: 836,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 835,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(publico)/cart/page.js",
                                    lineNumber: 831,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(publico)/cart/page.js",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-51f4b1c7c612807c" + " " + "col-lg-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-51f4b1c7c612807c" + " " + "card shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-header bg-white py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-51f4b1c7c612807c" + " " + "mb-0",
                                                children: "Order Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 932,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-51f4b1c7c612807c" + " " + "card-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-51f4b1c7c612807c" + " " + "d-flex justify-content-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-51f4b1c7c612807c",
                                                            children: "Subtotal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 937,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "fw-bold",
                                                            children: [
                                                                "MWK",
                                                                subtotal
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 938,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                    lineNumber: 936,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                    className: "jsx-51f4b1c7c612807c"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                    lineNumber: 941,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-51f4b1c7c612807c" + " " + "d-flex justify-content-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "fw-bold",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 943,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "fw-bold fs-5",
                                                            children: [
                                                                "MWK",
                                                                total
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 944,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                    lineNumber: 942,
                                                    columnNumber: 17
                                                }, this),
                                                step === 'cart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-51f4b1c7c612807c" + " " + "d-grid mt-3 d-lg-block d-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setStep('checkout'),
                                                        className: "jsx-51f4b1c7c612807c" + " " + "btn btn-primary btn-lg w-100",
                                                        children: "Checkout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                        lineNumber: 949,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                    lineNumber: 948,
                                                    columnNumber: 19
                                                }, this),
                                                step === 'checkout' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-51f4b1c7c612807c" + " " + "mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "mb-3",
                                                            children: [
                                                                "Cart Items (",
                                                                cartItems.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 961,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-51f4b1c7c612807c" + " " + "summary-items",
                                                            children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-51f4b1c7c612807c" + " " + "d-flex justify-content-between align-items-center mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-51f4b1c7c612807c" + " " + "d-flex align-items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-51f4b1c7c612807c" + " " + "small-image me-2",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        src: item.photo,
                                                                                        alt: item.name,
                                                                                        style: {
                                                                                            width: '40px',
                                                                                            height: '40px',
                                                                                            objectFit: 'cover'
                                                                                        },
                                                                                        className: "jsx-51f4b1c7c612807c" + " " + "img-fluid rounded"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/(publico)/cart/page.js",
                                                                                        lineNumber: 967,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                                    lineNumber: 966,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-51f4b1c7c612807c",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-51f4b1c7c612807c" + " " + "small fw-bold",
                                                                                            children: item.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                                            lineNumber: 975,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-51f4b1c7c612807c" + " " + "text-muted small",
                                                                                            children: [
                                                                                                "Qty: ",
                                                                                                item.quantity
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                                            lineNumber: 976,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                                    lineNumber: 974,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                            lineNumber: 965,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-51f4b1c7c612807c" + " " + "text-end",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-51f4b1c7c612807c" + " " + "fw-bold",
                                                                                children: [
                                                                                    "MWK",
                                                                                    item.price * item.quantity
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(publico)/cart/page.js",
                                                                                lineNumber: 980,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                                            lineNumber: 979,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, item._id, true, {
                                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                                    lineNumber: 964,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(publico)/cart/page.js",
                                                            lineNumber: 962,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(publico)/cart/page.js",
                                                    lineNumber: 960,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(publico)/cart/page.js",
                                            lineNumber: 935,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(publico)/cart/page.js",
                                    lineNumber: 931,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(publico)/cart/page.js",
                                lineNumber: 930,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(publico)/cart/page.js",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(publico)/cart/page.js",
                lineNumber: 700,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "51f4b1c7c612807c",
                children: ".cart-item{transition:background-color .2s}.cart-item:hover{background-color:#f8f9fa}:is(.quantity-input::-webkit-inner-spin-button,.quantity-input::-webkit-outer-spin-button){-webkit-appearance:none;margin:0}.quantity-input{-moz-appearance:textfield}.quantity-control{max-width:120px;margin:0 auto}.quantity-display{min-width:30px;padding:0 5px;font-weight:500;display:inline-block}.quantity-btn{border:1px solid #dee2e6;border-radius:4px;justify-content:center;align-items:center;width:30px;height:30px;margin:0 5px;padding:0;display:flex}.summary-items{max-height:300px;overflow-y:auto}.form-control:focus,.btn:focus{box-shadow:0 0 0 .25rem #0d6efd40}@media (width<=767px){.cart-item{padding:15px 10px}.cart-item-image{width:70px}.quantity-control{margin:0}.fw-medium{font-weight:500}}@media (width>=576px){.w-sm-auto{width:auto!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(publico)/cart/page.js",
        lineNumber: 699,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_%28publico%29_cart_page_f8efff12.js.map