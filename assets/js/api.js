const logo = new Freezeframe('.freezeframe', {
    trigger: false,
    default: "hover"

  });
  
  logo.start(); // start animation
  logo.stop(); // stop animation

  var bigArray = [ "Gangsta", "Sips Tea", "Attitude", "Jeff Bezos", "Cardi B", "Beyonce", "Make it Rain" ]


  $.each(bigArray, function(index, animal){
    $('#buttonsList').append(`<input id="${index}" type="button" class="btn btn-sm btn-pink m-1" contenteditable="true" value="${animal}">`)
})

  $('#saveBtn').click(function(){
    var searchValue = $('#searchBox').val()
    bigArray.push(searchValue)
    console.log(bigArray)
    $('#buttonsList').append(`<input type="button" id="${bigArray.length-1}" class="btn btn-sm btn-pink m-1" contenteditable="true" value="${searchValue}">`)

    




})

$(document).on('click', '[contenteditable]',function(){
   var btnValue = $(this).val() 
   $('#searchBox').val(btnValue)

   $
  
})




var searchSomething = $('#searchSomething')


// If no existing data, create an array
// Otherwise, convert the localStorage string to an array




$('#searchBtn').click(function(){
    //First Get Value from Input form
    var searchValue = $('#searchBox').val()
    //Interpolate searchValue into request URL using ternary operator backtick syntax
    var requestURL = `https://api.giphy.com/v1/gifs/search?api_key=rnxMjQ36NQQeQLSOghVZ9xYlfVJjhGIX&q=${searchValue}&limit=10&offset=0&rating=G&lang=en`
    //Check in console search value
    console.log('Search Value: ',searchValue)
    //Check in console our generated requestURL to see that q = searchValue
    console.log('Request URL: ',requestURL)
    //Send GET request to giphy using our generated requestURL
    $.get(requestURL, function(ambersData, ambersResponseStatus){
        //Console data to scout how it looks
        console.log("Amber's Data: ", ambersData.data)
        //Console data to scout how it looks
        console.log('Count of Array Data: ',ambersData.pagination.total_count)
        // Instantiate number of results for array data, an integer >= 0
        var numberOfResults = ambersData.pagination.total_count

        console.log("Amber's Response Status: ", ambersResponseStatus)
        //if both conditions met then render gifs.
        if(ambersResponseStatus == 'success' && numberOfResults>=1){
            $('.errorField').html( numberOfResults + " results found.")
            //if successfull query then instantiate a variable to capture gif array data
            var gifArray = ambersData.data
            searchSomething.hide()
            $('#cardContainer').empty()
            $.each(gifArray, function(index, gifObject){
                $('#cardContainer').append(`\
                <div class="col-sm-6 col-md-3">\
                <div class="card mb-3">\
                <img onload="assets/images/loading.gif" class="card-img-top freezeframe" src="${gifObject.images.fixed_width_downsampled.url}" alt="Card image cap">\
          <blockquote class="blockquote mb-0 card-body">\
            <p>${gifObject.title}</p>\
            <footer class="blockquote-footer">\
              <small class="text-muted">\
                Sourced from: <cite title="Source Title">${gifObject.source_tld}</cite>\
              </small>\
            </footer>\
          </blockquote>\
        </div>\
        </div>\
        `)
            })
            
        }
        else if(numberOfResults<1){
            console.log('0 results found query')
            $('.errorField').html("0 results found for your search.")

        }
        else{
            $('.errorField').html("Your query was not successful")
        }
      
    })

  
})




