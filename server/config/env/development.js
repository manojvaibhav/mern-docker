module.exports = {
    mongo:{
        'dbName': process.env.MONGO_DB || 'sampleapp',
        'dbHost': process.env.MONGO_HOSTNAME || 'localhost',
        'dbPort': process.env.MONGO_PORT || '27017'
    }
}