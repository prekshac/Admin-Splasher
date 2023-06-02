import { useFormik } from 'formik';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { MDBInput } from 'mdb-react-ui-kit';
import './addentity.css';

const AddEntity = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const iconOptions = [
    { value: 'fa fa-user', label: 'User' },
    { value: 'fa-solid fa-shopping-cart', label: 'Order' },
    { value: "fa-solid fa-regular fa-tag", label: 'Offer' },
    { value: "fa-solid fa-conveyor-belt-arm", label: 'Product' },
  ];
  const [selectedIcon, setselectedIcon] = useState(iconOptions[0].value);

  const entityManagerForm = useFormik({
    initialValues: {
      name: '',
      user: currentUser._id,
      collectionName: '',
      keyValuePairs: '',
      realtime: '',
      icon: '',
      createdAt: new Date()
    },
    onSubmit: async (values) => {
      values.icon = selectedIcon;
      console.log(values);

      const res = await fetch('http://localhost:5000/entity/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          title: ' Well Done!!',
          icon: 'success',
          text: ' Successful'
        });
      }
    }
  });
  return (
    <section>
      <div className="addentity-container" style={{ minHeight: '100vh' }}>
      
        <div className="add-entity-cardmain">
          <div className="">
            
            <div className="card addentity-card" style={{ borderRadius: 15 }}>
            <h2 className="addentity-heading">Add Entity</h2>
              <div className="addentity-cardbody">
                <form onSubmit={entityManagerForm.handleSubmit}>
                  <MDBInput label="Name" id="name" type="text" value={entityManagerForm.values.name} onChange={entityManagerForm.handleChange} />
                  <MDBInput label="CollectionName" id="collectionname" type="text" value={entityManagerForm.values.collectionName} onChange={entityManagerForm.handleChange} />
                  <MDBInput label="Real-time" id="realtime" type="text" value={entityManagerForm.values.realtime} onChange={entityManagerForm.handleChange} />

                  <div className="d-flex">
                    <select className="form-control" onChange={(e) => setselectedIcon(e.target.value)} value={selectedIcon}>
                      {iconOptions.map((iconOption, index) => (
                        <option key={index} value={iconOption.value}>
                          <i className={iconOption.value} aria-hidden="true"></i> {iconOption.label}
                        </option>
                      ))}
                    </select>
                    <div className="p-3">
                      <i className={selectedIcon}></i>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="addentity-btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddEntity;
