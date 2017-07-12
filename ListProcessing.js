
function print() {
    let commands = {
        reverse: function () {
            // TODO: Reverse theArray
        },
        delete: function (index) {
            //TODO: delete element @ index
        },

    };

    let input = $('#command');
    let result = $('#result');
    let theArray = [];
    let initialize = false;
    result.text(result.text() + input.val() + '\n');
    theArray = result.text().split('\n')[0];

    input.val('');
    console.log(theArray)
}
