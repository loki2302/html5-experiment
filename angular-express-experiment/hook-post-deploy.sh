#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" &&
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" &&

npm install
npm app:build
pm2 startOrRestart ecosystem.prod.yaml
