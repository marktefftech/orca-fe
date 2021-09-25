import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class MapView extends JetView {
	config(){
		return {
			view:"iframe", id:"frame-body", src:"https://markteffeteller.users.earthengine.app/view/sea-temp",
		};
	}
	init(){
		this.on(this.app,"country:select",id => this.updateMap(id));
	}
	urlChange(){
		const cid = this.getParam("cid",true);
		this.updateMap(cid);
	}
	updateMap(id){
		if (window.google){
			const item = countries.getItem(id);
			this.getRoot().getMap().setOptions({
				zoom:item.zoom,
				center:new google.maps.LatLng(item.lat,item.lng)
			});
		}
	}
}
