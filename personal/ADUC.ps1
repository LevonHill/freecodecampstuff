
Write-Host "Summoning Active Directory Users and Computers..." -ForegroundColor Magenta

# Check if RSAT: Active Directory tools are already installed
$rsat = Get-WindowsCapability -Name RSAT.ActiveDirectory.DS-LDS.Tools* -Online

if ($rsat.State -eq "Installed") {
    Write-Host "ADUC already exists in your realm. Reinstalling anyway..." -ForegroundColor Yellow
    Remove-WindowsCapability -Name RSAT.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0 -Online
    Start-Sleep -Seconds 5
}

# Reinstall the RSAT: Active Directory tools
Add-WindowsCapability -Online -Name RSAT.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0

# Confirm installation
$check = Get-WindowsCapability -Name RSAT.ActiveDirectory.DS-LDS.Tools* -Online

if ($check.State -eq "Installed") {
    Write-Host "ADUC has returned. Use it wisely... or not." -ForegroundColor Green
} else {
    Write-Host "The summoning failed. Your system is too weak." -ForegroundColor Red
}
