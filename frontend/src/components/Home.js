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
              <div
                className="card mx-4 mx-md-5 text-center shadow-5-strong"
                style={{
                  marginTop:"110px",
                  background: "hsla(0, 0%, 100%, 0.7)",
                  backdropFilter: "blur(-500px)"
                }}
              >
                <div className="card-body px-4 py-5 px-md-5">
                  <h1 className="display-3 fw-bold ls-tight mb-4">
                    {" "}
                    <span>The best offer on the market</span> <br />{" "}
                    <span className="text-primary">for your business</span>{" "}
                  </h1>{" "}
                  <a
                    className="btn  btn-primary btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
                    href="#"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Login/Signup
                  </a>{" "}
                  <a
                    className="btn  btn-link btn-lg py-3 px-5 mb-2 mb-md-0"
                    data-ripple-color="primary"
                    href="#"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Learn more
                  </a>
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