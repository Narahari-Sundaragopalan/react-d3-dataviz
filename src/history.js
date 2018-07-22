import createHistory from 'history/createBrowserHistory';

export default createHistory({
  basename: process.env.NODE_ENV === 'development' ? '' : '/react-d3-dataviz'
});