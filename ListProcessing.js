let theArray = [];

function process() {
    let commands = {
        reverse: function () {
            theArray = theArray.reverse();
        },
        add: function () {
            //TODO: delete element @ index
        },
        sort: function () {
            theArray.sort() + '\n';

        }
    };
    let input = $('#command');
    let result = $('#result');

        if (result.text().split('\n').length === 1) {
            result.text(result.text() + input.val() + '\n');
            theArray = input.val().split(' ').filter(s => s !== '');
        } else {

            commands[input.val()]();
            result.text(result.text() + theArray.join(' ') + '\n');
        }


        input.val('');
        console.log(theArray)
}
