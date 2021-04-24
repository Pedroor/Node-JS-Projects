import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => console.log("SERVER is running on port 3333"));
