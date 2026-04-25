# Security Audit Command

This command performs a comprehensive security audit of both the .NET Clean Architecture project and the Next.js frontend application, checking for vulnerable dependencies and applying fixes where possible.

## Overview

The audit process covers:
1. **Vulnerability Scanning** - Identifies known security vulnerabilities in dependencies
2. **Dependency Updates** - Applies safe security fixes and updates
3. **Testing & Validation** - Ensures updates don't break functionality
4. **Build Verification** - Confirms projects still compile and build successfully

## .NET Project Audit

### 1. Check for Vulnerable Packages
```powershell
# Navigate to solution directory
cd d:\source\clean-architecture

# Check for vulnerable packages across all projects
dotnet list package --vulnerable

# Check for outdated packages
dotnet list package --outdated

# Get detailed vulnerability information
dotnet list package --vulnerable --include-transitive
```

### 2. Update Vulnerable Dependencies
```powershell
# Restore packages to ensure we have latest package data
dotnet restore

# Update packages to latest versions (be cautious with major version updates)
dotnet add CleanArchitecture.API package Microsoft.AspNetCore.App --version latest
dotnet add CleanArchitecture.Infrastructure package Microsoft.EntityFrameworkCore --version latest
dotnet add CleanArchitecture.Application package AutoMapper --version latest

# Alternative: Update all packages in each project
cd CleanArchitecture.API
dotnet list package --outdated | findstr ">" | ForEach-Object { 
    $parts = $_ -split '\s+'; 
    dotnet add package $parts[1] 
}
cd ..
```

### 3. Build and Test Verification
```powershell
# Clean and rebuild solution
dotnet clean
dotnet build

# Run all tests
dotnet test

# Check for any compilation warnings or errors
dotnet build --verbosity normal
```

## Next.js Project Audit

### 1. Audit NPM Dependencies
```powershell
# Navigate to Next.js project
cd user-management-nextjs

# Check for vulnerabilities
npm audit

# Get detailed vulnerability report
npm audit --json > audit-report.json

# List outdated packages
npm outdated
```

### 2. Apply Security Fixes
```powershell
# Apply automatic fixes for vulnerabilities
npm audit fix

# For high-severity issues that need manual intervention
npm audit fix --force

# Update dependencies to latest versions (optional - be cautious)
npm update

# Check for remaining vulnerabilities
npm audit
```

### 3. Verify Build and Tests
```powershell
# Install/update dependencies
npm install

# Run linting
npm run lint

# Run tests (if available)
npm test --passWithNoTests

# Verify production build works
npm run build

# Test development server starts correctly
timeout 10 npm run dev
```

## Complete Audit Script

Here's a PowerShell script that runs the full audit process:

```powershell
# Security Audit Script for Clean Architecture Project
Write-Host "Starting Security Audit..." -ForegroundColor Green

# Set base directory
$baseDir = "d:\source\clean-architecture"
cd $baseDir

Write-Host "`n=== .NET PROJECT AUDIT ===" -ForegroundColor Yellow

# .NET Security Checks
Write-Host "Checking for vulnerable .NET packages..." -ForegroundColor Cyan
dotnet list package --vulnerable

Write-Host "`nChecking for outdated .NET packages..." -ForegroundColor Cyan
dotnet list package --outdated

Write-Host "`nRestoring .NET packages..." -ForegroundColor Cyan
dotnet restore

Write-Host "`nBuilding .NET solution..." -ForegroundColor Cyan
$buildResult = dotnet build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please fix errors before continuing." -ForegroundColor Red
    exit 1
}

Write-Host "`nRunning .NET tests..." -ForegroundColor Cyan
dotnet test

Write-Host "`n=== NEXT.JS PROJECT AUDIT ===" -ForegroundColor Yellow

# Navigate to Next.js project
cd "$baseDir\user-management-nextjs"

Write-Host "`nChecking NPM vulnerabilities..." -ForegroundColor Cyan
npm audit

Write-Host "`nApplying NPM security fixes..." -ForegroundColor Cyan
npm audit fix

Write-Host "`nInstalling/updating NPM dependencies..." -ForegroundColor Cyan
npm install

Write-Host "`nRunning Next.js linting..." -ForegroundColor Cyan
npm run lint

Write-Host "`nTesting Next.js build..." -ForegroundColor Cyan
npm run build

Write-Host "`n=== AUDIT COMPLETE ===" -ForegroundColor Green
Write-Host "Security audit finished. Review any remaining vulnerabilities above." -ForegroundColor Green

# Return to base directory
cd $baseDir
```

## Post-Audit Checklist

After running the audit:

- [ ] Review any remaining **high/critical** vulnerabilities that couldn't be auto-fixed
- [ ] Test critical application functionality manually
- [ ] Update package versions in documentation
- [ ] Consider adding vulnerability scanning to CI/CD pipeline
- [ ] Schedule regular dependency audits (monthly recommended)

## Automated Scheduling

To run this audit regularly, consider:

1. **GitHub Actions** - Set up scheduled workflows
2. **Azure DevOps** - Create scheduled pipelines  
3. **Local Scheduler** - Use Windows Task Scheduler with PowerShell script
4. **VS Code Tasks** - Add to `.vscode/tasks.json` for easy execution

## Security Best Practices

- Always test after applying updates
- Review breaking changes before major version updates
- Keep development and production dependency versions in sync
- Monitor security advisories for your tech stack
- Use `package-lock.json` and `packages.lock.json` for reproducible builds