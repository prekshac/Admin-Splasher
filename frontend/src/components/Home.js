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
              className="home-main p-5 text-center bg-image"
              style={{
                // backgroundImage:
                //   'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/b70523147778479.62c8776952d0b.png")',
                // height: '80vh',
                // backgroundSize: "cover",
                // backgroundPosition: "50% 50%",
                // backgroundColor: "rgba(0, 0, 0, 0)"
              }}
              aria-controls="#picker-editor"
            >
                
              <div
                className="card1 mx-4 mx-md-5 text-center shadow-5-strong"
                style={{
                  marginTop:"70px",
                  background: "hsla(0, 0%, 100%, 0.7)",
                  backdropFilter: "blur(-500px)"
                }}
              >
                <div className="card-body px-4 py-5 px-md-5">
                  <h6 className=" card-content fw-bold ls-tight ">
                    {" "}
                    <span className='heading1'>Welcome to Admin Splasher, </span> <br />{" "}
                    <span 
                    className="  text-primary">where you can create and personalize your own dashboards!</span>{" "}
                  </h6>{" "}
                  {" "}

                </div>
              </div>
              <a
                        className="btn mybtn  btn-primary btn-lg "
                        href="signup"
                        role="button"
                        aria-controls="#picker-editor"
                        margin-left="90%"
                        style={{ color: "hsl(218, 81%, 85%)" }}>
                        Get started
                      
                    </a>
              <a
                      className=" btn knowmore  btn-primary btn-lg "
                      href="#about"
                      role="button"
                      aria-controls="#picker-editor">
                      Know More
                      </a>
               
            </div>
            {/* Background image */}
            
          </section>
        </section>
        {/**/}
      </div>

      <div id='about'> 
        <div className='card2'>
          <div className='card-content2' 
          >
            <div className='heading2'> About us</div>
              <div className='content'>
                 <div class=" text2 row container-fluid">
                    <div class=" about-info col-md-8">
                        At Admin Splasher, we believe in the power of data visualization and providing you with the tools to make informed decisions.
                        With our customizable dashboards, you have the freedom to design a visual representation of your data that suits your unique needs.
                        <br></br> <br></br> 
                        Connect your mobile application to our dashboard and start monitoring your data today!
                    </div>
                    <div class="col-md-4">
                      <img src="https://i.pinimg.com/564x/14/6a/f2/146af25e29189eb9a37bf293294aec1d.jpg" alt="image" className='about-img' style={{ width: '320px', height: '280px' }} />
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>


      <div id='features'> 
        <div className='card-3 '>
          <div className='card-content3'>
            <div className='heading3'> 
              Features
            </div>
            <div className='content3'>
                 
              <div class=" features col-md-6">
                <h5 className='fw-bold'> Key features of our dashboards include:</h5>
                <ul >
                  <li className='lists'>Customizable charts and graphs</li>
                  <li className='lists'>Visualization Options</li>
                  <li className='lists'>Interactive Data</li>
                  <li className='lists'>Easy to use</li>
                  <li className='lists' >Secure</li>
                  <li className='lists'>Responsive Design</li>
                </ul>
               </div>
                    
             </div>
            </div>
          </div>
        </div>

        <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted" data-draggable="true" style={{ position: "relative" }}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>


      </div>
      
  )
}


export default Home;