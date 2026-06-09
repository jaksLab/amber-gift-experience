const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const giftContent = {
  recipientName: "Amber",
  senderName: "Jonathan",
  intro: {
    title: "For Amber…",
    subtitle: "A little piece of my heart, made with time, patience, and love.",
    button: "Open Your Gift"
  },
  welcome: {
    title: "Welcome to your little world",
    text: "Amber, this is not just a gift. It is a memory, a story, and a little world I created for you.",
    subtext: "Every detail was made with you in my mind."
  },
  process: {
    title: "The story behind your gift",
    text: "I wanted you to see everything behind this gift…",
    subtext: "Every mistake, every detail, and every moment became part of this memory.",
    videoSrc: asset("assets/videos/gift-process.mp4")
  },
  gallery: {
    title: "A room of memories",
    subtitle: "Little pieces of beauty, time, and feeling.",
    images: [
      asset("assets/images/amber-01.jpg"),
      asset("assets/images/amber-02.jpg"),
      asset("assets/images/gift-01.jpg"),
      asset("assets/images/gift-02.jpg")
    ]
  },
  letter: {
    title: "A letter for you",
    button: "Open the Letter",
    body: `My dear Amber,

I wanted to give you something that was more than just a present.
Something that could hold a memory, a feeling, and a part of me.

While I was making this, I thought about you.
About your smile, your energy, your darkness, your beauty, and the way you make ordinary moments feel different.

This gift was made with time, patience, mistakes, care, and love.
Every piece, every detail, every idea behind it was created because I wanted you to feel special.

You have a way of making the world feel a little more magical.
And I hope this little world I created for you reminds you that you are deeply appreciated, admired, and loved.

This is yours.
A memory you can keep forever.

With love,
Jonathan`
  },
  music: {
    title: "Music for this little world",
    playLabel: "Play Music",
    pauseLabel: "Pause",
    src: asset("assets/audio/background-music.mp3")
  },
  finalQuestion: {
    intro: "And after all of this… there is one more thing I wanted to ask you.",
    continueButton: "Continue",
    question: "Amber, will you be my girlfriend?",
    yesButton: "Yes",
    ofCourseButton: "Of course yes",
    response: "You just made this memory even more beautiful.",
    forever: "This page will always be here for you."
  }
};
