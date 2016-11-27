/* eslint no-var: 0 */
var fetchExample = function fetchExample(id) {
  return fetch("/examples/" + id)
  .then(function(response) {
    return response.text().then(function(txt) {
      return txt;
    });
  })
  .catch(function (err) { 
    console.error(new Error(err));
  });
};

document.addEventListener("DOMContentLoaded", function() {
  fetchExample(1).then(res => console.log(res));
});