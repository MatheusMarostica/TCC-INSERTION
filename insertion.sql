create database db_insertion;
use db_insertion;
create table tasks(
	id INT auto_increment primary key,
    email VARCHAR(255) unique not null,
    senha VARCHAR(255) not null
);

drop table tasks;

create table user_table(
	id INT auto_increment primary key,
    email VARCHAR(255) unique not null,
    senha VARCHAR(255) not null
);

create table feed (
id int auto_increment primary key,
imagem varchar(10),
texto varchar(255) not null
);

select*from feed;