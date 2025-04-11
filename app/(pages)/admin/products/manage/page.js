'use client'
import { getProducts, getBrands, getCategories } from '@/helpers/core/CoreFuncs'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Card, Button, Pagination } from 'react-bootstrap'
import { Search, Filter, RefreshCw, Edit, Trash2, Tag, Box, BarChart2 } from 'lucide-react'

export default function AdminProductCatalogue() {
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

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
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
                      {product.description.length > 100 
                        ? `${product.description.substring(0, 100)}...` 
                        : product.description}
                    </Card.Text>
                    <div className="small text-muted mb-3">
                      Added: {formatDate(product.createdAt)}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-top-0">
                    <div className="d-flex justify-content-between">
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        className="d-flex align-items-center"
                      >
                        <Edit size={14} className="me-1" />
                        Edit
                      </Button>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        className="d-flex align-items-center"
                      >
                        <Trash2 size={14} className="me-1" />
                        Delete
                      </Button>
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
                  // If totalPages <= 5, show all pages
                  // If currentPage <= 3, show pages 1-5
                  // If currentPage >= totalPages-2, show last 5 pages
                  // Otherwise show currentPage-2 to currentPage+2
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