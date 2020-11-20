    create table courses (
       id integer not null auto_increment,
        title varchar(255),
        primary key (id)
    ) engine=InnoDB

    create table enrollments (
       section_id integer not null,
        student_id integer not null,
        grade float,
        section_section_id integer,
        student_student_id integer,
        primary key (section_id, student_id)
    ) engine=InnoDB

    create table sections (
       section_id integer not null auto_increment,
        section_name varchar(255),
        course_id integer,
        primary key (section_id)
    ) engine=InnoDB

    create table students (
       student_id integer not null auto_increment,
        first varchar(255),
        last varchar(255),
        primary key (student_id)
    ) engine=InnoDB

    alter table enrollments
       add constraint FK2klr8kudlsyl5h0djk56jmbhi
       foreign key (section_section_id)
       references sections (section_id)

    alter table enrollments
       add constraint FKjw3x10w9mswhngwpg7gimmvxq
       foreign key (student_student_id)
       references students (student_id)

    alter table sections
       add constraint FK7ty9cevpq04d90ohtso1q8312
       foreign key (course_id)
       references courses (id)
