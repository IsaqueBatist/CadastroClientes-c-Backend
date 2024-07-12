package com.cadastro.backend.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cadastro.backend.models.Student;

@RestController
@CrossOrigin
public class StudentController {

  private List<Student> students = new ArrayList<>();
  // private List<Student> students = Arrays.asList(
  // new Student(1, "Pedro Antonio", "prdro@gmail.com", "(11)963995039", 1,
  // "Tarde")
  // );

  @GetMapping("students/{id}")
  public ResponseEntity<Student> getStudent(@PathVariable("id") int id) {
    Student stud = students.stream()
        .filter(s -> s.getId() == id)
        .findFirst()
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found"));
    return ResponseEntity.ok(stud);
  }

  @PostMapping("students")
  public ResponseEntity<Student> save(@RequestBody Student student) {
    student.setId(students.size() + 1);
    students.add(student);

    URI location = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(student.getId())
        .toUri();

    return ResponseEntity.created(location).body(student);
  }

  @GetMapping("students")
  public List<Student> getStudents() {
    return students;
  }

}
