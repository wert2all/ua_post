/**
 * Created by wert2all on 4/19/16.
 */
requirejs(["libs/material.min"]);
requirejs(["badge"], function (badge) {
    var badgeElement = badge.setTitle("title ")
        .setData("...")
        .setBackground(false)
        .build();
    console.log(badgeElement);
});
