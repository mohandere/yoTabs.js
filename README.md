## yoTabs.js
Simple jquery Tabs with radio selection.


### Demo/Examples
[Js Fiddle Demo](https://jsfiddle.net/mohandere/tqv5gxbh/17/)

### Usage -

##### The HTML
```html
<div id="tab-container" class="tab-container">
  <ul>
    <li class="tab">
    	<input type="radio" name="yotabs" data-toggle="#tabs1-html">HTML Markup
    </li>
    <li class="tab">
    	<input type="radio" name="yotabs" data-toggle="#tabs1-js">JS code
    </li>
  </ul>
  <div id="tabs1-html" class="yo-collpase">
    <h2>HTML Markup for these tabs</h2>
    <!-- content -->
  </div>
  <div id="tabs1-js" class="yo-collpase">
    <h2>JS for these tabs</h2>
    <!-- content -->
  </div>
</div>
```

##### The Javascript
```jsvascript
$( document ).ready(function() {
	//init plugin
    $('#tab-container').yoTabs({
     content: 'div.panel'
    });
});
```

### Options -

| Option        | Type           | Default  | Description |
| ------------- |:-------------:| -----:| -----:|
| tabs      | string (html/jQuery selector)  | `> ul > li > input` | Allows you to select a node for tabs with checkbox|
| content      | string (html/jQuery selector)  | `> .yo-collpase` | Allows you to select a node for collpasible/panel |


`data-toggle="#tabs1-js"` is important for selecting right panel, where `#tabs1-js` is the HTML id of panel.

### License

MIT
