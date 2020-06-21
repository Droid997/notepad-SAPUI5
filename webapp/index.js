sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "webapp",
		settings : {
			id : "notepad"
		},
		async: true
	}).placeAt("content");
});