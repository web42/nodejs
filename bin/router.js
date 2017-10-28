function route(handle, pathname, response) {
    console.log("route for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    }
    else {
        console.log("404 NOT FOUND");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write('404 not found');
        response.end()
    }
}

exports.route = route;