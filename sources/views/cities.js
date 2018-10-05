import {JetView} from "webix-jet";

export default class CitiesView extends JetView {   
	config(){
		return {
			view:"datatable",
			select:true,
			columns:[
				{ map:"#cell[0]#", header:"City name", sort:"string", fillspace:true },
				{ map:"#cell[1]#", header:"Population", sort:"int", width:100, css:"number" },
				{ map:"#cell[2]#", header:"C(n)", sort:"int", width:50, css:"number"},
				{ map:"#cell[3]#", header:"R(n)", sort:"int", width:50, css:"number" }
			]
		};
	}
}
