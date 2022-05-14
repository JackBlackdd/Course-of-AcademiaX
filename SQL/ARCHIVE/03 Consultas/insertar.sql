INSERT INTO prueba DEFAULT VALUES;
INSERT INTO prueba ( numero, texto ) SELECT id, usuario FROM usuarios;