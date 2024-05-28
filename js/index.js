
var btn = document.getElementById('btn');
var quote = document.getElementById("quote");



var qouteList = ["The only way to do great work is to love what you do. - Steve Jobs",

"Innovation distinguishes between a leader and a follower. - Steve Jobs",

"Don't be afraid to give up the good to go for the great. - John D. Rockefeller",

"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",

"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"];

var lastQuoteIndex = -1;
function generateRandomQoute(){
    var index;
   for(var i = 0; i < 10; i++) {
     index = Math.ceil(Math.random() * qouteList.length);
    if (index !== lastQuoteIndex) { 
        lastQuoteIndex = index; 
        quote.textContent = qouteList[index];
        break;
   }
}    
}