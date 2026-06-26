#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

// Path to the Sesi executable and main script
const sesiCli = path.join(__dirname, '..', 'node_modules', '@misterscan/sesi', 'bin', 'sesi.js');
const scriptPath = path.join(__dirname, '..', 'main.sesi');

// Format command-line arguments to run main.sesi with the user's arguments
const args = ['-l', scriptPath];
if (process.argv.length > 2) {
  args.push(...process.argv.slice(2));
}

// Spawn the Sesi interpreter in a child process, inheriting stdin/stdout/stderr
const child = spawn('node', [sesiCli, ...args], {
  stdio: 'inherit',
  shell: false
});

child.on('close', (code) => {
  process.exit(code !== null ? code : 0);
});

child.on('error', (err) => {
  console.error('Failed to start CleanMyOS:', err);
  process.exit(1);
});
