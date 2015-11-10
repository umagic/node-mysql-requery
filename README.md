```javascript
— Omg why did u do it ohhh???
— Because I need to recall query if it returns an error, arrrrr
```


# node-mysql-requery
The crutch-function to start query again, if mysql returns an error. It's very useful and innovation

Works with node-mysql

Example:
```javascript
requery('SELECT * FROM `tradeoffers1` WHERE `stat` = 0 LIMIT 1', function (results) {
    console.log(results);
});
```

Function source:
```javascript
function requery(query, callback) {
    connection.query(query, function (error, results) {
        if (error) {
            console.log(error);
            setTimeout(function () {
                console.log(query);
                requery(query);
            }, 1000);
        } else {
            callback(0, results);
        }
    });
}
```

Function source with the wonderful debug:
```javascript
function requery(query, callback) {
    connection.query(query, function (error, results) {
        if (error) {
            console.log(error);
            setTimeout(function () {
                console.log(query);
                requery(query);
            }, 1000);
        } else {
            callback(0, results);
        }
    });
}
```
