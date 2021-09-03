let interval;

const checkForAvailable = () => {
    const inQueueHelp = JSON.parse(localStorage.getItem('helpQueue')) || [];

    if (inQueueHelp.length) {
        document.getElementById('assigned-info').textContent = `${inQueueHelp[0].user} was notified and will join soon!`;
        document.getElementById('donebtn').style.display = '';
        clearInterval(interval);
    }
}

interval = setInterval(checkForAvailable, 1000);
