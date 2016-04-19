/**
 * Created by wert2all on 4/19/16.
 */
requirejs(["libs/material.min"]);
requirejs(["libs/dollardom.min"]);
requirejs(["badge"], function (badge) {

    var badgeElement = badge.setTitle("title ")
        .setBackground(true)
        .build();

    badgeElement.startAnimation();
    $dom.get("#tracklist")[0].appendChild(badgeElement.getDom());

    setTimeout(function () {
        badgeElement.stopAnimation();
        badgeElement.setValue("+");
    }, 5000);
    console.log(badgeElement.getDom());
});
