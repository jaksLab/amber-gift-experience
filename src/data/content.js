const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const giftContent = {
  recipientName: "Amber",
  senderName: "Jonathan",
  intro: {
    eyebrow: "Amber's Little Castle",
    title: "For Amber…",
    subtitle: "A little world I made just for you.",
    smallText: "Before you open the gift, come inside the story behind it.",
    button: "Enter the Castle"
  },
  music: {
    title: "Music at the entrance",
    text: "A quiet soundtrack for this little world.",
    playLabel: "Play Music",
    pauseLabel: "Pause Music",
    missingText: "Music will be added soon.",
    src: asset("assets/audio/background-music.mp3")
  },
  welcome: {
    roomLabel: "First room",
    title: "This little world was made for you",
    text: "Amber, this is not just a page. It is a small piece of the story behind your gift — the time, the details, the mistakes, and the intention that went into making something only for you."
  },
  process: {
    roomLabel: "Creation room",
    title: "Something I made only for you",
    text: "This gift was made with time, intention, and a little piece of who I am. Every detail was meant to feel personal, dark, romantic, mysterious, and beautiful.",
    details: ["A little glimpse behind it", "3D model", "Printing process", "The box", "Final preparation"],
    videoSrc: asset("assets/videos/gift-process.mp4"),
    missingText: "The process video will be added soon."
  },
  gallery: {
    roomLabel: "Memory room",
    title: "A room of memories",
    subtitle: "Little pieces of beauty, time, and feeling.",
    images: [
      asset("assets/images/amber-01.jpg"),
      asset("assets/images/amber-02.jpg"),
      asset("assets/images/gift-01.jpg"),
      asset("assets/images/gift-02.jpg"),
      asset("assets/images/process-01.jpg"),
      asset("assets/images/process-02.jpg")
    ]
  },
  adoration: {
    roomLabel: "Adoration room",
    title: "Things I adore about you",
    items: [
      "Your energy.",
      "Your smile.",
      "Your dark little soul.",
      "Your sweet and mysterious side.",
      "The way you make simple moments feel special.",
      "The way being with you feels different."
    ]
  },
  letter: {
    roomLabel: "Ancient letter room",
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
And I hope this little world I created for you reminds you that you are deeply appreciated, admired, and cared for.

This is yours.
A memory you can keep forever.

With love,
Jonathan`
  },
  finalQuestion: {
    roomLabel: "Final question room",
    title: "The question",
    text: "I know you like to take things slow, and I respect that. I don’t want to pressure you. I just want to be honest with you. I really like what we are building, I care about you, and I would love to keep choosing you in a more intentional way.",
    continueButton: "Continue",
    question: "Would you like to be my girlfriend?",
    yesButton: "Yes 🖤",
    ofCourseButton: "Also yes 🦇",
    response: "You just made this night unforgettable.",
    forever: "This little castle will always be here for you."
  },
  footer: {
    text: "Made with intention by Jonathan.",
    signature: "JAKS"
  }
};
