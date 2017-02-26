$(document).ready(function () {
    var searchTerm;
    var url;
    $("#subme").submit(function () {

        searchTerm = $("#red").val();
        
         url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=10&namespace=0&format=json";
        
        console.log(searchTerm)
        
        $.getJSON(url, function () {
            $("#wikiResultsContainer").append(searchTerm);
            console.log("done");
        }).done(function () {
            console.log("success");
        });
        return false;
    });
});


//console.log(url);
//console.log(searchTerm);

//$.getJSON(url, function () {
//    $("#wikiResultsContainer").append(searchTerm);
//    console.log("done");
//}).done(function () {
//    $("wikiResultsContainer").append(searchTerm);
//    console.log("success");
//});