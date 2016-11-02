$(document).ready(function(){
	var ctx = $("#mycanvas").get(0).getContext("2d");

	var data = [
		{
			value: 40,
			color: "#a6d854",
			highlight: "lightskyblue",
			label: "Samuel"
		},
		{
			value: 50,
			color: "lightgreen",
			highlight: "yellowgreen",
			label: "Yeniffer"
		},
		{
			value: 30,
			color: "orange",
			highlight: "darkorange",
			label: "Matias"
		},
		{
			value:15,
			color:"#a6d665",
			highlight:"#a6d665",
			label:"Otros"
		}
	];

	var chart = new Chart(ctx).Doughnut(data);
});
