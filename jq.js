var btn = $('#top-button');

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1750);
});
