# node-mysql-requery
The crutch-function to start query again, if mysql returns an error. It's very useful and innovation

Example:
```javascript
query_perhaps_error('SELECT * FROM `tradeoffers1` WHERE `stat` = 0 LIMIT 1', function (results) {
    console.log(results);
});
```

Function source:
```javascript
function query_perhaps_error(query, callback) {
    connection.query(query, function (error, results) {
        if (error) {
            console.log(error);
            setTimeout(function () {
                console.log(query);
                query_perhaps_error(query);
            }, 1000);
        } else {
            callback(0, results);
        }
    });
}
```
