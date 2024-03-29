#!/usr/bin/env sh

# abort on errors
set -e

# build
# npm run build
yarn build

# navigate into the build output directory
cd ../docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress script'
git push -f https://github.com/seonwook/blog.git master:gh-pages

cd -