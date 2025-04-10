'use client'

import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import "./styles/slide.css"

// Arrow SVG Component
const ArrowRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
    </svg>
  );
  


export default function SlideShow() {

    
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".main-swiper", {
      modules: [Pagination, Autoplay],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
    });

    // Cleanup function
    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);



  return (
    <>
    
    <section id="banner" style={{ background: "#F9F3EC", marginTop: "15px" }}>
        <div className="container">
          <div className="swiper main-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide py-5">
                <div className="row banner-content align-items-center">
                  <div className="img-wrapper col-md-5">
                  <img
                 src="https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px"
                   className="img-fluid"
                   
                 />

                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    <div className="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 className="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span className="text-primary">your Avon Products</span>
                    </h2>
                    <Link
                      href="#"
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="swiper-slide py-5">
                <div className="row banner-content align-items-center">
                  <div className="img-wrapper col-md-5">
                    
                 <img
                 src="https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px"
                   className="img-fluid"
                   
                 />


                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    <div className="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 className="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span className="text-primary">your Avon Products</span>
                    </h2>
                    <Link
                      href="#"
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="swiper-slide py-5">
                <div className="row banner-content align-items-center">
                  <div className="img-wrapper col-md-5">
                    
                  <img
                 src="https://sdcdn.io/tf/tf_sku_T0SC01_3000x3000_0.png?width=650px&height=750px"
                   className="img-fluid"
                   
                 />

                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    <div className="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 className="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span className="text-primary">your Avon Products</span>
                    </h2>
                    <Link
                      href="#"
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination mb-5"></div>
          </div>
        </div>
      </section>
    
    </>
  )
}
