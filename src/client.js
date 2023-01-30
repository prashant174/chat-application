

const socket=io("http://localhost:8000")

const form =document.getElementById("send-container")
const messageInput=document.getElementById('messageInp')
const messageContainer=document.querySelector(".container")


const append=(message,position)=>{
const messageElement=document.createElement('div')
messageElement.innerText=message;
messageElement.classList.add("message");
messageElement.classList.add(position)
messageContainer.append(messageElement);
}

const aheer=prompt("your name please")
socket.emit("new-user-joined",aheer)

socket.on("user-joined",aheer=>{
append(`${aheer} joined the chat`, "right")
})