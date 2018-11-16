const url = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";

$("<div>").insertAfter("#get").addClass('dane-programisty');

$('#get').on('click', function () {

    $.getJSON(url, function (response) {

        let html = `<hr>imię: ${response.imie} <hr>nazwisko: ${response.nazwisko}<hr>zawod: ${response.zawod}<hr><hr>firma: ${response.firma}<hr>`;
        $(".dane-programisty").append(html);

    });
})
