'use client'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Spinner } from "react-bootstrap";
import { userForgotPassword } from '@/redux/actions/userAuthAction';
import Link from 'next/link';


export default function Page() {
    const mssg = useSelector((state) => state.userRdcr.mssg)
    const dispatch = useDispatch()
    const[data, setData] = useState({
        email: ""
    })

    const [loading, setLoading] = useState(false)


      
      
      
        const handleSubmit = async(event) => {
      
          event.preventDefault()
              setLoading(true);
              try {
                
                await dispatch(userForgotPassword(data))
      
              } finally {
                setLoading(false);
              }
          
          
      
        }
      


   
  return (
    <>

<div className="text-center text-danger" style={{marginTop: "15px"}}>


{mssg && ( <p>{mssg}</p>)}

</div>


<section >
      <div className="container">
        <div className="row my-5 py-5">
          <div className="offset-md-3 col-md-6 my-5">
            <h5 className="text-center">
              <span className="text-secondary">Recover Password</span>
            </h5>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}

                  id="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              
              <div className="d-grid gap-2">
              <button type="submit" className="btn btn-info btn-lg rounded-1" disabled={loading}>
  
  
  
              {loading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    <span className="ms-2">Loading...</span>
                  </>
                ) : (
                  "Recover"
                )}
  </button>
              </div>
            </form>

            <div style={{marginTop: "20px"}}>
               
               <p>Create <Link href="/register">Account</Link> </p>


            </div>
          </div>
        </div>
      </div>
    </section>

    
    
    </>
  )
}
