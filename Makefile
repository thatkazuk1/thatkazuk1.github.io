install:
	bundle install

develop:
	bundle exec jekyll serve --livereload

develop-dev:
	bundle exec jekyll serve --livereload --config _config.yml,_config_dev.yml

fixture:
	python3 scripts/serve-fixture.py

build:
	bundle exec jekyll build

clean:
	rm -rf _site .jekyll-cache .sass-cache
