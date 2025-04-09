"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { logoutUser } from "./logout";
import { getSupertoken } from "./AccessToken"; 

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
        <Link className="nav-link" href="/login" style={{ cursor: "pointer", color: "red" }}>Login</Link>
      ) : (
        <Link href="#" className="nav-link" style={{ cursor: "pointer", color: "red" }} onClick={logoutUser}>
          LOG OUT
        </Link>
      )}
    </>
  );
}