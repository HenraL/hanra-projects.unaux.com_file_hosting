var score  = 0;

var adding = 1;

function bake_plus()
{
	score += adding;
	document.getElementById('number').innerHTML = score;
	refreshOptions();
}