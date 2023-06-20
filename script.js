function fetchTMDBData() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var dataValues = dataRange.getValues();
  
  // Assuming TV show IDs are in column A starting from the second row
  var idColumnIndex = 1; // A=1, B=2, C=3, etc.
  var firstEpisodeDateColumnIndex = 2; // Column index for first episode release date
  var latestEpisodeDateColumnIndex = 3; // Column index for latest episode release date
  var latestEpisodeNumberColumnIndex = 4; // Column index for latest episode number

  // Iterate over each row
  for (var i = 1; i < dataValues.length; i++) { // Assuming first row is a header
    var tvShowId = dataValues[i][idColumnIndex - 1]; // Array indices are 0-based
    
    // Fetch TV show details using the TMDB API
    var apiUrl = "https://api.themoviedb.org/3/tv/" + tvShowId + "?api_key=YOUR_API_KEY";
    var response = UrlFetchApp.fetch(apiUrl);
    var tvShowData = JSON.parse(response.getContentText());

    // Extract required information from the response
    var firstEpisodeDate = tvShowData.first_air_date;
    var lastEpisodeDate = tvShowData.last_air_date;
    var lastEpisodeNumber = tvShowData.last_episode_to_air.episode_number;

    // Update the corresponding columns with the fetched data
    sheet.getRange(i + 1, firstEpisodeDateColumnIndex).setValue(firstEpisodeDate);
    sheet.getRange(i + 1, latestEpisodeDateColumnIndex).setValue(lastEpisodeDate);
    sheet.getRange(i + 1, latestEpisodeNumberColumnIndex).setValue("S" + tvShowData.seasons.length + "E" + lastEpisodeNumber);
    
    // Pause for a short while to avoid API rate limits (if applicable)
    Utilities.sleep(1000); // Sleep for 1 second (1000 milliseconds)
  }
}
