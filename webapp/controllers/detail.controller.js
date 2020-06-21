sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    var controller= Controller.extend("detail",{

        onInit:function(){
            var oController=this;
            oController.getOwnerComponent().getRouter().getRoute("detail").attachPatternMatched(oController._onDetailMatched, this);
        },
        _onDetailMatched:function(e)
        {
            var oController=this;
           var arg =e.getParameter('arguments');
            $.get("/noteDetail?Id="+arg.Id,function(response){
                oController.getView().getModel('notesDetail').setData(response);
            });

        }
    });
    
    return controller;
});