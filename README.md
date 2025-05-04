# shortlink

A minimal, generic starter for building your own "golinks" browser extension. Use this as a base to create custom shortlink/redirect tools for your team or personal use.

- Type `gg/your-link` in the address bar to redirect to a custom URL (see code for details).
- Simple, privacy-friendly, and easy to extend.

Fork and modify to fit your own golinks workflow.

## Features

- **Quick Navigation**: Type `gg/` followed by your desired path in the browser's address bar
- **Smart Suggestions**: Get real-time suggestions as you type
- **Seamless Redirection**: Automatically redirects to the full URL
- **Privacy Focused**: No tracking or data collection

## Usage

1. Type `gg/` in your browser's address bar
2. Enter the desired path
3. Press Enter to navigate to the shortened URL

For example, typing `gg/about` will redirect you to `https://hacksore.com/about`

## Installation

1. Clone this repository
2. Load the extension in your browser:
   - Chrome: Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the extension directory

## Development

This extension is built using:
- Manifest V3
- Chrome Extension APIs
- Declarative Net Request for URL redirection

## License

MIT License

