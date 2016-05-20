$(document).ready(function(){

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

	// Gets link for audio
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', '/images/basketballSounds.mp3')
	audioElement.load();
	audioElement.addEventListener("canplay", function() { 
  		audioElement.play(); 
	}, true);

	function play_sound(url){
    if(play_html5_audio){
        var snd = new Audio(url);
        //code
        snd.play();
    }else{          
        var sound = $("<embed id='sound' type='audio/mpeg' />");
        //code
        $('body').append(sound);
    }
}

play_sound('beep.mp3');


	// When user clicks team, that team moves to Your Team div
	$("body").on("click", "teamsArray", function(event){
		var userTeam = click;


	})
})