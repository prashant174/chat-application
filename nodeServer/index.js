

const io=require("socket.io")(8000)
let corsOptions = {
    origin : ['http://localhost:5500'],
} 
const users={}

io.on("connection",socket=>{
    socket.on("new-user-joined",aheer=>{
        console.log("newUser",aheer)
        users[socket.id]=aheer;
        socket.broadcast.emit('user-joined',aheer)
    })

    socket.on("send", message=>{
        socket.broadcast.emit("recieve", {message:message, name: user[socket.id]})
    })
})