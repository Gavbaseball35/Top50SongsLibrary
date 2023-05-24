var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Spotify%20Charts/Top%2050%20USA.csv"

var songPosition = getColumn(url, 1);
var trackName = getColumn(url,2);
var artist = getColumn(url, 3);
var songPopularity = getColumn(url, 4);

//Creates a Library as a parameter that returns the popularity of the song based on the user inputing the song name.

function getSongRank(song){
  for(var i in trackName){
if(trackName[i].toLowerCase().includes(song.toLowerCase())){
      return songPopularity[i];
    }
  }
   return "The song not ranked";
 
}

 console.log(getSongRank("Creepin'"));
//Library which returns the artist that made the song. The artist is categorized as a "match" to whichever song was previously given. The artist and trackname are then given as parameters.
function getArtist(song){
   for (var i in trackName){
if(trackName[i].toUpperCase().includes(song.toUpperCase()))
       return artist[i];
      }   
    }
   
   
console.log(getArtist("Midnight Rain"));

    


//Library that returns name of song. The song name is categorized as a parameter "trackName" and is then returned.
function getSongName(artistName){
  for(var i in artist){
if(artist[i].toUpperCase().includes(artistName.toUpperCase())) 
  return trackName[i];
    }
  }
 console.log(getSongName("Tory Lanez"));

    // Library thats returns the position on the top 50. The position on the top 50 chart is stored as a parameter and returned as a number.
  function getPosition(song){
  for(var i in trackName){


    if(trackName[i].toUpperCase().includes(song.toUpperCase()))
    return songPosition[i];
      }
    }
    console.log(getPosition("CUFF IT"));
    
    //Library that returns the name of a song based on the songs position on the top 50 chart.
function getName(positionOnTop50){
  for(var i in songPosition){
    if(songPosition[i].toUpperCase().includes(positionOnTop50.toUpperCase()))
    return trackName[i];
  }
}
console.log(getName("35"));
    
      

function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
