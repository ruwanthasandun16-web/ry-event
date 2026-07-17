const CACHE_NAME =
"ry-event-v1";



const files = [


"home.html",

"home.css",

"home.js",


"events.html",

"events.css",

"events.js",


"login.html",

"login.css",

"login.js",


"register.html",

"register.css",

"register.js",


"profile.html",

"profile.css",

"profile.js"


];





self.addEventListener(

"install",

event=>{


event.waitUntil(


caches.open(
CACHE_NAME
)

.then(cache=>{


return cache.addAll(files);


})


);


}

);







self.addEventListener(

"fetch",

event=>{


event.respondWith(


caches.match(
event.request

)

.then(response=>{


return response ||

fetch(event.request);


})


);


}

);