import type { Invalidator, Unsubscriber, Writable } from "svelte/store";

import { ReadableWithPrevious } from "./ReadableWithPrevious";
import { SubscriberWithPrevious } from "./SubscriberWithPrevious";

export interface WritableWithPrevious<T> extends Writable<T>, ReadableWithPrevious<T> {
    subscribe: (
        this: void,
        run: SubscriberWithPrevious<T>,
        invalidate?: Invalidator<T> | undefined,
    ) => Unsubscriber;
}
