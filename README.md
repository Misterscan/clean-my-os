<p align="center">
  <img src="assets/logo.svg" alt="CleanMyOS Logo" width="600">
</p>

<p align="center">
  <img src="assets/badge_os.svg" alt="OS Support" height="20"> 
  <img src="assets/badge_lang.svg" alt="Language" height="20">
  <img src="assets/badge_status.svg" alt="Build Status" height="20">
  <img src="assets/badge_license.svg" alt="License" height="20">
</p>

<p align="center">
  A high-performance, cross-platform system scanner, optimizer, and cleaner written in <b>Sesi</b> supporting both <b>macOS</b> and <b>Windows</b>. It automatically detects the host operating system and runs optimized native cleanup and telemetry monitoring routines.
</p>

---

## 📦 Installation & Usage

You can install this package globally using npm:

```bash
# Install globally from the local source directory
npm install -g .

# Or directly from npm:
npm install -g clean-my-os
```

Once installed, you can execute the command from any terminal:

```bash
# Run interactive menu (TUI)
cleanmyos

# Run subcommands directly
cleanmyos clean --dry-run
cleanmyos status
```

---

## 🚀 Commands

We have simplified the commands to run the utility's specific modules directly through npm:

### 1. Interactive Dashboard (TUI)

Launch the interactive console menu:

```bash
npm start
```

### 2. Deep System Scan & Cleanup

Scan for junk caches (including npm, Yarn, CocoaPods, Homebrew, pip, pnpm, uv, iOS Simulators, Spotify, VS Code, Slack, Firefox, etc.), temporary directories, and developer logs.

Features include:

- **Selective Cleaning:** In interactive mode, select exactly which categories to clean.
- **Safety Whitelisting:** Protects `Xcode Archives` and `pnpm Store` by default. Can be customized via a local whitelist.

```bash
# Run safe dry-run (scans but does not delete files)
npm run clean:dry

# Scan and clean up files (will prompt for confirmation or category choices)
npm run clean

# Auto-confirm and clean files immediately
npm run clean:force
```

### 3. Real-time System Telemetry

Run the live system performance monitor (CPU, RAM, Disk usage, battery, and uptime telemetry):

```bash
npm run status
```

### 4. Performance Optimizer Suite

Flush DNS cache, rebuild launch databases/font caches, refresh shells, and purge inactive memory:

```bash
# Run safe dry-run preview of optimizations
npm run optimize --dry-run

# Run active optimizations
npm run optimize
```

### 5. Disk Space Analyzer

Analyze directory folders to list the top 20 largest files and subdirectories:

```bash
npm run analyze
```

### 6. Smart Application Uninstaller

Search for applications and automatically clean up associated library leftovers:

```bash
npm run uninstall
```

### 7. Project Build Artifact Purger

Recursively search and bulk-purge project build artifacts (like `node_modules`, `dist`, `build`, `target`, `.next`, and `.nuxt`) within a selected directory:

```bash
npm run purge
```

---

## ⚙️ CLI Options

Any subcommand accepts the following optional flags:

- `--verbose` — Print detailed command logs, execution paths, and raw system outputs.
- `--dry-run` — Scan directories and calculate sizes without deleting files.
- `-y, --yes, --force` — Skip confirmation prompts and delete files immediately.

Example of running a verbose dry-run scan via sesi:

```bash
# Load and run clean command with verbose dry-run options
sesi -l main.sesi clean --dry-run --verbose

# Or shorter version using alias via npm
npm run clean:dry:verbose
```

---

## 📂 Project Structure

- `main.sesi` - The primary Sesi script containing cross-platform optimization, cleaning, and telemetry logic.
- `bin/` - Linter (`lint.sesi`) and test framework scripts.
- `helpers/` - Custom utility scripts for workspace management.
- `package.json` - Dependency and script definitions.
