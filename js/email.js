'use strict';

var toAddress;
var fromAddress = 'conmutadores.cpc@cuamoc.com';
var fromName = 'CPC Conmutador';
var subject = '';
var body = '';
var VoiceInteractionID;
var Nombre;
var Telefono;
var EmailQuienLlama;
var Proveedor;
var FoliosFacturas;
var Status;
var Empresa;
var Motivo;
var token;
var Numero_prov, Folios, Status_proveedores, Fecha_recep;
var Referencia_lab, Empresa, Vacante;
/*
https://localhost/heineken/email.html?InteractionID=InteractionID&Nombre=Nombre&Motivo=GASTOS_VIAJES&Telefono=Telephone&email_quienllama=Callersemail&email_contacto=leonel.contreras@genesys.com&numero_prov=numero_proveedores&folios=folios&status_proveedores=status_proveedores&fecha_recep=fecha_recep&referencia_lab=referencia_lab&empresa=empresa&vacante=la_vacante
https://leo-con.github.io/email/email.html?
https://localhost/heineken/email.html?InteractionID={{Scripter.Interaction ID}}&Nombre={{QuienLLama}}&Motivo={{MotivoInput}}&Telefono={{TelephoneDeContacto}}&email_quienllama={{email_quienllama}}&email_contacto={{email_quienbusca}}&numero_prov={{numero_proveedores}}&folios={{folios}}&status_proveedores={{status_proveedores}}&fecha_recep={{fecha_recep}}&referencia_lab={{referencia_lab}}&empresa={{empresa}}&vacante={{la_vacante}}
*/
if (window.location.hash) {
	token = getParameterByName('access_token');
	var expires_in = getParameterByName('expires_in');
	console.log('token::', token, 'expires_in::', expires_in);

	location.hash = '';

	toAddress = getCookie("toAddress");
	toAddress = toAddress.replace("%20", " ")
	VoiceInteractionID = getCookie("InteractionID");
	Nombre = getCookie("Nombre");
	Telefono = getCookie("Telefono");
	EmailQuienLlama = getCookie("EmailQuienLlama");
	Proveedor = getCookie("proveedor");
	FoliosFacturas = getCookie("foliosFacturas");
	Status = getCookie("status");
	Empresa = getCookie("Empresa");
	Motivo = getCookie("Motivo");
	Numero_prov = getCookie("numero_prov");
	Folios = getCookie("folios");
	Status_proveedores = getCookie("status_proveedores");
	Fecha_recep = getCookie("fecha_recep");
	Referencia_lab = getCookie("referencia_lab");
	Empresa = getCookie("empresa");
	Vacante = getCookie("vacante");
	console.log('emaill.js(2) :: Email_quienllama, email_contacto, Motivo ========= :: ' + toAddress + ', ' + EmailQuienLlama + ',' + Motivo);
	_enviarEmail();

} else {

	var queryStringData = {
		response_type: 'token',
		client_id: clientId,
		redirect_uri: RedirectURL
		//redirect_uri : 'https://leo-con.github.io/email/email.html'
	}

	setCookie("toAddress", getUrlVars()["email_contacto"], 1);
	setCookie("EmailQuienLlama", getUrlVars()["email_quienllama"], 1);
	setCookie("InteractionID", getUrlVars()["InteractionID"], 1);
	setCookie("Nombre", getUrlVars()["Nombre"], 1);
	setCookie("Telefono", getUrlVars()["Telefono"], 1);
	setCookie("proveedor", getUrlVars()["proveedor"], 1);
	setCookie("foliosFacturas", getUrlVars()["foliosFacturas"], 1);
	setCookie("status", getUrlVars()["status"], 1);
	setCookie("Empresa", getUrlVars()["Empresa"], 1);
	setCookie("Motivo", getUrlVars()["Motivo"], 1);
	setCookie("numero_prov", getUrlVars()["numero_prov"], 1);
	setCookie("folios", getUrlVars()["folios"], 1);
	setCookie("status_proveedores", getUrlVars()["status_proveedores"], 1);
	setCookie("fecha_recep", getUrlVars()["fecha_recep"], 1);
	setCookie("referencia_lab", getUrlVars()["referencia_lab"], 1);
	setCookie("empresa", getUrlVars()["empresa"], 1);
	setCookie("vacante", getUrlVars()["vacante"], 1);

	console.log('emaill.js(1) :: email_quienllama, email_contacto, Motivo(1)' + getUrlVars()["email_quienllama"] + ', ' + getUrlVars()["email_contacto"] + ',' + getUrlVars()["Motivo"]);
	window.location.replace('https://login.mypurecloud.com/oauth/authorize?' + $.param(queryStringData));
	//alert('before redirect');
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\#&]' + name + '=([^&#]*)'),
		results = regex.exec(location.hash);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None;Secure";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function _enviarEmail() {
	console.log("_enviarEmail :: inicio :: " + Motivo);
	setEmailBodySubject(Motivo);
	var url = 'https://api.mypurecloud.com/api/v2/conversations/emails';
	var requestData = {
		"queueId": queueId,
		"toAddress": toAddress,
		"fromAddress": fromAddress,
		"fromName": fromName,
		"subject": subject,
		"direction": 'OUTBOUND',
		"htmlBody": body
	};
	$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify(requestData),
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', 'bearer ' + token);
		}
	}).done(function (data) {
		console.log(JSON.stringify(data));
		var conversationId = data.id;
		sendEmail(conversationId, subject, body);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log(jqXHR.responseText);
		$("#ErrorMessage").text('Ocurrió un error al intentar crear el correo electrónico');
	});
}


function sendEmail(conversationId, subject, body) {
	var url = 'https://api.mypurecloud.com/api/v2/conversations/emails/' + conversationId + '/messages';
	var requestData = {
		"to": [{ "email": toAddress }],
		"from": { "email": fromAddress, "name": fromName },
		"subject": subject,
		"textBody": body,
		"htmlBody": body

	};
	$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify(requestData),
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', 'bearer ' + token);
		}
	}).done(function (data) {
		console.log(JSON.stringify(data));
		$("#ErrorMessage").text("Email enviado satisfactoriamente");
		disconnectEmail(conversationId);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log(jqXHR.responseText);
		$("#ErrorMessage").text("Ocurrió un error al intentar enviar el correo electrónico ");
	});
}

function disconnectEmail(conversationId) {
	var url = 'https://api.mypurecloud.com/api/v2/conversations/' + conversationId + '/disconnect';
	$.ajax({
		type: 'POST',
		url: url,
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', 'bearer ' + token);
		}
	}).done(function (data) {
		console.log(JSON.stringify(data));
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log(jqXHR.responseText);
		$("#ErrorMessage").text('Ocurrió un error al intentar desconectarse del correo electrónico ');
	});
}

function setEmailBodySubject(ID) {
	ID = ID.replace(/%20/g, "");
	console.log('======  BuildEmailBody ======');
	console.log('BuildEmailBody ::: ' + VoiceInteractionID + "//" + Nombre + "//" + Telefono + "//" + ID + '//' + EmailQuienLlama);
	let template = emailTemplates.find(o => o.id === ID);
	if (template == null) {
		$("#ErrorMessage").text('No hay una plantilla configurada para el motivo seleccionado. Comuniquese con su supervisor.');
		let template = emailTemplates.find(o => o.id === 'PERSONAL');
	}
	body = template.body;
	subject = template.subject;

	body = body.replace("{{nombre}}", Nombre.replace("%20", " "));
	body = body.replace("{{telefono}}", Telefono.replace("%20", " "));
	body = body.replace("{{voiceinteractionid}}", VoiceInteractionID.replace("%20", " "));
	body = body.replace("{{email}}", EmailQuienLlama.replace("%20", " "));
	body = body.replace("{{proveedor}}", Proveedor.replace("%20", " "));
	body = body.replace("{{foliosfacturas}}", FoliosFacturas.replace("%20", " "));
	body = body.replace("{{status}}", Status.replace("%20", " "));
	body = body.replace("{{empresa}}", Empresa.replace("%20", " "));
	body = body.replace("{{motivo}}", Motivo.replace("%20", " "));
	body = body.replace("{{numero_prov}}", Numero_prov.replace("%20", " "));
	body = body.replace("{{folios}}", Folios.replace("%20", " "));
	body = body.replace("{{status_proveedores}}", Status_proveedores.replace("%20", " "));
	body = body.replace("{{fecha_recep}}", Fecha_recep.replace("%20", " "));
	body = body.replace("{{referencia_lab}}", Referencia_lab.replace("%20", " "));
	body = body.replace("{{empresa}}", Empresa.replace("%20", " "));
	body = body.replace("{{vacante}}", Vacante.replace("%20", " "));
}


