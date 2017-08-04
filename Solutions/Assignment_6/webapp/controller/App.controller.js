sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.wt.controller.App", {
 //on init is the function that is called when the application is loaded
		onInit : function () {
 
			// set data model on view
			var oData = {
				intro : {
					name : "Kunal",
					lastname: "Ganglani",
					course: "UI5",
					post: "Trainer"
				},
				subjects: {
					part1: "HTML CSS and JavaScript Basics",
					part2: "UI5 Application Development"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);//this data is accessible to the view now. 
		}
		});
 
});