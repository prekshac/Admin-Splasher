import { useFormik } from 'formik'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const AddEntity = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const entityManagerForm= useFormik({
    initialValues:{
      name: '',
      user: currentUser._id,
      collectionName: '',  
      keyValuePairs: '',
      realtime: false,
      icon: '',
      createdAt: new Date(),
    },
    onSubmit: async (values)=> {
      console.log(values);
   
    const res= await fetch('http://localhost:5000/entity/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if(res.status===200)
    {
      Swal.fire({
        title: ' Well Done!!',
        icon:"success",
        text: ' Successful'
      })
    }
    }

  });


  return (
    <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-9">
        <h1 className="text-white mb-4">Manage Entities</h1>
        <div className="card" style={{ borderRadius: 15 }}>
          <div className="card-body">
            <form onSubmit={entityManagerForm.handleSubmit}>
            <div className="row align-items-center pt-4 pb-3">
              <div className="col-md-4 ps-5">
                <h6 className="mb-0">Name</h6>
              </div>
              <div className="col-md-6 pe-5">
                <input 
                type="text" 
                className="form-control form-control-lg" 
                id="name"
                value={entityManagerForm.values.name}
                onChange={entityManagerForm.handleChange}
                />
              </div>
            </div>
            
            <div className="row align-items-center py-3">
              <div className="col-md-4 ps-5">
                <h6 className="mb-0">Collection Name</h6>
              </div>
              <div className="col-md-6 pe-5">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="collectionName"
                value={entityManagerForm.values.collectionName}
                onChange={entityManagerForm.handleChange}
                />
              </div>
            </div>
            <div className="row align-items-center py-3">
              <div className="col-md-4 ps-5">
                <h6 className="mb-0">Real-time</h6>
              </div>
              <div className="col-md-6 pe-5">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="category"
                value={entityManagerForm.values.realtime}
                onChange={entityManagerForm.handleChange}
                />
              </div>
            </div>
            
            <div className="row align-items-center py-3">
              <div className="col-md-8 ps-5">
                <h6 className="mb-0">Icon</h6>
              </div>
              <div className="col-md-12 pe-5">
                <input
                  type="image"
                  className="form-control form-control-lg"
                  id="icon"
                value={entityManagerForm.values.icon}
                onChange={entityManagerForm.handleChange}
                />
              </div>
            </div>
            
            <hr className="mx-n3" />
            <hr className="mx-n3" />
            <div className="px-5 py-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
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

export default AddEntity;