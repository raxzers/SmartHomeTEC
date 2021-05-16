/*ADMIN*/
INSERT INTO ADMINISTRADOR (Email,Passw) VALUES('lallan@smarthometec.com','yeePh7eGhae');
INSERT INTO ADMINISTRADOR (Email,Passw) VALUES('oadler@smarthometec.com','aingieSh3oh');
INSERT INTO ADMINISTRADOR (Email,Passw) VALUES('master-ad@smarthometec.com','123shtec');

/*L_DIST*/
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','Midwest TV & Appliance');
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','Bennett Brothers');
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','Allied Radio');
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','Price Club');
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','GMG Comercial Costa Rica');
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','Heslops');
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','Jinan Multicerv');
INSERT INTO L_DIST(Ademail,Dist)Values('master-ad@smarthometec.com','Kumasi-Hoyden');


/*L_DISP_TOTAL*/
INSERT INTO L_DISP_TOTAL(Ademail,Disp_total)Values('master-ad@smarthometec.com','25');

/*L_DISP_REGION*/
INSERT INTO L_DISP_REGION(Ademail,Disp_region)Values('master-ad@smarthometec.com','[An:5,Ac:5,AS:5,E:3,A:2,O:5]');

/*ClIENTES*/
INSERT INTO ClIENTE(Email ,Nombre ,Passw, Pais ,Continente,) VALUES('ElidaBermudezFonseca@gustr.com','Elida ','ieT8oi8eeB','Estados Unidos','América del norte');
INSERT INTO APELLIDO (Clemail,Apellido)VALUES('ElidaBermudezFonseca@gustr.com','Bermúdez');
INSERT INTO APELLIDO (Clemail,Apellido)VALUES('ElidaBermudezFonseca@gustr.com','Fonseca');
INSERT INTO DIRECCION(Clemail ,Direccion ) VALUES('ElidaBermudezFonseca@gustr.com','1865 Doe Meadow Drive Chevy Chase, MD 20815');
;
INSERT INTO ClIENTE(Email ,Nombre ,Passw, Pais ,Continente,apellidos ) VALUES('GordanPejic@superrito.com','Gordan','oideX4shoo','Sudafrica','África');
INSERT INTO APELLIDO (Clemail,Apellido)VALUES('GordanPejic@superrito.com','Pejić');
INSERT INTO DIRECCION(Clemail ,Direccion ) VALUES('GordanPejic@superrito.com','717 Telford Ave Mothibistad 8482');

/*DISPOSITIVO*/
INSERT INTO DISPOSITIVO (Nombre ,Informacion,Consumo,Marca, Grantia,Serie) VALUES ('smart switch','wifi smart switchv2',1100,'Sonoff','5 año','M080201001');
INSERT INTO DISPOSITIVO (Nombre ,Informacion,Consumo,Marca,Grantia,Serie) VALUES ('Google nest mini','wifi speaker color blanco',15,'google','5 año','041714601');
INSERT INTO DISPOSITIVO (Nombre ,Informacion,Consumo,Marca,Grantia,Serie) VALUES ('Regleta smart Wifi','Regleta Inteligente Wifi 15 sockets',1250,'Eagle','5 año','7441109018171');
INSERT INTO DISPOSITIVO (Nombre ,Informacion,Consumo,Marca,Grantia,Serie) VALUES ('Echo Dot','Smart speaker color negro',15,'Amazon','5 año','4611384515481');
INSERT INTO DISPOSITIVO (Nombre ,Informacion,Consumo,Marca, Grantia,Serie) VALUES ('Philips Hue','LED Smart Bulb  con control',8,'Philips','5 años','476971');
INSERT INTO DISPOSITIVO (Nombre ,Informacion,Consumo,Marca,Grantia,Serie) VALUES ('Enchufe Inteligente','Enchufe Inteligente con usb y 12 sockets',1150,'Eagle','5 años','1141');

/*L_ON*/
INSERT INTO L_ON(Dserie,L_on )VALUES('M080201001','2021-02-15 22:05:10');
INSERT INTO L_ON(Dserie,L_on )VALUES('4611384515481','2021-05-15 22:05:10');

/*L_USUARIO*/
INSERT INTO L_USUARIO(Dserie ,Direccion )VALUES('041714601','717 Telford Ave Mothibistad 8482');

INSERT INTO L_USUARIO(Dserie ,Direccion )VALUES('4611384515481','1865 Doe Meadow Drive Chevy Chase, MD 20815');


/*DISTRIBUIDOR*/
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('Midwest TV & Appliance',632530225654321,'América del norte','lallan@smarthometec.com');
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('Bennett Brothers',755530225654321,'Europa','lallan@smarthometec.com');
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('Allied Radio',782123225654321,'Oceania','lallan@smarthometec.com');
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('Price Club',782123225654321,'América del sur','lallan@smarthometec.com');
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('GMG Comercial Costa Rica',3101590004,'América Central','lallan@smarthometec.com');
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('Heslops',8711590004,'América Central-Caribe','lallan@smarthometec.com');
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('Jinan Multicerv',653155004,'Asia','lallan@smarthometec.com');
INSERT INTO DISTRIBUIDOR(Nombre,Ced_jurid,Region,Admin_email) Values('Kumasi-Hoyden',459875404,'Asia','lallan@smarthometec.com');

/*PEDIDO*/
INSERT INTO PEDIDO(Dispositivo, Consecutivo,Clemail)VALUES('Google nest mini',12354,'GordanPejic@superrito.com');
INSERT INTO PEDIDO(Dispositivo, Consecutivo,Clemail)VALUES('Echo Dot',12355,'ElidaBermudezFonseca@gustr.com');


/*APOSENTO*/
INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('dormitorio','GordanPejic@superrito.com');
INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('sala','GordanPejic@superrito.com');
INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('comedor','GordanPejic@superrito.com');
INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('cocina','GordanPejic@superrito.com');

INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('dormitorio','ElidaBermudezFonseca@gustr.com');
INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('sala','ElidaBermudezFonseca@gustr.com');
INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('comedor','ElidaBermudezFonseca@gustr.com');
INSERT INTO APOSENTO(Nombre ,Clemail )VALUES('cocina','ElidaBermudezFonseca@gustr.com');


/*DISPOSITIVO_APOSENTO*/
INSERT INTO DISPOSITIVO_APOSENTO(Dispositivo_apo,Clemail )VALUES('smart switch cocina','ElidaBermudezFonseca@gustr.com');
INSERT INTO DISPOSITIVO_APOSENTO(Dispositivo_apo,Clemail )VALUES('smart switch cocina','GordanPejic@superrito.com');

/*FACTURA*/
INSERT INTO FACTURA(No_fact,F_compra ,Tip_disposit ,Precio ,Clemail )Values(159990,'2018-11-15 22:05:10','regleta',5000,'ElidaBermudezFonseca@gustr.com');
INSERT INTO FACTURA(No_fact,F_compra ,Tip_disposit ,Precio ,Clemail )Values(159984,'2018-11-9 21:05:10','Smart Bulb',2500,'GordanPejic@superrito.com');
INSERT INTO FACTURA(No_fact,F_compra ,Tip_disposit ,Precio ,Clemail )Values(159991,'2019-02-01 06:15:10','switch',1500,'ElidaBermudezFonseca@gustr.com');


/*GARANTIA*/
INSERT INTO GARANTIA(No_serie,F_compra,F_vence ,Dispserie)VALUES(9991,'2019-02-01 06:15:10','2024-02-01 06:15:10','M080201001');
INSERT INTO GARANTIA(No_serie,F_compra,F_vence ,Dispserie)VALUES(10002,'2021-12-15 22:05:10','2026-12-15 22:05:10','041714601');
INSERT INTO GARANTIA(No_serie,F_compra,F_vence ,Dispserie)VALUES(9990,'2018-11-15 22:05:10','2023-11-15 22:05:10','7441109018171');
INSERT INTO GARANTIA(No_serie,F_compra,F_vence ,Dispserie)VALUES(10004,'2021-01-29 21:05:10','2026-01-29 21:05:10','4611384515481');
INSERT INTO GARANTIA(No_serie,F_compra,F_vence ,Dispserie)VALUES(9994,'2021-04-20 14:05:10','2026-04-20 14:05:10','476971');
INSERT INTO GARANTIA(No_serie,F_compra,F_vence ,Dispserie)VALUES(9984,'2018-11-9 21:05:10','2023-11-9 21:05:10','1141');


/*TIPODISPOSITIVO*/
INSERT INTO TIPODISPOSITIVO(Tipo,Dispserie)VALUES('switch','M080201001');
INSERT INTO TIPODISPOSITIVO(Tipo,Dispserie)VALUES('smart speaker','041714601');
INSERT INTO TIPODISPOSITIVO(Tipo,Dispserie)VALUES('regleta','7441109018171');
INSERT INTO TIPODISPOSITIVO(Tipo,Dispserie)VALUES('smart speaker','4611384515481');
INSERT INTO TIPODISPOSITIVO(Tipo,Dispserie)VALUES('Smart Bulb','476971');
INSERT INTO TIPODISPOSITIVO(Tipo,Dispserie)VALUES('Smart Bulb','1141');


