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
    eyebrow: "Music Chamber",
    title: "Music at the entrance",
    description: "Press play before entering this little world.",
    playLabel: "Play Music",
    pauseLabel: "Pause Music",
    src: "assets/audio/background-music.mp3"
  },
  welcome: {
    roomLabel: "First room",
    title: "This little world was made for you",
    text: "Amber, this is not just a page. It is a small piece of the story behind your gift — the time, the details, the mistakes, and the intention that went into making something only for you."
  },
  process: {
    eyebrow: "Creation Room",
    title: "Something I made only for you",
    text: "I wanted to make something that felt like you — a little dark, a little sweet, mysterious, beautiful, and impossible to forget. While I was creating it, I kept thinking about your smile, your energy, and the way you make simple moments feel different.",
    tags: ["Made with care", "For you", "A little darker", "A little sweeter"],
    videoTitle: "A little glimpse behind it",
    videoDescription: "This is just a small look at the quiet moments behind your gift — the patience, the care, and the feeling I put into making something for you.",
    videoSrc: "assets/videos/Video.MOV",
    videoFallback: "A little glimpse will appear here soon."
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
          "assets/images/amber-04.jpg"
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
    closingMessage: "gracias por brindarme de tu tiempo me hiciste feliz y aprendi mucho de ti no olvides sonreir simepre",
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
  footer: {
    text: "Made with intention by Jonathan.",
    signature: "JAKS"
  }
};
