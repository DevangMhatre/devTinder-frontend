## Getting Access to Cookies

1.  Install Cors -> `npm i cors`
2.  Call the cors using `.use()` and set the `origin` as **URL of Frontend and** `credentials` to **True**
3.  Install Axios -> `npm i axios`
4.  Setting an extra object to make sure Cookies get added -> `axios.post("URL",{data}, {withCredentials: true})`
