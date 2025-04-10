'use client'

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import "./styles/new.css"

const NewArrivals = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.new-arrivals-carousel .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 576px
          576: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 4,
          }
        }
      });
    }

    const swiperElement = swiperRef.current;
    
    const handleMouseEnter = () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.autoplay.stop();
      }
    };
    
    const handleMouseLeave = () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.autoplay.start();
      }
    };
    
    if (swiperElement) {
      swiperElement.addEventListener('mouseenter', handleMouseEnter);
      swiperElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy();
      }
      
      if (swiperElement) {
        swiperElement.removeEventListener('mouseenter', handleMouseEnter);
        swiperElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="new-arrivals" className="my-5 overflow-hidden">
      <div className="container pb-5">
        <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
          <h2 className="display-3 fw-normal">New Arrivals</h2>
          <div>
            <Link href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
              view all
              <Icon icon="material-symbols:arrow-right-alt" width="24" height="24" className="mb-1" />
            </Link>
          </div>
        </div>

        <div className="new-arrivals-carousel swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle bg-danger text-white">
                New
              </div>
              <div className="card position-relative">
                <Link href="/"><img src="https://sdcdn.io/tf/tf_sku_TCFC01_2000x2000_1.png?width=650px&height=750px" className="img-fluid rounded-4" alt="image" /></Link>
                <div className="card-body p-0">
                  <Link href="/" style={{textDecoration: 'none'}}>
                    <h3 className="card-title pt-4 m-0">Cozy Sweater</h3>
                  </Link>
                  <div className="card-text">
                    
                    <h3 className="secondary-font text-primary">MWK2100</h3>
                    <div className="d-flex flex-wrap mt-3">
                      <Link href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </Link>
                      <Link href="#" className="btn-wishlist px-4 pt-3">
                        <Icon icon="fluent:heart-28-filled" className="fs-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle bg-danger text-white">
                New
              </div>
              <div className="card position-relative">
                <Link href="/"><img src="https://sdcdn.io/tf/tf_sku_TCRN01_2000x2000_1.png?width=650px&height=750px" className="img-fluid rounded-4" alt="image" /></Link>
                <div className="card-body p-0">
                  <Link href="/" style={{textDecoration: 'none'}}>
                    <h3 className="card-title pt-4 m-0">Denim Jacket</h3>
                  </Link>
                  <div className="card-text">
                    
                    <h3 className="secondary-font text-primary">MWK2499</h3>
                    <div className="d-flex flex-wrap mt-3">
                      <Link href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </Link>
                      <a href="#" className="btn-wishlist px-4 pt-3">
                        <Icon icon="fluent:heart-28-filled" className="fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle bg-danger text-white">
                New
              </div>
              <div className="card position-relative">
                <Link href="/"><img src="https://sdcdn.io/tf/tf_sku_TEKY01_2000x2000_3.jpg?width=650px&height=750px" className="img-fluid rounded-4" alt="image" /></Link>
                <div className="card-body p-0">
                  <Link href="/" style={{textDecoration: 'none'}}>
                    <h3 className="card-title pt-4 m-0">Raincoat</h3>
                  </Link>
                  <div className="card-text">
                    
                    <h3 className="secondary-font text-primary">MWK2999</h3>
                    <div className="d-flex flex-wrap mt-3">
                      <Link href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </Link>
                      <Link href="#" className="btn-wishlist px-4 pt-3">
                        <Icon icon="fluent:heart-28-filled" className="fs-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="swiper-slide">
              <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle bg-danger text-white">
                New
              </div>
              <div className="card position-relative">
                <Link href="/"><img src="https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px" className="img-fluid rounded-4" alt="image" /></Link>
                <div className="card-body p-0">
                  <Link href="/" style={{textDecoration: 'none'}}>
                    <h3 className="card-title pt-4 m-0">Winter Hat</h3>
                  </Link>
                  <div className="card-text">
                    
                    <h3 className="secondary-font text-primary">MWK1500</h3>
                    <div className="d-flex flex-wrap mt-3">
                      <Link href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </Link>
                      <Link href="#" className="btn-wishlist px-4 pt-3">
                        <Icon icon="fluent:heart-28-filled" className="fs-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;