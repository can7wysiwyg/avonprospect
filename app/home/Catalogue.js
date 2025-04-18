'use client'

import { getCategories, getProducts } from '@/helpers/core/CoreFuncs'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { addItem } from "@/helpers/core/CartFuncs";


export default function Catalogue() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeFilter, setActiveFilter] = useState('all')
    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false);
    
      const shouldRedirect = (redirect) => {
        if (redirect) {
          return (window.location.href = "/cart");
        }
      };
    

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true)
                const prods = await getProducts()
                const cats = await getCategories()

                if(prods && cats) {
                    setProducts(prods.products)
                    setFilteredProducts(prods.products)
                    
                    // Limit to 4 categories max
                    const limitedCats = cats.categories.slice(0, 4)
                    setCategories(limitedCats)
                }
            } catch (error) {
                console.log("There was a problem fetching data:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    // Filter products based on category
    const filterProducts = (categoryId) => {
        setActiveFilter(categoryId)
        
        if (categoryId === 'all') {
            //12 products max for display
            setFilteredProducts(products.slice(0, 12))
        } else {
            const filtered = products.filter(product => product.category === categoryId)
            //4 products per category  
            setFilteredProducts(filtered.slice(0, 4))
        }
    }


    useEffect(() => {
        if (products.length > 0) {
            setFilteredProducts(products.slice(0, 12))
        }
    }, [products])

    return (
        <>
            {shouldRedirect(redirect)}

            <section id="products" className="my-5">
                <div className="container my-5 py-5">
                    <div className="section-header d-md-flex justify-content-between align-items-center">
                        <h2 className="display-3 fw-normal">Our Products</h2>
                        <div className="mb-4 mb-md-0">
                            <p className="m-0">
                                <button 
                                    className={`filter-button me-4 ${activeFilter === 'all' ? 'active' : ''}`} 
                                    onClick={() => filterProducts('all')}
                                >
                                    ALL
                                </button>
                                
                                {categories.map(category => (
                                    <button 
                                        key={category._id}
                                        className={`filter-button me-4 ${activeFilter === category._id ? 'active' : ''}`} 
                                        onClick={() => filterProducts(category._id)}
                                    >
                                        {category.catName.toUpperCase()}
                                    </button>
                                ))}
                            </p>
                        </div>
                        <div>
                            <Link href="/products" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                                shop now
                                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                                    <use xlinkHref="#arrow-right"></use>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            {filteredProducts.map(product => (
                                <div key={product._id} className="col-md-4 my-4">
                                 <div className="card h-100 border-0 shadow-sm product-card">
                                    <div className="position-relative">
                                        {product.newArrival && (
                                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                                                New
                                            </div>
                                        )}
                                        
                                        {product.isStock === false && (
                                            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-danger bg-danger-subtle text-danger">
                                                Out of Stock
                                            </div>
                                        )}
                                        <div className={`card position-relative ${product.isStock === false ? 'out-of-stock' : ''}`}>
                                            <Link href={`/${product._id}`}>
                                                <img 
                                                    src={product.photo} 
                                                    className={`card-img-top ${product.isStock === false ? 'opacity-50' : ''}`}
                                                    alt={product.name}
                                                    style={{ height: '200px', objectFit: 'cover' }}
                                                />
                                            </Link>
                                            <div className="card-body p-0">
                                                <Link href={`/${product._id}`}>
                                                    <h5 className="card-title pt-4 m-0">{product.name}</h5>
                                                </Link>

                                                <div className="d-flex justify-content-between align-items-center mt-3">
                                                <span className="fw-bold text-primary">
                            MWK{product.price}
                          </span>

                                                
                                                        <button 
                                                            className={`btn btn-primary btn-sm ${product.inStock === false ? 'disabled' : ''}`}
                                                            disabled={product.inStock === false}

                                                            onClick={() => {
                                                                addItem(product, () => {
                                                                  setRedirect(true);
                                                                });
                                                              }}
                                                        >
                                                            
                                                                <ShoppingCart size={18} className="me-1" />
                                                                <span className="text-uppercase m-0">
                                                                    {product.inStock === false ? 'Out of Stock' : 'Add to Cart'}
                                                                </span>
                                                        
                                                        </button>
                                                        
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <style jsx global>{`
                .filter-button {
                    background: none;
                    border: none;
                    font-weight: 500;
                    cursor: pointer;
                    transition: color 0.3s ease;
                    padding: 5px 0;
                    position: relative;
                }
                
                .filter-button:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #0d6efd;
                    transition: width 0.3s ease;
                }
                
                .filter-button:hover:after,
                .filter-button.active:after {
                    width: 100%;
                }
                
                .filter-button.active {
                    color: #0d6efd;
                }
                
                
                .btn-cart:hover {
                    background-color: #0d6efd;
                    transform: translateY(-2px);
                }
                
                .btn-cart.disabled {
                    background-color: #6c757d;
                    cursor: not-allowed;
                    opacity: 0.65;
                    pointer-events: none;
                }
                
                
                
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                .card.out-of-stock:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
                }
                
                               .z-1 {
                    z-index: 1;
                    background-color: white;
                    font-weight: 600;
                    font-size: 0.8rem;
                }
                
                a {
                    text-decoration: none;
                }
                
                @media (max-width: 767px) {
                    .section-header {
                        text-align: center;
                    }
                
                    .section-header .btn {
                        margin-top: 1rem;
                    }
                
                    .display-3 {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </>
    )
}