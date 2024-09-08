# YouTube Speed Controller

## Overview

**YouTube Speed Controller** is a Chrome extension designed to enhance your YouTube viewing experience by automatically skipping ads and speeding up their playback. This extension minimizes interruptions from ads and reduces the time spent on ad-related content.

## Features

- Logs a message to the console when a YouTube page is loaded.
- Automatically clicks the "Skip Ads" button when available.
- Speeds up ad playback to 20x for faster ad completion.

## Installation

1. **Download the Extension:**
   - Clone this repository or download the ZIP file.


## Files

- **manifest.json**: Configuration file specifying extension permissions, scripts, and metadata.
- **background.js**: Handles events when YouTube pages are loaded and injects the content script.
- **content.js**: Executes on YouTube pages to log messages, skip ads, and speed up ad playback.
- **icons/**: Folder containing icon images in different sizes.

## Permissions

- **storage**: Allows the extension to use Chrome’s storage API.
- **activeTab**: Grants access to the currently active tab.
- **scripting**: Enables dynamic script injection.
- **`*://*.youtube.com/*`**: Restricts functionality to YouTube pages.

## How It Works

1. **Background Script**:
   - Listens for updates to tabs. When a YouTube page is fully loaded, it logs a message and injects the `content.js` script into the page.

2. **Content Script**:
   - Logs a message when loaded on a YouTube page.
   - Attempts to skip ads and speeds up ad playback by adjusting the playback rate of the video element.
   - Uses a `MutationObserver` to handle dynamically added ad elements.

## Development

To customize or extend the functionality:

1. **Edit `content.js`**:
   - Modify the ad skipping logic or adjust the playback speed as needed.
   
2. **Update `background.js`**:
   - Change how the script is injected or how the extension interacts with tabs.
   
3. **Edit `manifest.json`**:
   - Update permissions, version, or other metadata as necessary.

## License

This extension is provided under the MIT License. Feel free to modify, distribute, and use it as per the license terms. Contributions and enhancements are welcome!

## Contact

For issues, suggestions, or contributions, please visit the project's repository or contact the project maintainer.

---

Thank you for using YouTube Speed Controller!
