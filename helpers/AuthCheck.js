"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { logoutUser } from "./logout";
import { getSupertoken } from "./AccessToken"; 
import { LogIn, LogOut } from "lucide-react";



export function AuthCheck() {
  
  const [usertoken, setUsertoken] = useState(undefined);

  useEffect(() => {
    
    setUsertoken(getSupertoken());
  }, []);

  
  if (usertoken === undefined) {
    return null; 
  }

  return (
    <>
      {!usertoken ? (
        <Link className="nav-link rounded-pill d-flex align-items-center gap-2 px-3 py-2 fw-semibold btn-outline-danger" href="/login" style={{ cursor: "pointer" }}>
           <LogIn size={20} />
          Login</Link>
      ) : (
        <Link href="#" className="nav-link rounded-pill d-flex align-items-center gap-2 px-3 py-2 fw-semibold btn-outline-danger" style={{ cursor: "pointer" }} onClick={logoutUser}>
        <LogOut size={20} />  Logout
        </Link>
      )}
    </>
  );
}