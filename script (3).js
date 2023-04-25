var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Spotify%20Charts/Top%2050%20USA.csv"

var songPosition = getColumn(url, 1);
var trackName = getColumn(url,2);
var artist = getColumn(url, 3);
var songPopularity = getColumn(url, 4);

//Creates a Library that returns the popularity of the song.
function getTop10Songs(songPopularity){
  var matches = [];
  for(var i in songPopularity){


    if(songPopularity[i].toUpperCase().includes(songPopularity.toUpperCase())){matches.push(trackName[i]);
      
    }
    if (matches.length == 0){
      matches.push("The song is ranked" + songPopularity + "in popularity");
    }
  }
  console.log(songPopularity);
}

//Library which returns the artist that made the song.
 function getArtist(artist){
   var match = [];
   for (var i in artist){

     if(artist[i])
   }
     }


//Library that returns name of song
function getTop10Songs(trackName){
  var matches = [];
  for(var i in trackName){



    if(trackName[i].toUpperCase().includes(trackName.toUpperCase())){matches.push(trackName[i]);
      
    }
    if (matches.length == 0){
      matches.push("The song is named" + trackName);
    }
  }
  console.log(trackName);
}

    // Library thats returns the position on the top 50
  function getTop10Songs(songPosition){
  var matches = [];
  for(var i in songPosition){


    if(songPosition[i].toUpperCase().includes(songPosition.toUpperCase())){matches.push(trackName[i]);
      
    }
    if (matches.length == 0){
      matches.push("The song is ranked" + songPosition + "in the top 50 chart");