$(document).ready(function(){
    var A_KEY = "AIzaSyDYg0MSYDRNjUrVopUuN9tOAzgLCjT8BGA"

    var video = ''
    
    $("#form").submit(function(event) {

       event.preventDefault()
        var search = $("#search").val()
        vSearch(A_KEY,search,10)
    })
 
function vSearch(key,search,maxResults){

   $("#videos").empty()
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
                     + "&type=video&order=date&publishedAt=<SOME_DATE_TIME>&part=snippet&maxResults=" +
                      maxResults + "&q=" + search,function (data) 
                     
                     {
                       
        console.log(data)
                        
        data.items.forEach(item => {
            video = `
            <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
 
            $("#videos").append(video)
        });

    })
}

})