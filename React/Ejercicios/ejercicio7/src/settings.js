const URL_UPCOMINGFILMS ="https://api.themoviedb.org/3/movie/upcoming?api_key=c725e8d01990fd812841de53c5cbe823&language=es&page=";
const URL_POSTER_LINK='https://image.tmdb.org/t/p/w500';
const URL_DEFAULT_THUMBNAIL='https://yify-torrent.net/img/default_thumbnail.svg';
const overviewMaxletters = 100;
const posterbackground = (<img src={`${URL_DEFAULT_THUMBNAIL}`} alt='' className='posterPlaceHolder'/>)

const URL_UPCOMINGFILMS_BASE='https://api.themoviedb.org/3/movie/';
const URL_UPCOMINGFILMS_API='?api_key=c725e8d01990fd812841de53c5cbe823&language=es';
const URL_TMBD = 'https://www.themoviedb.org/movie/';
const URL_LOGO_TMBD = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg';
const URL_FOOTER='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';

export {URL_UPCOMINGFILMS,URL_POSTER_LINK,overviewMaxletters,
    posterbackground,URL_UPCOMINGFILMS_BASE,URL_UPCOMINGFILMS_API,
     URL_LOGO_TMBD,URL_TMBD, URL_FOOTER};