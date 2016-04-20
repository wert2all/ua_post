/**
 * Created by wert2all on 4/20/16.
 */
define(["libs/dollardom.min"], function () {

    var _viewHolder,
        _listBadges = [],
        _isBadgeExist = function (badge) {
            return ( typeof _listBadges[badge.getHash()] !== "undefined");
        },
        _appendToViewHolder = function (badge) {
            _viewHolder.appendChild(badge.getDom());
        },
        _addBadge = function (badge) {
            var decorator = new BadgeDecorator(badge);
            _listBadges[decorator.getHash()] = decorator;
            _appendToViewHolder(decorator);
        };

    _viewHolder = $dom.get("#tracklist");

    if (_viewHolder.length !== 1) {
        throw new Error('Bad holder ');
    }
    _viewHolder = _viewHolder[0];
    
    function BadgeDecorator(badge) {
        var _dom = $dom.create("a");
        _dom.href = "#";
        _dom.addEventListener('click', function () {
            console.log(badge.getHash());
            return false;
        });

        _dom.appendChild(badge.getDom());

        return {
            getHash: function () {
                return badge.getHash();
            },
            getDom: function () {
                return _dom;
            }
        }
    }

    return {
        addBadge: function (badge) {
            if (!_isBadgeExist(badge)) {
                _addBadge(badge);
            }
            return this;
        }
    };
});
