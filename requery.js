function requery(query, callback) {
    connection.query(query, function (error, results, fields) {
        if (error) {
            setTimeout(function () {
                requery(query);
            }, 1000);
        } else {
            callback(results);
        }
    });
}
