# Audio Not Working or Distorted on Windows/macOS

## Introduction
When audio is silent, crackling, or otherwise distorted, the cause can range from incorrect settings to faulty hardware. This guide covers how to troubleshoot sound problems on Windows and macOS using built-in tools and adjustments.

## Step 1: Check the Basics
1. Make sure speakers, headphones, or other audio devices are connected properly.
2. If using wired devices, check cables and ports for damage.
3. Confirm the device has power if it requires it (e.g., active speakers).
4. Test with a different cable or port if possible.

## Step 2: Verify Volume and Mute Settings
- **Windows**:
  1. Click the speaker icon in the taskbar.
  2. Ensure the correct output device is selected.
  3. Raise the volume and make sure it is not muted.
- **macOS**:
  1. Click the sound icon in the menu bar or go to System Settings > Sound.
  2. Confirm Output is set to the correct device.
  3. Adjust the output volume and ensure mute is not enabled.

## Step 3: Test with Another Audio Source
Play a local audio file instead of streaming to rule out network issues.
- Try a known working file in a built-in player.
- If sound works locally but not in a browser, check that browser tab’s volume and permissions.

## Step 4: Run Built-in Audio Troubleshooters
- **Windows**:
  1. Go to Settings > System > Sound.
  2. Under Output, select your device and click Troubleshoot.
- **macOS**:
  1. While macOS does not have a single audio troubleshooter, you can reset the Core Audio process:
     - Open Terminal and run:  
       sudo killall coreaudiod  
       The process will restart automatically.

## Step 5: Check and Switch Output Devices
Sometimes the OS selects the wrong device.
- Disconnect and reconnect your preferred audio device.
- In Sound settings, manually select the desired output device.

## Step 6: Update or Reinstall Audio Drivers
- **Windows**:
  1. Open Device Manager.
  2. Expand Sound, video and game controllers.
  3. Right-click your audio device, select Update driver.
  4. If issues persist, choose Uninstall device, then restart to reinstall.
- **macOS**:
  Audio drivers are included in system updates. Go to System Settings > General > Software Update and install any available updates.

## Step 7: Check for Audio Enhancements or Effects
- **Windows**:
  1. In Sound settings, select your device.
  2. Go to Device properties > Additional device properties.
  3. Disable any enhancements and test again.
- **macOS**:
  Some apps have built-in sound effects or equalizers that may distort audio. Disable them and re-test.

## Step 8: Reset PRAM/NVRAM and SMC (macOS only)
If distortion or no audio persists:
- Shut down the Mac.
- Hold Option+Command+P+R and power on.
- Keep holding the keys for about 20 seconds.
- If issues continue, reset the System Management Controller (method varies by model).

## Step 9: Test Hardware
- Plug in another set of headphones or speakers.
- If the issue is the same across all devices, the problem is likely software-related.
- If it only occurs on one device, that device may be faulty.

## Key Points
- Always check connections, volume, and mute settings first.
- Built-in troubleshooters and resets often resolve software-level issues.
- Output device selection errors are a common cause of “no sound” problems.
- Distorted audio can come from both driver issues and enabled enhancements.

## Summary
Audio problems on Windows and macOS can often be fixed by verifying connections, checking output settings, running built-in troubleshooters, and updating or reinstalling drivers. In most cases, the issue is software-related and can be resolved without replacing hardware, but faulty cables or devices should be ruled out early in the process.

