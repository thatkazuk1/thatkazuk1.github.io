#!/bin/bash
# A script that downloads the latest CV PDF release from Github and places it in `/assets` folder

CV_URL="https://github.com/thatkazuk1/personal-latex-moderncv/releases/download/latest/desmond_edem.pdf"
DESTINATION_PATH="assets/desmond_edem.pdf"

echo "Downloading latest CV from $CV_URL ..."
curl -sL -o "$DESTINATION_PATH" "$CV_URL" # Download the file

# Check if download was successful. Exit code is 0 on success.
if [ $? -eq 0 ]; then
  echo "✅ Success! CV has been updated at $DESTINATION_PATH"
  echo "⚠️ Commit new file to portfolio repository."
else
  echo "❌ Error: Failed to download file. Check URL and internet connection."
  exit 1
fi
