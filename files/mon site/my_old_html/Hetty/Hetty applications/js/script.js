
var score  = 0;

var adding = 1;


function bake()
{

	score += adding;
	document.getElementById('number').innerHTML = score;
	refreshOptions();
}

var adding_plus = 1000000;


function bake_plus()
{

	score += adding_plus;
	document.getElementById('number').innerHTML = score;
	refreshOptions_plus();
}

var ovenPrice = 1000;

function buyOven()
{
	if (score >=ovenPrice)
	{
		score -= ovenPrice;

		adding += 1;

		document.getElementById('number').innerHTML = score;

	}
	refreshOptions();
}

function buyOven_plus()
{
	if (score >=ovenPrice)
	{
		score -= ovenPrice;

		adding += 1;

		document.getElementById('number').innerHTML = score;

	}
	refreshOptions_plus();
}

function refreshOptions()
{
	if (score < ovenPrice)
	document.getElementById('ovenBtn').disabled= true;
	else
	document.getElementById('ovenBtn').disabled= false;
}

function refreshOptions_plus()
{
	if (score < ovenPrice)
	document.getElementById('ovenBtn plus').disabled= true;
	else
	document.getElementById('ovenBtn plus').disabled= false;
}