-- Borrando Database (en caso de que exista)
-- DROP DATABASE IF EXISTS rapidisimo;
-- Borrando secuencias (en caso de que existan)
DROP SEQUENCE IF EXISTS id_vehiculo_seq CASCADE;

DROP SEQUENCE IF EXISTS id_envio_seq CASCADE;

DROP SEQUENCE IF EXISTS codigo_pedido_seq CASCADE;

DROP SEQUENCE IF EXISTS codigo_comercio_seq CASCADE;

-- Borrando tipos (en caso de que existan)
DROP TYPE IF EXISTS type_estado_pedido CASCADE;

DROP TYPE IF EXISTS type_vehiculo CASCADE;

DROP TYPE IF EXISTS type_roles CASCADE;

DROP TYPE IF EXISTS type_estado_repartidor CASCADE;

-- Borrando Tablas (en caso de que existan)
DROP TABLE IF EXISTS repartidor_vehiculo CASCADE;

DROP TABLE IF EXISTS usuarios CASCADE;

DROP TABLE IF EXISTS rol_repar CASCADE;

DROP TABLE IF EXISTS pedidos_asignado CASCADE;

DROP TABLE IF EXISTS rol_admin CASCADE;

DROP TABLE IF EXISTS pedidos CASCADE;

DROP TABLE IF EXISTS rol_comercio CASCADE;

-- Creando Database
-- CREATE DATABASE rapidisimo WITH ENCODING = 'UTF8';
-- Seleccionando Database
-- \c rapidisimo;
-- Creando secuencias
CREATE SEQUENCE id_vehiculo_seq START WITH 100 INCREMENT BY 1 MAXVALUE 999 MINVALUE 100;

CREATE SEQUENCE id_envio_seq START WITH 1000 INCREMENT BY 1 MAXVALUE 9999 MINVALUE 1000;

CREATE SEQUENCE codigo_pedido_seq START WITH 10000 INCREMENT BY 1 MAXVALUE 99999 MINVALUE 10000;

CREATE SEQUENCE codigo_comercio_seq START WITH 100000 INCREMENT BY 1 MAXVALUE 999999 MINVALUE 100000;

-- Creando tipos
CREATE TYPE type_estado_pedido AS ENUM ('Pendiente', 'Enviado', 'Entregado');

CREATE TYPE type_estado_repartidor AS ENUM ('Disponible', 'Ocupado');

CREATE TYPE type_roles AS ENUM ('admin', 'comercio', 'repartidor');

CREATE TYPE type_vehiculo AS ENUM ('Moto', 'Carro', 'Camión', 'Bicicleta');

-- Creando Tablas
CREATE TABLE repartidor_vehiculo (
    id_vehiculo id_vehiculo_seq,
    cedula_repartidor VARCHAR(10) NOT NULL,
    tipo_vehiculo type_vehiculo NOT NULL,
    color VARCHAR(10) NOT NULL,
    marca VARCHAR(10) NOT NULL,
    modelo VARCHAR(10) NOT NULL,
    CONSTRAINT pk_repartidor_vehiculo PRIMARY KEY (id_vehiculo)
);

CREATE TABLE rol_repar (
    cedula VARCHAR(10),
    email_usuario VARCHAR(350) NOT NULL,
    name VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    date DATE NOT NULL,
    CONSTRAINT pk_rol_repar PRIMARY KEY (cedula)
);

CREATE TABLE usuarios(
    email VARCHAR(350),
    rol type_roles,
    CONSTRAINT pk_usuarios PRIMARY KEY (email)
);

CREATE TABLE pedidos_asignado(
    id_envio id_envio_seq,
    cedula_admin VARCHAR(10) NOT NULL,
    cedula_repartidor VARCHAR(10) NOT NULL,
    codigo_ruta_pedido codigo_pedido_seq NOT NULL,
    CONSTRAINT pk_pedidos_asignados PRIMARY KEY (id_envio)
);

CREATE TABLE rol_admin (
    cedula VARCHAR(10),
    email_usuario VARCHAR(350) NOT NULL,
    name VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    estado_repartidor type_estado_repartidor NOT NULL,
    date DATE NOT NULL,
    CONSTRAINT pk_rol_admin PRIMARY KEY (cedula)
);

CREATE TABLE rol_comercio (
    codigo_comercio codigo_comercio_seq,
    email_comercio VARCHAR(350) NOT NULL,
    name_company VARCHAR(30) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    municipio VARCHAR(15) NOT NULL,
    barrio VARCHAR(10) NOT NULL,
    calle VARCHAR(9) NOT NULL,
    carrera VARCHAR(7) NOT NULL,
    rango_hora_laboral VARCHAR(10) NOT NULL,
    CONSTRAINT pk_rol_comercio PRIMARY KEY (codigo_comercio)
);

CREATE TABLE pedidos(
    codigo_pedido codigo_pedido_seq,
    id_codigo_comercio  codigo_comercio_seq NOT NULL,
    email_user VARCHAR(350) NOT NULL,
    user_name VARCHAR(25) NOT NULL,
    user_phone VARCHAR(10) NOT NULL,
    address_user VARCHAR(20) NOT NULL,
    fecha_entrega DATE NOT NULL,
    hora_estimada VARCHAR(10) NOT NULL,
    costo_pedido VARCHAR(6) NOT NULL,
    estado type_estado_pedido NOT NULL,
    calificacion VARCHAR(5) NOT NULL,
    imagen VARCHAR NOT NULL,
    CONSTRAINT pk_pedidos PRIMARY KEY (codigo_pedido)
);

-- Creando llaves foraneas
ALTER TABLE
    repartidor_vehiculo
ADD
    CONSTRAINT fk_repartidor_vehiculo_rol_repartidor FOREIGN KEY (cedula_repartidor) REFERENCES rol_repar(cedula);

ALTER TABLE
    rol_repar
ADD
    CONSTRAINT fk_rol_repartidor_usuarios FOREIGN KEY (email_usuario) REFERENCES usuarios(email);

ALTER TABLE
    pedidos_asignado
ADD
    CONSTRAINT fk_pedidos_asignados_rol_repar FOREIGN KEY (cedula_repartidor) REFERENCES rol_repar(cedula);

ALTER TABLE
    pedidos_asignado
ADD
    CONSTRAINT fk_pedidos_asignados_rol_admin FOREIGN KEY (cedula_admin) REFERENCES rol_admin(cedula);

ALTER TABLE
    rol_admin
ADD
    CONSTRAINT fk_rol_admin_usuarios FOREIGN KEY (email_usuario) REFERENCES usuarios(email);

ALTER TABLE
    rol_comercio
ADD
    CONSTRAINT fk_rol_comercio_usuarios FOREIGN KEY (email_comercio) REFERENCES usuarios(email);

ALTER TABLE
    pedidos_asignado
ADD
    CONSTRAINT fk_pedidos_asignados_pedidos FOREIGN KEY (codigo_ruta_pedido) REFERENCES pedidos(codigo_pedido);

ALTER TABLE
    pedidos
ADD
    CONSTRAINT fk_pedidos_rol_comercio FOREIGN KEY (id_codigo_comercio) REFERENCES rol_comercio(codigo_comercio);
