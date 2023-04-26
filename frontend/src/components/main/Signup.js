import {useFormik} from 'formik'
import React from 'react'

const Signup = () => {

    const signupForm= useFormik({
        initialValues:{
            name:'',
            email:'',
            password: '',
            cPassword: ''
        },
        onSubmit: (values)=> {console.log(values);}
      });


  return (
    <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-9">
        <h1 className="text-white mb-4">New Registration</h1>
        <div className="card" style={{ borderRadius: 15 }}>
          <div className="card-body">
            <form onSubmit={signupForm.handleSubmit}>
            <div className="row align-items-center pt-4 pb-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Full name</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input 
                type="text" 
                className="form-control form-control-lg" 
                id="name"
                value={signupForm.values.name}
                onChange={signupForm.handleChange}
                />
              </div>
            </div>
            
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Email address</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="example@example.com"
                  id="email"
                value={signupForm.values.email}
                onChange={signupForm.handleChange}
                />
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Password</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="password"
                  id="password"
                value={signupForm.values.password}
                onChange={signupForm.handleChange}
                />
              </div>
            </div><div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Confirm Password</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="confirm password"
                  id="cPassword"
                value={signupForm.values.cPassword}
                onChange={signupForm.handleChange}
                />
              </div>
            </div>
            
            <hr className="mx-n3" />
            <div className="px-5 py-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign Up ✅
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Signup