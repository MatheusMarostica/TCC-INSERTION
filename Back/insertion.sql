create database db_insertion;
use db_insertion;
drop database db_insertion;

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
texto varchar(255) not null,
user_id int not null,
foreign key (user_id) references user_table(id)
);

select*from feed;
drop table feed;

/*

Rodando na nuvem

create database db_insertion;
use bdm6yu1k9lz9nbmnwhwo;
drop database db_insertion;

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
texto varchar(255) not null,
user_id int not null,
foreign key (user_id) references user_table(id)
);

select*from feed;
drop table feed;

*/