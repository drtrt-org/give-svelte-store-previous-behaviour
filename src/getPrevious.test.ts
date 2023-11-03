import { type Writable, derived, get, writable } from "svelte/store";
import { expect, describe, it, beforeEach } from "vitest";

import { getPrevious } from "./getPrevious";
import { giveSvelteStorePreviousBehaviour } from "./giveSvelteStorePreviousBehaviour";
import { type ReadableWithPrevious } from "./ReadableWithPrevious";
import { type WritableWithPrevious } from "./WritableWithPrevious";

describe("getPrevious", () => {
    const firstValue = Symbol("firstValue");
    const secondValue = Symbol("secondValue");

    describe("using a WritableWithPrevious", () => {
        let writableWithPrevious: WritableWithPrevious<symbol>;

        beforeEach(() => {
            writableWithPrevious = giveSvelteStorePreviousBehaviour(writable(firstValue));
        });

        describe("initialised with a value", () => {
            it("`getPrevious` should return undefined", () => {
                expect(getPrevious(writableWithPrevious)).toBeUndefined();
            });

            it("`get` should return the value with which the store was initialised", () => {
                expect(get(writableWithPrevious)).toBe(firstValue);
            });
        });

        describe("initialised with one value and then set with a new value", () => {
            beforeEach(() => {
                writableWithPrevious.set(secondValue);
            });

            it("`getPrevious` should return the value with which the store was initialised", () => {
                expect(getPrevious(writableWithPrevious)).toBe(firstValue);
            });

            it("`get` should return the value to which the store was set", () => {
                expect(get(writableWithPrevious)).toBe(secondValue);
            });
        });
    });

    describe("using a ReadableWithPrevious", () => {
        let writableStore: Writable<symbol>;
        let derivedStore;
        let readableWithPrevious: ReadableWithPrevious<symbol>;

        beforeEach(() => {
            writableStore = writable(firstValue);
            derivedStore = derived(writableStore, (x) => x);
            readableWithPrevious = giveSvelteStorePreviousBehaviour(derivedStore);
        });

        describe("initialised with a value", () => {
            it("`getPrevious` should return undefined", () => {
                expect(getPrevious(readableWithPrevious)).toBeUndefined();
            });

            it("`get` should return the value with which the store was initialised", () => {
                expect(get(readableWithPrevious)).toBe(firstValue);
            });
        });

        describe("initialised with one value and then set with a new value (via the writable from which it was derived)", () => {
            beforeEach(() => {
                writableStore.set(secondValue);
            });

            it("`getPrevious` should return the value with which the store was initialised", () => {
                expect(getPrevious(readableWithPrevious)).toBe(firstValue);
            });

            it("`get` should return the value to which the store was set", () => {
                expect(get(readableWithPrevious)).toBe(secondValue);
            });
        });
    });

    describe("using a 'normal' store", () => {
        const writableStore = writable(Symbol("storeValue"));

        it("`getPrevious` should return undefined", () => {
            // TypeScript tells us not to do this, but we want to test it
            // anyway, for those who ignore or don't see type errors.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(getPrevious(writableStore)).toBeUndefined();
        });
    });
});
