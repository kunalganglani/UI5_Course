sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {

		onClickMore: function() {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var fname = this.getView().getModel().getProperty("/intro/name");
			var lname = this.getView().getModel().getProperty("/intro/lastname");
			var course = this.getView().getModel().getProperty("/intro/course");
			var post = this.getView().getModel().getProperty("/intro/post");
			var part1 = this.getView().getModel().getProperty("/subjects/part1");
			var part2 = this.getView().getModel().getProperty("/subjects/part2");

			var nameOutput = oBundle.getText("addName", [fname + " " + lname]);
			var courseOutput = oBundle.getText("addCourse", [course]);
			var postOutput = oBundle.getText("addPost", [post]);
			var part1Output = oBundle.getText("addPart1", [part1]);
			var part2Output = oBundle.getText("addPart2", [part2]);
			// show message
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.information(
				(nameOutput + "\n" +
					courseOutput + "\n" +
					postOutput + "\n" +
					part1Output + "\n" +
					part2Output + "\n"), {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		}
	});

});