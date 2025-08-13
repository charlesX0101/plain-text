# USB Devices Not Detected or Faulty Ports

## Introduction
When a USB device is not detected, the issue could be with the device, the cable, the USB port, or the operating system. This guide helps you troubleshoot and fix common USB connection problems using built-in tools and basic checks.

## Step 1: Check the Physical Connection
1. Disconnect the USB device and reconnect it firmly.
2. Try a different USB port on the same computer.
3. If possible, test the device on another computer to confirm it works.
4. Swap the USB cable if the device uses one.
5. For desktop PCs, try ports on the back of the case, which connect directly to the motherboard.

## Step 2: Power Cycle the Computer
Restarting can reset the USB controller.
- Shut down the computer completely.
- Unplug it from power (for laptops, also remove the battery if possible).
- Wait 30 seconds, then reconnect power and turn it back on.
- Plug the USB device back in.

## Step 3: Check for Power Supply Issues
Some devices need more power than a single USB port provides.
- On laptops, connect to AC power before testing.
- If the device is external storage, use a powered USB hub or the device’s own power adapter if available.

## Step 4: Check USB Device Recognition in the OS
- **Windows**:
  1. Press Win+X, choose Device Manager.
  2. Expand "Universal Serial Bus controllers".
  3. Look for any devices with a yellow warning icon.
  4. Right-click and choose "Uninstall device", then restart.
- **macOS**:
  1. Go to Apple Menu > About This Mac > System Report.
  2. Under "USB", check if the device appears.
  3. If not, try a different port or cable.

## Step 5: Reset USB Controllers
- **Windows**:
  1. In Device Manager, right-click each item under "Universal Serial Bus controllers" and choose "Uninstall device".
  2. Restart the computer to reinstall drivers automatically.
- **macOS**:
  1. Shut down the Mac.
  2. Reset the System Management Controller (SMC). The method varies by Mac model, so refer to Apple's support documentation.
  3. Reset NVRAM/PRAM (hold Option+Command+P+R during startup until you hear the second chime or see the screen flash twice).

## Step 6: Update or Roll Back Drivers
- **Windows**:
  1. In Device Manager, right-click the USB device or controller and choose "Update driver".
  2. If the problem started after a recent update, try "Roll back driver" if available.
- **macOS**:
  Drivers are included in system updates. Check System Settings > General > Software Update.

## Step 7: Test for Faulty Ports
If only certain ports fail:
- Inspect the port for dust or damage. Use compressed air to clean.
- If a port is physically loose or damaged, professional repair may be needed.
- Continue using working ports until repair is possible.

## Key Points
- Always check the simplest cause first: loose cables or bad ports.
- Testing the device on another system quickly identifies whether the problem is with the device or the computer.
- Resetting USB controllers can resolve many connection issues without hardware changes.
- Some high-power devices need powered hubs or direct motherboard connections.

## Summary
USB connection issues are often caused by loose connections, cable problems, or temporary controller faults. With a few built-in tools and basic troubleshooting steps, you can often restore functionality without replacing hardware. If a port is physically damaged or fails after these checks, repair or replacement may be necessary.
