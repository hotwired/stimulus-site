# https://github.com/zeit/now-examples/tree/master/jekyll

yum install ruby23-devel.x86_64 zlib-devel

gem install bundler

bundle install

bundle exec jekyll build
