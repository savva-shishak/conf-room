import { createStore } from "state-pool";
import * as uuid from "uuid";

export * from "./Window";
export const store = createStore();

store.setState("room", { id: null, currentClientId: uuid.v4(), peers: {}, routerRtpCapabilities: null });
store.setState("user", { peeID: null, name: "Savva" });