| **Widget API / AngularJS in SNOW**       | **Purpose in ServiceNow Widget**            | **Typical Raw DOM / Vanilla JS Equivalent**                                                     |
| ---------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `$scope.variableName`                    | Two-way bind data between JS and HTML       | `document.querySelector('#id').textContent = value` *(plus manual event listeners for updates)* |
| `ng-model="fieldName"`                   | Bind form field value to `$scope.fieldName` | `input.value = value; input.addEventListener('input', e => value = e.target.value)`             |
| `spUtil.update(scope)`                   | Refresh widget data from server             | `fetch('/endpoint').then(r => r.json()).then(updateUI)`                                         |
| `spUtil.refresh(scope)`                  | Rerun server script without page reload     | Re-fetch AJAX data and re-render HTML manually                                                  |
| `spModal.open({title, message})`         | Open modal dialog                           | Create `<div>` modal element, append to DOM, style, and bind close buttons                      |
| `spAriaFocusManager.focus(element)`      | Set accessibility focus                     | `element.focus()`                                                                               |
| `spAttachmentService.uploadAttachment()` | Upload file to SNOW record                  | `FormData` + `fetch()` POST to upload endpoint                                                  |
| `spCustomEvent.fire(name, data)`         | Broadcast custom event to other widgets     | `window.dispatchEvent(new CustomEvent(name, {detail: data}))`                                   |
| `spCustomEvent.on(name, handler)`        | Listen for widget-to-widget events          | `window.addEventListener(name, e => handler(e.detail))`                                         |
| `$timeout(fn, delay)`                    | Delay execution in AngularJS digest cycle   | `setTimeout(fn, delay)`                                                                         |
| `$interval(fn, ms)`                      | Repeat execution in digest cycle            | `setInterval(fn, ms)`                                                                           |
| `$watch('varName', callback)`            | Watch a variable for changes                | `Object.defineProperty()` setters or MutationObserver for DOM changes                           |
| `$compile(html)(scope)`                  | Dynamically insert & bind HTML              | `element.innerHTML = html;` + manual event listeners                                            |
| `ng-repeat="item in list"`               | Loop and render list dynamically            | `list.forEach(item => { /* create DOM node */ })`                                               |
| `$http.get('/api/...')`                  | Call REST API (GET)                         | `fetch('/api/...').then(res => res.json())`                                                     |
| `$http.post('/api/...', data)`           | Call REST API (POST)                        | `fetch('/api/...', {method: 'POST', body: JSON.stringify(data)})`                               |



How to Think About It
AngularJS $scope = automatic “data to DOM” binding.
Without it, you’d need manual DOM updates and event listeners.

spUtil & spModal = ServiceNow-specific helpers for common UI patterns that you’d otherwise have to build from scratch.

spCustomEvent = cross-widget messaging without touching window.postMessage or low-level DOM events.

$http = SNOW’s wrapper over AJAX/fetch with built-in digest cycle integration.




ServiceNow AngularJS Widget Quick Reference

| **Pattern**                          | **AngularJS in SNOW**                          | **What It Does**                                 | **Modern JS / Raw DOM Equivalent**                                                          |
| ------------------------------------ | ---------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **Data Binding (One/Two-way)**       | `ng-model="fieldName"` with `$scope.fieldName` | Syncs UI and JS variable automatically           | `input.value = fieldName; input.addEventListener('input', e => fieldName = e.target.value)` |
| **Display Data in Template**         | `{{ variableName }}`                           | Inserts variable value into HTML                 | `element.textContent = variableName`                                                        |
| **Conditional Display**              | `ng-if="condition"`                            | Adds/removes element from DOM based on condition | `if(condition){ el.style.display='block' } else { el.style.display='none' }`                |
| **Lists/Loops**                      | `ng-repeat="item in items"`                    | Renders HTML for each item in a list             | `items.forEach(item => { /* build HTML */ })`                                               |
| **HTTP GET**                         | `$http.get('/api/...')`                        | Fetches data from an API                         | `fetch('/api/...').then(r => r.json())`                                                     |
| **HTTP POST**                        | `$http.post('/api/...', data)`                 | Sends data to API                                | `fetch('/api/...',{method:'POST',body:JSON.stringify(data)})`                               |
| **Refresh Widget**                   | `spUtil.update($scope)`                        | Reloads widget data from server script           | `fetch('/widget-data').then(updateUI)`                                                      |
| **Show Modal**                       | `spModal.open({title, message})`               | Opens a ServiceNow modal                         | Create `<div>` + style + attach click listeners                                             |
| **Cross-Widget Messaging (Send)**    | `spCustomEvent.fire('eventName', data)`        | Sends custom event to other widgets              | `window.dispatchEvent(new CustomEvent('eventName',{detail:data}))`                          |
| **Cross-Widget Messaging (Receive)** | `spCustomEvent.on('eventName', fn)`            | Listens for custom event from another widget     | `window.addEventListener('eventName', e => fn(e.detail))`                                   |
| **Delay Execution**                  | `$timeout(fn, delay)`                          | Runs after delay in Angular digest cycle         | `setTimeout(fn, delay)`                                                                     |
| **Repeat Execution**                 | `$interval(fn, ms)`                            | Runs repeatedly                                  | `setInterval(fn, ms)`                                                                       |
| **Watch for Variable Change**        | `$scope.$watch('variable', fn)`                | Runs when variable changes                       | `Object.defineProperty` or Proxy                                                            |
| **Dynamic HTML Injection**           | `$compile('<div>{{x}}</div>')($scope)`         | Inject HTML bound to scope variables             | `el.innerHTML = html` + event listeners                                                     |
| **File Upload**                      | `spAttachmentService.uploadAttachment()`       | Uploads file to SNOW record                      | `FormData` + `fetch()` POST                                                                 |
| **Focus Element (Accessibility)**    | `spAriaFocusManager.focus(el)`                 | Focuses element                                  | `el.focus()`                                                                                |















| #      | Task                       | Raw JavaScript                                                                                | ServiceNow Widget (AngularJS)                                                                                                   |
| ------ | -------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **1**  | Update Text Content        | `document.querySelector('#greeting').textContent = 'Hello World';`                            | HTML: `<h1>{{ greeting }}</h1>`<br>JS: `$scope.greeting = 'Hello World';`                                                       |
| **2**  | Change Element Style       | `document.querySelector('#box').style.backgroundColor = 'red';`                               | HTML: `<div ng-style="{'background-color': boxColor}">Box</div>`<br>JS: `$scope.boxColor = 'red';`                              |
| **3**  | Show/Hide Element          | `element.style.display = show ? 'block' : 'none';`                                            | HTML: `<div ng-if="showBox">Visible Box</div>`<br>JS: `$scope.showBox = true;`                                                  |
| **4**  | Respond to Button Click    | `element.addEventListener('click', doSomething);`                                             | HTML: `<button ng-click="doSomething()">Click</button>`<br>JS: `$scope.doSomething = function() { alert('Button clicked!'); };` |
| **5**  | Loop Through List          | `items.forEach(item => console.log(item));`                                                   | HTML: `<li ng-repeat="item in items">{{ item }}</li>`<br>JS: `$scope.items = ['One','Two','Three'];`                            |
| **6**  | Fetch Data from API        | `fetch('/api/now/table/incident').then(r => r.json());`                                       | JS: `$http.get('/api/now/table/incident').then(function(res){ $scope.incidents = res.data.result; });`                          |
| **7**  | Post Data to API           | `fetch('/api',{method:'POST',body:JSON.stringify(data)});`                                    | JS: `$http.post('/api', data).then(function(res){ console.log(res); });`                                                        |
| **8**  | Listen for Variable Change | `Object.defineProperty(obj,'x',{set(v){console.log(v)}});`                                    | JS: `$scope.$watch('x', function(newVal){ console.log(newVal); });`                                                             |
| **9**  | Wait Before Running        | `setTimeout(()=>console.log('Later'),1000);`                                                  | JS: `$timeout(function(){ console.log('Later'); }, 1000);`                                                                      |
| **10** | Repeat Execution           | `setInterval(()=>console.log('Tick'),1000);`                                                  | JS: `$interval(function(){ console.log('Tick'); }, 1000);`                                                                      |
| **11** | Form Binding               | `input.value = name; input.addEventListener('input', e => name = e.target.value);`            | HTML: `<input ng-model="name"><p>{{ name }}</p>`                                                                                |
| **12** | Add/Remove CSS Class       | `element.classList.add('active');`                                                            | HTML: `<div ng-class="{'active': isActive}"></div>`<br>JS: `$scope.isActive = true;`                                            |
| **13** | Trigger Custom Event       | `window.dispatchEvent(new CustomEvent('myEvent',{detail:42}));`                               | JS: `spCustomEvent.fire('myEvent', 42);`                                                                                        |
| **14** | Listen for Custom Event    | `window.addEventListener('myEvent', e=>console.log(e.detail));`                               | JS: `spCustomEvent.on('myEvent', function(data){ console.log(data); });`                                                        |
| **15** | Open Modal                 | `alert('This is a modal!');`                                                                  | JS: `spModal.open({ title: 'My Modal', message: 'Hello!' });`                                                                   |
| **16** | Reload Widget              | `location.reload();`                                                                          | JS: `spUtil.update($scope);`                                                                                                    |
| **17** | Inject HTML                | `element.innerHTML = '<p>Hello</p>';`                                                         | JS: `let el = angular.element('<p>Hello</p>'); $compile(el)($scope);`                                                           |
| **18** | Focus Input                | `document.querySelector('#myInput').focus();`                                                 | JS: `spAriaFocusManager.focus('#myInput');`                                                                                     |
| **19** | Upload File                | `let fd = new FormData(); fd.append('file', file); fetch('/upload',{method:'POST',body:fd});` | JS: `spAttachmentService.uploadAttachment('incident',$scope.data.sys_id,file);`                                                 |
| **20** | Remove Element             | `element.remove();`                                                                           | HTML: `<div ng-if="!removed">Visible</div>`<br>JS: `$scope.removed = false;`                                                    |






how id tackle 11 day pdi angular build
| Day | Goal                                       | Angular Focus                              |
| --- | ------------------------------------------ | ------------------------------------------ |
| 1   | Create new portal + theme                  | No Angular yet, just setup                 |
| 2   | Create base widget with Angular controller | `$scope` basics, binding variables to HTML |
| 3   | Build login widget UI                      | `$scope.user` + click events               |
| 4   | Mock login function                        | `$scope.login = function() { ... }`        |
| 5   | Create homepage widget (cards/tiles)       | `ng-repeat` for dynamic tiles              |
| 6   | Create submit request form                 | `$sp.saveRecord()` with form binding       |
| 7   | Create “My Requests” list widget           | `$sp.getRecordList()` and `ng-repeat`      |
| 8   | Add filtering/search                       | `ng-model` + Angular filters               |
| 9   | Add icons and branding                     | Static assets in widget template           |
| 10  | End-to-end test                            | Debug any API bindings                     |
| 11  | Polish + prep demo                         | Add animations or extra UI flair           |
