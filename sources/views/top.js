import {JetView} from "webix-jet";
import CountriesView from "views/countries";
import ToolbarView from "views/toolbar";
import DetailsView from "views/details";
import DescriptionView from "views/description";

export default class TopView extends JetView{
	config(){
		const shadows = this.app.config.shadows;
		return {
			rows:[
				ToolbarView,
				{
					type:"space",
					cols:[
						{
							header:"Countries",
							body:CountriesView,
							css:shadows,
							type:"panel"
						},
						{
							margin:10,
							rows:[
								DetailsView,
								{
									header:"Description",
									gravity:2,
									body:DescriptionView,
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
