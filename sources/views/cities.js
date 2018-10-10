import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class CitiesView extends JetView {   
	config(){
		return {
			view:"datatable",
			select:true,
			columns:[
				{ id:"city", header:"City name", sort:"string", fillspace:3 },
				{ id:"region", header:"Region", sort:"string", fillspace:3 },
				{
					id:"population", header:"Population",
					sort:"int", fillspace:2,
					template:obj => {
						const change = obj.change ? (obj.change > 0 ? "arrow-up-thick green" : "arrow-down-thick red") : "";
						return obj.population + `<span class="webix_icon mdi mdi-${change}"></span>`;
					}
				},
				{ id:"area", header:"Area", sort:"int", fillspace:2 }
			]
		};
	}
	init(grid){
		this.on(this.app,"country:select",cid => {
			grid.clearAll();
			grid.parse(countries.getItem(cid).cities);
		});
	}
	urlChange(){
		const cid = this.getParam("cid",true);
		countries.waitData.then(() => this.getRoot().parse(countries.getItem(cid).cities));
	}
}
