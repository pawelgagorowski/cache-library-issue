const docClient = require('./index');


const doIt = async () => {
  var params = {
     TableName: "some table",
     Key: {
         name: "some item"
     }
 };
   try {
     const data = await docClient.get(params).promise();
     return data
   } catch (err) {
     console.log(err)
   }
}

module.exports = {
  doIt
}
