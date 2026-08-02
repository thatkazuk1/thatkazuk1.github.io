# thatkazuk1.github.io

Repository for my personal blog.

## Table of Contents

- [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Project Status](#project-status)
  - [Getting Started](#getting-started)
    - [Dependencies](#dependencies)
    - [Technology Stack](#technology-stack)
    - [Third-party Services](#third-party-services)
  - [Installation & Development](#installation--development)
    - [Setting Up](#setting-up)
    - [Development](#development)
    - [Testing](#testing)
  - [How to Get Help](#how-to-get-help)
  - [Contributing](#contributing)
  - [Authors](#authors)
    - [Repo Activity](#repo-activity)

## About the Project

Personal site and blog for Desmond Edem. Built with Jekyll on a heavily customized minima theme, hosted on GitHub Pages at [kazuki.uk](https://kazuki.uk/).

## Project Status

[![pages-build-deployment](https://github.com/thatkazuk1/thatkazuk1.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=master)](https://github.com/thatkazuk1/thatkazuk1.github.io/actions/workflows/pages/pages-build-deployment)
[![Website](https://img.shields.io/badge/Live%20Site-kazuki.uk-2196F3?style=for-the-badge&logo=github&logoColor=white)](https://kazuki.uk/)

## Getting Started

### Dependencies

- Ruby 3.1.2 (see `.ruby-version`)
- Bundler

### Technology Stack

- [Jekyll](https://jekyllrb.com/) ~> 4.3.4, on a customized `minima` theme
- Plain CSS/JS in `assets/` — no frontend framework or build step
- GitHub Pages, custom domain via `CNAME` → kazuki.uk

### Third-party Services

None integrated. The "now playing" widget (`_data/nowplaying.yml`) is manually edited, not pulled from a live API.

## Installation & Development

### Setting Up

```bash
bundle install
```

### Development

```bash
make develop # bundle exec jekyll serve --livereload
```

Site available at `http://localhost:4000`.

The CV link on the home page (`{{ site.cv_url }}` in `_config.yml`) points directly at the
`personal-latex-moderncv` repo's `latest` release asset, so it always serves the current PDF
with no local copy to keep in sync.

### Testing

None currently. No test framework or CI checks beyond the GitHub Pages build.

## How to Get Help

Notice a bug? please open an issue. Need more clarification on any part of the code base? Contact [Desmond Edem](https://github.com/thatkazuk1).

## Contributing

To contribute to this project, start by raising an issue. There are issue templates for bug and feature request. Once this issue has been agreed upon, you can
create a feature or hotfix branch off develop or master (for hotfix) and raise PR. There is also a PR template.

**[Back to top](#table-of-contents)**

## Authors

- **[Desmond Edem](https://github.com/thatkazuk1)**

### Repo Activity

[![Commit Activity](https://img.shields.io/github/commit-activity/m/thatkazuk1/thatkazuk1.github.io)](https://github.com/thatkazuk1/thatkazuk1.github.io/commits/master)
