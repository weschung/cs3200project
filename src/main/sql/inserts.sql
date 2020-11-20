INSERT INTO `YOUR_SCHEMA`.`courses` (`title`) VALUES ('cs1234');
INSERT INTO `YOUR_SCHEMA`.`courses` (`title`) VALUES ('cs2345');
INSERT INTO `YOUR_SCHEMA`.`courses` (`title`) VALUES ('cs3456');

INSERT INTO sections VALUES (1, 'Section 123', 1);
INSERT INTO sections VALUES (2, 'Section 234', 1);
INSERT INTO sections VALUES (3, 'Section 345', 2);
INSERT INTO sections VALUES (4, 'Section 456', 2);
INSERT INTO sections VALUES (5, 'Section 567', 2);
INSERT INTO sections VALUES (6, 'Section 678', 3);

INSERT INTO `YOUR_SCHEMA`.`students` (`first`, `last`) VALUES ('Alice', 'Wonderland');
INSERT INTO `YOUR_SCHEMA`.`students` (`first`, `last`) VALUES ('Bob', 'Marley');
INSERT INTO `YOUR_SCHEMA`.`students` (`first`, `last`) VALUES ('Charlie', 'Brown');
INSERT INTO `YOUR_SCHEMA`.`students` (`first`, `last`) VALUES ('Dan', 'Aykroyd');
INSERT INTO `YOUR_SCHEMA`.`students` (`first`, `last`) VALUES ('Ed', 'Norton');

INSERT INTO enrollments VALUES (1, 1, 90,  1, 1);
INSERT INTO enrollments VALUES (1, 2, 95,  1, 2);
INSERT INTO enrollments VALUES (2, 1, 100, 2, 1);
INSERT INTO enrollments VALUES (2, 3, 80,  2, 3);
