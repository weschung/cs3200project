package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="sections")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sectionId;
    private String sectionName;
    @ManyToOne
    @JsonIgnore
    private Course course;

    @Transient
    public Integer getCourseId() {
        return course.getCourseId();
    }

    @Transient
    public String getCourseTitle() {
        return course.getTitle();
    }

    @OneToMany(mappedBy="section")
    private List<Enrollment> students;

    public void addStudent(Student student, Float grade) {
        Enrollment enrollment = new Enrollment();
        enrollment.setStudent(student);
        enrollment.setSection(this);
        enrollment.setStudentId(student.getStudentId());
        enrollment.setSectionId(this.getSectionId());
        enrollment.setGrade(grade);
        if(this.students == null) {
            this.students = new ArrayList<>();
        }
        this.students.add(enrollment);
        student.getSections().add(enrollment);
    }

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public String getSectionName() {
        return sectionName;
    }

    public void setSectionName(String sectionName) {
        this.sectionName = sectionName;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
