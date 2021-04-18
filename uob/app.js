const dropdown = document.querySelector('.dropdown');


// Open the Menu
dropdown.addEventListener('click', function() {
    document.getElementById('myDropdown').classList.toggle('show');
});


// Close the Menu
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
};

