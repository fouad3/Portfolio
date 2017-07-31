# Project : Portfolio Website
## By  Fouad Asharf



## Table of contents
- [Description](#description)
- [Required Libraries and Dependencies](#required-libraries-and-dependencies)
- [How to Run Project](#how-to-run-project)
- [Project contents](#project-contents)
- [Copyright and license](#copyright-and-license)
 
## Description
This is a simple portfolio website which displays a listing of my projects in full stack web development career,this project is a part of the Udacity [Full Stack Web Developer
Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004).

## Required Libraries and Dependencies

To use grunt you have to do the following (optional):
1. install nodejs you can download it from https://nodejs.org/en/download/
2. install image magic you can download it from https://www.imagemagick.org/script/download.php


## How to Run Project

Download the project zip file to you computer and unzip the file. Or clone this repository to your desktop using the terminal window in Linux or the command prompt in Windows and type the following command:
```bash
git clone https://github.com/fouad3/Portfolio_udacity_project.git 
```

Get to the project folder and click on [portfolio.html](https://github.com/fouad3/Portfolio_udacity_project/blob/master/portfolio.html) and Your default browser should launch a new tab displaying the portfolio website.


#### To run grunt you have to run the following (optional):

1-Navigate to the project directory using the following command:


```
cd Portfolio_udacity_project
```


2-Download all necessary packages using the following command:
```
npm install
```

3-Run grunt using the following command:
```
grunt
```


## Project contents



#### [portfolio.html](https://github.com/fouad3/Portfolio_udacity_project/blob/master/portfolio.html)

html file consist of four semantic elements:
1. header: consist of  logo and name 
2. main section: consist of feature work articles 
3. article: consist of link,image and header of project
4. footer: consist of paragraphs of information about the author of the website and its social networks (facebook,github...)

#### [style.css](https://github.com/fouad3/Portfolio_udacity_project/blob/master/css/style.css)
css file contains the style of [portflio.html](https://github.com/fouad3/Portfolio_udacity_project/blob/master/portfolio.html) file 

#### [Gruntfile.js](https://github.com/fouad3/Portfolio_udacity_project/blob/master/Gruntfile.js)
javascript file consist of three functions:
1. cwebp:converte images to webp format.
2. responsive_images:create images with different resolutions and optmize them.
3. copy:copy svg images from images_src folder to images folder.


## Copyright and License

- supplied without rights information contributed by [Udacity](http://www.udacity.com).
