jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/ustunberk/testapp/test/integration/NavigationJourneyPhone",
		"com/ustunberk/testapp/test/integration/NotFoundJourneyPhone",
		"com/ustunberk/testapp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});