const express = require('express');
const session = require('express-session');
const passport = require('passport');
const database = require('./configs/db');
const authRouter = require('./routes/auth');
const taskRouter = require('./routes/task.routes');
const userRouter = require('./routes/user.routes');
const cors = require('cors');
require('./middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    return res.send({
        message: 'Welcome to co-schedule API',
        registration: 'https://coschedule-server.onrender.com/api/auth/register',
        login: 'https://coschedule-server.onrender.com/api/auth/login',
        getAllUsers: "https://coschedule-server.onrender.com/api/users",
        getUserById: "https://coschedule-server.onrender.com/api/users/:id",
        updateUser: "https://coschedule-server.onrender.com/api/users/:id",
        getAllTasksByemail: "https://coschedule-server.onrender.com/api/tasks",
        getAllTasks: "https://coschedule-server.onrender.com/api/tasks/all",
        getTaskById: "https://coschedule-server.onrender.com/api/tasks/:id",
        createTask: "https://coschedule-server.onrender.com/api/tasks",
        updateTask: "https://coschedule-server.onrender.com/api/tasks/:id",
        deleteTask: "https://coschedule-server.onrender.com/api/tasks/:id"
    });
});



app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    database();
    console.log(`Listening on port ${PORT}`);
});
