install:
	bundle install

develop:
	bundle exec jekyll serve --livereload

build:
	bundle exec jekyll build

clean:
	rm -rf _site .jekyll-cache .sass-cache
