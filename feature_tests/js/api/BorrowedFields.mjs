// generated by diplomat-tool
import { Bar } from "./Bar.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

export class BorrowedFields {

    #a;
    get a()  {
        return this.#a;
    }
    set a(value) {
        this.#a = value;
    }

    #b;
    get b()  {
        return this.#b;
    }
    set b(value) {
        this.#b = value;
    }

    #c;
    get c()  {
        return this.#c;
    }
    set c(value) {
        this.#c = value;
    }
    constructor() {
        if (arguments.length > 0 && arguments[0] === diplomatRuntime.internalConstructor) {
            this.#fromFFI(...Array.prototype.slice.call(arguments, 1));
        } else {
            
            this.#a = arguments[0];
            this.#b = arguments[1];
            this.#c = arguments[2];
        }
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant information will be
    // set up here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return [...(appendArrayMap["aAppendArray"].length > 0 ? diplomatRuntime.CleanupArena.createWith(appendArrayMap["aAppendArray"]) : functionCleanupArena).alloc(diplomatRuntime.DiplomatBuf.str16(wasm, this.#a)).splat(), ...(appendArrayMap["aAppendArray"].length > 0 ? diplomatRuntime.CleanupArena.createWith(appendArrayMap["aAppendArray"]) : functionCleanupArena).alloc(diplomatRuntime.DiplomatBuf.str8(wasm, this.#b)).splat(), ...(appendArrayMap["aAppendArray"].length > 0 ? diplomatRuntime.CleanupArena.createWith(appendArrayMap["aAppendArray"]) : functionCleanupArena).alloc(diplomatRuntime.DiplomatBuf.str8(wasm, this.#c)).splat()]
    }

    #fromFFI(ptr, aEdges) {
        const aDeref = ptr;
        this.#a = new diplomatRuntime.DiplomatSliceStr(wasm, aDeref,  "string16", aEdges);
        const bDeref = ptr + 8;
        this.#b = new diplomatRuntime.DiplomatSliceStr(wasm, bDeref,  "string8", aEdges);
        const cDeref = ptr + 16;
        this.#c = new diplomatRuntime.DiplomatSliceStr(wasm, cDeref,  "string8", aEdges);
    }

    // Return all fields corresponding to lifetime `'a` 
    // without handling lifetime dependencies (this is the job of the caller)
    // This is all fields that may be borrowed from if borrowing `'a`,
    // assuming that there are no `'other: a`. bounds. In case of such bounds,
    // the caller should take care to also call _fieldsForLifetimeOther
    get _fieldsForLifetimeA() { 
        return [a, b, c];
    };

    static fromBarAndStrings(bar, dstr16, utf8Str) {
        let functionGarbageCollector = new diplomatRuntime.GarbageCollector();
        const dstr16Slice = [...functionGarbageCollector.alloc(diplomatRuntime.DiplomatBuf.str16(wasm, dstr16)).splat()];
        
        const utf8StrSlice = [...functionGarbageCollector.alloc(diplomatRuntime.DiplomatBuf.str8(wasm, utf8Str)).splat()];
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 24, 4, false);
        
        // This lifetime edge depends on lifetimes 'x
        let xEdges = [bar, dstr16Slice, utf8StrSlice];
        
        const result = wasm.BorrowedFields_from_bar_and_strings(diplomatReceive.buffer, bar.ffiValue, ...dstr16Slice, ...utf8StrSlice);
    
        try {
            return new BorrowedFields(diplomatRuntime.internalConstructor, diplomatReceive.buffer, xEdges);
        }
        
        finally {
            functionGarbageCollector.garbageCollect();
        
            diplomatReceive.free();
        }
    }
}