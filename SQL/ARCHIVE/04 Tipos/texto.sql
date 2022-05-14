SELECT 'Hello World';
SELECT 'Hello'' World';
SELECT 'Hello' || 'World';
SELECT CONCAT('Hello','World');

SELECT LENGTH('Hello World');
SELECT nombre, LENGTH(nombre) FROM usuarios;

SELECT TRIM('   Hello World  ');
SELECT LTRIM('   Hello World  ');
SELECT RTRIM('   Hello World  ');
SELECT TRIM('---Hello World---', '-');

SELECT UPPER('Hello World');
SELECT LOWER('Hello World');

SELECT SUBSTR('Hello World',2,2);