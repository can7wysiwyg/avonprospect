'use client'
import React, { useState } from 'react'
import "./styles/catalogue.css"
import Link from 'next/link';



const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
  </svg>
);


export default function Catalogue() {
    const [filter, setFilter] = useState("*");


    const products = [
        {
          id: 1,
          name: "Hydrating Face Serum",
          category: "serums",
          price: 2800,
    
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: true,
          tag: "",
        },
        {
          id: 2,
          name: "Daily Moisturizer SPF 30",
          category: "moisturizers",
          price: 2400,
    
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: true,
          tag: "New",
        },
        {
          id: 3,
          name: "Vitamin C Brightening Cream",
          category: "moisturizers",
          price: 3200,
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: true,
          tag: "",
        },
        {
          id: 4,
          name: "Rose Water Toner",
          category: "toners",
          price: 1800,
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: false,
          tag: "Sold",
        },
        {
          id: 5,
          name: "Lavender Body Wash",
          category: "soaps",
          price: 4500,
    
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: true,
          tag: "",
        },
        {
          id: 6,
          name: "Vanilla Jasmine Perfume",
          category: "perfumes",
          price: 4500,
    
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: true,
          tag: "",
        },
        {
          id: 7,
          name: "Charcoal Face Mask",
          category: "masks",
          price: 2200,
    
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: true,
          tag: "Sale",
        },
        {
          id: 8,
          name: "Gentle Facial Cleanser",
          category: "cleansers",
          price: 1900,
    
          image:
            "https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px",
          inStock: false,
          tag: "",
        },
      ];
    
    
      const filteredProducts =
        filter === "*"
          ? products
          : products.filter((product) => product.category === filter);
    
  return (
    <>
    
    <section id="skincare-products" className="my-5">
        <div className="container my-5 py-5">
          <div className="section-header d-md-flex justify-content-between align-items-center">
            <h2 className="display-3 fw-normal">Catalogue</h2>
            <div className="mb-4 mb-md-0">
              <p className="m-0">
                <button
                  className={`filter-button me-4 ${
                    filter === "*" ? "active" : ""
                  }`}
                  onClick={() => setFilter("*")}
                >
                  ALL
                </button>
                <button
                  className={`filter-button me-4 ${
                    filter === "moisturizers" ? "active" : ""
                  }`}
                  onClick={() => setFilter("moisturizers")}
                >
                  MOISTURIZERS
                </button>
                <button
                  className={`filter-button me-4 ${
                    filter === "serums" ? "active" : ""
                  }`}
                  onClick={() => setFilter("serums")}
                >
                  SERUMS
                </button>
                <button
                  className={`filter-button me-4 ${
                    filter === "perfumes" ? "active" : ""
                  }`}
                  onClick={() => setFilter("perfumes")}
                >
                  PERFUMES
                </button>
              </p>
            </div>
            <div>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className="isotope-container row">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`item ${product.category} ${
                  !product.inStock ? "out-of-stock" : ""
                } col-md-4 col-lg-3 my-4`}
              >
                {product.tag && (
                  <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    {product.tag}
                  </div>
                )}
                <div className="card position-relative">
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <img
                    
                      src={product.image}
                      className="img-fluid rounded-4"
                      alt={product.name}
                    />
                    {!product.inStock && (
                      <div className="out-of-stock-overlay">Out of Stock</div>
                    )}
                  </Link>
                  <div className="card-body p-0">
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <h3 className="card-title pt-4 m-0">{product.name}</h3>
                    </Link>

                    <div className="card-text">
                      
                      <h3 className="secondary-font text-primary">
                        K{product.price}
                      </h3>

                      <div className="d-flex flex-wrap mt-3">
                        <Link
                          href="#"
                          className={`btn-cart me-3 px-4 pt-3 pb-3 K{!product.inStock ? 'disabled' : ''}`}
                        >
                          <h5 className="text-uppercase m-0">
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </h5>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    
    
    </>
  )
}
