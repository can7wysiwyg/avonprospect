'use client'
import React from 'react'
import { Icon } from "@iconify/react";
import "./styles/catego.css"

export default function Categories() {
    const categories = [
        { name: "Moisturizers", icon: "mdi:lotion" },
        { name: "Serums", icon: "mdi:bottle-tonic-outline" },
        { name: "Masks", icon: "mdi:face-mask-outline" },
        { name: "Sunscreen", icon: "mdi:weather-sunny" },
      ];
    
  return (
    <>
    
    <section id="categories">
        <div className="container my-3 py-5">
          <div className="row my-5">
            {categories.map((category, index) => (
              <div className="col text-center" key={index}>
                <a href="#" className="categories-item">
                  <Icon className="category-icon" icon={category.icon} />
                  <h5>{category.name}</h5>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  )
}
