var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(require('connect-livereload')());

app.get('/', function (request, response) {
    response.sendfile('public/index.html');
});

app.get('/api/sample', function(request, response){
    response.send({name:"Ravi"});
});

app.get('/api/achievements/:type', function(request, response) {
    var achievements=[
        {
            title:'Approved as SitePoint author',
            type:'notable'
        },
        {
            title:'Approved as DotnetCurry author',
            type:'notable'
        },
        {
            title:'Mention on ASP.NET',
            type:'moderate'
        },
        {
            title:'First article published on SitePoint',
            type:'moderate'
        },
        {
            title:'Got a side project',
            type:'minor'
        },
        {
            title:'Boss patted me for my work',
            type:'minor'
        }
    ];
    
    response.send(_.filter(achievements, function(a){
        return a.type === request.params.type;
    }));
});

app.listen(8000, function () {
    console.log('Express server started!!!');
});
