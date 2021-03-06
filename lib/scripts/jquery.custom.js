

$(document).ready(function() {

//Show the paging and activate its first link
$(".paging").show();
$(".paging a:first").addClass("active");

//Get size of the image, how many images there are, then determin the size of the image reel.
var imageWidth = $(".window").width();
var imageSum = $(".image_reel img").size();
var imageReelWidth = imageWidth * imageSum;

//Adjust the image reel to its new size
$(".image_reel").css({'width' : imageReelWidth});




//Paging  and Slider Function
rotate = function(){
    var triggerID = $active.attr("rel") - 1; //Get number of times to slide
    var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide

    $(".paging a").removeClass('active'); //Remove all active class
    $active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)

    //Slider Animation
    $(".image_reel").animate({
        left: -image_reelPosition
    }, 500 );

}; 

//Rotation  and Timing Event
rotateSwitch = function(){
    play = setInterval(function(){ //Set timer - this will repeat itself every 7 seconds
        $active = $('.paging a.active').next(); //Move to the next paging
        if ( $active.length === 0) { //If paging reaches the end...
            $active = $('.paging a:first'); //go back to first
        }
        rotate(); //Trigger the paging and slider function
    }, 3000); //Timer speed in milliseconds (7 seconds)
};

rotateSwitch(); 

//On Hover
$(".image_reel a").hover(function() {
    clearInterval(play); //Stop the rotation
}, function() {
    rotateSwitch(); //Resume rotation timer
});	

//On Click
$(".paging a").click(function() {
    $active = $(this); //Activate the clicked paging
    //Reset Timer
    clearInterval(play); //Stop the rotation
    rotate(); //Trigger rotation immediately
    rotateSwitch(); // Resume rotation timer
    return false; //Prevent browser jump to link anchor
});



});






//Equalize height column ----------------------------------------------------
jQuery(document).ready(function(){
	jQuery('.equalize_group').jHeights();
	jQuery('#equalize').jHeights();
	jQuery('#equalize2').jHeights();
	jQuery('#equalize3').jHeights();
	jQuery('#equalize4').jHeights();
	jQuery('#equalize5').jHeights();
	jQuery('#equalize6').jHeights();
	jQuery('#equalize7').jHeights();
	jQuery('#equalize8').jHeights();
	jQuery('#equalize9').jHeights();
});

jQuery.fn.jHeights = function() {
	var tallest = 0;
   	this.children().each(function(){
    	 if (jQuery(this).innerHeight() > tallest) {
   	 		 tallest = jQuery(this).innerHeight(); 
    	}
   	});
	jQuery(this).children().height(tallest);
};



// IE 7 fixing for the footer sociable icons
jQuery(document).ready(function() {
	jQuery('<li><a id="ie7_fix" style="display:none;"></a></li>').appendTo('#sociable');
});

//Blog Filter
jQuery(document).ready(function() {
	jQuery('.filter_button').click(function() {
		if (jQuery('.subfilters').css('visibility','hidden')) {
			jQuery(this).next().css({'visibility':'visible', opacity:0}).animate({ opacity:1}, 300);
		} else {
			jQuery('.subfilters').css('visibility','hidden');
		}
	});
	
	jQuery('.subfilters').mouseleave(function() {
		jQuery(this).animate({ opacity:0}, 700).css('visibility','hidden');
	});
});


// Form validation ------------------------------------------------------
jQuery(document).ready(function(){ 
	jQuery(".form_validate").validator({	// initialize validator with the new effect
	   effect: 'wall', 
	   container: '#errors', 
	   errorInputEvent: null
	   
	}).submit(function(e)  { 	// custom form submission logic  
		if (!e.isDefaultPrevented()) {	   // when data is valid  
			jQuery("#errors h1").hide();
	      	jQuery("#errors p").hide();
	      	jQuery("#errors").fadeIn();
	      	jQuery("#success").fadeIn('fast'); // tell user that everything is OK
	      	jQuery("#success").delay(3000).fadeOut('slow');
	   		
	   		form.load("securemail.php");
	   	   e.preventDefault();	      // prevent the form data being submitted to the server
	   	} 
	});
	jQuery.tools.validator.addEffect("wall", function(errors, event) {
		var wall = jQuery(this.getConf().container).fadeIn();		// get the message wall
		wall.find("p").remove();		// remove all existing messages
		jQuery("#errors h1").show();
		jQuery.each(errors, function(index, error) {		// add new ones
			wall.append(
				'<p class="warning_box"><strong>' +error.input.attr('name')+ '</strong> ' +error.messages[0]+ '</p>'
			);		
		});
	}, function(inputs)  {	// the effect does nothing when all inputs are valid		
	});
	
	jQuery(".form_validate").validator({	// initialize validator with the new effect
	   effect: 'wall', 
	   container: '#errors', 
	   errorInputEvent: null
	   
	}).submit(function(e)  { 	// custom form submission logic  
		if (!e.isDefaultPrevented()) {	   // when data is valid  
			jQuery("#errors h1").remove();
	      	jQuery("#errors p").remove();
	      	jQuery("#success").fadeIn('fast'); // tell user that everything is OK
	      	jQuery("#success").delay(3000).fadeOut('slow');
	   		
	   		form.load("securemail.php");
	   	   e.preventDefault();	      // prevent the form data being submitted to the server
	   	} 
	});
});


// FadeIn the input form if other is checked -----------------------------------------------------
jQuery(document).ready(function() {
	jQuery('#other').click(function() {
		if (jQuery('#other:checked').val() !== undefined) {
			jQuery('#select_other').fadeIn('fast').css('display','inline');
		} else {
			jQuery('#select_other').fadeOut('fast');
		}
	});
});


// Prefill form value function ----------------------------------------------------
function prefillClear(field) {
	if (field.value == '') {field.value = field.defaultValue;}
	else if (field.defaultValue==field.value) {field.value = '';}
};



// Sidebar min height -----------------------------------------------------------
jQuery(document).ready(function() {
	var sideHeight = jQuery('#sidebar').height();
	var contHeight = jQuery('#container').height();

	if (sideHeight < contHeight) {
		contHeight -= 230;
		jQuery('#sidebar').css('min-height', contHeight + 'px');
	}

});





