import React, { useEffect } from 'react';
import db from '../../firebaseConfig';
import { useState } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import ConfigFireStore from './configFireStore';


const ConfigureDashboard = () => {

  const [data, setData] = useState([]);

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
    return data.map(({data, id}) => {
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

  useEffect(() => {
    getFirebaseData();
  }, []);


  return (
    <div>
      <ConfigFireStore />
    </div>
  )
}

export default ConfigureDashboard;