let interval;

const checkForAvailable = () => {

  const inQueueInstruct = JSON.parse(localStorage.getItem('instructQueue')) || [];

  if (inQueueInstruct) {
    const instructor = inQueueInstruct[0];
    document.getElementById('meet-link').textContent = `${instructor.user} is ready at ${instructor.meetLink}`;
    clearInterval(interval);
  }
};

interval = setInterval(checkForAvailable, 500);
