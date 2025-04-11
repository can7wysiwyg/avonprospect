'use client'

import { getCategories } from '@/helpers/core/CoreFuncs'
import React, { useState, useEffect } from 'react'
import { Search, Tag, X } from 'lucide-react'
import Link from 'next/link'

export default function CategoriesPage() {
  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const data = await getCategories()
        
        if(data && data.categories) {
          setCategories(data.categories)
          setFilteredCategories(data.categories)
        }
      } catch (error) {
        console.log('Error fetching categories:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])
  
  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    
    if (value.trim() === '') {
      setFilteredCategories(categories)
    } else {
      const filtered = categories.filter(category => 
        category.catName.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredCategories(filtered)
    }
  }
  
  // Clear search
  const clearSearch = () => {
    setSearchTerm('')
    setFilteredCategories(categories)
  }
  
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-2 d-flex align-items-center">
            <Tag className="me-2 text-primary" />
            Categories
          </h2>
          <p className="text-muted">Browse product categories</p>
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
      {!loading && filteredCategories.length === 0 && (
        <div className="alert alert-info">
          No categories found matching "{searchTerm}".
          <button className="btn btn-link p-0 ms-2" onClick={clearSearch}>
            Clear search
          </button>
        </div>
      )}
      
      {/* Categories Grid */}
      {!loading && filteredCategories.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredCategories.map(category => (
            <div className="col" key={category._id}>
              <Link href={`/admin/categories/${category._id}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-shadow">
                  <div className="card-body p-4">
                    <h3 className="card-title h5 mb-3">{category.catName}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary">View products in and manage category</span>
                      
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