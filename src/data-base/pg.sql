-- Borrando Database (en caso de que exista)
-- DROP DATABASE IF EXISTS rapidisimo;
-- Borrando secuencias (en caso de que existan)
DROP SEQUENCE IF EXISTS id_users_seq CASCADE;

DROP SEQUENCE IF EXISTS id_company_seq CASCADE;

DROP SEQUENCE IF EXISTS id_order_seq CASCADE;

DROP SEQUENCE IF EXISTS id_assigned_order_seq CASCADE;

-- Borrando tipos (en caso de que existan)
DROP TYPE IF EXISTS type_order_status CASCADE;

DROP TYPE IF EXISTS type_delivery_man_status CASCADE;

DROP TYPE IF EXISTS type_rol CASCADE;

DROP TYPE IF EXISTS type_vehicle CASCADE;

-- Borrando Tablas (en caso de que existan)
DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS company CASCADE;

DROP TABLE IF EXISTS orders CASCADE;

DROP TABLE IF EXISTS assigned_order CASCADE;

-- Borrando vistas (en caso de que existan)
DROP VIEW IF EXISTS orders_view CASCADE;

DROP VIEW IF EXISTS assigned_order_view CASCADE;

DROP VIEW IF EXISTS orders_with_delivery_view CASCADE;

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
    email VARCHAR(50) NOT NULL UNIQUE,
    document INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    phone VARCHAR(13) NOT NULL,
    delivery_man_status type_delivery_man_status DEFAULT 'Disponible',
    vehicle type_vehicle DEFAULT 'Carro',
    rol type_rol DEFAULT 'Delivery man',
    user_image VARCHAR DEFAULT ' ',
    user_latitude DECIMAL,
    user_longitude DECIMAL,
    CONSTRAINT pk_users PRIMARY KEY (id_user)
);

CREATE TABLE company (
    id_company INT DEFAULT NEXTVAL('id_company_seq'),
    email_company VARCHAR(50) NOT NULL,
    name_company VARCHAR(50) NOT NULL,
    phone_company VARCHAR(13) NOT NULL,
    city VARCHAR(50) NOT NULL,
    neighborhood VARCHAR(50) NOT NULL,
    companie_address VARCHAR(100) NOT NULL,
    close_time_company TIME NOT NULL,
    company_latitude DECIMAL,
    company_longitude DECIMAL,
    CONSTRAINT pk_company PRIMARY KEY (id_company)
);

CREATE TABLE orders (
    id_order INT DEFAULT NEXTVAL('id_order_seq'),
    id_company INT NOT NULL,
    client_email VARCHAR(50) NOT NULL,
    client_name VARCHAR(50) NOT NULL,
    client_phone VARCHAR(13) NOT NULL,
    client_address VARCHAR(100) NOT NULL,
    date_delivery DATE NOT NULL,
    estimated_time TIME NOT NULL,
    order_cost INT DEFAULT 100,
    image_order VARCHAR DEFAULT ' ',
    status_order type_order_status DEFAULT 'En espera',
    rating INT DEFAULT 5,
    _id_tracking VARCHAR,
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
-- Insertar datos
INSERT INTO users ( email, document, name, lastname, phone, rol, user_latitude, user_longitude)
    VALUES
        ( 'dev.rapidisimo@gmail.com', 1037637170, 'Rapidisimo', 'Project', '3023186572', 'Admin', 4.744987597625687, -74.08851892571299),
        ( 'estefania123@gmail.com', 1020638950, 'Estefanía', 'Salazar', '3174884944', 'Delivery man', 6.174829594899175, -75.57936472304615),
        ( 'bsgv2005@gmail.com', 1020106835, 'Brayan', 'Gamboa', '3174990944', 'Delivery man', 6.160749508407298, -75.63009066193267),
        ( 'mariocardenas@gmail.com', 420106835, 'Mario', 'Cárdenas', '3136763849', 'Delivery man', 6.246847982353033, -75.59085589674342 ),
        ( 'angiefernandez@gmail.com', 125638325, 'Angie', 'Fernández', '3965187766', 'Delivery man', 6.253161702120751, -75.55884104868137),
        ( 'diazdiana@gmail.com', 1097352455, 'Diana', 'Diaz', '3340971563', 'Delivery man', 6.2602432160160095, -75.57068568415741),
        ( 'marinero@gmail.com', 171654312, 'Jose', 'Marin', '3114877912', 'Delivery man', 6.2503461338564295, -75.61111193918673),
        ( 'uribe.pablo@gmail.com', 85957487, 'Pablo', 'Uribe', '3268095334', 'Delivery man', 6.224920013241472, -75.59609156811203),
        ( 'Mendez.yurani@gmail.com', 1025678332, 'Yurani', 'Mendez', '3024302506', 'Delivery man', 6.170906758631519, -75.58192950434777),
        ( 'david.giraldo@gmail.com', 438987987, 'David', 'Giraldo', '3237486764', 'Delivery man', 6.167237411799037, -75.61377269092478),
        ( 'camilo.gomez@gmail.com', 420106835, 'Camilo', 'Gomez', '3001231300', 'Delivery man', 6.198042070400142, -75.59325915544301);

SELECT * FROM users;

INSERT INTO company ( email_company, name_company, phone_company, city, neighborhood, companie_address, close_time_company, company_latitude, company_longitude )
    VALUES
        ( 'Mattelsamed@gmail.com', 'Mattelsa Medellín Laureles', '018000413757', 'Medellín', 'Laureles', 'Cq. 2 #73 - 74, Medellín, Laureles, Medellín, Antioquia', '20:00:00', 6.244176976988479, -75.59211465248396),
        ( 'Medcascos@hotmail.com', 'Cascos Medellín', '3002289481', 'Medellín', 'La Candelaria', 'Cra. 46 #42-47, Medellín, La Candelaria, Medellín, Antioquia', '19:00:00', 6.242686072147248, -75.5693128389614),
        ( 'Ferreteriaoasisi@gmail.com', 'Depósito y Ferretería el Oasis', '6042994246', 'Medellín', 'Aranjuez', 'Cra. 55 #8947, Medellín, Aranjuez, Medellín, Antioquia', '18:00:00', 6.282635840115101, -75.56627673944475),
        ( 'Corsan@hotmail.com', 'Corsan S.A.', '6044440755', 'Itagüí', 'Guayabal', 'Cra. 42 # 85 B-71, Itagüi, Antioquia', '17:00:00', 6.190461032647529, -75.58356585976009),
        ( 'Tiendadelbulldog@gmail.com', 'La Tienda del Bulldog', '3113547995', 'Medellín', 'Poblado', 'Edificio Platinum Superior, CARRERA 25 # 1A SUR - 155, Oficina 1241, Medellín, Antioquia', '19:00:00', 6.196634544153639, -75.55867599612233),
        ( 'Mipalenquemed@gmail.com', 'Mi Palenque', '3156789123', 'Medellín', 'San Javier', 'Cra. 101a #41-2 a 41-74, Medellín, San Javier, Medellín, Antioquia', '18:00:00', 6.256052694399924, -75.61725004449387);

SELECT * FROM company;

INSERT INTO orders ( id_company, client_email, client_name, client_phone, client_address, date_delivery, estimated_time, _id_tracking )
    VALUES
        ( 10000, 'raulg12@gmail.com', 'Raul Gómez', '3136705458', 'Cl. 85e #32-12 a 32-76, Medellín, Manrique, Medellín, Antioquia', '2020-06-17', '10:00:00', '62aaa7a65b752267d2bde293'),
        ( 10001, 'isa123@gmail.com', 'Isabella Taborda', '3535621234', 'Cra. 5 # 34 - 4 Medellín - Colombia', '2020-06-14', '12:00:00', '62aaa7e85b752267d2bde294'),
        ( 10005, 'carmen1980@gmail.com', 'Carmen Cecilia', '3125429812', 'Cl. 32EE #76-2 a 76-206, Medellín, Belén, Medellín, Antioquia', '2020-06-11', '17:30:00', '62aaa8225b752267d2bde295'),
        ( 10003, 'Juanrendon97@gmail.com', 'Juan Camilo Rendon', '3217639183', 'Cl. 28 #65a-2 a 65a-80, Medellín, Guayabal, Medellín, Antioquia', '2020-06-14', '14:00:00', '62aaa8cf5b752267d2bde296'),
        ( 10001, 'Lisszapata94@hotmail.com', 'Lisseth Zapata', '3001972144', 'Cra. 58 #79-59 a 79-1, Itagüi, Antioquia', '2020-06-13', '10:30:00', '62aaa9065b752267d2bde297'),
        ( 10005, 'sebear24@hotmail.com', 'Sebastian Bedoya', '3157793162', 'Cl. 56 #53-2 a 53-102, Medellín, La Candelaria, Medellín, Antioquia', '2020-06-12', '16:00:00', '62aaa9565b752267d2bde298'),
        ( 10003, 'dianagomez@hotmail.com', 'Diana Milena Gómez', '3114117389', 'Cl. 8 Sur ##32-120, Medellín, El Poblado, Medellín, Antioquia', '2020-06-13', '11:00:00', '62aaa9905b752267d2bde299'),
        ( 10002, 'paulopera88@gmail.com', 'Paula Lopera', '3028361384', 'Cl. 102 #50b-85 a 50b-1, Medellín, Santa Cruz, Medellín, Antioquia', '2020-06-10', '15:30:00', '62aaa9ca5b752267d2bde29a'),
        ( 10004, 'Sauljimenez70@gmail.com', 'Saul Jímenez', '3126493655', 'Cl. 23A #58cc-173 a 58cc-1, Bello, Antioquia', '2020-06-10', '13:00:00', '62aaaa025b752267d2bde29b'),
        ( 10000, 'marcelagiraldo88@hotmail.com', 'Marcela Giraldo', '3211973261', 'Cra. 44a #661, Itagüi, Medellín, Antioquia', '2020-06-12', '9:30:00', '62aaaa325b752267d2bde29c');

SELECT * FROM orders;

INSERT INTO assigned_order (id_delivery_man, id_order)
    VALUES 
        (3, 100001),
        (3, 100000);

CREATE VIEW orders_view AS
SELECT
    *,
    'En espera' AS Estado
FROM
    orders
WHERE
    status_order = 'En espera'
UNION
ALL
SELECT
    *,
    'En reparto' AS Estado
FROM
    orders
WHERE
    status_order = 'En reparto'
UNION
ALL
SELECT
    *,
    'Entregadas' AS Estado
FROM
    orders
WHERE
    status_order = 'Entregadas';