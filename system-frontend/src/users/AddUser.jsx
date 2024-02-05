import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AddUser() {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    id: "",
    name: "",
    subject: "",
    marks: "",
  });
  const { id, name, subject, marks } = student;

  // updates the student state as the user inputs values in the form fields
  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!id || !name || !subject || !marks) {
      alert("Please fill in all the fields before submitting.");
      return;
    }
    await axios.post("http://localhost:8080/demo/post", student);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Id" className="form-label">
                Id
              </label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter your Id"
                id="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Name"
                id="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Subject" className="form-label">
                Subject
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Subject"
                id="subject"
                value={subject}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Marks
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your Marks"
                id="marks"
                value={marks}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="m-3 text-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button type="button" className="btn btn-outline-danger mx-2"
              onClick={()=>navigate("/")}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
