# Top50SongsLibrary

#### Function getColumn uses the url in order to retrieve the different datasets.
#### Takes a song as a parameter that returns the popularity of the song based on the getColumn link data.
##### songPopularity {string} - the song that you want the popularity for
##### return {number} - The popularity of the song
### function getTop10Songs(songPopularity){

#### Library which returns the artist that made the song. The artist is categorized as a "match" to whichever song was previously given. The artist and trackname are then given as parameters.
##### getArtist {string} - The artist who made the song
##### return {string} - The artists name
### function getArtist(artist){

#### Library that returns name of song. The song name is categorized as a parameter "trackName" and is then returned.
##### trackName {string} - The name of the song
##### return {string} - The songs name
###  function getSongName(trackName){

#### Library thats returns the position on the top 50. The position on the top 50 chart is stored as a parameter and returned as a number.
##### songPosition {number} - The songs position on the top 50 chart
##### return {number} - The songs position
### function getPosition(songPosition){
