var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'article one of Meena',
    heading: 'articleOne',
    date: 'aug 19, 2017',
    content: `  <p>
            This is my first article.
This is my first article.This is my first article.This is my first article.This is my first article.        </p>

<p>
            This is my first article.
This is my first article.This is my first article.This is my first article.This is my first article.        </p>

<p>
            This is my first article.
This is my first article.This is my first article.This is my first article.This is my first article.        </p>`
},
'article-two': { 
    title: 'article two of Meena',
    heading: 'articletwo',
    date: 'aug 19, 2017',
    content: `  <p>
            This is my second article.  </p>`

},
    'article-three': {
        title: 'article three of Meena',
    heading: 'articlethree',
    date: 'aug 19, 2017',
    content: `  <p>
            This is my third article.  </p>`
},  
        
    };

function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
    
var htmlTemplate =`
{
    <html>
<head>
    <title>
        ${title}
    </title>
    <link href="/ui/style.css" rel="stylesheet" />
</head>
 
<body>
    <div class="container">
        
        <div>
   
        <a href='/'>Home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>    
    ${date}
    </div>
    <div>
    ${content}
    </div>
     </div>
</body>
</html>
`;
return htmlTemplate;  
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.send(createTemplate(article-one));
});

app.get('/ui/style.css', function (req, res) {
  res.send(createTemplate(article-two));
});

app.get('/ui/style.css', function (req, res) {
  res.send(createTemplate(article-three));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
