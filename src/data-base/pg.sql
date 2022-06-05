-- Borrando Database (en caso de que exista)
-- DROP DATABASE IF EXISTS rapidisimo;
-- Borrando secuencias (en caso de que existan)
DROP SEQUENCE IF EXISTS id_users_seq CASCADE;

DROP SEQUENCE IF EXISTS id_company_seq CASCADE;

DROP SEQUENCE IF EXISTS id_order_seq CASCADE;

DROP SEQUENCE IF EXISTS id_assigned_order_seq CASCADE;

-- Borrando tipos (en caso de que existan)
DROP TYPE IF EXISTS type_estado_pedido CASCADE;

DROP TYPE IF EXISTS type_vehicle CASCADE;

DROP TYPE IF EXISTS type_rol CASCADE;

-- Borrando Tablas (en caso de que existan)
DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS company CASCADE;

DROP TABLE IF EXISTS orders CASCADE;

DROP TABLE IF EXISTS assigned_order CASCADE;

-- Creando Database
-- CREATE DATABASE rapidisimo WITH ENCODING = 'UTF8';
-- Seleccionando Database
-- \c rapidisimo;
-- Creando secuencias
CREATE SEQUENCE id_users_seq START WITH 1 INCREMENT BY 1 MAXVALUE 9999 MINVALUE 1;

CREATE SEQUENCE id_company_seq START WITH 10000 INCREMENT BY 1 MAXVALUE 99999 MINVALUE 10000;

CREATE SEQUENCE id_order_seq START WITH 100000 INCREMENT BY 1 MAXVALUE 999999 MINVALUE 100000;

CREATE SEQUENCE id_assigned_order_seq START WITH 1000000 INCREMENT BY 1 MAXVALUE 9999999 MINVALUE 1000000;

-- Creando tipos
CREATE TYPE type_order_status AS ENUM ('En espera', 'En reparto', 'Entregadas');

CREATE TYPE type_delivery_man_status AS ENUM ('Disponible', 'Ocupado', 'Fuera de servicio');

CREATE TYPE type_rol AS ENUM ('Admin', 'Delivery man');

CREATE TYPE type_vehicle AS ENUM ('Carro', 'A pie', 'Bicicleta');

-- Creando Tablas
CREATE TABLE users (
    id_user INT DEFAULT NEXTVAL('id_users_seq'),
    email VARCHAR(50) NOT NULL,
    document INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    phone VARCHAR(13) NOT NULL,
    delivery_man_status type_delivery_man_status,
    vehicle type_vehicle,
    rol type_rol NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY (id_user)
);

CREATE TABLE company (
    id_company INT DEFAULT NEXTVAL('id_company_seq'),
    email_company VARCHAR(50) NOT NULL,
    name_company VARCHAR(50) NOT NULL,
    phone_company VARCHAR(13) NOT NULL,
    city VARCHAR(50) NOT NULL,
    neighborhood VARCHAR(50) NOT NULL,
    streat VARCHAR(50) NOT NULL,
    career VARCHAR(50) NOT NULL,
    close_time_company TIME NOT NULL,
    CONSTRAINT pk_company PRIMARY KEY (id_company)
);

CREATE TABLE orders (
    id_order INT DEFAULT NEXTVAL('id_order_seq'),
    id_company INT NOT NULL,
    client_email VARCHAR(50) NOT NULL,
    client_name VARCHAR(50) NOT NULL,
    client_phone VARCHAR(13) NOT NULL,
    client_address VARCHAR(50) NOT NULL,
    date_delivery DATE NOT NULL,
    estimated_time TIME NOT NULL,
    order_cost INT NOT NULL,
    image_order VARCHAR NOT NULL,
    status_order type_order_status NOT NULL,
    rating INT NOT NULL,
    CONSTRAINT pk_orders PRIMARY KEY (id_order),
    CONSTRAINT fk_orders_Company FOREIGN KEY (id_company) REFERENCES company(id_company)
);

CREATE TABLE assigned_order (
    id_assigned INT DEFAULT NEXTVAL('id_assigned_order_seq'),
    id_delivery_man INT NOT NULL,
    id_order INT NOT NULL,
    CONSTRAINT pk_assigned_order PRIMARY KEY (id_assigned),
    CONSTRAINT fk_assigned_order_User FOREIGN KEY (id_delivery_man) REFERENCES users(id_user),
    CONSTRAINT fk_assigned_order_Order FOREIGN KEY (id_order) REFERENCES orders(id_order)
);

INSERT INTO
    users (email, document, name, lastname, phone, rol)
VALUES
    (
        'david.giraldo@gmail.com',
        438987987,
        'David',
        'Giraldo',
        '3237486764',
        'Admin'
    ),
    (
        'estefania123@gmail.com',
        '1020638950',
        'Estefanía',
        'Salazar',
        '3174884944',
        'Admin'
    );

INSERT INTO
    users (
        email,
        document,
        name,
        lastname,
        phone,
        vehicle,
        rol
    )
VALUES
    (
        'bsgv2005@gmail.com',
        1020106835,
        'Brayan',
        'Gamboa',
        '3136705458',
        'Disponible',
        'Carro',
        'Delivery man'
    );

SELECT
    *
FROM
    users;

INSERT INTO
    company (
        email_company,
        name_company,
        phone_company,
        city,
        neighborhood,
        streat,
        career,
        close_time_company
    )
VALUES
    (
        'models@gmail.com',
        'Models Company S.A.S',
        '3174889744',
        'Bogotá',
        'Ciudad Bolívar',
        'Calle 1',
        'Carrera 3',
        '18:00:00'
    ),
    (
        'tauro@gmail.com',
        'Tauro Gym',
        '3456789123',
        'Cali',
        'Santa Rita',
        'Calle 102',
        'Carrera 129',
        '21:00:00'
    );

SELECT
    *
FROM
    company;

INSERT INTO orders (
    id_company,
    client_email,
    client_name,
    client_phone,
    client_address,
    date_delivery,
    estimated_time,
    order_cost,
    image_order,
    status_order,
    rating
)
VALUES
    (
        10000,
        'raul@gmail.com',
        'Raul Gómez',
        '3136705458',
        'Cra. 1 # 1 - 1 Medellín - Colombia',
        '2020-05-01',
        '10:00:00',
        4000,
        'http.cat/200',
        'En espera',
        5
    ),(
        10001,
        'isa123@gmail.com',
        'Isabella Taborda',
        '3535621234',
        'Cra. 5 # 34 - 4 Medellín - Colombia',
        '2020-05-05',
        '12:00:00',
        6000,
        'http.cat/201',
        'En reparto',
        4
    );

SELECT * FROM orders;	

INSERT INTO assigned_order (
    id_delivery_man,
    id_order
) VALUES(
    3,
    100001 
),(
    3,
    100000
);

SELECT * FROM assigned_order;
