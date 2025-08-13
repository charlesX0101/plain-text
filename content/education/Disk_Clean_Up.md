# Disk Cleanup, SSD Health Checks, and Storage Tips

Keeping your storage drives in good condition improves system performance, extends hardware life, and reduces the risk of data loss. Whether you use a hard disk drive (HDD) or a solid-state drive (SSD), routine cleanup and monitoring are important.

## 1. Disk Cleanup

Removing unnecessary files frees space and can improve speed.

Windows:
- Press Windows + S and type "Disk Cleanup"
- Select the drive (usually C:)
- Check boxes for temporary files, Recycle Bin, and other items you want to remove
- Click OK to confirm
- Uninstall unused programs from Settings > Apps
- Clear browser caches from browser settings

macOS:
- Apple menu > About This Mac > Storage > Manage
- Review recommendations for reducing storage
- Empty the Trash regularly
- Use Finder’s search filters to locate and remove large or old files

Linux:
- Clear package cache:
  sudo apt clean   (Debian/Ubuntu)
  sudo dnf clean all   (Fedora)
  sudo pacman -Sc   (Arch)
- Remove orphaned packages:
  sudo apt autoremove
- Clear user cache:
  rm -rf ~/.cache/*

## 2. SSD Health Checks

SSDs have no moving parts but still wear out over time. Monitoring their health helps you avoid unexpected failures.

Windows:
- Use the SSD manufacturer’s utility (Samsung Magician, Crucial Storage Executive, etc.) to check health, firmware, and performance.

macOS:
- Use Disk Utility to run First Aid on your SSD
- For more details:
  system_profiler SPSerialATADataType
  or use a SMART monitoring tool

Linux:
- Install smartmontools:
  sudo apt install smartmontools
- Run:
  sudo smartctl -a /dev/sda
  (Replace /dev/sda with your actual drive)
- Watch for reallocated sectors, wear level counts, and any reported errors

## 3. Storage Tips

- Keep at least 10-15% of the drive free to avoid slowdowns
- Never defragment an SSD; use TRIM instead
- TRIM commands:
  Linux: sudo fstrim -v /
  Windows and macOS: TRIM is usually enabled by default
- Organize files into clear folder structures
- Move rarely used files to external drives or cloud storage
- Always keep backups on another device or service
- Check storage usage periodically and remove unnecessary files

## 4. Key Points

- Regular cleanup prevents wasted space and slowdowns
- Use the right tool for SSD health monitoring
- Leave room for system operations
- Maintain backups to protect against failures

## 5. Summary

Disk cleanup and SSD health checks are basic but important maintenance tasks. A few minutes of regular upkeep will help your computer run smoothly, extend drive life, and reduce the chance of losing important data.

