


function createCheckerBoard() {
    var div = document.createElement('div');
    div.id = "Checkerboard";
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    div.style.width = "800px";
    div.style.height = "800px";
    document.body.appendChild(div);

    var table = document.createElement('table');
    table.style.borderCollapse = "collapse";

    for (let i = 0; i < 8; i++) {
        var row = document.createElement('tr');

        for (let j = 0; j < 8; j++) {
            var tile = document.createElement('td');
            tile.style.width = "100px";
            tile.style.height = "100px";

            // If the sum of row and column indices is even, make it black; otherwise, make it red.
            if ((i + j) % 2 === 0) {
                tile.style.backgroundColor = 'black';
            } else {
                tile.style.backgroundColor = 'red';
            }

            row.appendChild(tile);
        }

        table.appendChild(row);
    }

    div.appendChild(table);
}

createCheckerBoard();

