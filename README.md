# give-svelte-store-previous-behaviour

A wrapper for any Svelte Store instance, giving access to the previously set value in a style that follows familiar Svelte Store semantics.

## It's a wrap

`give-svelte-store-previous-behaviour` does not instantiate a Store. Rather, **_it wraps an existing Store_**, leaving you with full control over how your Store is instantiated. This is important because:

-   You are not prevented from further adding your own augmentations to the Store, either _before_ it has been given Previous Behaviour or _after_.

-   It allows you to apply other wrappers, too, such as `give-svelte-store-persistence-behaviour`.

This philosophy allows for a flexible, compositional approach, as is used in the [core Svelte Store code](https://github.com/sveltejs/svelte/blob/master/packages/svelte/src/runtime/store/index.js) that creates `readable` and `derived` Stores.

## Examples

Once wrapped with Previous Behaviour, a Store gains three extra pieces of functionality. Here is an example of each:

### Using `getPrevious`

Use of `getPrevious` follows the same pattern as Svelte's native Store `get` function:

```JavaScript
import { writable, set, get } from "svelte/store";

import {
    giveSvelteStorePreviousBehaviour,
    getPrevious
} from "@drtrt/give-svelte-store-previous-behaviour";

// Initialise a `writable` store and then wrap it:
const storeWithPrevious =
    giveSvelteStorePreviousBehaviour(
        writable("secondValue")
    );

// Set the store to a new value:
storeWithPrevious.set("firstValue");

// Use `get` to get the current value:
console.log(get(storeWithPrevious));
// Output: firstValue

// Use `getPrevious` to get the previous value:
console.log(getPrevious(storeWithPrevious));
// Output: secondValue
```

Additional points to consider for `getPrevious`:

-   Until the Store's value has changed at least once after initialisation, `getPrevious` will return `undefined`.
-   As [per the guidance](https://svelte.dev/docs/svelte-store#get) for using `get`, one would usually read the Previous Value by subscribing to the Store rather than using `getPrevious`.

### Using `subcribe`

The Store's `subscribe` function will, in addition to its existing `value` parameter, gain an extra `previousValue` param:

```JavaScript
import { writable } from "svelte/store";

import {
    giveSvelteStorePreviousBehaviour
} from "@drtrt/give-svelte-store-previous-behaviour";

// Function imported from an example logging utility
import { logStateChange } from "./logging";

// Initialise a `writable` store and then wrap it:
const storeWithPrevious =
    giveSvelteStorePreviousBehaviour(
        writable("firstValue")
    );

// Use `subscribe` to, for example, log changes to state:
storeWithPrevious.subscribe((value, previousValue) => {
    logStateChange({
        storeName: "storeWithPrevious",
        from: value,
        to: previousValue,
    });
});

// `subscribe` can still be used as normal:
storeWithPrevious.subscribe((value) => {
    console.info(`Store value changed to ${value}`)
});
```

Considerations for using `subscribe`:

-   Until the Store's value has changed at least once after initialisation, the `previousValue` parameter passed to the Subscribe Function will be `undefined`.
-   `subscribe` will also continue to function as normal, in that you can still give it a function that has only the one `value` parameter.

### Using `previousValueStore`

The Store will have an additional `previousValueStore` property that yields a `Readable` store containing the previous value. This is so you can use Reactive Bindings for the Previous Value, too:

```HTML
<script>
    import { writable } from "svelte/store";

	import {
        giveSvelteStorePreviousBehaviour
    } from "@drtrt/give-svelte-store-previous-behaviour";

	// Initialise a `writable` store and then wrap it:
    const booleanStore =
        giveSvelteStorePreviousBehaviour(
            writable(true)
        );

    function flipBoolean() {
        booleanStore.update(x => !x);
    }

    // Get `previousValueStore`
	const { previousValueStore } = booleanStore;
</script>

<div>
	Current Boolean Value is: {$booleanStore}
</div>

<div>
    Previous Boolean Value was: {$previousValueStore}
</div>

<button
	on:click={flipBoolean}>Flip Boolean</button
>
```

Further considerations for using `previousValueStore`:

-   Until the Store's value has changed at least once after initialisation, the value of `previousValueStore` will be `undefined`.
-   `previousValueStore` instantiation is optimized such that it is created when accessed, and not before.
-   `previousValueStore` can be retrieved immediately or at any time; it will still hold the correct Previous Value at the time it is accessed.

## Installation

#### NPM

```sh
npm install @drtrt/give-svelte-store-previous-behaviour
```

#### Yarn

```sh
yarn add @drtrt/give-svelte-store-previous-behaviour
```

And then `giveSvelteStorePreviousBehaviour` can be used thusly:

#### ECMAScript Modules (ESM)

```javascript
import { giveSvelteStorePreviousBehaviour } from "@drtrt/give-svelte-store-previous-behaviour";
```

#### CommonJS (CJS)

```javascript
const { giveSvelteStorePreviousBehaviour } = require("@drtrt/give-svelte-store-previous-behaviour");
```

## Types

A number of types can be imported for use with TypeScript.

Full detail is available in the [dedicated Types documentation](https://github.com/drtrt-org/give-svelte-store-previous-behaviour/blob/main/docs/README.md).

## Questions

### Why did you spell 'behaviour' wrong?

#### **Answer:** I didn't. 😉
