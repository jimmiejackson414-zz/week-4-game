$(document).ready(function(){
var spursChar = false;
var teamsArray = [
	{
		name: "Spurs",
		healthPoints: 1000,
		offense: 10,
		defense: 10
	},
	{
		name: "Warriors",
		healthPoints: 110,
		offense: 10,
		defense: 8
	},
	{
		name: "Cavaliers",
		healthPoints: 90,
		offense: 9,
		defense: 7
	},
	{
		name: "Thunder",
		healthPoints: 95,
		offense: 8,
		defense: 9
	},
]

	// When user clicks team, that team moves to Your Team div,
	// and other teams move to Opponents div.
	$("body").on("click", spursChar, function(){
		if (spursChar == true){
			$("#spursChar").append("#yourTeam");
			$("#warriorsChar", "#cavaliersChar", "#thunderChar").append("#yourOpponents");
		} 
		if (warriorsChar == true){
			$("#warriorsChar").append("#yourTeam");
			$("#spursChar", "#cavaliersChar", "#thunderChar").append("#yourOpponents");	
		}
		if (cavaliersChar == true){
			$("#cavaliersChar").append("#yourTeam");
			$("#warriorsChar", "#spursChar", "#thunderChar").append("#yourOpponents");
		}
		if (thunderChar == true){
			$("#thunderChar").append("#yourTeam");
			$("#warriorsChar", "#cavaliersChar", "#spursChar").append("#yourOpponents");
		}
	})

	

})