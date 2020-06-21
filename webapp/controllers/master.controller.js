sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function (Controller) {
    'use strict';
    var controller = Controller.extend("master", {

        onInit: function () {
            var oController = this;
            oController.setListBusy(true);
            oController.getOwnerComponent().getRouter().getRoute("master").attachPatternMatched(oController._onMasterMatched, this);
            oController.getOwnerComponent().getRouter().getRoute("detail").attachPatternMatched(oController._onMasterMatched, this);
        },
        getRouter:function(){
            var oController=this;
            return oController.getOwnerComponent().getRouter();
        },
        onListSelectionChange: function (e) {
            var oController=this;
            var listItem = e.getParameter('listItem');
            var path=listItem.getBindingContextPath('notesList');
            var data=oController.getView().getModel('notesList').getProperty(path);

            oController.getRouter().navTo("detail",{Id:data.note_id});
        },
        _onMasterMatched: function (e) {
            var oController = this;
            $.get('/notes', function (response) {
                oController.getView().getModel("notesList").setData(response);
                oController.setListBusy(false);
            })
            oController.getRouter().navTo("detail",{Id:1});

        },
        setListBusy(busy) {
            var oController = this;
            oController.getView().byId('noteList').setBusy(busy);
        }
    });

    return controller;
});