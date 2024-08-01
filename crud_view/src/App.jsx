import "./App.css";
import Addemployee from "./components/Addemployee";
import Employeelist from "./components/Employyelist";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes,Route} from "react-router-dom"

import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Employeelist/>}/>
        <Route path="/" element={<Employeelist/>} />
          <Route path="/addEmployee" element={<Addemployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
