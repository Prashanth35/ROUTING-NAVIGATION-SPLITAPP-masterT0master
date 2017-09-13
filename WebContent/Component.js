 sap.ui.core.UIComponent.extend("componenet",
	 {
 metadata : {
	 "manifest" : "json"
 },
 initi : function(){
	 
	 sap.ui.core.UIComponent.prototype.init.apply(this);
	 this.getRouter().inintialize()
 }
 
 })