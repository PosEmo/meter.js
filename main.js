//Getting Session Number
const getSessionNumber = () =>{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionNumber = urlParams.get('sessionNumber');
  
  return sessionNumber;
};

const sessionNumber = getSessionNumber();

//Opening new window
const openNewWindow = (sessionNumber) =>{
  const windowOpts = "width=350, height=400, popup"
  newWindow = window.open(`gauge.html?sessionNumber=${sessionNumber}`, "PosEmo Sygnet Gauge", windowOpts); 
}

//Getting button click
document.getElementById('newWindow').addEventListener('click', () => {
  openNewWindow(sessionNumber);
});
