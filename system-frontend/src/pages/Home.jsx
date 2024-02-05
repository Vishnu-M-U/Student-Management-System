import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/demo/get");
    setStudents(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/demo/delete/${id}`);
    loadUsers();
  };
  

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Marks</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.subject}</td>
                <td>{student.marks}</td>
                <td>
                  
                  <Link
                    className="btn btn-success mx-2"
                    to={`/UpdateUser/${student.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
