import React from 'react'
import Swal from 'sweetalert2';
import app_config from '../../config';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserProvider';
import { useFormik } from 'formik';
import { MDBInput } from 'mdb-react-ui-kit';


const Login = () => {

  const url = app_config.apiUrl;
  const navigate = useNavigate();
  const { themeColor, themeColorLight, title } = app_config;
  const {setLoggedIn} = useUserContext();

  const loginform = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(`${url}/user/auth`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        const data = (await res.json()).result;
        // console.log("Login Successful");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Successful!!",
        });
        setLoggedIn(true);
        if (data.role === "admin") {
          sessionStorage.setItem("admin", JSON.stringify(data));
          navigate("/admin/dashboard");
        } else {
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/user/profile");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed!!",
        });
      }
    },
  });

  return (
    <>
  {/* Section: Design Block */}
  <section className="background-radial-gradient overflow-hidden">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
      }}
    />
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0 mt-1" style={{ zIndex: 10 }}>
          <h1 className=" my-3 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
            Sign up today,
          </h1>
          <h2 className= " my-3 fw-bold ls-tight">
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
            and start creating your own personalized dashboards!!
            </span> </h2>
          <h5
            className="mb-12 opacity-70 fw-bold"
            style={{ color: "hsl(218, 81%, 85%)" }}
          >
            Take control of your data and visualize it in a way that empowers you to make informed decisions.
          </h5>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          />
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          />
          <div className="card bg-glass">
            <div className="card-body ">
              <form onSubmit={loginform.handleSubmit}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                
                {/* Email input */}
                <MDBInput label='E-mail' id='email' onChange={loginform.handleChange} value={loginform.values.email} type='email' />
                {/* Password input */}
                <MDBInput label='Password' id='password'onChange={loginform.handleChange} value={loginform.values.password} type='password' />
                
                  
                
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign in
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  <p>or sign in with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</>

  )
}

export default Login;
