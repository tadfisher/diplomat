// generated by diplomat-tool
import { CyclicStructB } from "./CyclicStructB.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

export class CyclicStructA {

    #a;
    get a()  {
        return this.#a;
    }
    set a(value) {
        this.#a = value;
    }
    constructor() {
        if (arguments.length > 0 && arguments[0] === diplomatRuntime.internalConstructor) {
            this.#fromFFI(...Array.prototype.slice.call(arguments, 1));
        } else {
            
            this.#a = arguments[0];
        }
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return [...this.#a._intoFFI(functionCleanupArena, {})]
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    #fromFFI(ptr) {
        const aDeref = ptr;
        this.#a = new CyclicStructB(diplomatRuntime.internalConstructor, aDeref);
    }

    static getB() {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 1, 1, false);
        
        const result = wasm.CyclicStructA_get_b(diplomatReceive.buffer);
    
        try {
            return new CyclicStructB(diplomatRuntime.internalConstructor, diplomatReceive.buffer);
        }
        
        finally {
            diplomatReceive.free();
        }
    }
}