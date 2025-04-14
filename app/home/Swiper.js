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
          height: 300px;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .banner-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          opacity: 0.9;
        }
        
        .banner-image:hover {
          transform: scale(1.05);
          opacity: 1;
        }

        /* Media queries for responsive design */
        @media (min-width: 768px) {
          .banner-image-container {
            height: 350px;
          }
        }
        
        @media (min-width: 992px) {
          .banner-image-container {
            height: 450px;
          }
          
          .row.banner-content {
            min-height: 500px;
          }
        }
        
        @media (min-width: 1200px) {
          .banner-image-container {
            height: 500px;
          }
          
          .row.banner-content {
            min-height: 600px;
          }
          
          .banner-title {
            font-size: 3.5rem;
          }
        }
        
        /* Make the layout better on mobile */
        @media (max-width: 767px) {
          .row.banner-content {
            flex-direction: column;
          }
          
          .img-wrapper {
            order: 1;
            width: 100%;
            margin-bottom: 2rem;
          }
          
          .content-wrapper {
            order: 2;
            text-align: center;
            padding: 1rem !important;
          }
          
          .banner-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}