# Setting up a bootable USB recovery toolkit (multi-platform)

## Introduction
A bootable USB recovery toolkit is a portable drive that can start a computer independently of its installed operating system. It can help you repair, diagnose, or recover data from systems that will not start normally. This guide explains how to prepare one that works across multiple platforms (Windows, macOS, and Linux).

## What you need
- A USB flash drive (at least 8 GB, 16 GB or larger recommended)
- Access to a working computer with internet
- Disk imaging or multiboot creation software
- ISO images of the recovery tools you want to include

## Step 1: Choose your recovery tools
Select operating system images or dedicated utilities based on your needs. Common choices:
- **Windows**: Windows installation/recovery media, Windows PE-based toolkits like Hiren’s BootCD PE
- **Linux**: Live distributions with recovery tools (Ubuntu, SystemRescue, Kali for security diagnostics)
- **macOS**: macOS installer or recovery image (requires Apple hardware to create)
- **Specialized tools**: MemTest86 for memory tests, GParted Live for partition management, antivirus rescue disks

Download the official ISO files from the vendor or project website to avoid tampered copies.

## Step 2: Select creation method
You can create a single-boot or multiboot USB.

### Option A: Single-boot USB
This is the simplest method. One ISO at a time.
1. Download a tool like Rufus (Windows), balenaEtcher (cross-platform), or `dd` (Linux/macOS CLI).
2. Insert your USB drive.
3. Open the tool, select your ISO file, choose the USB drive as the target, and start writing.
4. This overwrites the USB completely with the chosen image.

### Option B: Multiboot USB
This lets you store and boot multiple recovery environments from one drive.
1. Use a multiboot creation tool such as Ventoy (cross-platform) or Easy2Boot (Windows).
2. Install the tool onto the USB drive (this will erase it).
3. After installation, simply copy multiple ISO files onto the USB drive like normal files.
4. When you boot from the USB, you can select which ISO to load from a menu.

## Step 3: Make the USB bootable
For most tools like Rufus or Ventoy, the bootable setup is automatic. If you need to do it manually:
1. Format the USB drive with FAT32 or exFAT for maximum compatibility.
2. Make the partition active/bootable (Windows: Disk Management; Linux/macOS: `fdisk` or `parted`).
3. Install a bootloader (GRUB is a common choice) and configure it to point to your ISO files.

## Step 4: Test the USB
Before relying on it in an emergency:
- Boot it on the computer you intend to use it with.
- On startup, enter the boot menu (often F12, Esc, F10, or Del depending on hardware).
- Verify that each tool starts correctly.

## Step 5: Keep it updated
- Update ISO files periodically so you have the latest patches and drivers.
- Check that the USB still boots after updates.
- Keep a copy of the ISO files on another drive in case the USB becomes corrupted.

## Tips for cross-platform compatibility
- For Windows recovery, include at least one WinPE-based tool and the official installation ISO.
- For macOS, a USB recovery drive can only be created on a Mac. Use Disk Utility or the `createinstallmedia` command.
- For Linux, most modern live ISOs boot on both legacy BIOS and UEFI systems.
- If you want the USB to work on very old hardware, ensure it supports legacy boot.

## Summary
A bootable USB recovery toolkit gives you a ready-to-use set of tools for system repair, regardless of the platform. By using a multiboot solution like Ventoy, you can store several environments on one drive, making it a versatile and space-saving solution. With regular updates and testing, it becomes a reliable first line of defense when systems fail.

