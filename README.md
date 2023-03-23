## Push to Apinto
Push Postcat API data to open source Apinto gateway.
## 1. Apinto abstract
Apinto is a high performance, scalable, and easy to maintain cloud native API gateway.
Apinto gateway based on GO language modular development, 5 minutes of rapid deployment, simple configuration, easy maintenance, support cluster and dynamic expansion, and provides dozens of gateway plug-ins and practical enterprise plug-ins, let users out of the box.
## 2. Configuration

### 2.1 Deploy Apinto and Apinto dashboard
[Apinto open source repository](https://github.com/eolinker/apinto)

[Apinto Dashboard open source repository](https://github.com/eolinker/apinto-dashboard)

### 2.2 Dashboard configuration
Enter the address in the browser：`http://{ip or domain name}:{port}`.You can Access dashboard page.

![](http://data.eolinker.com/course/hA87gFs093ed5f3ffb14c8d65d57704b9e968287f775cce.png)
#### 1st Step：Get upstream name
Click the Upstream service menu, expand it, and then click Upstream Management to enter the Upstream management list page. If there is no upstream, you can create one. Select the desired upstream name and copy it, as shown in the following figure：

![](http://data.eolinker.com/course/p98sgww86d4c5f67849c7ec59ddb8d4297dc7337b524177.png)
#### 2nd Step：Get the group ID
![](http://data.eolinker.com/course/676MnzK6b8c6f4bb9c62f1f2bfc19f476c7da4d18a2a5ac.jpeg)
#### 3rd Step：Get the authentication Token for the OpenAPI calling Apinto

![](http://data.eolinker.com/course/jTDRMGta7cc217885627c273be2c1a3e7f2008506e308f8.png)

### 2.3 Plug-in configuration

![](http://data.eolinker.com/course/y7RiZzwd7d3116b3b265a53d6c8a5bd5ff91587f6048a85.jpeg)

## 3. Use

Enter the Settings on the main page and you can see the push function. Click this area to open the corresponding pop-up window and you can see the name of push plug-in. Please select the push platform you want and click "OK" button to complete the push.

![](http://data.eolinker.com/course/S2LyR6Y9c78e885d3b3526165663e6bc8f3389a4980a99f.jpeg)

![](http://data.eolinker.com/course/DTvpaYp5975c49b291a5131300582629d82d0e5fd218e79.jpeg)

## 4. Push result

After the push is successful, a message indicating success is displayed indicates that the push process is normal. If the push fails, a failure message will pop up. It may be a network error or the pushed data is illegal. You can contact the development developer for troubleshooting.