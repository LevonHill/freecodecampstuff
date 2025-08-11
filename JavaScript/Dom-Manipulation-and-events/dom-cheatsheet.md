<!-- @format -->

Alright, here’s your 1-page DOM Cheat Sheet 📜 — this will cover 95% of the DOM work you’ll do in real-world projects.

| Category                | Method / Property                                 | Description / Usage                          | Example                                                                    |
| ----------------------- | ------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| **document**            | `getElementById("id")`                            | Select single element by ID                  | `document.getElementById("header")`                                        |
|                         | `querySelector(".class")`                         | Select first matching element (CSS selector) | `document.querySelector(".btn")`                                           |
|                         | `querySelectorAll(".class")`                      | Select all matching elements (NodeList)      | `document.querySelectorAll("li")`                                          |
|                         | `createElement("tag")`                            | Create new element                           | `document.createElement("div")`                                            |
|                         | `textContent`                                     | Set or get element text                      | `div.textContent = "Hello"`                                                |
|                         | `innerHTML`                                       | Set or get HTML inside element               | `div.innerHTML = "<strong>Bold</strong>"`                                  |
|                         | `classList.add("class")`                          | Add CSS class                                | `div.classList.add("highlight")`                                           |
|                         | `style.property = value`                          | Set inline styles                            | `div.style.color = "red"`                                                  |
|                         | `appendChild(element)`                            | Add element as child to parent               | `document.body.appendChild(div)`                                           |
|                         | `remove()`                                        | Remove element from DOM                      | `div.remove()`                                                             |
|                         | `parent.removeChild(child)`                       | Remove specific child element                | `parent.removeChild(div)`                                                  |
| **window**              | `innerWidth`                                      | Viewport width in pixels                     | `window.innerWidth`                                                        |
|                         | `innerHeight`                                     | Viewport height in pixels                    | `window.innerHeight`                                                       |
|                         | `addEventListener("event", callback)`             | Listen for browser-level events              | `window.addEventListener("resize", fn)`                                    |
|                         | `setTimeout(callback, ms)`                        | Run function after delay                     | `setTimeout(() => alert("Hi"), 1000)`                                      |
|                         | `setInterval(callback, ms)`                       | Run function repeatedly every interval       | `setInterval(() => console.log("Tick"), 1000)`                             |
|                         | `alert(message)`                                  | Show alert popup                             | `window.alert("Hello!")`                                                   |
|                         | `confirm(message)`                                | Show confirm popup (OK / Cancel)             | `window.confirm("Are you sure?")`                                          |
|                         | `prompt(message)`                                 | Show input prompt                            | `window.prompt("Your name?")`                                              |
| **navigator**           | `userAgent`                                       | Browser and OS info                          | `navigator.userAgent`                                                      |
|                         | `language`                                        | Browser language                             | `navigator.language`                                                       |
|                         | `onLine`                                          | Online status (boolean)                      | `navigator.onLine`                                                         |
|                         | `geolocation.getCurrentPosition(successCallback)` | Get current GPS position (if permitted)      | `navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords))` |
| **Events (Common DOM)** | `addEventListener("click", callback)`             | Listen for click events on elements          | `element.addEventListener("click", e => ...)`                              |
|                         | `addEventListener("input", callback)`             | Listen for input changes                     | `element.addEventListener("input", e => ...)`                              |
|                         | `addEventListener("submit", callback)`            | Listen for form submission                   | `form.addEventListener("submit", e => { e.preventDefault(); ... })`        |
