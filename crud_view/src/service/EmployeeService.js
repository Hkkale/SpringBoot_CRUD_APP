import axios from 'axios'
const  EMPLOYEE_BASE_URL="http://localhost:8080/employes"


class EmployeeService{

  

  getEmployees(){
    return axios.get(EMPLOYEE_BASE_URL);
  }

  getEmployeeById(id){
    return axios.get(EMPLOYEE_BASE_URL+"/"+id);
  }

  saveEmployee(employee){
    return axios.post(EMPLOYEE_BASE_URL,employee)
  }
  

  updateEmployeeById(employee,id){
    return axios.put(EMPLOYEE_BASE_URL+"/"+id,employee);
  }
  

  deleteEmployeeById(id){
    return axios.delete(EMPLOYEE_BASE_URL+"/"+id);
  }
}


export default new EmployeeService();