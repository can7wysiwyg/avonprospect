'use client'

import { Heart, Eye, Share2, ShoppingCart, ArrowRight, Zap } from 'lucide-react';
import { useEffect } from 'react';

export default function NewArrivals() {
  // Add some basic animation functionality
  useEffect(() => {
    // Any client-side effects would go here
  }, []);

  return (
    <>
    <div className="container py-5">
      <div className="arrivals-container">
        <div className="accent-shape accent-shape-1"></div>
        <div className="accent-shape accent-shape-2"></div>
        
        <div className="arrivals-header">
          <h2 className="arrivals-title">New Arrivals</h2>
          <p className="arrivals-subtitle">Discover our latest collection of trending products</p>
        </div>
        
        <div className="urgency-banner">
          <Zap size={18} className="me-2" /> Limited time offer! Free shipping on all new arrivals this week only!
        </div>
        
        <div className="row">
          {/* Product 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <div className="product-image-wrapper">
                <img src="/placeholder-image-1.jpg" className="product-image" alt="Quantum Earbuds Pro" />
                <div className="product-overlay"></div>
                <span className="new-tag">NEW</span>
                <div className="quick-actions">
                  <a href="#" className="action-btn"><Heart size={18} /></a>
                  <a href="#" className="action-btn"><Eye size={18} /></a>
                  <a href="#" className="action-btn"><Share2 size={18} /></a>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Audio</span>
                <h3 className="product-title">Quantum Earbuds Pro</h3>
                <div className="product-rating">
                  {/* Star rating would be a separate component in production */}
                  <div className="stars">★★★★½</div>
                  <span className="ms-2 text-muted">(24)</span>
                </div>
                <div className="price-row">
                  <div>
                    <span className="product-price">$129.99</span>
                    <span className="old-price">$159.99</span>
                  </div>
                  <span className="badge-discount">-20%</span>
                </div>
                <div className="stock-text">Almost sold out!</div>
                <div className="stock-status">
                  <div className="stock-progress almost-sold"></div>
                </div>
                <button className="add-to-cart">
                  <ShoppingCart size={18} className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <div className="product-image-wrapper">
                <img src="/placeholder-image-2.jpg" className="product-image" alt="Vitality Smart Watch" />
                <div className="product-overlay"></div>
                <span className="new-tag">NEW</span>
                <div className="quick-actions">
                  <a href="#" className="action-btn"><Heart size={18} /></a>
                  <a href="#" className="action-btn"><Eye size={18} /></a>
                  <a href="#" className="action-btn"><Share2 size={18} /></a>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Wearables</span>
                <h3 className="product-title">Vitality Smart Watch</h3>
                <div className="product-rating">
                  <div className="stars">★★★★☆</div>
                  <span className="ms-2 text-muted">(18)</span>
                </div>
                <div className="price-row">
                  <div>
                    <span className="product-price">$199.99</span>
                    <span className="old-price">$249.99</span>
                  </div>
                  <span className="badge-discount">-20%</span>
                </div>
                <div className="stock-text">Selling fast!</div>
                <div className="stock-status">
                  <div className="stock-progress selling-fast"></div>
                </div>
                <button className="add-to-cart">
                  <ShoppingCart size={18} className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <div className="product-image-wrapper">
                <img src="/placeholder-image-3.jpg" className="product-image" alt="SkyView Pro Drone" />
                <div className="product-overlay"></div>
                <span className="new-tag">NEW</span>
                <div className="quick-actions">
                  <a href="#" className="action-btn"><Heart size={18} /></a>
                  <a href="#" className="action-btn"><Eye size={18} /></a>
                  <a href="#" className="action-btn"><Share2 size={18} /></a>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Photography</span>
                <h3 className="product-title">SkyView Pro Drone</h3>
                <div className="product-rating">
                  <div className="stars">★★★★★</div>
                  <span className="ms-2 text-muted">(32)</span>
                </div>
                <div className="price-row">
                  <div>
                    <span className="product-price">$349.99</span>
                    <span className="old-price">$399.99</span>
                  </div>
                  <span className="badge-discount">-13%</span>
                </div>
                <div className="stock-text">In stock</div>
                <div className="stock-status">
                  <div className="stock-progress well-stocked"></div>
                </div>
                <button className="add-to-cart">
                  <ShoppingCart size={18} className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="product-card">
              <div className="product-image-wrapper">
                <img src="/placeholder-image-4.jpg" className="product-image" alt="NexusHome Hub" />
                <div className="product-overlay"></div>
                <span className="new-tag">NEW</span>
                <div className="quick-actions">
                  <a href="#" className="action-btn"><Heart size={18} /></a>
                  <a href="#" className="action-btn"><Eye size={18} /></a>
                  <a href="#" className="action-btn"><Share2 size={18} /></a>
                </div>
              </div>
              <div className="product-content">
                <span className="product-category">Smart Home</span>
                <h3 className="product-title">NexusHome Hub</h3>
                <div className="product-rating">
                  <div className="stars">★★★½☆</div>
                  <span className="ms-2 text-muted">(15)</span>
                </div>
                <div className="price-row">
                  <div>
                    <span className="product-price">$89.99</span>
                    <span className="old-price">$119.99</span>
                  </div>
                  <span className="badge-discount">-25%</span>
                </div>
                <div className="stock-text">Selling fast!</div>
                <div className="stock-status">
                  <div className="stock-progress selling-fast"></div>
                </div>
                <button className="add-to-cart">
                  <ShoppingCart size={18} className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <button className="view-all-btn">
            View All New Products <ArrowRight size={18} className="ms-2" />
          </button>
        </div>
        
        <div className="scroll-indicator mt-4 d-lg-none">
          <div className="indicator-dot active"></div>
          <div className="indicator-dot"></div>
          <div className="indicator-dot"></div>
        </div>
      </div>
    </div>

     <style jsx global>{`

     .arrivals-container {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
  border-radius: 20px;
  padding: 3rem 1rem;
  font-family: 'Poppins', sans-serif;
}

.arrivals-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.arrivals-title {
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #7928CA, #FF0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.arrivals-subtitle {
  font-weight: 300;
  color: #6c757d;
}

.accent-shape {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(121, 40, 202, 0.1), rgba(255, 0, 128, 0.1));
  z-index: 0;
}

.accent-shape-1 {
  top: -50px;
  right: 10%;
  animation: float 8s ease-in-out infinite;
}

.accent-shape-2 {
  bottom: -70px;
  left: 5%;
  width: 200px;
  height: 200px;
  animation: float 10s ease-in-out infinite 1s;
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

.product-card {
  position: relative;
  margin-bottom: 30px;
  border: none;
  transition: all 0.4s ease;
  overflow: hidden;
  border-radius: 16px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.product-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
  height: 220px;
}

.product-image {
  transition: all 0.5s ease;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.quick-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
}

.product-card:hover .quick-actions {
  opacity: 1;
  transform: translateX(0);
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #7928CA;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: #7928CA;
  color: white;
  transform: scale(1.1);
}

.new-tag {
  position: absolute;
  top: 15px;
  left: 0;
  background: linear-gradient(90deg, #7928CA, #FF0080);
  color: white;
  padding: 5px 15px;
  border-radius: 0 50px 50px 0;
  font-weight: 600;
  font-size: 0.8rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 10;
}

.product-content {
  padding: 1.5rem;
}

.product-category {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.product-title {
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #212529;
}

.product-rating {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.stars {
  color: #ffc107;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.product-price {
  font-weight: 600;
  font-size: 1.5rem;
  color: #212529;
}

.old-price {
  text-decoration: line-through;
  color: #6c757d;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.add-to-cart {
  width: 100%;
  background: linear-gradient(90deg, #7928CA, #FF0080);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-to-cart:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #FF0080, #7928CA);
  transition: all 0.4s ease;
  z-index: -1;
}

.add-to-cart:hover:before {
  left: 0;
}

.view-all-btn {
  background: transparent;
  color: #7928CA;
  border: 2px solid #7928CA;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.view-all-btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #7928CA, #FF0080);
  transition: all 0.4s ease;
  z-index: -1;
}

.view-all-btn:hover {
  color: white;
  border-color: transparent;
}

.view-all-btn:hover:before {
  left: 0;
}

.badge-discount {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #FF0080;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 10;
}

.stock-status {
  width: 100%;
  height: 5px;
  background-color: #e9ecef;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
}

.stock-progress {
  height: 100%;
  border-radius: 5px;
}

.almost-sold {
  width: 15%;
  background-color: #dc3545;
}

.selling-fast {
  width: 40%;
  background-color: #ffc107;
}

.well-stocked {
  width: 80%;
  background-color: #28a745;
}

.stock-text {
  font-size: 0.75rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.scroll-indicator {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #dee2e6;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  width: 24px;
  border-radius: 4px;
  background: linear-gradient(90deg, #7928CA, #FF0080);
}

.urgency-banner {
  background: linear-gradient(90deg, #FF0080, #7928CA);
  color: white;
  text-align: center;
  padding: 0.75rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.urgency-banner:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  animation: shine 2s infinite;
}

@keyframes shine {
  to {
    left: 100%;
  }
}

@media (max-width: 991.98px) {
  .arrivals-title {
    font-size: 2rem;
  }
}



        `}</style>

        </>
  );
}