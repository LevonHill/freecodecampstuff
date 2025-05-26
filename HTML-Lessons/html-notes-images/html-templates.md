<!-- @format -->

# 🌐 HTML Templates — Foundation Scroll

## 1. Semantic Page Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <header>Site Header</header>
    <nav>Navigation Links</nav>
    <main>
      <section>
        <h2>Section Title</h2>
        <p>Paragraph content...</p>
      </section>
    </main>
    <footer>Footer Info</footer>
  </body>
</html>

2. Proper Image Element
<img
  src="https://via.placeholder.com/150"
  alt="A placeholder image of 150x150 pixels"
  width="150"
  height="150"
  loading="lazy"
/>
✅ Always include alt for accessibility and SEO. Use loading="lazy" for
performance. 3. Accessible Form Snippet
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    placeholder="you@example.com"
  />
  <button type="submit">Submit</button>
</form>
✅ label must match input id. Use required and placeholder meaningfully.
//javascript in dom const form = document.querySelector('form');
form.addEventListener('submit', function (e) { e.preventDefault(); const email =
document.querySelector('#email'); if (!email.value.includes('@')) {
alert('Please enter a valid email.'); } else { // Submit logic here
console.log('Form submitted'); } }); ✅ Prevent default form behavior and
validate manually if needed. 3. Fetch API Example (Async/Await) async function
getData() { try { const response = await fetch('https://api.example.com/data');
const data = await response.json(); console.log(data); } catch (err) {
console.error('Fetch error:', err); } } getData(); ✅ Always use try/catch when
fetching — APIs can fail. 2. Basic Responsive Image img { max-width: 100%;
height: auto; } ✅ Prevents image overflow. Crucial for responsive design. 3.
Smooth Button Hover .button { background-color: #222; color: white; padding:
0.75rem 1.5rem; border: none; border-radius: 8px; transition: background 0.3s
ease; } .button:hover { background-color: #444; } ✅ This gives your buttons
life and motion. 4. CSS Variables + Theme Setup :root { --main-color: #2f80ed;
--accent: #f2994a; } body { background-color: var(--main-color); color: white; }
```
