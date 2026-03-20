function sidebar() {
  document.querySelectorAll('.sidebar ul').forEach(function (ul) {
    var items = Array.from(ul.children);

    // Fisher-Yates shuffle
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    }

    items.forEach(function (li) {
      ul.appendChild(li);
    });
  });
}

window.addEventListener('load', function () {
  sidebar();
});
