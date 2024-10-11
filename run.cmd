@echo off

:: Open the current folder (vulgear) in VSCode and run npm run dev
start cmd /k "code . && npm run dev"

:: Navigate to the vulgear-backend folder (one level up, then into vulgear-backend)
cd ../vulgear-backend
start cmd /k "code . && npm run dev"

exit
