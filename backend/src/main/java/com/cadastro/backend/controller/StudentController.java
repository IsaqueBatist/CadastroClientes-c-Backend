package com.cadastro.backend.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.backend.models.Student;

@RestController
public class StudentController {
  
  // private List<Student> students = new ArrayList<>();
  private List<Student> students = Arrays.asList(
    new Student(1, "Glauco", "Todesco", "Tua Leite", "13311-215", "Centro", "Sorocaba", "SP")
  );


  

  @GetMapping("students")
  public List<Student> getStudents(){
    return students;
  }

  //   private List<Student> students = Arrays.asList(
  //     new Student(1, "Glauco", "Todesco", "13311-215", "Centro", "Sorocaba", "SP")
  // );

}
