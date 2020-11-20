create table courses (
   id integer not null auto_increment,
    title varchar(255),
    primary key (id)
)
create table sections (
   section_id integer not null auto_increment,
    section_name varchar(255),
    course_id integer,
    primary key (section_id)
)
alter table sections
   add constraint FK7ty9cevpq04d90ohtso1q8312
   foreign key (course_id)
   references courses (id)

