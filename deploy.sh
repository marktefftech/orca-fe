#!/bin/bash
set -e

PACKAGE=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1).zip
zip -rq ${PACKAGE} index.html ./common ./codebase

aws s3 cp --quiet ./${PACKAGE} s3://webix-temp/${PACKAGE}
curl -s "http://webix.io:2280/h00ks/deploy-preview?token=${PREVIEW_HOOK_TOKEN}&file=${PACKAGE}&source=webix&component=geo-explorer-demo&branch=${DRONE_BRANCH}"
