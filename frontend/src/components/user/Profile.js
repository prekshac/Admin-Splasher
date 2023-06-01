import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './profile.css';

const Profile = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    avatar: '',
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
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

  return (
    <div style={{minHeight: '100vh'}}>
    <h2 className="profile-heading">Profile Page</h2>
    <div className="profile-page">
        
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="profile-form-group">
            <label htmlFor="pname" className='fw-bold' style={{display:'block'}}>Name</label>
            <Field type="text" id="pname" name="pname" />
            <ErrorMessage name="pname" component="div" className="error-message" />
          </div>

          <div className="profile-form-group">
            <label htmlFor="email"className='fw-bold' style={{display:'block'}}>Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="profile-form-group">
            <label htmlFor="password"className='fw-bold' style={{display:'block'}}>Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="profile-form-group">
            <label htmlFor="avatar"className='fw-bold' style={{display:'block'}}>Avatar</label>
            <Field type="text" id="avatar" name="avatar" />
            <ErrorMessage name="avatar" component="div" className="error-message" />
            </div>

          <button type="submit" className='profile-btn'>Save</button>
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default Profile;
