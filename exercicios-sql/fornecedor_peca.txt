CREATE DATABASE fornecedor_peca;

USE fornecedor_peca;

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT,
descricao VARCHAR(100),
PRIMARY KEY (id_categoria)
);

CREATE TABLE peca(
id_peca INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
peso INT,
ano_fabricacao YEAR,
PRIMARY KEY (id_peca)
);

CREATE TABLE fornecedor(
id_fornecedor INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
nacionalidade VARCHAR(45),
PRIMARY KEY (id_fornecedor)
);

ALTER TABLE peca
ADD COLUMN categoria_id INT,
ADD FOREIGN KEY (categoria_id)
REFERENCES categoria (id_categoria);

ALTER TABLE peca
ADD COLUMN fornecedor_id INT,
ADD FOREIGN KEY (fornecedor_id)
REFERENCES fornecedor (id_fornecedor);