# Resolving Failed Windows Updates (Loop or Error Code)

## Introduction
Windows Updates keep your system secure and stable, but sometimes updates fail repeatedly or get stuck in a loop. This can happen due to corrupted update files, software conflicts, or system configuration issues. This guide explains how to break the update loop and successfully install updates using only built-in tools.

## Step 1: Identify the Problem
1. Note the exact error code if shown. Common ones include 0x80070020, 0x80070057, and 0x8024a105.
2. Check if the update fails at a specific percentage or during restart.
3. If you are stuck in an endless restart loop, try entering Safe Mode before proceeding.

## Step 2: Boot into Safe Mode if Necessary
If the system cannot start normally:
- Hold Shift while clicking Restart from the login screen or Start menu.
- Choose Troubleshoot > Advanced Options > Startup Settings > Restart.
- Press 4 for Safe Mode or 5 for Safe Mode with Networking.

## Step 3: Run the Windows Update Troubleshooter
1. Go to Settings > Update & Security > Troubleshoot.
2. Select Additional troubleshooters.
3. Choose Windows Update > Run the troubleshooter.
4. Apply any recommended fixes.

## Step 4: Clear the Windows Update Cache
Corrupted cache files can prevent updates from installing.
1. Open Command Prompt as Administrator.
2. Stop update services: 

```

   net stop wuauserv 
   net stop bits 
```
3. Delete cached files: 
```
   del /s /q %windir%\SoftwareDistribution\Download\* 
```

4. Restart update services: 
```
   net start wuauserv 
   net start bits 
```
## Step 5: Repair System Files
Corrupted system files can block updates.
1. Open Command Prompt as Administrator.
2. Run: 
```
   sfc /scannow  
```   
   Wait for the scan to complete and follow any repair instructions.
3. Then run:  
```   
   DISM /Online /Cleanup-Image /RestoreHealth  
```
      This may take several minutes.

## Step 6: Check Disk Space
Ensure you have at least 10 GB of free space on the system drive. Delete unnecessary files or move data to free up space if needed.

## Step 7: Manually Install the Update
If a specific update fails:
1. Go to Settings > Update & Security > View update history.
2. Note the KB number of the failed update.
3. Visit the Microsoft Update Catalog website and search for the KB number.
4. Download and install the update manually.

## Step 8: Reset Windows Update Components
If issues persist:
1. Open Command Prompt as Administrator.
2. Run:
```  
   net stop wuauserv  
   net stop cryptSvc  
   net stop bits  
   net stop msiserver  
   ren C:\Windows\SoftwareDistribution SoftwareDistribution.old  
   ren C:\Windows\System32\catroot2 catroot2.old  
   net start wuauserv  
   net start cryptSvc  
   net start bits  
   net start msiserver  
```

## Step 9: Perform a Clean Boot
This helps rule out software conflicts.
1. Press Win+R, type msconfig, press Enter.
2. In the Services tab, check "Hide all Microsoft services" and click Disable all.
3. In the Startup tab, open Task Manager and disable all startup items.
4. Restart and try running Windows Update again.

## Step 10: Last Resort – In-Place Upgrade
If nothing else works:
1. Download the Windows installation media from Microsoft’s website.
2. Run the setup file and choose "Upgrade this PC now".
3. Keep personal files and apps selected to avoid data loss.

## Key Points
- Always note the exact error code; it can speed up diagnosis.
- Clearing the update cache and repairing system files fixes many common update failures.
- Safe Mode and Clean Boot isolate system and software conflicts.
- Manual installation can bypass temporary update server issues.

## Summary
Windows Update failures can usually be resolved without reinstalling Windows. By following a sequence of troubleshooting steps — starting with the built-in troubleshooter, clearing the update cache, repairing system files, and adjusting startup services — most users can break update loops and successfully install pending updates. If all else fails, an in-place upgrade can repair the update mechanism without wiping your files.

