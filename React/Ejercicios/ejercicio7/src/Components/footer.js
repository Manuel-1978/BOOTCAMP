import { URL_FOOTER} from '../settings'

export default function Footer() {
    return (
        <footer className="navbar p-5 m-5">
            <p>Informacion monitorizada por</p>
            <img src={ URL_FOOTER} alt="Logo TMDb"/>
        </footer>
    )
}
