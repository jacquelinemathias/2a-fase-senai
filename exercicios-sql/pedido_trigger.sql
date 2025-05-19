CREATE DATABASE desconto;
USE desconto;

CREATE TABLE pedido(
id_pedido INT NOT NULL AUTO_INCREMENT,
data_horario DATETIME,
tipo_entrega ENUM('Normal', 'Urgente'),
preco DECIMAL(8,2),
quantidade INT,
valor_total DECIMAL(8,2),
valor_total_com_desconto DECIMAL(8,2),
PRIMARY KEY (id_pedido)
);

DROP DATABASE desconto;

INSERT INTO pedido
(data_horario, tipo_entrega, preco, quantidade)
VALUES
('2025-02-03 11:27:00', 'Normal', '85.00', 3),
('2025-02-16 15:44:00', 'Normal', '12.00', 5),
('2025-03-09 22:02:00', 'Urgente', '29.90', 5),
('2025-04-01 08:12:00', 'Urgente', '85.00', 2),
('2025-04-29 10:14:00', 'Normal', '4.50', 30),
('2025-05-05 19:56:00', 'Urgente', '170.00', 1);