$(document).ready(function() {
    var slideout = new Slideout({
        'panel': document.getElementById('wrap'),
        'menu': document.getElementById('nav'),
        'side': 'right',
    });

    $(".navbar-toggle").click(function(event) {
    	slideout.toggle();
    });

    // temp

    $('#basic').magnificPopup();
    $('#basic').trigger( "click" );
});