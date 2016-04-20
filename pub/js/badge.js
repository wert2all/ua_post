/**
 * Created by wert2all on 4/19/16.
 */
define(["libs/dollardom.min"], function () {
    var dataTitle = "",
        dataBackground = true,
        _getSelector = function () {
            return "span.mdl-badge" + ( (dataBackground === false) ? ".mdl-badge--no-background" : "" );
        },
        _getHashByTitle = function (someString) {
            return someString.toLowerCase().replace(/[^\da-z]/gi, "");
        };

    function Badge(DomElement, hash) {
        var _loaderCount = 1,
            _hash = hash,
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
                return this;
            },
            startAnimation: function () {
                _timeInterval = setInterval(_setLoader, 500);
                return this;
            },
            setValue: function (value) {
                _setValue(value);
                return this;
            },
            getHash: function () {
                return _hash;
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
            return new Badge(badgeDOM, _getHashByTitle(dataTitle));
        }
    };
});
