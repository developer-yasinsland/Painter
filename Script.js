function makeGrid(e) {
    var selectiont = document.getElementsByClassName("center")[0];
    selectiont.removeAttribute("hidden");
    var table = document.getElementById("pixelCanvas");
    if (table.children[0].innerHTML > "") {
        table.innerHTML = "<tbody></tbody>";
    }
    e.preventDefault();
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    
    for (let fcounter = 0; fcounter < height; fcounter++) {
        var tableRow = document.createElement('tr');
        tableRow.setAttribute("class", "myClasso");
        for (let scounter = 0; scounter < width; scounter++) {
            var tableData = document.createElement('td');
            tableData.setAttribute("class", "ttdd");
            tableData.classList.add("myClasso");
            tableRow.appendChild(tableData);
        }
        document.getElementById("pixelCanvas").children[0].appendChild(tableRow);
        document.getElementById("pixelCanvas").children[0].setAttribute("class", "myClasso");
    }
    var grid = document.querySelectorAll("td");
    var elisten = function() {
        var colour = document.getElementById("colorPicker").value;
        this.style.backgroundColor = colour;
    };
    var selection = function() {
        var gtrid = document.querySelectorAll("td");
        for (var atcounter = 0; atcounter < gtrid.length; atcounter++) {
            if (document.getElementsByTagName("select")[0].value == "typ") {
                document.getElementById("typin").removeAttribute("hidden");
                document.getElementById("colourin").setAttribute("hidden", "true");
                gtrid[atcounter].removeEventListener("click", elisten);
                gtrid[atcounter].contentEditable = true;
                gtrid[atcounter].style.cursor = "text";
                gtrid[atcounter].addEventListener("keydown", function() {
                    this.style.fontFamily = document.getElementById("fontFamily").value;
                    this.style.fontSize = document.getElementById("fontSize").value + "px";
                    this.style.color = document.getElementById("fontColor").value;
                });
            }
            else if(document.getElementsByTagName("select")[0].value == "colour") {
                document.getElementById("typin").setAttribute("hidden", "true");
                document.getElementById("colourin").removeAttribute("hidden");
                gtrid[atcounter].addEventListener("click", elisten);
                gtrid[atcounter].contentEditable = false;
                gtrid[atcounter].style.cursor = "cell";
            }
        }
    };
    document.getElementById("service").addEventListener("change", selection);
    for (var acounter = 0; acounter < grid.length; acounter++) {
        grid[acounter].addEventListener("click", elisten);
        grid[acounter].addEventListener("dblclick", function() {this.style.backgroundColor = "transparent"});
    }
    function hideTheGrid() {
        var tableCells = document.getElementsByTagName("td");
        var tablerows = document.getElementsByTagName("tr");
        document.getElementsByTagName("table")[0].classList.remove("myClasso");
        for (var scounter = 0; scounter < tablerows.length; scounter++) {
            tablerows[scounter].classList.remove("myClasso");
        }
        for (var td = 0; td < tableCells.length; td++) {
            tableCells[td].classList.remove("myClasso");
        }
    }
    document.getElementById("hidegrids").addEventListener("click", hideTheGrid);
    function showTheGrid() {
        var tableCells = document.getElementsByTagName("td");
        var tablerows = document.getElementsByTagName("tr");
        for (var scounter = 0; scounter < tablerows.length; scounter++) {
            tablerows[scounter].classList.add("myClasso");
        }
        for (var td = 0; td < tableCells.length; td++) {
            tableCells[td].classList.add("myClasso");
        }
    }
    document.getElementById("returngrids").addEventListener("click", showTheGrid);
}
document.getElementById("sizePicker").addEventListener("submit", makeGrid);
