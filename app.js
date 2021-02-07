var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=hazaribag&appid=637f5878275d22b9d7627f6870a423fb';

var server=http.createServer(function(request,response){

    var request=require('request');
    request(url,function(err,res,body){
        var data=JSON.parse(body);
			response.write("<html><body><div id='container'>");
			response.write("<h1>"+ 'City-Name :' + data['name'] + "<br>" +"</h1>");
			response.write("<h1>"+ 'Temperature :' + data.main['temp'] + "<br>" + "</h1");
			response.write("<h2>" + 'Sunset-Time :' + new Date(data.sys['sunset']*1000) + "</h2>");
			response.write("</div></body></html>");
			response.end();

    });


//response.write('hi');
//response.end();
}).listen(3000);