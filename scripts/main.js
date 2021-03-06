var usMap, database;
//Hides the divs on load
$("#CountyLabel").hide();
$("#scatterInfo").hide();
$("#scatterPlot").hide();
$("#PaneHolder").hide();

d3.csv("./Database/real_estate_db.csv", function (data) {
	return {
		city: data.city,
		latitude: +data.lat,
		longitude: +data.lng,
		state: data.state,
		stateID: +data.STATEID,
		countyID: data.county,
		place: data.place,
		pop: +data.pop,
		male_pop: +data.male_pop,
		female_pop: +data.female_pop,
		debt: +data.debt,
		hs_degree: +data.hs_degree,
		hs_degree_male: +data.hs_degree_male,
		hs_degree_female: +data.hs_degree_female,
		rent_mean: +data.rent_mean,
		hc_mortgage_mean: +data.hc_mortgage_mean,
		hc_mortgage_stdev: +data.hc_mortgage_stdev,
		hi_mean: +data.hi_mean,
		hi_samples: +data.hi_samples,
		hi_stdev: +data.hi_stdev,
		UID: data.UID,
		rent_gt_10: +data.rent_gt_10,
		rent_gt_50: +data.rent_gt_50,
		state_ab: data.state_ab,
	};

}).then(function (data) {
	usMap = new map(data);

	//pieChart = new pieChart(data);
	//barChart = new barChart(data);
	//IncomeGraph = new IncomeGraph(data);
	database = data;
});

