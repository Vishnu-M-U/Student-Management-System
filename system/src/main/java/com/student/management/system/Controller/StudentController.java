package com.student.management.system.Controller;
//new file
import com.student.management.system.Entity.Student;
import com.student.management.system.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/demo")
@CrossOrigin(origins="http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/post")
    public String postStudent(@RequestBody Student student) {
        //we wanted to use @RequestBody when we are giving the input as a JSON through postman
//        Student newStudent = new Student();
//        newStudent.setId(2);
//        newStudent.setName("Jishnu M U");
//        newStudent.setSubject("Maths");
//        newStudent.setMarks(92);
        studentRepository.save(student);
        return "student added";
    }

    @GetMapping("/get")
    public List<Student> getStudent() {
        return studentRepository.findAll();

    }

    //to get specific ones
    @GetMapping("/get/{id}")
    public Optional<Student> getStudentById(@PathVariable int id) {
        return studentRepository.findById(id);
    }
    //to delete specific id
    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable int id) {
        studentRepository.deleteById(id);
        return "Student deleted";
    }

    //to update specific ones
    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student StudentDetails) {
        Student updatedStudent = studentRepository.findById(StudentDetails.getId()).orElse(null);
        if (updatedStudent != null) {
            updatedStudent.setName(StudentDetails.getName());
            updatedStudent.setSubject(StudentDetails.getSubject());
            updatedStudent.setMarks(StudentDetails.getMarks());
            studentRepository.save(updatedStudent);

            return updatedStudent;
        }
        return null;
    }
//    @PutMapping("/user/{id}")
//    Student updateUser(@RequestBody Student newUser, @PathVariable int id) {
//        return studentRepository.findById(id)
//                .map(user -> {
//                    user.setName(newUser.getName());
//                    user.setSubject(newUser.getSubject());
//                    user.setMarks(newUser.getMarks());
//                    return studentRepository.save(user);
//                }
//                return null;
//    }
}

