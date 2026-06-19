param(
  [int]$Port = 3000
)

$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

if (-not (Test-Path -LiteralPath "package.json")) {
  throw "package.json was not found. Run this script from the ReviffWebsite project root."
}

if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
  throw "npm.cmd was not found. Install Node.js, then try again."
}

$selectedPort = $Port
while (Get-NetTCPConnection -LocalPort $selectedPort -ErrorAction SilentlyContinue) {
  Write-Host "Port $selectedPort is already in use. Trying $($selectedPort + 1)..." -ForegroundColor Yellow
  $selectedPort++
}

if (-not (Test-Path -LiteralPath "node_modules")) {
  Write-Host "node_modules not found. Installing dependencies..." -ForegroundColor Cyan
  npm install
}

Write-Host "Starting REVIFF website dev server on http://127.0.0.1:$selectedPort" -ForegroundColor Green
npm run dev -- -p $selectedPort
