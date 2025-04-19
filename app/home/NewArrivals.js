"use client";

import { getProducts } from "@/helpers/core/CoreFuncs";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ShoppingCart } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { addItem } from "@/helpers/core/CartFuncs";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return (window.location.href = "/cart");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        if (data && data.products) {
          // Filter featured products only
          const NewArrivals = data.products.filter(
            (product) => product.newArrival
          );
          setProducts(NewArrivals);
        }
      } catch (error) {
        console.log("There was a problem fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {shouldRedirect(redirect)}

      <section id="clothing" className="my-5 overflow-hidden">
        <div className="container pb-5">
          <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 className="display-3 fw-normal">New Arrivals</h2>
            <div>
              <Link
                href="/products"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="products-carousel"
              breakpoints={{
                
                576: { // Small screens
                  slidesPerView: 1,
                },
                768: { // Medium screens
                  slidesPerView: 2,
                },
                992: { // Large screens and above
                  slidesPerView: 3,
                }
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="position-relative">
                    <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                      New
                    </div>
                    <div className="card h-100 border-0 shadow-sm product-card">
                    <div className=" position-relative">
                      <Link href={`/${product._id}`}>
                        <img
                          src={product.photo}
                          
                          className="card-img-top"
                            alt={product.name}
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                      </Link>

                      <div className="card-body p-0">
                        <Link href={`/${product._id}`}>
                          <h3 className="card-title pt-4 m-0">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="fw-bold text-primary">
                            MWK{product.price}
                          </span>

                         
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => {
                                addItem(product, () => {
                                  setRedirect(true);
                                });
                              }}
                            >
                              
                                <ShoppingCart size={18} className="me-1" />
                                  Add to Cart
                                
                            </button>


                          </div>

                            
                    
                  
                  </div>
                  </div>
                  </div>
                

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
      <style jsx global>
        {`
          .products-carousel {
            padding-bottom: 50px;
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: #212529;
            background: rgba(255, 255, 255, 0.8);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }

          .swiper-pagination-bullet-active {
            background: #212529;
          }

          
          .secondary-font {
            font-weight: 600;
          }

          /* Badge styles */
          .z-1 {
            z-index: 1;
            background-color: white;
            font-weight: 600;
            font-size: 0.8rem;
          }

          a {
            text-decoration: none;
          }

          /* Responsive adjustments */
          @media (max-width: 767px) {
            .section-header {
              text-align: center;
            }

            .section-header .btn {
              margin-top: 1rem;
            }

            .display-3 {
              font-size: 2.5rem;
            }
          }
        `}
      </style>
    </>
  );
}