var html_parte1 = '<html>     <body style=\"position: relative;text-align: left;\">';
var html_parte2 = '</body>    </html>';
var Cotizar_Evento_body = html_parte1 + `
Nombre: {{Nombre}}<br>
Motivo: Solicita Información Acerca De Los Costos De La Cerveza Para Un Evento Personal. <br>
Favor De Comunicarse Lo Más Pronto Posible Al: <br>
Teléfono: {{Telefono}}<br>
 O Email {{email}} <br>
ConversationID: {{voiceInteractionID}} <br>
` + html_parte2;

var Proveedores_body = html_parte1 + `
Nombre: {{Nombre}}<br>
Numero Proveedor: {{proveedor}}<br>
Folios De Las Facturas: {{foliosFacturas}}<br>
Estatus: {{status}}<br>
Fecha De Recepción: ( )<br>
Motivo: Solicita Apoyo Con Unas Factura Pendientes De Pago.<br>
Favor De Comunicarse Lo Más Pronto Posible Al:<br>
Teléfono: {{Telefono}}<br>
O Al Email {{email}} <br>
ConversationID: {{voiceInteractionID}} <br>
` + html_parte2; 


var Gastos_De_Viaje_body = html_parte1 + `
Nombre: {{Nombre}}<br>
Motivo: Se Comunica Por Un Tema De Gastos De Viaje. <br>
Favor De Comunicarse Lo Más Pronto Posible Al:<br>
 Teléfono {{Telefono}}<br>
 O Email {{email}}.<br>
ConversationID: {{voiceInteractionID}} <br>
` + html_parte2;

var Referencias_Laborales_body = html_parte1 + `
Nombre: {{Nombre}}<br>
Empresa: {{Empresa}}<br>
Motivo: Solicita Referencias Laborales De: {{Motivo}}<br>
 Favor De Comunicarse Lo Más Pronto Posible Al:<br>
 Teléfono {{Telefono}}<br>
 O Email {{email}}.<br>
ConversationID: {{voiceInteractionID}} <br>
` + html_parte2;

var Personal_Laboral_body = html_parte1 + `
Nombre: {{Nombre}}<br>
Motivo: Se Comunica Por Un Tema Personal/Laboral.<br>
 Favor De Comunicarse Lo Más Pronto Posible Al:<br>
 Teléfono {{Telefono}}<br>
 O Email {{email}}.<br>
ConversationID: {{voiceInteractionID}} <br>
` + html_parte2;

var Vacantes_body = html_parte1 + `
Nombre: {{Nombre}}<br>
Motivo: Se Comunica Con El Motivo De Darle Seguimiento A La Vacante De<br>
 Favor De Comunicarse Lo Más Pronto Posible Al:<br>
 Teléfono {{Telefono}}<br>
 O Email {{email}}.<br>
ConversationID: {{voiceInteractionID}} <br>
` + html_parte2;


var emailTemplates = [
    { id:"COTIZAR EVENTO", subject:"Cotizar Evento", body: Cotizar_Evento_body },
    { id:"PORTAL PROVEEDORES", subject:"Proveedores", body: Proveedores_body},
    { id:"EXPINS", subject:"Gastos De Viaje", body: Gastos_De_Viaje_body },
    { id:"REFERENCIA LABORAL", subject:"Referencias Laborales", body: Referencias_Laborales_body },
    { id:"PERSONAL", subject:"Personal / Laboral", body: Personal_Laboral_body},
    { id:"LABORAL", subject:"Personal / Laboral", body: Personal_Laboral_body},
    { id:"VACANTE", subject:"Personal / Laboral", body: Vacantes_body}
];

/*  FALTAN ESTAS QUE ESTAN EN EL SCRIPT
COMERCIAL
OFRECER SERVICIO
OTRO*/
