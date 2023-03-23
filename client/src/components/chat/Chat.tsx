import { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";

export default function Chat() {
  const [currentValue, setCurrentValue] = useState("");
  const [socket, setSocket] = useState<WebSocket>();
  const [serverMessages, setServerMessages] = useState<string[]>([]);

  const handleServerMessage = (message: string) => {
    setServerMessages((mess) => [...mess, message]);
  };
  console.log(serverMessages);

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

  if (!socket) {
    return "Loading...";
  }

  const sendMessage = () => {
    socket.send(currentValue);
    setCurrentValue("");
  };

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(ev.target.value);
  };

  const handleEnterKeyPress = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <div>Enter text:</div>
      <input
        type=""
        value={currentValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
      />
      <div>Chat:</div>
      <div>
        {serverMessages.map((message) => (
          <div key={message}>{message}</div>
        ))}
      </div>
    </div>
  );
}
