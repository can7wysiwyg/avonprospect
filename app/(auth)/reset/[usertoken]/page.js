'use client'

import { userResetPassword } from "@/redux/actions/userAuthAction";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";



export default function Reset() {
  const params = useParams()
    const usertoken = params.usertoken
    const mssg = useSelector((state) => state.userRdcr.mssg)

  const [loading, setLoading] = useState(false);
const[data, setData] = useState({
  password: ""
})

const dispatch = useDispatch()


const handleSubmit = async(event) => {

  event.preventDefault()
      setLoading(true);
      try {
        
        await dispatch(userResetPassword(data, usertoken))

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
              <span className="text-secondary">New Password</span>
            </h5>
            <form onSubmit={handleSubmit}>

             
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
              
               <p>Create <Link href="/register">Account</Link> </p>


            </div>
          </div>
        </div>
      </div>
    </section>


    
    
    </>
  )
}
