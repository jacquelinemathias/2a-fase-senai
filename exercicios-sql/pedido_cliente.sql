CREATE DATABASE pedido;

USE pedido;

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT,
categoria VARCHAR(45),
PRIMARY KEY (id_categoria)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
rua VARCHAR(100),
cidade VARCHAR(45),
bairro VARCHAR(45),
cep INT,
estado VARCHAR(45),
PRIMARY KEY (id_cliente)
);

CREATE TABLE produto(
id_produto INT NOT NULL AUTO_INCREMENT,
produto VARCHAR(45),
preco DECIMAL(9,2),
quantidade INT,
descricao VARCHAR(100),
foto TEXT(999),
categoria_id INT,
PRIMARY KEY (id_produto),
FOREIGN KEY (categoria_id)
REFERENCES categoria (id_categoria)
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
data_pedido DATE,
status_pedido VARCHAR(45),
secao VARCHAR(45),
cliente_id INT,
PRIMARY KEY (id_pedido),
FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente)
);

CREATE TABLE pedido_item(
id_pedido_item INT NOT NULL AUTO_INCREMENT,
produto VARCHAR(45),
quantidade INT,
valor DECIMAL(9,2),
subtotal DECIMAL(9,2),
produto_id INT,
pedido_id INT,
PRIMARY KEY (id_pedido_item),
FOREIGN KEY (produto_id)
REFERENCES produto (id_produto),
FOREIGN KEY (pedido_id)
REFERENCES pedido (id_pedido)
);

ALTER TABLE cliente
RENAME COLUMN senha TO password_cliente;

ALTER TABLE produto
ADD COLUMN observacao TEXT;

ALTER TABLE cliente
ADD COLUMN renda DECIMAL(9,2);

ALTER TABLE produto
MODIFY COLUMN foto LONGTEXT;

ALTER TABLE cliente
MODIFY COLUMN nome VARCHAR(150);

ALTER TABLE cliente
DROP COLUMN estado;

ALTER TABLE pedido_item
RENAME TO item;

ALTER TABLE pedido
ADD COLUMN observacao TEXT;