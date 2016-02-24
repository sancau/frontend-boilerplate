(function() {
  var test;

  test = function() {
    alert('Script is working OK');
  };

  document.getElementById('test').addEventListener('click', test);

}).call(this);
