jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 HeaderMaterialSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/ustunberk/testapp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/ustunberk/testapp/test/integration/pages/App",
	"com/ustunberk/testapp/test/integration/pages/Browser",
	"com/ustunberk/testapp/test/integration/pages/Master",
	"com/ustunberk/testapp/test/integration/pages/Detail",
	"com/ustunberk/testapp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.ustunberk.testapp.view."
	});

	sap.ui.require([
		"com/ustunberk/testapp/test/integration/MasterJourney",
		"com/ustunberk/testapp/test/integration/NavigationJourney",
		"com/ustunberk/testapp/test/integration/NotFoundJourney",
		"com/ustunberk/testapp/test/integration/BusyJourney",
		"com/ustunberk/testapp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});