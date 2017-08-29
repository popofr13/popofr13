self.addEventListener('install', function(event) {
  console.log("Install event");
  
  console.debug(event);
  
  console.log("Ask notification (new method)");
  return Notification.requestPermission().then(function(permission) { 
    console.debug(permission); 
  });
  
  //askNotificationPermission();  
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

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ');
  
  console.debug(event);
  
  // Android doesn’t close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();
});

function askNotificationPermission() {
  console.log("Ask notification (with promise only)");
  
  console.debug(Notification);
  
  return Notification.requestPermission().then(function(permission) { console.debug(permission); });
  /*
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
  });
  */
}
