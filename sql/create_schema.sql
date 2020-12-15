CREATE SCHEMA `nba_team` ;

CREATE TABLE `nba_team`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `dob` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `nba_team`.`teams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_name` VARCHAR(45) NULL,
  `yr_founded` INT NULL,
  `conference` VARCHAR(45) NULL,
  `record` VARCHAR(45) NULL,
  `standing` VARCHAR(45) NULL,
  `game_schedule` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `nba_team`.`fans` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_id` INT NULL,
  `season_pass` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `team_has_fans_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `user_fan_id`
    FOREIGN KEY (`id`)
    REFERENCES `nba_team`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `team_has_fans`
    FOREIGN KEY (`team_id`)
    REFERENCES `nba_team`.`teams` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);
    
CREATE TABLE `nba_team`.`managers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `meeting_schedule` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_manager_id`
    FOREIGN KEY (`id`)
    REFERENCES `nba_team`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE `nba_team`.`phones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `phone` VARCHAR(45) NULL,
  `primary_p` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_has_phones_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_has_phones`
    FOREIGN KEY (`user_id`)
    REFERENCES `nba_team`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
    
CREATE TABLE `nba_team`.`addresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `street` VARCHAR(45) NULL,
  `apartment` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `zip` VARCHAR(45) NULL,
  `primary_p` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_has_address_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_has_address`
    FOREIGN KEY (`user_id`)
    REFERENCES `nba_team`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
  
CREATE TABLE `nba_team`.`players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_id` INT NULL,
  `manager_id` INT NULL,
  `player_name` VARCHAR(45) NULL,
  `age` INT NULL,
  `height` VARCHAR(45) NULL,
  `player_payment` INT NULL,
  `player_bank` VARCHAR(45),
  `statistic` VARCHAR(45),
  PRIMARY KEY (`id`),
  INDEX `managers_manage_players_idx` (`manager_id` ASC) VISIBLE,
  INDEX `team_has_players_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `manager_manage_players`
    FOREIGN KEY (`manager_id`)
    REFERENCES `nba_team`.`managers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `team_has_players`
    FOREIGN KEY (`team_id`)
    REFERENCES `nba_team`.`teams` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);
    
CREATE TABLE `nba_team`.`coaches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_id` INT NULL,
  `manager_id` INT NULL,
  `coach_name` VARCHAR(45) NULL,
  `strategy` VARCHAR(45) NULL,
  `practice_schedule` VARCHAR(45) NULL,
  `coach_payment` INT NULL,
  `coach_bank` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `manager_manage_coaches_idx` (`manager_id` ASC) VISIBLE,
  INDEX `team_has_coaches_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `manager_manage_coaches`
    FOREIGN KEY (`manager_id`)
    REFERENCES `nba_team`.`managers` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `team_has_coaches`
    FOREIGN KEY (`team_id`)
    REFERENCES `nba_team`.`teams` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);
    
CREATE TABLE `nba_team`.`games` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team` INT NULL,
  `opponent` VARCHAR(45) NULL,
  `score` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `team_plays_games_idx` (`team` ASC) VISIBLE,
 CONSTRAINT `team_plays_games`
  FOREIGN KEY (`team`)
  REFERENCES `nba_team`.`teams` (`id`)
  ON DELETE NO ACTION
  ON UPDATE CASCADE);
    
CREATE TABLE `nba_team`.`tickets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `game_id` INT NULL,
  `fan_id` INT NULL,
  `price` INT NULL,
  `seat` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  `time` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `game_has_tickets_idx` (`game_id` ASC) VISIBLE,
  INDEX `fan_buys_tickets_idx` (`fan_id` ASC) VISIBLE,
  CONSTRAINT `game_has_tickets`
    FOREIGN KEY (`game_id`)
    REFERENCES `nba_team`.`games` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fan_buys_tickets`
    FOREIGN KEY (`fan_id`)
    REFERENCES `nba_team`.`fans` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);
