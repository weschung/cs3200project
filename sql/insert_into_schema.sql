INSERT INTO `nba_team`.`users` (`id`, `username`, `password`, `dob`, `first_name`, `last_name`, `email`) VALUES ('123', 'alice', 'alice', '12/12/1990', 'Alice', 'Wonderland', 'alice@wonderland.com');
INSERT INTO `nba_team`.`users` (`id`, `username`, `password`, `dob`, `first_name`, `last_name`, `email`) VALUES ('234', 'billy', 'billy', '1/1/2000', 'Billy', 'Bot', 'billy@bot.com');
INSERT INTO `nba_team`.`users` (`id`, `username`, `password`, `dob`, `first_name`, `last_name`, `email`) VALUES ('345', 'charlie', 'charlie', '3/3/1980', 'Charlie', 'Chaplin', 'charlie@chaplin.com');
INSERT INTO `nba_team`.`users` (`id`, `username`, `password`, `dob`, `first_name`, `last_name`, `email`) VALUES ('456', 'donald', 'donald', '4/4/2001', 'Donald', 'Duck', 'donald@duck.com');

INSERT INTO `nba_team`.`teams` (`id`, `team_name`, `yr_founded`, `conference`, `record`, `standing`, `game_schedule`) VALUES ('123', 'Celtics', '1940', 'East', '70-12', '2', 'Sun, Tues, Thurs');
INSERT INTO `nba_team`.`teams` (`id`, `team_name`, `yr_founded`, `conference`, `record`, `standing`, `game_schedule`) VALUES ('234', 'Lakers', '1900', 'West', '68-14', '2', 'Mon, Wed, Fri');

INSERT INTO `nba_team`.`fans` (`id`, `team_id`, `season_pass`) VALUES ('345', '123', '1');
INSERT INTO `nba_team`.`fans` (`id`, `team_id`, `season_pass`) VALUES ('456', '234', '0');

INSERT INTO `nba_team`.`games` (`id`, `team`, `opponent`, `score`) VALUES ('1', '123', '234', '111-110');
INSERT INTO `nba_team`.`games` (`id`, `team`, `opponent`, `score`) VALUES ('2', '234', '123', '90-87');

INSERT INTO `nba_team`.`managers` (`id`, `meeting_schedule`, `team_id`) VALUES ('123', 'M, W, F', '123');
INSERT INTO `nba_team`.`managers` (`id`, `meeting_schedule`, `team_id`) VALUES ('234', 'T, F', '234');

INSERT INTO `nba_team`.`coaches` (`id`, `team_id`, `manager_id`, `coach_name`, `strategy`, `practice_schedule`, `coach_payment`, `coach_bank`) VALUES ('1', '123', '123', 'Brad Stevens', 'offensive', 'Mon, Wed, Fri', '10000000', 'Bank of America');
INSERT INTO `nba_team`.`coaches` (`id`, `team_id`, `manager_id`, `coach_name`, `strategy`, `practice_schedule`, `coach_payment`, `coach_bank`) VALUES ('2', '234', '234', 'Frank Vogel', 'defensive', 'Tues, Thurs, Sat', '5000000', 'TD Bank');

INSERT INTO `nba_team`.`addresses` (`id`, `user_id`, `street`, `apartment`, `city`, `zip`, `primary_p`) VALUES ('1', '123', '12 Newbury St.', 'B', 'Boston', '12345', '1');
INSERT INTO `nba_team`.`addresses` (`id`, `user_id`, `street`, `apartment`, `city`, `zip`, `primary_p`) VALUES ('2', '234', '13 Boston St.', 'A', 'New York', '23456', '0');
INSERT INTO `nba_team`.`addresses` (`id`, `user_id`, `street`, `apartment`, `city`, `zip`, `primary_p`) VALUES ('3', '234', '14 Apple Ave.', 'D', 'Las Vegas', '34567', '1');
INSERT INTO `nba_team`.`addresses` (`id`, `user_id`, `street`, `apartment`, `city`, `zip`, `primary_p`) VALUES ('4', '345', '1 Norway St.', 'C', 'Albany', '45678', '1');
INSERT INTO `nba_team`.`addresses` (`id`, `user_id`, `street`, `apartment`, `city`, `zip`, `primary_p`) VALUES ('5', '456', '3 California Ave.', 'F', 'Sacramento', '09876', '1');

INSERT INTO `nba_team`.`phones` (`id`, `user_id`, `phone`, `primary_p`) VALUES ('1', '123', '1234567890', '1');
INSERT INTO `nba_team`.`phones` (`id`, `user_id`, `phone`, `primary_p`) VALUES ('2', '123', '2345678901', '0');
INSERT INTO `nba_team`.`phones` (`id`, `user_id`, `phone`, `primary_p`) VALUES ('3', '234', '3456789012', '1');
INSERT INTO `nba_team`.`phones` (`id`, `user_id`, `phone`, `primary_p`) VALUES ('4', '345', '4567890123', '1');
INSERT INTO `nba_team`.`phones` (`id`, `user_id`, `phone`, `primary_p`) VALUES ('5', '456', '5678901234', '1');

INSERT INTO `nba_team`.`players` (`id`, `team_id`, `manager_id`, `player_name`, `age`, `height`, `player_payment`, `player_bank`, `statistic`) VALUES ('1', '123', '123', 'Jayson Tatum', '21', '6-10', '20000000', 'Bank of America', '20.0 PPG');
INSERT INTO `nba_team`.`players` (`id`, `team_id`, `manager_id`, `player_name`, `age`, `height`, `player_payment`, `player_bank`, `statistic`) VALUES ('2', '234', '234', 'Lebron James', '35', '6-8', '40000000', 'TD Bank', '30.0 PPG');

INSERT INTO `nba_team`.`tickets` (`id`, `game_id`, `fan_id`, `price`, `seat`, `date`, `time`) VALUES ('1', '1', '345', '1000', '23D', '12/11/2019', '7 PM');
INSERT INTO `nba_team`.`tickets` (`id`, `game_id`, `fan_id`, `price`, `seat`, `date`, `time`) VALUES ('2', '1', '456', '2000', '47F', '10/27/2019', '8 PM');
INSERT INTO `nba_team`.`tickets` (`id`, `game_id`, `fan_id`, `price`, `seat`, `date`, `time`) VALUES ('3', '1', '456', '2500', '47G', '10/27/2019', '8 PM');
INSERT INTO `nba_team`.`tickets` (`id`, `game_id`, `fan_id`, `price`, `seat`, `date`, `time`) VALUES ('4', '2', '345', '500', '21A', '1/5/2020', '6 PM');
