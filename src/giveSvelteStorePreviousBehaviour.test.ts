// eslint-disable-next-line import/no-duplicates
import type * as svelteStore from "svelte/store";
// eslint-disable-next-line import/no-duplicates
import { get, type Readable, writable, derived } from "svelte/store";
import { expect, describe, it, beforeEach, vi, type Mock } from "vitest";

import { giveSvelteStorePreviousBehaviour } from "./giveSvelteStorePreviousBehaviour";
import { type WritableWithPrevious } from "./WritableWithPrevious";

vi.mock("svelte/store", async () => {
    const actual: typeof svelteStore = await vi.importActual("svelte/store");
    return {
        ...actual,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        derived: vi.fn((...args) => (actual.derived as any)(...args)),
    };
});

const derivedSpy = derived as Mock;

describe("store processed with `giveSvelteStorePreviousBehaviour`", () => {
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
                expect(previous).toBeUndefined();
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

    describe("`previousValueStore` property", () => {
        const firstValue = Symbol("firstValue");
        const secondValue = Symbol("secondValue");

        let writableWithPrevious: WritableWithPrevious<symbol>;
        let previousValueStore: Readable<symbol | undefined>;

        describe("`previousValueStore` property accessed immediately", () => {
            beforeEach(() => {
                writableWithPrevious = giveSvelteStorePreviousBehaviour(writable(firstValue));
                ({ previousValueStore } = writableWithPrevious);
            });

            it("should be a 'derived' store", () => {
                expect(previousValueStore).toEqual({ subscribe: expect.any(Function) });
            });

            describe("store initialised with a value", () => {
                it("`previousValueStore` value should be undefined", () => {
                    expect(get(previousValueStore)).toBeUndefined();
                });
            });

            describe("store initialised with a value and then `set` to a new value", () => {
                beforeEach(() => {
                    writableWithPrevious.set(secondValue);
                });

                it("`previousValueStore` value should be the initial value", () => {
                    expect(get(previousValueStore)).toBe(firstValue);
                });
            });
        });

        describe("`previousValueStore` property accessed after parent store has had value changes", () => {
            describe("Store is created with value of one, then given Previous Behaviour and then `set` to value two", () => {
                beforeEach(() => {
                    writableWithPrevious = giveSvelteStorePreviousBehaviour(writable(firstValue));
                    writableWithPrevious.set(secondValue);
                });

                describe("`previousValueStore` is then instantiated", () => {
                    beforeEach(() => {
                        ({ previousValueStore } = writableWithPrevious);
                    });

                    it("`previousValueStore` value should be value one", () => {
                        expect(get(previousValueStore)).toBe(firstValue);
                    });
                });
            });
        });

        describe("Lazy instantiation of `previousValueStore`", () => {
            beforeEach(() => {
                derivedSpy.mockReset();
            });

            describe("Giving store Previous Behaviour", () => {
                beforeEach(() => {
                    writableWithPrevious = giveSvelteStorePreviousBehaviour(writable(firstValue));
                });

                it("should not cause `previousValueStore` to be instantiated", () => {
                    expect(derivedSpy).not.toHaveBeenCalled();
                });
            });

            describe("Getting `previousValueStore` from store with Previous Behaviour", () => {
                beforeEach(() => {
                    ({ previousValueStore } = writableWithPrevious);
                    console.log(previousValueStore);
                });

                it("should cause it to be instantiated", () => {
                    expect(derivedSpy).toHaveBeenCalled();
                });
            });
        });
    });
});
