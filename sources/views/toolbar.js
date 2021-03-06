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
								{ width:12 },
								{
									view:"label", label:"ORCA Analytics Platform"
								},
								{},
								{
									view:"icon", icon:"mdi mdi-box-shadow",
									tooltip:"Add / remove shadows",
									shadows:shadows,
									click:function(){
										if (this.config.shadows)
											this.config.shadows = this.$scope.app.config.shadows = "";
										else
											this.config.shadows = this.$scope.app.config.shadows = "webix_shadow_small";
										try{
											webix.storage.local.put("geo_explorer_shadows",this.config.shadows);
										}
										catch(err){/* for blocked cookies */}
										this.$scope.app.refresh();
									}
								},
								{
									view:"icon", icon:"mdi mdi-arrow-collapse-left",
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
