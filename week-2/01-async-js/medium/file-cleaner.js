var fs = require('fs');

fs.readFile('./a.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        var cleanedData = data.replace(/\s+/g, ' ');
        fs.writeFile('./a.txt', cleanedData, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('File cleaned successfully');
            }
        });
    }           
});