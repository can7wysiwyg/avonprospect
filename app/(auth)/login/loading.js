'use client'
import React from 'react'

export default function Loading() {
  return (
    <>
    <div className="loader-container">
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-grow text-secondary mx-2" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  <style jsx>{`
    .loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    
    .spinner-border, .spinner-grow {
      width: 3rem;
      height: 3rem;
      animation-duration: 1.2s;
    }
    
    /* Optional: Add a custom animation to make it stand out */
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    .loader-container {
      animation: pulse 2s infinite;
    }
  `}</style>
</div>


    
    
    </>
  )
}
