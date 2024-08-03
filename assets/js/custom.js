/**
 * custom.js
 *
 * Blocked functions.
 *
 */

( function( $ ) {
	/*
	 * Close menu with esc key
	 */
	sidebarToggle = $( '#masthead' ).find( '.main-navigation' ),

	$( document ).keyup( function( e ) {
		if ( 27 === e.keyCode && sidebarToggle.hasClass( 'toggled' ) ) {
			sidebarToggle.removeClass( 'toggled' ).attr( 'aria-expanded', 'false' );
			$( 'html, body' ).animate( {scrollTop : 0},400 );
		}
	} );
	
	if ($("body").hasClass("post-template")) {
		$('.kg-image-card').wrapAll('<div class="img-wrapper">');
		
		$('.img-wrapper').appendTo('.gh-feature-image');
	}
} )( jQuery );