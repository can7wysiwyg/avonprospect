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
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="position-relative">
                    <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                      New
                    </div>

                    <div className="card position-relative">
                      <Link href={`/${product._id}`}>
                        <img
                          src={product.photo}
                          className="img-fluid rounded-4"
                          alt={product.name}
                          style={{
                            objectFit: "contain",
                            width: "300px",
                            maxHeight: "200px",
                            padding: "10px",
                          }}
                        />
                      </Link>
                      <div className="card-body p-0">
                        <Link href={`/${product._id}`}>
                          <h3 className="card-title pt-4 m-0">
                            {product.name}
                          </h3>
                        </Link>

                        <div className="card-text">
                          <h3 className="secondary-font text-primary">
                            MWK{product.price}
                          </h3>

                          <div className="d-flex flex-wrap mt-3">
                            <button
                              className="btn-cart me-3 px-4 pt-3 pb-3"
                              onClick={() => {
                                addItem(product, () => {
                                  setRedirect(true);
                                });
                              }}
                            >
                              <div className="d-flex align-items-center">
                                <ShoppingCart size={18} className="me-2" />
                                <h5 className="text-uppercase m-0">
                                  Add to Cart
                                </h5>
                              </div>
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

          .btn-cart {
            background-color: #212529;
            color: white;
            border-radius: 4px;
            border: none;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }

          .btn-cart:hover {
            background-color: #0d6efd;
            transform: translateY(-2px);
          }

          .card {
            border: none;
            transition: all 0.3s ease;
            margin-bottom: 20px;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .card-title {
            font-size: 1.1rem;
            font-weight: 500;
            color: #212529;
            transition: color 0.3s ease;
          }

          .card-title:hover {
            color: #0d6efd;
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
