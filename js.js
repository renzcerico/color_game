$(() => {

    const random = () => {
        return Math.floor((Math.random() * 6));
    };

    const load = () => {
        const colors      = ['box-red', 'box-blue', 'box-green', 'box-white', 'box-yellow', 'box-pink'];
        let randomOne     = $('#randomOne');
        let randomTwo     = $('#randomTwo');
        let randomThree   = $('#randomThree');
        const allColor    = colors.toString().replace(/,/g, ' ');

        randomOne.removeClass(allColor);
        randomTwo.removeClass(allColor);
        randomThree.removeClass(allColor);

        randomOne.addClass(colors[random()]);
        randomTwo.addClass(colors[random()]);
        randomThree.addClass(colors[random()]);
        console.log(allColor);
    };

    load();

    $(document).on('click', '#btnSpin', () => load());

});