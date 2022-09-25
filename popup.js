

let changeColor = document.getElementById("giveMeme");

chrome.storage.sync.get("color", ({ color }) => {
  
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {

    let dv = document.createElement('div');
    dv.id = "divvclass";
    dv.style.backgroundImage = 'url('+chrome.runtime.getURL('bg.png')+')';
    //dv.style.backgroundColor = "#b65353";

    let imgcont = document.createElement('div');
    imgcont.id = "imgcont";
    let divv = document.createElement('img');
    divv.className = "imgclass";
    divv.src = chrome.runtime.getURL('Memes/'+(Math.floor(Math.random() * 18) + 1).toString()+'.jpg');
    imgcont.appendChild(divv);
    dv.appendChild(imgcont);
    document.body.appendChild(dv);

    dv.onClick = () => {
      console.log("Hellooo");
    };
    document.addEventListener('click', function() {
      var link = document.getElementById('divvclass');
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