CREATE DATABASE avaliacao_pratica;

USE avaliacao_pratica;

CREATE TABLE aluno(
id_aluno INT NOT NULL AUTO_INCREMENT,
nome_aluno VARCHAR(45),
email_aluno VARCHAR(45),
cpf_aluno BIGINT(11),
PRIMARY KEY (id_aluno)
);

CREATE TABLE disciplina(
id_disciplina INT NOT NULL AUTO_INCREMENT,
nome_disciplina VARCHAR(45),
carga_horaria INT,
PRIMARY KEY (id_disciplina)
);

CREATE TABLE turma(
id_turma INT NOT NULL AUTO_INCREMENT,
turno ENUM ('Matutino', 'Vespertino', 'Noturno'),
PRIMARY KEY (id_turma)
);

ALTER TABLE turma
ADD COLUMN disciplina_id INT,
ADD FOREIGN KEY (disciplina_id)
REFERENCES disciplina (id_disciplina);

CREATE TABLE inscricao(
id_inscricao INT NOT NULL AUTO_INCREMENT,
data_inscricao DATE,
PRIMARY KEY (id_inscricao)
);

ALTER TABLE inscricao
ADD COLUMN turma_id INT,
ADD FOREIGN KEY (turma_id)
REFERENCES turma (id_turma);

ALTER TABLE inscricao
ADD COLUMN aluno_id INT,
ADD FOREIGN KEY (aluno_id)
REFERENCES aluno (id_aluno);

CREATE TABLE mensalidade(
id_mensalidade INT NOT NULL AUTO_INCREMENT,
data_vencimento DATE,
valor_mensalidade DECIMAL(6.2),
status_pagamento ENUM('PAGO', 'EM DÉBITO'),
PRIMARY KEY (id_mensalidade)
);

ALTER TABLE mensalidade
ADD COLUMN inscricao_id INT,
ADD FOREIGN KEY (inscricao_id)
REFERENCES inscricao (id_inscricao);

INSERT INTO aluno (nome_aluno, email_aluno, cpf_aluno)
VALUES
('Jacqueline', 'jacqueline.mathias38@gmail.com', '06502364918'),
('Carlos', 'carlos@gmail.com', '05402588515'),
('Luiza', 'luiza_c@hotmail.com', '04587485955'),
('Mariana', 'marianalcshrg@yahoo.com.br', '52411599652'),
('Pedro', 'pedrogonzaguinha@gmail.com', '45216592955');

INSERT INTO turma (turno, disciplina_id)
VALUES
('Matutino', 1),
('Noturno', 2),
('Noturno', 3),
('Vespertino', 4),
('Matutino', 5);

INSERT INTO disciplina (nome_disciplina, carga_horaria)
VALUES
('Desenvolvimento de Sistemas', 36),
('Banco de Dados', 36),
('Fundamentos de Biblioteconomia', 48),
('Programação de Aplicativos', 72),
('Representação Descritiva I', 48);

INSERT INTO inscricao (data_inscricao, aluno_id, turma_id)
VALUES
('2024-01-01', 4, 1),
('2024-01-01', 3, 2),
('2024-01-01', 2, 3),
('2024-06-01', 4, 1),
('2024-06-01', 3, 2),
('2024-06-01', 2, 3);

INSERT INTO inscricao (data_inscricao)
VALUES
('24-06-01');

INSERT INTO mensalidade (data_vencimento, valor_mensalidade, status_pagamento, inscricao_id)
VALUES
('2024-01-05', 600.00, 'PAGO', 1),
('2024-01-05', 600.00, 'PAGO', 2),
('2024-01-05', 600.00, 'PAGO', 3),
('2024-06-05', 700.00, 'EM DÉBITO', 4),
('2024-06-05', 700.00, 'EM DÉBITO', 5),
('2024-06-05', 700.00, 'EM DÉBITO', 6);

SELECT aluno.nome_aluno, mensalidade.valor_mensalidade FROM mensalidade
JOIN aluno
ON aluno.id_aluno = mensalidade.inscricao_id
WHERE mensalidade.status_pagamento = 'EM DÉBITO';

SELECT inscricao.id_inscricao, mensalidade.data_vencimento, mensalidade.valor_mensalidade
FROM inscricao
JOIN mensalidade
ON mensalidade.inscricao_id = inscricao.id_inscricao;

SELECT * FROM inscricao
LEFT JOIN aluno
ON inscricao.aluno_id = aluno.id_aluno;

SELECT * FROM inscricao
RIGHT JOIN turma
ON inscricao.turma_id = turma.id_turma;

SELECT * FROM inscricao
JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno
JOIN turma
ON inscricao.turma_id = turma.id_turma;

SELECT * FROM inscricao
LEFT JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno
UNION
SELECT * FROM inscricao
RIGHT JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno;

SELECT inscricao.id_inscricao AS id_inscricao, aluno.nome_aluno AS 'nome do aluno', aluno.email_aluno AS 'email do aluno'
FROM inscricao
JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno;

CREATE VIEW vw_inscricao_aluno AS
SELECT inscricao.id_inscricao AS id_inscricao, aluno.nome_aluno AS 'nome do aluno', aluno.email_aluno AS 'email do aluno' FROM inscricao
JOIN aluno
ON inscricao.aluno_id  = aluno.id_aluno;