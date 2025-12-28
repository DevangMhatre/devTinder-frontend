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

## Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-43-204-96-49.ap-south-1.compute.amazonaws.com
- Install Node version 16.17.0
- Git clone
- Frontend
  - npm install -> dependencies install
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build files) to /var/www/html/
  - sudo scp -r dist/\* /var/www/html/
  - Enable port :80 of your instance
- Backend
  - updated DB password
  - allowed ec2 instance public IP on mongodb server
  - npm intsall pm2 -g
  - pm2 start npm --name "devTinder-backend" -- start
  - pm2 logs
  - pm2 list, pm2 flush <name> , pm2 stop <name>, pm2 delete <name>
  - config nginx - /etc/nginx/sites-available/default
  - restart nginx - sudo systemctl restart nginx
  - Modify the BASEURL in frontend project to "/api"
