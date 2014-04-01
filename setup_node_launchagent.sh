#!/bin/bash

ARGV="/Users/$USER/Desktop"

# output xml template to file
echo "<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/D    TDs/PropertyList-1.0.dtd'>
  <plist>
  <dict>
    <key>Label</key>
    <string>com.setup_node</string>
    <key>ProgramArguments</key>
    <array>
      <string>/usr/local/bin/node</string>
      <string>$PWD/img_correct.js</string>
			<string>$ARGV</string>
    </array>
    <key>StandardOutPath</key>
    <string>/Users/$USER/Desktop/script.log</string>
    <key>RunAtLoad</key>
    <true/>
  </dict>
  </plist>" > 'output.txt' 

PLIST="$HOME/Library/LaunchAgents/com.setup_node.plist" 

cp 'output.txt' $PLIST 

# reload the launchagents
launchctl unload $PLIST
launchctl load $PLIST
