import { writable } from "svelte/store";
import { expect, describe, it, beforeEach } from "vitest";

import { giveSvelteStorePreviousBehaviour } from "./giveSvelteStorePreviousBehaviour";
import { WritableWithPrevious } from "./WritableWithPrevious";

describe("giveSvelteStorePreviousBehaviour", () => {
    describe("Unaltered store functions", () => {
        const writableStore = writable(Symbol("storeValue"));
        const writableWithPrevious = giveSvelteStorePreviousBehaviour(writableStore);

        it("should pass `set` function through unaltered", () => {
            expect(writableStore.set).toBe(writableWithPrevious.set);
        });

        it("should pass `update` function through unaltered", () => {
            expect(writableStore.update).toBe(writableWithPrevious.update);
        });
    });

    describe("`subscribe` function", () => {
        const firstValue = Symbol("firstValue");
        const secondValue = Symbol("secondValue");

        let writableWithPrevious: WritableWithPrevious<symbol>;
        let current: symbol;
        let previous: symbol | undefined;

        beforeEach(() => {
            writableWithPrevious = giveSvelteStorePreviousBehaviour(writable(firstValue));
        });

        describe("store initialised with a value", () => {
            it("`subscribe` should handle a function with `currentValue` and `previousValue` params", () => {
                writableWithPrevious.subscribe((currentValue, previousValue) => {
                    current = currentValue;
                    previous = previousValue;
                });
            });

            it("of which `currentValue` should be the value the store was initialised with", () => {
                expect(current).toBe(firstValue);
            });

            it("and `previousValue` should be undefined", () => {
                expect(previous).toBe(undefined);
            });
        });

        describe("store initialised with a value and then `set` to a new value", () => {
            beforeEach(() => {
                writableWithPrevious.set(secondValue);
            });

            it("`subscribe` should handle a function with `currentValue` and `previousValue` params", () => {
                writableWithPrevious.subscribe((currentValue, previousValue) => {
                    current = currentValue;
                    previous = previousValue;
                });
            });

            it("of which `previousValue` should be the value the store was initialised with", () => {
                expect(previous).toBe(firstValue);
            });

            it("and `currentValue` should be the value the store was `set` to", () => {
                expect(current).toBe(secondValue);
            });
        });
    });
});
