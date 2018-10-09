import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class CountriesView extends JetView {
	config(){
		return {
			view:"list",
			width:240,
			select:true,
			type:{
				height:76,
				template:obj => `<image class="flag" src="common/flags/${obj.img}.png" />
					<div class="text">
						<span class="country_name">${obj.name}</span>
						<span class="country_area">$${obj.area}</span>
						<span class="capital">$${obj.capital}</span>
					</div>`
			},
			on:{
				onAfterSelect:function(id) {
					var item = this.getItem(id);
					this.$scope.app.callEvent("country:select",[item]);
					
					

					//load new data in chart
					// $$('economic').clearAll();
					// $$('economic').parse(item.chart);
				
					// //load new data in list
					// $$('cities').clearAll();
					// $$('cities').parse(item.cities, "legacy");
				}
			}
		};
	}
	init(list){
		list.sync(countries);
	}
}
