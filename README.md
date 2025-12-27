## Getting Access to Cookies

1.  Install Cors -> `npm i cors`
2.  Call the cors using `.use()` and set the `origin` as **URL of Frontend and** `credentials` to **True**
3.  Install Axios -> `npm i axios`
4.  Setting an extra object to make sure Cookies get added -> `axios.post("URL",{data}, {withCredentials: true})`

## Deployment Process

1. Creating AWS Account
2. Searching for "EC2" in Global Search bar on AWS Console
   EC2 (Elastic Compute Cloud) is a core Amazon Web Services (AWS) offering that provides secure, resizable virtual servers (called "instances") in the cloud, letting users rent computing power (CPU, memory, storage) to run applications without managing physical hardware, paying only for what they use, and easily scaling up or down as needed
3. Clicking on "Launch Instance" so we can create a new server where our project will run.
