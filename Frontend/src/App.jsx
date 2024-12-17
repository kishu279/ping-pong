import { useEffect, useRef, useState } from "react";

export default function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function onHandleClick() {
    if (!socket) {
      return;
    }

    const mssg = inputRef.current.value;

    socket.send(mssg);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);

  return (
    <>
      <div>
        <input type="message" ref={inputRef} placeholder="mssg..." />
        <button onClick={onHandleClick}>send</button>
      </div>
    </>
  );
}
