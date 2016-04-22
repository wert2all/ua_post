/**
 * Created by wert2all on 4/19/16.
 */

requirejs.config({
    baseUrl: "js/",
    paths: {
        material: 'libs/material.min',
        dollardom: 'libs/dollardom.min',
        move: 'libs/move.min'
    },
    shim: {
        'dollardom': {
            exports: '$dom'
        }
    }
});

requirejs(["material"]);
requirejs(['badge_holder', "badge"], function (budgeHolder, badge) {

    badge.setBackground(true);

    budgeHolder
        .addBadge(
            badge.setTitle("First Element")
                .build()
                .startAnimation()
        )
        .addBadge(
            badge.setTitle("Second Element")
                .build()
                .startAnimation()
        );
});
