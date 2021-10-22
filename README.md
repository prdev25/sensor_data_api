# Sensor_data_api
An express, node.JS, MongoDB based backend for recieving and storing sensor data in JSON.

## Project Description
IOT based sensors can send sensor data using HTTP POST request as JSON. This is backend for recieving and storing that data.

## Features
- Can reject data from unknown or unidentified sensor. Sender identification using sensor id.

- Can reject corrupted data which doesn't matches the prescribed format. 

---
## Requirements

For development, you will need Node.js and and mongoDB, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/prdev25/sensor_data_api.git
```
and install the dependencies
```
npm install
```
#### MongoDB
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

MongoDB community edition downloadload page for other OS - https://www.mongodb.com/try/download/community?tck=docs_server

### Start the MongoDB server
change database url with your url in DB.js

### Run the Application

The project is preconfigured with a simple development web server. The simplest way to start this server is:

    nodemon ./index.js




## API Reference

#### send data from sensor

```http
  POST /api/sensor
```

| Parameter     | Type     | Description                     |
| :------------ | :------- | :------------------------- -----|
| `sensor_id`   | `string` | **Required**. correct sensor id |
| `sensor_data` | `array`  | **Required**. data in array     |

#### check api

```http
  GET /
```

  
