# -*- coding: utf-8 -*-
from __future__ import print_function
import json
import yaml
import os
import codecs

# Load the JSON data
with open('./data/projects.json', 'r') as json_file:
    projects = json.load(json_file)

# Create output directory if it doesn't exist
output_dir = './content/projects'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Iterate through each project and save as YAML
for project in projects:
    project_slug = project['slug']
    yaml_file_path = os.path.join(output_dir, project_slug + '.yml')
    
    with codecs.open(yaml_file_path, 'w', encoding='utf-8') as yaml_file:
        yaml.safe_dump(project, yaml_file, allow_unicode=True, sort_keys=False)

print("Projects have been split into YAML files.")