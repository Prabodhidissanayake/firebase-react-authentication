import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../config";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async (e: any) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          console.log(userCredential);
          await addDoc(collection(db, "users"), {
            email: userCredential.user.email,
            name: name,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
  return (
    <div className="sign-in-container">
    <form onSubmit={signUp}>
      <h1>Create Account</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
        <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  )
}