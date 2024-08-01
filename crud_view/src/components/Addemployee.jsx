import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeService from "../service/EmployeeService";

const Addemployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((reponse) => {
        console.log("saved ",reponse);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className="text-2xl tracking-wider font-bold text-center py-4 px-8">
        <p>Add NEW Employee</p>
      </div>
      <div>
        <input
          onChange={handleChange}
          value={employee.name}
          name="name"
          className="w-full py-2 my-4 text-slet-800 text-black"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          value={employee.phone}
          name="phone"
          className="w-full py-2 my-4 text-slet-800 text-black"
          type="number"
          placeholder="Phone"
        />
        <input
          onChange={handleChange}
          name="email"
          value={employee.email}
          className="w-full py-2 my-4 text-slet-800 text-black"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="flex my-4 space-x-3 px-10">
        <button
          onClick={saveEmployee}
          className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
        >
          Save
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
          onClick={reset}
        >
          Clear
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Addemployee;
