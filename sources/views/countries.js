import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class CountriesView extends JetView {
	config(){
		return {
			view:"list",
			width:240,
			select:true,
			tooltip:{
				template:"#name#<br>Area: #area# sq km<br>Population: #population#<br>Capital: #capital#<br>Language: #language#"
			},
			type:{
				height:76,
				template:obj => `<image class="flag" src="common/flags/${obj.img}.png" />
					<div class="text">
						<span class="country_name">${obj.name}</span>
						<span class="country_area">${obj.area} sq km</span>
						<span class="capital">${obj.capital}</span>
					</div>`
			},
			on:{
				onAfterSelect:function(id) {
					this.$scope.app.callEvent("country:select",[id]);
					this.$scope.setParam("cid",id,true);
					

					//load new data in chart
					// $$('economic').clearAll();
					// $$('economic').parse(item.chart);

				}
			}
		};
	}
	init(list){
		list.sync(countries);
		const cid = this.getParam("cid",true);
		countries.waitData.then(() => list.select(cid||1));
	}
}
