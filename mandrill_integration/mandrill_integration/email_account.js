$.extend(dataent.email_defaults, {
	"Mandrill": {
		"enable_outgoing": 1,
		"smtp_server": "smtp.mandrillapp.com",
		"smtp_port": 587,
		"use_tls": 1
	}
});

dataent.ui.form.on("Email Account", {
	refresh: function(frm) {
		frm.dashboard.reset();
		if (frm.doc.mandrill_webhook_key) {
			frm.dashboard.set_headline_alert(__("Mandrill integration is active"), "alert-default");
		}
	}
})
