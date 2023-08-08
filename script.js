const chatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;
const createChatLi = (message, className) =>{
    const chatLi = document.createElement("li");

}

const handleChat = ()=>{
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if(!userMessage) return;

    createChatLi(userMessage, "outgoing")
}
 
sendChatBtn.addEventListener("click", handleChat );

