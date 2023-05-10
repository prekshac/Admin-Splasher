import React, { useState } from 'react'
import { useEffect } from 'react';

const AddEntityData = () => {

  const [entityList, setEntityList] = useState([]);

  // const [currentEntity, setCurrentEntity] = useState(JSON.parse(sessionStorage.getItem('entity')));

  const [selEntity, setSelEntity] = useState(null);
  const fetchEntityData = async () => {
    const res = await fetch("http://localhost:5000/entity/getall");
    const data = await res.json();
    console.log(data);
    setEntityList(data);
  };

  useEffect(() => {
    fetchEntityData();
  }, []);

    // productdata store form


  return (
    <div>

    </div>
  )
}

export default AddEntityData