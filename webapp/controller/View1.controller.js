sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	(Controller, Log) => {
		return Controller.extend("sap.btp.sapui5.controller.View1", {
			onInit() {

            },
            
            onBeforeRendering() {
                Log.info("A random log message. Altered");
            },

            onAfterRendering() {
                debugger;  //eslint-disable-line
            }
		});
	});
