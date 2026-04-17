export type Language = 'en' | 'ms' | 'zh';

export const translations = {
  en: {
    nav: {
      home: 'HOME',
      stay: 'ACCOMMODATION',
      rates: 'RATES',
      team: 'TEAM BUILDING',
      play: 'ACTIVITIES',
      gallery: 'GALLERY',
      contact: 'CONTACT US',
      book: 'BOOK NOW'
    },
    hero: {
      welcome: 'Welcome to Gopeng Glamping Park',
      gateway: 'GATEWAY TO',
      nature: 'NATURE',
      subtitle: 'Experience the timeless beauty of nature, culture, and history. The ultimate glamping experience in the heart of Gopeng.',
      tents: 'Our Tents',
      video: 'Watch Video'
    },
    booking: {
      title: 'Start Your Adventure',
      guarantee: 'Best Rate Guarantee',
      checkIn: 'Check In Date',
      checkOut: 'Check Out',
      guests: 'Guests',
      checkRates: 'Check Rates',
      camper: 'Person',
      campers: 'Persons'
    },
    features: {
      introTitle: "Malaysia's Premier Glamping Destination",
      awardTitle: "AWARD WINNING EXCELLENCE",
      introText: "Gopeng Glamping Park is proud to be Malaysia's 1st ISO 21101 Certified Glamping Site. We combine the rugged beauty of nature with world-class safety standards and hospitality.",
      awards: {
        safety: 'Adventure Tourism Safety Management Systems',
        quality: 'Quality Management System (QMS)',
        halal: 'Certificate of Authentication Halal',
        tourism: 'Perak Tourism Award Outdoor Adventure Award'
      },
      accomTitle: 'OUR ACCOMMODATION',
      accomSub: 'Luxurious comfort in the heart of the wild.',
      discover: 'Discover Weekday & Weekend Rates',
      amenities: 'Amenities',
      tents: {
        double: {
          title: 'Double Tent',
          desc: 'A cozy sanctuary for couples. Experience privacy and comfort with our premium amenities, designed for a romantic escape into nature.',
          price: 'Couple'
        },
        quad: {
          title: 'Quad Tent',
          desc: 'The perfect balance of space and togetherness for small families or groups. Located near the river for a soothing ambience.',
          price: 'Family'
        },
        deluxe: {
          title: 'Deluxe Tent',
          desc: 'Our most spacious option, ideal for large gatherings and team bonding. Enjoy a communal atmosphere with no compromise on luxury.',
          price: 'Group'
        }
      }
    },
    rates: {
      header: 'Transparent Pricing',
      title: 'CHOOSE YOUR EXPERIENCE',
      subtitle: 'We offer two distinct ways to experience Gopeng Glamping Park. Choose between our flexible Weekday Room Packages or our All-Inclusive Weekend Full Board Experience.',
      weekdayBtn: 'Weekdays (Sun-Thu)',
      weekendBtn: 'Weekends (Fri-Sun)',
      weekdayLabel: 'Room Night Basis',
      weekdayDesc: 'Inclusive of Accommodation & Breakfast Buffet Only.',
      weekendLabel: 'Per Person Basis • All Inclusive',
      weekendDesc: 'Inclusive of Accommodation + 4 Buffet Meals.',
      perNight: '/ night per tent',
      perAdult: 'per adult',
      weekendRates: 'WEEKEND RATES',
      fullBoard: 'Full Board • Per Adult',
      friSun: 'Friday & Sunday',
      saturday: 'Saturday',
      peak: 'PEAK',
      surchargeTitle: 'Double Tent Surcharge',
      whatsIncluded: "WHAT'S INCLUDED?",
      viewMenu: 'Fullboard Menu',
      tapToView: 'Tap to view detailed menu',
      occupancy: {
        double: 'Min. 2 Adults / Tent',
        quad: 'Min. 3 Adults / Tent',
        deluxe: 'Min. 6 Adults / Tent'
      },
      noSurcharge: 'NO SURCHARGE during peak season / school holidays for Weekend Packages!',
      policies: {
        title: 'Important Park Policies',
        cohab: 'Cohabitation Policy',
        rules: 'Glamping Rules',
        notes: 'Important Notes',
        surchargeHoliday: 'RM58/night surcharge during school/public holidays.',
        surchargePax: 'RM50/night surcharge for additional pax (Breakfast included, no extra bed).',
        sst: 'Subject to 8% SST.',
        cpt: 'Local Tax (CPT) RM3/room/night.',
        facilities: 'Free access to all park facilities.',
        deposit: 'RM50/room refundable security deposit required.',
        tourismTax: 'Tourism Tax applies for non-Malaysians.'
      },
      cta: 'Book Now',
      terms: 'Terms & Conditions Apply. All rates subject to 8% SST.'
    },
    activities: {
      header: 'Adrenaline Rush',
      title: 'Adventure Log',
      scroll: 'Scroll to Explore',
      readMore: 'Read More',
      showLess: 'Show Less',
      watch: 'WATCH',
      endTitle: 'End of List',
      endDesc: "You've seen all our adventures.",
      backStart: 'Back to Start',
      brochureTitle: 'Adventure Brochure',
      brochureDesc: 'Download our complete activities catalog',
      viewBrochure: 'View Brochure',
      perPerson: 'Per Person',
      perBoat: 'Per Boat',
      perUnit: 'Per Unit',
      items: {
        rafting: { title: 'White Water Rafting', desc: 'The ultimate Gopeng experience! Navigate 7km of the Kampar River through 9 major rapids. Our professional river guides ensure a safe and exhilarating journey.' },
        funtrip: { title: 'Funtrip Rafting', desc: 'A more relaxed river experience suitable for families with young children or the elderly. Enjoy the scenic beauty of the rainforest.' },
        abseil: { title: 'Waterfall Abseiling', desc: 'Challenge your fear of heights by descending the vertical face of the Ulu Geruntum Waterfall. Feel the rush of the cool water.' },
        atv: { title: 'Funride ATV', desc: 'Explore the rugged terrain of Gopeng on our All-Terrain Vehicles. Ride through palm oil plantations and jungle paths.' },
        hiking: { title: 'Sunset Hiking', desc: 'Trek up Bukit Batu Putih for a panoramic view. The best reward is watching the golden sun dip below the horizon.' },
        cave: { title: 'Cave Exploration', desc: 'Delve into the darkness of Gua Tempurung or Gua Kandu. Marvel at massive stalactites and stalagmites.' },
        paintball: { title: 'Paintball Wargame', desc: 'Lock and load! Choose between a tactical Wargame in our jungle arena or test your precision with Target Shooting.' },
        buggy: { title: 'Buggy Adventure (F1)', desc: 'Channel your inner racer on our dirt track! Focus on speed, handling, and drift control on a closed circuit.' }
      }
    },
    team: {
      header: 'Corporate & Group Events',
      title: 'TEAM BUILDING PACKAGES',
      subtitle: 'Strengthen bonds, build leadership, and create unforgettable memories in the heart of nature. We offer customizable programs for companies, schools, and large families.',
      download: 'Download Brochure',
      comingSoon: 'Coming Soon',
      events: 'Event Moments',
      plan: 'Planning a Large Event?',
      planDesc: 'Our Corporate Sales team is ready to assist you with customized itineraries, food arrangements, and special requests.',
      contactCorp: 'Contact Corporate Sales',
      packages: {
        day: { title: 'Day Trip Package', desc: 'Perfect for quick getaways and team bonding activities.' },
        d2n1: { title: '2 Days 1 Night', desc: 'Immersive overnight experience with glamping & meals.' },
        d3n2: { title: '3 Days 2 Nights', desc: 'The complete adventure experience for maximum impact.' },
        family: { title: 'Family Day', desc: 'Fun-filled activities suitable for all ages and families.' },
        hrdc: { title: 'HRDC Claimable', desc: 'Government-certified training programs. Claim your training costs through HRDC.' }
      }
    },
    contact: {
      header: 'Secure Your Spot',
      title: 'PLAN YOUR GETAWAY',
      subtitle: 'View our live availability below. For large groups or special requests, please use the inquiry form.',
      general: 'GENERAL INQUIRIES',
      generalDesc: 'Send us a message and our team will get back to you shortly.',
      form: { name: 'Name', phone: 'Phone', email: 'Email', message: 'Message', send: 'Send Message' },
      touch: 'GET IN TOUCH',
      location: 'Our Location',
      sales: 'Sales Office',
      corporate: 'Corporate Sales (Group)',
      hr: 'Human Resources',
      warning: 'Warning: Please ensure you are booking through this official website to avoid scams.'
    },
    footer: {
      desc: 'Your gateway to nature. Experience the perfect blend of adventure and serenity in Gopeng, Perak.',
      explore: 'Explore',
      info: 'Information',
      office: 'Sales Office',
      rights: 'Gopeng Glamping Park. All Rights Reserved.',
      official: 'Official Website'
    },
    chat: {
      welcome: "Hi there! I'm Ranger G ⛺. Welcome to the official Gopeng Glamping Park site. How can I help you today?",
      placeholder: "Ask about rafting packages...",
      button: "Ask Ranger G"
    }
  },
  ms: {
    nav: {
      home: 'UTAMA',
      stay: 'PENGINAPAN',
      rates: 'HARGA',
      team: 'BINA SEMANGAT',
      play: 'AKTIVITI',
      gallery: 'GALERI',
      contact: 'HUBUNGI',
      book: 'TEMPAH'
    },
    hero: {
      welcome: 'Selamat Datang ke Gopeng Glamping Park',
      gateway: 'GERBANG',
      nature: 'ALAM SEMULA JADI',
      subtitle: 'Nikmati keindahan abadi alam, budaya, dan sejarah. Pengalaman glamping ulung di tengah-tengah Gopeng.',
      tents: 'Khemah Kami',
      video: 'Tonton Video'
    },
    booking: {
      title: 'Mulakan Pengembaraan',
      guarantee: 'Jaminan Harga Terbaik',
      checkIn: 'Tarikh Masuk',
      checkOut: 'Daftar Keluar',
      guests: 'Tetamu',
      checkRates: 'Semak Harga',
      camper: 'Orang',
      campers: 'Orang'
    },
    features: {
      introTitle: "Destinasi Glamping Ulung Malaysia",
      awardTitle: "ANUGERAH KECEMERLANGAN",
      introText: "Gopeng Glamping Park berbangga menjadi Tapak Glamping pertama di Malaysia dengan Persijilan ISO 21101. Kami menggabungkan keindahan alam dengan piawaian keselamatan bertaraf dunia.",
      awards: {
        safety: 'Sistem Pengurusan Keselamatan Pelancongan Kembara',
        quality: 'Sistem Pengurusan Kualiti (QMS)',
        halal: 'Sijil Pengesahan Halal',
        tourism: 'Anugerah Pelancongan Perak (Kembara Luar)'
      },
      accomTitle: 'PENGINAPAN KAMI',
      accomSub: 'Keselesaan mewah dalam suasana rimba.',
      discover: 'Lihat Harga Hari Biasa & Hujung Minggu',
      amenities: 'Kemudahan',
      tents: {
        double: {
          title: 'Khemah Berdua',
          desc: 'Ruang selesa untuk pasangan. Nikmati privasi dengan kemudahan premium, direka khas untuk percutian romantik.',
          price: 'Pasangan'
        },
        quad: {
          title: 'Khemah Berempat',
          desc: 'Keseimbangan ruang untuk keluarga kecil. Terletak berhampiran sungai dengan suasana yang menenangkan.',
          price: 'Keluarga'
        },
        deluxe: {
          title: 'Khemah Deluxe',
          desc: 'Pilihan paling luas, sesuai untuk kumpulan besar dan bina semangat. Suasana santai tanpa mengorbankan kemewahan.',
          price: 'Kumpulan'
        }
      }
    },
    rates: {
      header: 'Harga Telus & Jelas',
      title: 'PILIH PENGALAMAN ANDA',
      subtitle: 'Kami tawarkan dua cara menikmati Gopeng Glamping Park. Pilih Pakej Bilik (Hari Biasa) atau Pakej Penuh (Hujung Minggu).',
      weekdayBtn: 'Hari Biasa (Ahad-Khamis)',
      weekendBtn: 'Hujung Minggu (Jumaat-Ahad)',
      weekdayLabel: 'Harga Ikut Bilik',
      weekdayDesc: 'Termasuk Penginapan & Sarapan Sahaja.',
      weekendLabel: 'Harga Ikut Orang • Pakej Penuh',
      weekendDesc: 'Termasuk Penginapan + 4 Kali Makan (Bufet).',
      perNight: '/ malam seunit',
      perAdult: 'seorang dewasa',
      weekendRates: 'HARGA HUJUNG MINGGU',
      fullBoard: 'Pakej Penuh • Per Dewasa',
      friSun: 'Jumaat & Ahad',
      saturday: 'Sabtu',
      peak: 'PUNCAK',
      surchargeTitle: 'Caj Tambahan Khemah Berdua',
      whatsIncluded: "APA YANG TERMASUK?",
      viewMenu: 'Menu Pakej Penuh',
      tapToView: 'Ketik untuk lihat menu',
      occupancy: {
        double: 'Min. 2 Dewasa / Khemah',
        quad: 'Min. 3 Dewasa / Khemah',
        deluxe: 'Min. 6 Dewasa / Khemah'
      },
      noSurcharge: 'TIADA CAJ TAMBAHAN musim puncak/cuti sekolah untuk Pakej Hujung Minggu!',
      policies: {
        title: 'Polisi Penting Taman',
        cohab: 'Polisi Mahram / Kesopanan',
        rules: 'Peraturan Glamping',
        notes: 'Nota Penting',
        surchargeHoliday: 'Caj RM58/malam semasa cuti sekolah/umum.',
        surchargePax: 'Caj RM50/malam untuk pax tambahan (Termasuk sarapan, tiada katil tambahan).',
        sst: 'Tertakluk kepada SST 8%.',
        cpt: 'Cukai Tempatan (CPT) RM3/bilik/malam.',
        facilities: 'Akses percuma ke semua fasiliti taman.',
        deposit: 'Deposit keselamatan RM50/bilik (dikembalikan).',
        tourismTax: 'Cukai Pelancongan dikenakan untuk bukan warganegara.'
      },
      cta: 'Tempah Sekarang',
      terms: 'Tertakluk Terma & Syarat. Harga tertakluk kepada SST 8%.'
    },
    activities: {
      header: 'Debaran Adrenalin',
      title: 'Log Pengembaraan',
      scroll: 'Tatal untuk Lihat',
      readMore: 'Baca Lagi',
      showLess: 'Tutup',
      watch: 'TONTON',
      endTitle: 'Tamat Senarai',
      endDesc: "Anda telah melihat semua aktiviti kami.",
      backStart: 'Kembali ke Mula',
      brochureTitle: 'Brosur Aktiviti',
      brochureDesc: 'Muat turun katalog aktiviti lengkap kami',
      viewBrochure: 'Lihat Brosur',
      perPerson: 'Seorang',
      perBoat: 'Sebot',
      perUnit: 'Seunit',
      items: {
        rafting: { title: 'Rakit Arus Deras (WWR)', desc: 'Pengalaman sebenar Gopeng! Harungi 7km Sungai Kampar melalui 9 jeram utama. Panduan sungai (River Guide) profesional kami memastikan keselamatan anda.' },
        funtrip: { title: 'Rakit Santai (Funtrip)', desc: 'Pengalaman sungai yang lebih tenang, sesuai untuk keluarga dengan anak kecil atau warga emas. Nikmati keindahan hutan hujan.' },
        abseil: { title: 'Abseiling Air Terjun', desc: 'Cabar gayat anda dengan menuruni muka menegak Air Terjun Ulu Geruntum. Rasai kesejukan air terjun.' },
        atv: { title: 'Funride ATV', desc: 'Terokai rupa bumi Gopeng dengan ATV kami. Pandu melalui ladang kelapa sawit dan laluan hutan.' },
        hiking: { title: 'Mendaki Senja (Sunset)', desc: 'Daki Bukit Batu Putih untuk pemandangan panoramik. Ganjaran terbaik adalah melihat matahari terbenam di ufuk.' },
        cave: { title: 'Penerokaan Gua', desc: 'Terokai kegelapan Gua Tempurung atau Gua Kandu. Lihat keunikan stalaktit dan stalagmit gergasi.' },
        paintball: { title: 'Perang Paintball', desc: 'Sedia berjuang! Pilih antara "Wargame" taktikal di arena hutan kami atau uji ketepatan dengan Menembak Sasaran.' },
        buggy: { title: 'Pengembaraan Buggy (F1)', desc: 'Rasai pengalaman pelumba rali di litar tanah kami! Fokus pada kelajuan, pengendalian, dan kawalan drift.' }
      }
    },
    team: {
      header: 'Acara Korporat & Kumpulan',
      title: 'PAKEJ BINA SEMANGAT',
      subtitle: 'Eratkan hubungan, bina kepimpinan, dan cipta kenangan di tengah alam. Kami menawarkan program untuk syarikat, sekolah, dan keluarga besar.',
      download: 'Muat Turun Brosur',
      comingSoon: 'Akan Datang',
      events: 'Momen Acara',
      plan: 'Merancang Acara Besar?',
      planDesc: 'Pasukan Jualan Korporat kami sedia membantu untuk jadual perjalanan, makanan, dan permintaan khas.',
      contactCorp: 'Hubungi Jualan Korporat',
      packages: {
        day: { title: 'Pakej Balik Hari', desc: 'Sesuai untuk percutian singkat dan aktiviti bina pasukan.' },
        d2n1: { title: '2 Hari 1 Malam', desc: 'Pengalaman bermalam yang imersif dengan glamping & makanan.' },
        d3n2: { title: '3 Hari 2 Malam', desc: 'Pengalaman pengembaraan lengkap untuk impak maksimum.' },
        family: { title: 'Hari Keluarga', desc: 'Aktiviti menyeronokkan sesuai untuk semua peringkat umur.' },
        hrdc: { title: 'HRDC Boleh Tuntut', desc: 'Program latihan bertauliah kerajaan. Tuntut kos latihan anda melalui HRDC.' }
      }
    },
    contact: {
      header: 'Tempah Tempat Anda',
      title: 'RANCANG PERCUTIAN',
      subtitle: 'Lihat kekosongan di bawah. Untuk kumpulan besar, sila gunakan borang pertanyaan.',
      general: 'PERTANYAAN UMUM',
      generalDesc: 'Hantar mesej dan pasukan kami akan membalas dengan segera.',
      form: { name: 'Nama', phone: 'Telefon', email: 'Emel', message: 'Mesej', send: 'Hantar Mesej' },
      touch: 'HUBUNGI KAMI',
      location: 'Lokasi Kami',
      sales: 'Pejabat Jualan',
      corporate: 'Jualan Korporat (Kumpulan)',
      hr: 'Sumber Manusia',
      warning: 'Amaran: Sila pastikan anda menempah melalui laman web rasmi ini untuk mengelakkan penipuan (scammer).'
    },
    footer: {
      desc: 'Gerbang anda ke alam semula jadi. Alami gabungan pengembaraan dan ketenangan di Gopeng, Perak.',
      explore: 'Jelajah',
      info: 'Info',
      office: 'Pejabat Jualan',
      rights: 'Gopeng Glamping Park. Hak Cipta Terpelihara.',
      official: 'Laman Web Rasmi'
    },
    chat: {
      welcome: "Hai! Saya Ranger G ⛺. Selamat datang ke laman rasmi Gopeng Glamping Park. Boleh saya bantu anda?",
      placeholder: "Tanya pasal pakej rafting...",
      button: "Tanya Ranger G"
    }
  },
  zh: {
    nav: {
      home: '主页',
      stay: '住宿',
      rates: '价格表',
      team: '团队建设',
      play: '精彩活动',
      gallery: '画廊',
      contact: '联系我们',
      book: '立即预订'
    },
    hero: {
      welcome: '欢迎来到务边豪华露营公园',
      gateway: '通往',
      nature: '大自然之门',
      subtitle: '体验大自然、文化和历史的永恒之美。务边 (Gopeng) 中心的终极豪华露营体验。',
      tents: '我们的帐篷',
      video: '观看视频'
    },
    booking: {
      title: '开启您的探险之旅',
      guarantee: '最优价格保证',
      checkIn: '入住日期',
      checkOut: '退房日期',
      guests: '人数',
      checkRates: '查询价格',
      camper: '人',
      campers: '人'
    },
    features: {
      introTitle: "马来西亚首选豪华露营地",
      awardTitle: "卓越奖项肯定",
      introText: "Gopeng Glamping Park 很荣幸成为马来西亚首个获得 ISO 21101 认证的豪华露营地。我们将大自然的粗犷美与世界级的安全标准相结合。",
      awards: {
        safety: '冒险旅游安全管理体系',
        quality: '质量管理体系 (QMS)',
        halal: '清真认证证书 (Halal)',
        tourism: '霹雳州旅游奖——户外探险奖'
      },
      accomTitle: '我们的住宿',
      accomSub: '荒野中的奢华舒适体验。',
      discover: '查看平日与周末价格',
      amenities: '设施',
      tents: {
        double: {
          title: '双人帐篷',
          desc: '情侣的温馨避风港。享受隐私和舒适的高级设施，专为浪漫的大自然逃逸而设计。',
          price: '情侣'
        },
        quad: {
          title: '四人帐篷',
          desc: '小家庭或好友团体的完美空间。帐篷靠近河流，环境宁静舒适。',
          price: '家庭'
        },
        deluxe: {
          title: '豪华帐篷',
          desc: '我们最宽敞的选择，非常适合大型聚会和团队建设。在不牺牲奢华的前提下享受热闹氛围。',
          price: '团体'
        }
      }
    },
    rates: {
      header: '价格公开透明',
      title: '选择您的体验方式',
      subtitle: '我们提供两种体验方式：选择灵活的“平日房间配套”或全包式的“周末全食宿体验”。',
      weekdayBtn: '平日 (周日至周四)',
      weekendBtn: '周末 (周五至周日)',
      weekdayLabel: '按房间计费',
      weekdayDesc: '仅包含住宿和自助早餐。',
      weekendLabel: '按人头计费 • 全包式',
      weekendDesc: '包含住宿 + 4顿自助餐。',
      perNight: '/ 晚 (每帐篷)',
      perAdult: '每位成人',
      weekendRates: '周末价格',
      fullBoard: '全食宿 (Full Board) • 每位成人',
      friSun: '周五 & 周日',
      saturday: '周六',
      peak: '旺季',
      surchargeTitle: '双人帐篷附加费',
      whatsIncluded: "配套包含什么？",
      viewMenu: '全食宿菜单',
      tapToView: '点击查看详细菜单',
      occupancy: {
        double: '最少 2 成人 / 帐篷',
        quad: '最少 3 成人 / 帐篷',
        deluxe: '最少 6 成人 / 帐篷'
      },
      noSurcharge: '周末配套在旺季/学校假期无附加费！',
      policies: {
        title: '重要园区政策',
        cohab: '男女混住政策 (非亲属限制)',
        rules: '露营规则',
        notes: '重要提示',
        surchargeHoliday: '学校/公共假期附加费 RM58/晚。',
        surchargePax: '加人附加费 RM50/晚 (含早餐，无加床)。',
        sst: '需加收 8% SST。',
        cpt: '地方税 (CPT) RM3/房/晚。',
        facilities: '免费使用所有园区设施。',
        deposit: '需支付 RM50/房 安全押金 (可退还)。',
        tourismTax: '非马来西亚公民需缴纳旅游税 (Tourism Tax)。'
      },
      cta: '立即预订',
      terms: '须符合条款与条件。所有价格需加收 8% SST。'
    },
    activities: {
      header: '肾上腺素飙升',
      title: '探险日志',
      scroll: '滑动探索',
      readMore: '阅读更多',
      showLess: '收起',
      watch: '观看视频',
      endTitle: '列表结束',
      endDesc: "您已浏览所有活动。",
      backStart: '回到开始',
      brochureTitle: '探险手册',
      brochureDesc: '下载完整的活动目录',
      viewBrochure: '查看手册',
      perPerson: '每人',
      perBoat: '每船',
      perUnit: '每台',
      items: {
        rafting: { title: '激流泛舟 (White Water Rafting)', desc: '终极务边体验！穿越金宝河 7 公里，经过 9 个主要急流。我们的专业向导将确保您的旅程既安全又刺激。' },
        funtrip: { title: '趣味泛舟 (Funtrip)', desc: '适合有小孩或长辈的轻松河流体验。享受热带雨林的宁静美景。' },
        abseil: { title: '瀑布速降 (Abseiling)', desc: '从 Ulu Geruntum 瀑布垂直面下降，挑战您的胆量。感受清凉溪水的冲击。' },
        atv: { title: '越野车体验 (ATV)', desc: '驾驶 ATV 探索务边的崎岖地形。穿越油棕园和丛林小径。' },
        hiking: { title: '日落徒步 (Sunset Hiking)', desc: '徒步登上 Bukit Batu Putih 欣赏全景。最好的回报是观看金色的太阳沉入地平线。' },
        cave: { title: '洞穴探险', desc: '深入 Gua Tempurung 或 Gua Kandu 的黑暗深处。惊叹于大自然鬼斧神工的钟乳石和石笋。' },
        paintball: { title: '彩弹射击', desc: '整装待发！在我们的丛林竞技场体验战术对战，或测试您的射击精准度。' },
        buggy: { title: '越野卡丁车 (Buggy)', desc: '在我们的泥地赛道上释放您的赛车手潜能！专注于速度、操控和漂移带来的快感。' }
      }
    },
    team: {
      header: '企业与团体活动',
      title: '团队建设配套',
      subtitle: '在大自然中心加强联系，建立领导力，创造难忘回忆。我们为公司、学校和大家庭提供定制方案。',
      download: '下载手册',
      comingSoon: '即将推出',
      events: '精彩瞬间',
      plan: '策划大型活动？',
      planDesc: '我们的企业销售团队随时准备协助您安排行程、餐饮和特殊要求。',
      contactCorp: '联系企业销售',
      packages: {
        day: { title: '一日游配套', desc: '非常适合短途度假和团队凝聚力活动。' },
        d2n1: { title: '2天1夜', desc: '包含豪华露营和餐饮的沉浸式过夜体验。' },
        d3n2: { title: '3天2夜', desc: '为了最大影响力的完整探险体验。' },
        family: { title: '家庭日', desc: '适合所有年龄段和家庭成员的趣味活动。' },
        hrdc: { title: 'HRDC 可申请', desc: '政府认证培训计划，可通过 HRDC 报销培训费用。' }
      }
    },
    contact: {
      header: '预订您的位置',
      title: '计划您的假期',
      subtitle: '查看下方的实时空房情况。对于大型团体或特殊要求，请使用咨询表。',
      general: '一般咨询',
      generalDesc: '给我们发消息，我们的团队将尽快回复您。',
      form: { name: '姓名', phone: '电话', email: '电邮', message: '信息', send: '发送信息' },
      touch: '联系我们',
      location: '我们的位置',
      sales: '销售办公室',
      corporate: '企业销售 (团体)',
      hr: '人力资源',
      warning: '警告：请确保通过此官方网站预订以避免诈骗风险。'
    },
    footer: {
      desc: '您通往大自然的门户。在霹雳州务边体验探险与宁静的完美融合。',
      explore: '探索',
      info: '信息',
      office: '销售办公室',
      rights: 'Gopeng Glamping Park. 版权所有.',
      official: '官方网站'
    },
    chat: {
      welcome: "嗨！我是 Ranger G ⛺。欢迎来到务边豪华露营公园官方网站。有什么可以帮您的吗？",
      placeholder: "询问关于泛舟配套...",
      button: "询问 Ranger G"
    }
  }
};