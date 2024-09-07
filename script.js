document.querySelector('.view-all').addEventListener('click', function() {
    alert('View all categories clicked!');
});
function countdown(endDate, elementId) {
    let timer;
    const end = new Date(endDate).getTime();
  
    function updateTimer() {
      const now = new Date().getTime();
      const distance = end - now;
  
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById(elementId).innerHTML = "EXPIRED";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById(elementId).innerHTML = `${days} days : ${hours} hours : ${minutes} mins : ${seconds} secs`;
    }
  
    timer = setInterval(updateTimer, 1000);
  }
  
  countdown('2024-12-31T23:59:59', 'timer1');
  