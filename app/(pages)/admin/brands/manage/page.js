'use client'

import { getBrands } from '@/helpers/core/CoreFuncs'
import React, { useState, useEffect } from 'react'
import { Search, Tag, X } from 'lucide-react'
import Link from 'next/link'

export default function BrandsPage() {
  const [brands, setBrands] = useState([])
  const [filteredBrands, setFilteredBrands] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const data = await getBrands()
        
        if(data && data.brands) {
          setBrands(data.brands)
          setFilteredBrands(data.brands)
        }
      } catch (error) {
        console.log('Error fetching brands:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])
  
  
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    
    if (value.trim() === '') {
      setFilteredBrands(brands)
    } else {
      const filtered = brands.filter(brand => 
        brand.brandName.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredBrands(filtered)
    }
  }
  
  // Clear search
  const clearSearch = () => {
    setSearchTerm('')
    setFilteredBrands(brands)
  }
  
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-2 d-flex align-items-center">
            <Tag className="me-2 text-primary" />
            Brands
          </h2>
          <p className="text-muted">Browse product brands</p>
        </div>
      </div>
      
      {/* Search */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <Search size={18} className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button 
                className="btn btn-outline-secondary border-start-0" 
                type="button"
                onClick={clearSearch}
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Loading State */}
      {loading && (
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      
      {/* No Results */}
      {!loading && filteredBrands.length === 0 && (
        <div className="alert alert-info">
          No categories found matching {searchTerm}.
          <button className="btn btn-link p-0 ms-2" onClick={clearSearch}>
            Clear search
          </button>
        </div>
      )}
      
      {/* Brands Grid */}
      {!loading && filteredBrands.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredBrands.map(brand => (
            <div className="col" key={brand._id}>
              <Link href={`/admin/brands/manage/${brand._id}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-shadow">
                  <div className="card-body p-4">
                    <h3 className="card-title h5 mb-3">{brand.brandName}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary">View products in and manage brand</span>
                      
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}