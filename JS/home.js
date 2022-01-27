// horizontal scroll
/* window.addEventListener("mousewheel", e => {
	if (e.deltaX === 0) {
		e.stopPropagation();
		e.preventDefault();
		window.scrollBy(e.deltaY, 0);
	}
}); */


// tilt hover effect -> Tilt.js
/* var gallery = $("#gallery");

function sliderTilt(){
	var itemPrev = gallery.find(".slick-current").prev("li").find(".item");
	var itemNext = gallery.find(".slick-current").next("li").find(".item");

	$(".item").tilt({
		perspective: 300,
		speed: 2000,
		glare: false,
		maxGlare: .2
		});
	itemPrev.tilt.destroy.call(itemPrev);
	itemNext.tilt.destroy.call(itemNext);
}


gallery.on('init', function(event, slick){
	$(sliderTilt);
});

gallery.on('afterChange', function(event, slick, currentSlide){
	$(sliderTilt);
});


gallery.slick({
	dots: false,
	arrows: true,
	infinite: false,
	centerMode: true,
	focusOnSelect: false,
	speed: 1000,
	centerPadding: "24vw",
	slidesToScroll: 1,
	initialSlide: 4,
  draggable: false
});

$(".img").each(function() {
  $(this).append("<img class=\"shad\" src=\"" + $(this).find("img").attr("src") + "\" />");
});
  
  
$(function() {
	$(".img").click(function(){
		if(!$("#gallery").hasClass("detail")){
			$("#gallery").addClass("detail");
      $(".slick-arrow").addClass("none");
		} else if ($("#gallery").hasClass("detail")){
			$("#gallery").removeClass("detail");
      $(".slick-arrow").removeClass("none");
			console.log("overview");
		}
	});
}); */

const images = [
    "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  ];
  
  $(document).ready(function() {
    images.forEach(function(image) {
      const template = `<div class="imageWrapper"><img src='${image}' /></div>`;
      $(".imagesWrapper").append(template);
    });
  });