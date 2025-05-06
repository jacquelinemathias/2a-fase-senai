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

DELIMITER $$
CREATE TRIGGER trigger_valores
BEFORE INSERT ON pedido
FOR EACH ROW
BEGIN
    SET NEW.valor_total = NEW.preco * NEW.quantidade;
    SET NEW.valor_total_com_desconto = NEW.valor_total * 0.9;
END;
$$
DELIMITER ;

INSERT INTO pedido
(data_horario, tipo_entrega, preco, quantidade)
VALUES
('2025-02-01 11:30:00', 'Urgente', '10.00', 6),
('2025-03-02 22:10:00', 'Normal', '150.00', 8),
('2025-03-03 21:48:00', 'Urgente', '130.00', 15),
('2025-04-04 08:27:00', 'Normal', '80.00', 3),
('2025-05-04 17:20:00', 'Urgente', '90.00', 4),
('2025-05-01 11:45:00', 'Normal', '15', 5);

SELECT * FROM pedido