import { useEffect, useState } from "react";

function useSockets(handleServerMessage) {
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000");
    socket.addEventListener("open", () => {
      console.log("Connected to server");
    });
    setSocket(socket);
    socket.addEventListener("message", (event: MessageEvent) => {
      handleServerMessage(event.data);
    });
  }, []);

  return { socket };
}

export default useSockets;
