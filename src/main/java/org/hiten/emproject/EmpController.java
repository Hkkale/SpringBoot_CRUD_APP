package org.hiten.emproject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("http://localhost:5173/")
public class EmpController {

    @Autowired
    private EmpService empservice;

    @GetMapping("employes")
    public List<Employee> getEmployeeById() {
        return empservice.readEmployees();
    }

    @GetMapping("employes/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return empservice.readEmployee(id);
    }

    @PostMapping("employes")
    public String createEmployee(@RequestBody Employee emp) {
        return empservice.createEmployee(emp);
    }

    @DeleteMapping("employes/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if (empservice.deleteEmployee(id)) {
            return "Delete Successfully";
        } else {
            return "Not Found";
        }
    }

    @PutMapping("employes/{id}")
    public String putMethodName(@PathVariable Long id, @RequestBody Employee emp) {

        return empservice.updateEmployee(id, emp);
    }
}