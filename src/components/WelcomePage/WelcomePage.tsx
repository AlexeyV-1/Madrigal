import { SearchBar } from './SearchBar';


export default function WelcomePage() {
    return (
        <div className='container'>
            <div className="welcomePage">
                <div className="welcomePage__content-wrapper">
                    <p className="welcomePage__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quas?
                    </p>
                </div>
                <div className="welcomePage__search-wrapper">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}