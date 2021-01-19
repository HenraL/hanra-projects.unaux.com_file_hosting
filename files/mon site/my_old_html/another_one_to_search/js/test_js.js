var score  = 0;

var adding = 1;

function bake()
{
  // alert("message?: hi how do you do?");void(message);
    // alert("message?: any")
      // alert("message?: what's your age?");void(message);
        // alert("message?: how old are you");void(message);
	score += adding;
	document.getElementById('number').innerHTML = score;
	refreshOptions();
}

var adding_plus = 1;

function bake_plus()
{

	score += adding_plus;
	document.getElementById('number').innerHTML = score;
	refreshOptions_plus();
}