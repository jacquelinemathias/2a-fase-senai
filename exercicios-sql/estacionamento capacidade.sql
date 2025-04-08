CREATE DATABASE atv_extra;

USE atv_extra;

CREATE TABLE estacionamento(
id_estacionamento INT NOT NULL AUTO_INCREMENT,
nome_estacionamento VARCHAR(45),
capacidade INT,
subsolo ENUM ('SIM','NÃO'),
especial ENUM ('SIM','NÃO'),
PRIMARY KEY (id_estacionamento)
);

CREATE TABLE cliente(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR(45),
PRIMARY KEY (id_cliente)
);

CREATE TABLE mensalidade(
id_mensalidade INT NOT NULL AUTO_INCREMENT,
valor_mensalidade INT(6.2),
status_pagamento ENUM ('PAGO', 'ABERTO'),
PRIMARY KEY (id_mensalidade)
);

ALTER TABLE mensalidade
ADD COLUMN cliente_id INT,
ADD FOREIGN KEY (cliente_id)
REFERENCES cliente (id_cliente);

INSERT INTO cliente (nome_cliente)
VALUES
('Jose'),
('Carlos'),
('Marcos');

INSERT INTO mensalidade (cliente_id, valor_mensalidade, status_pagamento)
VALUES
(1, 650.00, 'PAGO'),
(2, 670.00, 'PAGO'),
(3, 690.00, 'PAGO'),
(1, 720.00, 'ABERTO'),
(2, 740.00, 'ABERTO'),
(3, 760.00, 'ABERTO'),
(1, 800.00, 'ABERTO');

INSERT INTO estacionamento
(nome_estacionamento, capacidade, subsolo, especial)
VALUES
('A', 20, 'NÃO', 'NÃO'),
('B', 35, 'SIM', 'SIM'),
('C', 40, 'SIM', 'SIM'),
('D', 50, 'SIM', 'SIM'),
('E', 15, 'SIM', 'NÃO'),
('F', 85, 'SIM', 'SIM'),
('G', 100, 'NÃO', 'NÃO');

SELECT nome_estacionamento, capacidade
FROM estacionamento
WHERE capacidade BETWEEN 20 AND 40
AND subsolo = 'SIM'
AND especial = 'SIM'
ORDER BY capacidade ASC;

SELECT * FROM estacionamento
WHERE capacidade > 50
ORDER BY capacidade DESC;

SELECT * FROM estacionamento
WHERE capacidade > 80
OR nome_estacionamento = 'B';

SELECT *FROM estacionamento
WHERE subsolo = 'SIM'
AND especial = 'SIM';

SELECT count(mensalidade.status_pagamento) FROM mensalidade;

SELECT cliente.nome_cliente, count(mensalidade.status_pagamento) FROM mensalidade
JOIN cliente
ON cliente.id_cliente = mensalidade.cliente_id
GROUP BY cliente.nome_cliente;

SELECT cliente.nome_cliente, count(mensalidade.valor_mensalidade) FROM mensalidade
JOIN cliente
ON cliente.id_cliente = mensalidade.cliente_id
GROUP BY cliente.nome_cliente;