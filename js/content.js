var titles = [
  "Εὕρηκα!",
  "各組介紹",
  "數學組",
  "資訊組",
  "化學組",
  "地科組",
  "物理組",
  "生物組",
];

var descs = [
  "建國中學第三十六屆數理資優班成果發表會",
  "六十個人奮鬥的故事",
  "Μαθηματικά",
  "Πληροφορική",
  "Χημεία",
  "Επιστήμη της Γης",
  "Η φυσικη",
  "Βιολογία",
];

var secondSection = [
  {
    "title": "何謂Εὕρηκα？",
    "innerText": `

古希臘時期，數學家阿基米德在泡澡的時候靈光一閃發現了浮力原理，解決了困擾已久的皇冠問題。在這個靈感與興奮交疊的剎那，「Εὕρηκα!」脫口而出。
</p>
「Εὕρηκα!」一詞在古希臘語中是「我發現了！」的意思。在數資班特有的專題研究課中，透過一次次的推導、實驗、以及程式執行等等，我們一步步接近我們研究的目標。終於在這些過程與腦中想法交織之下，發現了對我們來說意義重大的結果，在喜悅與欣慰之間，豪邁地歡呼一聲「Εὕρηκα!」為堅持一年多辛苦的專題研究作最好的註解。
</p>
發現自己期盼已久結果的喜悅是藏不住的。我們以「Εὕρηκα!」作為第36屆建中數理資優班成果發表會的名稱，希望可以永遠記住這些努力之後的神聖時刻。在未來的人生旅途中，我們也自勉秉持對世間萬物的好奇心與對每件事情清晰的思考能力，探索更多未知領域，創造更多屬於Εὕρηκα!的驚奇瞬間。`
  },{
    "title": "總副召的話",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "關於數學組",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "關於資訊組",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "關於化學組",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "關於地科組",
    "innerText": `地科組雖然只有兩組，也算是較冷門的科目，但卻不減我們在其中獲得的樂趣，我們應該是最愛運動的組別了吧，有許多時間都可以在球場上看到我們的身影，然而該認真的時候，我們也有好好利用有限專題時間，並沒有請太多公假，佔用太多其他課程的時間。而地科包含的研究範圍其實博大精深，有天文、地質、海洋、颱風等等，而兩組地科組分別研究的東西是天文方面的OB星，以及颱風方面的雙眼牆，也都有請大學教授和李文禮老師一起指導我們。`
  },{
    "title": "關於物理組",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "關於生物組",
    "innerText": `
    由許多極度熱愛生物的同學所組成，在生物科魏宏仁老師的帶領下，到各大實驗室針對動物、植物、分子生物、微生物、遺傳、演化等六大領域，在高中課內的理論基礎上做更進一步的探討與驗證；然而，許多生物領域的研究都是既耗時又需要許多昂貴的器材，因此各組同學在專題課時都爭分奪秒，不只請常公假前往實驗室，也利用自己課外的時間進行研究，以不愧對教授和系所提供的資源。`
  }
];

var thirdSection = [
  {
    "title": "我們的導師",
    "innerText": `高君陶老師和姚志鴻老師`
  },{
    "title": "關於Εὕρηκα!",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "數學專題指導老師的話",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "資訊專題指導老師的話",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "化學專題指導老師的話",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "地科專題指導老師",
    "innerText": `李文禮老師是個十分開明的老師，平時給予我們地科組很大的自由，也培養我們替自己負責的能力，既不會過度催促我們的進度，體諒我們有很多事要做，而我們遇到問題卡關時，老師也會循循善誘，提出一針見血的問題，並引導我們找到解決方法，在討論中我們地科組總能獲益良多，除了在專題上的進展之外，還有一些關於論文的倫理以及身為一個科學工作者該有的態度，務實但又不乏創意，有幾分證據說幾分話，這些對於地科組來說，都是超越專題本身的收穫。`
  },{
    "title": "物理專題指導老師的話",
    "innerText": `Hwæt. We Gardena in geardagum,
þeodcyninga, þrym gefrunon,
hu ða æþelingas ellen fremedon.`
  },{
    "title": "生物專題指導老師的話",
    "innerText": `魏宏仁老師，是一名給予學生高自由度的專題老師，深知生物研究所需的時間及努力，往往都會同意同學的公假，各組對的研究內容也不會有過多干涉，更不會要求報名科展、各獎項、期刊等，給予學生最大的獨立自主空間，使我們學會對自己負責。但在高自由度的環境下，其實老師對研究的嚴謹精神是有目共睹的，該說笑時說笑，只要一談到生物領域，老師就會嚴肅地說出研究中所有你沒看到的缺點及錯誤，彷彿變了個人似的，是一位不論在學術領域和教學方面都具有極度熱誠的老師。`

  }
];

var fourthSection = [
  {
    "title": "我們的導師們",
    "innerText": ``
  },
  {
    "title": "影片、音樂組",
    "innerText": `α΄ 1. Σημεῖόν ἐστιν, οὗ μέρος οὐθέν.

β΄ 2. Γραμμὴ δὲ μῆκος ἀπλατές.`
  },
  {
    "title": "各組介紹",
    "innerText": ``
  },
  {
    "title": "各組介紹",
    "innerText": ``
  },
  {
    "title": "各組介紹",
    "innerText": ``
  },
  {
    "title": "各組介紹",
    "innerText": ``
  },
  {
    "title": "各組介紹",
    "innerText": ``
  },
  {
    "title": "各組介紹",
    "innerText": ``
  }
];

var sixthSection = [
  {
    "title": "成發影片《Euphoria》",
    "innerText": `
    <div class = "mainVideo" style = 'padding-top: 10vh; margin: 0 auto; width: 100px; '>
      <iframe id = "euphoria"
      width="1080" height="630"
      src="https://www.youtube.com/embed/MREGIl3GnxY">
      </iframe>
    </div>
    `
  },
  {
    "title": "網管、網站組",
    "innerText": `讓我們一起飛過 霓虹彼端。`
  }
];

var eighthSection = [
  {
    "title": "成發曲《霓虹彼端》",
    "innerText": `
    <div class = "mainVideo" style = 'padding-top: 10vh; margin: 0 auto; width: 100px; '>
      <iframe id = "euphoria"
      width="1080" height="630"
      src="https://www.youtube.com/embed/MU2APcEQifQ">
      </iframe>
    </div>
    `
  },
  {
    "title": "活動、場地、主持人組",
    "innerText": `讓我們一起飛過 霓虹彼端。`
  }
];

var tenthSection = [
  {
    
  },
  {
    "title": "文書、美宣組",
    "innerText": `讓我們一起飛過 霓虹彼端。`
  }
];

var ball_photos = [
  "./images/logos/eureka_icon.png",
  "./images/logos/brain_icon.png",
  "./images/logos/math_icon.png",
  "./images/logos/inform_icon.png",
  "./images/logos/chem_icon.png",
  "./images/logos/earths_icon.png",
  "./images/logos/phys_icon.png",
  "./images/logos/bio_icon.png",
  "./images/logos/up_icon.png",
];

var bg_math   = "url('./images/backgrounds/math_background-01.png')";
var bg_inform = "url('./images/backgrounds/inform_background-01.png')";
var bg_chem   = "url('./images/backgrounds/chem_background-01.png')";
var bg_earths = "url('./images/backgrounds/earths_background-01.png')";
var bg_phys   = "url('./images/backgrounds/phys_background-01.png')";
var bg_bio    = "url('./images/backgrounds/bio_background-01.png')";

var Bgs = [
  "url('./images/backgrounds/inform_background-01.png')",
  "url('./images/backgrounds/eureka_bg.jpg')",
  bg_math,
  bg_inform,
  bg_chem,
  bg_earths,
  bg_phys,
  bg_bio,
];

var secondSubs = [
  "By 陳彥儒",
  "總召：洪辰亞、陳冠豪 / 副召 ： 楊竣凱、闕子維",
  "姚志鴻老師 By ",
  "彭天健老師 By ",
  "曹淇峰老師 By ",
  "李文禮老師 By 劉奕辰",
  "賴奕帆老師 By ",
  "魏宏仁老師 By 陳冠豪",
];

var thirdSubs = [
  "",
  "By",
  "姚志鴻老師 By ",
  "彭天健老師 By ",
  "曹淇峰老師 By ",
  "李文禮老師 By 劉奕辰",
  "賴奕帆老師 By ",
  "魏宏仁老師 By 陳冠豪",
];

var fourthSubs = [
  "By",
  "By",
  "",
  "",
  "",
  "",
  "",
  ""
];

var sixthSubs = [
  "",
  "By ",
  "By ",
  "By ",
  "By ",
  "By 劉奕辰",
  "By ",
  "By 陳冠豪",
];

var eighthSubs = [
  "",
  "By ",
  "By ",
  "By ",
  "By ",
  "By 劉奕辰",
  "By ",
  "By 陳冠豪",
];


var tenthSubs = [
  "",
  "By ",
  "By ",
  "By ",
  "By ",
  "By 劉奕辰",
  "By ",
  "By 陳冠豪",
];

var specialBgs = [
  [
    "url('./images/backgrounds/inform_background-01.png')",
    "url('./images/groupimgs/day1_group.jpg')",
    "url('./images/groupimgs/video_group.png')",
    "url('./images/groupimgs/music_front.jpg')",
    bg_inform
  ],
  [
    "url('./images/backgrounds/inform_background-01.png')",
    "url('./images/groupimgs/day1_group.jpg')",
    "url('./images/groupimgs/video_group.png')",
    "url('./images/groupimgs/music_front.jpg')",
    bg_inform,
    bg_inform
  ],

]

var teacher_photos = [
  "",
  "",
  "url('./images/teacher/math.png')",
  "url('./images/teacher/inform.png')",
  "url('./images/teacher/chem.png')",
  "url('./images/teacher/earths.png')",
  "url('./images/teacher/phys.png')",
  "url('./images/teacher/bio.png')",
];

var second_photos = [
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
  "url('./images/einstein.jpeg')",
];

var groups = [
  {
    "title": "jizz",
    "innerText": "more jizz"
  }, //Eureka
  {
    "title": "spice",
    "innerText": "more spice"
  }, //What is
  {
    "len": 7,
    "images": [
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg"
    ], //團體照
    "titles": [
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究"
    ], //專題名稱
    "names": [
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
    ], //作者
  }, //數學
  {
    "len": 6,
    "images": [
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg"
    ], //團體照
    "titles": [
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究"
    ], //專題名稱
    "names": [
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
    ], //作者
  }, //資訊
  {
    "len": 4,
    "images": [
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg"
    ], //團體照
    "titles": [
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究"
    ], //專題名稱
    "names": [
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
    ], //作者
  }, //化學
  {
    "len": 2,
    "images": [
      "./images/einstein.jpeg",
      "./images/einstein.jpeg"
    ], //團體照
    "titles": [
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究"
    ], //專題名稱
    "names": [
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
    ], //作者
  }, //地科
  {
    "len": 7,
    "images": [
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg"
    ], //團體照
    "titles": [
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究"
    ], //專題名稱
    "names": [
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
    ], //作者
  }, //物理
  {
    "len": 6,
    "images": [
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg",
      "./images/einstein.jpeg"
    ], //團體照
    "titles": [
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究",
      "辣椒的研究"
    ], //專題名稱
    "names": [
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
      "陳奕安",
    ], //作者
  } //生物
];