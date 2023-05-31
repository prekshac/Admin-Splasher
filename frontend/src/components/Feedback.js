import React from 'react'
import Rating from 'react-rating'

const Feedback = () => {
  return (
    <div style={{ minHeight: '100vh' }}><section style={{ backgroundColor: "#ffffff" }} >
    <div className="container my-5 py-5 text-dark" >
      <div className="row d-flex justify-content-center" >
        <div className="col-md-12 ">
          <div className="card" >
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
                  <ul className="rating mb-3" data-mdb-toggle="rating">
                    <li>
                      <i className="far fa-star fa-sm text-danger" title="Bad" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-danger" title="Poor" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-danger" title="OK" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-danger" title="Good" />
                    </li>
                    <li>
                      <i
                        className="far fa-star fa-sm text-danger"
                        title="Excellent"
                      />
                    </li>
                  </ul>
                  <div className="form-outline">
                    <textarea
                      className="form-control"
                      id="textAreaExample"
                      rows={4}
                      defaultValue={""}
                    />
                    <label className="form-label" htmlFor="textAreaExample">
                      What is your view?
                    </label>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                   
                    <button type="button" className="btn btn-danger">
                      Send <i className="fas fa-long-arrow-alt-right ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Feedback