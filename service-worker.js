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
  
  var options = {
    body: "Service worker in progress",
    vibrate: [200, 100, 200, 100, 200, 100, 400],
    tag: "request",
    actions: [
      { action: "close", title: "Close"}
    ]
  };
  
  if ('actions' in Notification.prototype) {
    // Action buttons are supported.
  } else {
    // Action buttons are NOT supported.
  }
  
  self.registration.showNotification("Install in progress", options);
});

self.addEventListener('push', function(event) {
  console.log("Push event");
  console.debug(event);
  
  const showNotificationPromise = self.registration.showNotification('Hello, World.');
  event.waitUntil(showNotificationPromise);
});

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ');
  
  console.debug(event);
  
  // Android doesn’t close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();
});
