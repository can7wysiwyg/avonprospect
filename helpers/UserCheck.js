"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { getSupertoken } from "./AccessToken"; 
import { userGet } from "@/redux/actions/userAuthAction";
import { Shield, User } from "lucide-react";


export function UserCheck() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userRdcr.user);
  const [usertoken, setUsertoken] = useState(null);

  useEffect(() => {
    const token = getSupertoken(); 
    setUsertoken(token);

    if (token) {
      dispatch(userGet()); 
    }
  }, [dispatch]);


  

  const AuthInfo = useMemo(() => {
    switch (user?.role) {
      case "admin":
        return <Link className="nav-link position-relative p-2" href="/admin">
          <div className="rounded-circle bg-dark p-2 d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
            <Shield size={26} className="text-white" />
          </div>
          <span className="position-absolute bottom-0 start-50 translate-middle-x badge bg-dark text-white small fw-bold">
            Admin
          </span>
        </Link>
      
      case "shopper":
        return <Link className="nav-link position-relative p-2" href="/shopper">
        <div className="rounded-circle bg-dark p-2 d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
          <User size={26} className="text-white" />
        </div>
        <span className="position-absolute bottom-0 start-50 translate-middle-x badge bg-dark text-white small fw-bold">
          Shopper
        </span>
      </Link>
      default:
        return null;
    }
  }, [user]);

  return <>{usertoken && AuthInfo}</>;
}
