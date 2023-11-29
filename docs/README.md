@drtrt/give-svelte-store-previous-behaviour

# @drtrt/give-svelte-store-previous-behaviour

## Table of contents

### Interfaces

- [ReadableWithPrevious](interfaces/ReadableWithPrevious.md)
- [WritableWithPrevious](interfaces/WritableWithPrevious.md)

### Type Aliases

- [SubscriberWithPrevious](README.md#subscriberwithprevious)

### Functions

- [getPrevious](README.md#getprevious)
- [giveSvelteStorePreviousBehaviour](README.md#givesveltestorepreviousbehaviour)

## Type Aliases

### SubscriberWithPrevious

Ƭ **SubscriberWithPrevious**\<`T`\>: (`value`: `T`, `previousValue`: `T` \| `undefined`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`, `previousValue`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `previousValue` | `T` \| `undefined` |

##### Returns

`void`

#### Defined in

[src/SubscriberWithPrevious.ts:1](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/1c09f07/src/SubscriberWithPrevious.ts#L1)

## Functions

### getPrevious

▸ **getPrevious**\<`T`\>(`store`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`ReadableWithPrevious`](interfaces/ReadableWithPrevious.md)\<`T`\> |

#### Returns

`undefined` \| `T`

#### Defined in

[src/getPrevious.ts:3](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/1c09f07/src/getPrevious.ts#L3)

___

### giveSvelteStorePreviousBehaviour

▸ **giveSvelteStorePreviousBehaviour**\<`T`\>(`store`): [`WritableWithPrevious`](interfaces/WritableWithPrevious.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Writable`\<`T`\> |

#### Returns

[`WritableWithPrevious`](interfaces/WritableWithPrevious.md)\<`T`\>

#### Defined in

[src/giveSvelteStorePreviousBehaviour.ts:7](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/1c09f07/src/giveSvelteStorePreviousBehaviour.ts#L7)

▸ **giveSvelteStorePreviousBehaviour**\<`T`\>(`store`): [`ReadableWithPrevious`](interfaces/ReadableWithPrevious.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Readable`\<`T`\> |

#### Returns

[`ReadableWithPrevious`](interfaces/ReadableWithPrevious.md)\<`T`\>

#### Defined in

[src/giveSvelteStorePreviousBehaviour.ts:8](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/1c09f07/src/giveSvelteStorePreviousBehaviour.ts#L8)
