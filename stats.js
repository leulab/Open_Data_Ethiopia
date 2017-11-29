$(function () {
	Highcharts.chart('access_improved_water', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Access to improved water source'
		},subtitle: {
    			text: 'Data source:<a href="http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/#.Wh092LpFxYc/"> FAO Food Secuirty Indicators</a>'
		},
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
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
				name: 'Ethiopia ',
				data: [13.2,13.4,13.6,15.6,17.6,19.5,21.4,23.3,25.2,27.0,28.9,30.8,32.7,34.5,36.4,38.3,40.1,42.0,43.9,45.9,47.8,49.7,51.6,53.5,55.4,57.3,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [50.4,50.2,50.6,50.9,51.6,52.3,53.1,53.9,54.7,55.5,56.3,57.1,57.9,58.7,59.5,60.3,61.1,61.8,62.6,63.4,64.2,65.0,66.2,67.3,68.0,69.1,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [52.3,53.0,53.5,54.1,54.9,55.7,56.6,57.5,58.4,59.4,60.3,61.2,62.2,63.2,64.2,65.3,66.3,67.4,68.5,69.4,70.4,70.3,71.4,72.1,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [45.3,45.6,46.4,47.2,48.1,49.0,49.9,50.8,51.7,52.6,53.5,54.4,55.3,56.3,57.2,58.1,59.0,60.0,60.9,61.8,63.3,64.1,65.0,65.6,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [71.5,72.3,73.6,74.4,75.2,75.9,76.7,77.5,78.3,79.0,79.8,80.6,81.3,82.1,82.8,83.5,84.3,85.0,85.7,86.5,87.2,88.2,88.9,89.6,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('acess_sanitation', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Access to improved sanitation facilities'
		},
		subtitle: {
                        text: 'Data source:<a href="http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/#.Wh092LpFxYc/"> FAO Food Secuirty Indicators</a>'
                },
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
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
				name: 'Ethiopia ',
				data: [2.6,2.6,2.7,2.8,2.9,3.0,3.0,4.6,5.9,7.3,8.6,9.9,11.2,12.6,13.9,15.2,16.5,17.8,19.1,20.4,21.7,23.0,24.3,25.5,26.8,28.0,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [19.3,22.7,23.2,23.5,23.9,24.4,25.0,25.8,26.5,27.3,28.0,28.7,29.5,30.2,30.9,31.6,32.3,32.9,33.6,34.2,34.8,35.2,35.9,35.9,36.4,37.4,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [30.2,29.8,31.5,32.7,33.7,33.7,33.8,34.3,34.7,35.3,36.2,36.7,37.3,37.9,38.4,39.0,39.6,39.9,40.4,41.0,41.5,41.2,41.7,42.2,42.6,43.0,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [12.2,12.8,15.7,16.1,16.3,16.6,16.9,17.7,18.3,19.0,19.7,20.3,21.0,21.6,22.3,22.9,23.5,24.1,24.7,25.4,26.0,26.2,26.8,27.3,27.8,28.2,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [28.9,30.0,31.0,31.9,34.3,35.2,36.0,36.9,37.7,38.6,39.5,40.4,41.2,42.1,43.0,43.9,44.7,45.6,46.5,47.3,48.1,48.9,49.7,50.5,51.3,51.9,]}]
	}); 
});

$(function () {
	Highcharts.chart('domestic_food_index', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Domestic food price index'
		},
		subtitle: {
                        text: 'Data source:<a href="http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/#.Wh092LpFxYc/"> FAO Food Secuirty Indicators</a>'
                },
		xAxis: {
			categories: [
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Index'
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
				data: [5.97,5.35,5.39,5.85,5.79,5.95,6.04,6.20,6.76,6.30,5.97,6.20,6.36,6.30,6.25,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [7.69,7.56,7.53,7.59,7.53,7.72,7.84,7.85,7.93,7.83,7.97,8.06,8.07,7.97,,,]
			   },
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [6.64,6.50,6.53,6.64,6.58,6.65,6.69,6.70,6.73,6.65,6.65,6.7,6.82,6.7,,,]
			   },
			   { 
			   name: 'Low Income Economies ',
			   data: [7.22,7.11,7.09,7.15,7.21,7.39,7.47,7.47,7.68,7.65,7.78,7.95,7.92,7.8,7.8,,]
			   },
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [5.72,5.64,5.62,5.55,5.53,5.58,5.65,5.64,5.72,5.65,5.77,5.67,5.62,5.8,5.7,,]
			   }]
	}); 
});
$(function () {
	Highcharts.chart('aerable_land', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Percent of arable land equipped for irrigation'
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
				name: 'Ethiopia ',
				data: [0,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,3.1,3.2,3.3,3.4,3.5,3.6,3.8,4.1,4.3,4.4,4.5,4.7,5.0,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [9.9,10.2,10.4,10.7,10.9,11.0,11.0,11.1,11.3,11.5,11.7,11.7,11.7,11.7,11.7,11.7,11.6,11.4,11.3,11.2,11.1,11.1,11.2,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [15.9,16.2,16.2,16.2,16.0,15.8,15.6,15.5,15.5,15.5,15.5,15.4,15.3,15.1,15.0,14.9,14.8,14.7,14.6,14.4,14.3,14.2,14.2,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [8.4,8.7,8.8,8.9,8.9,8.8,8.7,8.8,8.8,8.8,8.7,8.6,8.5,8.4,8.3,8.3,8.3,8.2,8.1,8.0,7.9,7.9,7.9,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [26.2,26.6,26.9,27.3,27.8,28.3,28.8,29.2,29.7,30.3,30.9,31.3,31.6,32.0,32.5,32.8,33.1,33.5,33.9,34.1,32.9,33.1,33.4,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('food_variability', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Per capita food supply variability'
		},
		subtitle: {
                        text: 'Data source:<a href="http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/#.Wh092LpFxYc/"> FAO Food Secuirty Indicators</a>'
                },
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'kcal/caput/day'
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
				data: [13,6,8,15,22,19,13,26,32,27,23,16,17,16,12,21,24,23,33,31,30,19,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [30,23,7,9,21,28,23,16,5,7,13,13,10,6,6,6,3,4,3,4,4,5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [104,100,109,201,235,240,206,69,56,52,45,39,30,18,12,10,16,15,8,8,8,14,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [26,19,7,7,18,23,20,17,6,7,13,12,10,6,5,5,5,4,4,6,6,5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [25,53,58,75,76,75,57,19,6,7,7,10,21,31,35,27,13,17,33,40,33,18,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]}]
	}); 
});
