(function () {
  var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    Main = require('./components/main.jsx');
    Blocker = require('./components/blocker.jsx');
    Portfolio = require('./components/portfolio.jsx');
    PortfolioTarget = require('./components/portfolioTarget.jsx');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body. 
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Main />, document.body);

})();