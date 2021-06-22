const { sequalize } = require('sequelize');
//const sequalize = new sequalize('sql://') //connection string
 // const sequalize  = new sequalize('localhost;Database=employeedetails;Integrated Security=SSPI')

 var Connection = require('tedious').Connection;  
 var config = {  
     server: 'your_server.database.windows.net',  
     authentication: {
         type: 'default',
         options: {
             userName: 'Sara-Pc', 
            
         }
     },
     options: {
        
         encrypt: true,
         database: 'iti-3m'  
     }
 };

 var connection = new Connection(config);  
 connection.on('connect', function(err) {  
     console.log("Connected");  
 });
 
 connection.connect();


////////////////
module.exports = sequalize ;