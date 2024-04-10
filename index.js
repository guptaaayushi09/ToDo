const app = require('./app');
const db = require('./config/db');
const UserModel = require('./models/user.model');
const port = 3000;

app.get('/', (req, res) => {
    res.send("hiiiiii");
});

app.listen(port, () => {
    console.log(`server listening to port http://localhost:${port}`);
});
