import EventEmitter from "events";

const _emitter = new EventEmitter();
//không giới hạn số lần nghe
_emitter.setMaxListeners(0);
export const emitter = _emitter;
