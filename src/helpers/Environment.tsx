let APIURL = '';






switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3001'
        break;
    // case 'i-picked-last-time.herokuapp.com':
    //     APIURL = 'https://ipickedlasttime.herokuapp.com'
}
export default APIURL;