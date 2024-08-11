var dbConfig ={
    synchronize: false
};


switch (process.env.NODE_ENV){
    case 'development':
        Object.assign(dbConfig,{
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: "root",
            password: "mrityunjaymanas",
            database: 'testdb',
            entites: ['**/*.entity.js']
        });
        break;
    case 'test':
        Object.assign(dbConfig,{
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: "root",
            password: "mrityunjaymanas",
            database: 'testdb',
            entites: ['**/*.entity.js']
        });
        break;
    case 'production':
        break;
    case 'production':
    default:
        throw new Error('unkown Env')
}