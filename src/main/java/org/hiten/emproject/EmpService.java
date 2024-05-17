package org.hiten.emproject;

import java.util.List;

public interface EmpService {

    String createEmployee(Employee employee);

    Employee readEmployee(Long id);

    List <Employee> readEmployees();

    boolean deleteEmployee(Long id);

    String updateEmployee(Long id , Employee employee);



    
}
