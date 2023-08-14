import { useState, useEffect } from 'react';
import { io } from "socket.io-client";

function useWebSocket() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(process.env.REACT_APP_WS_URL);
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    return socket;
}

export default useWebSocket;
