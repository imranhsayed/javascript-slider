( function () {

	"use strict";

	var slider = {
		/**
		 * Function that initializes the other functions.
		 *
		 * @return {void}
		 */
		init: function () {
			this.initializeVariables();
			this.changeImg();
		},

		/**
		 * Initializes variables.
		 *
		 * @return {void}
		 */
		initializeVariables: function () {
			// Image List
			this.counter = 0;
			this.images = [];

			this.images[0] = 'img/pic-1.png';
			this.images[1] = 'img/pic-2.png';
			this.images[2] = 'img/pic-3.png';
		},

		/**
		 * Changes images source every 3 secs, to create an image slider.
		 *
		 * @return {void}
		 */
		changeImg: function () {
			this.slideEl = document.querySelector( '.slide' );
			this.slideEl.src = this.images[ this.counter ];
			if ( this.counter < ( this.images.length - 1 ) ) {
				this.counter++;
			} else {
				this.counter = 0;
			}
			setTimeout( this.changeImg.bind( this ), 3000 );
		}
	};

	slider.init();

} )();