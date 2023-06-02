import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";

const ManageEntity = () => {
  const [entityList, setEntityList] = useState([]);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const fetchEntityData = async () => {
    const res = await fetch(
      "http://localhost:5000/entity/getbyuser/" + currentUser._id
    );
    const data = await res.json();
    console.log(data);
    setEntityList(data);
  };

  useEffect(() => {
    fetchEntityData();
  }, []);

  const [selEntity, setSelEntity] = useState(null);

  const [keyValuePair, setKeyValuePair] = useState([]);

  const updateEntity = async (entity) => {
    console.log(entity);
    const res = await fetch(
      "http://localhost:5000/entity/update/" + selEntity._id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entity),
      }
    );
    if (res.status === 200) {
      fetchEntityData();
    }
  };

  const deleteEntity = async (id) => {
    console.log(id);
    const res = await fetch(
      "http://localhost:5000/entity/delete/" + selEntity._id,
      { method: "DELETE" }
    );
    if (res.status === 200) {
      fetchEntityData();
    }
  };

  const displayEntities = () => {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Collection Name</th>
            <th>Created At</th>
            <th>Real-time</th>
            
          </tr>
        </thead>
        <tbody>
          {entityList.map((entity) => (
            <tr key={entity.id}>
              <td>{entity.name}</td>
              <td>{entity.collectionName}</td>
              <td>{entity.createdAt}</td>
              <td>{entity.realtime}</td>
              
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEntity(entity._id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  data-mdb-toggle="modal"
                  data-mdb-target="#editEntity"
                  onClick={(e) => setSelEntity(entity)}
                >
                  <i className="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const updateKey = (e, index) => {
    // console.log(e.target.value);
    const updatedKeyValuePair = [...keyValuePair];
    updatedKeyValuePair[index].key = e.target.value;
    setKeyValuePair(updatedKeyValuePair);
    console.log(updatedKeyValuePair);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="editEntity"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {keyValuePair.map((item, index) => (
                  <li className="list-group-item">
                    <input
                      type="text"
                      value={item.key}
                      onChange={(e) => updateKey(e, index)}
                    />
                  </li>
                ))}
              </ul>

              <button
                onClick={(e) => {
                  setKeyValuePair([...keyValuePair, { key: "", value: "" }]);
                }}
              >
                Add Field
              </button>
              <button
                onClick={(e) => updateEntity({ keyValuePairs: keyValuePair })}
              >
                Update
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">{displayEntities()}</div>
    </div>
  );
};

export default ManageEntity;
