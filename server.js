var PORT = 1200;
var SERVER_IP = "192.168.122.1"

console.log( currentTime() );


var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
	console.log('client connected');
	c.on('end', function() {
		console.log('client disconnected');
	});
	c.on('data', function(data) {
		var str = data.toString();
		console.log('client str=' + str);

		if(str == "what time is it?\r\n") c.write(currentTime() + '\r\n');

	});
	
});
server.listen(PORT, SERVER_IP, function() { //'listening' listener
	console.log('server bound to ' + SERVER_IP + ":" + PORT);
});

function currentTime() {
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var hundreds = Math.floor(d.getMilliseconds() / 10);

	console.log("hours=" + hours + " minutes=" + minutes + " seconds=" + seconds + " hundreds=" + hundreds);

	return z(hours) + ":" + z(minutes) + ":" + z(seconds) + "." + z(hundreds); 

	function z(n) {
		var str = n.toString();
		//console.log("z: n=" + n + " len " + str.length);
		if(str.length == 1) {
			return "0" + str;
		}
		return str;
	}
}



