import { SearchBar } from './SearchBar';


export default function WelcomePage() {
    return (
        <div className='animation-wrapper'>
        <div className='container'>
            <div className="welcome-page">
                <div className="welcome-page__content-wrapper">
                    <p className="welcome-page__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quas?
                    </p>
                </div>
                <div className="welcome-page__search-wrapper">
                    <SearchBar />
                </div>
            </div>
        </div>
        </div>
    );
}