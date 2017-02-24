$(document).ready(function () {
    //your code here
    var searchTerm;
    var url;
    $("#red").keyup(function () {
        
        var searchTerm = $("#red").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=10&namespace=0&format=json";
        

        
        $.getJSON(url, function (wiki) {
            $("#wikiResultsContainer").append(
            
            "<div><h3>wiki[0]</h3></div>"
            
            
            );
        });
        console.log(url);
    });
});