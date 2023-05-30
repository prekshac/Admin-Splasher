import React, { useState } from 'react';
import './UserProfile.css';
import { useFormik } from 'formik';

const UserProfile = () => {
  const [apiKey, setApiKey] = useState('');
  const [authDomain, setAuthDomain] = useState('');
  const [projectId, setProjectId] = useState('');
  const [storageBucket, setStorageBucket] = useState('');
  const [messagingSenderId, setMessagingSenderId] = useState('');
  const [appId, setAppId] = useState('');
  const [appName, setappName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted!');
    console.log('API Key:', apiKey);
    console.log('Auth Domain:', authDomain);
    console.log('Project ID:', projectId);
    console.log('Storage Bucket:', storageBucket);
    console.log('Messaging Sender ID:', messagingSenderId);
    console.log('App ID:', appId);
    console.log('App Name:', appName);
  };

  const profileForm = useFormik({
    initialValues: {

    }
  });

  return (
    <div className="uppage d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div class="upcard">
        <div className="ps-2 pe-2 fw-bold">
          <h4 className="card-header row align-items-center">FIREBASE DETAILS:</h4>
          <form onSubmit={handleSubmit}>
            <div className="card-body my-card-body">
              <div className="form-div row align-items-center  ">
                <div className="label col-md-6 ">
                  <label htmlFor="apiKey">API Key:</label>
                </div>
                <div className="col-md-6 ">
                  <input type="text" id="apiKey" value={apiKey} onChange={(e) => setApiKey(e.target.value)} required />
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
    </div>
  );
};

export default UserProfile;
