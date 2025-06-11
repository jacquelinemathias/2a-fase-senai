SELECT * FROM mysql.user;

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'estagiario';

GRANT INSERT ON atv_extra.* TO 'estagiario'@'localhost';

GRANT SELECT, INSERT, DELETE ON biblioteca.* TO 'estagiario'@'localhost';

REVOKE SELECT, INSERT, DELETE ON biblioteca.* FROM 'estagiario'@'localhost';

GRANT SELECT ON biblioteca.autor TO 'estagiario'@'localhost';

SHOW GRANTS FOR 'estagiario'@'localhost';
 
REVOKE INSERT ON atv_extra.* FROM 'estagiario'@'localhost';

DROP USER 'jaserine'@'localhost'