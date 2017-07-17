function process() {

    let theArray = [];

    let input = $('#command');
    let result = $('#result');
    let executeBtn = $('#executeBtn');

    executeBtn.on('click', execute);
    input.keypress(function(event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            execute();
        }
    });

    let commands = {
        append: function ([a]) {
            if (!a) {
                throw new Error("invalid")
            }
            theArray.push(a);
        },
        prepend: function (arr) {
            if (arr.length != 1) {
                throw new Error("invalid number of parameters")
            }
            theArray.splice(0, 0, arr[0]);
        },
        reverse: function () {
            theArray = theArray.reverse();
        },
        insert: function ([index, word]) {
            if ((index > theArray.length - 1) || (index < 0)) {
                throw new Error(`Error: invalid index ${index}`);
            }
            theArray.splice(index, 0, word);
        },
        delete: function ([a]) {

        },
        roll: function ([direction]) {
            switch (direction) {
                case 'right':
                    let lastElement = theArray.pop();
                    theArray.unshift(lastElement);
                    break;
                case 'left':
                    break;
                default:
                    throw new Error('Error: invalid command parameters');
            }
        },
        sort: function ([a]) {
            if (a) {
                throw new Error("invalid parameters")
            }
            theArray.sort() + '\n';
        },
        count: function ([n]) {

        },
        end: function () {
        }
    };

    function execute() {

        let tokens = input.val().split(' ').filter(w => w !== '');
        let currentCommand = tokens[0];
        let data = tokens.slice(1);

        if (currentCommand) {
            try {
                if (theArray.length === 0) {
                    tokens.forEach(e => theArray.push(e));
                    result.text(result.text() + theArray.join(' ') + '\n');
                } else {
                    if (!commands.hasOwnProperty(currentCommand)) {
                        throw new Error('Error: invalid command');
                    }
                    commands[currentCommand](data);
                    if (currentCommand != 'end') {
                        result.text(result.text() + theArray.join(' ') + '\n');
                    } else {
                        result.text('Finished');
                        executeBtn.off('click', execute);
                    }

                }
            } catch (err) {
                result.text(result.text() + err.message + '\n');
            } finally {
                input.val('');
            }
        }
    }
}
