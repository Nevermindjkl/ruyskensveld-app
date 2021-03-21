// COPYRIGHT EMBED 
//  .d8b.  db    db d88888b db      d888888b d8b   db d88888b 
// d8' `8b 88    88 88'     88        `88'   888o  88 88'     
// 88ooo88 Y8    8P 88ooooo 88         88    88V8o 88 88ooooo 
// 88~~~88 `8b  d8' 88~~~~~ 88         88    88 V8o88 88~~~~~ 
// 88   88  `8bd8'  88.     88booo.   .88.   88  V888 88.     
// YP   YP    YP    Y88888P Y88888P Y888888P VP   V8P Y88888P 
                                                           
                                                           
// Did you know you can get payed for reading someones code? 

// Our website is created with Bulma.io and OneProfile but nev_ermind has put a lot of work into
// creating and coding the whole system ❤. Can you not copy or modify our code :) thanks
//
// Website hosted by glitch.me & glitch.com
//

var Express = require('express');
var Axios = require('axios');
var BodyParser = require('body-parser');
var App = Express();





App.use(BodyParser.urlencoded({extended: false}));
App.use(BodyParser.json()); 
App.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
});

// General Landing pages

App.get('/', (Request, Response) => {

  Response.sendFile( __dirname + '/views/index.html');
});

App.get('/status', (Request, Response) => {
});

App.get('/events', (Request, Response) => {
  Response.sendFile( __dirname + '/views/pages/events.html');
});

App.get('/team', (Request, Response) => {
  Response.sendFile( __dirname + '/views/pages/team.html');
});

App.get('/leaderboard', (Request, Response) => {
  Response.sendFile( __dirname + '/views/pages/leaderboard.html');
});

App.get('/smartschool', (Request, Response) => {
  Response.sendFile( __dirname + '/views/pages/smartschool.html');
});



App.get('/contact', (Request, Response) => {
});

App.get('/invite', (Request, Response) => {
});

App.get('/partners', (Request, Response) => {
});

App.get('/cookies', (Request, Response) => {
});

App.get('/terms', (Request, Response) => {
});

App.get('/privacy', (Request, Response) => {
});

// Our discord servers

App.get('/aveline', (Request, Response) => {
});

App.get('/app/aveline-partners', (Request, Response) => {
});

App.get('/app/aveline-development', (Request, Response) => {
});

// Partners


App.get('/little-wonders', (Request, Response) => {
});

App.get('/kauso', (Request, Response) => {
});

App.get('/maple', (Request, Response) => {
});

App.get('/bristo', (Request, Response) => {
});

App.get('/levante', (Request, Response) => {
 Response.sendFile( __dirname + '/views/partners/discord/levante.html');
});

App.get('/partners/maple/about', (Request, Response) => {
  Response.sendFile( __dirname + '/views/partners/maple.html');
});

App.get('/partners/bristo/about', (Request, Response) => {
  Response.sendFile( __dirname + '/views/partners/bristo.html');
});

App.get('/partners/levante/about', (Request, Response) => {
  Response.sendFile( __dirname + '/views/partners/levante.html');
});

// Authentication pages

App.get('/login', (Request, Response) => {
Response.sendFile( __dirname + '/views/authenticate/login.html');
});

App.get('/activate', (Request, Response) => {
Response.sendFile( __dirname + '/views/authenticate/activate.html');
});

App.get('/signup', (Request, Response) => {
Response.sendFile( __dirname + '/views/authenticate/signup.html');
});

App.get('/login/auth/:key/:discordid', (Request, Response) => {
});

App.get('/auth/:key', (Request, Response) => {
});

App.get('/sign-up/:key', (Request, Response) => {
});




// App pages

App.get('/app', (Request, Response) => {
  Response.sendFile( __dirname + '/views/app/app.html');
});

App.get('/app-welcome', (Request, Response) => {
});

App.get('/app/staff', (Request, Response) => {
});

// API pages

App.get('/api/doc/', (Request, Response) => {
});



// Static public
App.use(Express.static( __dirname+ '/public/'));
module.exports = App;
