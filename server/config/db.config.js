import { connection, connect } from 'mongoose';

let url = 'mongodb+srv://Alex:1q6qCyXSQLNbSvrb@cluster0-yqehm.mongodb.net/authSource=admin';

export default (async () => {
    connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'test'
    }).catch((e) => {
        console.log('Database connectivity error ', e)
    })
    const db = connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('connected');
    });
})()