var React = require('react'),
    mui = require('material-ui'),
    cx = React.addons.classSet;

var menuItems = [
    {route: 'career-statement', text: 'Career Statement'},
    {route: 'work-experience', text: 'Work Experience'},
    {route: 'education', text: 'Education'},
    {route: 'references', text: 'References'}
];

var Main = React.createClass({
    //Standard methods
    getInitialState: function () {
        return {
            currentPanel: 'career-statement',
            openPortfolioItem: null
        };
    },
    //Private methods
    _toggleNav: function () {
        this.refs.LeftNav.toggle();
    },
    _handleNavChange: function (event, menuItemIndex, menuItem) {
        this._goToPanel(menuItem.route);
    },
    _goToPanel: function (panel) {
        this.setState({currentPanel: panel});
        this._scrollToTop();
    },
    _getSelectedIndex: function () {
        var currentItem;
        for (var i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.state.currentPanel == currentItem.route) return i;
        }
    },
    _getWrapperClasses: function () {
        var classes = React.addons.classSet({
            'portfolio-item-visible': this.state.openPortfolioItem
        });

        classes += ' ' + this.state.openPortfolioItem;

        return classes;
    },
    _openPortfolioItem: function (portfolioItem) {
        this.setState({openPortfolioItem: portfolioItem});
    },
    _closePortfolioItem: function () {
        this.setState({openPortfolioItem: null});
    },
    _scrollToTop: function () {
        var increment = 10;
        if (window.scrollY < increment) {
            window.scrollTo(0, 0);
            return;
        }

        window.scrollTo(0, window.scrollY - increment);

        requestAnimationFrame(this._scrollToTop);
    },
    //Render
    render: function () {
        return (
            <div className={this._getWrapperClasses()}>

                <mui.LeftNav menuItems={menuItems} docked={false} onChange={this._handleNavChange} ref="LeftNav"
                    selectedIndex={this._getSelectedIndex()}/>

                <h2>Matthew de Nobrega</h2>

                <div className="menu-toggle" onClick={this._toggleNav}></div>

                <div className={'perspective-wrapper ' + this.state.currentPanel}>

                    <div className="paper-wrapper career-statement">
                        <mui.Paper zDepth={2}>
                            <h2>Career Statement</h2>
                            <img src="images/matthew de nobrega.jpg" alt="Matthew de Nobrega"/>
                            <p className="mui-font-style-title">Facilitate the creation of people-centric software by people-centric teams</p>
                            <a href="mailto:matt.denobrega@gmail.com">
                                <mui.RaisedButton label="Hire Now" primary={true} />
                            </a>
                            <h3>Titles</h3>
                            <p className="mui-font-style-subhead-1">Technical Creative Director / Creative Technologist / Lead Engineer</p>
                            <div className="link-wrapper">
                                <span className="next-link" onClick={this._goToPanel.bind(this, 'work-experience')}>Work experience</span>
                            </div>
                        </mui.Paper>
                    </div>

                    <div className="paper-wrapper work-experience">
                        <mui.Paper zDepth={2}>
                            <h2>Work Experience</h2>
                            <h3>2011 - 2015: Quirk Cape Town</h3>
                            <p className="mui-font-style-subhead-1">Joined in 2011 as a part-time junior back-end engineer</p>
                            <p className="mui-font-style-subhead-1">Promoted to lead engineer after 10 months</p>
                            <p className="mui-font-style-subhead-1">Promoted to creative technologist in 2013</p>
                            <p className="mui-font-style-subhead-1">Promoted to technical creative director and technical head of the research lab in 2014</p>
                            <a href="mailto:matt.denobrega@gmail.com">
                                <mui.RaisedButton label="Hire Now" primary={true} />
                            </a>
                            <h3>2001 - 2011: Timecode Mastering and Timecode Records</h3>
                            <p className="mui-font-style-subhead-1">Founder and label manager @ Timecode records, releasing 28 cd's and organising events of up to 2500 people</p>
                            <p className="mui-font-style-subhead-1">Founder and mastering engineer @ Timecode mastering, working on numerous South African number 1's and international top 40 hits</p>
                            <p className="mui-font-style-subhead-1">Produced 3 albums and performed all over the world as Artifakt</p>
                            <div className="link-wrapper">
                                <span className="previous-link" onClick={this._goToPanel.bind(this, 'career-statement')}>Career statement</span>
                                <span className="next-link" onClick={this._goToPanel.bind(this, 'education')}>Education</span>
                            </div>
                        </mui.Paper>
                    </div>

                    <div className="paper-wrapper education">
                        <mui.Paper zDepth={2}>
                            <h2>Education</h2>
                            <h3>Skills</h3>
                            <p className="mui-font-style-subhead-1">Certified scrum master / AngularJS / React / HTML5 / Groovy / Java / Grails / Ruby / Rails / Css / Less / Python / MongoDB / MYSQL / Go / Android</p>
                            <a href="mailto:matt.denobrega@gmail.com">
                                <mui.RaisedButton label="Hire Now" primary={true} />
                            </a>
                            <h3>1999-2002: Bsc (hons) Applied Mathematics</h3>
                            <p className="mui-font-style-subhead-1">Specialized in nonlinear dynamics and chaos theory</p>
                            <p className="mui-font-style-subhead-1">2nd Bsc major was computer science</p>
                            <p className="mui-font-style-subhead-1">Dean's merit list 1999 - 2001 / Merit bursaries 1999 - 2001</p>
                            <h3>1984-1997: Diocesan college (Bishops)</h3>
                            <p className="mui-font-style-subhead-1">84% aggregate with 3 A symbols</p>
                            <div className="link-wrapper">
                                <span className="previous-link" onClick={this._goToPanel.bind(this, 'work-experience')}>Work experience</span>
                                <span className="next-link" onClick={this._goToPanel.bind(this, 'references')}>References</span>
                            </div>
                        </mui.Paper>
                    </div>

                    <div className="paper-wrapper references">
                        <mui.Paper zDepth={2}>
                            <h2>References</h2>
                            <div className="link-wrapper">
                                <span className="previous-link" onClick={this._goToPanel.bind(this, 'education')}>Education</span>
                            </div>
                        </mui.Paper>
                    </div>
                </div>

                <PortfolioTarget openPortfolioItem={this._openPortfolioItem}/>

                <Blocker closePortfolioItem={this._closePortfolioItem}/>

                <Portfolio/>

            </div>
        );
    }
});

module.exports = Main;