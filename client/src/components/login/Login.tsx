import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/userSlice/userSlice";

export default function Login() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleEnterKeyPress = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      dispatch(setUsername(input));
    }
  };
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value);
  };

  return (
    <section>
      <div>Choose your username:</div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleEnterKeyPress}
      />
    </section>
  );
}
