/**
 * Created by wert2all on 4/19/16.
 */
define(["libs/dollardom.min"], function () {
    var dataTitle = "",
        dataBackground = true,
        _getSelector = function () {
            return "span.mdl-badge" + ( (dataBackground === false) ? ".mdl-badge--no-background" : "" );
        };

    function Badge(DomElement) {
        var _loaderCount = 1,
            _dom = DomElement,
            _timeInterval,

            _setValue = function (value) {
                _dom.setAttribute("data-badge", value);
            },
            _setLoader = function () {
                // strRepeat from underscore.string
                function strRepeat(str, qty) {
                    if (qty < 1) return '';
                    var result = '';
                    while (qty > 0) {
                        if (qty & 1) result += str;
                        qty >>= 1, str += str;
                    }
                    return result;
                }

                _setValue(strRepeat(".", _loaderCount));
                _loaderCount++;
                if (_loaderCount == 4) {
                    _loaderCount = 1;
                }
            };

        return {
            stopAnimation: function () {
                clearInterval(_timeInterval);
            },
            startAnimation: function () {
                _timeInterval = setInterval(_setLoader, 500);
            },
            setValue: function (value) {
                _setValue(value);
            },
            getDom: function () {
                return _dom;
            }
        }
    }

    return {
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
            return new Badge(badgeDOM);
        }
    };
});
