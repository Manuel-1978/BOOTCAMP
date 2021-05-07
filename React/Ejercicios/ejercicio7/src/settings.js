const URL_UPCOMINGFILMS ="https://api.themoviedb.org/3/movie/upcoming?api_key=c725e8d01990fd812841de53c5cbe823&language=es&page=";
const URL_POSTER_LINK='https://image.tmdb.org/t/p/w500';
const URL_DEFAULT_THUMBNAIL='https://yify-torrent.net/img/default_thumbnail.svg';
const overviewMaxletters = 200;
const posterbackground = (<img src={`${URL_DEFAULT_THUMBNAIL}`} alt='' className='posterPlaceHolder'/>)

const URL_UPCOMINGFILMS_BASE='https://api.themoviedb.org/3/movie/';
const URL_UPCOMINGFILMS_API='?api_key=c725e8d01990fd812841de53c5cbe823&language=es';

export {URL_UPCOMINGFILMS,URL_POSTER_LINK,overviewMaxletters,posterbackground,URL_UPCOMINGFILMS_BASE,URL_UPCOMINGFILMS_API};