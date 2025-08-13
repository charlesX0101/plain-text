# Resolving “Connected but No Internet” Wi-Fi Issues

Seeing “Connected, no internet” can be confusing. Your device is talking to the router, but the router can’t talk to the internet. This guide will help you fix it without needing technical knowledge, third-party software, or special tools.

---

## 1. Confirm the Problem

- Are other devices online, or is everything offline?
- Does the internet work on a wired computer?
- Can you access the internet from your phone (on the same Wi-Fi)?
- Can this device connect elsewhere, like to your phone’s hotspot?

If multiple devices are affected, the issue is likely with the router or modem.

---

## 2. Restart Everything

Power cycling clears most connection issues.

1. Turn off your computer or device
2. Unplug the modem and router (or your combined gateway)
3. Wait 30 seconds
4. Plug in the modem first (if separate), wait for lights to stabilize
5. Plug in the router
6. Turn your computer back on and reconnect to Wi-Fi

Now try opening a webpage.

---

## 3. Forget and Reconnect to Wi-Fi

### Windows:

1. Go to:
   Start > Settings > Network & Internet > Wi-Fi > Manage known networks
2. Click your network and choose:
   Forget
3. Reconnect by selecting the Wi-Fi again and entering the password

### macOS:

1. Go to:
   System Settings > Network > Wi-Fi
2. Click “Details” next to your network
3. Click:
   Forget This Network
4. Reconnect by selecting the network and entering the password

---

## 4. Check for a Valid IP Address

A device with no valid IP can’t access the internet.

### Windows:

1. Press:
   Windows + R, then type `cmd` and press Enter
2. In the black window, type:
   ipconfig
3. Look for your wireless adapter section. A good IP looks like:
   IPv4 Address: 192.168.x.x or 10.x.x.x
   A bad IP starts with:
   169.254.x.x

If you see a 169.254 address, skip to Step 6.

### macOS:

1. Go to:
   System Settings > Network > Wi-Fi > Details > TCP/IP
2. A good IP looks like 192.168.x.x or 10.x.x.x
   If it starts with 169.254, the device isn't getting a proper address

---

## 5. Use the Built-In Troubleshooter

### Windows:

1. Go to:
   Start > Settings > System > Troubleshoot > Other troubleshooters
2. Click:
   Internet Connections > Run

Windows will try to diagnose and fix the problem.

---

## 6. Reset Network Settings

This can resolve persistent issues, especially when the device isn’t getting an IP.

### Windows:

1. Go to:
   Start > Settings > Network & Internet > Advanced network settings
2. Click:
   Network reset
3. Confirm and restart your computer

### macOS:

1. There’s no one-click reset, but you can manually remove Wi-Fi settings:
   - Go to:
     System Settings > Network > Wi-Fi > Details
   - Remove the network
   - Reconnect after restart

If needed, restart the computer after reconnecting.

---

## 7. Check Router or Modem Status

If no devices have internet access:

- Look at the “Internet” or “WAN” light on the modem/router
- If it’s off or orange/red, the router isn’t connecting to your ISP
- Try connecting one computer directly to the modem with an Ethernet cable
- If that device also has no internet, call your internet provider

---

## 8. Change DNS Servers (Optional)

Sometimes DNS servers fail and cause a false “no internet” message.

### Windows:

1. Go to:
   Control Panel > Network and Sharing Center > Change adapter settings
2. Right-click your Wi-Fi adapter > Properties
3. Double-click:
   Internet Protocol Version 4 (TCP/IPv4)
4. Select:
   Use the following DNS server addresses:
   Preferred: 8.8.8.8
   Alternate: 1.1.1.1

### macOS:

1. Go to:
   System Settings > Network > Wi-Fi > Details > DNS
2. Add:
   8.8.8.8
   1.1.1.1

Reconnect and test again.

---

## Summary

- Restart everything (computer, router, modem)
- Forget and reconnect to the network
- Check for a valid IP address
- Run the troubleshooter
- Reset network settings
- Use public DNS servers if needed
- If all devices are offline, call your provider

Most “connected but no internet” problems are temporary and caused by router errors or bad Wi-Fi settings. These steps solve the issue in most homes and small offices without needing outside help.

