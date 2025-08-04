<!-- @format -->

✅ Core Layout Tools
These are non-negotiable for elite layout control:

| Tool                                                   | Use                                          |
| ------------------------------------------------------ | -------------------------------------------- |
| `Flexbox`                                              | 1D layouts (e.g., navbars, cards, alignment) |
| `Grid`                                                 | 2D layouts (complex page structures)         |
| `position` (`absolute`, `relative`, `fixed`, `sticky`) | Custom placement of elements                 |
| `display: none` / `visibility: hidden`                 | Hide/show logic                              |
| `z-index`                                              | Layering elements                            |

🎯 Responsive Design Techniques
Mastering these makes layouts feel fluid and polished:

| Tool                         | Use                                   |
| ---------------------------- | ------------------------------------- |
| `media queries`              | Different styles based on screen size |
| `clamp()`                    | Scalable font sizes/margins/paddings  |
| `max-width`, `min-width`     | Responsive containers                 |
| `%`, `vw`, `vh`, `em`, `rem` | Relative units for sizing             |

🎨 Visual Polish & Utility
Elite devs fine-tune the UI using these:

| Tool                                   | Use                                |
| -------------------------------------- | ---------------------------------- |
| `box-shadow`, `text-shadow`            | Depth and contrast                 |
| `border-radius`                        | Rounded elements                   |
| `transform`, `transition`, `animation` | Smooth effects & interactivity     |
| `filter`                               | Blurs, brightness, grayscale, etc. |
| `opacity` / `pointer-events: none`     | UI interactivity and control       |

🔁 Reusable + Scalable Styling
Organizing your CSS like a pro:

| Tool                                             | Use                  |
| ------------------------------------------------ | -------------------- |
| `:root` and CSS Variables (`--primary-color`)    | Theming and DRY code |
| BEM Naming (`block__element--modifier`)          | Maintainable naming  |
| Utility-first CSS (e.g., Tailwind or Atomic CSS) | Speed + clarity      |
| Component-level scoping (via SCSS or frameworks) | Isolation and reuse  |

reuse

🧠 Powerful Selectors to Master
These make your CSS precise and dynamic:

/_ Attribute selectors _/
input[type="checkbox"] {}

/_ Pseudo-classes _/
:hover, :focus, :not(), :nth-child(), :first-of-type

/_ Pseudo-elements _/
::before, ::after

/_ Combinators _/
div > p, ul li, h1 + h2, .parent ~ .sibling
