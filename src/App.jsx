import { useEffect, useState } from 'react';
import AncientLetter from './components/AncientLetter.jsx';
import CastleRoomDivider from './components/CastleRoomDivider.jsx';
import FinalQuestion from './components/FinalQuestion.jsx';
import FloatingParticles from './components/FloatingParticles.jsx';
import Gallery from './components/Gallery.jsx';
import Intro from './components/Intro.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import ProcessVideo from './components/ProcessVideo.jsx';
import Welcome from './components/Welcome.jsx';
import { giftContent } from './data/content.js';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isOpen]);

  const openGift = () => {
    setIsOpen(true);
    window.setTimeout(() => {
      document.getElementById('castle-rooms')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 520);
  };

  return (
    <>
      <div className="emergency-fallback" aria-hidden="true">
        <p>Amber Gift Experience is loading…</p>
        <strong>For Amber…</strong>
      </div>
      <div className="app-shell">
        <FloatingParticles />
        <Intro content={giftContent.intro} isOpen={isOpen} onOpen={openGift} />
        <main id="castle-rooms" className={`castle-rooms ${isOpen ? 'rooms-unlocked' : ''}`}>
          <Welcome content={giftContent.welcome} />
          <CastleRoomDivider label="Through candlelit stone" />
          <ProcessVideo content={giftContent.process} />
          <CastleRoomDivider label="Into the room of memories" />
          <Gallery content={giftContent.gallery} />
          <CastleRoomDivider label="Past the sealed archive" />
          <AncientLetter content={giftContent.letter} />
          <CastleRoomDivider label="Toward the quiet music chamber" />
          <MusicPlayer content={giftContent.music} />
          <CastleRoomDivider label="The last door" />
          <FinalQuestion content={giftContent.finalQuestion} />
        </main>
      </div>
    </>
  );
}
