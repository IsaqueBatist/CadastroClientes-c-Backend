package com.cadastro.backend.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cadastro.backend.models.Student;

@RestController
public class StudentController {

  // private List<Student> students = new ArrayList<>();
  private List<Student> students = Arrays.asList(
      new Student(1, "Glauco", "Todesco", "Tua Leite", "13311-215", "Centro", "Sorocaba", "SP"));

  @GetMapping("students/{id}")
  public ResponseEntity<Student> getStudent(@PathVariable("id") int id) {
    Student stud = students.stream()
        .filter(s -> s.getId() == id)
        .findFirst()
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found"));
    return ResponseEntity.ok(stud);
  }

  @GetMapping("students")
  public List<Student> getStudents() {
    return students;
  }

  // private List<Student> students = Arrays.asList(
  // new Student(1, "Glauco", "Todesco", "13311-215", "Centro", "Sorocaba", "SP")
  // );

}
