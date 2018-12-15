var pg = require("pg");

var connectionString =
  "postgres://postgres:password@serverName/127.0.0.1:5432/Letscook";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
var query = pgClient.query("SELECT * from utente where email=");
query.on("row", function(row, result) {
  result.addRow(row);
});
