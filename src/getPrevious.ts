import { ReadableWithPrevious } from "./index";

export function getPrevious<T>(store: ReadableWithPrevious<T>) {
    let value: T | undefined;

    const unsubscribe = store.subscribe((currentValue: T, previousValue: T | undefined) => {
        value = previousValue;
    });

    unsubscribe();

    return value;
}
