var React = require('react'),
    mui = require('material-ui'),
    cx = React.addons.classSet;

PortfolioTarget = React.createClass({
    _openCapitec: function () {
        this.props.openPortfolioItem('capitec');
    },
    _openKlipdrift: function () {
        this.props.openPortfolioItem('klipdrift');
    },
    _openAskWhy: function () {
        this.props.openPortfolioItem('askwhy');
    },
    _openOther: function () {
        this.props.openPortfolioItem('other');
    },
    render: function () {
        return (
            <div className="portfolio-hover-target" onMouseEnter={this._hoverStart} onMouseLeave={this._hoverEnd}>
                <h3>Portfolio</h3>
                <div className="portfolio-icon capitec" onClick={this._openCapitec}>
                    <img src="images/capitec-logo.png"/>
                </div>
                <div className="portfolio-icon klipdrift" onClick={this._openKlipdrift}>
                    <img src="images/klipdrift-logo.png"/>
                </div>
                <div className="portfolio-icon askwhy" onClick={this._openAskWhy}>
                    <img src="images/askwhy-logo.png"/>
                </div>

                <div className="portfolio-icon other" onClick={this._openOther}>
                    <img src="images/other.png"/>
                </div>
            </div>
        );
    }
});

module.exports = PortfolioTarget;