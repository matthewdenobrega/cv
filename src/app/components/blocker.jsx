var React = require('react'),
    mui = require('material-ui'),
    cx = React.addons.classSet;

Blocker = React.createClass({
    _closePortfolioItem: function () {
        this.props.closePortfolioItem();
    },
    render: function () {
        return (<div className="blocker" onClick={this._closePortfolioItem}></div>);
    }
});

module.exports = Blocker;