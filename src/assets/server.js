const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    console.log(user)
    res.json(user); // Retorna o usuário se as credenciais forem válidas
  } else {
    res.status(401).json({ message: 'Invalid credentials' }); // Retorna um erro se as credenciais forem inválidas
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
