self.addEventListener('install', function(event) {
  console.log("Install event");
  
  console.debug(event);
});

self.addEventListener('fetch', function(event) {
  console.log("Fetch event");

  console.debug(event);
});

self.addEventListener('activate', function(event) {
  console.log("Activate event");

  console.debug(event);
});
