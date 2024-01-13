import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import UserSchema from './model/User.model.js';
import mongoose from 'mongoose';
import bodyParser from"body-parser";


const app = express();

/** middlewares */
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack


const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});


// get all user
app.get('/getAllUsers', async (req, res) => {
    try {
        const users = await UserSchema.find({})
        res.json(users)
    } catch (error) {
        console.log(error);
    }
})

// get one user by id
app.get('/:id', async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Invalid ID"})
    }

    const user = await UserSchema.findById(id)
    if(!user) {
        return res.json({error: "No such ID"});
    }
    res.json(user)
})


// post one user
app.post('/addUser', async (req, res) => {
    const { username, password, fullname, points } = req.body;
    try {
        const newUser = new UserSchema({ username, password, fullname, points });
        await newUser.save();
        res.send({ status: "ok", data: newUser })
    } catch (error) {
        console.log(error);
    }
})


// delete one user by id
app.delete("/:id", async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Invalid ID"})
    }

    const del = await UserSchema.findOneAndDelete({_id: id})
    if(!del) {
        return res.status(404).json({error: "No such User"});
    }
    res.send({ status: "ok", data: del })
})


// increase points of user by 10
app.post("/increase10/:id", async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Invalid ID"})
    }

    const user = await UserSchema.findById(id)
    if(!user) {
        return res.json({error: "No such ID"});
    }

    let points = user.points;

    let updatedPoints = points + 10;
    let upd = await UserSchema.findOneAndUpdate({_id: id}, { points: updatedPoints } )
    res.send({ status: "ok", message:"updated points", data: upd })
})


// increase points of user by 20
app.post("/increase20/:id", async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Invalid ID"})
    }

    const user = await UserSchema.findById(id)
    if(!user) {
        return res.json({error: "No such ID"});
    }

    let points = user.points;

    let updatedPoints = points + 20;
    let upd = await UserSchema.findOneAndUpdate({_id: id}, { points: updatedPoints } )
    res.send({ status: "ok", message:"updated points", data: upd })
})


// decrease points of user by 10
app.post("/decrease10/:id", async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Invalid ID"})
    }

    const user = await UserSchema.findById(id)
    if(!user) {
        return res.json({error: "No such ID"});
    }

    let points = user.points;

    let updatedPoints = points - 10;
    let upd = await UserSchema.findOneAndUpdate({_id: id}, { points: updatedPoints } )
    res.send({ status: "ok", message:"updated points", data: upd })
})

// decrease points of user by 20
app.post("/decrease20/:id", async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Invalid ID"})
    }

    const user = await UserSchema.findById(id)
    if(!user) {
        return res.json({error: "No such ID"});
    }

    let points = user.points;

    let updatedPoints = points - 20;
    let upd = await UserSchema.findOneAndUpdate({_id: id}, { points: updatedPoints } )
    res.send({ status: "ok", message:"updated points", data: upd })
})


// increase points of user by 50
app.post("/increase50/:id", async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Invalid ID"})
    }

    const user = await UserSchema.findById(id)
    if(!user) {
        return res.json({error: "No such ID"});
    }

    let points = user.points;

    let updatedPoints = points + 50;
    let upd = await UserSchema.findOneAndUpdate({_id: id}, { points: updatedPoints } )
    res.send({ status: "ok", message:"updated points", data: upd })
})

// decrease points of user by 50
app.post("/decrease50/:id", async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Invalid ID"})
    }

    const user = await UserSchema.findById(id)
    if(!user) {
        return res.json({error: "No such ID"});
    }

    let points = user.points;

    let updatedPoints = points - 50;
    let upd = await UserSchema.findOneAndUpdate({_id: id}, { points: updatedPoints } )
    res.send({ status: "ok", message:"updated points", data: upd })
})


/** api routes */
app.use('/api', router)

// app.use(bodyParser({limit: '1mb'}));

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})

