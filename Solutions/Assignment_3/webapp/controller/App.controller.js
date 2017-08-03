sap.ui.define([
	"sap/ui/core/mvc/Controller",
	 "sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.wt.controller.App", {
		
		showDouble: function(){
			var num=prompt("enter num");
			//alert(num*2);
			MessageToast.show(num*2);
			
		},
 
 handleLinkPress:function(){
 
 
 //	console.log("GetINIT solution ");
 	var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.';
  MessageToast.show(msg);	
 },
		onShowHello : function () {
			// show a native JavaScript alert
			/* eslint-disable no-alert */
			var name= "Ravi";
			alert("Hello World " + name);
			/* eslint-enable no-alert */
		}
	});
 
});