var slider = {
	init: function () {
		this.initializeVariables();
		this.changeImg();
	},

	initializeVariables: function () {
		// Image List
			this.counter = 0,
			this.timeInterval = 3000; // in milli-secs
			this.images = [];

		this.images[0] = 'img/pic-1.png';
		this.images[1] = 'img/pic-2.png';
		this.images[2] = 'img/pic-3.png';
	},

	changeImg: function () {
		console.log( 'auto', slider.counter );
		this.slideEl = document.querySelector( '.slide' );
		this.slideEl.src = this.images[ this.counter ];
		if ( this.counter < ( this.images.length - 1 ) ) {
			this.counter++;
		} else {
			this.counter = 0;
		}
		setTimeout( 'slider.changeImg()', 3000 );
	}
};

slider.init();