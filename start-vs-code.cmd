@echo off

:: Open the vulgear folder in VSCode and run npm run dev
start cmd /k "code . && npm run dev"

:: Open the vulgear-backend folder in VSCode and run npm run dev
cd ../vulgear-backend
start cmd /k "code . && npm run dev"

exit
