function process() {

    let theArray = [];

    let input = $('#command');
    let result = $('#result');
    let executeBtn = $('#executeBtn');

    executeBtn.on('click', execute);
    input.keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
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
        prepend: function ([a]) {

        },
        reverse: function () {
            theArray = theArray.reverse();
        },
        insert: function ([a, b]) {
            if ((a > theArray.length - 1) || (a < 0)) {
                throw new Error(`Error: invalid index ${a}`);
            }
            theArray.splice(+a, 0, b);
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
        sort: function () {
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
                    input.val().split(' ').filter(w => w !== '').forEach(e => theArray.push(e));
                    result.text(result.text() + theArray.join(' ') + '\n');
                } else {
                    if (!commands.hasOwnProperty(currentCommand)) {
                        throw new Error('Error: invalid command');
                    }
                    commands[currentCommand](data);
                    result.text(result.text() + theArray.join(' ') + '\n');
                }
            } catch (err) {
                result.text(result.text() + err.message + '\n');
                window.alert(err.message)
            } finally {
                input.val('');
            }
        }
    }
}
