const mongo = require('mongoose')
var DB = 'Database_Febrace'
const url = 'mongodb+srv://richard_julia:ATALIBArm_2018@febracecluster.qme6nyb.mongodb.net/' + DB
mongo.connect(url)

module.exports = mongo