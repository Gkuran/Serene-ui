# Serene UI

<p align="center">
  <a href="https://badge.fury.io/js/serene-ui">
    <img src="https://badge.fury.io/js/serene-ui.svg" alt="npm version" />
  </a>
  <img src="https://img.shields.io/npm/dm/serene-ui" alt="npm downloads" />
</p>

(Work in process)

Serene UI is a lightweight and versatile design system built for sustentable applications using React-Native. It emphasizes simplicity, intuitive components, and warm, inviting colors that foster human connection and engagement. Designed for reuse across multiple projects, Serene UI helps developers create cohesive, approachable, and friendly interfaces with ease.

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

MIT
