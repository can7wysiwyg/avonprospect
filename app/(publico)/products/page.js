'use client'
import { addItem } from '@/helpers/core/CartFuncs'
import { getCategories, getProducts, getBrands } from '@/helpers/core/CoreFuncs'
import { ShoppingCart, Filter, Heart, Search, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'


export default function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
   const [viewMode, setViewMode] = useState('grid') 
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(9)
  const [totalPages, setTotalPages] = useState(1)

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
        const blands = await getBrands()

        if(prods && cats && blands) {
          setProducts(prods.products)
          setFilteredProducts(prods.products)
          setBrands(blands.brands)
          setCategories(cats.categories)
        }
      } catch (error) {
        console.log("There was a problem fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    
    let result = [...products]
    

    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory)
    }
    
    
    if (selectedBrand !== 'all') {
      result = result.filter(product => product.brand === selectedBrand)
    }
    

    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Apply sorting
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name))
    }
    
    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
    setTotalPages(Math.ceil(result.length / productsPerPage))
  }, [products, selectedCategory, selectedBrand, searchQuery, sortBy, productsPerPage])

  // Effect for pagination
  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    setDisplayedProducts(filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct))
    setTotalPages(Math.ceil(filteredProducts.length / productsPerPage))
  }, [filteredProducts, currentPage, productsPerPage])

  // Find category or brand name by ID
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat._id === categoryId)
    return category ? category.catName : 'Unknown'
  }
  
  const getBrandName = (brandId) => {
    const brand = brands.find(brand => brand._id === brandId)
    return brand ? brand.brandName : 'Unknown'
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('all')
    setSelectedBrand('all')
    setSearchQuery('')
    setSortBy('default')
    setCurrentPage(1)
  }

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      // Scroll to top of products section
      document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      // Scroll to top of products section
      document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll to top of products section
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })
  }

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    let pages = []
    
    // Always show first page
    pages.push(1)
    
    // Calculate range around current page
    let rangeStart = Math.max(2, currentPage - 1)
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1)
    
    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push('...')
    }
    
    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i)
    }
    
    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push('...')
    }
    
    // Add last page if it's not the first page
    if (totalPages > 1) {
      pages.push(totalPages)
    }
    
    return pages
  }

  // Handle products per page change
  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value))
    setCurrentPage(1) // Reset to first page
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid py-5">
  {shouldRedirect(redirect)}

      <div className="row mb-4">
        <div className="col-12">
          <h1 className="display-5 fw-bold text-center mb-4">Our Products</h1>
          <p className="text-muted text-center mb-5">Discover our collection of high-quality products</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="row mb-4">
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control border-primary" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary" type="button">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="col-lg-8 col-md-6 mb-3 d-flex gap-2 justify-content-md-end">
         
          <select 
            className="form-select w-auto" 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>

      <div className="row">
        {/* Filters Sidebar */}
        <div className="col-lg-3 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Filters</h5>
              <Filter size={18} />
            </div>
            <div className="card-body">
              {/* Category Filter */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Categories</h6>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id="all-categories"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                  />
                  <label className="form-check-label" htmlFor="all-categories">
                    All Categories
                  </label>
                </div>
                {categories.map(category => (
                  <div className="form-check mb-2" key={category._id}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id={`category-${category._id}`}
                      checked={selectedCategory === category._id}
                      onChange={() => setSelectedCategory(category._id)}
                    />
                    <label className="form-check-label text-capitalize" htmlFor={`category-${category._id}`}>
                      {category.catName}
                    </label>
                  </div>
                ))}
              </div>

              {/* Brand Filter */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Brands</h6>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="brand"
                    id="all-brands"
                    checked={selectedBrand === 'all'}
                    onChange={() => setSelectedBrand('all')}
                  />
                  <label className="form-check-label" htmlFor="all-brands">
                    All Brands
                  </label>
                </div>
                {brands.map(brand => (
                  <div className="form-check mb-2" key={brand._id}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="brand"
                      id={`brand-${brand._id}`}
                      checked={selectedBrand === brand._id}
                      onChange={() => setSelectedBrand(brand._id)}
                    />
                    <label className="form-check-label text-capitalize" htmlFor={`brand-${brand._id}`}>
                      {brand.brandName}
                    </label>
                  </div>
                ))}
              </div>

              {/* In Stock Only Filter */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Availability</h6>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="in-stock" />
                  <label className="form-check-label" htmlFor="in-stock">
                    In Stock Only
                  </label>
                </div>
              </div>

              <button 
                className="btn btn-outline-primary w-100"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="col-lg-9" id="products-section">
          {filteredProducts.length === 0 ? (
            <div className="alert alert-info text-center">
              No products found matching your criteria. Try changing your filters.
            </div>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="mb-0 text-muted">Showing {filteredProducts.length} of {products.length} products</p>
                <div className="d-flex align-items-center">
                  <label htmlFor="productsPerPage" className="me-2 text-nowrap">Show per page:</label>
                  <select 
                    id="productsPerPage" 
                    className="form-select form-select-sm" 
                    style={{ width: '70px' }}
                    value={productsPerPage}
                    onChange={handleProductsPerPageChange}
                  >
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                  </select>
                </div>
              </div>
              
              {viewMode === 'grid' ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {displayedProducts.map(product => (
                    <div className="col" key={product._id}>
                      <div className="card h-100 border-0 shadow-sm product-card">
                        <div className="position-relative">
                          <img
                            src={product.photo} 
                            className="card-img-top"
                            alt={product.name}
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                          {product.newArrival && (
                            <span className="position-absolute top-0 start-0 badge bg-success m-2">New</span>
                          )}
                          {!product.inStock && (
                            <div className="position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
                              <span className="badge bg-danger fs-6 px-3 py-2">Out of Stock</span>
                            </div>
                          )}
                          <div className="product-actions position-absolute top-0 end-0 m-2 d-flex flex-column gap-2">
                            <button className="btn btn-light btn-sm rounded-circle">
                              <Heart size={16} />
                            </button>
                            <button className="btn btn-light btn-sm rounded-circle">
                              <Eye size={16} />
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="badge bg-light text-dark text-capitalize">{getBrandName(product.brand)}</span>
                            <span className="badge bg-secondary text-capitalize">{getCategoryName(product.category)}</span>
                          </div>
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text small text-muted mb-1">
                            {product.description.length > 60 
                              ? `${product.description.substring(0, 60)}...` 
                              : product.description}
                          </p>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="fw-bold text-primary">MWK{product.price}</span>
                            <button className="btn btn-primary btn-sm"
                            
                            onClick={() => {
                                   addItem(product, () => {
                                    setRedirect(true);
                                                });
                                                        }}
                            >
                              <ShoppingCart size={16} className="me-1" /> Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="list-group">
                  {displayedProducts.map(product => (
                    <div className="list-group-item list-group-item-action border-0 shadow-sm mb-3" key={product._id}>
                      <div className="row g-0">
                        <div className="col-md-3 position-relative">
                          <img 
                            src={product.photo} 
                            className="img-fluid rounded-start h-100 w-100"
                            alt={product.name}
                            style={{ objectFit: 'cover', maxHeight: '180px' }}
                          />
                          {product.newArrival && (
                            <span className="position-absolute top-0 start-0 badge bg-success m-2">New</span>
                          )}
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <div className="d-flex justify-content-between mb-2">
                              <div>
                                <span className="badge bg-light text-dark text-capitalize me-2">{getBrandName(product.brand)}</span>
                                <span className="badge bg-secondary text-capitalize">{getCategoryName(product.category)}</span>
                              </div>
                              <div className="d-flex gap-2">
                                <button className="btn btn-light btn-sm rounded-circle">
                                  <Heart size={16} />
                                </button>
                                <button className="btn btn-light btn-sm rounded-circle">
                                  <Eye size={16} />
                                </button>
                              </div>
                            </div>
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="fw-bold text-primary fs-5">${product.price.toFixed(2)}</span>
                                <p className="text-muted mb-0 small">
                                  {product.inStock ? 
                                    `In Stock (${product.stockQuantity} available)` : 
                                    'Out of Stock'}
                                </p>
                              </div>
                              <button 
                                className="btn btn-primary"
                                disabled={!product.inStock}
                              >
                                <ShoppingCart size={16} className="me-1" /> Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="mt-4" aria-label="Product pagination">
                  <div className="d-flex justify-content-center">
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={prevPage} aria-label="Previous">
                          <ChevronLeft size={16} />
                        </button>
                      </li>
                      
                      {getPaginationNumbers().map((page, index) => (
                        page === '...' ? (
                          <li className="page-item disabled" key={`ellipsis-${index}`}>
                            <span className="page-link">...</span>
                          </li>
                        ) : (
                          <li 
                            className={`page-item ${currentPage === page ? 'active' : ''}`} 
                            key={`page-${page}`}
                          >
                            <button 
                              className="page-link" 
                              onClick={() => goToPage(page)}
                            >
                              {page}
                            </button>
                          </li>
                        )
                      ))}
                      
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={nextPage} aria-label="Next">
                          <ChevronRight size={16} />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center mt-2 text-muted small">
                    Page {currentPage} of {totalPages}
                  </div>
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}