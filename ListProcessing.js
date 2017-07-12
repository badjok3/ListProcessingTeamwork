let theArray = [];

function process() {
    let commands = {
        append: function ([a]) {
            if (!a) {
                throw new Error("invalid")
            }
            // console.log(a);

            theArray.push(a);
        },
        reverse: function () {
            theArray = theArray.reverse();
        },
        insert: function ([a, b]) {

            if(a > theArray.length) {
                throw new Error("new error");
            }
            theArray.splice(+a, 0, b);


        }

    };
    let input = $('#command');
    let result = $('#result');

    if (result.text().split('\n').length === 1) {
        result.text(result.text() + input.val() + '\n');
        theArray = input.val().split(' ').filter(s => s !== '');
    } else {
        if (input.val()) {
            try {
                let split = input.val().split(" ").filter(w => w !== '');
                commands[split[0]](split.slice(1)); //roll right
                // console.log(input.val());
                result.text(result.text() + theArray.join(" ") + '\n');
            } catch (err) {
                result.text(result.text() + err.message + '\n');
                window.alert(err.message)
            }
        }

    }

    input.val('');
}
