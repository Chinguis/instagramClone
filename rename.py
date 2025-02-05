import os
import re

def rename_files():
    for filename in os.listdir():
        if os.path.isfile(filename):  # Ensure it's a file, not a directory
            new_filename = re.sub(r"-.*?\.", ".", filename)
            if new_filename != filename:
                os.rename(filename, new_filename)
                print(f'Renamed: "{filename}" -> "{new_filename}"')

rename_files()
