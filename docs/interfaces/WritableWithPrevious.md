[**@drtrt/give-svelte-store-previous-behaviour**](../README.md) • **Docs**

***

[@drtrt/give-svelte-store-previous-behaviour](../README.md) / WritableWithPrevious

# Interface: WritableWithPrevious\<T\>

## Extends

- `Writable`\<`T`\>.[`ReadableWithPrevious`](ReadableWithPrevious.md)\<`T`\>

## Type Parameters

• **T**

## Properties

### previousValueStore

> **previousValueStore**: `Readable`\<`undefined` \| `T`\>

#### Overrides

[`ReadableWithPrevious`](ReadableWithPrevious.md).[`previousValueStore`](ReadableWithPrevious.md#previousvaluestore)

#### Defined in

[src/WritableWithPrevious.ts:12](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/ce8fffa2f41148829af1b11f1805e1bfeae3ded0/src/WritableWithPrevious.ts#L12)

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

[`ReadableWithPrevious`](ReadableWithPrevious.md).[`subscribe`](ReadableWithPrevious.md#subscribe)

#### Defined in

[src/WritableWithPrevious.ts:7](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/ce8fffa2f41148829af1b11f1805e1bfeae3ded0/src/WritableWithPrevious.ts#L7)

## Methods

### set()

> **set**(`this`, `value`): `void`

Set value and inform subscribers.

#### Parameters

• **this**: `void`

• **value**: `T`

to set

#### Returns

`void`

#### Inherited from

`Writable.set`

#### Defined in

node\_modules/svelte/types/index.d.ts:1628

***

### update()

> **update**(`this`, `updater`): `void`

Update value using callback and inform subscribers.

#### Parameters

• **this**: `void`

• **updater**: `Updater`\<`T`\>

callback

#### Returns

`void`

#### Inherited from

`Writable.update`

#### Defined in

node\_modules/svelte/types/index.d.ts:1634
