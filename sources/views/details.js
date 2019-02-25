import {JetView, plugins} from "webix-jet";

export default class DetailsView extends JetView{
	config(){
		const shadows = this.app.config.shadows;
		return {
			gravity:3,
			css:shadows,
			rows:[
				{
					view:"toolbar",
					elements:[
						{
							view:"label", label:"Details", css:"header_label"
						},
						{
							view:"segmented",
							localId:"seg:btn",
							options:[
								{ value:"Map", id:"map"},
								{ value:"Cities", id:"cities"},
								{ value:"Economic", id:"economicchart"}
							]
						},
						{ width:4 }
					]
				},
				{ $subview:true }
			]
		};		
	}
	init(){
		this.use(plugins.Menu,this.$$("seg:btn"));
	}
}
