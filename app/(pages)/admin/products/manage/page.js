

'use client'
import { getProducts, getBrands, getCategories } from '@/helpers/core/CoreFuncs'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Card, Button, Pagination } from 'react-bootstrap'
import { Search, Filter, RefreshCw, Edit, Trash2, Tag, Box, BarChart2, FileDigit } from 'lucide-react'
import { ApiUrl } from '@/helpers/ApiUrl'
import { getSupertoken } from '@/helpers/AccessToken'
import axios from 'axios'

export default function AdminProductCatalogue() {
  const usertoken = getSupertoken()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(6)
  const [data, setData] = useState({
    name: '',
    price: '',
    stockQuantity: 0,
    description: '',
    category: '',
    brand: '',
    inStock: false,
    isFeatured: false
  })
  const [updtBtnLdng, setUpdtBtnLdng] = useState(false)
  const [error, setError] = useState('')
  const [currentProductId, setCurrentProductId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const prods = await getProducts()
        const cats = await getCategories()
        const blands = await getBrands()
        
        if(prods) {
          setProducts(prods.products)
          setFilteredProducts(prods.products)
          setCategories(cats.categories)
          setBrands(blands.brands)
        }
      } catch (error) {
        console.log('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const modals = document.querySelectorAll('.modal')
      modals.forEach(modalEl => {
        if (!bootstrap.Modal.getInstance(modalEl)) {
          new bootstrap.Modal(modalEl)
        }
      })
    }
  }, [])

  const getBrandName = (brandId) => {
    const brand = brands.find(b => b._id === brandId)
    return brand ? brand.brandName : 'Unknown Brand'
  }
  
  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c._id === categoryId)
    return category ? category.catName : 'Unknown Category'
  }
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    applyFilters(e.target.value, selectedBrand, selectedCategory)
  }
  
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value)
    applyFilters(search, e.target.value, selectedCategory)
  }
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    applyFilters(search, selectedBrand, e.target.value)
  }
  
  const applyFilters = (searchTerm, brandId, categoryId) => {
    let result = [...products]
    
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (brandId) {
      result = result.filter(product => product.brand === brandId)
    }
    
    if (categoryId) {
      result = result.filter(product => product.category === categoryId)
    }
    
    setFilteredProducts(result)
    setCurrentPage(1) 
  }
  
  const resetFilters = () => {
    setSearch('')
    setSelectedBrand('')
    setSelectedCategory('')
    setFilteredProducts(products)
    setCurrentPage(1)
  }
  
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MWK'
    }).format(price)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const handleEditClick = (product) => {
    setCurrentProductId(product._id)
    // Initialize form data with current product values
    setData({
      name: product.name || '',
      price: product.price || '',
      stockQuantity: product.stockQuantity || 0,
      description: product.description || '',
      category: product.category || '',
      brand: product.brand || '',
      inStock: product.inStock || false,
      isFeatured: product.isFeatured || false
    })
    setError('') // Clear any previous errors
  }

  const handleUpdate = async (id) => {
    // e.preventDefault()
    setUpdtBtnLdng(true)
    setError('')
    
    try {
      if (!currentProductId) {
        throw new Error('Product ID is missing')
      }
      
      const updatedData = {
        ...data,
        productId: currentProductId // Make sure your API expects this field name
      }
      
      const response = await axios.put(
        `${ApiUrl}/admin/update_product/${id}`, 
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${usertoken}`,
            "Content-Type": "application/json",
          },
        }
      )
      
      if (response.data.success) {
        // Update local state
        const updatedProducts = products.map(p => 
          p._id === currentProductId ? { ...p, ...data } : p
        )
        setProducts(updatedProducts)
        setFilteredProducts(
          filteredProducts.map(p => p._id === currentProductId ? { ...p, ...data } : p)
        )
        
        alert('Product updated successfully!')
        
        // Close the modal
        if (typeof window !== 'undefined') {
          const modalElement = document.querySelector(`#productModal-${currentProductId}`)
          const modalInstance = bootstrap.Modal.getInstance(modalElement)
          if (modalInstance) {
            modalInstance.hide()
          }
        }
      } else {
        throw new Error(response.data.msg || 'Failed to update product')
      }
    } catch (err) {
      setError(err.message || 'An error occurred while updating the product')
      console.error('Update error:', err)
    } finally {
      setUpdtBtnLdng(false)
    }
  }
  
  return (
    <Container fluid className="py-5 px-4">
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold d-flex align-items-center">
            <Box className="me-2" size={28} />
            Product Catalogue
          </h2>
          <p className="text-muted">Manage your product inventory</p>
        </Col>
      </Row>

      {/* Filters Section */}
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body>
          <Row className="g-3">
            <Col lg={4} md={6}>
              <div className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={handleSearchChange}
                  className="ps-4 py-2"
                />
                <Search size={18} className="position-absolute text-muted" style={{ left: '10px', top: '12px' }} />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <Form.Select 
                value={selectedBrand} 
                onChange={handleBrandChange}
                className="py-2"
              >
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand._id} value={brand._id}>{brand.brandName}</option>
                ))}
              </Form.Select>
            </Col>
            <Col lg={3} md={6}>
              <Form.Select 
                value={selectedCategory} 
                onChange={handleCategoryChange}
                className="py-2"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>{category.catName}</option>
                ))}
              </Form.Select>
            </Col>
            <Col lg={2} md={6} className="d-flex justify-content-end">
              <Button 
                variant="outline-secondary" 
                onClick={resetFilters}
                className="d-flex align-items-center"
              >
                <RefreshCw size={16} className="me-1" />
                Reset
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Products Display */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading products...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-3">
            <Filter size={48} className="text-muted" />
          </div>
          <h4>No products found</h4>
          <p className="text-muted">Try adjusting your search or filter criteria</p>
          <Button variant="primary" onClick={resetFilters}>Clear Filters</Button>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <p className="mb-0">Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products</p>
            </div>
            <div>
              <Form.Select className="d-inline-block w-auto">
                <option>Sort by newest</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
                <option>Sort by name: A-Z</option>
              </Form.Select>
            </div>
          </div>

          <Row xs={1} md={2} lg={3} className="g-4 mb-4">
            {currentProducts.map(product => (
              <Col key={product._id}>
                <Card className="h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={product.photo} 
                      alt={product.name}
                      style={{ 
                        height: '220px', 
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                    {product.isFeatured && (
                      <span className="position-absolute top-0 end-0 bg-warning text-dark m-2 px-2 py-1 rounded-pill small fw-bold">
                        Featured
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="position-absolute top-0 start-0 bg-danger text-white m-2 px-2 py-1 rounded-pill small fw-bold">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="h5 mb-0">{product.name}</Card.Title>
                      <span className="fw-bold text-primary">{formatPrice(product.price)}</span>
                      
                    </div>
                    <div className="mb-3">
                      <span className="badge bg-light text-dark me-2">
                        <Tag size={14} className="me-1" />
                        {getCategoryName(product.category)}
                      </span>
                      <span className="badge bg-light text-dark">
                        <BarChart2 size={14} className="me-1" />
                        {getBrandName(product.brand)}
                      </span>
                    </div>

                    <Card.Text className="small text-muted">
                    <span className="fw-bold text-primary"> 
                      <FileDigit size={14} className="me-1" />

                     quantity {product.stockQuantity}
                      </span>
                    </Card.Text>
                    <Card.Text className="small text-muted">
                      {product.description.length > 100 
                        ? `${product.description.substring(0, 100)}...` 
                        : product.description}
                    </Card.Text>
                    <div className="small text-muted mb-3">
                      Added: {formatDate(product.createdAt)}
                    </div>
                  </Card.Body>

                  <Card.Footer className="bg-white border-top-0 text-center">
                    <div className="d-flex align-items-center">
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        className="d-flex align-items-center"
                        data-bs-toggle="modal" 
                        data-bs-target={`#productModal-${product._id}`}
                        onClick={() => handleEditClick(product)}
                      >
                        <Edit size={14} className="me-1" />
                        Manage
                      </Button>
                    </div>

                    {/* Product Edit Modal */}
                    <div className="modal fade" id={`productModal-${product._id}`} tabIndex="-1" aria-labelledby={`productModalLabel-${product._id}`} aria-hidden="true">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id={`productModalLabel-${product._id}`}>{product.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-md-6 mb-3 mb-md-0">
                                <img 
                                  src={product.photo || '/placeholder.jpg'} 
                                  alt={product.name}
                                  className="img-fluid rounded"
                                />
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <h4 className="fw-bold">{formatPrice(product.price)}</h4>
                                  <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'} mb-2`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                  </span>
                                  <p className="text-muted small">
                                    Category: {categories.find(b => b._id === product.category)?.catName || 'Unknown'}
                                  </p>
                                </div>
                                <hr />
                                <div className="mb-3">
                                  <form className="row g-3" onSubmit={() => handleUpdate(product._id)}>
                                    {error && (
                                      <div className="col-12">
                                        <div className="alert alert-danger" role="alert">
                                          {error}
                                        </div>
                                      </div>
                                    )}

                                    <div className="col-md-6 mb-3">
                                      <label htmlFor={`productName-${product._id}`} className="form-label">Product Name</label>
                                      <input 
                                        type="text" 
                                        className="form-control" 
                                        id={`productName-${product._id}`} 
                                        name="name"
                                        value={data.name} 
                                        onChange={handleInputChange} 
                                        required
                                      />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                      <label htmlFor={`productPrice-${product._id}`} className="form-label">Price</label>
                                      <div className="input-group">
                                        <span className="input-group-text">MWK</span>
                                        <input 
                                          type="number" 
                                          className="form-control" 
                                          id={`productPrice-${product._id}`} 
                                          name="price"
                                          value={data.price} 
                                          onChange={handleInputChange} 
                                          required
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                      <label htmlFor={`productStock-${product._id}`} className="form-label">Stock Quantity</label>
                                      <input 
                                        type="number" 
                                        className="form-control" 
                                        id={`productStock-${product._id}`} 
                                        name="stockQuantity"
                                        value={data.stockQuantity} 
                                        onChange={handleInputChange} 
                                      />
                                    </div>

                                    <div className="col-12 mb-3">
                                      <label htmlFor={`productDescription-${product._id}`} className="form-label">Description</label>
                                      <textarea  
                                        className="form-control" 
                                        id={`productDescription-${product._id}`} 
                                        rows="4" 
                                        name="description"
                                        value={data.description} 
                                        onChange={handleInputChange} 
                                      />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                      <label htmlFor={`productCategory-${product._id}`} className="form-label">Categories</label>
                                      <select 
                                        className="form-select"
                                        id={`productCategory-${product._id}`}
                                        name="category"
                                        value={data.category}
                                        onChange={handleInputChange}
                                        required
                                      >
                                        <option value="">Choose Category</option>
                                        {categories?.map((category) => (
                                          <option value={category._id} key={category._id}>
                                            {category.catName}
                                          </option>
                                        ))}
                                      </select>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                      <label htmlFor={`productBrand-${product._id}`} className="form-label">Brand</label>
                                      <select 
                                        className="form-select"
                                        id={`productBrand-${product._id}`}
                                        name="brand"
                                        value={data.brand}
                                        onChange={handleInputChange}
                                        required
                                      >
                                        <option value="">Choose Brand</option>
                                        {brands?.map((brand) => (
                                          <option value={brand._id} key={brand._id}>
                                            {brand.brandName}
                                          </option>
                                        ))}
                                      </select>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                      <div className="form-check form-switch">
                                        <input 
                                          className="form-check-input" 
                                          type="checkbox" 
                                          id={`inStockToggle-${product._id}`} 
                                          name="inStock"
                                          checked={data.inStock} 
                                          onChange={handleCheckboxChange} 
                                        />
                                        <label className="form-check-label" htmlFor={`inStockToggle-${product._id}`}>In Stock</label>
                                      </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                      <div className="form-check form-switch">
                                        <input 
                                          className="form-check-input" 
                                          type="checkbox" 
                                          id={`isFeaturedToggle-${product._id}`} 
                                          name="isFeatured"
                                          checked={data.isFeatured} 
                                          onChange={handleCheckboxChange} 
                                        />
                                        <label className="form-check-label" htmlFor={`isFeaturedToggle-${product._id}`}>Featured Product</label>
                                      </div>
                                    </div>

                                    <div className="col-12 mt-4">
                                      <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                        disabled={updtBtnLdng}
                                      >
                                        {updtBtnLdng ? (
                                          <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Updating...
                                          </>
                                        ) : 'Update Product'}
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center">
              <Pagination>
                <Pagination.First 
                  onClick={() => setCurrentPage(1)} 
                  disabled={currentPage === 1}
                />
                <Pagination.Prev 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                  disabled={currentPage === 1}
                />
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <Pagination.Item 
                      key={pageNum} 
                      active={pageNum === currentPage}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Pagination.Item>
                  );
                })}
                
                <Pagination.Next 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last 
                  onClick={() => setCurrentPage(totalPages)} 
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          )}
        </>
      )}
    </Container>
  )
}