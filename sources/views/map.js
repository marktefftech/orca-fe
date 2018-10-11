import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class MapView extends JetView {
	config(){
		return {
			//provide your own Google API key
			key:"AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
			view:"google-map"
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
		const map = this.getRoot();
		if (window.google){
			const item = countries.getItem(id);
			map.config.zoom = item.zoom;
			map.config.center = [item.lat,item.lng];
			map.render();
		}
	}
}
