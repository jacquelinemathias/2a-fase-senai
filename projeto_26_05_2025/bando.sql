CREATE DATABASE cadastro_estudantes;

USE cadastro_estudantes;

CREATE TABLE dados_estudante(
id_estudante INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
matricula VARCHAR(45),
PRIMARY KEY(id_estudante)
);

INSERT INTO dados_estudante (nome, matricula)
VALUES
('Jacqueline Mathias', '001'),
('João da Silva', '002');