import React, { useState } from 'react'
import { useEffect } from 'react';
import './AddEntityData.css';

const AddEntityData = () => {

  const [entityList, setEntityList] = useState([]);

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


  return (
    <div>
      <div className="card" style={{marginTop: '10vh', marginLeft: '30%', marginRight:'30%'}}>
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


            <button type="submit">Add</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddEntityData;