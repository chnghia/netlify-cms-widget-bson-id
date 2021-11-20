# netlify-cms-widget-uuid
Netlify CMS plugin to support UUID widgets.

Widgets are inputs for the Netlify CMS editor interface. It's a React component that receives user input and outputs a serialized value.

NetlifyCMS offers the ability to add referential links between collections. It unfortunately does not provide a key widget to safely link between items.

## Install

As an npm package:

1) Install the widget:
```
npm i netlify-cms-widget-bson-id
```

2) Import the UUID widget in the netlifyCMS file:
```
import {ObjectIDControl, ObjectIDPreview} from 'netlify-cms-widget-bson-id';
```

3) Register the widget ready for use:
```
CMS.registerWidget('objectid', ObjectIDControl, ObjectIDPreview)

```

Via `script` tag:
```html
<script src="https://unpkg.com/netlify-cms-widget-bson-id@^0.0.1/dist/index.js"></script>
<script type="text/javascript">
  CMS.registerWidget('objectid', objectidWidget.ObjectIDControl, objectidWidget.ObjectIDPreview)
</script>
```

## How to use

Inside the YML collections file use the new widget.

```
collections:
  - name: "example"
    label: "Example"
    folder: "/path/to/your/folder"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "ID", name: "id", widget: "objectid"}
```
