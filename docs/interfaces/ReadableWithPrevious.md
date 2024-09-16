[**@drtrt/give-svelte-store-previous-behaviour**](../README.md) • **Docs**

***

[@drtrt/give-svelte-store-previous-behaviour](../README.md) / ReadableWithPrevious

# Interface: ReadableWithPrevious\<T\>

## Extends

- `Readable`\<`T`\>

## Extended by

- [`WritableWithPrevious`](WritableWithPrevious.md)

## Type Parameters

• **T**

## Properties

### previousValueStore

> **previousValueStore**: `Readable`\<`undefined` \| `T`\>

#### Defined in

[src/ReadableWithPrevious.ts:11](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/ba934e342f7ffcd038fc087ff66024dd780ae430/src/ReadableWithPrevious.ts#L11)

***

### subscribe()

> **subscribe**: (`this`, `run`, `invalidate`?) => `Unsubscriber`

Subscribe on value changes.

#### Parameters

• **this**: `void`

• **run**: [`SubscriberWithPrevious`](../type-aliases/SubscriberWithPrevious.md)\<`T`\>

subscription callback

• **invalidate?**: `Invalidator`\<`T`\>

cleanup callback

#### Returns

`Unsubscriber`

#### Overrides

`Readable.subscribe`

#### Defined in

[src/ReadableWithPrevious.ts:6](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/ba934e342f7ffcd038fc087ff66024dd780ae430/src/ReadableWithPrevious.ts#L6)
