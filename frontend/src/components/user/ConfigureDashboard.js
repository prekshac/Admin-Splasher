import React, { useEffect } from 'react';
import db from '../../firebaseConfig';


const ConfigureDashboard = () => {

  const [data, setData] = useState([]);
  
    // const getFirebaseData = () => {
    //   const collection = db.collection("product")
    //   .onSnapshot((querySnapshot) => {
    //     const newData = [];
    //     querySnapshot.forEach((doc) => {
    //       newData.push(doc.data());
    //     });
    //     setData(newData);
    //   });
    // };

    useEffect(() => {
      // getFirebaseData();
    }, []);
    

  return (
    <div>ConfigureDashboard</div>
  )
}

export default ConfigureDashboard;