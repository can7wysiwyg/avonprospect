'use client'
import { getCategories, getBrand, getProductByBrand } from '@/helpers/core/CoreFuncs'
import { useParams } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

export default function Page() {
  const { products } = useParams()
  const [brand, setBrand] = React.useState({})
  const [productsInBrand, setProductsInBrand] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [filteredProducts, setFilteredProducts] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [sortBy, setSortBy] = React.useState('name')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 10000 })
  const [inStockOnly, setInStockOnly] = React.useState(false)
  const productsPerPage = 6

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const prodsInBrand = await getProductByBrand(products)
        const brandSingle = await getBrand(products)
        const cats = await getCategories()

        if (prodsInBrand && prodsInBrand.PsByBrand) {
          setProductsInBrand(prodsInBrand.PsByBrand)
          setFilteredProducts(prodsInBrand.PsByBrand)
          setBrand(brandSingle.brand)
          setCategories(cats.categories)
        }
      } catch (error) {
        console.log('Error fetching products', error)
      }
    }

    fetchData()
  }, [products])


  
  
  React.useEffect(() => {
    let result = [...productsInBrand]

    
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    
    if (selectedCategory) {
      result = result.filter(product => product.brand === selectedBrand)
    }

    
    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    )

    
    if (inStockOnly) {
      result = result.filter(product => product.inStock)
    }

    
    result.sort((a, b) => {
      switch(sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt)
        default: 
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(result)
    setCurrentPage(1) 
  }, [searchTerm, selectedCategory, sortBy, priceRange, inStockOnly])

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Format price to currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MWK'
    }).format(price / 100)
  }

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value) || 0
    setPriceRange(prev => ({ ...prev, [type]: value }))
  }

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="mb-4">
        <h1 className="display-5 fw-bold">{brand.brandName || "Products"}</h1>
        <p className="text-muted">{filteredProducts.length} products found</p>
        <hr className="my-4" />
      </div>

      {/* Search and Filter Bar */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <div className="row g-3">
            {/* Search */}
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Search</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat._id} value={cat._id}>{cat.catName}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Sort By</label>
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* In Stock Only */}
            <div className="col-md-6 col-lg-3">
              <label className="form-label d-block">Availability</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inStockOnly"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="inStockOnly">
                  In Stock Only
                </label>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-4">
            <label className="form-label">
              Price Range: {formatPrice(priceRange.min)} - {formatPrice(priceRange.max)}
            </label>
            <div className="row g-2">
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">Min </span>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    max={priceRange.max}
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange(e, 'min')}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">Max </span>
                  <input
                    type="number"
                    className="form-control"
                    min={priceRange.min}
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange(e, 'max')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {currentProducts.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {currentProducts.map(product => (
            <div key={product._id} className="col">
              <div className="card h-100 shadow-sm">
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img 
                    src={product.photo || '/placeholder.jpg'} 
                    alt={product.name}
                    className="card-img-top img-fluid h-100 w-100 object-fit-cover"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fs-5 fw-bold">{formatPrice(product.price)}</span>
                    <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <p className="card-text text-muted small" style={{ 
                    overflow: "hidden", 
                    textOverflow: "ellipsis", 
                    display: "-webkit-box", 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: "vertical" 
                  }}>
                    {product.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
  <button 
    className="btn btn-primary w-100" 
    
  >
    View Details
  </button>
</div>


              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <div className="alert alert-info">
            <h4>No products found</h4>
            <p className="mb-0">Try adjusting your filters or search term</p>
          </div>
        </div>
      )}

      {/* modal */}

     

      {/* end modal */}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}