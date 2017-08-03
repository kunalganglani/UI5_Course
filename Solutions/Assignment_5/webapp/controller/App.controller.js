sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.wt.controller.App", {
 
		onPressButton : function (event) {
			var buttonLabel= event.getSource().getText();
			var answer; 
			switch(buttonLabel){
				case '+': {
					answer= Number(this.getView().byId("input1").getValue())+Number(this.getView().byId("input2").getValue());
					break;
				}
				case '-': {
					answer= Number(this.getView().byId("input1").getValue())-Number(this.getView().byId("input2").getValue());
					break;
				}
				case '*': {
					answer= Number(this.getView().byId("input1").getValue())*Number(this.getView().byId("input2").getValue());
					break;
				}
				case '/': {
					answer= Number(this.getView().byId("input1").getValue())/Number(this.getView().byId("input2").getValue());
					break;
				}
				
			}
			this.getView().byId("answer").setText(answer); 
			
		}
	});
 
});