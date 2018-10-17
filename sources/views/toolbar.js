import {JetView} from "webix-jet";

export default class ToolbarView extends JetView{
	config(){
		const shadows = this.app.config.shadows;
		return {
			view:"toolbar",
			height:56,
			css:shadows,
			elements:[
				{
					paddingY:7,
					rows:[
						{
							cols:[
								{
									view:"label", template:"Webix Geo Explorer"
								},
								{},
								{
									view:"icon", icon:"mdi mdi-circle-edit-outline",
									tooltip:"Add / remove shadows",
									shadows:shadows,
									click:function(){
										if (this.config.shadows){
											this.config.shadows = this.$scope.app.config.shadows = "";
											webix.storage.local.put("geo_explorer_shadows","");
										}
										else {
											this.config.shadows = this.$scope.app.config.shadows = "webix_shadow_small";
											webix.storage.local.put("geo_explorer_shadows","webix_shadow_small");
										}
										this.$scope.app.refresh();
									}
								},
								{
									view:"icon", icon:"mdi mdi-arrow-expand-all",
									tooltip:"Collapse / expand panels",
									open:true,
									click:function(){
										this.$scope.app.callEvent("toggle:panels",[this.config.mode]);
										this.config.mode = !this.config.mode;
									}
								}
							]
						}
					]
				}
			]
		};
	}
}
