import React, { useState } from 'react';
import './UserProfile.css';
import { useFormik } from 'formik';
import app_config from '../../config';
import { useEffect } from 'react';
const ConfigFireStore = () => {
  
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const {apiUrl} = app_config;

  const [firebaseData, setFirebaseData] = useState(null);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  

  const dbForm = useFormik({
    initialValues: {
      user: currentUser._id,
    apiKey: '',  
    authDomain: '',  
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    appName: '',
    updatedAt: new Date()
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const getFireBaseConfig = async () => {
    const res = await fetch(
      apiUrl+"/entity/getbyuser/" + currentUser._id
    );
    const data = await res.json();
    console.log(data);
    setFirebaseData(data);
    setShowUpdateForm(true);
  }

  const createFirebaseConfig = async () => {
    const res = await fetch(apiUrl+'/dashboard/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileForm.values),
    });

    if (res.status === 200) {
      getFireBaseConfig();
    }
  }

  useEffect(() => {
    getFireBaseConfig();
  }, [])
  

  return (
    <div className="uppage d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>

      {
        showUpdateForm ? (

      <div class="upcard">
        <div className="ps-2 pe-2 fw-bold">
          <h4 className="card-header row align-items-center">FIREBASE DETAILS:</h4>
          <form onSubmit={dbForm.handleSubmit}>
            <div className="card-body my-card-body">
              <div className="form-div row align-items-center  ">
                <div className="label col-md-6 ">
                  <label htmlFor="apiKey">API Key:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="apiKey" value={dbForm.values.apiKey} onChange={dbForm.handleChange} required />
                </div>
              </div>
              <div className="form-div row align-items-center ">
                <div className="label col-md-6 ">
                  <label htmlFor="authDomain">Auth Domain:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="authDomain" value={authDomain} onChange={(e) => setAuthDomain(e.target.value)} required />
                </div>
              </div>
              <div className="form-div row align-items-center">
                <div className="label col-md-6 ">
                  <label htmlFor="projectId">Project ID:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="projectId" value={projectId} onChange={(e) => setProjectId(e.target.value)} required />
                </div>
              </div>
              <div className="form-div row align-items-center">
                <div className="label col-md-6 ">
                  <label htmlFor="storageBucket">Storage Bucket:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="storageBucket" value={storageBucket} onChange={(e) => setStorageBucket(e.target.value)} required />
                </div>
              </div>
              <div className="form-div row align-items-center ">
                <div className="label col-md-6 ">
                  <label htmlFor="messagingSenderId">Messaging Sender ID:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="messagingSenderId" value={messagingSenderId} onChange={(e) => setMessagingSenderId(e.target.value)} required />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className=" ps-2 pe-2 fw-bold">
          {' '}
          <h4 className="card-header row align-items-center">APP DETAILS:</h4>
          <form onSubmit={handleSubmit}>
            <div className="card-body my-card-body">
              <div className="form-div row align-items-center">
                <div className="label col-md-6 ">
                  <label htmlFor="appId">App ID:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="appId" value={appId} onChange={(e) => setAppId(e.target.value)} required />
                </div>
              </div>

              <div className="form-div row align-items-center">
                <div className="label col-md-6">
                  <label htmlFor="appName">App Name:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="appName" value={appName} onChange={(e) => setappName(e.target.value)} required />
                </div>
              </div>
            </div>
          </form>
        </div>

        <button type="submit" className="upbtn">
          Submit
        </button>
      </div>
        ):(
          <>
          <h3>You have not created any dashboard yet</h3>
          <button className='btn btn-primary' onClick={createFirebaseConfig}>Create Dashboard</button>
          </>
        )
      }

    </div>
  );
};

export default ConfigFireStore;
