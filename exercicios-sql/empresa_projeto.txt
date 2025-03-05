CREATE DATABASE empresa;

USE empresa;

CREATE TABLE empresa(
id_empresa INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(100),
codigo INT,
rua VARCHAR(45),
bairro VARCHAR(45),
cidade VARCHAR(45),
estado VARCHAR(45),
numero INT,
PRIMARY KEY (id_empresa)
);

CREATE TABLE projeto(
id_projeto INT NOT NULL AUTO_INCREMENT,
dt_inicio DATE,
dt_fim DATE,
valor INT,
PRIMARY KEY (id_projeto)
);

CREATE TABLE departamento(
id_departamento INT NOT NULL AUTO_INCREMENT,
sigla VARCHAR(10),
centro_custo INT,
PRIMARY KEY (id_departamento)
);

CREATE TABLE consultor(
id_consultor INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
especializacao VARCHAR(45),
rg INT,
funcao VARCHAR(45),
PRIMARY KEY (id_consultor)
);

CREATE TABLE unidade(
id_unidade INT NOT NULL AUTO_INCREMENT,
gerente VARCHAR(45),
supervisor VARCHAR(45),
PRIMARY KEY (id_unidade)
);

ALTER TABLE departamento
ADD COLUMN unidade_id INT,
ADD FOREIGN KEY (unidade_id)
REFERENCES unidade (id_unidade);

ALTER TABLE projeto
ADD COLUMN empresa_id INT,
ADD FOREIGN KEY (empresa_id)
REFERENCES empresa (id_empresa);

ALTER TABLE projeto
ADD COLUMN departamento_id INT,
ADD FOREIGN KEY (departamento_id)
REFERENCES departamento (id_departamento);

ALTER TABLE projeto
ADD COLUMN consultor_id INT,
ADD FOREIGN KEY (consultor_id)
REFERENCES consultor (id_consultor);