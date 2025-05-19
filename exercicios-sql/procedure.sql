CREATE DATABASE procedure_escola;

USE procedure_escola;

CREATE TABLE estudante(
id_estudante INT NOT NULL AUTO_INCREMENT,
nome_estudante VARCHAR(45),
matricula_estudante INT,
curso VARCHAR(45),
cidade VARCHAR(45),
PRIMARY KEY (id_estudante)
);

INSERT INTO estudante (nome_estudante, matricula_estudante, curso, cidade)
VALUES
('Jacqueline Mathias', '001', 'Desenvolvimento de Sistemas', 'Florianópolis'),
('João da Silva', '002', 'Edificações', 'Lages'),
('Maria Oliveira', '003', 'Engenharia Sanitária', 'Curitibanos'),
('Eduardo Souza', '004', 'Oceanografia', 'Florianópolis');

DELIMITER //

CREATE PROCEDURE atualizar_estudante(
    IN p_id_estudante INT,
    IN p_nome_estudante VARCHAR(45),
    IN p_matricula_estudante INT,
    IN p_curso VARCHAR(45),
    IN p_cidade VARCHAR(45)
)
BEGIN
    UPDATE estudante
    SET 
        nome_estudante = p_nome_estudante,
        matricula_estudante = p_matricula_estudante,
        curso = p_curso,
        cidade = p_cidade
    WHERE id_estudante = p_id_estudante;

    SELECT * FROM estudante WHERE id_estudante = p_id_estudante;
END //

DELIMITER ;

CALL atualizar_estudante(2, 'João da Silva', 102, 'Engenharia Civil', 'Joinville');

DELIMITER //

CREATE PROCEDURE deletar_estudante(
    IN p_id_estudante INT
)
BEGIN
    DELETE FROM estudante
    WHERE id_estudante = p_id_estudante;

    SELECT * FROM estudante;
END //

DELIMITER ;

CALL deletar_estudante(3);

DELIMITER //

CREATE PROCEDURE quantidade_estudantes_por_curso()
BEGIN
    SELECT 
        curso,
        COUNT(*) AS total_estudantes
    FROM 
        estudante
    GROUP BY 
        curso;
END //

DELIMITER ;

CALL quantidade_estudantes_por_curso();