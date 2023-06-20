# FetchTMDBtoSheets
Apps script to fetch tv show data to a google sheet.
The idea is that you gather the tmdb-ids for all your favorite tv-series in a google sheet, then you run the script wich will fetch info of your tvshows to see if there is anything new that you´ve missed.

For each row the script will fetch: 
- release date of first episode 
- release date of last episode 
- episode number of last episode

How to use:
- Get an API-key at https://www.themoviedb.org/
- Make a new google sheet 
- Make a new script for the sheet with Extensions/Apps Script
- Paste the function from the file script.js in your new script and insert your API-key
- Save the script
  
- Search for your tv series at https://www.themoviedb.org/
- Copy the id´s from the url ( e.g. for https://www.themoviedb.org/tv/4267-the-kingdom you copy 4267)
- Paste the first id in your google sheet in cell A2 (and the following id´s in the cells below)

- Go to to the apps script again and click Run
Now you should have your rows filled with data

/Fredrik Kindahl and chatGPT
 
