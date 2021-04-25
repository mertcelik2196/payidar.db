![Image](https://img.shields.io/npm/v/payidar.db?color=%2351F9C0&label=payidar.db) 
![Image](https://img.shields.io/npm/dt/payidar.db.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/payidar.db.png?downloads=true&downloadRank=true&stars=true)
<br>

## Yüklemek İçin
```npm
npm install payidar.db
```

<br>

## Nasıl Kullanılır? 💫

# JS Sql
```js
const Database = require("../lib/index");
const db = new Database.Sql();

// Set data
db.set("Hello", "World");

// Get data
db.get("Hello"); // World
db.fetch("Hello"); // World

// Delete data
db.delete("Hello");

db.get("Hello"); // undefined
db.has("Hello"); // false

db.set("age", 10);
db.add("age", 1); // 11
db.subtract("age", 9); // 2

db.set("array", [ "apple" ]);
db.push("array", "orange"); // [ "apple", "orange" ]

// Clear data
db.deleteAll();

// Get all the data
db.all();
```

