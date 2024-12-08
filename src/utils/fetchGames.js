const fetchGames = async () => {
    const dummyData = [
      {
        id: 1,
        title: "The Legend of Zelda",
        genre: "Adventure",
        url: "https://www.zelda.com/",
        image: "https://cdn02.plentymarkets.com/qozbgypaugq8/item/images/1613/full/PSTR-ZELDA005.jpg", // Alternatif Zelda
      },
      {
        id: 2,
        title: "God of War",
        genre: "Action",
        url: "https://www.playstation.com/en-us/god-of-war/",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
      },
      {
        id: 3,
        title: "Minecraft",
        genre: "Sandbox",
        url: "https://www.minecraft.net/",
        image: "https://imgcdn.stablediffusionweb.com/2024/9/16/d5c1f49e-6bb8-4724-a824-0ca0ceee6db9.jpg", // Alternatif Minecraft
      },
      {
        id: 4,
        title: "The Witcher 3",
        genre: "RPG",
        url: "https://thewitcher.com/en/witcher3",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
      },
      {
        id: 5,
        title: "Elden Ring",
        genre: "Action RPG",
        url: "https://en.bandainamcoent.eu/elden-ring",
        image: "https://m.media-amazon.com/images/I/61Hj5BHApPL.jpg", // Alternatif Elden Ring
      },
      {
        id: 6,
        title: "Halo Infinite",
        genre: "First-person shooter",
        url: "https://www.halowaypoint.com/",
        image: "https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png", // Alternatif Halo Infinite
      },
      {
        id: 7,
        title: "Red Dead Redemption 2",
        genre: "Action-Adventure",
        url: "https://www.rockstargames.com/reddeadredemption2",
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
      },
      {
        id: 8,
        title: "Cyberpunk 2077",
        genre: "Action RPG",
        url: "https://www.cyberpunk.net/",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
      },
      {
        id: 9,
        title: "GTA V",
        genre: "Action-Adventure",
        url: "https://www.rockstargames.com/V/",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
      },
      {
        id: 10,
        title: "Fortnite",
        genre: "Battle Royale",
        url: "https://www.epicgames.com/fortnite/",
        image: "https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg", // Alternatif Fortnite
      },
    ];
  
    // Simulasi delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 1000);
    });
  };
  
  export default fetchGames;
  