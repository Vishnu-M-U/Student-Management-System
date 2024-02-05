import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    subject: "",
    marks: "",
  });

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/demo/update/${id}`, student);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/demo/get/${id}`);
    //Here, axios.get returns a promise, and by using await, the execution of loadUsers 
    //is paused until the promise is resolved.
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Update Student</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Id"
                id="id"
                value={student.id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                id="name"
                value={student.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Subject"
                id="subject"
                value={student.subject}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="marks" className="form-label">
                Marks
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Marks"
                id="marks"
                value={student.marks}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="m-3 text-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger mx-2"
                onClick={()=>navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
