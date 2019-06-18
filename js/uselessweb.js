function uselessWebButton(button, popup) {
    // UI elements
    var buttonElement = button;
    var popupElement = popup;

    var initialClick = false;
    var randomRange = 15;

    // Useless websites: url | uses flash
    // Commented out websites which have crashed.
    var sitesList = [
        ["http://heeeeeeeey.com/"],
        ["http://tinytuba.com/"],
        ["http://corndog.io/"],
        ["http://thatsthefinger.com/"],
        ["http://cant-not-tweet-this.com/"],
        ["http://weirdorconfusing.com/"],
        ["https://www.eyes-only.net/"],
        ["http://eelslap.com/"],
        ["http://www.staggeringbeauty.com/"],
        ["http://burymewithmymoney.com/"],
        ["http://endless.horse/"],
        ["http://www.trypap.com/"],
        ["http://www.republiquedesmangues.fr/"],
        ["http://www.movenowthinklater.com/"],
        ["http://www.partridgegetslucky.com/"],
        ["http://www.rrrgggbbb.com/"],
        ["http://beesbeesbees.com/"],
        ["http://www.koalastothemax.com/"],
        ["http://www.everydayim.com/"],
        ["http://randomcolour.com/"],
        ["http://cat-bounce.com/"],
        ["http://chrismckenzie.com/"],
        ["http://hasthelargehadroncolliderdestroyedtheworldyet.com/"],
        ["http://ninjaflex.com/"],
        ["http://ihasabucket.com/"],
        ["http://corndogoncorndog.com/"],
        ["http://www.hackertyper.com/"],
        ["https://pointerpointer.com"],
        ["http://imaninja.com/"],
        ["http://www.ismycomputeron.com/"],
        ["http://www.nullingthevoid.com/"],
        ["http://www.muchbetterthanthis.com/"],
        ["http://www.yesnoif.com/"],
        ["http://iamawesome.com/"],
        ["http://www.pleaselike.com/"],
        ["http://crouton.net/"],
        ["http://corgiorgy.com/"],
        ["http://www.wutdafuk.com/"],
        ["http://unicodesnowmanforyou.com/"],
        ["http://www.crossdivisions.com/"],
        ["http://tencents.info/"],
        ["http://www.patience-is-a-virtue.org/"],
        ["http://whitetrash.nl/"],
        ["http://www.theendofreason.com/"],
        ["http://pixelsfighting.com/"],
        ["http://isitwhite.com/"],
        ["http://onemillionlols.com/"],
        ["http://www.omfgdogs.com/"],
        ["http://oct82.com/"],
        ["http://chihuahuaspin.com/"],
        ["http://www.blankwindows.com/"],
        ["http://dogs.are.the.most.moe/"],
        ["http://tunnelsnakes.com/"],
        ["http://www.trashloop.com/"],
        ["http://www.ascii-middle-finger.com/"],
        ["http://spaceis.cool/"],
        ["http://www.donothingfor2minutes.com/"],
        ["http://buildshruggie.com/"],
        ["http://buzzybuzz.biz/"],
        ["http://yeahlemons.com/"],
        ["http://burnie.com/"],
        ["http://wowenwilsonquiz.com"],
        ["https://thepigeon.org/"],
        ["http://notdayoftheweek.com/"],
        ["http://www.amialright.com/"],
        ["http://nooooooooooooooo.com/"]

    ];

    var sites = null;

    // Prepares and binds the button
    var init = function() {
        button.onclick = onButtonClick;
        sites = sitesList.slice(0);
    };

    // Selects and removes the next website from the list
    var selectWebsite = function() {
        var site, range, index;

        range = randomRange > sites.length ? sites.length : randomRange;
        index = Math.floor(Math.random() * range);

        site = sites[index];
        sites.splice(index, 1);

        return site;
    };

    var onButtonClick = function() {
        // Change text from "TO A"
        if (initialClick === false) {
            document.getElementById("joint").innerHTML = "TO ANOTHER";
            initialClick = true;
        }

        var url = selectWebsite()[0];
        window.open(url);

        // User has visited ALL the sites... refresh the list.
        if (sites.length == 0) {
            sites = sitesList.slice(0);
        }

    };

    init();
}