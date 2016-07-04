module.exports = function(RED) {
    // TODO out connector code
    var http = require('http');



    function x3In(n) {
        RED.nodes.createNode(this,n);
        this.serverName = n.serverName;
        this.serverPort = n.serverPort;

        this.representation = n.representation;
        this.username = n.username;
        this.passwd = n.passwd;
        this.endpoint = n.endpoint;
        var auth = 'Basic ' + new Buffer(this.username + ':' + this.passwd).toString('base64');
        this.url = "/api1/x3/erp/"+this.endpoint+"/"+this.representation;
        var header = {'Host': this.serverName, 'Authorization': auth};

        var client = http.createClient(this.httpPort, this.serverName+"/"); // to access this url i need to put basic auth.
        var request = client.request('GET', this.url, header);
        request.end();
        request.on('response',function(response){
            console.log("test");
        })
    };


    RED.nodes.registerType("X3In", x3In);


    // TODO RED.nodes.registerType("node operation",method);

};
