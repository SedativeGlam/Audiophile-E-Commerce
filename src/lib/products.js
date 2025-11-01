const { id, ca } = require("zod/v4/locales");

export const productCategories = [
  {
    image: "/images/headphone2/display-image.png",
    title: "Headphones",
    height: 160,
    width: 122.95,
  },

  {
    image: "/images/speaker1/display-image.png",
    title: "Speakers",
    height: 146,
    width: 121.49,
  },

  {
    image: "/images/earphone/display-image.png",
    title: "Earphones",
    height: 126,
    width: 125,
  },
];

export const products = [
  {
    id: 1,

    category: "headphones",

    title: "XX99 Mark II Headphones",

    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",

    price: 2999,

    features: [
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat",

      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    ],

    box: [
      {
        quantity: "1x",
        text: "Headphone Unit",
      },

      {
        quantity: "2x",
        text: "Replacement Earcups",
      },

      {
        quantity: "1x",
        text: "User Manual",
      },

      {
        quantity: "1x",
        text: "Travel Bag",
      },
    ],
    displayImage: "/images/headphone1/display_image.png",
    featureImage: "/images/headphone1/feature-image.png",
  },

  {
    id: 2,

    category: "headphones",

    title: "XX99 Mark I Headphones",

    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",

    price: 1750,

    features: [
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",

      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    ],

    box: [
      {
        quantity: "1x",
        text: "Headphone Unit",
      },

      {
        quantity: "2x",
        text: "Replacement Earcups",
      },

      {
        quantity: "1x",
        text: "User Manual",
      },

      {
        quantity: "1x",
        text: "3.5mm 5m Audio Cable",
      },
    ],
    displayImage: "/images/headphone2/display_image.png",
    featureImage: "/images/headphone2/feature-image.png",
  },

  {
    id: 3,

    category: "headphones",

    title: "XX59 Headphones",

    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",

    price: 899,

    features: [
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",

      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    ],

    box: [
      {
        quantity: "1x",
        text: "Headphone Unit",
      },

      {
        quantity: "2x",
        text: "Replacement Earcups",
      },

      {
        quantity: "1x",
        text: "User Manual",
      },

      {
        quantity: "1x",
        text: "3.5mm 5m Audio Cable",
      },
    ],
    displayImage: "/images/headphone3/display_image.png",
    featureImage: "/images/headphone3/feature-image.png",
  },

  {
    id: 4,

    category: "speakers",

    title: "ZX9 SPEAKER",

    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",

    price: 4500,

    features: [
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",

      "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    ],

    box: [
      {
        quantity: "2x",
        text: "Speaker Unit",
      },

      {
        quantity: "2x",
        text: "Speaker Cloth Panel",
      },

      {
        quantity: "1x",
        text: "User Manual",
      },

      {
        quantity: "1x",
        text: "3.5mm 5m Audio Cable",
      },

      {
        quantity: "1x",
        text: "10m Optical Cable",
      },
    ],
    displayImage: "/images/speaker1/display_image.png",
    featureImage: "/images/speaker1/feature-image.png",
  },

  {
    id: 5,

    category: "earphones",

    title: "YX1 WIRELESS EARPHONES",

    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",

    price: 599,

    features: [
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",

      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    ],

    box: [
      {
        quantity: "2x",
        text: "Earphone Unit",
      },

      {
        quantity: "6x",
        text: "Multi-size Earplugs",
      },

      {
        quantity: "1x",
        text: "User Manual",
      },

      {
        quantity: "1x",
        text: "USB-C Charging Cable",
      },

      {
        quantity: "1x",
        text: "Travel Pouch",
      },
    ],
    displayImage: "/images/speaker1/display_image.png",
    featureImage: "/images/speaker1/feature-image.png",
  },
];
