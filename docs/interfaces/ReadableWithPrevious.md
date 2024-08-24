[@drtrt/give-svelte-store-previous-behaviour](../README.md) / ReadableWithPrevious

# Interface: ReadableWithPrevious\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Readable`\<`T`\>

  ↳ **`ReadableWithPrevious`**

  ↳↳ [`WritableWithPrevious`](WritableWithPrevious.md)

## Table of contents

### Properties

- [previousValueStore](ReadableWithPrevious.md#previousvaluestore)
- [subscribe](ReadableWithPrevious.md#subscribe)

## Properties

### previousValueStore

• **previousValueStore**: `Readable`\<`undefined` \| `T`\>

#### Defined in

[src/ReadableWithPrevious.ts:11](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/65b8576/src/ReadableWithPrevious.ts#L11)

___

### subscribe

• **subscribe**: (`this`: `void`, `run`: [`SubscriberWithPrevious`](../README.md#subscriberwithprevious)\<`T`\>, `invalidate?`: `Invalidator`\<`T`\>) => `Unsubscriber`

#### Type declaration

▸ (`this`, `run`, `invalidate?`): `Unsubscriber`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `void` |
| `run` | [`SubscriberWithPrevious`](../README.md#subscriberwithprevious)\<`T`\> |
| `invalidate?` | `Invalidator`\<`T`\> |

##### Returns

`Unsubscriber`

#### Overrides

Readable.subscribe

#### Defined in

[src/ReadableWithPrevious.ts:6](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/65b8576/src/ReadableWithPrevious.ts#L6)
