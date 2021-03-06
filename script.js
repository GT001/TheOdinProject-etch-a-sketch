document.onload = setGrid(16);
function setEvents(){
    
    const cells = document.querySelectorAll(".grid");
    cells.forEach(div => div.addEventListener('mouseover', setColor));

    const button = document.querySelector('#reset');
    button.addEventListener('click', resizeGrid);

    const gridsize = document.querySelector("#gridOptions");
    gridsize.addEventListener('input', resizeGrid);
    
}
function setGrid(size=16){
    
    const container = document.querySelector("#container");
    
    var numberOfGridPoints = container.childNodes.length;
 
    for( let i = 0; i < numberOfGridPoints ; i++ ){
        if(typeof container.childNodes[i] == undefined){
            msg(container.childNodes[i])
        } else {
        container.removeChild(container.firstChild)
        }   
    }

    for (let i = 0; i < size; i++){
        
        for(let j = 0; j < size; j++){
            const div = document.createElement('div');
            div.classList.add("grid")
            
            div.id = ""+i+"x"+j+"";
            container.appendChild(div);
        }        
    }
    container.setAttribute("style", "grid-template-columns: repeat(" + size + ", 1fr);");
    setEvents();
}

function setColor(e){
    const color_option = document.querySelectorAll("select"); 
    const div = document.querySelector(`.grid[id="${e.target.id}"]`);
    
    if(e.ctrlKey){
        
        if(color_option[0].selectedIndex ==0) {
            //grey
           div.setAttribute("style", "background-color: rgba(130, 127, 125);");
        } else if (color_option[0].selectedIndex == 1){
            //red
           div.setAttribute("style", "background-color: rgb(255, 17, 0);");
        } else if (color_option[0].selectedIndex == 2){
            //green
           div.setAttribute("style", "background-color: rgb(63, 173, 63);");
        } else if (color_option[0].selectedIndex == 3){
            //blue
           div.setAttribute("style", "background-color: rgba(24, 78, 185);");
        } else if (color_option[0].selectedIndex == 4){
            //black
            div.setAttribute("style", "background-color: rgba(0, 0, 0);");
        } else if (color_option[0].selectedIndex == 5){
            //random
            var color1, color2, color3;
            color1 = Math.floor(Math.random()*256);
            color2 = Math.floor(Math.random()*256);
            color3 = Math.floor(Math.random()*256);
            div.setAttribute("style", "background-color: rgba(" + color1+","+color2+","+color3+");");
        } else {
            //Erase
            div.removeAttribute("style");
        }
    }
}

function resizeGrid(e){
    const grid_option = document.querySelectorAll("#gridOptions");
    const color_option = document.querySelectorAll("#colorOptions");
    if(e.target.id =="reset"){
        grid_option[0].selectedIndex = "0";
        color_option[0].selectedIndex= "0";
    }
    
    if( grid_option[0].selectedIndex == 1){ setGrid(32);}
    else if( grid_option[0].selectedIndex == 2){ setGrid(64);}
    else if( grid_option[0].selectedIndex == 3){ setGrid(128);}
    else if( grid_option[0].selectedIndex == 4){ setGrid(256);}
    else if( grid_option[0].selectedIndex == 5){ setGrid(512);}
    else {setGrid(16);}
}

function msg(str){
    console.log(str)
}