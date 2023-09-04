/*---- Track Elements Y Position ----*/
// Track the position of anything with the class "trackY"
window.addEventListener('scroll', getElY);
window.addEventListener('resize', getElY);
document.addEventListener('DOMContentLoaded', getElY );
const root = document.querySelector('html');

getElY();

// Global Lerp function
function lerp( a, b, alpha ) {
  return a + alpha * (b - a)
}

function getElY() {
    const viewportHeight = window.innerHeight;
    let trackedElements = document.querySelectorAll('.trackY');
    let activatePoint;
    for( let trackedEl of trackedElements ) {
      let trackedPos = trackedEl.getBoundingClientRect();
      if (trackedEl.dataset.activatePoint ) {
        // Use data-activate-point attribute if element has it
        activatePoint = Number(trackedEl.dataset.activatePoint);
      } else {
        // otherwise set default to 0.5
        activatePoint = 0.5;
      }
      //console.log(activatePoint);
      let topY = ( ( trackedPos.top / viewportHeight ) * 100); 
      let bottomY = ( ( trackedPos.bottom / viewportHeight ) * 100);
      let midY = (topY + bottomY) / 2;
      let activateY = lerp( topY, bottomY, activatePoint);
      
      // Check if any part of element is on screen
      if ( topY < 100 && bottomY > 0 ) {
        //console.log('it is on screen');
        trackedEl.style.setProperty('--topY', topY.toFixed(2) ); 
        trackedEl.style.setProperty('--bottomY', bottomY.toFixed(2));
        trackedEl.style.setProperty('--midY', midY.toFixed(4));
        trackedEl.style.setProperty('--activateY', activateY.toFixed(4));
        trackedEl.classList.add('onscreen');
       
      } else {
        trackedEl.classList.remove('onscreen');
      }
      // If Element is on screen at a certain threshold.
      if ( activateY < 100) {
        trackedEl.classList.add('activate');
         let trackedID = trackedEl.id;
        console.log(trackedID);
        root.className = trackedID;
      } else {
        trackedEl.classList.remove('activate');
      }
    }
}
