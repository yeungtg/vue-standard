#!/bin/bash

# 确保脚本抛出遇到的错误
set -e
if [ "$1" ]; then
    echo -e "\033[0;32m commit '$1' \033[0m"
else
  echo -e "\033[0;31m 请输入commit内容 \n\033[5;31m 例如：sh build.sh '修改config, bugfix#1' \033[0m"
  exit;
fi

# 生成静态文件
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "$1"


# # 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yeungtg/vue-standard.git master:gh-pages
