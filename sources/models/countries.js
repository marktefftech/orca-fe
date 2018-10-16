export const countries = new webix.DataCollection({
	url:"common/places.json",
	scheme:{
		$init(obj){
			const cities = obj.cities;
			for (let i = 0; i < cities.length; i++){
				if (!obj.cities[i].change)
					obj.cities[i].change = Math.random() < 0.7 ? 1 : -1;
				if (!obj.cities[i].area)
					obj.cities[i].area = Math.floor(Math.random()*110 + 10);
			}
		}
	}
});
