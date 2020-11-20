package com.example.wap.models;

import java.io.Serializable;

public class EmployeeId implements Serializable {
    private Integer studentId;
    private Integer sectionId;
    public Integer getStudentId() {
        return studentId;
    }
    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }
    public Integer getSectionId() {
        return sectionId;
    }
    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }
    public int hashCode() {
        return (int)(studentId + sectionId);
    }

    public boolean equals(Object object) {
        if (object instanceof EmployeeId) {
            EmployeeId otherId = (EmployeeId) object;
            return (otherId.studentId == this.studentId) && (otherId.sectionId == this.sectionId);
        }
        return false;
    }
}
