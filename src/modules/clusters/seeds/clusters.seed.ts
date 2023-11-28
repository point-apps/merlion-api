export const clustersSeed = [
  {
    name: "servicing",
    alias: "interpersonal serving",
    description: "The activities of caring and serving.",
    descriptionId: "Aktivitas merawat dan melayani.",
    groups: [
      {
        name: "caretaking",
        typologies: [
          {
            name: "caring",
            description:
              "Nursing or social working to take care of the other people's physical, medical or general welfare.",
            descriptionId:
              "Kegiatan yang menunjukkan perhatian dan kepedulian terhadap orang lain baik itu dari sisi fisik, medis atau kesejahteraan umum, seperti tugas perawatan atau kerja sosial.",
            abbr: "CA",
          },
          {
            name: "counseling",
            description: "Helping to find solutions to personal problems or psychological problems of others.",
            descriptionId: "Membantu mencarikan solusi atas masalah pribadi atau masalah psikologis orang lain.",
            abbr: "CO",
          },
          {
            name: "spiritualizing",
            description:
              "Spiritual activities, such as prayer, dhikr, introspection, giving religious advice, give an example to others, delivered a lecture/sermon, and others.",
            descriptionId:
              "Aktivitas spiritual, seperti kontemplasi dan introspeksi terkait nilai-nilai kehidupan, memberi teladan kepada orang lain, dan lain-lain.",
            abbr: "SP",
          },
          {
            name: "therapy",
            description: "Curing and rehabilitating someone’s physical, mental, or behavior.",
            descriptionId: "Menyembuhkan dan merehabilitasi fisik, mental, atau perilaku seseorang.",
            abbr: "TH",
          },
          {
            name: "volunteering",
            description: "Doing social activities without expecting rewards or awards.",
            descriptionId: "Melakukan aktivitas sosial secara sukarela.",
            abbr: "VO",
          },
        ],
      },
      {
        name: "Serving",
        typologies: [
          {
            name: "assisting",
            description: "Helping someone to finish a task by positioning him/herself as subordinate.",
            descriptionId:
              "Membantu seseorang untuk menyelesaikan tugasnya, dengan menempatkan dirinya sebagai sub-ordinat atau bawahan.",
            abbr: "AS",
          },
          {
            name: "greeting",
            description: "Giving a polite greeting to others, known or not yet known.",
            descriptionId:
              "Memberikan sapaan secara santun kepada orang lain baik yang sudah maupun yang belum dikenalnya.",
            abbr: "GR",
          },
          {
            name: "informing",
            description: "Giving out information or knowledge to other people.",
            descriptionId: "Menyampaikan informasi, kabar, atau pengetahuan kepada orang lain.",
            abbr: "IN",
          },
          {
            name: "serving",
            description:
              "Serving others with sincerity, regarding it as a noble deed and bring benefits to themselves or others.",
            descriptionId: "Melayani orang lain dengan tulus dan profesional.",
            abbr: "SE",
          },
        ],
      },
    ],
    typologies: ["caretaking", "serving"],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "thinking",
    alias: "individual higher left brain",
    description: "The activities of analyzing and managing finances.",
    descriptionId: "Aktivitas menganalisis dan mengatur keuangan.",
    groups: [
      {
        name: "analysing",
        typologies: [
          {
            name: "analysing",
            description:
              "Finding the causes carefully to verify the background of the occurrence of an event or a possible occurrence of a future event.",
            descriptionId:
              "Aktivitas seperti mengurai, membedakan, memilah sesuatu secara metodologis untuk dikelompokkan kembali menurut kriteria tertentu, kemudian dicari kaitannya dan ditafsirkan maknanya.",
            abbr: "AN",
          },
          {
            name: "bookeeping",
            description:
              "Taking notes of incoming and outgoing funds of an individual or an organization, in a special form.",
            descriptionId:
              "Mencatat transaksi keuangan yang diterima dan dikeluarkan oleh individu atau organisasi, dalam sebuah catatan berstandar tertentu.",
            abbr: "BO",
          },
          {
            name: "programming",
            description: "Designing and formulating a program, interface, and software (computer related).",
            descriptionId:
              "Merancang dan membuat sebuah program, antar-muka, maupun piranti lunak perangkat berbasis komputer, termasuk diantaranya smartphone dan tablet.",
            abbr: "PR",
          },
        ],
      },
      {
        name: "treasuring",
        typologies: [
          {
            name: "budgeting",
            description: "Planning, organizing, storing, distributing funds or money.",
            descriptionId: "Merencanakan, mengatur dan mengalokasikan anggaran.",
            abbr: "BU",
          },
          {
            name: "cashiering",
            description:
              "Receiving, storing, paying money according to the systems and procedures, and keeping records of the transactions.",
            descriptionId:
              "Menerima, menyimpan, membayarkan uang sesuai sistem dan prosedur yang berlaku, serta menyimpan catatannya.",
            abbr: "CA",
          },
          {
            name: "costing",
            description:
              "Monitoring and checking expenditure based on what has been calculated before, for the implementation of a project.",
            descriptionId:
              "Memantau atau memeriksa pengeluaran dana yang telah diperhitungkan sebelumnya dalam rangka pelaksanaan suatu proyek.",
            abbr: "CO",
          },
          {
            name: "estimating",
            description:
              "Making the calculation of an estimated cost of the work, for the purpose of making a quotation.",
            descriptionId:
              "Membuat perhitungan perkiraan biaya dari suatu pekerjaan, untuk keperluan pembuatan penawaran harga.",
            abbr: "ES",
          },
        ],
      },
    ],
    typologies: ["analysing", "treasuring"],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "reasoning",
    alias: "individual lower left brain",
    description: "The activities of recovering, evaluating, and researching.",
    descriptionId: "Aktivitas memulihkan, mengevaluasi, dan meneliti.",
    groups: [
      {
        name: "restoring",
        typologies: [
          {
            name: "restoring",
            description: "Repairing and restoring something or someone to the original function.",
            descriptionId: "Memperbaiki sesuatu atau memulihkan seseorang agar kembali kepada kondisi semula.",
            abbr: "RE",
          },
          {
            name: "diagnosing",
            description: "Identifying the cause of a problem.",
            descriptionId: "Mencari dan menemukan akar penyebab dari suatu masalah.",
            abbr: "DI",
          },
          {
            name: "identifying",
            description: "Recognizing someone or something to ensure their.",
            descriptionId: "Mengenali sesuatu atau seseorang agar dapat memastikan kejelasan identitasnya.",
            abbr: "ID",
          },
        ],
      },
      {
        name: "evaluating",
        typologies: [
          {
            name: "evaluating",
            description: "Assessing something, to determine its price, quality, importance, or condition.",
            descriptionId:
              "Menimbang atau menilai sesuatu untuk menentukan harga, kualitas, kepentingan, atau kondisinya.",
            abbr: "EV",
          },
          {
            name: "auditing",
            description: "Doing careful examination and correction regarding financial report.",
            descriptionId:
              "Melakukan pemeriksaan dan memberikan ulasan terkait keuangan, prosedur ataupun instalasi, yang dilakukan sesuai dengan kebutuhan.",
            abbr: "AU",
          },
          {
            name: "inspecting",
            description: "Checking for something or someone to ensure their identity.",
            descriptionId:
              "Memeriksa sesuatu dengan teliti (secara terjadwal ataupun insidentil) untuk memastikan kualitas atau kebenarannya.",
            abbr: "IS",
          },
          {
            name: "investigating",
            description: "Investigation or search for evidence and facts in detail, to reveal the truth.",
            descriptionId:
              "Melakukan penyelidikan atau pencarian bukti dan fakta secara detil, untuk mengungkapkan kejadian sebenarnya.",
            abbr: "IV",
          },
          {
            name: "reviewing",
            description: "Making a report or survey on an activity, performance or events that have passed.",
            descriptionId:
              "Mengulas sesuatu berupa ringkasan, peninjauan dari berbagai sumber baik mengupas kekurangan dan keunggulan, menafsir sesuatu, serta memberikan komentar terhadap sesuatu secara objektif.",
            abbr: "RE",
          },
          {
            name: "verifying",
            description: "Proving something, by comparing or testing, to ensure the correctness or suitability.",
            descriptionId:
              "Membuktikan sesuatu dengan cara menelaah atau membandingkan untuk memastikan kebenaran atau kesesuaiannya.",
            abbr: "VE",
          },
        ],
      },
      {
        name: "exploring",
        typologies: [
          {
            name: "appraising",
            description: "Assess the value of something (Goods, products, buildings, lands, companies, etc).",
            descriptionId: "Menaksir nilai atau harga dari sesuatu (barang, produk, bangunan, tanah, perusahaan, dll).",
            abbr: "AP",
          },
          {
            name: "observing",
            description: "Paying attention to someone or something cautiously, especially for scientific purposes.",
            descriptionId: "Memperhatikan seseorang atau sesuatu dengan teliti, umumnya untuk kepentingan ilmiah.",
            abbr: "OB",
          },
          {
            name: "researching",
            description:
              "Doing a planned research, to discover the facts, fix or create a new theory, or develop a plan of action based on facts.",
            descriptionId:
              "Melakukan penelitian terhadap sesuatu secara terencana untuk menemukan fakta-fakta dan teori baru atau menyempurnakan teori yang sudah ada.",
            abbr: "RE",
          },
          {
            name: "surveying",
            description: "Paying attention to something or someone carefully, especially to make an opinion or report.",
            descriptionId:
              "Memperhatikan sesuatu atau seseorang dengan seksama, khususnya untuk membuat suatu opini atau laporan.",
            abbr: "SU",
          },
        ],
      },
    ],
    typologies: ["restoring", "evaluating", "exploring"],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "elementary",
    alias: "individual elementary",
    description: "The activities of writing, interpreting, and managing administration.",
    descriptionId: "Aktivitas menulis, menginterpretasi, dan menata administrasi.",
    groups: [
      {
        name: "journalising",
        typologies: [
          {
            name: "conceptualizing",
            description:
              "Developing a plan to be used as guidelines for the future, based on what is seen, experienced, or believed.",
            descriptionId:
              "Membuat sebuah konsep untuk dijadikan pedoman di masa depan, berdasarkan apa yang dilihat, dialami, dipikirkan, atau diyakini.",
            abbr: "",
          },
          {
            name: "editing",
            description: "Tidying up and correcting previously typed documents, before they are published.",
            descriptionId:
              "Menyusun, merapihkan, merubah, mengoreksi, menyempurnakan tulisan/bahan presentasi/audio/video yang telah dibuat sebelumnya sebelum dipublikasikan atau dipresentasikan.",
            abbr: "",
          },
          {
            name: "redacting",
            description: "Choosing a discussion focus and rearrange written documents that are ready to be published.",
            descriptionId:
              "Memilih fokus pembahasan, menentukan diksi yang tepat dan menyusun kembali (biasanya dengan mengurangi kata/kalimat sensitif) dokumen tertulis sebelum dipublikasikan.",
            abbr: "",
          },
          {
            name: "reporting",
            description:
              "Conveying information, orally or written, regarding something that is happening or what had happened.",
            descriptionId:
              "Menyusun dan menyampaikan laporan, baik lisan maupun tulisan, mengenai sesuatu yang sedang atau telah terjadi.",
            abbr: "",
          },
          {
            name: "writing",
            description: "Writing articles, ideas, documents, stories, or education tool.",
            descriptionId: "Menulis artikel, ide, dokumen, cerita, blog, atau buku.",
            abbr: "",
          },
        ],
      },
      {
        name: "constructing",
        typologies: [
          {
            name: "interpreting",
            description: "Constructing or explaining the meaningof something.",
            descriptionId:
              "Memahami terlebih dahulu makna atau arti dari sesuatu untuk kemudian menjelaskannya dengan bahasa yang mudah dimengerti orang lain.",
            abbr: "",
          },
          {
            name: "transcribing",
            description: "Rewriting notes or stenographic records that have been made.",
            descriptionId:
              "Menuliskan kembali ringkasan/rekaman/hasil dikte yang sudah dibuat ke dalam bentuk catatan yang jelas dan lengkap.",
            abbr: "",
          },
          {
            name: "translating",
            description:
              "Writing or speaking something in another language as necessary so that other people who read or hear can understand.",
            descriptionId:
              "Menterjemahkan suatu pernyataan lisan atau tulisan ke dalam bahasa lain agar dapat dimengerti oleh orang lain yang mendengarkan atau membacanya.",
            abbr: "",
          },
        ],
      },
      {
        name: "administrating",
        typologies: [
          {
            name: "compliancing",
            description: "Running and maintaining conformity in accordance to applicable rules.",
            descriptionId: "Menjalankan serta menjaga kepatuhan dan ketaatan terhadap aturan yang berlaku.",
            abbr: "",
          },
          {
            name: "filing",
            description: "Putting files in the correct place so that they are tidy and easily searchable.",
            descriptionId: "Menyimpan berkas/dokumen/file di tempat yang benar dengan rapih agar mudah ditemukan.",
            abbr: "",
          },
          {
            name: "housekeeping",
            description: "Tidying and cleaning, and arranging something (especially indoor).",
            descriptionId:
              "Menyiapkan, merapihkan, membersihkan, serta menata sesuatu yang bersifat fisik seperti ruangan rumah, hotel, dan perkantoran, atau pun sesuatu yang bersifat informasi/data digital.",
            abbr: "",
          },
          {
            name: "organizing",
            description: "Managing or setting up events, systems and procedures.",
            descriptionId: "Menyusun serta mengatur protokol kegiatan, sistem, benda, dan prosedur.",
            abbr: "",
          },
          {
            name: "scheduling",
            description: "Creating a sequence of tasks or activities, which will be done within a certain period.",
            descriptionId: "Menyusun jadwal tugas atau aktivitas yang akan dilaksanakan dalam periode waktu tertentu.",
            abbr: "",
          },
          {
            name: "typewriting",
            description: "Perform typing or data entry to produce documents, files, articles, etc.",
            descriptionId:
              "Melakukan pengetikan atau memasukkan data untuk menghasilkan dokumen, berkas, artikel, dan lain-lain.",
            abbr: "",
          },
        ],
      },
    ],
    typologies: ["journalising", "interpreting", "administrating"],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "networking",
    alias: "interpersonal relating",
    description: "The activities of communicating, representing, motivating and educating",
    descriptionId: "Aktivitas mengkomunikasikan, mewakili, memotivasi, dan mendidik.",
    groups: [
      {
        name: "ambassing",
        typologies: [
          {
            name: "liasing",
            description:
              "Being a representative of an organization, to develop network, by contacting, building, and maintaining relationships with customers or others.",
            descriptionId:
              "Menjadi perwakilan dari suatu organisasi untuk mengembangkan jaringan, dengan cara membangun dan memelihara hubungan dengan pelanggan ataupun stakeholder lainnya.",
            abbr: "",
          },
          {
            name: "relating",
            description:
              "Building a close friendship based on mutual understanding, or share their views and concerns.",
            descriptionId:
              "Menjalin hubungan persahabatan berdasarkan rasa saling pengertian atau berbagi pandangan dan kepedulian.",
            abbr: "",
          },
          {
            name: "representing",
            description: "Acting or talking on behalf of someone else or another party.",
            descriptionId: "Bertindak atau berbicara atas nama orang/pihak lain.",
            abbr: "",
          },
        ],
      },
      {
        name: "communicating",
        typologies: [
          {
            name: "communicating",
            description:
              "Expressing feelings or thoughts, through spoken, written, or body language, so that other people understand the message we are trying to deliver.",
            descriptionId:
              "Menyampaikan perasaan atau pikiran, dengan bahasa lisan, tulisan, atau gerakan anggota tubuh, sehingga orang lain dapat mengerti apa yang disampaikan",
            abbr: "",
          },
          {
            name: "corresponding",
            description: "Communicating by exchanging written messages such as letters, emails, etc.",
            descriptionId: "Berkomunikasi secara tertulis, seperti melalui surat, email, media sosial, dan lainlain.",
            abbr: "",
          },
          {
            name: "entertaining",
            description: "Making a person or group of people to be entertained.",
            descriptionId: "Aktivitas yang membuat seseorang atau sekelompok orang menjadi terhibur.",
            abbr: "",
          },
          {
            name: "presenting",
            description:
              "Conveying information formally and informally in a manner that it is easily understood by other people.",
            descriptionId:
              "Menyampaikan/menampilkan sesuatu secara langsung kepada audiens/orang banyak dengan cara yang menarik dan mudah dimengerti.",
            abbr: "",
          },
        ],
      },
      {
        name: "educating",
        typologies: [
          {
            name: "teaching",
            description: "Teaching, delivering science in a good way to be easily understood by others.",
            descriptionId:
              "Mengajar dan menyampaikan ilmu pengetahuan dengan cara yang baik dan mudah dipahami oleh orang lain.",
            abbr: "",
          },
          {
            name: "training",
            description:
              "Teaching skills, procedures, methods, expertise, etc. to develop the skills and knowledge of one's particular field.",
            descriptionId:
              "Mengajari keterampilan, prosedur, metoda, keahlian, dan lain-lain untuk mengembangkan pemahaman ataupun kemampuan seseorang.",
            abbr: "",
          },
          {
            name: "mentoring",
            description: "Teaching others by providing examples and directions to achieve success.",
            descriptionId:
              "Mengajarkan orang lain dengan cara memberikan contoh dan arahan agar mencapai keberhasilan.",
            abbr: "",
          },
          {
            name: "consulting",
            description:
              "Keeping things, especially the cultural resources and the environment from the danger of loss, damage, alteration or decay.",
            descriptionId: "Membantu mencarikan solusi atas masalah pribadi atau masalah psikologis orang lain.",
            abbr: "",
          },
          {
            name: "coaching",
            description:
              "Being a partner with other party in order to go in the same direction as well as to strengthen the power the other party.",
            descriptionId:
              "Bermitra dengan orang lain untuk menemukan dan mengembangkan potensi kekuatan dalam rangka memperjelas dan menyelaraskan tujuan.",
            abbr: "",
          },
          {
            name: "advising",
            description: "Giving an opinion or counseling to other people.",
            descriptionId: "Memberikan nasihat atau saran kepada orang lain.",
            abbr: "",
          },
        ],
      },
      {
        name: "motivating",
        typologies: [
          {
            name: "motivating",
            description: "Giving encouragement and optimism to others, so that they can perform at their best.",
            descriptionId:
              "Memberi semangat dan rasa optimis kepada orang lain, agar mereka dapat berkinerja maksimum.",
            abbr: "",
          },
          {
            name: "guiding",
            description: "Helping other people to find the right goal or the predestined path.",
            descriptionId:
              "Membimbing orang atau pihak lain agar dapat menemukan sasaran atau jalan yang telah ditetapkan.",
            abbr: "",
          },
          {
            name: "supporting",
            description: "Support a person or a group in order to perform their duties optimally.",
            descriptionId: "Mendukung orang atau kelompok lain agar dapat melaksanakan tugasnya secara optimal.",
            abbr: "",
          },
        ],
      },
    ],
    typologies: ["ambasading", "communicating", "educating", "motivating"],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "generating idea",
    alias: "individual right brain",
    description: "The activities of designing, creating, synthesizing, marketing, strategizing, and creating visions.",
    descriptionId: "Aktivitas mendesain, mencipta, mensistesis, memasarkan, membuat strategi, dan membuat visi.",
    typologies: [
      "creating",
      "synthesizing",
      "marketing",
      "strategizing",
      "visioning",
      "acting",
      "beautifying",
      "conserving",
      "conserving",
      "cooking",
      "dancing",
      "dramatizing",
      "modelling",
      "musical art",
      "singing",
      "visual art",
    ],
    groups: [
      {
        name: "designing",
        typologies: [
          {
            name: "designing",
            description:
              "Creating drawings of somethings (buildings, products, etc) that are planned to be built, by showing the detailed drawings.",
            descriptionId: "Membuat rancangan detail dari suatu produk, sistem, atau bangunan.",
            abbr: "",
          },
          {
            name: "drafting",
            description: "Creating engineering drawings.",
            descriptionId: "Membuat gambar teknik yang biasanya berupa blueprint, skema, diagram, atau denah.",
            abbr: "",
          },
        ],
      },
      {
        name: "creating",
        typologies: [
          {
            name: "creating",
            description: "Using imagination to come up with a new design, product, or service.",
            descriptionId: "Menggunakan imajinasi untuk menemukan suatu rancangan, produk, atau layanan yang baru.",
            abbr: "",
          },
          {
            name: "animating",
            description: "Creating moving pictures out of several static pictures.",
            descriptionId:
              "Menghasilkan gambar bergerak yang dinamis dari gambar-gambar statis, baik dengan teknik gambar konvensional ataupun digital.",
            abbr: "",
          },
          {
            name: "ideating",
            description: "Coming up with all sorts of concepts.",
            descriptionId: "Memiliki gagasan kreatif atas berbagai hal.",
            abbr: "",
          },
        ],
      },
      {
        name: "synthesizing",
        typologies: [
          {
            name: "synthesizing",
            description:
              "Integrating ideas and information, and then combining those various ideas and information into something new.",
            descriptionId:
              "Mencari dan mengintegrasikan ide-ide dan informasi yang sudah ada menjadi sesuatu hal yang baru.",
            abbr: "",
          },
        ],
      },
      {
        name: "marketing",
        typologies: [
          {
            name: "marketing",
            description: "Activities to develop marketing strategies, including presenting services/products to the public so that they are interested in purchasing the services/products offered.",
            descriptionId:
              "Kegiatan menyusun strategi pemasaran, termasuk cara menyajikan layanan/produk kepada publik agar mereka tertarik untuk membeli layanan/produk yang ditawarkan.",
            abbr: "",
          },
          {
            name: "developing",
            description:
              "Changing or inducing changes to become bigger, more powerful, more interesting, and more advanced.",
            descriptionId:
              "Mengubah sesuatu sehingga menjadi lebih baik, lebih kuat, lebih menarik, dan lebih canggih.",
            abbr: "",
          },
          {
            name: "advertising",
            description:
              "Promoting products or services through mass media to increase the demand of the products or services.",
            descriptionId:
              "Menampilkan produk, layanan, atau acara melalui media promosi, agar menarik perhatian publik dan meningkatkan penjualan atau partisipasi.",
            abbr: "",
          },
          {
            name: "publishing",
            description:
              "Informing about somethings (products, services, information) in a way that is easy to understand, so that something is becoming well‐known and demanded by people.",
            descriptionId:
              "Memberitakan atau mengumumkan sesuatu (produk, layanan, informasi) dengan cara yang mudah dimengerti agar diketahui dan diperhatikan orang banyak.",
            abbr: "",
          },
        ],
      },
      {
        name: "strategizing",
        typologies: [
          {
            name: "strategizing",
            description:
              "Selecting and determining the best route or path toward the target, which is not necessarily thought of by others.",
            descriptionId:
              "Kegiatan memilih dan menentukan solusi atau jalan terbaik menuju sasaran yang belum tentu terpikirkan oleh orang lain.",
            abbr: "",
          },
          {
            name: "planning",
            description:
              "Determining the plan, making programs, work priorities, revision, adjusting policies, and others.",
            descriptionId:
              "Membuat perencanaan, program dan prioritas kerja, revisi dan penyesuaian kebijakan, dan lain-lain.",
            abbr: "",
          },
        ],
      },
      {
        name: "visioning",
        typologies: [
          {
            name: "visioning",
            description: "Anticipate future events wisely and appropriately define the vision.",
            descriptionId: "Kegiatan mengantisipasi masa depan secara bijak dan menentukan sasaran dengan tepat.",
            abbr: "",
          },
        ],
      },
      {
        name: "acting",
        typologies: [
          {
            name: "acting",
            description: "Expressing different roles different from who we really are.",
            descriptionId: "Mengekspresikan peran-peran yang berbeda dari keadaan diri kita yang sesungguhnya.",
            abbr: "",
          },
        ],
      },
      {
        name: "beautifying",
        typologies: [
          {
            name: "beautifying",
            description: "Making something or someone more beautiful to look at.",
            descriptionId:
              "Merubah tampilan sesuatu atau seseorang menjadi lebih menyenangkan atau menarik untuk dipandang.",
            abbr: "",
          },
        ],
      },
      {
        name: "conserving",
        typologies: [
          {
            name: "conserving",
            description:
              "Keeping things, especially the cultural resources and the environment from the danger of loss, damage, alteration or decay.",
            descriptionId:
              "Menjaga sesuatu, khususnya sumber daya budaya dan lingkungan, dari bahaya kehilangan, kerusakan, perubahan, atau kelapukan.",
            abbr: "",
          },
        ],
      },
      {
        name: "cooking",
        typologies: [
          {
            name: "cooking",
            description: "Creating and producing food or culinary.",
            descriptionId: "Membuat dan memproduksi makanan atau kuliner.",
            abbr: "",
          },
        ],
      },
      {
        name: "dancing",
        typologies: [
          {
            name: "dancing",
            description: "Displaying a beautiful gesture with harmony to the accompaniment rhythm.",
            descriptionId: "Menampilkan gerakan tubuh yang indah dan harmonis, dengan diiringi irama tertentu.",
            abbr: "",
          },
        ],
      },
      {
        name: "dramatizing",
        typologies: [
          {
            name: "dramatizing",
            description: "Making an event or story more interesting to hear, or more dramatic.",
            descriptionId: "Menjadikan suatu peristiwa atau cerita lebih menarik didengar, atau lebih dramatis.",
            abbr: "",
          },
        ],
      },
      {
        name: "modelling",
        typologies: [
          {
            name: "modelling",
            description: "A fashion model activity.",
            descriptionId: "Kegiatan seorang model fashion.",
            abbr: "",
          },
        ],
      },
      {
        name: "musical art",
        typologies: [
          {
            name: "musical art",
            description: "Related to the art of music, as composer, musical instrument players, and others.",
            descriptionId: "Kegiatan yang berkaitan dengan seni musik, seperti penggubah lagu, pemain alat musik, dll.",
            abbr: "",
          },
        ],
      },
      {
        name: "singing",
        typologies: [
          {
            name: "singing",
            description: "Singing in front of public or audience.",
            descriptionId: "Kegiatan bernyanyi di depan publik atau penonton.",
            abbr: "",
          },
        ],
      },
      {
        name: "visual art",
        typologies: [
          {
            name: "visual art",
            description: "Activities related to visual arts such as painting, visual communication, imaging, etc.",
            descriptionId:
              "Kegiatan yang berkaitan dengan seni visual seperti melukis, desain grafis, membuat patung, menggambar, dan lain-lain.",
            abbr: "",
          },
        ],
      },
    ],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "technical",
    alias: "individual technical",
    description: "The activities of producing, maintaining quality, maintaining safety, distributing and operating.",
    descriptionId: "Aktivitas memproduksi, menjaga mutu, menjaga keselamatan, mendistribusi, dan mengoperasikan.",
    groups: [
      {
        name: "safekeeping",
        typologies: [
          {
            name: "monitoring",
            description: "Keeping an eye on the possibility of a mismatch or imbalance of a job or task.",
            descriptionId:
              "Mengawasi secara kontinyu kemungkinan ketidaksesuaian atau ketidakseimbangan atas suatu pekerjaan atau tugas.",
            abbr: "",
          },
          {
            name: "safekeeping",
            description:
              "Maintaining the safety and security of something or someone from the risk of accidents, or other hazards.",
            descriptionId:
              "Menjaga keselamatan untuk memberi rasa aman kepada mahluk hidup dari resiko kecelakaan atau bahaya lainnya.",
            abbr: "",
          },
          {
            name: "securing",
            description: "Safeguarding assets from loss, theft, damage, and others.",
            descriptionId: "Menjaga aset dari resiko kehilangan, kerusakan, dan lain-lain.",
            abbr: "",
          },
        ],
      },
      {
        name: "producing",
        typologies: [
          {
            name: "assembling",
            description: "Putting together parts to form a useable and functional good.",
            descriptionId:
              "Menyusun/merakit suku cadang atau komponen dari suatu benda atau barang menjadi satu kesatuan yang lengkap dan bisa digunakan.",
            abbr: "",
          },
          {
            name: "building",
            description: "Building houses, buildings, factories, bridges and other structures.",
            descriptionId: "Membuat konstruksi rumah, gedung, pabrik, jembatan, dan struktur lainnya.",
            abbr: "",
          },
          {
            name: "installing",
            description:
              "Combining separate parts of a machine or equipment (eg nuts, bolts, etc.), so that the machine or the tool can be used.",
            descriptionId:
              "Menempatkan dan memasang sesuatu (barang atau piranti lunak) pada tempat yang seharusnya agar dapat beroperasi dengan baik.",
            abbr: "",
          },
          {
            name: "producing",
            description: "Making or creating something into finished goods or intermediate goods.",
            descriptionId:
              "Membuat atau menghasilkan suatu barang atau karya baik itu yang sudah jadi atau setengah jadi.",
            abbr: "",
          },
        ],
      },
      {
        name: "quality controlling",
        typologies: [
          {
            name: "finishing",
            description: "To complete the last stage of production, project, or construction.",
            descriptionId: "Kegiatan tahap akhir/sentuhan akhir dari sebuah proses produksi, proyek, atau konstruksi.",
            abbr: "",
          },
          {
            name: "testing",
            description:
              "Conduct testing to prove things work correctly in accordance with the expected specifications.",
            descriptionId:
              "Melakukan uji coba untuk memastikan bahwa kualitas, kinerja, dan keandalan dari barang/aplikasi/sistem telah berfungsi sesuai dengan kriteria yang ditetapkan.",
            abbr: "",
          },
        ],
      },
      {
        name: "distributing",
        typologies: [
          {
            name: "distributing",
            description:
              "Deploying something (information, goods, letters, articles, etc.) at about the same time to a particular place or region.",
            descriptionId:
              "Mendistribusikan barang, dokumen, ataupun informasi secara serentak ke beberapa tempat atau tujuan tertentu.",
            abbr: "",
          },
          {
            name: "delivering",
            description:
              "Sending something like letters, items purchased or ordered to an address or a specific person.",
            descriptionId:
              "Mengirim sesuatu, seperti surat, barang yang dibeli/dipesan, ke alamat atau orang tertentu.",
            abbr: "",
          },
        ],
      },
      {
        name: "operating",
        typologies: [
          {
            name: "operating",
            description: "Running or operating something (machinery, equipment, processes, or systems).",
            descriptionId: "Menjalankan atau mengoperasikan mesin, peralatan, proses, atau sistem.",
            abbr: "",
          },
          {
            name: "maintaining",
            description: "Taking care of machinery, equipment, systems or structures.",
            descriptionId: "Memelihara fungsi mesin, sistem, peralatan, atau bangunan.",
            abbr: "",
          },
        ],
      },
      {
        name: "manual skill",
        typologies: [
          {
            name: "manual skill",
            description:
              "Jobs requiring many skills of the hands and other Teaching someone else (usually subordinates) with a teaching method and directing them to achieve success.",
            descriptionId: "Pekerjaan yang banyak membutuhkan keterampilan dari tangan dan anggota tubuh lainnya.",
            abbr: "",
          },
        ],
      },
      {
        name: "physical skill",
        typologies: [
          {
            name: "physical skill",
            description:
              "Use of physical coordination functions such as climbing, controlling, operating equipment, and others.",
            descriptionId:
              "Menggunakan fungsi koordinasi fisik, seperti memanjat, mengontrol dan mengoperasikan peralatan, dll.",
            abbr: "",
          },
        ],
      },
      {
        name: "planting",
        typologies: [
          {
            name: "planting",
            description: "Perform activities of preparing, sowing, growing, nurturing, caring for plants.",
            descriptionId:
              "Melakukan kegiatan menyiapkan, menyemai, menumbuhkan, memelihara, merawat tumbuhan atau tanaman.",
            abbr: "",
          },
        ],
      },
      {
        name: "sport",
        typologies: [
          {
            name: "sport",
            description: "Doing certain sport activities with high achievements.",
            descriptionId: "Melakukan kegiatan olahraga tertentu, dan berprestasi.",
            abbr: "",
          },
        ],
      },
      {
        name: "tending animal",
        typologies: [
          {
            name: "tending animal",
            description: "Feeding, caring for, training, and breeding animals.",
            descriptionId: "Memberi makan, merawat, melatih, dan mengembang biakkan binatang.",
            abbr: "",
          },
        ],
      },
    ],
    typologies: ["manual skill", "physical skill", "planting", "sport", "tending animal"],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "headman",
    alias: "interpersonal influencing",
    description:
      "The activities of managing people, controlling people, mediating conflicts, selling, and selecting people s activities.",
    descriptionId: "Aktivitas mengatur orang, mengendalikan orang, menengahi konflik, berjualan, dan menyeleksi orang.",
    groups: [
      {
        name: "arranging",
        typologies: [
          {
            name: "cooperating",
            description: "Acting or cooperating with others, to achieve common goals agreed upon.",
            descriptionId:
              "Bertindak atau bekerjasama dengan orang lain untuk mencapai sasaran bersama yang telah ditetapkan.",
            abbr: "",
          },
          {
            name: "coordinating",
            description: "Managing the distribution of tasks to multiple people, so they can complete a given task.",
            descriptionId:
              "Mengatur pembagian tugas kepada beberapa orang agar dapat menyelesaikan tugas yang diberikan.",
            abbr: "",
          },
          {
            name: "dispatching",
            description: "Assigning someone to go a certain place in accordance to the tasks to be done.",
            descriptionId:
              "Menugaskan seseorang untuk pergi ke tempat tertentu sesuai dengan tugas yang harus dilakukan.",
            abbr: "",
          },
        ],
      },
      {
        name: "selling",
        typologies: [
          {
            name: "selling",
            description: "Selling products or services in ways to make other people eager to buy it.",
            descriptionId: "Menjual produk atau jasa dengan dengan cara meyakinkan orang lain untuk membelinya.",
            abbr: "",
          },
          {
            name: "brokering",
            description: "Be a liaison between the two sides to help the business transaction process.",
            descriptionId: "Menjadi penghubung antara kedua belah pihak agar terjadi transaksi bisnis.",
            abbr: "",
          },
          {
            name: "influencing",
            description: "Activities affecting or convincing the mind of others to follow what was said or done.",
            descriptionId:
              "Kegiatan mempengaruhi pikiran atau meyakinkan orang lain untuk mengikuti apa yang diucapkan atau diperbuat.",
            abbr: "",
          },
        ],
      },
      {
        name: "commanding",
        typologies: [
          {
            name: "collecting",
            description:
              "Performing billing in accordance with the contract or agreement previously agreed upon by both parties.",
            descriptionId:
              "Melakukan penagihan sesuai dengan kontrak atau perjanjian yang telah disepakati oleh dua belah pihak.",
            abbr: "",
          },
          {
            name: "controlling",
            description: "Using authority to manage and supervise people in performing their tasks.",
            descriptionId: "Menggunakan kekuasaan untuk dapat mengatur dan mengawasi orang dalam melaksanakan tugas.",
            abbr: "",
          },
          {
            name: "interrogating",
            description:
              "Asking questions to other people in an aggressive and thorough way, to reveal the truth of an incident or event.",
            descriptionId:
              "Mengajukan pertanyaan kepada orang lain secara agresif dan teliti untuk mengungkapkan kebenaran suatu kejadian atau peristiwa.",
            abbr: "",
          },
        ],
      },
      {
        name: "mediating",
        typologies: [
          {
            name: "mediating",
            description: "Showing effort to overcome and involving yourself in resolving a conflict or feud.",
            descriptionId:
              "Berusaha mengatasi dan melibatkan diri dalam upaya penyelesaian sebuah konflik atau perseteruan.",
            abbr: "",
          },
          {
            name: "negotiating",
            description:
              "Trying to get an agreement on terms that are still not accepted by the person / party, so that both parties get the benefits, rights, or opportunities.",
            descriptionId:
              "Berusaha mendapatkan kesepakatan tentang hal yang masih belum dapat diterima oleh pihak lain agar kedua belah pihak mendapatkan keuntungan, hak, atau kesempatan.",
            abbr: "",
          },
          {
            name: "purchasing",
            description:
              "Buying something with cash or its equivalent through efforts and sacrifices to get the best out of these things.",
            descriptionId:
              "Membeli sesuatu dengan uang atau alat pembayaran lain yang setara dengan upaya keras untuk mendapatkan nilai ekonomis yang terbaik.",
            abbr: "",
          },
        ],
      },
      {
        name: "selecting",
        typologies: [
          {
            name: "recruiting",
            description: "Selecting and hiring a person as an employee or member.",
            descriptionId: "Aktivitas mencari, memilih, dan mempekerjakan seseorang untuk posisi tertentu.",
            abbr: "",
          },
          {
            name: "interviewing",
            description: "Using questioning techniques to obtain information from someone.",
            descriptionId: "Menggunakan teknik bertanya, untuk mendapatkan informasi dari seseorang.",
            abbr: "",
          },
        ],
      },
    ],
    typologies: ["arranging", "selling", "commanding", "mediating", "selecting"],
    suggestion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
