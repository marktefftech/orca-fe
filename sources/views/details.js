import {JetView} from "webix-jet";
import CitiesView from "views/cities";
import {economic_chart} from "views/economicchart";
import MapView from "views/map";

export default class DetailsView extends JetView{
	config(){
		return {
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
	}
}
