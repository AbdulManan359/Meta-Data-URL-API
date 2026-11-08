# Meta Data URL API

## This API extracts the Meta data from a URL.

### Introduction
Meta data URL API extracts the meta data from the input URL. We can only send one link at a time as an output. And the response is the JSON containing the following data in a JSON:
- Title: Meta-Data Title
- Description: Meta-Data Description
- Language
- Author
- Last Modified date
- Image Tags
- Favicons
- Canonical
- Keywords
- ogTags
- twitterTags

### Tools & Technologies Used
- Javascript
- NodeJS
- ExpressJS

### NPM Dependencies
- ExpressJS version 5.2.1
- url-metadata version 5.4.1


### How to use it?
- After getting the files, open and **cd** towards this project folder in any command CLI like BASH CLI.
- Here, type <br>
```
node server.js
```
<br> (Make sure that NodeJS is already installed)
- You will see the following message appears: <br> > Server running on Port:4000
- And then make a get request to the following link: <br>
```
http://localhost:4000/meta_data?url=[inputURL]
```
<br>
Here, in [inputURL] write the URL of the website to get its meta data. <br>
* Thus, you will get the results as a JSON
