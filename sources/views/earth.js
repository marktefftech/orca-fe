import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class earthView extends JetView{
	config(){
		return {
            view:"iframe", id:"frame-body", src:"https://markteffeteller2.users.earthengine.app/view/filtered-images-app"
		};
	}
}
