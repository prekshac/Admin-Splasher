import React from 'react'
import './Price.css';

const Price = () => {
  return (
    <div>
      <div className='container'>
        <img className='img-fluid' src="" />
        <div className='row'>
          <div className='col-md-4 mx-auto'>
            <div className='card'>
              <div className='card-header'>
                <h4 className='text-dark'>Regular Plan</h4>
              </div>
              <div className='card-body'>
                <h5 className='text-center'>Features</h5>

                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                </ul>


              </div>
              <div className='card-footer'>
                <div className='text-center'>
                  <a href="https://buy.stripe.com/test_14kaHl5WB0pl5UscMM" className='btn btn-primary'>Subscribe</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Price