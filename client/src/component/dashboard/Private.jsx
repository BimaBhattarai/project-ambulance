import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../layouts/loader/Loader";
import Login from "../../Login/Login";


export default function PrivateRoute() {
  const token = useSelector((state) => state.auth.token);
  const history = useHistory();
  const authCheck = async () => {
    const res = await axios.get("http://localhost:5000/user-auth", {
      headers: { Authorization: "Bearer " + token },
    });

    if (res.data.ok) {
      console.log("Success")  
      return history.replace("/dashboard/home")
 
    } else {
      return <Loader />;
    }
  };
 
}
