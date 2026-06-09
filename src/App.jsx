import { useState } from 'react';
import AdorationList from './components/AdorationList.jsx';
import AncientLetter from './components/AncientLetter.jsx';
import CastleRoom from './components/CastleRoom.jsx';
import FinalQuestion from './components/FinalQuestion.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';
import ProcessVideo from './components/ProcessVideo.jsx';
import { giftContent } from './data/content.js';

export default function App() {
  const [entered, setEntered] = useState(false);

  const enterCastle = () => {
    setEntered(true);
    requestAnimationFrame(() => {
      document.getElementById('first-room')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="app-shell">
      <Hero content={giftContent.intro} music={giftContent.music} onEnter={enterCastle} />

      {entered && (
        <main className="castle-journey" aria-label="Amber's digital castle rooms">
          <CastleRoom content={giftContent.welcome} id="first-room" />
          <ProcessVideo content={giftContent.process} />
          <Gallery content={giftContent.gallery} />
          <AdorationList content={giftContent.adoration} />
          <AncientLetter content={giftContent.letter} />
          <FinalQuestion content={giftContent.finalQuestion} />
          <Footer content={giftContent.footer} />
        </main>
      )}
    </div>
  );
}
