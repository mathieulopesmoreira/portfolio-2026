# Script de deploiement direct vers Vercel
# Usage: .\deploy.ps1

Write-Host "=======================================" -ForegroundColor Cyan
Write-Host "  DEPLOIEMENT DIRECT VERCEL" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

# Charger le token depuis .env
$envContent = Get-Content .env -Raw -ErrorAction SilentlyContinue
if ([string]::IsNullOrWhiteSpace($envContent)) {
    Write-Host "X Fichier .env introuvable" -ForegroundColor Red
    exit 1
}

# Parser le fichier .env
$token = ""
$envContent -split "`n" | ForEach-Object {
    if ($_ -match '^VERCEL_TOKEN=(.+)$') {
        $token = $matches[1].Trim()
    }
}

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host "X Token Vercel introuvable dans .env" -ForegroundColor Red
    Write-Host "Le fichier .env doit contenir: VERCEL_TOKEN=votre_token" -ForegroundColor Yellow
    exit 1
}

# Configurer le token Vercel
$env:VERCEL_TOKEN = $token
$env:VERCEL_ORG_ID = ""
$env:VERCEL_PROJECT_ID = ""

Write-Host "-> Deploiement en production..." -ForegroundColor Yellow
Write-Host ""

# Deployer directement en production
vercel --prod --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "OK Deploiement reussi!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Dashboard: https://vercel.com/dashboard" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "X Echec du deploiement" -ForegroundColor Red
}

Write-Host ""
Write-Host "=======================================" -ForegroundColor Cyan


