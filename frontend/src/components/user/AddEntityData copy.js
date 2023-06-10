import React, { useState } from 'react'
import { useEffect } from 'react';
import './AddEntityData.css';
import db from '../../firebaseConfig';
import { collection, query, orderBy, onSnapshot, addDoc, setDoc, doc } from "firebase/firestore"

const AddEntityData = () => {
  const [entityList, setEntityList] = useState([]);
  const [data, setData] = useState([]);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [selEntity, setSelEntity] = useState(null);

  const fetchEntityData = async () => {
    const res = await fetch("http://localhost:5000/entity/getbyuser/" + currentUser._id);
    const data = await res.json();
    console.log(data);
    setEntityList(data);
  };

  useEffect(() => {
    fetchEntityData();
  }, []);


  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Selected option:', selectedOption);
  };

  const getFirebaseData = () => {
    const q = query(collection(db, 'User'))
    onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot.docs);
      setData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  };

  const displayDocs = () => {
    return data.map(({ data, id }) => {
      return (
        <div key={id}>
          <h1>{data.name}</h1>
          <h1>{data.price}</h1>
          <h1>{data.category}</h1>
          <h1>{data.brand}</h1>
        </div>
      )
    })
  }

  const addFirebaseData = async (formdata) => {
    console.log(formdata);
    addDoc(collection(db, selEntity.collectionName), formdata).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
  }


  return (
    <div>
      <div className="card" style={{ marginTop: '10vh', marginLeft: '30%', marginRight: '30%' }}>
        <div className="card-content">
          <h4 >Add Entity: </h4>
          <form className="entity-form" onSubmit={handleSubmit}>
            <label htmlFor="selectBox" className='entity-head'>Select an entity option:</label>
            <select id="selectBox" value={selectedOption} onChange={e => setSelEntity(e.target.value)} className='form-control'>
              <option value="">-- Choose --</option>
              {
                entityList.map((entity) => (
                  <option value={entity.collectionName}>{entity.name}</option>
                ))
              }
            </select>

            <button type="submit">Submit</button>


          </form>
          <h4 className='entity-data'>Add Entity Data: </h4>
          {/* <Formik initialValues={selEntity ? selEntity.keyValuePairs}> */}
          <form className="entityData-form">
            {
              selEntity &&
              entityList.find(entity => entity.collectionName === selEntity).keyValuePairs.map(pair => (
                <>
                  <label htmlFor={pair.key}>{pair.key}</label>
                  <input id={pair.key} />
                </>
              )
              )
            }


            <button type="button" onClick={e => addFirebaseData('product')}>Add</button>
          </form>
          {/* </Formik> */}

        </div>
      </div>
    </div>
  )
}

export default AddEntityData;