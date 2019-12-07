const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
 * The 'express.static' middleware provides some services Express can use to
 * serve files from a directory - in this case, the 'public' subdirectory of
 * this project.
 *
 * The 'app.use' function attaches middleware to our Express application, so
 * that when the application is running, it can serve static files. In this
 * case, we mount it over the entire app: any web request that GETs a path that
 * exists in the 'public' directory will be handled by the middleware. The
 * middleware also serves the 'index.html' file in a directory (if it exists)
 * whenever a client requests the directory itself.
 *
 * The 'public' directory for this project, in turn, contains all the HTML,
 * Javascript, and CSS files needed to run a simple chat client connected to
 * this server. Accessing this server's root URL will serve 'public/index.html',
 * which contains our chat client. This gives users an easy way to connect to
 * the server and interact with other users.
 *
 * See also:
 *  - Express: Serving static files in Express
 *    https://expressjs.com/en/starter/static-files.html
 *  - Express: express.static()
 *    https://expressjs.com/en/4x/api.html#express.static
 *  - Express: Using middleware
 *    https://expressjs.com/en/guide/using-middleware.html
 *  - Express: app.use()
 *    https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static('public'));

// this is a single route, in the simplest possible format
// the simplest format is not necessarily the best one.
// this is, right now, an introduction to Callback Hell
// but it is okay for a first-level example
app.get('/api', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  fetch(baseURL)
    .then((res) => res.json())
    .then(res => {
        console.log(value);
        // FILTERING 
        layerGroup.clearLayers();
        if(value) {
          res = res.filter(res => res.fiscalyear === value);
        }
        //mymap.addLayer(layerGroup);
        //return res;
        res.send(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



/*var mymap = L.map('mapid').setView([38.9897, -76.9378], 9);
var layerGroup = L.layerGroup().addTo(mymap);
function myFunction(value) {
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiY29ubm9ybWNkeGMiLCJhIjoiY2sydW5tMHkyMDFpcTNjcXJ2dnowMGc3NSJ9.j9uJ0tNMYUceEPpQez1eDw'
}).addTo(mymap);
  fetch('https://data.princegeorgescountymd.gov/resource/9tsa-iner.json')
  .then(res => res.json())
  .then(res => {
    
    console.log(value);
    // FILTERING 
    layerGroup.clearLayers();
    if(value) {
      res = res.filter(res => res.fiscalyear === value);
    }
    console.log(res);
    for(var i = 0; i < res.length; i++) {
      let coord = res[i].geocoded_column;
      let x = coord.latitude;
      let y = coord.longitude;
      let marker = L.marker([y, x]).addTo(layerGroup);
      marker.bindPopup("<b>Garbage Information</b><br>Organization: "+res[i].organization + "<br/>Garbage Type: " + res[i].type_litter).openPopup();
      //layerGroup.addLayer(marker);
      //console.log(marker);
    }
    //mymap.addLayer(layerGroup);
    return res;
  })
}*/