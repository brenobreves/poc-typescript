This is a simple REST API where you can save your favorites songs of the moment, and once you get sick of the you can just wipe
all data and start a new list.

To start the API locally first make sure to install all the dependencies running the "npm i" command on terminal,
now with all dependencies properly installed run the script "npm run dev" to run the API you can also run "npm run build" to transpile
the code to .js on a new /dist folder if you desire.

Routes:

GET "/songs" : 
Just returns an array with all the songs in the list following the format:
[
  {
    "id": 4,
    "title": "Creepin'",
    "artist": "Metro Boomin",
    "album": "HEROES & VILLAINS"
  },
  {
    "id": 5,
    "title": "Love Again",
    "artist": "Alok",
    "album": "Love Again"
  },
  {
    "id": 6,
    "title": "Fair Trade",
    "artist": "Drake",
    "album": "Certified Lover Boy"
  }
]

POST "/songs" : 
Only accepts bodys following the format: {artist:"Artista", title:"Título", album:"Álbum"}.
Saves the song on the song list's database

PUT "/songs/:id" :
Only accepts bodys following the format: {artist:"Artista", title:"Título", album:"Álbum"}.
Updates the information for the song with the id passed as the route parameter

DELETE "/songs" :
Completely wipes all data from database, restarting the song list.

Deployed at: https://poc-ts-t3je.onrender.com

Author:Breno Curvello dos Santos Breves

`Git: https://github.com/brenobreves`
