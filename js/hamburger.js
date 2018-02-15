$( document ).ready(function() {
	var isMenuHidden = true;
	$( ".cross" ).hide();
	$( ".menu-hidden" ).hide();
	$( ".hamburger" ).click(function() {
		if (isMenuHidden) {
			isMenuHidden = false;
			$( ".menu-hidden" ).slideToggle( "slow", function() {
				$( ".hamburger" ).hide();
				$( ".cross" ).show();
			});
		}
	});

	$( ".cross" ).click(function() {
		if (!isMenuHidden) {
			isMenuHidden = true;
			$( ".menu-hidden" ).slideToggle( "slow", function() {
				$( ".cross" ).hide();
				$( ".hamburger" ).show();
			});
		}
	});

});