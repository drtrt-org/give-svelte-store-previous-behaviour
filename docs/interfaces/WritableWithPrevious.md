[@drtrt/give-svelte-store-previous-behaviour](../README.md) / WritableWithPrevious

# Interface: WritableWithPrevious\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Writable`\<`T`\>

- [`ReadableWithPrevious`](ReadableWithPrevious.md)\<`T`\>

  ↳ **`WritableWithPrevious`**

## Table of contents

### Properties

- [previousValueStore](WritableWithPrevious.md#previousvaluestore)
- [subscribe](WritableWithPrevious.md#subscribe)

### Methods

- [set](WritableWithPrevious.md#set)
- [update](WritableWithPrevious.md#update)

## Properties

### previousValueStore

• **previousValueStore**: `Readable`\<`undefined` \| `T`\>

#### Overrides

[ReadableWithPrevious](ReadableWithPrevious.md).[previousValueStore](ReadableWithPrevious.md#previousvaluestore)

#### Defined in

[src/WritableWithPrevious.ts:12](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/e3a2cec/src/WritableWithPrevious.ts#L12)

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

[ReadableWithPrevious](ReadableWithPrevious.md).[subscribe](ReadableWithPrevious.md#subscribe)

#### Defined in

[src/WritableWithPrevious.ts:7](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/e3a2cec/src/WritableWithPrevious.ts#L7)

## Methods

### set

▸ **set**(`this`, `value`): `void`

Set value and inform subscribers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `void` | - |
| `value` | `T` | to set |

#### Returns

`void`

#### Inherited from

Writable.set

#### Defined in

node_modules/svelte/types/index.d.ts:1628

___

### update

▸ **update**(`this`, `updater`): `void`

Update value using callback and inform subscribers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `void` | - |
| `updater` | `Updater`\<`T`\> | callback |

#### Returns

`void`

#### Inherited from

Writable.update

#### Defined in

node_modules/svelte/types/index.d.ts:1634
