!function(){"use strict";function e(e,o){return e.classList?e.classList.contains(o):new RegExp("\\b"+o+"\\b").test(e.className)}function o(o,t){o.classList?o.classList.add(t):e(o,t)||(o.className+=" "+t)}function t(e,o){e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("\\b"+o+"\\b","g"),"")}function a(){var a=Math.floor(Math.random()*r.length),n=r[a].quote,c=r[a].character,s=r[a].force;"good"===s?(e(d,"force-bad")&&t(d,"force-bad"),o(d,"force-good")):(e(d,"force-good")&&t(d,"force-good"),o(d,"force-bad")),document.getElementById("quote").innerHTML=n,document.getElementById("character").innerHTML=c}var r=[{quote:"When 900 years old, you reach… Look as good, you will not.",character:"Yoda",force:"good"},{quote:"The Dark Side of the Force is the pathway to many abilities some consider to be… Unnatural.",character:"Senator Palpatine",force:"bad"},{quote:"You don’t know how hard I found it, signing the order to terminate your life",character:"Governor ‘Grand Moff’ Tarkin",force:"good"},{quote:"He’s holding a thermal detonator!",character:"C-3PO",force:"good"},{quote:"I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.",character:"Count Dooku",force:"bad"},{quote:"Great, kid. Don’t get cocky",character:"Han Solo",force:"good"},{quote:"Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.",character:"Darth Vader",force:"bad"},{quote:"You can’t win, Darth. Strike me down, and I will become more powerful than you could possibly imagine.",character:"Obi Wan Kenobi",force:"good"},{quote:"Aren't you a little short for a storm trooper?",character:"Princess Leia",force:"good"},{quote:"Why you stuck-up, half-witted, scruffy-looking nerf-herder!",character:"Princess Leia",force:"good"},{quote:"Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.",character:"Yoda",force:"good"},{quote:"Lando’s not a system he’s a man!",character:"Han Solo",force:"good"},{quote:"These aren’t the droids you’re looking for...",character:"Obi Wan Kenobi",force:"good"}],n=document.getElementById("quoteButton"),c=0,s=document.getElementById("clicker"),d=document.getElementById("saber__light");document.addEventListener("DOMContentLoaded",function(){n.addEventListener("click",function(){a(),0===c&&(s.parentNode.removeChild(s),o(d,"is-animated")),c++})})}();