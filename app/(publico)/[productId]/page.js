'use client'
import { getProduct } from '@/helpers/core/CoreFuncs'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { ShoppingCart, Heart, Share2, Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true)
        const data = await getProduct(productId)

        if(data && data.product) {
          setProduct(data.product)
        } else {
          setError('Product not found')
        }
      } catch (error) {
        console.log("There was a problem fetching the product:", error)
        setError('Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [productId])

  
  // Demo function for adding to cart - replace with actual implementation
  const addToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart`)
    // Implement actual cart functionality here
  }

  
  if (loading) {
    return (
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          {error || 'Product not found'}
        </div>
        <Link href="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    )
  }

  // Fallback for missing images
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl || '/placeholder-product.jpg']

  // Fallback for sizes and colors
  const sizes = product.sizes || ['S', 'M', 'L', 'XL']
  const colors = product.colors || ['#000000', '#3B82F6', '#EF4444', '#10B981']

  // Generate star ratings
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} fill="#FFD700" color="#FFD700" size={20} />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="#FFD700" color="#FFD700" size={20} />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} color="#FFD700" size={20} />)
    }

    return stars
  }

  return (
    <div className="product-page">
      <div className="container py-5">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item"><Link href="/products">Products</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="row">
        
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="product-gallery">
              <div className="main-image-container position-relative">
                
                <div className="main-image">
                  <img 
                    src={product.photo} 
                    alt={product.name} 
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                
              </div>

                            
            
            </div>
          </div>

          {/* Product Details */}
          <div className="col-lg-6">
            <div className="product-details">
              <h1 className="product-title display-5 fw-bold mb-1">{product.name}</h1>
              
             
              <div className="product-price mb-4">
                
                  <span className="fs-2 fw-bold">MWK{product.price}</span>
                
              </div>

              <div className="product-description mb-4">
                
                <p className="text-muted">{product.description}</p>
              </div>

              {/* Product Options */}
              <div className="product-options mb-4">
                
                
                
                {/* Stock Status */}
                <div className="stock-status mb-4">
                  <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  {product.stockQuantity && (
                    <span className="ms-2 text-muted">
                      ({product.stockQuantity} available)
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="action-buttons d-flex flex-wrap gap-2 mb-4">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={addToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart size={20} className="me-2" />
                    Add to Cart
                  </button>
                  
                  <button className="btn btn-outline-dark btn-lg">
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Product Meta Info */}
                <div className="product-meta">
                  
                  <div className="mb-2">
                    <strong>Categories:</strong> 
                    {product.categories ? (
                      product.categories.map((cat, idx) => (
                        <span key={idx}>
                          <Link href={`/category/${cat}`} className="text-decoration-none ms-1">
                            {cat.catName}
                          </Link>
                          {idx < product.categories.length - 1 ? ',' : ''}
                        </span>
                      ))
                    ) : (
                      <span className="text-muted ms-1">Uncategorized</span>
                    )}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs - Can be expanded with full description, reviews, etc. */}
      <div className="container mb-5">
        <ul className="nav nav-tabs" id="productTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link active" 
              id="description-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#description" 
              type="button" 
              role="tab" 
              aria-controls="description" 
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" 
              id="reviews-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#reviews" 
              type="button" 
              role="tab" 
              aria-controls="reviews" 
              aria-selected="false"
            >
              Reviews
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" 
              id="shipping-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#shipping" 
              type="button" 
              role="tab" 
              aria-controls="shipping" 
              aria-selected="false"
            >
              Shipping & Returns
            </button>
          </li>
        </ul>
        <div className="tab-content p-4 border border-top-0 rounded-bottom" id="productTabsContent">
          <div 
            className="tab-pane fade show active" 
            id="description" 
            role="tabpanel" 
            aria-labelledby="description-tab"
          >
            <div className="row">
              <div className="col-md-8">
                <h3>Product Details</h3>
                <p className="lead">
                  {product.fullDescription || product.description || 'No detailed description available.'}
                </p>
                
                {/* Placeholder content if no full description available */}
                {!product.fullDescription && !product.description && (
                  <>
                    <p>This premium product offers exceptional quality and value. Designed with the modern consumer in mind, it combines functionality with elegant aesthetics.</p>
                    <p>Features include:</p>
                    <ul>
                      <li>High-quality materials for durability</li>
                      <li>Ergonomic design for comfort</li>
                      <li>Versatile application</li>
                      <li>Easy maintenance</li>
                    </ul>
                  </>
                )}
              </div>
              <div className="col-md-4">
                {product.features && (
                  <div className="features-list">
                    <h4>Features</h4>
                    <ul className="list-group list-group-flush">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="list-group-item">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div 
            className="tab-pane fade" 
            id="reviews" 
            role="tabpanel" 
            aria-labelledby="reviews-tab"
          >
            <h3>Customer Reviews</h3>
            <p className="text-muted">Reviews will be displayed here.</p>
          </div>
          <div 
            className="tab-pane fade" 
            id="shipping" 
            role="tabpanel" 
            aria-labelledby="shipping-tab"
          >
            <h3>Shipping & Returns</h3>
            <p>Free shipping on all orders over $50. Returns accepted within 30 days of purchase.</p>
          </div>
        </div>
      </div>

      {/* Related Products Section - As a placeholder */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Related Products</h2>
          <div className="row">
            <div className="col-12">
              <p className="text-muted">Related products will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Main Image Gallery */
        .main-image-container {
          position: relative;
          overflow: hidden;
          background-color: #fff;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .main-image {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
        }
        
        .main-image img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        
        /* Thumbnail Gallery */
        .thumbnail-gallery {
          gap: 10px;
        }
        
        .thumbnail-item {
          width: 80px;
          height: 80px;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.2s ease;
          border: 2px solid transparent;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .thumbnail-item:hover {
          opacity: 0.9;
        }
        
        .thumbnail-item.active {
          opacity: 1;
          border-color: var(--bs-primary);
        }
        
        .thumbnail-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Carousel Controls */
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: all 0.2s;
        }
        
        .carousel-control:hover {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
        }
        
        .carousel-control-prev {
          left: 10px;
        }
        
        .carousel-control-next {
          right: 10px;
        }
        
        /* Color Selection */
        .color-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.2s;
          position: relative;
        }
        
        .color-circle:hover {
          transform: scale(1.1);
        }
        
        .color-circle.active {
          transform: scale(1.1);
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--bs-primary);
        }
        
        /* Product Meta */
        .product-meta {
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .main-image {
            height: 400px;
          }
        }
        
        @media (max-width: 768px) {
          .main-image {
            height: 350px;
          }
          
          .thumbnail-item {
            width: 60px;
            height: 60px;
          }
        }
        
        @media (max-width: 576px) {
          .main-image {
            height: 300px;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .action-buttons button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}