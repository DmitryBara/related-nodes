* For starting and test programm you should run 4 separate processes:


1. Install dependencies
```
npm install
cd client && npm install
```


2. Run servers:

```
npm run server1
npm run server2
```


3. Run clients:

```
cd client && npm run client2
cd client && npm run client1
```


4. Test the whole system

On client 1 enter any text message and press submit button.
Message will appear on client 2.



* Scheme of system

```
client 1 - server 1: socket
server 1 - server 2: webhook // Better choice is message broker like RabbitMQ 
server 2 - client 2: socket
```
