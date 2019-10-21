export const configFile = {
    https: false,
    host: 'localhost',
    port: 3000,
    db: {
        uri: 'mongodb://mongodb:27017/kindra',
    },
    redis: {
        uri: 'redis://redis:6379',
    },
    jwt: {
        secret: 'mySuperSecretPassword!',
    },
};

export type ConfigFile = typeof configFile;

export default configFile;
