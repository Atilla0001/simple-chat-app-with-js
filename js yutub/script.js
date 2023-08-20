const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;

const creatChatLi=(message, className)=>{
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span>
    <p>${message}</p>`;
}

const handleChat = () => {
userMessage=chatInput.ariaValueMax.trim();
if (!userMessage) return;

creatChatLi(userMessage, "outgoing");
}

sendChatBtn.addEventListener("click", handleChat);