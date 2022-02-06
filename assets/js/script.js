/* Inicia Tooltips en todo el sitio */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Funciones JQuery */
$(document).ready(function () {
    
    var blanco = true;

    /* Cambio de color Cabecera Sección "Quienes Somos" */
    $(".header").hover(function () {
        $(this).css({
            "background-color": "white",
            "color": "#259fab"
        });
    }, function () {
        $(this).css({
            "background-color": "#259fab",
            "color": "white"
        });
    });

});