/**
 * Created by wert2all on 4/19/16.
 */
requirejs(["libs/material.min"]);
requirejs(["libs/dollardom.min"]);

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
