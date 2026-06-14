# Code Style Keys

Code Style Keys is an Obsidian plugin that makes wrapping selected text in backticks faster while editing notes.

When you press the backtick key with text selected:

- Single-line selection becomes inline code: `selected text`.
- Multi-line selection becomes a fenced code block:

```text
```
selected text
```
```

The plugin also prevents duplicate trailing backticks that can appear from the original keypress.

## Why this plugin

This plugin is useful if you frequently format code snippets and want one quick key action instead of manually typing wrappers.

## How it works

The plugin listens for the `beforeinput` event. If the typed character is a backtick and the active editor has a selection, it:

1. Cancels the default input.
2. Replaces the selection with inline or fenced code syntax.
3. Performs a short cleanup pass to remove one extra trailing backtick when necessary.

## Install for development

1. Make sure Node.js 18+ is installed.
2. Install dependencies:

```bash
npm install
```

3. Start watch build:

```bash
npm run dev
```

4. In Obsidian, reload the app and enable Code Style Keys in Community Plugins.

## Build for production

```bash
npm run build
```

## Manual installation

Copy these files into your vault at:

`<Vault>/.obsidian/plugins/code-style-keys/`

- `main.js`
- `manifest.json`
- `styles.css` (if used)

Then reload Obsidian and enable the plugin.

## Configuration

This version has no settings.

## Compatibility

- Desktop and mobile supported (`isDesktopOnly: false`).
- Minimum app version is defined in `manifest.json`.

## Development notes

- Entry point: `src/main.ts`
- Build tool: esbuild
- Lint:

```bash
npm run lint
```

## License

MIT
