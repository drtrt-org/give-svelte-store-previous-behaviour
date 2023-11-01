export type SubscriberWithPrevious<T> = (value: T, previousValue: T | undefined) => void;
