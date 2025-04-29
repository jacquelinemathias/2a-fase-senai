CREATE DATABASE estoque;

USE estoque;

CREATE TABLE produto(
id_produto INT NOT NULL AUTO_INCREMENT,
nome_produto VARCHAR(45),
preco_produto DECIMAL(6,2),
estoque_produto INT,
PRIMARY KEY (id_produto)
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
data_horario DATETIME,
quantidade INT,
PRIMARY KEY (id_pedido)
);

ALTER TABLE pedido
ADD COLUMN produto_id INT,
ADD FOREIGN KEY (produto_id)
REFERENCES produto (id_produto);

INSERT INTO produto (nome_produto, preco_produto, estoque_produto)
VALUES
('Caderno', '19.00', '200'),
('Caneta', '5.00', '500'),
('Lápis', '3.00', '1000');

INSERT INTO pedido
(data_horario, quantidade, produto_id)
VALUES
('2023-10-16 19:35:00', 9, 1);

DELIMITER $$
CREATE TRIGGER atualizacao_estoque
AFTER INSERT ON pedido
FOR EACH ROW
BEGIN
UPDATE produto
SET estoque_produto = estoque_produto - new.quantidade
WHERE produto.id_produto = new.produto_id;
END;
$$

SELECT * FROM produto