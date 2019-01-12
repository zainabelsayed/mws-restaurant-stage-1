var cacheName='resturant-review-app-v1';
self.addEventListener('install',function(event){
	event.waitUntil(
		caches.open(cacheName).then(function(cache){
			return cache.addAll([
					'/',
					'/js/restaurant_info.js',
					'/js/main.js',
					'/js/dbhelper.js',
					'/css/styles.css',
					'/data/restaurants.json',
					'/restaurant.html',
					'/index.html',
					'/img/1.jpg',
					'/img/2.jpg',
					'/img/3.jpg',
					'/img/4.jpg',
					'/img/5.jpg',
					'/img/6.jpg',
					'/img/7.jpg',
					'/img/8.jpg',
					'/img/9.jpg',
					'/img/10.jpg'

				]);
		})
		);
})
self.addEventListener('fetch', function(event) {
	
event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
