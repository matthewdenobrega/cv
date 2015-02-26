var React = require('react'),
    mui = require('material-ui'),
    cx = React.addons.classSet;

Portfolio = React.createClass({
    render: function () {
        return (
            <div>
                <div className="portfolio-item capitec">
                    <div className="relative">
                        <a href="https://www.capitecbank.co.za" target="_blank">
                            <h3>Capitec Bank</h3>
                        </a>
                        <p className="mui-font-style-subhead-1"><a href="https://www.capitecbank.co.za" target="_blank">Capitec Bank</a> is one of the top three banks in South Africa. Their brand empahsises simplicity and transparency.</p>
                        <p className="mui-font-style-subhead-1">Quirk built their corporate website on a Grails stack with a custom content-management system that implements direct on-page editing of all content, as well as comprehensive personalisation of content and messaging across the site.</p>
                        <p className="mui-font-style-subhead-1">I ran the build as product owner / project manager / lead engineer. I pitched, managed and built the personalisation data warehouse.</p>
                        <p className="mui-font-style-subhead-1">The site won multiple Loerie, Bookmarks, and Assegaai awards.</p>
                    </div>
                </div>

                <div className="portfolio-item klipdrift">
                    <div className="relative">
                        <a href="http://www.klipdrift.co.za" target="_blank">
                            <h3>Klipdrift Brandy</h3>
                        </a>
                        <p className="mui-font-style-subhead-1"><a href="http://www.klipdrift.co.za" target="_blank">Klipdrift</a> is Distell's category-leading brandy. The brand's task within the class is to make brandy exciting.</p>
                        <p className="mui-font-style-subhead-1">Quirk built their brochure website on a Grails stack, using a combination of 3D renders, WebGL, HTML5 video, and CSS animations to bring the brandy-making process to life.</p>
                        <p className="mui-font-style-subhead-1">I ran the build as product owner / project manager / lead engineer. We ran a scrum-like process with weekly sprints and regular client check-ins.</p>
                    </div>
                </div>

                <div className="portfolio-item askwhy">
                    <div className="relative">
                        <h3>Capitec AskWhy</h3>
                        <p className="mui-font-style-subhead-1"><a href="http://www.gottaquirk.com/2014/07/28/capitec-bank-uses-data-visualisation-to-askwhy/" target="_blank">AskWhy</a> was <a href="https://www.capitecbank.co.za" target="_blank">Capitec's</a> lead campaign for 2013. The core concept revolved around getting bankers to ask why banking isn't easier.</p>
                        <p className="mui-font-style-subhead-1">Quirk built the online platform for the campaign on a Grails stack. The platform aggregated online mentions into a connected, animated, interactive 3D visualisation using a custom 3D rendering library for canvas that I coded.</p>
                        <p className="mui-font-style-subhead-1">I ran the build as lead engineer. We ran a rapid prototyping discovery phase followed by an early release and fast iteration on the platform.</p>
                        <p className="mui-font-style-subhead-1">The platform won Bookmarks and Assegaai awards.</p>
                    </div>
                </div>

                <div className="portfolio-item other">
                    <div className="relative">
                        <h3>Other work</h3>
                        <p className="mui-font-style-subhead-1">I built the <a href="http://www.gottaquirk.com/2014/08/08/brave-curious-albert/" target="_blank">Quirk Rover</a> to allow employees in our then-current office to explore our new office as it was being constructed. The rover was built using a Raspberry pi, Pi camera, Phidgets, sonar / touch / temperature / humidity / compass / etc sensors. It was controlled over a web interface, with a live video stream, chat functionality, and an interactive map.</p>
                        <p className="mui-font-style-subhead-1"><a href="http://www.gottaquirk.com/2014/04/03/savanna-serenades-cutting-through-the-cards-candy-and-clutter/" target="_blank">Savanna Serenades</a> was a quick-turn-around project for Valentines day, where we live-streamed a band performing user's tweets in a studio, chopped the performances, uploaded them to Youtube, and tweeted a link back to the user - in real time. The project was a Loeries finalist.</p>
                        <p className="mui-font-style-subhead-1">The <a href="http://www.gottaquirk.com/2014/07/10/the-hungry-lion-bigger-burger-banner/" target="_blank">Hungry Lion Bigger Burger Banner</a> was controlled by SMS. We deployed Node microservices synchronized through Firebase and communicating with the banners over websockets to link the banners to our SMS provider. The banner won Assegaai and Smarties awards.</p>
                        <p className="mui-font-style-subhead-1">I recently built the front-end to <a href="http://www.lobsterink.com/" target="_blank">Lobster ink's</a> learning management system. On this project I handled everything from client service / retainer negotiation through internal project management to engineering.</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Portfolio;