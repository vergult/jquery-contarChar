# jQuery contarChar plugin

jQuery plugin that provides a character counter for text inputs and textareas.
Works when typing and pasting text.

## Usage

    $('#textarea_id').contarChar();

Custom usage:

    $('#textarea_id').contarChar({
        limitTo:        250,
        warnAt:         10,
        container:      'div',
        containerClass: 'count-number',
        warningClass:   'count-warning',
        counterText:    'Remaining'
    });

## Options

* `limitTo` - The character length limit (140 by default).
* `warnAt` - The character length for which you want the warningClass CSS to be fired (30 by default).
* `container` - The HTML element where you wish to include the counter ('span' by default).
* `containerClass` - Class name for the `container` element ('counter' by default).
* `warningClass` - Class name added to the `container` element when character limit `warnAt` is reached ('warning' by default).
* `counterText` - If you with to prepend the counter with some text, set it here (empty by default).

## License

Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.
