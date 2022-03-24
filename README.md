* For starting and test programm you should run 4 separate processes:


1. Run servers (from root folder):

```
npm install
npm run server1
npm run server2
```


2. Run clients (from ./client folder):

```
npm install
npm run client2
npm run client1
```


3. Test the whole system

On client 1 enter any text message and press submit button.
Message will appear on client 2.



* Scheme of system

```
client 1 - server 1: socket
server 1 - server 2: webhook // Better choice is message broker like RabbitMQ 
server 2 - client 2: socket
```
