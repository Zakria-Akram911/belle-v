




    $('.new-slider').owlCarousel({
        loop: true,
        margin: 10,
        arrow: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $(document).ready(function(){
	$(".hamburger button").click(function(){
		$(this).toggleClass('active');
        $("nav.navbar").toggleClass('active');
	});
});   