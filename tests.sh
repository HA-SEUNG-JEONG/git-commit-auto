#!/bin/bash

# 커밋 메시지를 첫 번째 인수로 받습니다.
commit_msg=$1

# 커밋할 파일 목록을 나머지 인수로 받습니다.
shift
files_to_commit="$@"

# 현재 브랜치 이름을 가져옵니다.
branch_name=$(git rev-parse --abbrev-ref HEAD)

# 브랜치 이름에서 이슈 번호를 추출합니다.
# 여기서 TEST-1234와 같은 형식을 사용한다고 가정합니다.
issue_number=$(echo $branch_name | grep -o 'TEST-[0-9]\+')

# 이슈 번호가 추출되지 않으면 에러 메시지를 출력하고 종료합니다.
if [ -z "$issue_number" ]; then
    echo "Error: No issue number found in the branch name."
    exit 1
fi

# 커밋할 파일이 지정되지 않았을 경우 에러 메시지를 출력하고 종료합니다.
if [ -z "$files_to_commit" ]; then
    echo "Error: No files specified for commit."
    exit 1
fi

# 변경 사항을 스테이징합니다.
git add $files_to_commit

# 최종 커밋 메시지를 생성합니다.
final_commit_msg="[$issue_number] : $commit_msg"

# 커밋을 수행합니다.
git commit -m "$final_commit_msg"
