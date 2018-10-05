import {JetView} from "webix-jet";
import CitiesView from "views/cities";
import {economic_chart} from "views/economicchart";
import CountriesView from "views/countries";
import MapView from "views/map";

export default class TopView extends JetView{
	config(){
		var tabview = {
			view:"tabview",
			gravity:3,
			tabbar:{
				optionWidth:150,
				value:"map",
				options:[
					{ value:"Map", id:"map"},
					{ value:"Cities", id:"cities"},
					{ value:"Economic", id:"economic"}
				]
			},
			cells:[
				MapView,
				CitiesView,
				economic_chart
			]
		};

		return {
			type:"space",
			cols:[
				{
					width:400, css:"bigHeader",
					header:"Countries", headerHeight:45,
					body:CountriesView
				}, 
				{ view:"resizer" },
				{ margin:10, rows:[
					tabview,
					{
						header:"Description",
						gravity:2,
						body:{
							id:"dsc",
							template:"#dsc#",
							scroll:"y"
						}
					}]
				}
			]
		};
	}
}
