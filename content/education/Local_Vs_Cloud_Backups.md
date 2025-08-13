# Local vs cloud backups: what you should really be doing

## Introduction
Backups protect your data from loss due to hardware failure, accidental deletion, malware, or disasters. There are two main approaches: local backups and cloud backups. Each has advantages and limitations. The most effective strategy often combines both.

## Local backups
### What they are
Copies of your data stored on physical media you control, such as:
- External hard drives or SSDs
- Network-attached storage (NAS)
- USB flash drives

### Advantages
- **Speed**: Faster backup and restore times, especially for large files.
- **Control**: You own and physically possess the storage device.
- **No ongoing fees**: One-time purchase of hardware.
- **Offline protection**: If disconnected from the internet, cannot be hacked remotely.

### Limitations
- Vulnerable to theft, fire, or flood.
- Can fail without warning if hardware is damaged or wears out.
- Must be managed and updated manually unless automated backup software is used.

## Cloud backups
### What they are
Data stored on remote servers operated by a backup service provider, accessed over the internet.

### Advantages
- **Offsite protection**: Data is safe from local disasters.
- **Automation**: Can run in the background without user intervention.
- **Accessibility**: Restore files from anywhere with an internet connection.
- **Version history**: Many services let you restore older versions of files.

### Limitations
- **Speed**: Slower backup and restore times for large datasets, especially on slower connections.
- **Cost**: Subscription fees can add up over time.
- **Security trust**: Requires trusting the provider’s encryption and privacy practices.
- **Internet dependency**: Cannot back up or restore without a network connection.

## What you should really be doing
The safest approach is **hybrid backups**:
1. **Local backup** for fast recovery of common issues like accidental deletion or hardware failure.
2. **Cloud backup** for protection against disasters, theft, or loss of local devices.

### Recommended workflow
1. **Automate local backups** 
   Use software like Time Machine (macOS), File History (Windows), or rsync (Linux) to back up to an external drive or NAS regularly.

2. **Enable cloud backups** 
   Use a reputable cloud backup provider with end-to-end encryption. Set it to run automatically.

3. **Follow the 3-2-1 rule** 
   - 3 copies of your data 
   - 2 different storage types 
   - 1 copy stored offsite

4. **Test your backups** 
   Periodically restore a file to verify backups are working and data is intact.

5. **Keep backups secure** 
   Use encryption for both local and cloud backups to prevent unauthorized access.

## Summary
Local backups give you speed and control. Cloud backups give you offsite protection and automation. Relying on only one type leaves gaps in your safety net. A hybrid strategy using both ensures you can recover quickly from everyday mishaps and still be covered in the event of a disaster.


