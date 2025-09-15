# Serene UI

[![npm version](https://badge.fury.io/js/serene-ui.png?icon=si%3Anpm)](https://badge.fury.io/js/serene-ui)

Serene UI is a lightweight and versatile design system built for social-focused applications using React-Native. It emphasizes simplicity, intuitive components, and warm, inviting colors that foster human connection and engagement. Designed for reuse across multiple projects, Serene UI helps developers create cohesive, approachable, and friendly interfaces with ease.

## Installation

```bash
npm install serene-ui
```

## Usage

```jsx
import { Button, Card, Avatar } from "serene-ui";

function App() {
  return (
    <Card>
      <Avatar src="/avatar.jpg" />
      <Button variant="primary">Connect</Button>
    </Card>
  );
}
```

## Components

- **Accordion** - Collapsible content sections
- **Alert** - Status and notification messages
- **Avatar** - User profile images
- **Box** - Layout container
- **Button** - Interactive buttons
- **Card** - Content containers
- **Checkbox** - Selection inputs
- **FormControl** - Form field wrapper
- **Grid** - Layout grid system
- **RadioButton** - Single selection inputs
- **Switch** - Toggle controls
- **Tag** - Labels and categories

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build package
npm run build
```

## License

ISC
