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
                    margin-left="90%"
                    style={{ color: "hsl(218, 81%, 85%)" }}
                    margin-right="10%"
                    
                  >
                    Login/Signup
                  </a>
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
                        Connect your mobile application to our dashboard and start visualizing your data today!
                    </div>
                    <div class="col-md-4">
                      <p>image space</p>
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
                  <li>Customizable charts and graphs</li>
                  <li>Visualization Options</li>
                  <li>Interactive Data</li>
                  <li>Easy to use</li>
                  <li>Secure</li>
                  <li>Responsive Design</li>
                </ul>
               </div>
                    
             </div>
            </div>
          </div>
        </div>
      </div>
  

  )
}


export default Home;