import React from 'react'

const Price = () => {
  return (
    <>
  {/*Main Navigation*/}
  <header>
    {/* Intro settings */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      #intro {\n        /* Margin to fix overlapping fixed navbar */\n        margin-top: 58px;\n      }\n\n      @media (max-width: 991px) {\n        #intro {\n          /* Margin to fix overlapping fixed navbar */\n          margin-top: 45px;\n        }\n      }\n    "
      }}
    />
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        {/* Navbar brand */}
        <a
          className="navbar-brand"
          target="_blank"
          href="https://mdbootstrap.com/docs/standard/"
        >
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            height={16}
            alt=""
            loading="lazy"
            style={{ marginTop: "-3px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                rel="nofollow"
                target="_blank"
              >
                Learn Bootstrap 5
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
              >
                Download MDB UI KIT
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            {/* Icons */}
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://www.facebook.com/mdbootstrap"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://twitter.com/MDBootstrap"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Navbar */}
    {/* Jumbotron */}
    <div id="intro" className="p-5 text-center bg-light">
      <h1 className="mb-3 h2">Learn Bootstrap 5 with MDB</h1>
      <p className="mb-3">Best &amp; free guide of responsive web design</p>
      <a
        className="btn btn-primary m-2 mb-3"
        href="https://www.youtube.com/watch?v=c9B4TPnak1A"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        Start tutorial
      </a>
      <a
        className="btn btn-primary mb-3"
        href="https://mdbootstrap.com/docs/standard/"
        target="_blank"
        role="button"
      >
        Download MDB UI KIT
      </a>
      <ul className="mb-0 d-flex justify-content-center list-unstyled">
        <li>
          <i className="fas fa-star fa-sm text-primary" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-primary" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-primary" />
        </li>
        <li>
          <i className="fas fa-star fa-sm text-primary" />
        </li>
        <li>
          <i className="far fa-star fa-sm text-primary" />
        </li>
        <span className="text-black ms-1">
          <strong>4.9/5</strong>
          <a
            data-mdb-toggle="tooltip"
            title=""
            target="_blank"
            href="https://mdbootstrap.com/docs/jquery/ecommerce/reviews/"
            data-mdb-original-title="Read reviews"
          >
            (269 reviews)
          </a>
        </span>
      </ul>
    </div>
    {/* Jumbotron */}
  </header>
  {/*Main Navigation*/}
  {/*Main layout*/}
  <main className="my-4">
    <div className="container">
      {/*Section: Content*/}
      <section className="text-center">
        <h4 className="mb-4">
          <strong>Pricing</strong>
        </h4>
        <div className="btn-group mb-4" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary active">
            Monthly billing
          </button>
          <button type="button" className="btn btn-primary">
            Annual billign <small>(2 months FREE)</small>
          </button>
        </div>
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4">
            {/* Card */}
            <div className="card">
              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>Free</strong>
                </p>
                <h5 className="mb-0">Free</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>
              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-success btn-sm">
                  Get it
                </button>
              </div>
            </div>
            {/* Card */}
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4">
            {/* Card */}
            <div className="card border border-primary">
              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>Essential</strong>
                </p>
                <h5 className="mb-0">$19/month</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>
              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-primary btn-sm">
                  Buy now
                </button>
              </div>
            </div>
            {/* Card */}
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4">
            {/* Card */}
            <div className="card">
              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>Advanced</strong>
                </p>
                <h5 className="mb-0">$49/month</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>
              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-info btn-sm">
                  Buy now
                </button>
              </div>
            </div>
            {/* Card */}
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4">
            {/* Card */}
            <div className="card">
              <div className="card-header bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>Enterprise</strong>
                </p>
                <h5 className="mb-0">$189/month</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                  <li className="list-group-item">Feature</li>
                </ul>
              </div>
              <div className="card-footer bg-white py-3">
                <button type="button" className="btn btn-info btn-sm">
                  Buy now
                </button>
              </div>
            </div>
            {/* Card */}
          </div>
          {/*Grid column*/}
        </div>
      </section>
      {/*Section: Content*/}
    </div>
  </main>
  {/*Main layout*/}
  {/*Footer*/}
  <footer className="bg-light text-lg-start">
    <div className="py-4 text-center">
      <a
        role="button"
        className="btn btn-primary btn-lg m-2"
        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
        rel="nofollow"
        target="_blank"
      >
        Learn Bootstrap 5
      </a>
      <a
        role="button"
        className="btn btn-primary btn-lg m-2"
        href="https://mdbootstrap.com/docs/standard/"
        target="_blank"
      >
        Download MDB UI KIT
      </a>
    </div>
    <hr className="m-0" />
    <div className="text-center py-4 align-items-center">
      <p>Follow MDB on social media</p>
      <a
        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
      <a
        href="https://www.facebook.com/mdbootstrap"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://twitter.com/MDBootstrap"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://github.com/mdbootstrap/mdb-ui-kit"
        className="btn btn-primary m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/*Footer*/}
  {/* MDB */}
  {/* Custom scripts */}
</>

  )
}

export default Price