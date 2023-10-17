import io from 'socket.io-client';

const socket = io("http://192.168.76.127:4000");

export default socket;