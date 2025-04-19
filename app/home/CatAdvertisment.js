'use client';

import React from 'react';
import {
  Droplet,
  Wand2,
  SprayCan,
  Droplets,
  Sparkles
} from 'lucide-react'; // pick icons you like

export default function CatAdvertisment() {
  return (
    <section id="categories">
      <div className="container my-3 py-5">
        <div className="row my-5">

          <div className="col text-center">
            <div className="categories-item">
              <Droplet size={20} color='purple' className="category-icon text-primary mb-2" />
              <h5>Lotions</h5>
            </div>
          </div>

          <div className="col text-center">
            <div className="categories-item">
              <Wand2 size={20} color='purple' className="category-icon text-primary mb-2" />
              <h5>Perfumes</h5>
            </div>
          </div>

          <div className="col text-center">
            <div className="categories-item">
              <SprayCan size={20} color='purple' className="category-icon text-primary mb-2" />
              <h5>Deodorants</h5>
            </div>
          </div>

          <div className="col text-center">
            <div className="categories-item">
              <Droplets size={20} color='purple' className="category-icon text-primary mb-2" />
              <h5>Moisturizers</h5>
            </div>
          </div>

          <div className="col text-center">
            <div className="categories-item">
              <Sparkles size={20} color='purple' className="category-icon text-primary mb-2" />
              <h5>Beauty Soap</h5>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
