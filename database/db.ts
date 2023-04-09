import mongoose from 'mongoose';

/**
 * 00 - disconnected
 * 01 - connected
 * 02 - connecting
 * 03 - disconnecting
 */

const mongoConnection = {
    isConnected: 0
}

export const connect = async() => {
    if( mongoConnection.isConnected ){
        console.log('Connected')
        return;
    }

    if( mongoose.connections.length > 0 ){
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if( mongoConnection.isConnected === 1 ){
            console.log('Using last connection');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect( process.env.MONGO_URL || '' );
    mongoConnection.isConnected = 1;
    console.log('Connected on MongoDB', process.env.MONGO_URL)
}

export const disconnect = async() => {

    if( process.env.NODE_ENV === 'development' ) return;

    if( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();

    mongoConnection.isConnected = 0;

    console.log('Disconnected from MongoDB');
}