/*
 * Prices
 */

 $(document).ready(function() {

   $.ajax({
      url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,DASH,DOGE,BCN,VIA&tsyms=USD',
      data: {
         format: 'json'
      },
      error: function(result) {
         console.log(result);
      },
      success: function(result) {
        for(var data in result) {
          var name = data;
          $('.' + name + '_price').prepend(result[name].USD);
        }
      },
      type: 'GET'
   });

 });

 function lastTwoLetter(string) {
   var result = string.slice(-2);
   return result;
 }
