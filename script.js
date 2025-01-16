// Novel database
const novelDatabase = {
    romance: [
        {
            title: "The Love Letter",
            author: "Sarah Miller",
            description: "A heartwarming romance set in Paris",
            readers: 150000
        },
        {
            title: "The Love Hypothesis",
            author: "Ali Hazelwood",
            description: "Kisah seorang mahasiswa PhD yang terlibat dalam hubungan pura-pura dengan profesor yang terkenal sulit, mengeksplorasi dunia akademis dan romansa",
            readers:  2000000
        },
        {
            title: "The Love Letter",
            author: "Sarah Miller",
            description: "A heartwarming romance set in Paris",
            readers: 150000
        },
        {
            title: "Red, White & Royal Blue",
            author: "Casey McQuiston",
            description: "Romansa antara putra pertama Presiden AS dan Pangeran Inggris, mengeksplorasi politik, keluarga, dan cinta.",
            readers: 3000000
        },
        {
            title: "The Seven Husbands of Evelyn Hugo",
            author: "Taylor Jenkins Reid",
            description: " Seorang bintang film Hollywood legendaris menceritakan kisah hidupnya yang penuh romansa dan rahasia kepada seorang jurnalis muda.",
            readers: 400000
        },
        {
            title: "It Ends with Us",
            author: "Colleen Hoover",
            description: "Kisah Lily yang harus memilih antara cinta masa lalunya dan hubungan barunya, mengeksplorasi tema-tema kompleks tentang hubungan dan kekerasan domestik",
            readers: 8000000
        },
        {
            title: "Hujan",
            author: "Tere Liye",
            description: "Kisah cinta yang tumbuh di tengah kehancuran dunia akibat bencana besar",
            readers: 2414
        },
        {
            title: "The Spanish Love Deception",
            author: "Elena Armas",
            description: "Catalina membutuhkan pasangan palsu untuk pernikahan kakaknya di Spanyol, dan saingannya di kantor menawarkan diri untuk membantu",
            readers: 5000000
        },
        {
            title: "People We Meet on Vacation",
            author: "Emily Henry",
            description: "Poppy dan Alex, sahabat yang berlawanan kepribadian, melakukan perjalanan liburan bersama setiap tahun hingga sesuatu mengubah hubungan mereka.",
            readers: 2000000
        },
        {
            title: "The Kiss Quotient",
            author: "Helen Hoang",
            description: "Stella Lane, seorang ahli matematika dengan Asperger's, menyewa Michael Phan untuk mengajarinya tentang hubungan dan keintiman",
            readers: 1000000
        },
        {
            title: "The Light We Cannot See",
            author: " Anthony Doerr",
            description: "Kisah cinta yang terjadi selama Perang Dunia II antara gadis Prancis buta dan pemuda Jerman yang terpaksa bergabung dengan Nazi",
            readers: 5000000
        },
        {
            title: "Dating Dr. Dil",
            author: "Nisha Sharma",
            description: "Romansa modern yang terinspirasi dari kisah klasik India, tentang ahli cinta yang tidak percaya cinta dan wanita yang harus menemukan pasangan",
            readers: 500000
        },
        {
            title: "The Unhoneymooners",
            author: "Christina Lauren",
            description: "Ketika seluruh rombongan pernikahan terkena keracunan makanan, sang pengiring pengantin dan pendamping pria yang saling membenci harus menggantikan bulan madu",
            readers: 2000000
        },
        {
            title: "A Court of Thorns and Roses",
            author: "Sarah J. Maas",
            description: "Fantasi romansa tentang pemburu manusia yang dibawa ke dunia peri setelah membunuh serigala yang ternyata adalah peri yang dikutuk",
            readers: 7000000
        },
        {
            title: "The Flatshare",
            author: "Beth O'Leary",
            description: "Tiffy dan Leon berbagi apartemen dan tempat tidur - tapi tidak pernah bertemu karena perbedaan jadwal kerja mereka, berkomunikasi hanya melalui sticky notes.",
            readers: 2000000
        },
        {
            title: "From Blood and Ash",
            author: "Jennifer L. Armentrout",
            description: "Romansa fantasi tentang Maiden yang hidupnya didedikasikan untuk Dewa, tetapi menemukan dirinya tertarik pada penjaganya yang misterius",
            readers: 3000000
        },
        {
            title: "Every Summer After",
            author: "Carley Fortune",
            description: "Kisah cinta musim panas yang terjadi selama enam tahun dan kesempatan kedua setelah sepuluh tahun berpisah",
            readers: 700000
        },
        {
            title: "The Royal We",
            author: "Heather Cocks & Jessica Morgan",
            description: "Terinspirasi dari kisah William dan Kate, mengikuti romansa antara mahasiswa Amerika dan pewaris takhta Inggris.",
            readers: 2000000
        },
        {
            title: "The Friend Zone",
            author: "Abby Jimenez",
            description: " Kisah tentang seorang wanita yang harus menghadapi masalah kesuburan saat jatuh cinta dengan pria yang menginginkan keluarga besar",
            readers: 800000
        },
        {
            title: "The Ex Talk",
            author: "Rachel Lynn Solomon",
            description: "Dua rival di stasiun radio dipaksa berpura-pura menjadi mantan kekasih untuk sebuah acara baru.",
            readers: 200000
        },
        {
            title: "Get a Life, Chloe Brown",
            author: "Talia Hibbert",
            description: " Setelah nyaris mati, Chloe membuat daftar untuk mendapatkan kehidupan dan meminta bantuan superintendent apartemennya yang artistik.",
            readers: 1000000
        },
        {
            title: "The Soulmate Equation",
            author: "Christina Lauren",
            description: "Seorang statistikawan skeptis mencoba layanan kencan berbasis DNA dan cocok 98% dengan pendiri perusahaannya",
            readers: 900000
        },
        {
            title: "Good Omens",
            author: "Terry Pratchett & Neil Gaiman",
            description: "Sebuah komedi fantasy tentang malaikat dan iblis yang bekerja sama untuk mencegah Kiamat karena mereka sudah terlalu nyaman dengan kehidupan di Bumi",
            readers: 5000000
        },
        {
            title: "Dilan 1990",
            author: "Pidi Baiq",
            description: "Romansa remaja yang manis antara Dilan dan Milea di Bandung tahun 90-an.",
            readers: 1595
        },
        {
            title: "The Golden Compass",
            author: "Philip Pullman",
            description: "Mengikuti petualangan Lyra Belacqua di dunia paralel di mana jiwa manusia berwujud hewan pendamping.",
            readers: 15000000
        },
        {
            title: "Throne of Glass",
            author: "Sarah J. Maas",
            description: "Menceritakan kisah Celaena Sardothien, seorang pembunuh bayaran muda yang berkompetisi untuk menjadi champion sang raja, sambil mengungkap konspirasi dan kekuatan magis yang lebih besar.",
            readers: 12000000
        },
        {
            title: "The Night Circus",
            author: "Erin Morgenstern",
            description: "Kisah tentang sirkus misterius yang hanya buka saat malam dan dua pesulap muda yang terlibat dalam kompetisi magis yang rumit, sambil jatuh cinta satu sama lain",
            readers: 3000000
        },
        {
            title: "Uprooted",
            author: "Naomi Novik",
            description: "Novel tentang seorang gadis desa yang dipilih untuk melayani penyihir misterius yang dikenal sebagai Dragon, mengungkap kekuatan magisnya sendiri sambil melawan kejahatan supernatural.",
            readers: 2000000
        },
        {
            title: "The Priory of the Orange Tree",
            author: "Samantha Shannon",
            description: "Epik fantasy yang menggabungkan politik, naga, dan tiga wanita kuat yang nasibnya saling terkait dalam perjuangan melawan kebangkitan naga jahat kuno.",
            readers: 1000000
        },
        {
            title: "Six of Crows",
            author: "Leigh Bardugo",
            description: "Berlatar di dunia Grishaverse, mengikuti sekelompok kriminal berbakat yang mencoba melakukan perampokan paling berbahaya dalam sejarah. Menggabungkan fantasy dengan elemen heist.",
            readers: 1200
        },
        {
            title: "Perahu Kertas",
            author: "Dee Lestari",
            description: "Perjalanan cinta Kugy dan Keenan yang harus menghadapi mimpi dan realitas.",
            readers: 1200
        },
        {
            title: "Antologi Rasa",
            author: "Ika Natassa",
            description: "Cinta segitiga yang rumit antara tiga sahabat.",
            readers: 1895
        },
        {
            title: "Sabtu Bersama Bapak",
            author: "Adhitya Mulya",
            description: "Cinta keluarga dan pasangan yang dirangkai dengan pesan dari seorang ayah yang telah tiada.",
            readers: 1119
        },
        {
            title: "Tentang Kamu",
            author: "Tere Liye",
            description: "Kisah hidup penuh cinta dan perjuangan seorang wanita misterius.",
            readers: 1200
        },
        {
            title: "Sebuah Usaha Melupakan",
            author: "Boy Candra",
            description: "Kisah tentang perjuangan melupakan cinta yang telah hilang.",
            readers: 765
        },
        {
            title: "Takdir",
            author: "Asma Nadia",
            description: "Cinta yang terjalin di tengah pencarian jati diri.",
            readers: 420
        },
        {
            title: "Fallin in Love",
            author: "Dyan Nuranindya",
            description: "Perjalanan cinta remaja dengan nuansa musik.",
            readers: 656
        },
        {
            title: "Cinta Laki-Laki Biasa",
            author: "Asma Nadia",
            description: "Cerita cinta tentang kesederhanaan dan pengorbanan seorang pria biasa.",
            readers: 378
        },
        {
            title: "Mariposa",
            author: "Luluk HF",
            description: "Kisah cinta unik antara Acha, gadis ceria, dan Iqbal, cowok dingin yang sulit didekati.",
            readers: 665
        },
        {
            title: "Dandelion",
            author: "Dian Purnomo",
            description: "Cinta yang terjalin di tengah pencarian jati diri.",
            readers: 434
        },
        {
            title: "Pulang",
            author: "Asma Nadia",
            description: "Perjalanan cinta yang berawal dari mimpi dan kenangan masa kecil.",
            readers: 987
        },
        {
            title: "The Fault in Our Stars",
            author: "John Green",
            description: "Kisah cinta antara dua remaja yang berjuang melawan kanker, yang menemukan kebahagiaan meskipun takdir mereka penuh penderitaan.",
            readers: 183000
        },
        {
            title: "Outlander",
            author: "Diana Gabaldon",
            description: "Cinta antara Claire, seorang perawat yang terlempar ke masa lalu, dan Jamie, seorang prajurit Skotlandia dari abad ke-18.",
            readers: 55800
        },
        {
            title: "The Time Traveler's Wife",
            author: "Audrey Niffenegger",
            description: "Kisah cinta yang melibatkan Henry yang memiliki kemampuan untuk bepergian ke waktu yang berbeda, dan Clare, wanita yang mencintainya tanpa henti.",
            readers: 54400
        },
        {
            title: "Eleanor & Park",
            author: "Rainbow Rowell",
            description: "Cinta remaja yang tumbuh di tengah kesulitan hidup, dengan kisah yang penuh dengan emosi dan perjalanan batin.",
            readers: 79400
        },
        {
            title: "It Ends with Us",
            author: "Colleen Hoover",
            description: "Kisah cinta yang penuh pengorbanan, diwarnai dengan masalah kekerasan rumah tangga, yang menggambarkan bagaimana seorang wanita menghadapi dilema emosional.",
            readers: 286000
        },
        {
            title: "The Wedding Date",
            author: "Jasmine Guillory",
            description: "Dua orang asing yang bertemu di bandara dan memutuskan untuk berpura-pura menjadi pasangan dalam sebuah pernikahan, yang akhirnya berkembang menjadi hubungan nyata.",
            readers: 16100
        },
        {
            title: "The Sun Is Also a Star",
            author: "Nicola Yoon",
            description: "Kisah romansa dalam satu hari yang penuh dengan keputusan dan takdir, mengisahkan Natasha dan Daniel yang berjuang melawan kenyataan hidup mereka.",
            readers: 33200
        },
        {
            title: "You",
            author: "Caroline Kepnes",
            description: "Kisah gelap tentang obsesi cinta yang membentuk perilaku berbahaya dari seorang pria yang terobsesi pada wanita yang ia cintai.",
            readers: 250000
        },
        {
            title: "Someone Like You",
            author: "Sarah Dessen",
            description: "Kisah tentang persahabatan yang berkembang menjadi cinta, dengan latar belakang duka dan perjalanan emosional.",
            readers: 4302
        },
        {
            title: "The Kiss",
            author: "Robyn Carr",
            description: "Sebuah kisah cinta yang manis dan mengharukan tentang dua orang yang berjuang untuk menemukan cinta sejati mereka.",
            readers: 2302
        },
        {
            title: "Summer Dreams",
            author: "Emily Wilson",
            description: "A beach romance that will melt your heart",
            readers: 120000
        }
    ],
    fantasy: [
        {
            title: "Dragon's Crown",
            author: "Michael Stone",
            description: "An epic fantasy adventure",
            readers: 200000
        },
        {
            title: "Anak Rembulan",
            author: "Syaihan Syafiq",
            description: "Seorang anak yang lahir di bawah sinar bulan menemukan dirinya memiliki kekuatan magis",
            readers: 902
        },
        {
            title: "Kembara Rindu",
            author: "Tere Liye",
            description: "Perjalanan jiwa dalam dunia penuh teka-teki dan makhluk gaib.",
            readers: 422
        },
        {
            title: "The Black Prism",
            author: "Brent Weeks",
            description: "Mengikuti Gavin Guile, Prism yang berkuasa, dalam dunia di mana sihir didasarkan pada kemampuan untuk mengubah cahaya menjadi substansi fisik yang disebut luxin.",
            readers: 3000000
        },
        {
            title: "The Lies of Locke Lamora",
            author: "Scott Lynch",
            description: "Kisah tentang sekelompok penipu berbakat yang dikenal sebagai Gentleman Bastards di kota fantasi yang terinspirasi Venesia. Menggabungkan fantasy dengan cerita kriminal.",
            readers: 2000000
        },
        {
            title: "Red Rising",
            author: "Pierce Brown",
            description: "Menggabungkan elemen fantasy dan sci-fi, mengikuti Darrow dalam perjuangannya melawan masyarakat yang sangat terstratifikasi di Mars yang dikolonisasi.",
            readers: 3000000
        },
        {
            title: "The Raven Cycle",
            author: "Maggie Stiefvater",
            description: "Sekelompok remaja mencari raja Wales kuno yang konon bisa dikabulkan satu permintaan. Menggabungkan fantasy kontemporer dengan mistisisme Celtic.",
            readers: 2000000
        },
        {
            title: "Titisan",
            author: "Windry Ramadhina",
            description: "Kisah tentang manusia yang terpilih untuk mewarisi kekuatan dewa kuno.",
            readers: 300
        },
        {
            title: "Cerita dari Negeri Pelangi",
            author: "Seno Gumira Ajidarma",
            description: "Dunia di mana pelangi memiliki kekuatan untuk mengubah nasib manusia.",
            readers: 334
        },
        {
            title: "Laut Bercerita",
            author: "Leila S. Chudori",
            description: "Fantasi epik tentang misteri di kedalaman laut dan rahasia masa lalu.",
            readers: 1459
        },
        {
            title: "Telaga Air Mata",
            author: "Damien Dematra",
            description: "Kisah fantasi tentang telaga ajaib yang membawa perubahan besar pada hidup pengunjungnya.",
            readers: 544
        },
        {
            title: "Sang Penyihir dari Kaki Langit",
            author: "Amang Suramang",
            description: "Perjalanan seorang penyihir muda mencari arti keberadaan dirinya di dunia penuh intrik.",
            readers: 760
        },
        {
            title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            author: "C.S. Lewis",
            description: "Empat saudara yang menemukan dunia Narnia melalui sebuah lemari. Dalam dunia ini, mereka terlibat dalam pertempuran antara baik dan jahat.",
            readers: 400000
        },
        {
            title: "Eragon",
            author: "Christopher Paolini",
            description: "Cerita tentang seorang pemuda bernama Eragon yang menemukan telur naga dan terlibat dalam perjuangan melawan tirani di dunia Alagaësia.",
            readers: 250000
        },
        {
            title: "The Bone Season",
            author: "Samantha Shannon",
            description: "Dalam dunia di mana kemampuan psikis dianggap ilegal, Paige Mahoney, seorang clairvoyant, terperangkap dalam pertempuran antara manusia dan makhluk dari dimensi lain.",
            readers: 100000
        },
        {
            title: "The Furies of Calderon",
            author: "Jim Butcher",
            description: "Novel pertama dalam seri The Codex Alera yang mengisahkan Alera, seorang pemuda yang terjebak dalam konflik besar dan berjuang untuk menyelamatkan tanah kelahirannya dari kehancuran.",
            readers: 90000
        },
        {
            title: "The Lies of Locke Lamora",
            author: "Scott Lynch",
            description: "Mengisahkan kehidupan Locke Lamora, seorang pencuri ulung di kota fantasi Camorr, yang terlibat dalam intrik dan perampokan yang berbahaya.",
            readers: 200000
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            description: "Petualangan Bilbo Baggins dalam membantu para kurcaci merebut kembali gunung mereka dari naga Smaug.",
            readers: 4.5
        },
        {
            title: "A Game of Thrones",
            author: "George R.R. Martin",
            description: "Intrik politik, perang, dan sihir di dunia Westeros, tempat tujuh kerajaan saling memperebutkan takhta.",
            readers: 67000
        },
        {
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
            description: "Perjalanan Kvothe, seorang penyair, penyihir, dan pahlawan, menceritakan kisah hidupnya yang penuh misteri.",
            readers: 57000
        },
        {
            title: "American Gods",
            author: "Neil Gaiman",
            description: "Shadow Moon, seorang mantan napi, terjebak dalam perang antara dewa-dewa lama dan dewa-dewa modern di Amerika.",
            readers: 48900
        },
        {
            title: "The Night Circus",
            author: "Erin Morgenstern",
            description: "Dua penyihir muda terlibat dalam kompetisi mematikan di sirkus ajaib yang hanya muncul pada malam hari.",
            readers: 51700
        },
        {
            title: "Circe",
            author: "Madeline Miller",
            description: "Kisah reimajinasi mitologi Yunani tentang Circe, seorang penyihir yang diasingkan, dan perjalanannya menemukan kekuatannya.",
            readers: 115000
        },
        {
            title: "The Poppy War",
            author: "R.F. Kuang",
            description: "Terinspirasi oleh sejarah Tiongkok, novel ini mengikuti Rin, seorang gadis muda yang berjuang untuk mendapatkan pendidikan dan terlibat dalam perang yang brutal.",
            readers: 220000
        },
        {
            title: "Uprooted",
            author: "Naomi Novik",
            description: "Seorang gadis muda terpilih untuk melayani penyihir misterius dan terlibat dalam petualangan untuk melawan kekuatan jahat yang mengancam desa mereka.",
            readers: 220000
        },
        {
            title: "The Starless Sea",
            author: "Erin Morgenstern",
            description: "Dalam dunia di bawah tanah yang penuh dengan kisah-kisah, seorang pemuda menemukan sebuah buku yang membawanya ke dalam petualangan fantastis.",
            readers: 180000
        },
        {
            title: "The Priory of the Orange Tree",
            author: "Windry Ramadhina",
            description: "Kisah tentang manusia yang terpilih untuk mewarisi kekuatan dewa kuno.",
            readers: 45500
        },
        {
            title: "Throne of Glass",
            author: "Sarah J. Maas",
            description: "Seorang pembunuh muda bernama Celaena Sardothien dipilih untuk bersaing menjadi pembunuh kerajaan.",
            readers: 129000
        },
        {
            title: "Daughter of Smoke and Bone",
            author: "Laini Taylor",
            description: "Karou, seorang gadis misterius, menemukan kebenaran tentang asal-usulnya dan perang antara dua dunia.",
            readers: 34000
        },
        {
            title: "The Dragonbone Chair",
            author: "Tad Williams",
            description: "Seorang pemuda biasa terjebak dalam konflik kerajaan penuh naga dan sihir.",
            readers: 3116
        },
        {
            title: "Serpent & Dove",
            author: "Shelby Mahurin",
            description: "Kisah cinta terlarang antara seorang penyihir dan pemburu penyihir di dunia yang berbahaya.",
            readers: 66500
        },
        {
            title: "Caraval",
            author: "Stephanie Garber",
            description: "Scarlett Dragna menghadiri permainan penuh sihir di mana batas antara kenyataan dan ilusi memudar.",
            readers: 118500
        },
        {
            title: "The Magic Portal",
            author: "David Wright",
            description: "A journey through magical realms",
            readers: 180000
        }
    ],
    horror: [
        {
            title: "Dark House",
            author: "John Smith",
            description: "A terrifying haunted house story",
            readers: 90000
        },
        {
            title: "Orang-Orang Proyek",
            author: "Ahmad Tohari",
            description: "Sebuah novel yang menyelidiki kehidupan korupsi di balik proyek pembangunan, di mana misteri dan intrik sosial bercampur.",
            readers: 500
        },
        {
            title: "Rumah Lebah",
            author: "Ruwi Meita",
            description: "Seorang gadis kecil hilang secara misterius, dan penyelidikan mengungkap rahasia kelam yang tersembunyi di desa terpencil.",
            readers: 543
        },
        {
            title: "Rahasia Hujan",
            author: "Sitta Karina",
            description: "Seorang remaja menemukan rahasia kelam tentang keluarganya melalui petunjuk misterius yang terkait dengan hujan.",
            readers: 15000
        },
        {
            title: "Malam Kelabu di Esplanade",
            author: "Liane Moriarty",
            description: "Seorang wanita terjebak dalam misteri pembunuhan di sebuah tempat eksotis dengan latar romansa.",
            readers: 734
        },
        {
            title: "Pembunuhan di Jalan Cokelat",
            author: "S. Mara Gd",
            description: "Kisah pembunuhan dan intrik detektif lokal yang berusaha memecahkan teka-teki kompleks di Jakarta.",
            readers: 4000
        },
        {
            title: "Sepasang Mata di Dinding",
            author: "Maria A. Sardjono",
            description: "Sebuah cerita misteri rumah berhantu yang melibatkan rahasia masa lalu keluarga pemilik rumah.",
            readers: 623
        },
        {
            title: "Asmaraloka",
            author: "Rio Johan",
            description: "Cerita tentang persahabatan tiga perempuan dan rahasia di balik pembunuhan yang mengejutkan.",
            readers: 539
        },
        {
            title: "Misteri Pantai Kasih",
            author: "Mira W.",
            description: "Sebuah novel misteri berlatar tempat eksotis dengan legenda yang menakutkan dan rahasia mematikan.",
            readers: 856
        },
        {
            title: "Cantik Itu Luka ",
            author: "Eka Kurniawan",
            description: "Sebuah novel misteri dan horor tentang sejarah keluarga yang penuh dengan kutukan dan pembalasan dendam.",
            readers: 864
        },
        {
            title: "Roh",
            author: "Eve Shi",
            description: "Sebuah cerita menegangkan tentang hantu dan misteri yang menyelimuti keluarga dalam sebuah rumah tua.",
            readers: 354
        },
        {
            title: "Gone Girl",
            author: "Gillian Flynn",
            description: "Kisah penuh twist tentang hilangnya Amy Dunne, dengan suaminya, Nick, menjadi tersangka utama dalam permainan psikologis yang kelam.",
            readers: 1.5 
        },
        {
            title: "In the Woods",
            author: "Tana French",
            description: "Seorang detektif menyelidiki pembunuhan seorang gadis muda, yang memiliki hubungan dengan trauma masa kecilnya.",
            readers: 200000
        },
        {
            title: "The Last House on Needless Street",
            author: "Catriona Ward",
            description: "Kisah misteri psikologis yang menantang persepsi pembaca tentang apa yang nyata dan tidak nyata.",
            readers: 100000
        },
        {
            title: "Pretty Girls",
            author: "Karin Slaughter",
            description: "Dua saudara perempuan mengungkap rahasia mengerikan tentang keluarga mereka setelah pembunuhan seorang wanita muda.",
            readers: 150000
        },
        {
            title: "Her Every Fear",
            author: "Peter Swanson",
            description: "Seorang wanita bertukar apartemen dengan sepupunya, hanya untuk menemukan dirinya terjebak dalam misteri pembunuhan.",
            readers: 4024
        },
        {
            title: "The Woods",
            author: "Harlan Coben",
            description: "Dua puluh tahun setelah hilangnya adik perempuannya, seorang pria menemukan petunjuk baru dalam kasus yang tidak terpecahkan.",
            readers: 6100
        },
        {
            title: "he Night Watchman",
            author: " Louise Erdrich",
            description: "Sebuah cerita misteri berlatar sejarah yang terinspirasi dari kehidupan nyata, tentang perjuangan suku asli Amerika.",
            readers: 8780
        },
        {
            title: "The Midnight Call",
            author: "Lisa Black",
            description: "Horror that will keep you awake",
            readers: 85000
        }
    ],
    mystery: [
        {
            title: "The Silent Detective",
            author: "Robert Brown",
            description: "A thrilling mystery in London",
            readers: 130000
        },
        {
            title: "Danur",
            author: "Risa Saraswati",
            description: "Kisah nyata pengalaman Risa Saraswati yang memiliki kemampuan melihat makhluk tak kasat mata dan persahabatannya dengan lima hantu anak kecil.",
            readers: 306
        },
        {
            title: "Ruang",
            author: "Ruwi Meita",
            description: "Seorang arsitek yang tinggal di sebuah rumah tua mulai mengalami gangguan supranatural yang berhubungan dengan desain rumah itu.",
            readers: 345
        },
        {
            title: "Pintu Merah",
            author: "Intan Andaru",
            description: "Sebuah rumah kos dengan pintu merah yang tidak boleh dibuka, namun rasa penasaran membuat rahasia kelamnya terungkap.",
            readers: 357
        },
        {
            title: "Santet",
            author: "Hary Ramadhan",
            description: "Sebuah cerita tentang kutukan keluarga yang memakan korban bertahun-tahun dan hanya bisa dihentikan dengan tumbal manusia.",
            readers: 308
        },
        {
            title: "Tumbal",
            author: "Eka Dharma Putra",
            description: "Cerita tentang sebuah desa yang dikuasai oleh dukun santet, mengakibatkan serangkaian kejadian menyeramkan.",
            readers: 206
        },
        {
            title: "Mata Malam",
            author: "Eka Dharma Putra",
            description: "Seorang anak yang memiliki kemampuan khusus harus menghadapi makhluk gaib di hutan belantara.",
            readers: 110
        },
        {
            title: "Surat dari Kematian ",
            author: "Adham T. Fusama",
            description: "Cerita tentang mahasiswa yang menerima surat misterius dari dunia gaib, yang membawa petaka di kampusnya.",
            readers: 116
        },
        {
            title: "Jangan Pergi ke Gunung Lawu",
            author: "Ardian Kresna",
            description: "Novel yang mengungkap rahasia gelap tentang makhluk astral di Gunung Lawu.",
            readers: 145
        },
        {
            title: "Malam Satu Suro",
            author: "Putu Wijaya",
            description: "Sebuah cerita tentang tradisi dan malam yang penuh misteri di mana dunia manusia dan gaib bertemu.",
            readers: 336
        },
        {
            title: "Kutukan Cermin Tua",
            author: "Abdullah Harahap",
            description: "emakan korban bertahun-tahun dan hanya bisa dihentikan dengan tumbal manusia.",
            readers: 298
        },
        {
            title: "Rumah Belanda",
            author: "Risa Saraswati",
            description: "Sebuah rumah tua peninggalan Belanda menjadi saksi bisu tragedi masa lalu yang penuh misteri",
            readers: 217
        },
        {
            title: "Kereta Tengah Malam",
            author: "Ferry Ardiansyah",
            description: "Sebuah kereta api berhantu yang muncul di tengah malam membawa penumpang ke dunia lain.",
            readers: 189
        },
        {
            title: "Jalan Tanpa Ujung",
            author: "Eka Dharma Putra",
            description: "Sebuah cerita tentang kutukan keluarga yang memakan korban bertahun-tahun dan hanya bisa dihentikan dengan tumbal manusia.",
            readers: 250
        },
        {
            title: "Suara dari Balik Dinding",
            author: "Devi Saraswati",
            description: "Sebuah dinding tua di sekolah yang menyimpan suara-suara misterius dari masa lalu.",
            readers: 215
        },
        {
            title: "IT",
            author: "Stephen King",
            description: "Sebuah dinding tua di sekolah yang menyimpan suara-suara misterius dari masa lalu.",
            readers: 206000
        },
        {
            title: "House of Leaves",
            author: "Mark Z. Danielewski",
            description: "Sebuah rumah dengan arsitektur yang terus berubah, lebih besar di dalam daripada di luar, dan menyimpan misteri menyeramkan.",
            readers: 19100
        },
        {
            title: "Mexican Gothic",
            author: "Silvia Moreno-Garcia",
            description: "Seorang wanita muda pergi ke rumah keluarga bangsawan di Meksiko untuk menyelidiki perilaku aneh sepupunya, hanya untuk menemukan kengerian yang terpendam di sana.",
            readers: 55600
        },
        {
            title: "Bird Box",
            author: "Josh Malerman",
            description: "Dunia yang diserang oleh makhluk misterius yang menyebabkan orang menjadi gila saat melihatnya. Cerita berfokus pada seorang wanita dan anak-anaknya yang mencoba bertahan hidup",
            readers: 20600
        },
        {
            title: "The Exorcist",
            author: "William Peter Blatty",
            description: "Kisah seorang gadis yang dirasuki oleh roh jahat dan perjuangan keluarganya dengan seorang pendeta untuk menyelamatkannya melalui eksorsisme.",
            readers: 42500
        },
        {
            title: "Hell House",
            author: "Richard Matheson",
            description: "Sebuah rumah yang dianggap paling berhantu di dunia menjadi tempat uji coba tim peneliti untuk membuktikan keberadaan supranatural.",
            readers: 4766
        },
        {
            title: "The Turn of the Screw",
            author: "Henry James",
            description: "Seorang pengasuh yang bekerja di rumah terpencil mulai melihat hantu dan menduga bahwa kedua anak asuhnya terlibat dengan entitas tersebut.",
            readers: 15000
        },
        {
            title: "The Phantom of the Opera",
            author: "Gaston Leroux",
            description: "Kisah horor romantis tentang makhluk misterius yang menghantui opera Paris dan terobsesi dengan seorang penyanyi muda.",
            readers: 12500
        },
        {
            title: "The Ruins",
            author: "Scott Smith",
            description: "Sekelompok teman liburan ke reruntuhan kuno di Meksiko, hanya untuk menemukan tanaman pemakan manusia yang mengerikan.",
            readers: 7095
        },
        {
            judul: "The Shadow Over Innsmouth",
            penulis: "H.P. Lovecraft",
            deskripsi: "Cerita tentang sebuah kota kecil yang penduduknya memiliki hubungan misterius dengan makhluk laut menyeramkan.",
            pembaca: 1842
        },  
        {
            title: "Missing Pieces",
            author: "Mary Johnson",
            description: "A puzzle of disappearances",
            readers: 110000
        }
    ],
    adventure: [
        {
            title: "Mountain Quest",
            author: "Tom Peak",
            description: "An adventure in the Himalayas",
            readers: 140000
        },
        {
            title: "Lost City",
            author: "James River",
            description: "Searching for ancient treasures",
            readers: 125000
        }
    ]
};

// Fungsi untuk registrasi
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = { username, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful!");
        window.location.href = "index.html"; // Arahkan ke halaman login
    });
}

// Fungsi untuk login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.username === username && user.password === password) {
            alert("Login successful!");
            window.location.href = "menuuu.html"; // Arahkan ke halaman utama setelah login
        } else {
            alert("Invalid username or password!");
        }
    });
}

// Logout handler
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });
}

// Display username
function displayUsername() {
    const userDisplay = document.getElementById('userDisplay');
    if (userDisplay) {
        const username = localStorage.getItem('username');
        userDisplay.textContent = `Welcome, ${username}`;
    }
}

// Show novels by genre
function showNovels(genre) {
    const container = document.getElementById('novelsContainer');
    container.innerHTML = '';
    
    novelDatabase[genre].forEach(novel => {
        const novelCard = createNovelCard(novel);
        container.appendChild(novelCard);
    });
}

// Create novel card
function createNovelCard(novel) {
    const card = document.createElement('div');
    card.className = 'novel-card';
    
    card.innerHTML = `
        <h3>${novel.title}</h3>
        <p><strong>Author:</strong> ${novel.author}</p>
        <p>${novel.description}</p>
        <div class="stats">
            <span>${novel.readers.toLocaleString()} readers</span>
            <button onclick="addToFavorites('${novel.title}')" class="btn-favorite">
                Add to Favorites
            </button>
        </div>
    `;
    
    return card;
}

// Search functionality
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const container = document.getElementById('novelsContainer');
        container.innerHTML = '';
        
        Object.values(novelDatabase).forEach(genreNovels => {
            genreNovels.forEach(novel => {
                if (
                    novel.title.toLowerCase().includes(searchTerm) ||
                    novel.author.toLowerCase().includes(searchTerm) ||
                    novel.description.toLowerCase().includes(searchTerm)
                ) {
                    container.appendChild(createNovelCard(novel));
                }
            });
        });
    });
}

// ... (bagian database novel tetap sama)

// Navigation Functions
function showHomePage() {
    document.getElementById('homeLink').classList.add('active');
    document.getElementById('favoritesLink').classList.remove('active');
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('genreSection').style.display = 'block';
    document.getElementById('sectionTitle').textContent = 'Recommended Novels';
    showNovels('romance'); // Show default genre
}

function showFavorites() {
    document.getElementById('homeLink').classList.remove('active');
    document.getElementById('favoritesLink').classList.add('active');
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('genreSection').style.display = 'none';
    document.getElementById('sectionTitle').textContent = 'Your Favorite Novels';
    displayFavorites();
}

function displayFavorites() {
    const container = document.getElementById('novelsContainer');
    container.innerHTML = '';
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.length === 0) {
        container.innerHTML = '<p class="no-favorites">You haven\'t added any favorites yet.</p>';
        return;
    }
    
    // Search through all novels to find favorites
    Object.values(novelDatabase).forEach(genreNovels => {
        genreNovels.forEach(novel => {
            if (favorites.includes(novel.title)) {
                container.appendChild(createNovelCard(novel, true));
            }
        });
    });
}

// Modified createNovelCard function
function createNovelCard(novel, isFavorite = false) {
    const card = document.createElement('div');
    card.className = 'novel-card';
    
    const buttonText = isFavorite ? 
        `<button onclick="removeFromFavorites('${novel.title}')" class="btn-favorite remove">
            Remove from Favorites
         </button>` :
        `<button onclick="addToFavorites('${novel.title}')" class="btn-favorite">
            Add to Favorites
         </button>`;
    
    card.innerHTML = `
        <h3>${novel.title}</h3>
        <p><strong>Author:</strong> ${novel.author}</p>
        <p>${novel.description}</p>
        <div class="stats">
            <span>${novel.readers.toLocaleString()} readers</span>
            ${buttonText}
        </div>
    `;
    
    return card;
}

// Add to favorites function
function addToFavorites(title) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(title)) {
        favorites.push(title);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${title} added to favorites!`);
    } else {
        alert('This novel is already in your favorites!');
    }
}

// Remove from favorites function
function removeFromFavorites(title) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(fav => fav !== title);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${title} removed from favorites!`);
    showFavorites(); // Refresh the favorites display
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
    displayUsername();
    showHomePage(); // Show home page by default
});

// ... (semua fungsi lain tetap sama)