import {JetView} from "webix-jet";

export default class MapView extends JetView {
	config(){
		return {
			//provide your own Google API key
			key:"AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
			view:"google-map"
		};
	}
	init(){
		this.on(this.app,"country:select",item => {
		//show position on map
			if (window.google){ //google api is ready
				var myLatlng = new google.maps.LatLng(item.lat, item.lng);
				this.setOptions({
					zoom: parseInt(item.zoom),
					center: myLatlng,
					mapType: "ROADMAP"
				});
			}
		});
	}
	setOptions(config){	// ????????????????
		const map = this.getRoot();
		map.config.zoom = config.zoom;
		map.config.center = config.center;
		map.config.mapType = config.mapType;
		map.refresh();
	}
}
