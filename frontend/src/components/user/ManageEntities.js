import React, { useEffect, useState } from "react";

const ManageEntity = () => {
  const [entityList, setEntityList] = useState([]);

  const [currentEntity, setCurrentEntity] = useState(JSON.parse(sessionStorage.getItem('entity')));

  const fetchEntityData = async () => {
    const res = await fetch("http://localhost:5000/user/getall");
    const data = await res.json();
    console.log(data);
    setEntityList(data);
  };

  useEffect(() => {
    fetchEntityData();
  }, []);

  const deleteEntity= async (id)=>{
    console.log(id);
    const res= await fetch('http://localhost:5000/user/delete/' +id, {method: 'DELETE'});
    if(res.status===200){
      fetchEntityData();
    }
  }

  return (
    <div>
      <div className="container">
        <h3>Logged in as {currentEntity.name}</h3>
        <h1>User Manager</h1>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entityList.map((entity) => (
              <tr key={entity._id}>
                <td>{entity.name}</td>
                <td>{entity.price}</td>
                <td>{entity.category}</td>
                <td>{entity.brand}</td>
                <td>
                  <button className="btn btn-danger"onClick={()=> deleteEntity(user._id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" >
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEntity;