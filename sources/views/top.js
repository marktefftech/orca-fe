import {JetView} from "webix-jet";
import CountriesView from "views/countries";
import ToolbarView from "views/toolbar";
import DetailsView from "views/details";
import DescriptionView from "views/description";

export default class TopView extends JetView{
	config(){
		return {
			rows:[
				ToolbarView,
				{
					type:"space",
					cols:[
						{
							header:"Countries",
							body:CountriesView
						},
						{
							margin:10,
							rows:[
								DetailsView,
								{
									header:"Description",
									gravity:2,
									body:DescriptionView
								}
							]
						}
					]
				}
			]
		};
	}
}
