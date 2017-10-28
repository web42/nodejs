var exec = require('child_process').exec;

function htmlTemplate(responseCode, response, data) {
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        data +
        '</body>'+
        '</html>';

    response.writeHead(responseCode, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}


function start(response) {

    /*
    function sleep(milliseconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliseconds);
    }
    sleep(10000);

    */
    exec('find "dgffffffc"',{ timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
        var data= 'data: '+ stdout+" \n Ошибка: "+error;
        htmlTemplate(200,response, data);
    });

    console.log('start module');
}

function upload(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log('Upload module');
    response.write('Upload module init');
    response.end();
}

exports.start = start;
exports.upload = upload;