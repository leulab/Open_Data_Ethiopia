$(document).ready(function() {
	var options = {
		chart: {
			renderTo: 'usecase10',
			type: 'line'
		},
		title: {
			text: 'Receipts of Food'
		},
		subtitle: {
		        text: 'Data source:<a href="http://www.foodsecurityportal.org/api/countries/fao-receipts-of-food/"> Food Secuirty Portal</a>'
		},
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'Metric Tons'
			}
		},
		series: []
	};


	$.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-receipts-of-food/ethiopia.csv', function(data) {
                // Split the lines
                $.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-receipts-of-food/congo.csv', function(data2) {
					$.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-receipts-of-food/kenya.csv', function(data3) {
					var lines3 = data3.split('\n');
					var lines2 = data2.split('\n');
					var lines = data.split('\n');
					
					
					$.each(lines, function(lineNo, line) {
							var items = line.split(',');
							// header line containes categories
							if (lineNo > 1){return false;}

							if (lineNo == 0) {
								 $.each(items, function(itemNo, item) {

									item = item.replace(/^"(.*)"$/, '$1');
									options.xAxis.categories.push(item);
								});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items, function(itemNo, item) {
											item = item.replace(/^"(.*)"$/, '$1');
										
											if (itemNo == 0) {
													series.name = item;
													
											} else {
													series.data.push(parseFloat(item));
											}
									});
									options.series.push(series);
							}
					});
					$.each(lines2, function(lineNo2, line2) {
							var items2 = line2.split(',');
							if (lineNo2 > 1){return false;}
							// header line containes categories
							if (lineNo2 == 0) {
									$.each(items2, function(itemNo2, item2) {
											item2 = item2.replace(/^"(.*)"$/, '$1');
											if (itemNo2 > 0) options.xAxis.categories.push(item2);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items2, function(itemNo2, item2) {
											item2 = item2.replace(/^"(.*)"$/, '$1');
											if (itemNo2 == 0) {
													series.name = item2;
											} else {
													series.data.push(parseFloat(item2));
											}
									});
									options.series.push(series);
							}
					});
					$.each(lines3, function(lineNo3, line3) {
							var items3 = line3.split(',');
							if (lineNo3 > 1){return false;}				
							// header line containes categories
							if (lineNo3 == 0) {
									$.each(items3, function(itemNo3, item3) {
											item3 = item3.replace(/^"(.*)"$/, '$1');
											if (itemNo3 > 0) options.xAxis.categories.push(item3);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items3, function(itemNo3, item3) {
											item3 = item3.replace(/^"(.*)"$/, '$1');
											if (itemNo3 == 0) {
													series.name = item3;
											} else {
													series.data.push(parseFloat(item3));
											}
									});
									options.series.push(series);
							}
					});
                var inflation_chart = new Highcharts.Chart(options);
        });
        });
		});
});
$(document).ready(function() {
	var options = {
		chart: {
			renderTo: 'usecase11',
			type: 'line'
		},
		title: {
			text: 'Population Undernourished'
		},
		subtitle: {
                        text:  'Data source:<a href="http://www.foodsecurityportal.org/api/countries/fao-population-under/"> Food Secuirty Portal</a>'
                },
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'Percentage(%)'
			}
		},
		series: []
	};


	$.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-population-under/ethiopia.csv', function(data) {
                // Split the lines
                $.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-population-under/democratic republic of the congo.csv', function(data2) {
					$.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-population-under/kenya.csv', function(data3) {
					var lines3 = data3.split('\n');
					var lines2 = data2.split('\n');
					var lines = data.split('\n');
					$.each(lines, function(lineNo, line) {
							var items = line.split(',');
							if (lineNo > 1){return false;}
							// header line containes categories
							if (lineNo == 0) {
									$.each(items, function(itemNo, item) {
											item = item.replace(/^"(.*)"$/, '$1');
											if (itemNo > 0) options.xAxis.categories.push(item);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items, function(itemNo, item) {
											item = item.replace(/^"(.*)"$/, '$1');
											if (itemNo == 0) {
													series.name = item;
											} else {
													series.data.push(parseFloat(item));
											}
									});
									options.series.push(series);
							}
					});
					$.each(lines2, function(lineNo2, line2) {
							var items2 = line2.split(',');
							if (lineNo2 > 1){return false;}
							// header line containes categories
							if (lineNo2 == 0) {
									$.each(items2, function(itemNo2, item2) {
											item2 = item2.replace(/^"(.*)"$/, '$1');
											if (itemNo2 > 0) options.xAxis.categories.push(item2);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items2, function(itemNo2, item2) {
											item2 = item2.replace(/^"(.*)"$/, '$1');
											if (itemNo2 == 0) {
													series.name = item2;
											} else {
													series.data.push(parseFloat(item2));
											}
									});
									options.series.push(series);
							}
					});
					$.each(lines3, function(lineNo3, line3) {
							var items3 = line3.split(',');
							if (lineNo3 > 1){return false;}
							// header line containes categories
							if (lineNo3 == 0) {
									$.each(items3, function(itemNo3, item3) {
											item3 = item3.replace(/^"(.*)"$/, '$1');
											if (itemNo3 > 0) options.xAxis.categories.push(item3);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items3, function(itemNo3, item3) {
											item3 = item3.replace(/^"(.*)"$/, '$1');
											if (itemNo3 == 0) {
													series.name = item3;
											} else {
													series.data.push(parseFloat(item3));
											}
									});
									options.series.push(series);
							}
					});
                var inflation_chart = new Highcharts.Chart(options);
        });
        });
		});
});
$(function () {
	Highcharts.chart('usecase12', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Cereal import dependency ratio'
		},
		subtitle: {
                        text: 'Data source:<a href="http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/#.Wh092LpFxYc/"> FAO Food Secuirty Indicators</a>'
                },
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
						'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12',
						'2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Percentage(%)'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'bottom',
			y: -10,
			floating: false,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia',
				data: [0,7.9,17.3,11.1,8.9,4.6,4.4,5.7,9.9,10.8,10.7,12.1,10.6,9.9,6.0,6.0,7.3,9.9,11.3,10.7,,,,,,,]
				},
				{
				name: 'Kenya',
				data: [8.2,8.8,13.7,12.0,12.1,18.4,24.4,26.9,24.7,25.4,24.8,20.8,19.5,20.6,21.7,22.5,24.3,34.9,34.3,36.4,,,,,,,]
				},
				{
				name: 'Congo',
				data: [95.3,95.5,94.8,93.3,91.4,91.4,92.3,94.3,95.5,95.2,95.2,94.5,92.9,91.9,91.9,89.9,89.9,90.0,89.4,90.0,90.1,92.9,,,,,,,]
				}]
	}); 
});
$(document).ready(function() {
	var options = {
		chart: {
			renderTo: 'usecase20',
			type: 'line'
		},
		title: {
			text: 'Calorie Supply Per Capita, Crops Equivalent'
		},
		subtitle: {
                        text: 'Data source:<a href="http://www.foodsecurityportal.org/api/countries/fao-calorie-supply-p/"> Food Secuirty Portal</a>'

                },
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'KCal/Capita/Day'
			}
		},
		series: []
	};


	$.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-calorie-supply-p/ethiopia.csv', function(data) {
                // Split the lines
                $.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-calorie-supply-p/congo.csv', function(data2) {
					$.get('https://cors-anywhere.herokuapp.com/http://www.foodsecurityportal.org/api/countries/fao-calorie-supply-p/kenya.csv', function(data3) {
					var lines3 = data3.split('\n');
					var lines2 = data2.split('\n');
					var lines = data.split('\n');
					$.each(lines, function(lineNo, line) {
							var items = line.split(',');
							if (lineNo > 1){return false;}
							// header line containes categories
							if (lineNo == 0) {
									$.each(items, function(itemNo, item) {
											item = item.replace(/^"(.*)"$/, '$1');
											if (itemNo > 0) options.xAxis.categories.push(item);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items, function(itemNo, item) {
											item = item.replace(/^"(.*)"$/, '$1');
											if (itemNo == 0) {
													series.name = item;
											} else {
													series.data.push(parseFloat(item));
											}
									});
									options.series.push(series);
							}
					});
					$.each(lines2, function(lineNo2, line2) {
							var items2 = line2.split(',');
							if (lineNo2 > 1){return false;}
							// header line containes categories
							if (lineNo2 == 0) {
									$.each(items2, function(itemNo2, item2) {
											item2 = item2.replace(/^"(.*)"$/, '$1');
											if (itemNo2 > 0) options.xAxis.categories.push(item2);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items2, function(itemNo2, item2) {
											item2 = item2.replace(/^"(.*)"$/, '$1');
											if (itemNo2 == 0) {
													series.name = item2;
											} else {
													series.data.push(parseFloat(item2));
											}
									});
									options.series.push(series);
							}
					});
					$.each(lines3, function(lineNo3, line3) {
							var items3 = line3.split(',');
							if (lineNo3 > 1){return false;}
							// header line containes categories
							if (lineNo3 == 0) {
									$.each(items3, function(itemNo3, item3) {
											item3 = item3.replace(/^"(.*)"$/, '$1');
											if (itemNo3 > 0) options.xAxis.categories.push(item3);
									});
							}
							// the rest of the lines contain data with their name in the first position
							else {
									var series = {
											data: []
									};
									$.each(items3, function(itemNo3, item3) {
											item3 = item3.replace(/^"(.*)"$/, '$1');
											if (itemNo3 == 0) {
													series.name = item3;
											} else {
													series.data.push(parseFloat(item3));
											}
									});
									options.series.push(series);
							}
					});
                var inflation_chart = new Highcharts.Chart(options);
        });
        });
		});
});
$(function () {
	Highcharts.chart('usecase21', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Depth of Food Deficit'
		},
		subtitle: {
                        text: 'Data source:<a href="http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/#.Wh092LpFxYc/"> FAO Food Secuirty Indicators</a>'
                },
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12',
'2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'KCal/Capita/Day'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'bottom',
			y: -10,
			floating: false,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [644,673,640,631,607,580,543,515,488,457,424,395,375,357,341,324,314,304,291,276,264,256,250,244,236,,]
				},
				
			   { 
			   name: 'Kenya',
			   data: [209,232,250,254,237,225,222,226,223,218,217,224,234,231,213,185,170,166,165,159,151,145,140,136,135,,]},
			   { 
			   name: 'Congo',
			   data: [322,323,327,334,341,345,341,325,296,261,228,205,193,200,213,233,236,234,226,217,204,190,188,196,206,,]}]

			  
	}); 
});
