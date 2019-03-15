# Gun Violence Heatmap marketing page

This is the marketing page for the Gun Violence Heatmap web application.

## Dependencies

I used the Scroll Reveal library for animating/revealing the content as the user scrolls down the page. The documentation for that library can be found here: https://scrollrevealjs.org/guide/hello-world.html

I wrote the styles in LESS. This required installing Yarn (or Homebrew on Mac) and node.js. Here are the instructions I used for downloading and operating LESS:

## Step By Step Install Instructions for Mac

**Step 1: Install Homebrew**

Follow the instructions on how to install Homebrew using your terminal
Pay attention to the terminal as the installer will ask for a password
The Homebrew installer automatically includes Node.js

**Step 2: Install Yarn Using Homebrew**

Once Homebrew has been installed, run brew install yarn
If you get a warning to upgrade Yarn run brew upgrade yarn
Test that yarn is running by opening your terminal and run yarn --version

**Step 3: Install Less**

NOTE: You will see our commands have global in them. Please write the commands exactly as you see them. Globally installing packages is ideal for our situation. As you learn more about Yarn in the future you will be using a lock file to control your packages but for now, please use the global keyword.

Open terminal and run yarn global add less
If it’s not working, restart terminal and try again

**Step 4: Install less-watch-compiler**

Open terminal and run yarn global add less-watch-compiler

**Step 5: Use less-watch-compiler On Your Project**


cd into your project on your local machine
Once you are in the root of your project run *less-watch-compiler less css index.less*
Your project should be up and running, change some styles around in your .less file and save the file to make sure you see a change in your CSS.
Great work, you’re all set up!


## Step By Step Install Instructions for PC

**Step 1: Install Node.js**

**Step 2: Install Git Bash (Git SCM)**

After installer is finished, open git bash and run node -v to make sure node is installed correctly
If you don’t see some node version numbers display in your git bash window, restart git bash and try again

**Step 3: Install Yarn Using .msi Installer**

Once installed, open git bash and run yarn --version to see if you got Yarn working
If it’s not working, try restarting your computer and attempting the .msi installer link again

**Step 4: Install Less**

NOTE: You will see our commands have global in them. Please write the commands exactly as you see them. Globally installing packages is ideal for our situation. As you learn more about Yarn in the future you will be using a lock file to control your packages but for now, please use the global keyword.

Open git bash and run yarn global add less
If it’s not working, restart git bash and try again

**Step 5: Install less-watch-compiler**

Open git bash and run yarn global add less-watch-compiler

**Step 6: Use less-watch-compiler On Your Project**

cd into your project on your local machine
Once you are in the root of your project run *less-watch-compiler less css index.less*
Your project should be up and running, change some styles around in your .less file and save the file to make sure you see a change in your CSS.
Great work, you’re all set up!

## How to deploy

This project was hosted on Netlify ( www.netlify.com ), which has an easy to use interface for quickly deploying static sites. There are a number of services that can do this, and any of them would be fine. 

## Where I have it hosted

Netlify