import io from 'socket.io-client';

const socket = io("http://192.168.0.5:4000");

export default socket;