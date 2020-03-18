var html_parte1 = '<html>     <body style=\"position: relative;text-align: left;\">';
var html_parte2 = '</body>    </html>';
var Cotizar_Evento_body = html_parte1 + `
Nombre: {{nombre}}<br>
Motivo: Solicita Información Acerca De Los Costos De La Cerveza Para Un Evento Personal. <br>
Favor De Comunicarse Lo Más Pronto Posible Al: <br>
Teléfono: {{telefono}}<br>
O Email {{email}} <br>
ConversationID: {{voiceinteractionid}} <br>
` + html_parte2;

var Proveedores_body = html_parte1 + `
Nombre: {{nombre}}<br>
Numero Proveedor: {{numero_prov}}<br>
Folios De Las Facturas: {{folios}}<br>
Estatus: {{status_proveedores}}<br>
Fecha De Recepción: {{fecha_recep}}<br>
Motivo: Solicita Apoyo Con Unas Factura Pendientes De Pago.<br>
Favor De Comunicarse Lo Más Pronto Posible Al:<br>
Teléfono: {{telefono}}<br>
O Al Email {{email}} <br>
ConversationID: {{voiceinteractionid}} <br>
` + html_parte2;


var Gastos_De_Viaje_body = html_parte1 + `
Nombre: {{nombre}}<br>
Motivo: Se Comunica Por Un Tema De Gastos De Viaje. <br>
Favor De Comunicarse Lo Más Pronto Posible Al:<br>
Teléfono {{telefono}}<br>
O Email {{email}}.<br>
ConversationID: {{voiceinteractionid}} <br>
` + html_parte2;

var Referencias_Laborales_body = html_parte1 + `
Nombre: {{nombre}}<br>
Empresa: {{empresa}}<br>
Motivo: Solicita Referencias Laborales De: {{referencia_lab}}<br>
Favor De Comunicarse Lo Más Pronto Posible Al:<br>
Teléfono {{telefono}}<br>
O Email {{email}}.<br>
ConversationID: {{voiceinteractionid}} <br>
` + html_parte2;

var Personal_Laboral_body = html_parte1 + `
Nombre: {{nombre}}<br>
Motivo: Se Comunica Por Un Tema Personal/Laboral.<br>
Favor De Comunicarse Lo Más Pronto Posible Al:<br>
Teléfono {{telefono}}<br>
O Email {{email}}.<br>
ConversationID: {{voiceinteractionid}} <br>
` + html_parte2;

var Vacantes_body = html_parte1 + `
Nombre: {{nombre}}<br>
Motivo: Se Comunica Con El Motivo De Darle Seguimiento A La Vacante De: {{vacante}}<br>
Favor De Comunicarse Lo Más Pronto Posible Al:<br>
Teléfono {{telefono}}<br>
O Email {{email}}.<br>
ConversationID: {{voiceinteractionid}} <br>
` + html_parte2;


var emailTemplates = [
    { id: "PERSONAL_LABORAL", subject: "Personal / Laboral", body: Personal_Laboral_body },
    { id: "COTIZAR_EVENTO", subject: "Cotizar Evento", body: Cotizar_Evento_body },
    { id: "PORTAL_PROVEEDORES", subject: "Proveedores", body: Proveedores_body },
    { id: "VACANTE", subject: "Personal / Laboral", body: Vacantes_body },
    { id: "REFERENCIA_LABORAL", subject: "Referencias Laborales", body: Referencias_Laborales_body },
    { id: "GASTOS_VIAJES", subject: "Gastos De Viaje", body: Gastos_De_Viaje_body }
];

var clientId = 'a54b668f-eb52-46ea-b6f2-8be63a3d83c4';
var queueId = 'e866e0f0-5f57-4e4a-b4a5-6bf7ca28a26c';
var RedirectURL = 'https://localhost/heineken/email.html';
