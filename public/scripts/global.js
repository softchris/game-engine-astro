document.addEventListener("DOMContentLoaded", function() {
    console.log("Global script loaded!");
});

if (typeof subscribers === 'undefined') {
    var subscribers = {};
}

function log(topic) {
    console.log(topic);
}

function subscribe(topic, fn) {
    if (!subscribers[topic]) {
        subscribers[topic] = [];
    }
    subscribers[topic].push(fn);
}

function publish(topic, data) {
    console.log("publishing", topic, data);

    if (!subscribers[topic]) {
        return;
    }
    subscribers[topic].forEach(fn => fn(data));
}