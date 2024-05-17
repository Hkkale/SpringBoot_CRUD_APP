package org.hiten.emproject;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class EmpServiceImpl implements EmpService {
    @Autowired
    private EmployeeRepository emplRepo;

    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity emplEnt = new EmployeeEntity();
        BeanUtils.copyProperties(employee, emplEnt);
        emplRepo.save(emplEnt);
        return "Saved Successfully";
    }

    @Override
    public Employee readEmployee(Long id) {
       EmployeeEntity emp = emplRepo.findById(id).get();
       Employee empl =new Employee();
       BeanUtils.copyProperties( emp , empl);
       return empl;

    }

    @Override
    public boolean deleteEmployee(Long id) {
        emplRepo.deleteById(id);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {

        EmployeeEntity existing_emp = emplRepo.findById(id).get();

        existing_emp.setEmail(employee.getEmail());
        existing_emp.setName(employee.getName());
        existing_emp.setPhone(employee.getPhone());
        

        emplRepo.save(existing_emp);
        
        return "Update Sucessfully";
    }

    

    @Override
    public List<Employee> readEmployees() {
        List <EmployeeEntity> employeesList =emplRepo.findAll();
        List<Employee> employees1=new ArrayList<>(); 

        for (EmployeeEntity emplent : employeesList) {

            Employee emp = new Employee();
            emp.setId(emplent.getId());
            emp.setName(emplent.getName());
            emp.setEmail(emplent.getEmail());
            emp.setPhone(emplent.getPhone());
            employees1.add(emp);
            
        }
        return employees1;
        
    }
}
