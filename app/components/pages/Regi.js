import React from 'react';

const RegisterSection = () => {
  return (
    <section id="register" className="register-section">
      <div className="container">
        <div className="row my-5 py-5">
          <div className="offset-md-3 col-md-6 my-5">
            <p className="display-3 fw-normal text-center">
              <span className="text-primary">Order Product</span>
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="password1"
                  id="password"
                  placeholder="Product Name"
                />
              </div>
              
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg rounded-1">
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
