import { useState, KeyboardEvent, ChangeEvent } from "react";
import useSockets from "../../hooks/useSockets";

export default function Chat() {
  const [currentValue, setCurrentValue] = useState("");
  const [serverMessages, setServerMessages] = useState<string[]>([]);

  const handleServerMessage = (message: string) => {
    setServerMessages((mess) => [...mess, message]);
  };

  const { socket } = useSockets(handleServerMessage);

  if (!socket) {
    return <div>Loading...</div>;
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
