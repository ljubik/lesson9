/* global $*/ //dlya togo sob $ buv v cloud 9 ok
document.getElementById('page-loaded').innerHTML =
    (new Date()).toLocaleTimeString();

$(function() {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/reversx@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            },

            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thanks</h1>');
        })
    });
});