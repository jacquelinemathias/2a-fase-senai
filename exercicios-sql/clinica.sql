CREATE DATABASE clinica;

USE clinica;

CREATE TABLE clinica(
id_clinica INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
cnpj BIGINT(14),
PRIMARY KEY (id_clinica)
);

CREATE TABLE quarto(
id_quarto INT NOT NULL AUTO_INCREMENT,
andar INT,
numero INT,
PRIMARY KEY (id_quarto)
);

CREATE TABLE paciente(
id_paciente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
rg INT,
data_nascimento DATE,
PRIMARY KEY (id_paciente)
);

CREATE TABLE medico(
id_medico INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
crm INT,
salario INT,
especialidade VARCHAR(45),
PRIMARY KEY (id_medico)
);

ALTER TABLE quarto
ADD COLUMN clinica_id INT,
ADD FOREIGN KEY (clinica_id)
REFERENCES clinica (id_clinica);

ALTER TABLE medico
ADD COLUMN clinica_id INT,
ADD FOREIGN KEY (clinica_id)
REFERENCES clinica (id_clinica);

ALTER TABLE paciente
ADD COLUMN quarto_id INT,
ADD FOREIGN KEY (quarto_id)
REFERENCES quarto (id_quarto);

ALTER TABLE paciente
ADD COLUMN medico_id INT,
ADD FOREIGN KEY (medico_id)
REFERENCES medico (id_medico);