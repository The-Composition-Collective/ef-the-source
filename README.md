# The Source Project

This codebase was created by The Composition Collective for the The Everglades Foundation. I contains a static website built with version 0.140.0 of the [Hugo](https://gohugo.io/) static site generator. 

## About This Site | Built with [Hugo](https://gohugo.io/) (v0.140.0)

This website is generated using Hugo, a fast and flexible static site generator built with Go. Hugo takes content files written in Markdown (or other formats) and applies themes to produce a complete HTML website. This approach offers several benefits, including excellent performance, easy deployment, and a wide variety of customizable themes.

To work with this project locally, you'll typically need to have Hugo [installed](https://gohugo.io/installation/) on your system. Once installed, you can clone this repository and then use Hugo commands to build and preview the site. Common steps include navigating to the project directory in your terminal and running commands like `hugo server` to start a local development server or `hugo` to generate the static site files in the `public` directory. Refer to the Hugo documentation for detailed installation instructions and usage.

## GitHub Actions

This repository includes a GitHub Action to build the website and publish it to GitHub Pages whenever code is pushed to the main branch. This allows for both a local workflow when altering the styling and stucture of the site, or a GitHub workflow to alter the text.

### Updating a video or image in GitHub

1. Navigate to the folder where the video is stored (content) 
1. Click on the existing video file.
1. Click the trash can icon (Delete) or use the Upload files button in the folder view.
1. Upload your new video file with the same filename (e.g., video.mp4) to overwrite it. Make sure to keep asset size under 10MB. You can use the “Handbrake” app to compress a video if need be. 
1. Commit the change.

### Updating text

1. Navigate to the file you wish to edit (_index.html).
1. Click on the file to view its contents.
1. Click the pencil icon (✏️) in the upper-right corner to edit the file.
1. Make your changes directly in the editor. For Markdown files, use standard Markdown syntax to format text.

_NOTE: If Everglades Foundation changes the story/ story text without Katie Burke’s involvement, please remove her byline (screenshot below)._

### Commit Changes:
1. Scroll down to the commit message section.
1. Enter a brief description of your changes (e.g., "Update caption").
1. Choose to commit directly to the main branch or create a new branch for a pull request.
1. Click Commit changes.
