export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

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
    text: "A dark romantic soundtrack for the castle doors.",
    playLabel: "Play Music",
    pauseLabel: "Pause Music",
    youtubeLabel: "Open YouTube player",
    youtubeText: "If the browser cannot play the local soundtrack, use the mini YouTube player below.",
    missingText: "The local MP3 is not available, so the YouTube player is ready instead.",
    youtubeUrl: "https://www.youtube.com/watch?v=iuTkkMuKEec",
    youtubeEmbedSrc: "https://www.youtube.com/embed/iuTkkMuKEec?rel=0&modestbranding=1",
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
    eyebrow: "Memory Room",
    title: "Little pieces of this memory",
    subtitle: "Moments, details, and feelings I wanted to keep for you.",
    memories: [
      {
        title: "Us",
        caption: "The first time I saw you in person — a moment I knew I would keep.",
        imageFit: "contain",
        imagePosition: "center",
        images: ["assets/images/amber-me.jpg"]
      },
      {
        title: "Her light",
        caption: "The kind of beauty that stays in my mind.",
        images: ["assets/images/amber.jpg"]
      },
      {
        title: "Little moments together",
        caption: "Simple moments that felt different because they were with you.",
        images: [
          "assets/images/amber-01.jpg",
          "assets/images/amber-02.jpg",
          "assets/images/amber-03.jpg"
        ]
      },
      {
        title: "Soft memories",
        caption: "Small pieces of time that felt sweet and real.",
        images: [
          "assets/images/amber-04.jpg",
          "assets/images/amber-05.jpg"
        ]
      },
      {
        title: "Waterfall day",
        caption: "A memory with water, light, and you in it.",
        images: [
          "assets/images/amber-06.jpg",
          "assets/images/amber-07.jpg",
          "assets/images/amber-08.jpg",
          "assets/images/amber-09.jpg"
        ]
      },
      {
        title: "Beautiful pieces of her",
        caption: "Little pieces of you that I wanted to keep close.",
        images: [
          "assets/images/amber-10.jpg",
          "assets/images/amber-11.jpg",
          "assets/images/amber-12.jpg",
          "assets/images/amber-13.jpg",
          "assets/images/amber-14.jpg"
        ]
      }
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
    continueLabel: "Close the letter and open the last room",
    body: `My dear Amber,

I wanted to make something that felt personal.
Something that could hold a memory, a feeling, and a part of me.

While I was making this, I kept thinking about you.
Your smile.
Your energy.
Your darkness.
Your beauty.
The way you make ordinary moments feel different.

I wanted you to feel special, not because of how big the gift is, but because of the intention behind it.
Because every detail was made with care.
Because every part of this little world was created with you in my heart.

You have a way of making things feel more magical.
A little darker.
A little sweeter.
A little more alive.

I hope that when you see this, you feel admired.
I hope you feel appreciated.
I hope you feel cared for.

This is yours.
A memory you can keep.

With love,
Jonathan`
  },
  finalQuestion: {
    eyebrow: "Final Room",
    title: "The question",
    text: "I know you like to take things slow, and I respect that. I don’t want to pressure you or rush anything. I just want to be honest with you. I care about you, I like what we are building, and I would love to keep choosing you with more intention.",
    question: "Would you like to be my girlfriend?",
    yesLabel: "Yes 🖤",
    noLabels: [
      "No",
      "Are you sure?",
      "Think about it…",
      "But I made a castle…",
      "Last chance?",
      "no?"
    ],
    acceptedMessage: "You just made this night unforgettable.",
    acceptedSubtext: "This little castle will always be here for you."
  },
  footer: {
    text: "Made with intention by Jonathan.",
    signature: "JAKS"
  }
};
