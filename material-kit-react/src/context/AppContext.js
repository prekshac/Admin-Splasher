import { createContext, useContext } from 'react';
import { onSnapshot, query, collection } from 'firebase/firestore';

import db from '../firebaseConfig';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const getDataFromFirebase = async (col, cb) => {
    const q = query(collection(db, 'User'));
    onSnapshot(q, (querySnapshot) => {
    //   console.log(querySnapshot.docs);

      cb(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  const storeDataToFirebase = async (collection, data) => {};

  return <AppContext.Provider value={{ getDataFromFirebase, storeDataToFirebase }}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
