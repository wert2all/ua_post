/**
 * Created by wert2all on 4/19/16.
 */

requirejs.config({
    baseUrl: "js/",
    paths: {
        material: 'libs/material.min',
        dollardom: 'libs/dollardom.min',
        badge: "badge",
        move: 'libs/move.min'
    },
    shim: {
        'dollardom': {
            exports: '$dom'
        }
    }
});

requirejs(["material"], function () {
    // init main site 

    //FIXME test code
    requirejs(['badge/holder', "badge/item"], function (budgeHolder, badge) {

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
});
