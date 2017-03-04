$(document).ready(function() {
    var searchTerm;
    var url;
    $("#subme").submit(function() {
        var counter;
        searchTerm = $("#red").val();

        url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
            searchTerm + "&limit=10&namespace=0&format=json";

        console.log(searchTerm);

        $.getJSON(url, function(wiki) {

            $("#wikiResultsContainer").html("");

            for (var i = 1; i < 10; i++) {

                for (var j = 1; j < 4; j++) {
                    if (wiki[j][i] === "") {
                        j++;
                    }

                    if (j==1){
                      $("#wikiResultsContainer").append("<h2 style='text-align:left;'>" + wiki[j][i] +
                    "</h2>" /*+ "<br>"*/);
                    continue;
                  }

                  if (j==2){
                    $("#wikiResultsContainer").append("<b>Description: </b><br>" +
                    wiki[j][i] + "<br>");
                    continue;
                  }

                    if (j == 3){
                     $("#wikiResultsContainer").append("<u><a href=" + "'" +
                     wiki[j][i] + "'>" + wiki[j][i] + "</u><br>" );
                   }

                }
                $("#wikiResultsContainer").append("<br><br>");
            }
            console.log("done");
            console.log(wiki);
        }).done(function() {
            console.log("success");
        });
        counter++;
        return false;
    });
});
