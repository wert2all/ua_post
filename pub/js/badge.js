/**
 * Created by wert2all on 4/19/16.
 */
define(["libs/dollardom.min"], function () {

    var dataValue,
        dataTitle = "",
        dataBackground = true,
        _getSelector = function () {
            return "span.mdl-badge" + ( (dataBackground === false) ? ".mdl-badge--no-background" : "" );
        };

    return {
        setData: function (data) {
            dataValue = data;
            return this;
        },
        setTitle: function (title) {
            dataTitle = title;
            return this;
        },
        setBackground: function (back) {
            dataBackground = (back !== false);
            return this;
        },
        build: function () {
            var badgeDOM = $dom.create(_getSelector());
            badgeDOM.appendChild(document.createTextNode(dataTitle));
            badgeDOM.setAttribute("data-badge", dataValue);

            return badgeDOM;
        }
    };
});
