import { useFormik } from "formik";
import React from "react";
import app_config from "../../config";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { MDBInput } from 'mdb-react-ui-kit';
import './signup.css'

const Signup = () => {

  const {apiUrl} = app_config;
  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(`${apiUrl}/user/add`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Registered Successfully!!",
        });
        const data = (await res.json()).result;
        navigate("/main/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Some Error Occured!!",
        });
      }
    },
  });

  return (
    <section className="sing-main" >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className=" heading-signup text-white mb-4">New Registration</h1>
            <div className="mycard-signup" style={{ borderRadius: 15 }}>
              <div className="card-body-signup">
                <form onSubmit={signupForm.handleSubmit}>
                <MDBInput label='Full Name' id='name' type='text'  />

                  <MDBInput label='Email' id='email' type='email'  /> 

                  <MDBInput label='Password' id='password' type='password'  />

                  <MDBInput label='Confirm Password' id='cPassword' type='password'  />

                  <hr className="mx-n3" />
                  <div className="px-6 py-2">
                    <button type="submit" className="btn-signup btn-primary btn-lg">
                      Sign Up ✅
                    </button>
                  </div>
                  <div>
                    <br></br>
                    <p>Already have an account? <a href="/main/login">Login</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Signup;
