import type { Readable, Writable } from "svelte/store";

import { ReadableWithPrevious } from "./ReadableWithPrevious";
import { SubscriberWithPrevious } from "./SubscriberWithPrevious";
import { WritableWithPrevious } from "./WritableWithPrevious";

export function giveSvelteStorePreviousBehaviour<T>(store: Writable<T>): WritableWithPrevious<T>;
export function giveSvelteStorePreviousBehaviour<T>(store: Readable<T>): ReadableWithPrevious<T>;

export function giveSvelteStorePreviousBehaviour<T>(
    store: Readable<T> | Writable<T>,
): ReadableWithPrevious<T> | WritableWithPrevious<T> {
    const { subscribe: originalSubscribe, ...rest } = store;

    const storeValues: { current: undefined | T; previous: undefined | T } = {
        current: undefined,
        previous: undefined,
    };

    originalSubscribe((x) => {
        storeValues.previous = storeValues.current;
        storeValues.current = x;
    });

    const forReturn = {
        ...rest,
        subscribe(run: SubscriberWithPrevious<T>) {
            return originalSubscribe((value: T) => {
                run(value, storeValues.previous);
            });
        },
    };

    return forReturn;
}
