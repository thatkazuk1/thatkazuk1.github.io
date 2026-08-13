#!/usr/bin/env python3
"""Local now-playing fixture server for testing the widget.

Serves scripts/fixtures/ on 127.0.0.1:8899 with CORS enabled, so
_config_dev.yml's now_playing.endpoint can be fetched from the Jekyll dev
server. Edit fixtures/now-playing.fixture.json (or delete its contents to
test the empty/hidden state) and refresh the page to see changes.

Run from the repo root: python3 scripts/serve-fixture.py (or `make fixture`).
"""
import functools
import http.server
import os

PORT = 8899
FIXTURES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'fixtures')


class CORSHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'application/json')
        super().end_headers()


if __name__ == '__main__':
    handler = functools.partial(CORSHandler, directory=FIXTURES_DIR)
    print(f'Serving fixtures/now-playing.fixture.json on http://127.0.0.1:{PORT}/now-playing.fixture.json')
    http.server.ThreadingHTTPServer(('127.0.0.1', PORT), handler).serve_forever()
