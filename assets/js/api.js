

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
    $.get(requestURL, function(ambersData, ambersResponseStatus, countData){
        console.log("Amber's Data: ", ambersData)
        console.log("Amber's Response Status: ", ambersResponseStatus)
        if(ambersResponseStatus == 'success' && ambersData.length>=1){
            console.log('Successful query' + countData.total_count)
            
        }
        else if(ambersData.length<1){
            console.log('0 results found query')
            $('.errorField').html("0 results found for your search.")

        }
        else{
            $('.errorField').html("Your query was not successful")
        }
        for(var i = 0; i<ambersData.length; i++){

        }
    })
    return ambersData
})


