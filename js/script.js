$("document").ready(function() {

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $(".navbar a").click(function() {
        $(".navbar a").removeClass('active');
        $(this).addClass("active");
    });
});