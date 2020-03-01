var contentWidth = 1521;
var contentHeight = 821;
var contentAspect = contentHeight / contentWidth;
var changed = true;
$( window ).resize(function() {
	changed = true;
});
function resizeContent() {
  	
  var docWidth = $( document ).width();
  var docHeight = $( document ).height();
  var docAspect = docHeight / docWidth;
  if (docAspect < contentAspect) {
	  $('#container').css('transform', 'scale(' + docHeight / contentHeight + ')');
  }
  else {
	  $('#container').css('transform', 'scale(' + docWidth / contentWidth + ')');
  }
}
function checkChange() {
	if (changed == true) {
		resizeContent();
	}
	setTimeout(function() { checkChange(); }, 10);
}
checkChange();

function changeTeam() {
  $( "#wheel" ).toggleClass( "ct t" );
  console.log('test');
}

function roll(pick) {
	$( "#wheel" ).removeClass( "pistol heavy smg rifle" );
	$('#segment-container').find('*').removeClass( "selected" );
	$( "#wheel" ).addClass( "categories" );
	
	//var pick = ;
	
	var catogory = 0;
	var gun = 0;
	
	if (pick < 5) {
		catorgory = 0;
		gun = pick;
	} else if (pick < 10) {
		catogory = 1;
		gun = pick - 5;
	} else if (pick < 15) {
		catogory = 2;
		gun = pick - 10;
	} else {
		catogory = 3;
		gun = pick - 15;
	}
	console.log("Cat: " + catogory + " Gun: " + gun)
	
	// Set Catogory
	$( "#wheel" ).removeClass( "categories" );
	if (catogory == 0) {
	  $( "#wheel" ).addClass( "pistol" );
	}
	if (catogory == 1) {
	  $( "#wheel" ).addClass( "heavy" );
	}
	if (catogory == 2) {
	  $( "#wheel" ).addClass( "smg" );
	}
	if (catogory == 3) {
	  $( "#wheel" ).addClass( "rifle" );
	}
	
	//set Segment select
	if (gun == 0) {
		$( "#segment-top-left" ).addClass( "selected" );
	}
	if (gun == 1) {
		$( "#segment-top-right" ).addClass( "selected" );
	}
	if (gun == 2) {
		$( "#segment-middle-right" ).addClass( "selected" );
	}
	if (gun == 3) {
		$( "#segment-bottom-right" ).addClass( "selected" );
	}
	if (gun == 4) {
		$( "#segment-bottom-left" ).addClass( "selected" );
	}
	if (gun == 5) {
		$( "#segment-middle-left" ).addClass( "selected" );
	}
}