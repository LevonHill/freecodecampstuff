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
