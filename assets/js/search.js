$(window).on('load', getQueryVariable('q'));

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
  
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] === variable) {
        return function() {
            var q = pair[1].replace(/\+/g, " ");
            $('#lunrsearch').val(q);
            $('#lunrsearch_btn').submit();
        }
      }
    }
  }




// var queryParser = function (a) {
//     var i, p, b = {};
//     if (a === "") {
//         return {};
//     }
//     for (i = 0; i < a.length; i += 1) {
//         p = a[i].split('=');
//         if (p.length === 2) {
//             b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
//         }
//     }
//     return b;
// }
// $.queryParams = function () {
//     return queryParser(window.location.search.substring(1).split('&'));
// };
// $.hashParams = function () {
//     return queryParser(window.location.hash.substring(1).split('&'));
// };