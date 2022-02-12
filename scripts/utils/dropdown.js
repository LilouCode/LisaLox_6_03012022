function dropdownOpenClose() {
    document.getElementById("selection").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown__btn')) {
      const dropdowns = document.getElementsByClassName("dropdown__content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }