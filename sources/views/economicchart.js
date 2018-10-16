import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class EconomicChartView extends JetView{
	config(){
		return {   		
			id:"economic",
			view:"chart",
			type:"bar",
			value:"#sales#",
			color:"#8664C6",
			barWidth:50,
			radius:0,
			xAxis:{
				template:"#year#", lines:false
			},
			yAxis:{
				color:"#fff", start:0, step:2, end:14
			},
			tooltip:{
				template:"Sales: #sales#"
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