'use client'
import { getProducts } from '@/helpers/core/CoreFuncs'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProductSwiper() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true)
        const data = await getProducts()
        if(data && data.products) {
          // Filter featured products only
          const featuredProducts = data.products.filter(product => product.isFeatured)
          setProducts(featuredProducts)
        }
      } catch (error) {
        console.log("There was a problem fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section id="banner" style={{ background: '#F9F3EC' }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center py-5" style={{ height: '400px' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section id="banner" style={{ background: '#F9F3EC' }}>
        <div className="container py-5">
          <div className="alert alert-info">
            No featured products to display.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="banner" style={{ background: '#F9F3EC' }}>
      <div className="container">
        <div className="position-relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="main-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="py-5">
                <div className="row banner-content align-items-center">
                  <div className="img-wrapper col-md-5 position-relative">
                    <div className="banner-image-container">
                      <img 
                        src={product.photo } 
                        className="banner-image" 
                        alt={product.name}
                      />
                    </div>
                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    {/* <div className="secondary-font text-primary text-uppercase mb-4">
                      { 'Save 10 - 20 % off'}
                    </div> */}
                    <h2 className="banner-title display-1 fw-normal">
                      { product.name} <span className="text-primary">collection</span>
                    </h2>
                    <Link 
                      href={`/${product._id}`} 
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <ArrowRight size={24} className="mb-1 ms-2" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-pagination d-flex justify-content-center mb-5"></div>
        </div>
      </div>

      <style jsx global>{`
        .banner-title {
          margin-bottom: 1.5rem;
        }
        
        .main-swiper {
          position: relative;
        }
        
        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 0.5;
          background: #000;
          margin: 0 5px;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--bs-primary);
        }
        
        .banner-image-container {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          opacity: 0.9;
        }
        
        .banner-image:hover {
          transform: scale(1.05);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}