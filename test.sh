#!/bin/sh

# 사용자로부터 커밋 메시지를 입력 받음
read -p "Enter commit message: " commit_message

# 모든 변경 사항을 스테이징
git add .

# 특정 파일만 스테이징
read -p "Enter file to stage: " file_path
git add "$file_path"

# 입력 받은 커밋 메시지로 커밋
git commit -m "$commit_message"

# 현재 브랜치 이름을 가져옴
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 변경 사항을 원격 저장소로 푸시
git push origin $current_branch