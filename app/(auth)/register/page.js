'use client'

import { userRegister } from "@/redux/actions/userAuthAction"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"




export default function Register() {
    
    const[data, setData] = useState({
        fullname: "",
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false);

    const mssg = useSelector((state) => state.userRdcr.mssg)
   

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
      e.preventDefault()

      setLoading(true)

      try {

        if(!data.fullname) {
          return alert("Please enter your full name")
        }


        if(!data.email) {
          return alert("please enter your email address")
        }

        if(!data.password) {
          return alert("please enter your password")
        }

        dispatch(userRegister(data))
      } finally {
        setLoading(false)
      }


    }


    
  return (
    <div className="container">
        <div className="text-center text-danger" style={{marginTop: "15px"}}>


{mssg && ( <p>{mssg}</p>)}

</div>

      

<section >
      <div className="container">
        <div className="row my-5 py-5">
          <div className="offset-md-3 col-md-6 my-5">
            <h3 className="text-center">
              <span className="text-secondary">Register</span>
            </h3>
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="fullname"
                  value={data.fullname}
                  onChange={(e) => setData({...data, fullname: e.target.value})}

                  id="fullname"
                  placeholder="Your Full Name"
                  required
                />
              </div>

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
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  value={data.password}
                  onChange={(e) => setData({...data, password: e.target.value})}

                  id="password"
                  placeholder="Your Password"
                  required
                />
              </div>
              
              <div className="d-grid gap-2">
              <button type="submit" className="btn btn-info btn-lg rounded-1" disabled={loading}>
  {loading ? (
    <>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      <span>Loading...</span>
    </>
  ) : (
    "Register"
  )}
</button>
              </div>
            </form>

            <div style={{marginTop: "20px"}}>
               <p>Have an account? <Link href="/login">Log In</Link> </p>

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
