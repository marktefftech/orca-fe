import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class EconomicChartView extends JetView{
	config(){
		return {   		
			id:"economic",
			view:"chart",
			type:"bar",
			value:"#sales#",
			color:"#37d67a",
			barWidth:60,
			radius:0,
			xAxis:{
				title:"Sales per year",
				template:"#year#"
			},
			yAxis:{
				title:"Sales,million"
			}
		};
	}
	init(chart){
		this.on(this.app,"country:select",id => chart.parse(webix.copy(countries.getItem(id).chart)));
	}
	urlChange(){
		const cid = this.getParam("cid",true);
		countries.waitData.then(() => this.getRoot().parse(webix.copy(countries.getItem(cid).chart)));
	}
}