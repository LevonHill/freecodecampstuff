<!-- @format -->

🔥 Must-Know JavaScript Native Methods
🧱 Arrays
| Method | Purpose | Example |
| ------------- | ------------------------------------- | ------------------------------- |
| `.push()` | Add to end | `arr.push(4)` |
| `.pop()` | Remove from end | `arr.pop()` |
| `.shift()` | Remove from start | `arr.shift()` |
| `.unshift()` | Add to start | `arr.unshift(1)` |
| `.slice()` | Copy part of array (non-destructive) | `arr.slice(1, 3)` |
| `.splice()` | Add/remove at any index (destructive) | `arr.splice(2, 1)` |
| `.concat()` | Merge arrays | `arr1.concat(arr2)` |
| `.join()` | Array to string | `['a','b'].join('-')` → `"a-b"` |
| `.includes()` | Check if value exists | `arr.includes(3)` |
| `.indexOf()` | First match index | `arr.indexOf('x')` |
| `.find()` | Find 1st match by condition | `arr.find(x => x > 5)` |
| `.filter()` | Filter by condition | `arr.filter(x => x !== 0)` |
| `.map()` | Transform every item | `arr.map(x => x * 2)` |
| `.reduce()` | Combine all items into one | `arr.reduce((a, b) => a + b)` |
| `.every()` | All items pass a test? | `arr.every(x => x > 0)` |
| `.some()` | Any item passes a test? | `arr.some(x => x < 0)` |
| `.reverse()` | Reverse array in-place | `arr.reverse()` |
| `.sort()` | Sort items | `arr.sort((a, b) => a - b)` |

🧵 Strings
| Method | Purpose | Example |
| ---------------- | ----------------------------- | ------------------------------------ |
| `.toLowerCase()` | Lowercase string | `"HELLO".toLowerCase()` |
| `.toUpperCase()` | Uppercase string | `"hello".toUpperCase()` |
| `.includes()` | Check if substring exists | `"fox".includes("x")` |
| `.startsWith()` | Check if string starts with | `"abc".startsWith("a")` |
| `.endsWith()` | Check if string ends with | `"abc".endsWith("c")` |
| `.split()` | String to array | `"a,b,c".split(",")` |
| `.trim()` | Remove whitespace | `"  a  ".trim()` |
| `.replace()` | Replace first match | `"foo".replace("o", "x")` |
| `.replaceAll()` | Replace all matches (ES2021+) | `"foofoo".replaceAll("o", "x")` |
| `.charAt()` | Get character at index | `"dog".charAt(1)` → `"o"` |
| `.substring()` | Slice between indexes | `"abcdef".substring(1, 4)` → `"bcd"` |

📦 Objects
| Method | Purpose | Example |
| ------------------ | ----------------------------- | ------------------------------- |
| `Object.keys()` | Array of keys | `Object.keys(obj)` |
| `Object.values()` | Array of values | `Object.values(obj)` |
| `Object.entries()` | Array of `[key, value]` pairs | `Object.entries(obj)` |
| `Object.assign()` | Merge/clone objects | `Object.assign({}, obj1, obj2)` |
| `JSON.stringify()` | Object → JSON string | `JSON.stringify(obj)` |
| `JSON.parse()` | JSON string → object | `JSON.parse('{"a":1}')` |

💡 Advanced (but powerful)

| Method            | Purpose                    | Example                               |
| ----------------- | -------------------------- | ------------------------------------- |
| `.flat()`         | Flatten nested arrays      | `[1, [2, [3]]].flat(2)` → `[1, 2, 3]` |
| `.flatMap()`      | Map + flatten              | `arr.flatMap(x => [x, x * 2])`        |
| `.from()`         | Make array from iterable   | `Array.from('abc')` → `['a','b','c']` |
| `Array.isArray()` | Check if value is an array | `Array.isArray([])` → `true`          |

🔧 Pro Tips
Don’t memorize — build something, look up methods as needed, and they’ll stick.

Bookmark: MDN Web Docs - JS Reference

//master this below

JavaScript Higher-Order Methods → Underlying DSA + Algorithm

| **Higher-Order Method** | **What It Does**                                              | **Underlying DSA** | **Underlying Algorithm**                                  | **Time Complexity**                   |
| ----------------------- | ------------------------------------------------------------- | ------------------ | --------------------------------------------------------- | ------------------------------------- |
| `.map()`                | Transforms each element into something new, returns new array | Array              | Simple iteration (linear traversal)                       | **O(n)**                              |
| `.filter()`             | Keeps only elements that pass a condition                     | Array              | Linear traversal with conditional check                   | **O(n)**                              |
| `.reduce()`             | Accumulates values into a single result                       | Array              | Linear traversal, applying callback each step             | **O(n)**                              |
| `.forEach()`            | Runs a function for each element (no return)                  | Array              | Linear traversal                                          | **O(n)**                              |
| `.find()`               | Returns the first element matching a condition                | Array              | Linear search                                             | **O(n)** worst, **O(1)** best         |
| `.findIndex()`          | Returns index of first match                                  | Array              | Linear search                                             | **O(n)** worst                        |
| `.some()`               | Checks if at least one matches                                | Array              | Linear search with early exit                             | **O(n)** worst                        |
| `.every()`              | Checks if all match                                           | Array              | Linear search with early exit                             | **O(n)** worst                        |
| `.sort()`               | Sorts array in place                                          | Array              | **Timsort** (hybrid of merge sort & insertion sort in V8) | **O(n log n)** average, **O(n)** best |
| `.flat()`               | Flattens nested arrays                                        | Array              | Recursion + linear traversal                              | **O(n)** for flat depth               |
| `.flatMap()`            | Maps & flattens one level deep                                | Array              | Linear traversal + concatenation                          | **O(n)**                              |
