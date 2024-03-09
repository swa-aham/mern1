// const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello Soham, god bless you, achieve your goal and be happy');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify(['soham', 'mandaviya']));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...');