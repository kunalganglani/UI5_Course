jQuery.sap.declare("xyz.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("xyz.Component", {
	metadata: {
		"manifest": "json"
	}
});