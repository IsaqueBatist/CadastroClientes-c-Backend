package com.cadastro.backend.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cadastro.backend.models.Course;


@RestController
public class CourseController {
  private List<Course> courses = Arrays.asList(
      new Course(1, "Java"),
      new Course(2, "Python"),
      new Course(3, "TypeScript"),
      new Course(4, "Angular"),
      new Course(5, "React")
  );

  @GetMapping("courses")
  private List<Course> getCourses(){
    return courses;
  }


}
