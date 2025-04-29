CREATE DATABASE combustivel;
USE combustivel;

CREATE TABLE gasoliny(
id_gasoliny INT NOT NULL AUTO_INCREMENT,
preco_gasoliny DECIMAL(8,2) DEFAULT '6.5',
estoque_gasoliny INT,
PRIMARY KEY (id_gasoliny)
);

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
data_horario DATETIME,
quantidade DECIMAL(8,2),
PRIMARY KEY (id_pedido)
);

ALTER TABLE pedido
ADD COLUMN gasoliny_id INT,
ADD FOREIGN KEY (gasoliny_id)
REFERENCES gasoliny (id_gasoliny);

INSERT INTO gasoliny (estoque_gasoliny)
VALUES
('10000.00');

INSERT INTO pedido
(data_horario, quantidade, gasoliny_id)
VALUES
('2023-10-16 19:35:00', 55.3, 1);

DELIMITER $$
CREATE TRIGGER atualizacao_gasoliny
AFTER INSERT ON pedido
FOR EACH ROW
BEGIN
UPDATE gasoliny
SET estoque_gasoliny = estoque_gasoliny - new.quantidade
WHERE gasoliny.id_gasoliny = new.gasoliny_id;
END;
$$

SELECT * FROM gasoliny