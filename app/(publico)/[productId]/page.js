'use client'
import { getBrand, getCategory, getProduct, getProducts } from '@/helpers/core/CoreFuncs'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { ShoppingCart,  Share2 } from 'lucide-react'
import Link from 'next/link'
import { addItem } from '@/helpers/core/CartFuncs'


export default function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const[category, setCategory] = useState({})
  const[relatedProducts, setRelatedProducts] = useState([])
  const[brand, setBrand] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
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
        const data = await getProduct(productId)


        if(data && data.product) {
          setProduct(data.product)

          const cat = await getCategory(data.product.category)
          const bland = await getBrand(data.product.brand)
          const allProds = await getProducts()

          setCategory(cat?.category)
          setBrand(bland?.brand)
          setRelatedProducts(allProds?.products)

          
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

  
  return (
    <div className="product-page">
      <div className="container py-5">
      {shouldRedirect(redirect)}

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

                    onClick={() => {
                      addItem(product, () => {
                        setRedirect(true);
                      });
                    }}
                  
                    disabled={!product.inStock}
                  >
                    <ShoppingCart size={20} className="me-2" />
                    Add to Cart
                  </button>
                  
                  <button className="btn btn-outline-dark btn-lg">
                    <Share2 size={20} />
                  </button>
                </div>

            
                <div className="product-meta">
                  
                  <div className="mb-2">
                    <strong>Category:</strong> 
               <span className="text-muted ms-1">{category?.catName}</span>
                  
                  </div>

                  <div className="mb-2">
                    <strong>Brand:</strong> 
               <span className="text-muted ms-1">{brand?.brandName}</span>
                  
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
              id="shipping-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#shipping" 
              type="button" 
              role="tab" 
              aria-controls="shipping" 
              aria-selected="false"
            >
              Shipping 
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
                  {product.description }
                </p>
                
                
              </div>
              
            </div>
          </div>
          
          <div 
            className="tab-pane fade" 
            id="shipping" 
            role="tabpanel" 
            aria-labelledby="shipping-tab"
          >
            <h3>Shipping</h3>
            <p>Free shipping on all orders over ....</p>
          </div>
        </div>
      </div>

      {/* related products */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Related Products</h2>
          <div className="row">
            
            {relatedProducts && relatedProducts.length > 0 ? (
        relatedProducts
          .filter(item => item?.category === product.category && item._id !== product._id)
          .slice(0, 3)
          .map((item, index) => (
            <div key={item._id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 product-card">
                <Link href={`/${item._id}`}>
                  <div className="product-image-container">
                    <img 
                      src={item.photo } 
                      className="card-img-top" 
                      alt={item.name} 
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="price-container">
                      
                        <span className="fw-bold">MWK{item.price}</span>
                      
                    </div>
                    <Link href={`/${item._id}`} className="btn btn-sm btn-outline-primary">View</Link>
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className="col-12">
          <p className="text-muted">No related products found.</p>
        </div>
      )}

              
             
{/* end */}

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

// related
    .product-image-container {
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f8f9fa;
    }
    
    .product-image-container img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
    
    .product-card {
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 768px) {
      .product-image-container {
        height: 180px;
      }
    }


      `}</style>
    </div>
  )
}