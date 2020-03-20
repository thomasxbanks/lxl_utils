JavaScript utility functions to cover a variety of frequently used tasks.

# Utility Functions

## Installation
```bash
  npm install lxl.utils --save
```

## Example Usage

```js
  const titleCase = require('lxl.utils/title-case');
  const formattedTitle = titleCase('this is a title') // This Is A Title
```

```jsx
  import salt from 'lxl.utils/salt'
  return(
    <li key={ salt() }>This is a list item</li>
  )
```

### From version 1.2

```jsx
  import { salt } from 'lxl.utils'
  return(
    <li key={ salt() }>This is a list item</li>
  )
```


## Utils

- Calculate pixels from points
- Copy string to clipboard
- Currency
- Delay
- Get css value
- Get key by value
- Get position
- Has trailing slash
- Initial capital letter
- Is double tap/click
- Is IE
- Is in viewport
- Is Letter
- Is touch device
- Lock scroll
- Make element _disabled_
- Make element _enabled_
- Make element _is active_
- Make element _not active_
- Make element _is hidden_
- Make element _not hidden_
- Math
  - Add
  - Subtract
  - Multiply
  - Divide
  - Percentage
  - Make a number negative
  - Pad with zero
- Numberize value
- Random number
- Salt
- Scroll to bottom
- Slugify
- Sort
  - Ascending
  - Descending
- Title case
- Toggle element active state
- Toggle scroll lock
- Unlock scroll
- Which motion event