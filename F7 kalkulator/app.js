import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.myapp', // App bundle ID
  name: 'test', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
 

$$(document).on("page:init",'.page[data-name="about"]',function(e){
  $$('#przycisk').on('click', () => {      
    console.log("KLIK")
    myFunction();
  });


  $$('#dodawanie_przycisk').on('click', () => {      
    console.log("KLIK")
    dodawanie();
  });


  $$('#odejmowanie_przycisk').on('click', () => {      
    console.log("KLIK")
    odejmowanie();
  });

  $$('#mnozenie_przycisk').on('click', () => {      
    console.log("KLIK")
    mnozenie();
  });

  $$('#dzielenie_przycisk').on('click', () => {      
    console.log("KLIK")
    dzielenie();
  });
});


function dodawanie()
{
 var dodawanie_pola_1=document.getElementById("pole1").value;
 var dodawanie_pola_2=document.getElementById("pole2").value;
 var dodawanie=0;
dodawanie=Number(dodawanie_pola_1)+Number(dodawanie_pola_2);
document.getElementById("koniec").innerHTML="Wynik:"+dodawanie;
}
 
 function odejmowanie()
{
var odejmowani_pola_1=document.getElementById("pole1").value;
var odejmowani_pola_2=document.getElementById("pole2").value;
var odejmowanie=0;
odejmowanie=odejmowani_pola_1-odejmowani_pola_2;
document.getElementById("koniec").innerHTML="Wynik:"+odejmowanie;
}
  
function mnozenie()
{
var mnozenie_pola_1=document.getElementById("pole1").value;
var mnozenie_pola_2=document.getElementById("pole2").value;
var mnozenies=0;
var mnozenie=mnozenie_pola_1*mnozenie_pola_2;
 
document.getElementById("koniec").innerHTML=mnozenie;
}
  
 function dzielenie()
{
var dzielenie_pola_1=document.getElementById("pole1").value;
var dzielenie_pola_2=document.getElementById("pole2").value;
var dzielenie=0;
  
if (dzielenie_pola_2==0)
{
document.getElementById("koniec").innerHTML="Nie dzieli się przez 0!";
}
else
{
dzielenie=dzielenie_pola_1/dzielenie_pola_2;
document.getElementById("koniec").innerHTML=dzielenie;
}
}
  