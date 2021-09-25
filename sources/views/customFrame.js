import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class dashboardView extends JetView{
	config(){
		return {
            view:"iframe", id:"frame-body", src:"https://public.tableau.com/views/Book1_16324234423900/Sheet1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
		};
	}
}
