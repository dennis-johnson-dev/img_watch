# Image Watch Script

This is a script that allows you to watch a particular folder for images whose name contains a particular regex.

# Installation

You need to install the required node modules. Navigate to the folder where the node script is located and run the following command.

````
$ npm install
````

You also need to run the shell script to properly add the watch script to launch upon login.

````
$ ./setup_node_launchagent.sh
````

# Usage

Right now, I use it to locate any images containing a partiular character code in the image filename, I.E. PLU-foobar.jpg. Once such an image is found, it is renamed to _junk.jpg to signify that it is a bad image to use.

Currently the script watches the desktop, you can change this to whatever folder you want in the shell script. The shell script defines parameters that you are passing to the node script. If you don't want the watch script to load upon every login, don't run the shell script. 
