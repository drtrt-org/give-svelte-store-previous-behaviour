import { derived, type Readable, type Writable } from "svelte/store";

import { type ReadableWithPrevious } from "./ReadableWithPrevious";
import { type SubscriberWithPrevious } from "./SubscriberWithPrevious";
import { type WritableWithPrevious } from "./WritableWithPrevious";

export function giveSvelteStorePreviousBehaviour<T>(store: Writable<T>): WritableWithPrevious<T>;
export function giveSvelteStorePreviousBehaviour<T>(store: Readable<T>): ReadableWithPrevious<T>;

export function giveSvelteStorePreviousBehaviour<T>(
    store: Readable<T> | Writable<T>,
): ReadableWithPrevious<T> | WritableWithPrevious<T> {
    const { subscribe, ...rest } = store;

    const storeValues: { current: undefined | T; previous: undefined | T } = {
        current: undefined,
        previous: undefined,
    };

    subscribe((x) => {
        storeValues.previous = storeValues.current;
        storeValues.current = x;
    });

    let _previousValueStore: Readable<T | undefined>;

    return {
        ...rest,

        subscribe(run: SubscriberWithPrevious<T>) {
            return subscribe((value: T) => {
                run(value, storeValues.previous);
            });
        },

        get previousValueStore() {
            if (!_previousValueStore) {
                _previousValueStore = derived(store, () => storeValues.previous);
            }

            return _previousValueStore;
        },
    };
}
