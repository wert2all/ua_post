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
            _listBadges[badge.getHash()] = badge;
            _appendToViewHolder(badge);
        };


    _viewHolder = $dom.get("#tracklist");

    if (_viewHolder.length !== 1) {
        throw new Error('Bad holder ');
    }
    _viewHolder = _viewHolder[0];
    console.log(_viewHolder);

    return {
        addBadge: function (badge) {
            if (!_isBadgeExist(badge)) {
                _addBadge(badge);
            }
            return this;
        }
    };
});
