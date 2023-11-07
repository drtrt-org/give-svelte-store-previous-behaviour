import type { Invalidator, Readable, Unsubscriber, Writable } from "svelte/store";

import { type ReadableWithPrevious } from "./ReadableWithPrevious";
import { type SubscriberWithPrevious } from "./SubscriberWithPrevious";

export interface WritableWithPrevious<T> extends Writable<T>, ReadableWithPrevious<T> {
    subscribe: (
        this: void,
        run: SubscriberWithPrevious<T>,
        invalidate?: Invalidator<T> | undefined,
    ) => Unsubscriber;
    previousValueStore: Readable<T | undefined>;
}
