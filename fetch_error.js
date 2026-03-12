const http = require('http');
const fs = require('fs');

http.get('http://localhost:3000', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        fs.writeFileSync('error_dump.html', data);
        console.log('Done writing error_dump.html');
    });
}).on('error', (err) => {
    console.error(err);
});
