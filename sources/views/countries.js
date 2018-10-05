import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class CountriesView extends JetView {
	config(){
		return {
			view:"list",
			select:true,
			template:obj => {
				return obj.name;
			},
			on:{
				onAfterSelect:function(id) {
					var item = this.getItem(id);
					this.$scope.app.callEvent("country:select",[item]);
					
					

					//load new data in chart
					// $$('economic').clearAll();
					// $$('economic').parse(item.chart, "xml");
				
					// //load new data in list
					// $$('cities').clearAll();
					// $$('cities').parse(item.cities, "legacy");
				}
			},
			type:{ height: 84 }
		};
	}
	init(list){
		list.sync(countries);
	}
}
