create database db_insertion;
use db_insertion;
drop database db_insertion;
create table tasks(
	id INT auto_increment primary key,
    email VARCHAR(255) unique not null,
    senha VARCHAR(255) not null
);

select*from tasks;
drop table tasks;

create table user_table(
	id INT auto_increment primary key,
    nome VARCHAR(35),
    email VARCHAR(255) unique not null,
    senha VARCHAR(255) not null
);

select*from user_table;
drop table user_table;

create table feed (
id int auto_increment primary key,
texto varchar(255) not null
);

select*from feed;
drop table feed;