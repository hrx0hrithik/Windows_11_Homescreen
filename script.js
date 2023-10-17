// const dragElement = (element) => {
//   let pos1, pos2, pos3 = 0, pos4 = 0;

//   const dragMouseUp = () => {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   };

//   const dragMouseMove = (event) => {
//     event.preventDefault();
//     pos1 = pos3 - event.clientX;
//     pos2 = pos4 - event.clientY;
//     pos3 = event.clientX;
//     pos4 = event.clientY;

//     // Calculate the new position of the element
//     let newTop = element.offsetTop - pos2;
//     let newLeft = element.offsetLeft - pos1;

//     // Get the dimensions of the viewport
//     const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//     const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

//     // Calculate the maximum allowable position
//     const maxTop = viewportHeight - element.clientHeight;
//     const maxLeft = viewportWidth - element.clientWidth;

//     // Restrict the position within the visible screen
//     newTop = Math.min(Math.max(newTop, 0), maxTop);
//     newLeft = Math.min(Math.max(newLeft, 0), maxLeft);

//     // Set the new position of the element
//     element.style.top = `${newTop}px`;
//     element.style.left = `${newLeft}px`;
//   };

//   const dragMouseDown = (event) => {
//     event.preventDefault();
//     pos3 = event.clientX;
//     pos4 = event.clientY;
//     document.onmouseup = dragMouseUp;
//     document.onmousemove = dragMouseMove;
//   };

//   element.onmousedown = dragMouseDown;
// };



const dragElement = (element) => {
  let pos1 = 0, pos2 = 0;

  const dragMouseUp = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const dragMouseMove = (event) => {
    event.preventDefault();
    
    const offsetX = event.clientX - pos1;
    const offsetY = event.clientY - pos2;
    
    pos1 = event.clientX - offsetX;
    pos2 = event.clientY - offsetY;
    
    element.style.left = `${element.offsetLeft + offsetX}px`;
    element.style.top = `${element.offsetTop + offsetY}px`;
  };

  const dragMouseDown = (event) => {
    event.preventDefault();
    pos1 = event.clientX - element.offsetLeft;
    pos2 = event.clientY - element.offsetTop;
    
    document.onmouseup = dragMouseUp;
    document.onmousemove = dragMouseMove;
  };

  element.onmousedown = dragMouseDown;
};

const draggable = document.getElementById("dragable");
dragElement(draggable);
