import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("listening on port : 8080");
  ws.on("error", console.error);

  ws.on("message", (data) => {
    if (data.toString() === "ping") {
      console.log(data.toString());
      ws.send("pong");
      // ws.close();
    }
  });

  ws.send("Hi this side server");
});
