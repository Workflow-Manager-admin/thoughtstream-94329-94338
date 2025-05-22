#!/bin/bash
cd /home/kavia/workspace/code-generation/thoughtstream-94329-94338/main_container_for_thoughtstream
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

