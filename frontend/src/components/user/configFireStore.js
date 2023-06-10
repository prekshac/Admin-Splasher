import React, { useState } from 'react';
import './UserProfile.css';
import { useFormik } from 'formik';
import app_config from '../../config';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
const ConfigFireStore = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const { apiUrl } = app_config;

  const [firebaseData, setFirebaseData] = useState({
    user: currentUser._id,
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    appName: '',
    updatedAt: new Date()
  });

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const [authDomain, setAuthDomain] = useState('');
  const [projectId, setProjectId] = useState('');
  const [storageBucket, setStorageBucket] = useState('');
  const [messagingSenderId, setMessagingSenderId] = useState('');
  const [appId, setAppId] = useState('');
  const [appName, setappName] = useState('');

  const dbForm = useFormik({
    initialValues: firebaseData,
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch(apiUrl + '/dashboard/update/' + firebaseData._id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (res.status === 200)
        Swal.fire({
          title: 'Success',
          text: 'Firebase Config Updated Successfully',
          icon: 'success'
        });

      const data = await res.json();
      console.log(data);
      setFirebaseData(data);
    }
  });

  const getFireBaseConfig = async () => {
    const res = await fetch(apiUrl + '/dashboard/getbyuser/' + currentUser._id);
    const data = await res.json();
    console.log(data);
    if (data !== null) {
      setFirebaseData(data);
      setShowUpdateForm(true);
    }
  };

  const createFirebaseConfig = async () => {
    const res = await fetch(apiUrl + '/dashboard/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dbForm.values)
    });

    if (res.status === 200) {
      getFireBaseConfig();
    }
  };

  useEffect(() => {
    getFireBaseConfig();
  }, []);

  return (
    <div className="uppage d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {showUpdateForm ? (
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
                    <input type="text" id="authDomain" value={dbForm.values.authDomain} onChange={dbForm.handleChange} required />
                  </div>
                </div>
                <div className="form-div row align-items-center">
                  <div className="label col-md-6 ">
                    <label htmlFor="projectId">Project ID:</label>
                  </div>
                  <div className="col-md-6 ">
                    <input type="text" id="projectId" value={dbForm.values.projectId} onChange={dbForm.handleChange} required />
                  </div>
                </div>
                <div className="form-div row align-items-center">
                  <div className="label col-md-6 ">
                    <label htmlFor="storageBucket">Storage Bucket:</label>
                  </div>
                  <div className="col-md-6 ">
                    <input type="text" id="storageBucket" value={dbForm.values.storageBucket} onChange={dbForm.handleChange} required />
                  </div>
                </div>
                <div className="form-div row align-items-center ">
                  <div className="label col-md-6 ">
                    <label htmlFor="messagingSenderId">Messaging Sender ID:</label>
                  </div>
                  <div className="col-md-6 ">
                    <input type="text" id="messagingSenderId" value={dbForm.values.messagingSenderId} onChange={dbForm.handleChange} required />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className=" ps-2 pe-2 fw-bold">
            {' '}
            <h4 className="card-header row align-items-center">APP DETAILS:</h4>
            <form onSubmit={dbForm.handleSubmit}>
              <div className="card-body my-card-body">
                <div className="form-div row align-items-center">
                  <div className="label col-md-6 ">
                    <label htmlFor="appId">App ID:</label>
                  </div>
                  <div className="col-md-6 ">
                    <input type="text" id="appId" value={dbForm.values.appId} onChange={dbForm.handleChange} required />
                  </div>
                </div>

                <div className="form-div row align-items-center">
                  <div className="label col-md-6">
                    <label htmlFor="appName">App Name:</label>
                  </div>
                  <div className="col-md-6 ">
                    <input type="text" id="appName" value={dbForm.values.appName} onChange={dbForm.handleChange} required />
                  </div>
                </div>
              </div>
              <button type="submit" className="upbtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <h3>You have not created any dashboard yet</h3>
          <button className="btn btn-primary" onClick={createFirebaseConfig}>
            Create Dashboard
          </button>
        </>
      )}
    </div>
  );
};

export default ConfigFireStore;
