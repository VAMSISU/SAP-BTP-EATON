/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["testapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
