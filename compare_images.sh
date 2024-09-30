#!/bin/bash

# Define the directories
BASELINE_DIR="./__tests__/artifacts/baseline"
# CURRENT_DIR="./current"
DIFF_DIR="./__tests__/artifacts/diff"
# Find the latest folder based on creation time
CURRENT_DIR="./__tests__/artifacts/current"


# Check if a latest folder was found
if [ -n "$CURRENT_DIR" ]; then
    echo "Latest folder: $CURRENT_DIR"
else
    echo "No folders found in $PARENT_DIR"
fi

# CURRENT_DIR="$CURRENT_DIR/$TARGET_DIR"

# Remove and Create the diff directory if it doesn't exist
mkdir -p "$DIFF_DIR"

# Log file for differences
LOG_FILE="./__tests__/artifacts/comparison_log.txt"
> "$LOG_FILE" # Clear the log file

# Function to compare images
compare_images() {
    local baseline_file="$1"
    local current_file="$2"
    local diff_file="$3"

    # Compare the images
    compare -metric AE "$baseline_file" "$current_file" "$diff_file" 2>&1 | awk '{if($1 ~ /^[0-9]+(\.[0-9]+)?e\+[0-9]+$/) {printf "%.0f\n", $1} else {print $1}}'
}

# Loop through all images in the baseline directory
for baseline_file in "$BASELINE_DIR"/*; do
    # Extract the file name without path
    filename=$(basename "$baseline_file")
    current_file="$CURRENT_DIR/$filename"
    diff_file="$DIFF_DIR/${filename}-diff.png"

    # Check if the current image exists
    if [ -f "$current_file" ]; then
        # Compare the images and get the number of different pixels
        diff_count=$(compare_images "$baseline_file" "$current_file" "$diff_file")

        # If there are differences, log it and create the diff image
        if [ "$diff_count" -gt 0 ]; then
            echo "Difference found in $filename: $diff_count pixels different" >> "$LOG_FILE"
            echo "Diff image created: $diff_file"
        else
            echo "No differences in $filename"
            # Remove the diff file if it exists
            [ -f "$diff_file" ] && rm -rf "$diff_file"
        fi
    else
        echo "Current image not found for $filename check the current folder and baseline folder"
    fi
done

echo "Comparison complete. Check $LOG_FILE for details."
