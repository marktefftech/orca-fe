import {JetView} from "webix-jet";
import CountriesView from "views/countries";
import ToolbarView from "views/toolbar";
import DetailsView from "views/details";
import DescriptionView from "views/description";
import dashboardView from "views/customFrame";

export default class TopView extends JetView{
	config(){
		const shadows = this.app.config.shadows;
		return {
			css:"app_layout",
			rows:[
				ToolbarView,
				{
					type:"clean", padding:5,
					cols:[
						{
							type:"clean", margin:1, padding:5,
							cols:[
								{
									header:"Countries",
									body:CountriesView,
									css:shadows,
									type:"panel"
								},
								{width:1}
							]
						},
						{
							type:"clean", margin:10, padding:5,
							rows:[
								DetailsView,
								{
									header:"Description",
									gravity:2,
									body:dashboardView,
									css:shadows,
									type:"panel"
								}
							]
						}
					]
				}
			]
		};
	}
	init(view){
		this.on(this.app,"toggle:panels",(mode) => {
			const panels = view.queryView({ type:"panel" },"all");
			if (mode)
				for (let i = 0; i < panels.length; i++)
					panels[i].expand();
			else
				for (let i = 0; i < panels.length; i++)
					panels[i].collapse();
		});
	}
}
