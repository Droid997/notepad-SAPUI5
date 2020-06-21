sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("webapp.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName: "webapp.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
});