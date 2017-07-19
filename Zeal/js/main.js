/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var support = { animations : Modernizr.cssanimations },
		container = document.getElementById( 'ip-container' ),
		laptop = document.getElementById( 'laptop' ),
		header = container.querySelector( 'header.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}

	function startLoading() {
		// simulate loading something..
		Pace.restart();
		var simulationFn = function(instance) {
			var progress = 0;
				// interval = setInterval( function() {
				// 	progress = Math.min( progress + Math.random() * 0.1, 1 );

				// 	instance.setProgress( progress );

				// 	// reached the end
				// 	if( progress === 1 ) {
				// 		classie.remove( container, 'loading' );
				// 		classie.add( container, 'loaded' );
				// 		clearInterval( interval );

				// 		var onEndHeaderAnimation = function(ev) {
				// 			if( support.animations ) {
				// 				if( ev.target !== header ) return;
				// 				this.removeEventListener( animEndEventName, onEndHeaderAnimation );
				// 			}

				// 			classie.add( document.body, 'layout-switch' );
				// 			window.removeEventListener( 'scroll', noscroll );
				// 		};

				// 		if( support.animations ) {
				// 			header.addEventListener( animEndEventName, onEndHeaderAnimation );
				// 		}
				// 		else {
				// 			onEndHeaderAnimation();
				// 		}
				// 	}
				// }, 80 );
				Pace.on("update", function(percent){
      				progress= Math.min (percent*0.01,1);
      				// progress = Math.min( progress + Math.random() * 0.1, 1 );
					// console.log(percent);
					if(progress>0.96 && progress<1){
						instance.setProgress(0.96+progress*0.02);
					}
					else{
						instance.setProgress( progress );	
					}
					

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						
						// clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add( document.body, 'layout-switch' );
							$("#laptop").addClass('laptop_def');
							$("#front").addClass('front_def');
							$("#screen").removeClass('screen-off');
							$('#type-it').typeIt({
							     speed: 100,
							     // lifeLike: true,
							     autoStart: false,
							     startDelay: 500,
							     strings:'$ '
							     // callback(): function() {
							     //       $('#typeit-box-code-link').addClass('is-visible');
							     // }
							})
							.tiPause(1200)
							.tiType('Jambo! ✋')

							.tiBreak()
							.tiType('$ ')
							.tiPause(500)
							// .tiType('A jQuery pl')
							// .tiPause(500)
							// .tiDelete(12)
							// .tiBreak()
							// .tiPause(500)
							.tiType('We are <strong>Zeal Corp</strong>')
							.tiPause(500)
							.tiDelete(4)
							.tiType('Tech.')

							// .tiDelete(11)
							// .tiPause(350)
							// .tiType('on the ')
							// .tiPause(600)
							// .tiType('<em>planet.</em>');
							.tiBreak()
							.tiType('$ ')
							.tiPause(500)
							.tiType('We transform your ideas into elegant solutions.')
							.tiSettings({speed: 700})
							.tiType('...')

							.tiBreak()
							.tiSettings({speed: 100})
							.tiType('$ ')
							.tiPause(500)
							.tiType('Tech for Change; Change for Tech. ✌')
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
      			});
    //   			interval = setInterval( function() {
				// 	progress = Math.min( progress + Math.random() * 0.1, 1 );

				// 	instance.setProgress( progress );
				// },80);
      			
				// interval = setInterval( function() {
					
				// }, 80 );
		};

		loader.setProgressFn( simulationFn );
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();