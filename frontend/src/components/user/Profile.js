import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './profile.css';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const url = 'http://localhost:5000';

  const handleSubmit = async (values) => {
    // Handle form submission
    console.log(values);
    const response = await fetch('http://localhost:5000/user/update/' + currentUser._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    const data = await response.json();
    console.log(data);
    setCurrentUser(data);
    sessionStorage.setItem('user', JSON.stringify(data));
    alert('Profile updated successfully');
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }
    if (!values.avatar) {
      errors.avatar = 'Avatar is required';
    }

    return errors;
  };

  const updateProfile = async (data) => {
    console.log(data);
    const res = await fetch(url + '/user/update/' + currentUser._id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    const userdata = (await res.json());
    console.log(userdata);
    setCurrentUser(userdata);
    sessionStorage.setItem('user', JSON.stringify(userdata));
  };

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    // setSelImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(url + '/util/uploadfile', {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
        updateProfile({ avatar: file.name });
      }
    });
  };

  return (
    <div className="pro123" style={{ minHeight: '100vh' }}>
      <h2 className="profile-heading">Profile Page</h2>
      <div className="profile-page">
        <Formik initialValues={currentUser} onSubmit={handleSubmit}>
          {({ values, handleChange, handleSubmit, touched, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <div className="profile-form-group">
                <label htmlFor="pname" className="fw-bold" style={{ display: 'block' }}>
                  Name
                </label>
                <Field type="text" id="name" name="name" onChange={handleChange} value={values.name} />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div className="profile-form-group">
                <label htmlFor="email" className="fw-bold" style={{ display: 'block' }}>
                  Email
                </label>
                <Field type="email" id="email" name="email" onChange={handleChange} value={values.email} />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="profile-form-group">
                <label htmlFor="password" className="fw-bold" style={{ display: 'block' }}>
                  Password
                </label>
                <Field type="password" id="password" name="password" onChange={handleChange} value={values.password} />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <label className="fw-bold" style={{ display: 'block', color: '#fff' }}>Upload Avatar Image</label>
              <input className='form-control' style={{color: '#fff'}} type='file' onChange={uploadProfileImage} />

              <button type="submit" className="profile-btn">
                Save
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
