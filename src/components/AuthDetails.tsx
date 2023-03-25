import { onAuthStateChanged, signOut } from "firebase/auth";
import { type } from "os";
import React, { useEffect, useState } from "react";
import { auth } from "../config";

type AuthUser = {
    email : undefined | string
};

export default function AuthDetails() {
    const [authUser, setAuthUser] = useState<AuthUser>();

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user:any) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(undefined);
        }
      });
  
      return () => {
        listen();
      };
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <div>
        {authUser ? (
          <>
            <p>{`Signed In as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    );
}
