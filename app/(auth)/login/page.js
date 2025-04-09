'use client'
import { userLogin } from "@/redux/actions/userAuthAction"
import Link from "next/link"
import { useState } from "react"
import { Spinner } from "react-bootstrap"
import { useDispatch } from "react-redux"


export default function Login() {
    const[data, setData] = useState({
    
        email: "",
        password: ""
    })


    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()


    const handleSubmit = async(event) => {

        event.preventDefault()
            setLoading(true);
            try {


                if(!data.email) {
                    return alert("please enter your email address")
                  }
          
                  if(!data.password) {
                    return alert("please enter your password")
                  }
          
              
              await dispatch(userLogin(data))
    
            } finally {
              setLoading(false);
            }
        
        
    
      }
    





  return (
    <>

<section >
      <div className="container">
        <div className="row my-5 py-5">
          <div className="offset-md-3 col-md-6 my-5">
            <h3 className="text-center">
              <span className="text-secondary">Login</span>
            </h3>
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
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    <span className="ms-2">Loading...</span>
                  </>
                ) : (
                  "Login"
                )}
  </button>
              </div>
            </form>

            <div style={{marginTop: "20px"}}>
               <p>Lost your account? <Link href="/recover">Recover</Link> </p>

               <p>Create <Link href="/register">Account</Link> </p>


            </div>
          </div>
        </div>
      </div>
    </section>

    
    
    
    </>
  )
}
