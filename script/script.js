
/*slider index page*/

var Index = 0;
slider();

function slider() {
    
    var x = document.getElementsByClassName("mySlides");
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none"; }   
                Index++;
    
	if ( Index > x.length) { Index = 1}    
    x[ Index - 1].style.display = "block";  
    setTimeout(slider, 3000); 
}
