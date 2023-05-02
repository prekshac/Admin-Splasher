import React, { useEffect, useState } from "react";

const ManageEntity = () => {
  const [entityList, setEntityList] = useState([]);

  const [currentEntity, setCurrentEntity] = useState(JSON.parse(sessionStorage.getItem('entity')));

  const fetchEntityData = async () => {
    const res = await fetch("http://localhost:5000/entity/getall");
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
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th> 
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {entityList.map((entity) => (
              <tr key={entity.id}>
                <td>{entity.name}</td>
                <td>{entity.price}</td>
                <td>{entity.category}</td>
                <td>{entity.brand}</td>
                <td>{entity.quantity}</td>
                <td>
                  <button className="btn btn-danger"onClick={()=> deleteEntity(entity.id)}>
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