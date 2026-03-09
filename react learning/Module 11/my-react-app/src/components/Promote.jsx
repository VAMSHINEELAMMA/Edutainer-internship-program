import { useState } from "react";

function Promote() {

  const [staff] = useState([
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'IT',
      experience: 5,
      desc: 'John is a skilled software engineer with 5 years of experience in developing web applications.'
    },
    {
      id: 2,
      name: 'Vamshi',
      position: 'Data Analyst',
      department: 'Data Science',
      experience: 3,
      desc: 'Vamshi is a talented data analyst with 3 years of experience in analyzing complex datasets.'
    },
    {
      id: 3,
      name: 'Anu',
      position: 'Project Manager',
      department: 'Management',
      experience: 7,
      desc: 'Anu is an experienced project manager with 7 years of experience leading teams.'
    }
  ]);

  const promoteEmp = (name) => {
    alert(`${name} promoted successfully 🚀`);
  };

  return (
    <div className="bg-light min-vh-100 py-5">

      <div className="container">

        {/* Heading Full Width */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Employee Promotion Dashboard
          </h1>
          <p className="text-muted">
            Manage and promote employees efficiently
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {staff.map((emp) => (
            <div key={emp.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow border-0">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXeNnSAv43GutjKq2JVa85w9WVOoQBqBTFpA&s"
                  className="card-img-top"
                  alt="Employee"
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{emp.name}</h5>
                  <p className="text-muted mb-2">{emp.position}</p>

                  <p className="mb-1">
                    <strong>Department:</strong> {emp.department}
                  </p>

                  <p className="mb-1">
                    <strong>Experience:</strong> {emp.experience} years
                  </p>

                  <p className="small text-muted">
                    {emp.desc}
                  </p>

                  <button
                    onClick={() => promoteEmp(emp.name)}
                    className="btn btn-primary mt-auto"
                  >
                    Promote
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Promote;
