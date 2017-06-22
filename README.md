


## Pattern MySQL Connection


```js
var MySQL_Connection =  require('pattern-mysql-connection')('localhost', 'root', 'password', 'db_name');

```
```js
  Connection_MySQL.query( `SELECT * FROM table_name`, function(err, results){
  
             if(!err){
               console.log(results);
             }else{
               console.log(err);
              }

         });
               
               
```

## Installation

```bash
$ npm install pattern-mysql-connection --save
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

## License

  [MIT](LICENSE)
