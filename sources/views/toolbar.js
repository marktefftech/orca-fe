import {JetView} from "webix-jet";

export default class ToolbarView extends JetView{
	config(){
		return {
			view:"toolbar",
			height:56,
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
								{ view:"icon", icon:"mdi mdi-circle-edit-outline" },
								{ view:"icon", icon:"wxi-calendar" },
								{ view:"icon", icon:"mdi mdi-brush" }
							]
						}
					]
				}
			]
		};
	}
}
