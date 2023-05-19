import React from 'react';
import './Home.css';

const Home = () => {
  return (

    <div>

      <div data-draggable="true" style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section
          draggable="false"
          className="overflow-hidden pt-0"
          data-v-271253ee=""
        >
          <section className="mb-10">
            {" "}
            {/* Background image */}
            <div
              className="p-5 text-center bg-image"
              style={{
                backgroundImage:
                  'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/b70523147778479.62c8776952d0b.png")',
                height: '80vh',
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundColor: "rgba(0, 0, 0, 0)"
              }}
              aria-controls="#picker-editor"
            >
              <a
                    className="btn  btn-primary btn-lg offset-md-10"
                    href="#"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Login/Signup
                  </a>
              <div
                className="card mx-4 mx-md-5 text-center shadow-5-strong"
                style={{
                  marginTop:"70px",
                  background: "hsla(0, 0%, 100%, 0.7)",
                  backdropFilter: "blur(-500px)"
                }}
              >
                <div className="card-body px-4 py-5 px-md-5">
                  <h6 className=" card-content fw-bold ls-tight ">
                    {" "}
                    <span className='heading'>Welcome to Admin Splasher</span> <br />{" "}
                    <span 
                    className="  text-primary">where you can create and personalize your own dashboards!</span>{" "}
                  </h6>{" "}
                  {" "}

                </div>
              </div>
            </div>
            {/* Background image */}
            <div className="container">
              
            </div>
          </section>
        </section>
        {/**/}
      </div>




    </div>

  )
}

export default Home;