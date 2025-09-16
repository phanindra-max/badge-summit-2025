// Submenu toggle
window.addEventListener('load', function() {
 // Select all menu items that have a submenu
 var hasSubmenu = document.querySelectorAll('.filters__item.has-filter .filters__title');

 // Add click event listener to each menu item that has a submenu
 hasSubmenu.forEach(function(link) {
   link.addEventListener('click', function(event) {
     // Prevent the default link behavior to ensure submenu toggles without navigating
     event.preventDefault();
     
     // Select the parent item of the clicked link
     var parentItem = this.parentNode;
     
     // Toggle the 'opened' class on the parent item to show or hide the submenu
     parentItem.classList.toggle('opened');
     
     // Ensure other submenus are closed by removing their 'opened' class
     // This part keeps the UI clean by ensuring only one submenu can be open at a time
     hasSubmenu.forEach(function(otherLink) {
       var otherParentItem = otherLink.parentNode;
       if (otherParentItem !== parentItem) {
         otherParentItem.classList.remove('opened');
       }
     });
   });
 });
});