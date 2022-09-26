

let changeColor = document.getElementById("giveMeme");

chrome.storage.sync.get("color", ({ color }) => {
  
});


function setPageBackgroundColor(tab) {
  chrome.storage.sync.get("color", ({ color }) => {

    let maindivv = document.createElement('div');
    maindivv.id = "maindivv";

    let dv = document.createElement('div');
    dv.id = "divvclass";
    dv.style.backgroundImage = 'url('+chrome.runtime.getURL('bg.png')+')';
    
    //dv.style.backgroundColor = "#b65353";

    let imgcont = document.createElement('div');
    imgcont.id = "imgcont";
    let divv = document.createElement('img');
    divv.className = "imgclass";
    divv.src = chrome.runtime.getURL('Memes/'+(Math.floor(Math.random() * 18) + 1).toString()+'.jpg');
    dv.style.top = (window.pageYOffset + 100).toString() + 'px';
    imgcont.appendChild(divv);
    dv.appendChild(imgcont);
    maindivv.appendChild(dv);
    document.body.appendChild(maindivv);

    document.addEventListener('click', function() {
      var link = document.getElementById('maindivv');
      // onClick's logic below:
      if(link){
          document.body.removeChild(link);
      }
      
  });

    // let items = document.getElementsByTagName("img");
    // for(let i = 0 ; i < items.length ; i++){
    //   items[i].src = chrome.runtime.getURL('m.jpg');
    // }
  });
}


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageBackgroundColor
  });
});

// The body of this function will be executed as a content script inside the
// current page
