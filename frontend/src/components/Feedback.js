import React from 'react'
import Rating from 'react-rating'
import './feedback.css';
import {useFormik} from 'formik';
import Swal from 'sweetalert2';


const Feedback = () => {

  const feedbackForm = useFormik({
    initialValues: {
      rating : 0,
      review : ''
    },
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        icon : 'success',
        title : 'Feedback Submitted Successfully',
        text : 'Thank you for your feedback'
      })
    }
  })

  return (
    <div className="feed123" style={{ minHeight: '100vh' }}><section style={{ backgroundColor: "#ffffff" }} >
      <div className="container my-5 py-5 text-dark" >
        <div className="row d-flex justify-content-center" >
          <div className="col-md-12 ">
            <div className="card" >
              <form onSubmit={feedbackForm.handleSubmit}>
              <div className="card-body p-4">
                <div className="d-flex flex-start w-100">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width={45}
                    height={45}
                  />
                  <div className="w-100">
                    <h5>Add a comment</h5>
                    <Rating
                      emptySymbol={<img src="/star_filled.png" className="icon" />}
                      fullSymbol={<img src="/star.png" className="icon" />}
                    />

                    <div className="mt-4">
                      <label className="form-label" htmlFor="textAreaExample">
                        What is your view?
                      </label>
                      <textarea
                        className="form-control"
                        id="textAreaExample"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-3">

                      <button type="submit" className="btn btn-danger">
                        Send <i className="fas fa-long-arrow-alt-right ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Feedback