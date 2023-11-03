import type { Invalidator, Readable, Unsubscriber } from "svelte/store";

import { type SubscriberWithPrevious } from "./SubscriberWithPrevious";

export interface ReadableWithPrevious<T> extends Readable<T> {
    subscribe: (
        this: void,
        run: SubscriberWithPrevious<T>,
        invalidate?: Invalidator<T> | undefined,
    ) => Unsubscriber;
    previousValueStore: Readable<T | undefined>;
}
