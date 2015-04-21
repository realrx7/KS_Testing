$(document).ready(function() {

    $('#fullpage').fullpage({
    	scrollOverflow: true,
    	afterLoad: function(anchorLink, index) {
    		$(this).find('.middle-icons')
    			.css('visibility','visible')
    			.addClass('animated bounceIn');

            
            if (index === 7) {
                var imgWidth = $('.white-telephone > img').width();
                var imgHeight = $('.white-telephone > img').height();
                $('#telephone-animation')
                    .css({
                        top: '-' + (imgWidth / 2.9) + 'px',
                        left: '-' + (imgHeight / 2.9) + 'px'
                    })
                    .circleProgress({
                        value: 1,
                        size: imgWidth * 1.75,
                        thickness: 12,
                        fill: {
                            color: '#ffffff'
                        }
                    });
            }
    		
    	}

    });

    


});
