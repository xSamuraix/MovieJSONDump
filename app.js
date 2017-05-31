// This .on("click") function will trigger the AJAX Call
      $("#find-movie").on("click", function(event) {
        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();
        // Here we grab the text from the input box
        var movie = $("#movie-input").val();
        // Here we construct our URL
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view
        // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE
        // =================================================================
        // CODE GOES HERE
        // =================================================================
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response){
            $("#movie-view").text(JSON.stringify(response));
            console.log(response);
        });
      });