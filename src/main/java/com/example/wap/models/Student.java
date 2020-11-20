package com.example.wap.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;
    private String first;
    private String last;
    @OneToMany(mappedBy = "student")
    private List<Enrollment> sections;

    public List<Enrollment> getSections() {
        return sections;
    }

    public void setSections(List<Enrollment> sections) {
        this.sections = sections;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }
}
