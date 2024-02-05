package com.student.management.system.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Table(name="Student")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

//Entity annotation is necessary for a class to be treated as a database table,while the
//@Table annotation is not.it is used when there are multiple tables.
public class Student {

    //we are giving id as the primary key
    @Id
    private int id;
    private String name;
    private String subject;
    private float marks;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public float getMarks() {
        return marks;
    }

    public void setMarks(float marks) {
        this.marks = marks;
    }
}
