import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about'); // if path: not specified, file name is the path
  this.route('contact', { path: '/getting-in-touch' }); // use of legacy url path; contact is the file name
});
