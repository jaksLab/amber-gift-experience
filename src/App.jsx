import { useState } from 'react';
import AncientLetter from './components/AncientLetter.jsx';
import FinalQuestion from './components/FinalQuestion.jsx';
import Gallery from './components/Gallery.jsx';
import Intro from './components/Intro.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import ProcessVideo from './components/ProcessVideo.jsx';
import Welcome from './components/Welcome.jsx';
import { giftContent } from './data/content.js';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openGift = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="app-shell">
      <Intro content={giftContent.intro} onOpen={openGift} />

      {isOpen && (
        <main className="castle-rooms" aria-label="Amber Gift Experience rooms">
          <Welcome content={giftContent.welcome} />
          <ProcessVideo content={giftContent.process} />
          <Gallery content={giftContent.gallery} />
          <AncientLetter content={giftContent.letter} />
          <MusicPlayer content={giftContent.music} />
          <FinalQuestion content={giftContent.finalQuestion} />
        </main>
      )}
    </div>
  );
}
