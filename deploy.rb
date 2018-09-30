# deploy site _site to new gh-pages branch
#-------------

# delete gh-pages
`git branch -D gh-pages`

# new gh-pages
`git checkout -b gh-pages`

# remove _site from gitignore
`sed '1d' -i .gitignore`
`git add -A`
`git commit -m "add _site"`

# force _site to be root
`git filter-branch --subdirectory-filter _site/ -f`

`git push -f origin gh-pages`

# Checkout the master branch:
`git checkout master`
