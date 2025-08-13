# Self-hosting basics: running Nextcloud or Jellyfin from home

## Introduction
Self-hosting means running services on your own hardware instead of relying on third-party providers. Two popular self-hosted applications are Nextcloud (file storage, syncing, and collaboration) and Jellyfin (media server for streaming movies, TV, and music). Hosting them at home gives you full control over your data, no subscription fees, and the ability to customize features.


# Why self-hosting matters: owning your own digital space alongside public services

Most people today rely on big-name cloud and streaming services. Photos go to iCloud or Google Photos. Files live in Google Drive or Dropbox. Music comes from Spotify. TV and movies come from Netflix or Disney+. These services are convenient, polished, and accessible from anywhere but they are not really *yours*. Your data, your media, and your access are tied to a company’s servers and terms. If they change the rules, shut down a service, or remove content, you have no control.

Self-hosting is about creating your own private cloud or media hub that exists outside of those platforms. It does not replace Netflix, Spotify, or iCloud, instead it complements them. It gives you a *place of your own* in the digital world, one where you decide what stays, what goes, and how it works.

## What self-hosting REALLY is
Self-hosting means running your own server, which is a computer that holds your digital media. Services like:

- **Plex** or **Jellyfin**: Stream your personal movie, TV, and music collection to any device you own, anywhere in the world. Similar to NetFlix or Spotify
- **Nextcloud**: Store and sync your documents, photos, and files privately, like your own personal Google Drive or iCloud.

You control the hardware, the software, and the data. You are not locked to a subscription or dependent on a company’s decision to keep your content available.

## How they are the same
Public cloud services and self-hosted tools share some similarities:
- **Access anywhere**: Both let you use your data and media on different devices.
- **Sharing**: You can share links, albums, or files with others.
- **Organization**: Both offer ways to sort, tag, and manage your media.
- **Convenience**: Once set up, they can be as easy to use as a commercial service.

## How they are different
**Control** 
- Public services: Company controls the infrastructure, features, and rules.
- Self-hosted: You control storage, access, updates, and policies.

**Ownership** 
- Public services: Your content is stored on their servers under their terms of service.
- Self-hosted: Your content lives on your own hardware.

**Longevity** 
- Public services: Content can disappear if licensing changes, accounts are closed, or companies shut down.
- Self-hosted: As long as your server runs and you keep backups, it stays available.

**Privacy** 
- Public services: Your data is often scanned or analyzed for personalization, advertising, or machine learning.
- Self-hosted: Your data is only accessible to you (and anyone you grant access).

## The benefits of self-hosting
1. **A place of your own** 
   In the physical world, you have a home address. In the digital world, most people rent space from corporations. Self-hosting gives you a permanent address for your files and media.

2. **Bridging the gap between owned and streamed** 
   Netflix and Spotify are great for discovery, but they do not host the personal videos you filmed, the rare albums you digitized, or the movies you bought years ago that have vanished from streaming platforms. Self-hosting lets you keep these alongside public media—one interface, all your content.

3. **No algorithm deciding for you** 
   Your collection is organized the way you like it, without recommendations replacing what you actually own.

4. **Offline capability** 
   Even if your internet is down, you still have your library.

5. **Cost control** 
   No monthly fees for storing your own data, aside from electricity and internet.

## The trade-offs
- **Setup**: You must spend time configuring the system.
- **Maintenance**: You are responsible for updates, backups, and security.
- **Upfront cost**: A modest investment in hardware is required, though it can be reused and upgraded over time.

## Why this matters now
We have moved into an era where most people no longer own their media or have private space for it. Our photos, documents, and entertainment exist only because companies let us access them. The moment a service changes its policy, loses a license, or shuts down, that content can vanish. Self-hosting is not about rejecting the convenience of public clouds, it is about ensuring you have your own base of operations. 

When combined, public services give you breadth, and self-hosting gives you permanence. One lets you explore what is out there; the other lets you preserve what is yours. Together, they restore balance to a digital life that has become entirely dependent on companies you do not control.


Public cloud and streaming services are valuable, but they are not enough on their own. Without self-hosting, you are renting your entire digital life from others. By adding tools like Plex, Jellyfin, or Nextcloud to your setup, you gain a secure, private, and lasting home for your files and media. In a world where ownership is fading, self-hosting keeps you in control.


How To Guide:

## Step 1: Understand the requirements
Hardware:
- A desktop PC, dedicated server, mini PC, or NAS
- Minimum for light use: 2 CPU cores, 4 GB RAM, 100 GB storage
- More users or heavy streaming will need more CPU, RAM, and fast storage

Network:
- Stable internet connection
- Router that allows port forwarding if you want remote access
- Optional: dynamic DNS service if you do not have a static public IP

Software:
- Linux (Ubuntu Server or Debian are common for beginners) is recommended for stability
- Docker (optional) to simplify installation and updates

## Step 2: Choose your hosting method
Bare metal:
- Install the application directly on your operating system
- More direct control but requires careful dependency management

Virtual machine (VM):
- Run the service in its own isolated environment
- Easier to snapshot and back up

Docker container:
- Simplifies installation and updating
- Encapsulates dependencies for fewer conflicts

## Step 3: Installing Nextcloud (basic method)
Example: Docker Compose setup

1. Install Docker and Docker Compose:
```   
   sudo apt update
   sudo apt install docker.io docker-compose
```

2. Create a directory for Nextcloud:
```   
   mkdir ~/nextcloud && cd ~/nextcloud
```

3. Create docker-compose.yml:

```
   version: '3'

   services:
     db:
       image: mariadb
       restart: always
       command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
       environment:
         - MYSQL_ROOT_PASSWORD=securepassword
         - MYSQL_PASSWORD=nextcloudpass
         - MYSQL_DATABASE=nextcloud
         - MYSQL_USER=nextcloud
       volumes:
         - db:/var/lib/mysql

     app:
       image: nextcloud
       ports:
         - 8080:80
       links:
         - db
       volumes:
         - nextcloud:/var/www/html
       restart: always

   volumes:
     db:
     nextcloud:
```
4. Start the services:
```
   sudo docker-compose up -d
```

5. Access Nextcloud in a browser at http://your-server-ip:8080 and complete the setup.

## Step 4: Installing Jellyfin (basic method)
Example: Docker setup

1. Create a directory for Jellyfin:
```
   mkdir ~/jellyfin && cd ~/jellyfin
```

2. Create docker-compose.yml:

```   
   version: '3'

   services:
     jellyfin:
       image: jellyfin/jellyfin
       volumes:
         - ./config:/config
         - ./cache:/cache
         - /path/to/media:/media
       ports:
         - 8096:8096
   
      restart: unless-stopped

```

3. Start the service:

```
   sudo docker-compose up -d

```

4. Access Jellyfin in a browser at http://your-server-ip:8096 and follow the setup wizard.

## Step 5: Optimization and security
- Backups: Regularly back up configuration and data volumes
- HTTPS: Use a reverse proxy (like Nginx Proxy Manager) with Let’s Encrypt for SSL certificates
- User management: Create separate accounts for each user; avoid sharing admin accounts
- Updates: Keep both your host system and the applications updated to patch security vulnerabilities

## Step 6: Remote access
1. Set up port forwarding on your router to allow external access (e.g., 8080 for Nextcloud, 8096 for Jellyfin)
2. Use a dynamic DNS service so you can access your server without remembering your changing IP
3. Secure remote connections with HTTPS and, if possible, a VPN

## Summary
Self-hosting services like Nextcloud and Jellyfin lets you control your own data and avoid recurring costs. By choosing the right hardware, securing your setup, and keeping backups, you can run reliable file sharing, syncing, and media streaming from your own home network. Docker simplifies installation and maintenance, but any method should be combined with good security practices.

