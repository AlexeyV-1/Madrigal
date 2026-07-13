import { LandingPageHero } from './LandingPageComponents/LandingPageHero';
import { LandingPageScenary } from './LandingPageComponents/LandingPageScenary';
import { LandingPageFeedback } from './LandingPageComponents/LandingPageFeedback';
import { LandingPageAdvantages } from './LandingPageComponents/LandingPageAdvantages';

export function LandingMain() {
    return (
        <div className="container">
            <LandingPageHero />
            <LandingPageAdvantages />
            <LandingPageScenary />
            <LandingPageFeedback />
        </div >
    )
}