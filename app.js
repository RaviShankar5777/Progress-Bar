function progressBar() {
    let container = document.querySelector(".container");
    let output = document.querySelector(".output");
    let fill = document.querySelector(".fill");
    let click = document.querySelector("button");
    let counter = document.querySelector(".counter");
    let btn = document.querySelector("#btn");
    let main = document.querySelector(".main");
  
    let circle = document.querySelector(".circle");
  let circularProgress = document.querySelector(".circular-progress");
  let progressValue = document.querySelector(".progress-value");
  
  
    let progressStartValue = 0,
      progressEndValue = 100,
      speed = 100;
  
    let progress = setInterval(() => {
      progressStartValue++;
      
      if (progressStartValue <= progressEndValue) {
        
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        progressValue.innerHTML =`${progressStartValue}%`;
        fill.style.width = `${progressStartValue}%`;
        counter.innerHTML = `${progressStartValue}%`;
      } else {
        output.style.display = 'block'
        clearInterval(progress);
  
        main.style.backgroundImage = `url("./laughing-35.gif")`;
        container.style.display = 'none';
      }
      
    }, speed);
    output.style.display = 'none';
  
    main.style.backgroundImage = "none";
   
  }
  
  
  
  