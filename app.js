// nodejs 의 core module
// 1. http // launch a server, send request
// 2. https // launch a secure server(SSL)
// 3. fs  // file system
// 4. path // file path
// 5. os // operating system
const http = require('http');

// Node.js의 아키텍쳐 : Event driven Architecture
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);

// Nodejs의 lifecycle
// 전체 코드를 분석(parse)하고 변수&함수를 등록(register)한다.
// 중요한 것은 그 후 프로그램이 종료되지 않고 이벤트를 기다리는 것.
// Nodejs가 관리하는 이벤트 루프는 작업이 남아 있는 한 계속해서 작동하는 루프 프로세스로
// 이벤트 리스너가 존재하는 한 계속 작동한다.
// 위에서 createServer의 콜백함수인 이벤트 리스너를 제거하지 않았기에 서버가 종료되지 않고 계속 작동한다.
// Nodejs의 이벤트 루프는 싱글 스레드로 동작한다.
// 하지만 싱글 스레드로 동작하는 Nodejs는 멀티 스레드로 동작하는 웹 서버보다 더 빠르게 동작한다.
// 이는 Nodejs가 이벤트 루프를 통해 비동기 방식으로 작동하기 때문이다.
// Nodejs는 이벤트 루프를 통해 비동기 방식으로 작동하기 때문에
// 하나의 스레드가 작업을 처리하는 동안 다른 스레드가 대기하는 일이 없다.
// 이는 Nodejs가 작업을 처리하는 동안 다른 작업을 처리할 수 있기 때문에
// 멀티 스레드로 동작하는 웹 서버보다 더 빠르게 동작한다.

