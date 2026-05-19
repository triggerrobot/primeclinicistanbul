export type Language = 'en' | 'tr' | 'ru' | 'ar'

export const LANGUAGES: { code: Language; label: string; flag: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' }
]

export type Translations = typeof en

const en = {
  nav: {
    home: 'Home',
    treatments: 'Treatments',
    process: 'Our Process',
    results: 'Results',
    doctors: 'Doctors',
    cta: 'Free Consultation',
    phone: '+90 212 000 00 00'
  },
  hero: {
    badge: 'Premium Health Tourism · Istanbul, Turkey',
    headline1: 'Your VIP Health Journey',
    headline2: 'Starts in Istanbul',
    words: ['Excellence.', 'Precision.', 'Transformation.', 'Confidence.'],
    subtitle:
      'From VIP airport transfers to world-renowned surgeons — we orchestrate your entire medical journey with uncompromising luxury, discretion and expertise.',
    cta1: 'Request VIP Consultation',
    cta2: 'Explore Treatments',
    stats: {
      patients: 'Patients Served',
      countries: 'Countries',
      satisfaction: 'Satisfaction Rate',
      experience: 'Years of Excellence'
    }
  },
  process: {
    badge: 'Your Journey',
    headline1: 'The',
    headline2: 'VIP Experience',
    headline3: 'From Arrival to Results',
    subtitle:
      'Every detail of your medical journey is orchestrated by our team so you can focus entirely on your transformation.',
    steps: [
      {
        title: 'VIP Airport Reception',
        description:
          'Your dedicated concierge meets you at Istanbul Airport with a luxury Mercedes S-Class and personalized welcome package.',
        detail: 'Flight monitoring • Name board • Luggage handling'
      },
      {
        title: '5-Star Accommodation',
        description:
          "We arrange your stay in Istanbul's finest boutique hotels, selecting rooms optimized for your post-procedure recovery.",
        detail: 'Bosphorus view suites • 24h room service • Medical pillow kit'
      },
      {
        title: 'Expert Consultation',
        description:
          'A private meeting with your specialist surgeon for detailed examination, imaging analysis and personalized treatment planning.',
        detail: 'Full blood panel • 3D imaging • Custom surgical plan'
      },
      {
        title: 'World-Class Procedure',
        description:
          "Your operation is performed in JCI-accredited hospitals by Turkey's most distinguished specialists, with zero compromise on safety.",
        detail: 'International standards • Anesthesiologist • Live family updates'
      },
      {
        title: 'Luxury Recovery Suite',
        description:
          'Recover in your private suite with dedicated nursing care, daily check-ins and all medications included in your package.',
        detail: '24/7 nursing • Daily doctor visit • Private physiotherapy'
      },
      {
        title: 'Safe Return & Aftercare',
        description:
          'VIP transfer to the airport and a full year of remote aftercare with your surgical team — your results are our responsibility.',
        detail: 'Airport escort • 12-month follow-up • Emergency line'
      }
    ],
    guarantee: [
      'All-Inclusive Package',
      'JCI Accredited Hospitals',
      '24/7 Patient Support',
      'Money-Back Guarantee',
      'Multilingual Coordinators'
    ],
    step: 'Step'
  },
  treatments: {
    badge: 'Our Specialties',
    headline1: 'World-Class',
    headline2: 'Treatments',
    subtitle:
      "Every procedure is performed by Turkey's most distinguished specialists in internationally accredited facilities — combining artistry with medical precision.",
    ctaText: "Don't see what you're looking for? We arrange any medical procedure.",
    ctaButton: 'Inquire About Your Treatment',
    learnMore: 'Learn More',
    recovery: 'Recovery',
    included: "What's Included",
    highlights: 'Procedure Highlights',
    quickFacts: 'Quick Facts',
    freeConsultation: 'Free Consultation',
    consultationDesc: 'Get a personalised quote and treatment plan from our specialist within 2 hours.',
    otherTreatments: 'Other Treatments',
    backTo: 'Our Specialties',
    cards: [
      {
        category: 'Facial Surgery',
        title: 'Rhinoplasty',
        subtitle: 'Nose Reshaping',
        description:
          "Precision nose surgery combining aesthetic vision with medical excellence, performed by Istanbul's leading facial surgeons.",
        longDescription:
          'Our rhinoplasty specialists blend surgical precision with an artistic eye to create results that are harmonious with your facial anatomy. Using both open and closed techniques, we address cosmetic refinement, structural correction and breathing improvements in a single procedure. Every surgery is preceded by a detailed 3D simulation so you can visualise your outcome before a single incision is made.',
        features: ['Natural Results', 'Minimal Scarring', '7–14 Day Recovery'],
        stats: [
          { label: 'Recovery', value: '7–14 days' },
          { label: 'Duration', value: '2–3 hrs' },
          { label: 'Anaesthesia', value: 'General' },
          { label: 'Stay', value: '5–7 nights' }
        ],
      },
      {
        category: 'Hair Restoration',
        title: 'Hair Transplant',
        subtitle: 'FUE / DHI Technique',
        description:
          'State-of-the-art follicular unit extraction delivering permanent, natural-looking hair restoration results.',
        longDescription:
          'Our hair restoration team uses the most advanced FUE and DHI techniques available, extracting and implanting grafts at the optimal angle and density to match your natural hair growth pattern. Sapphire blade micro-channels minimise trauma, while PRP therapy accelerates healing and maximises graft survival. The result is a hairline so natural it is indistinguishable from your original hair.',
        features: ['FUE & DHI Methods', 'Lifetime Results', '3–5 Day Recovery'],
        stats: [
          { label: 'Recovery', value: '3–5 days' },
          { label: 'Duration', value: '6–8 hrs' },
          { label: 'Grafts', value: 'Up to 5,000' },
          { label: 'Stay', value: '3–4 nights' }
        ],
      },
      {
        category: 'Body Contouring',
        title: 'Liposuction & BBL',
        subtitle: 'Body Sculpting',
        description:
          'Advanced body contouring procedures sculpting your ideal silhouette with precision and minimal downtime.',
        longDescription:
          'VASER ultrasonic-assisted liposuction allows our surgeons to sculpt the body with unrivalled precision, targeting stubborn fat deposits while preserving the surrounding tissue. The purified fat is then strategically transferred to the buttocks to create natural, lasting curves. A custom compression garment programme supports your result through every stage of recovery.',
        features: ['360° Sculpting', 'HD Liposuction', '10–14 Day Recovery'],
        stats: [
          { label: 'Recovery', value: '10–14 days' },
          { label: 'Duration', value: '3–5 hrs' },
          { label: 'Anaesthesia', value: 'General' },
          { label: 'Stay', value: '6–8 nights' }
        ],
      },
      {
        category: 'Dental Aesthetics',
        title: 'Hollywood Smile',
        subtitle: 'Veneers & Implants',
        description:
          'Transform your smile with premium porcelain veneers and dental implants crafted by master prosthodontists.',
        longDescription:
          'Our prosthodontic specialists design your smile using advanced digital imaging and smile design software before any preparation begins. Ultra-thin E-Max porcelain veneers at 0.3 mm thickness preserve the maximum amount of natural tooth structure while delivering a luminous, perfectly symmetrical result. Same-day CEREC technology ensures implant cases can often be completed within a single visit.',
        features: ['E-Max Veneers', 'Same-Day Crowns', '5–7 Day Treatment'],
        stats: [
          { label: 'Treatment', value: '5–7 days' },
          { label: 'Per session', value: '2–3 hrs' },
          { label: 'Veneers', value: 'Up to 20' },
          { label: 'Longevity', value: '15–20 yrs' }
        ],
      },
      {
        category: 'Facial Rejuvenation',
        title: 'Facelift & Eyelid',
        subtitle: 'Rejuvenation Surgery',
        description:
          'Sophisticated facial rejuvenation restoring youthful contours through minimally invasive techniques.',
        longDescription:
          'The deep-plane facelift addresses the deeper structural layers of the face, providing more dramatic and longer-lasting results than traditional techniques — typically lasting 10 to 15 years. Blepharoplasty is carefully combined where needed, removing excess skin and repositioning fat pads to restore a rested, youthful appearance without an operated look. All work is performed under general anaesthesia in our JCI-accredited hospital.',
        features: ['Natural Lift', 'No Visible Scars', '10–14 Day Recovery'],
        stats: [
          { label: 'Recovery', value: '10–14 days' },
          { label: 'Duration', value: '3–4 hrs' },
          { label: 'Anaesthesia', value: 'General / Local' },
          { label: 'Stay', value: '5–7 nights' }
        ],
      },
      {
        category: 'Breast Aesthetics',
        title: 'Breast Surgery',
        subtitle: 'Augmentation & Lift',
        description:
          'Expert breast augmentation, reduction and lift procedures using premium implants and advanced techniques.',
        longDescription:
          'We offer the full spectrum of breast surgery — augmentation with premium Motiva or Mentor cohesive gel implants, reduction for improved comfort and posture, and mastopexy (lift) for reshaping without volume change. Dual-plane implant placement creates the most natural feel and profile, and every patient receives a personalised 3D simulation session before confirming their choice of size and shape.',
        features: ['Premium Implants', 'Custom Sizing', '7–10 Day Recovery'],
        stats: [
          { label: 'Recovery', value: '7–10 days' },
          { label: 'Duration', value: '1.5–3 hrs' },
          { label: 'Implants', value: 'Motiva / Mentor' },
          { label: 'Stay', value: '4–6 nights' }
        ],
      }
    ]
  },
  beforeAfter: {
    badge: 'Real Results',
    headline1: 'Before &',
    headline2: 'After',
    subtitle:
      'Witness the life-changing transformations of our international patients. Every result tells a story of restored confidence.',
    duration: 'Duration',
    recovery: 'Recovery',
    satisfaction: 'Satisfaction',
    dragHint: 'Drag to compare',
    disclaimer:
      '* All images shown are for illustrative purposes. Individual results may vary. All procedures are performed by board-certified specialists.',
    cases: [
      {
        category: 'Rhinoplasty',
        label: 'Nose Reshaping',
        description: 'Natural, balanced result achieved through closed rhinoplasty technique.'
      },
      {
        category: 'Hair Transplant',
        label: 'FUE Hair Restoration',
        description: '4,200 grafts transplanted using DHI technique for maximum density.'
      },
      {
        category: 'Hollywood Smile',
        label: 'Porcelain Veneers',
        description: '20 E-Max porcelain veneers crafted for a perfect, radiant smile.'
      },
      {
        category: 'Body Contouring',
        label: 'Liposuction & BBL',
        description: '360° liposuction with Brazilian butt lift for a sculpted silhouette.'
      }
    ]
  },
  doctors: {
    badge: 'Our Medical Team',
    headline1: 'The',
    headline2: 'Specialist',
    headline3: 'Surgeons',
    subtitle:
      'Each procedure is entrusted to a hand-selected specialist with international training, board certifications and a proven track record of excellence.',
    experience: 'Years Experience',
    cases: 'cases',
    doctors: [
      {
        name: 'Dr. Ayşe Boğatır',
        specialty: 'Zirconia, Laminates & All-on-4/6',
        experience: '12',
        education: 'Istanbul University · Vienna Dental'
      },
      {
        name: 'Dt. Furkan Erilli',
        specialty: 'Dental Implants',
        experience: '8',
        education: 'Marmara University · Berlin Charité'
      },
      {
        name: 'Dr. Emre Kaya',
        specialty: 'Body Contouring & BBL',
        experience: '15',
        education: 'Ankara University · Johns Hopkins'
      },
      {
        name: 'Dt. Mehmet Yiğit Özgür',
        specialty: 'Root Canal, Cleaning & Whitening',
        experience: '10',
        education: 'Hacettepe University · London KCL'
      },
      {
        name: 'Dr. Ahmet Keleş',
        specialty: 'Rhinoplasty',
        experience: '15',
        education: 'Istanbul University · Vienna AKH'
      },
      {
        name: 'Dt. Büşra Çağırıcı',
        specialty: 'Zirconia, Laminates & All-on-4/6',
        experience: '7',
        education: 'Ankara University · Madrid Complutense'
      },
      {
        name: 'Dt. Etkin Can Uğurlu',
        specialty: 'Fillings, Root Canal & Whitening',
        experience: '9',
        education: 'Ege University · Paris APHP'
      },
      {
        name: 'Dr. Tarık Yıldız',
        specialty: 'Dermatology & Hair Restoration',
        experience: '9',
        education: 'Marmara University · London UCL'
      }
    ]
  },
  contact: {
    badge: 'Get in Touch',
    headline1: 'Start Your',
    headline2: 'VIP Journey',
    subtitle:
      'Our patient coordinators are available 24/7 to answer your questions and build your personalized treatment package.',
    form: {
      name: 'Full Name',
      namePlaceholder: 'John Doe',
      email: 'Email Address',
      emailPlaceholder: 'john@example.com',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+1 (555) 000 0000',
      country: 'Country of Residence',
      countryPlaceholder: 'United Kingdom',
      treatment: 'Desired Treatment',
      treatmentPlaceholder: 'Select a treatment...',
      message: 'Additional Details',
      messagePlaceholder:
        'Tell us about your expectations, any medical history or specific questions...',
      privacy:
        'Your information is 100% confidential and used solely to prepare your personalized treatment proposal. We never share patient data.',
      submit: 'Send VIP Request',
      successTitle: 'Request Received!',
      successMessage:
        'Your personal patient coordinator will contact you within 2 hours with a customized treatment plan.',
      successRetry: 'Submit another request'
    },
    treatments: [
      'Rhinoplasty (Nose Surgery)',
      'Hair Transplant (FUE/DHI)',
      'Hollywood Smile / Veneers',
      'Liposuction & Body Contouring',
      'Brazilian Butt Lift (BBL)',
      'Facelift & Eyelid Surgery',
      'Breast Augmentation / Lift',
      'Tummy Tuck (Abdominoplasty)',
      'Dental Implants',
      'Other / General Inquiry'
    ],
    infoPhone: { label: 'Phone / WhatsApp', sub: 'Available 24/7' },
    infoEmail: { label: 'Email', sub: 'Reply within 2 hours' },
    infoLocation: { label: 'Location', sub: 'Near Şişli / Mecidiyeköy' },
    languagesTitle: 'We Speak Your Language',
    responseValue: '< 2 hours',
    responseLabel: 'Average Response Time',
    responseSub: 'Mon–Sun, including weekends and holidays'
  },
  footer: {
    tagline:
      "Istanbul's premier health tourism concierge. Connecting international patients with world-class specialists through a seamlessly luxurious experience.",
    treatmentsTitle: 'Treatments',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    copyright: 'Prime Clinic Istanbul. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy'
  }
}

const tr: Translations = {
  nav: {
    home: 'Ana Sayfa',
    treatments: 'Tedaviler',
    process: 'Sürecimiz',
    results: 'Sonuçlar',
    doctors: 'Doktorlar',
    cta: 'Ücretsiz Danışma',
    phone: '+90 212 000 00 00'
  },
  hero: {
    badge: 'Premium Sağlık Turizmi · İstanbul, Türkiye',
    headline1: 'VIP Sağlık Yolculuğunuz',
    headline2: "İstanbul'da Başlıyor",
    words: ['Mükemmellik.', 'Hassasiyet.', 'Dönüşüm.', 'Güven.'],
    subtitle:
      'VIP havalimanı transferlerinden dünyaca ünlü cerrahlara kadar — tüm tıbbi yolculuğunuzu ödünsüz lüks, gizlilik ve uzmanlıkla yönetiyoruz.',
    cta1: 'VIP Konsültasyon İste',
    cta2: 'Tedavileri Keşfet',
    stats: {
      patients: 'Hasta',
      countries: 'Ülke',
      satisfaction: 'Memnuniyet Oranı',
      experience: 'Yıllık Deneyim'
    }
  },
  process: {
    badge: 'Yolculuğunuz',
    headline1: '',
    headline2: 'VIP Deneyim',
    headline3: 'Varıştan Sonuçlara',
    subtitle:
      'Tıbbi yolculuğunuzun her detayı ekibimiz tarafından yönetilir; siz yalnızca dönüşümünüze odaklanırsınız.',
    steps: [
      {
        title: 'VIP Havalimanı Karşılama',
        description:
          'Kişisel konsiyerjiniz, lüks Mercedes S-Class ve özel karşılama paketiyle İstanbul Havalimanı\'nda sizi bekler.',
        detail: 'Uçuş takibi • İsim tabelası • Bagaj hizmeti'
      },
      {
        title: '5 Yıldızlı Konaklama',
        description:
          "İstanbul'un en seçkin butik otellerde, ameliyat sonrası iyileşmenize uygun odalar ayarlıyoruz.",
        detail: 'Boğaz manzaralı süitler • 24s oda servisi • Medikal yastık seti'
      },
      {
        title: 'Uzman Konsültasyonu',
        description:
          'Uzman cerrahınızla ayrıntılı muayene, görüntüleme analizi ve kişiselleştirilmiş tedavi planlaması için özel görüşme.',
        detail: 'Tam kan tahlili • 3D görüntüleme • Özel cerrahi plan'
      },
      {
        title: 'Dünya Standartlarında Operasyon',
        description:
          "Ameliyatınız, JCI akreditasyonlu hastanelerde Türkiye'nin en seçkin uzmanları tarafından güvenlik konusunda sıfır ödün verilerek gerçekleştirilir.",
        detail: 'Uluslararası standartlar • Anesteziyolog • Aileye anlık bilgi'
      },
      {
        title: 'Lüks İyileşme Paketi',
        description:
          'Özel süitinizde, bakım hemşiresi eşliğinde, günlük kontrol ve tüm ilaçlar dahil olarak iyileşin.',
        detail: '24/7 hemşirelik • Günlük doktor ziyareti • Özel fizyoterapi'
      },
      {
        title: 'Güvenli Dönüş ve Sonrası',
        description:
          "Havalimanına VIP transfer ve cerrahi ekibinizle 1 yıl uzaktan takip — sonuçlarınız bizim sorumluluğumuzdur.",
        detail: 'Havalimanı refakati • 12 ay takip • Acil hat'
      }
    ],
    guarantee: [
      'Hepsi Dahil Paket',
      'JCI Akreditasyonlu Hastaneler',
      '7/24 Hasta Desteği',
      'Para İade Garantisi',
      'Çok Dilli Koordinatörler'
    ],
    step: 'Adım'
  },
  treatments: {
    badge: 'Uzmanlık Alanlarımız',
    headline1: 'Dünya Standartlarında',
    headline2: 'Tedaviler',
    subtitle:
      'Her prosedür, uluslararası akrediteli tesislerde Türkiye\'nin en seçkin uzmanları tarafından gerçekleştirilir — sanatsal bakış açısı ve tıbbi hassasiyet bir arada.',
    ctaText: 'Aradığınızı bulamadınız mı? Her türlü tıbbi işlemi ayarlıyoruz.',
    ctaButton: 'Tedavinizi Sorun',
    learnMore: 'Daha Fazla',
    recovery: 'İyileşme',
    included: 'Dahil Edilenler',
    highlights: 'Prosedür Öne Çıkanlar',
    quickFacts: 'Hızlı Bilgiler',
    freeConsultation: 'Ücretsiz Danışma',
    consultationDesc: 'Uzmanımızdan 2 saat içinde kişiselleştirilmiş teklif ve tedavi planı alın.',
    otherTreatments: 'Diğer Tedaviler',
    backTo: 'Uzmanlık Alanlarımız',
    cards: [
      {
        category: 'Yüz Cerrahisi',
        title: 'Rinoplasti',
        subtitle: 'Burun Şekillendirme',
        description:
          "İstanbul'un önde gelen yüz cerrahları tarafından gerçekleştirilen, estetik vizyonu tıbbi mükemmellikle birleştiren hassas burun ameliyatı.",
        longDescription:
          'Rinoplasti uzmanlarımız, yüz anatominizle uyumlu sonuçlar elde etmek için cerrahi hassasiyeti sanatsal bir bakış açısıyla birleştirir. Açık ve kapalı tekniklerin her ikisini de kullanarak estetik iyileştirme, yapısal düzeltme ve nefes alma sorunlarını tek bir operasyonda ele alıyoruz. Her cerrahiden önce ayrıntılı 3D simülasyon yapılır; böylece ilk kesiden önce sonucu görselleştirebilirsiniz.',
        features: ['Doğal Sonuçlar', 'Minimal İz', '7–14 Gün İyileşme'],
        stats: [
          { label: 'İyileşme', value: '7–14 gün' },
          { label: 'Süre', value: '2–3 saat' },
          { label: 'Anestezi', value: 'Genel' },
          { label: 'Konaklama', value: '5–7 gece' }
        ],
      },
      {
        category: 'Saç Restorasyonu',
        title: 'Saç Ekimi',
        subtitle: 'FUE / DHI Tekniği',
        description:
          'Kalıcı ve doğal görünümlü saç restorasyonu sonuçları sunan en gelişmiş foliküler birim ekstraksiyon yöntemi.',
        longDescription:
          'Saç restorasyonu ekibimiz, greftleri doğal saç büyüme düzeninizle eşleşecek optimal açı ve yoğunlukta nakletmek için mevcut en gelişmiş FUE ve DHI tekniklerini kullanır. Safir bıçak mikro-kanallar travmayı en aza indirirken PRP terapisi iyileşmeyi hızlandırır ve greft yaşama oranını maksimize eder. Sonuç, orijinal saçınızdan ayırt edilemeyecek kadar doğal bir saç çizgisidir.',
        features: ['FUE ve DHI Yöntemi', 'Ömür Boyu Sonuç', '3–5 Gün İyileşme'],
        stats: [
          { label: 'İyileşme', value: '3–5 gün' },
          { label: 'Süre', value: '6–8 saat' },
          { label: 'Greft', value: '5.000\'e kadar' },
          { label: 'Konaklama', value: '3–4 gece' }
        ],
      },
      {
        category: 'Vücut Şekillendirme',
        title: 'Liposuction ve BBL',
        subtitle: 'Vücut Heykeltıraşlığı',
        description:
          'Minimal kesinti süresiyle ideal silüetinizi şekillendiren gelişmiş vücut konturlama prosedürleri.',
        longDescription:
          'VASER ultrasonik destekli liposuction, cerrahlarımızın çevre dokuları korurken inatçı yağ depolarını hedef alarak vücudu eşsiz bir hassasiyetle şekillendirmesine olanak tanır. Arındırılan yağ, kalıcı ve doğal kıvrımlar oluşturmak için stratejik olarak kalçalara aktarılır. Özel baskı giysisi programı, iyileşmenin her aşamasında sonucunuzu destekler.',
        features: ['360° Şekillendirme', 'HD Liposuction', '10–14 Gün İyileşme'],
        stats: [
          { label: 'İyileşme', value: '10–14 gün' },
          { label: 'Süre', value: '3–5 saat' },
          { label: 'Anestezi', value: 'Genel' },
          { label: 'Konaklama', value: '6–8 gece' }
        ],
      },
      {
        category: 'Diş Estetiği',
        title: 'Hollywood Gülüşü',
        subtitle: 'Veneer ve İmplant',
        description:
          'Baş protez uzmanları tarafından tasarlanan premium porselen veneer ve diş implantlarıyla gülüşünüzü dönüştürün.',
        longDescription:
          'Protetik uzmanlarımız, herhangi bir hazırlık başlamadan önce gelişmiş dijital görüntüleme ve gülüş tasarım yazılımı kullanarak gülüşünüzü tasarlar. 0,3 mm kalınlığında ultra ince E-Max porselen veneerler, doğal diş yapısını maksimumda korurken parlak ve mükemmel simetrik bir sonuç sunar. CEREC teknolojisi, implant vakalarının çoğunlukla tek bir ziyarette tamamlanmasını sağlar.',
        features: ['E-Max Veneer', 'Aynı Gün Kron', '5–7 Günlük Tedavi'],
        stats: [
          { label: 'Tedavi', value: '5–7 gün' },
          { label: 'Seans başına', value: '2–3 saat' },
          { label: 'Veneer', value: '20\'ye kadar' },
          { label: 'Ömür', value: '15–20 yıl' }
        ],
      },
      {
        category: 'Yüz Gençleştirme',
        title: 'Yüz Germe ve Göz Kapağı',
        subtitle: 'Gençleştirme Cerrahisi',
        description:
          'Minimal invaziv tekniklerle genç kontürleri geri kazandıran sofistike yüz gençleştirme.',
        longDescription:
          'Derin düzlem yüz germe, yüzün daha derin yapısal katmanlarını ele alarak geleneksel tekniklere kıyasla daha dramatik ve uzun süreli sonuçlar sağlar — genellikle 10 ila 15 yıl sürer. Blefaroplasti, fazla cildin uzaklaştırılması ve yağ pedlerinin yeniden konumlandırılması için gereken durumlarda özenle birleştirilir; böylece operasyon görünümü olmaksızın dinlenmiş, genç bir görünüm elde edilir.',
        features: ['Doğal Asma', 'Görünmez İz', '10–14 Gün İyileşme'],
        stats: [
          { label: 'İyileşme', value: '10–14 gün' },
          { label: 'Süre', value: '3–4 saat' },
          { label: 'Anestezi', value: 'Genel / Lokal' },
          { label: 'Konaklama', value: '5–7 gece' }
        ],
      },
      {
        category: 'Meme Estetiği',
        title: 'Meme Cerrahisi',
        subtitle: 'Büyütme ve Dikme',
        description:
          'Premium implantlar ve ileri teknikler kullanılarak yapılan uzman meme büyütme, küçültme ve dikme ameliyatları.',
        longDescription:
          'Premium Motiva veya Mentor kohesif jel implantlarla büyütme, konfor ve duruş iyileştirme için küçültme ve hacim değişikliği olmaksızın şekillendirme için mastopexi dahil meme cerrahisinin tüm yelpazesini sunuyoruz. Çift düzlem implant yerleşimi en doğal his ve profili sağlar; her hasta boyut ve şekil tercihini onaylamadan önce kişiselleştirilmiş 3D simülasyon seansı alır.',
        features: ['Premium İmplantlar', 'Özel Boyutlandırma', '7–10 Gün İyileşme'],
        stats: [
          { label: 'İyileşme', value: '7–10 gün' },
          { label: 'Süre', value: '1,5–3 saat' },
          { label: 'İmplant', value: 'Motiva / Mentor' },
          { label: 'Konaklama', value: '4–6 gece' }
        ],
      }
    ]
  },
  beforeAfter: {
    badge: 'Gerçek Sonuçlar',
    headline1: 'Öncesi ve',
    headline2: 'Sonrası',
    subtitle:
      'Uluslararası hastalarımızın hayat değiştiren dönüşümlerine tanıklık edin. Her sonuç, yeniden kazanılan güvenin hikayesini anlatır.',
    duration: 'Süre',
    recovery: 'İyileşme',
    satisfaction: 'Memnuniyet',
    dragHint: 'Karşılaştırmak için sürükleyin',
    disclaimer:
      '* Gösterilen tüm görseller illüstratif amaçlıdır. Bireysel sonuçlar farklılık gösterebilir. Tüm prosedürler sertifikalı uzmanlar tarafından uygulanır.',
    cases: [
      {
        category: 'Rinoplasti',
        label: 'Burun Şekillendirme',
        description: 'Kapalı rinoplasti tekniğiyle elde edilen doğal, dengeli sonuç.'
      },
      {
        category: 'Saç Ekimi',
        label: 'FUE Saç Restorasyonu',
        description: 'Maksimum yoğunluk için DHI tekniğiyle nakledilen 4.200 greft.'
      },
      {
        category: 'Hollywood Gülüşü',
        label: 'Porselen Veneer',
        description: 'Mükemmel, parlak bir gülüş için tasarlanan 20 adet E-Max porselen veneer.'
      },
      {
        category: 'Vücut Şekillendirme',
        label: 'Liposuction ve BBL',
        description: 'Şekillendirilmiş silüet için Brezilya popo kaldırma ile 360° liposuction.'
      }
    ]
  },
  doctors: {
    badge: 'Tıbbi Ekibimiz',
    headline1: 'Uzman',
    headline2: 'Cerrahlarımız',
    headline3: '',
    subtitle:
      'Her prosedür, uluslararası eğitim, sertifikalar ve kanıtlanmış mükemmellik siciliyle özenle seçilmiş bir uzmana emanet edilir.',
    experience: 'Yıl Deneyim',
    cases: 'vaka',
    doctors: [
      {
        name: 'Dr. Ayşe Boğatır',
        specialty: 'Zirkonyum, Lamine, All-on-4, All-on-6',
        experience: '12',
        education: 'İstanbul Üniversitesi · Viyana Diş'
      },
      {
        name: 'Dt. Furkan Erilli',
        specialty: 'İmplant Tedavileri',
        experience: '8',
        education: 'Marmara Üniversitesi · Berlin Charité'
      },
      {
        name: 'Dr. Emre Kaya',
        specialty: 'Vücut Şekillendirme ve BBL',
        experience: '15',
        education: 'Ankara Üniversitesi · Johns Hopkins'
      },
      {
        name: 'Dt. Mehmet Yiğit Özgür',
        specialty: 'Kanal Tedavisi, Diş Temizliği, Diş Beyazlatma',
        experience: '10',
        education: 'Hacettepe Üniversitesi · Londra KCL'
      },
      {
        name: 'Dr. Ahmet Keleş',
        specialty: 'Rinoplasti',
        experience: '15',
        education: 'İstanbul Üniversitesi · Viyana AKH'
      },
      {
        name: 'Dt. Büşra Çağırıcı',
        specialty: 'Zirkonyum, Lamine, All-on-4, All-on-6',
        experience: '7',
        education: 'Ankara Üniversitesi · Madrid Complutense'
      },
      {
        name: 'Dt. Etkin Can Uğurlu',
        specialty: 'Dolgu, Kanal Tedavisi, Diş Temizliği, Diş Beyazlatma',
        experience: '9',
        education: 'Ege Üniversitesi · Paris APHP'
      },
      {
        name: 'Dr. Tarık Yıldız',
        specialty: 'Dermatoloji ve Saç Restorasyonu',
        experience: '9',
        education: 'Marmara Üniversitesi · Londra UCL'
      }
    ]
  },
  contact: {
    badge: 'İletişime Geçin',
    headline1: 'VIP Yolculuğunuzu',
    headline2: 'Başlatın',
    subtitle:
      'Hasta koordinatörlerimiz sorularınızı yanıtlamak ve kişiselleştirilmiş tedavi paketinizi oluşturmak için 7/24 hizmetinizdedir.',
    form: {
      name: 'Ad Soyad',
      namePlaceholder: 'Ahmet Yılmaz',
      email: 'E-posta Adresi',
      emailPlaceholder: 'ahmet@ornek.com',
      phone: 'Telefon / WhatsApp',
      phonePlaceholder: '+90 (5xx) xxx xx xx',
      country: 'İkamet Ülkesi',
      countryPlaceholder: 'Almanya',
      treatment: 'İstenen Tedavi',
      treatmentPlaceholder: 'Tedavi seçin...',
      message: 'Ek Bilgiler',
      messagePlaceholder:
        'Beklentileriniz, tıbbi geçmişiniz veya özel sorularınız hakkında bilgi verin...',
      privacy:
        'Bilgileriniz %100 gizli tutulur ve yalnızca kişiselleştirilmiş tedavi teklifinizi hazırlamak için kullanılır. Hasta verilerini asla paylaşmıyoruz.',
      submit: 'VIP Talebini Gönder',
      successTitle: 'Talebiniz Alındı!',
      successMessage:
        'Kişisel hasta koordinatörünüz 2 saat içinde özel tedavi planınızla sizinle iletişime geçecek.',
      successRetry: 'Yeni talep gönder'
    },
    treatments: [
      'Rinoplasti (Burun Estetiği)',
      'Saç Ekimi (FUE/DHI)',
      'Hollywood Gülüşü / Veneer',
      'Liposuction ve Vücut Şekillendirme',
      'Brezilya Popo Kaldırma (BBL)',
      'Yüz Germe ve Göz Kapağı',
      'Meme Büyütme / Dikme',
      'Karın Germe (Abdominoplasti)',
      'Diş İmplantı',
      'Diğer / Genel Bilgi'
    ],
    infoPhone: { label: 'Telefon / WhatsApp', sub: '7/24 Hizmetinizdeyiz' },
    infoEmail: { label: 'E-posta', sub: '2 saat içinde yanıt' },
    infoLocation: { label: 'Konum', sub: 'Şişli / Mecidiyeköy yakını' },
    languagesTitle: 'Dilinizde Hizmet Veriyoruz',
    responseValue: '< 2 saat',
    responseLabel: 'Ortalama Yanıt Süresi',
    responseSub: 'Pazartesi–Pazar, hafta sonları ve tatiller dahil'
  },
  footer: {
    tagline:
      "İstanbul'un önde gelen sağlık turizmi konsiyerji firması. Uluslararası hastaları dünya standartlarındaki uzmanlarla kusursuz bir lüks deneyimle buluşturuyoruz.",
    treatmentsTitle: 'Tedaviler',
    servicesTitle: 'Hizmetler',
    companyTitle: 'Kurumsal',
    copyright: 'Prime Clinic İstanbul. Tüm hakları saklıdır.',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    cookies: 'Çerez Politikası'
  }
}

const ru: Translations = {
  nav: {
    home: 'Главная',
    treatments: 'Процедуры',
    process: 'Наш процесс',
    results: 'Результаты',
    doctors: 'Врачи',
    cta: 'Бесплатная консультация',
    phone: '+90 212 000 00 00'
  },
  hero: {
    badge: 'Премиальный медицинский туризм · Стамбул, Турция',
    headline1: 'Ваше VIP-путешествие',
    headline2: 'начинается в Стамбуле',
    words: ['Превосходство.', 'Точность.', 'Преображение.', 'Уверенность.'],
    subtitle:
      'От VIP-трансфера из аэропорта до всемирно известных хирургов — мы организуем ваше медицинское путешествие с безупречным комфортом, конфиденциальностью и профессионализмом.',
    cta1: 'Запросить VIP-консультацию',
    cta2: 'Изучить процедуры',
    stats: {
      patients: 'Пациентов',
      countries: 'Стран',
      satisfaction: 'Удовлетворённость',
      experience: 'Лет опыта'
    }
  },
  process: {
    badge: 'Ваше путешествие',
    headline1: '',
    headline2: 'VIP-опыт',
    headline3: 'От прилёта до результата',
    subtitle:
      'Каждая деталь вашего медицинского путешествия организована нашей командой — вы сосредоточены только на своём преображении.',
    steps: [
      {
        title: 'VIP-встреча в аэропорту',
        description:
          'Ваш личный консьерж встречает вас в аэропорту Стамбула с автомобилем Mercedes S-Class и персональным приветственным пакетом.',
        detail: 'Мониторинг рейса • Табличка с именем • Помощь с багажом'
      },
      {
        title: 'Проживание 5 звёзд',
        description:
          'Мы организуем ваше проживание в лучших бутик-отелях Стамбула, выбирая номера, оптимальные для вашего восстановления.',
        detail: 'Люксы с видом на Босфор • Круглосуточный сервис • Медицинский набор'
      },
      {
        title: 'Консультация специалиста',
        description:
          'Личная встреча с хирургом для детального осмотра, анализа снимков и составления индивидуального плана лечения.',
        detail: 'Полный анализ крови • 3D-визуализация • Индивидуальный план'
      },
      {
        title: 'Операция мирового класса',
        description:
          'Операция проводится в аккредитованных JCI больницах ведущими специалистами Турции без малейших компромиссов в вопросах безопасности.',
        detail: 'Международные стандарты • Анестезиолог • Обновления для семьи'
      },
      {
        title: 'Люкс-номер для восстановления',
        description:
          'Восстанавливайтесь в личном номере с круглосуточным уходом, ежедневными осмотрами и всеми медикаментами в пакете.',
        detail: 'Круглосуточный уход • Ежедневный осмотр • Физиотерапия'
      },
      {
        title: 'Безопасное возвращение и уход после',
        description:
          'VIP-трансфер в аэропорт и годовое дистанционное наблюдение хирургической бригады — ваши результаты это наша ответственность.',
        detail: 'Сопровождение в аэропорт • Наблюдение 12 месяцев • Горячая линия'
      }
    ],
    guarantee: [
      'Пакет «Всё включено»',
      'Аккредитованные JCI больницы',
      'Поддержка 24/7',
      'Гарантия возврата средств',
      'Многоязычные координаторы'
    ],
    step: 'Шаг'
  },
  treatments: {
    badge: 'Наши специализации',
    headline1: 'Мирового класса',
    headline2: 'процедуры',
    subtitle:
      'Каждая процедура выполняется ведущими специалистами Турции в международно аккредитованных клиниках — сочетание художественного мастерства и медицинской точности.',
    ctaText: 'Не нашли нужное? Мы организуем любую медицинскую процедуру.',
    ctaButton: 'Узнать о вашей процедуре',
    learnMore: 'Подробнее',
    recovery: 'Восстановление',
    included: 'Что входит в пакет',
    highlights: 'Особенности процедуры',
    quickFacts: 'Быстрые факты',
    freeConsultation: 'Бесплатная консультация',
    consultationDesc: 'Получите персональное предложение и план лечения от нашего специалиста в течение 2 часов.',
    otherTreatments: 'Другие процедуры',
    backTo: 'Наши специализации',
    cards: [
      {
        category: 'Хирургия лица',
        title: 'Ринопластика',
        subtitle: 'Коррекция носа',
        description:
          'Точная операция на носу, сочетающая эстетическое видение с медицинским совершенством, выполняемая ведущими хирургами Стамбула.',
        longDescription:
          'Наши специалисты по ринопластике сочетают хирургическую точность с художественным взглядом, создавая результаты, гармонирующие с анатомией вашего лица. Используя как открытую, так и закрытую технику, мы решаем задачи эстетики, структурной коррекции и улучшения дыхания в рамках одной операции. Каждому вмешательству предшествует детальная 3D-симуляция, позволяющая увидеть результат ещё до разреза.',
        features: ['Естественный результат', 'Минимум следов', 'Восстановление 7–14 дней'],
        stats: [
          { label: 'Восстановление', value: '7–14 дней' },
          { label: 'Длительность', value: '2–3 ч' },
          { label: 'Анестезия', value: 'Общая' },
          { label: 'Проживание', value: '5–7 ночей' }
        ],
      },
      {
        category: 'Восстановление волос',
        title: 'Пересадка волос',
        subtitle: 'Техника FUE / DHI',
        description:
          'Передовая экстракция фолликулярных единиц, обеспечивающая постоянные и естественно выглядящие результаты.',
        longDescription:
          'Наша команда по восстановлению волос применяет наиболее передовые техники FUE и DHI, пересаживая графты под оптимальным углом и плотностью в соответствии с естественным ростом ваших волос. Микроканалы сапфировым лезвием минимизируют травму, а PRP-терапия ускоряет заживление и максимизирует выживаемость графтов. Результат — линия роста волос, неотличимая от оригинальной.',
        features: ['Методы FUE и DHI', 'Пожизненный результат', 'Восстановление 3–5 дней'],
        stats: [
          { label: 'Восстановление', value: '3–5 дней' },
          { label: 'Длительность', value: '6–8 ч' },
          { label: 'Графты', value: 'до 5 000' },
          { label: 'Проживание', value: '3–4 ночи' }
        ],
      },
      {
        category: 'Коррекция тела',
        title: 'Липосакция и BBL',
        subtitle: 'Моделирование тела',
        description:
          'Передовые процедуры контурирования тела, создающие идеальный силуэт с минимальным простоем.',
        longDescription:
          'Ультразвуковая липосакция VASER позволяет нашим хирургам с непревзойдённой точностью скульптурировать тело, воздействуя на упрямые жировые отложения при сохранении окружающих тканей. Очищенный жир стратегически переносится на ягодицы для создания естественных, долговечных форм. Программа компрессионных изделий поддерживает результат на каждом этапе восстановления.',
        features: ['Скульптурирование 360°', 'HD-липосакция', 'Восстановление 10–14 дней'],
        stats: [
          { label: 'Восстановление', value: '10–14 дней' },
          { label: 'Длительность', value: '3–5 ч' },
          { label: 'Анестезия', value: 'Общая' },
          { label: 'Проживание', value: '6–8 ночей' }
        ],
      },
      {
        category: 'Эстетика зубов',
        title: 'Голливудская улыбка',
        subtitle: 'Виниры и импланты',
        description:
          'Преобразите улыбку с помощью премиальных фарфоровых виниров и зубных имплантов от мастеров-протезистов.',
        longDescription:
          'Наши специалисты по протезированию разрабатывают вашу улыбку с помощью передового цифрового моделирования до начала любой подготовки. Ультратонкие виниры E-Max толщиной 0,3 мм сохраняют максимальный объём естественной зубной ткани, обеспечивая сияющий, идеально симметричный результат. Технология CEREC позволяет завершить имплантацию за одно посещение.',
        features: ['Виниры E-Max', 'Коронки за 1 день', 'Лечение 5–7 дней'],
        stats: [
          { label: 'Лечение', value: '5–7 дней' },
          { label: 'За сеанс', value: '2–3 ч' },
          { label: 'Виниры', value: 'до 20' },
          { label: 'Долговечность', value: '15–20 лет' }
        ],
      },
      {
        category: 'Омоложение лица',
        title: 'Лифтинг лица и век',
        subtitle: 'Хирургия омоложения',
        description:
          'Сложное омоложение лица, восстанавливающее молодые контуры с помощью малоинвазивных техник.',
        longDescription:
          'Глубокий лифтинг воздействует на более глубокие структурные слои лица, обеспечивая более выраженные и долговременные результаты по сравнению с традиционными техниками — как правило, от 10 до 15 лет. Блефаропластика деликатно совмещается при необходимости: убирается избыток кожи и перемещаются жировые пакеты для восстановления отдохнувшего, молодого вида без искусственности.',
        features: ['Естественный лифтинг', 'Незаметные следы', 'Восстановление 10–14 дней'],
        stats: [
          { label: 'Восстановление', value: '10–14 дней' },
          { label: 'Длительность', value: '3–4 ч' },
          { label: 'Анестезия', value: 'Общая / Местная' },
          { label: 'Проживание', value: '5–7 ночей' }
        ],
      },
      {
        category: 'Эстетика груди',
        title: 'Операция на груди',
        subtitle: 'Увеличение и подтяжка',
        description:
          'Профессиональные операции по увеличению, уменьшению и подтяжке груди с использованием премиальных имплантов.',
        longDescription:
          'Мы предлагаем полный спектр операций на груди: увеличение с премиальными имплантами Motiva или Mentor, уменьшение для улучшения комфорта и осанки, а также мастопексию для изменения формы без изменения объёма. Двухплоскостная установка имплантов обеспечивает наиболее естественный вид и ощущение, а каждый пациент проходит 3D-симуляцию до подтверждения выбора.',
        features: ['Премиальные импланты', 'Индивидуальный размер', 'Восстановление 7–10 дней'],
        stats: [
          { label: 'Восстановление', value: '7–10 дней' },
          { label: 'Длительность', value: '1,5–3 ч' },
          { label: 'Импланты', value: 'Motiva / Mentor' },
          { label: 'Проживание', value: '4–6 ночей' }
        ],
      }
    ]
  },
  beforeAfter: {
    badge: 'Реальные результаты',
    headline1: 'До и',
    headline2: 'После',
    subtitle:
      'Станьте свидетелем преобразований наших международных пациентов. Каждый результат — история возвращённой уверенности.',
    duration: 'Длительность',
    recovery: 'Восстановление',
    satisfaction: 'Удовлетворённость',
    dragHint: 'Тяните для сравнения',
    disclaimer:
      '* Все изображения представлены в иллюстративных целях. Индивидуальные результаты могут отличаться. Все процедуры выполняются сертифицированными специалистами.',
    cases: [
      {
        category: 'Ринопластика',
        label: 'Коррекция носа',
        description: 'Естественный, сбалансированный результат с применением закрытой ринопластики.'
      },
      {
        category: 'Пересадка волос',
        label: 'Восстановление FUE',
        description: '4 200 графтов, пересаженных методом DHI для максимальной плотности.'
      },
      {
        category: 'Голливудская улыбка',
        label: 'Фарфоровые виниры',
        description: '20 фарфоровых виниров E-Max для совершенной, сияющей улыбки.'
      },
      {
        category: 'Коррекция тела',
        label: 'Липосакция и BBL',
        description: 'Круговая липосакция с бразильской подтяжкой ягодиц для скульптурного силуэта.'
      }
    ]
  },
  doctors: {
    badge: 'Наша медицинская команда',
    headline1: '',
    headline2: 'Хирурги-специалисты',
    headline3: '',
    subtitle:
      'Каждая процедура доверена тщательно отобранному специалисту с международным обучением, сертификатами и безупречным послужным списком.',
    experience: 'лет опыта',
    cases: 'случаев',
    doctors: [
      {
        name: 'Д-р Айше Богатыр',
        specialty: 'Циркониевые коронки, ламинаты, All-on-4/6',
        experience: '12',
        education: 'Стамбульский университет · Венская стоматология'
      },
      {
        name: 'Д-р Фуркан Эрилли',
        specialty: 'Зубные импланты',
        experience: '8',
        education: 'Мраморный университет · Берлин Шарите'
      },
      {
        name: 'Д-р Эмре Кайя',
        specialty: 'Коррекция тела и BBL',
        experience: '15',
        education: 'Анкарский университет · Джонс Хопкинс'
      },
      {
        name: 'Д-р Мехмет Йиит Озгюр',
        specialty: 'Лечение каналов, чистка и отбеливание',
        experience: '10',
        education: 'Университет Хасеттепе · Лондон KCL'
      },
      {
        name: 'Д-р Ахмет Келеш',
        specialty: 'Ринопластика',
        experience: '15',
        education: 'Стамбульский университет · Венская AKH'
      },
      {
        name: 'Д-р Бюшра Чаирыджи',
        specialty: 'Циркониевые коронки, ламинаты, All-on-4/6',
        experience: '7',
        education: 'Анкарский университет · Мадрид Комплутенсе'
      },
      {
        name: 'Д-р Эткин Джан Угурлу',
        specialty: 'Пломбирование, лечение каналов, чистка и отбеливание',
        experience: '9',
        education: 'Университет Эге · Парижская APHP'
      },
      {
        name: 'Д-р Тарык Йылдыз',
        specialty: 'Дерматология и восстановление волос',
        experience: '9',
        education: 'Мраморный университет · Лондон UCL'
      }
    ]
  },
  contact: {
    badge: 'Свяжитесь с нами',
    headline1: 'Начните своё',
    headline2: 'VIP-путешествие',
    subtitle:
      'Наши координаторы по работе с пациентами доступны 24/7 для ответов на ваши вопросы и составления персонального пакета лечения.',
    form: {
      name: 'Полное имя',
      namePlaceholder: 'Иван Иванов',
      email: 'Адрес электронной почты',
      emailPlaceholder: 'ivan@example.com',
      phone: 'Телефон / WhatsApp',
      phonePlaceholder: '+7 (xxx) xxx xx xx',
      country: 'Страна проживания',
      countryPlaceholder: 'Россия',
      treatment: 'Желаемая процедура',
      treatmentPlaceholder: 'Выберите процедуру...',
      message: 'Дополнительные сведения',
      messagePlaceholder:
        'Расскажите о своих ожиданиях, медицинской истории или конкретных вопросах...',
      privacy:
        'Ваши данные полностью конфиденциальны и используются исключительно для подготовки персонального предложения по лечению. Мы никогда не передаём данные пациентов.',
      submit: 'Отправить VIP-запрос',
      successTitle: 'Запрос получен!',
      successMessage:
        'Ваш личный координатор по работе с пациентами свяжется с вами в течение 2 часов с индивидуальным планом лечения.',
      successRetry: 'Отправить ещё один запрос'
    },
    treatments: [
      'Ринопластика (коррекция носа)',
      'Пересадка волос (FUE/DHI)',
      'Голливудская улыбка / виниры',
      'Липосакция и коррекция тела',
      'Бразильская подтяжка ягодиц (BBL)',
      'Лифтинг лица и коррекция век',
      'Увеличение / подтяжка груди',
      'Абдоминопластика',
      'Зубные импланты',
      'Другое / Общий вопрос'
    ],
    infoPhone: { label: 'Телефон / WhatsApp', sub: 'Доступно 24/7' },
    infoEmail: { label: 'Электронная почта', sub: 'Ответ в течение 2 часов' },
    infoLocation: { label: 'Расположение', sub: 'Рядом с Шишли / Меджидиекёй' },
    languagesTitle: 'Мы говорим на вашем языке',
    responseValue: '< 2 часов',
    responseLabel: 'Среднее время ответа',
    responseSub: 'Пн–Вс, включая выходные и праздники'
  },
  footer: {
    tagline:
      'Ведущий консьерж медицинского туризма в Стамбуле. Мы соединяем международных пациентов с врачами мирового класса через безупречный роскошный опыт.',
    treatmentsTitle: 'Процедуры',
    servicesTitle: 'Услуги',
    companyTitle: 'Компания',
    copyright: 'Prime Clinic Стамбул. Все права защищены.',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    cookies: 'Политика использования файлов cookie'
  }
}

const ar: Translations = {
  nav: {
    home: 'الرئيسية',
    treatments: 'العلاجات',
    process: 'عمليتنا',
    results: 'النتائج',
    doctors: 'الأطباء',
    cta: 'استشارة مجانية',
    phone: '+90 212 000 00 00'
  },
  hero: {
    badge: 'السياحة الطبية الفاخرة · إسطنبول، تركيا',
    headline1: 'رحلتك الصحية الفاخرة',
    headline2: 'تبدأ في إسطنبول',
    words: ['التميّز.', 'الدقة.', 'التحول.', 'الثقة.'],
    subtitle:
      'من نقل VIP المطار إلى أبرز الجراحين العالميين — نُنسّق رحلتك الطبية كاملةً بأرقى مستويات الفخامة والخصوصية والخبرة.',
    cta1: 'طلب استشارة VIP',
    cta2: 'استكشف علاجاتنا',
    stats: {
      patients: 'مريض',
      countries: 'دولة',
      satisfaction: 'نسبة الرضا',
      experience: 'سنوات خبرة'
    }
  },
  process: {
    badge: 'رحلتك',
    headline1: '',
    headline2: 'تجربة VIP الفاخرة',
    headline3: 'من الوصول إلى النتائج',
    subtitle:
      'تتولى فريقنا تنسيق كل تفاصيل رحلتك الطبية حتى تتفرغ تمامًا لتحولك.',
    steps: [
      {
        title: 'استقبال VIP في المطار',
        description:
          'يستقبلك كونسيرجك المخصص في مطار إسطنبول بسيارة مرسيدس S-Class الفاخرة وحزمة ترحيب شخصية.',
        detail: 'متابعة الرحلة • لوحة الاسم • خدمة الأمتعة'
      },
      {
        title: 'إقامة فندقية 5 نجوم',
        description:
          'نُرتّب إقامتك في أفخم فنادق إسطنبول البوتيكية، مع اختيار غرف مُحسَّنة لتعافيك بعد الإجراء.',
        detail: 'أجنحة بإطلالة البوسفور • خدمة غرف 24س • طقم وسائد طبية'
      },
      {
        title: 'استشارة متخصصة',
        description:
          'لقاء خاص مع جراحك المتخصص لإجراء فحص دقيق وتحليل الصور وإعداد خطة علاج مخصصة.',
        detail: 'تحليل دم كامل • تصوير ثلاثي الأبعاد • خطة جراحية مخصصة'
      },
      {
        title: 'إجراء على مستوى عالمي',
        description:
          'يُجرى إجراؤك في مستشفيات معتمدة دوليًا من قِبَل أبرز متخصصي تركيا دون أي تنازل في السلامة.',
        detail: 'معايير دولية • طبيب تخدير • تحديثات مباشرة للعائلة'
      },
      {
        title: 'جناح تعافٍ فاخر',
        description:
          'تتعافى في جناحك الخاص مع رعاية تمريضية مخصصة وزيارات يومية وجميع الأدوية ضمن الباقة.',
        detail: 'تمريض 24/7 • زيارة طبية يومية • علاج طبيعي خاص'
      },
      {
        title: 'عودة آمنة ورعاية ما بعد',
        description:
          'نقل VIP إلى المطار ومتابعة عن بُعد لمدة عام كامل مع فريقك الجراحي — نتائجك مسؤوليتنا.',
        detail: 'مرافقة للمطار • متابعة 12 شهرًا • خط طوارئ'
      }
    ],
    guarantee: [
      'باقة شاملة للجميع',
      'مستشفيات معتمدة JCI',
      'دعم المريض 24/7',
      'ضمان استرداد المال',
      'منسقون متعددو اللغات'
    ],
    step: 'خطوة'
  },
  treatments: {
    badge: 'تخصصاتنا',
    headline1: 'علاجات على',
    headline2: 'مستوى عالمي',
    subtitle:
      'يُجري كل إجراء متخصصون مرموقون في تركيا داخل مرافق معتمدة دوليًا — جمع بين الفن الجمالي والدقة الطبية.',
    ctaText: 'لم تجد ما تبحث عنه؟ نُرتّب أي إجراء طبي.',
    ctaButton: 'استفسر عن علاجك',
    learnMore: 'اعرف المزيد',
    included: 'ما يشمله الإجراء',
    highlights: 'أبرز مميزات الإجراء',
    quickFacts: 'معلومات سريعة',
    freeConsultation: 'استشارة مجانية',
    consultationDesc: 'احصل على عرض أسعار شخصي وخطة علاج من متخصصنا خلال ساعتين.',
    otherTreatments: 'علاجات أخرى',
    backTo: 'تخصصاتنا',
    recovery: 'التعافي',
    cards: [
      {
        category: 'جراحة الوجه',
        title: 'تجميل الأنف',
        subtitle: 'إعادة تشكيل الأنف',
        description:
          'جراحة دقيقة للأنف تجمع بين الرؤية الجمالية والتميز الطبي، تُجريها كوكبة الجراحين الأوائل في إسطنبول.',
        longDescription:
          'يجمع متخصصو تجميل الأنف لدينا بين الدقة الجراحية والنظرة الفنية لتحقيق نتائج تنسجم مع تشريح وجهك. باستخدام تقنيتي التجميل المفتوح والمغلق، نعالج التحسين الجمالي والتصحيح البنيوي وتحسين التنفس في إجراء واحد. يسبق كل جراحة محاكاة ثلاثية الأبعاد مفصّلة لتتمكن من تصور نتيجتك قبل إجراء أول شق.',
        features: ['نتائج طبيعية', 'ندوب دقيقة', 'تعافٍ 7–14 يومًا'],
        stats: [
          { label: 'التعافي', value: '7–14 يومًا' },
          { label: 'المدة', value: '2–3 ساعات' },
          { label: 'التخدير', value: 'عام' },
          { label: 'الإقامة', value: '5–7 ليالٍ' }
        ],
      },
      {
        category: 'زراعة الشعر',
        title: 'زراعة الشعر',
        subtitle: 'تقنية FUE / DHI',
        description:
          'أحدث تقنيات استخراج الوحدات الجريبية لنتائج دائمة وطبيعية المظهر في استعادة الشعر.',
        longDescription:
          'يستخدم فريق ترميم الشعر لدينا أحدث تقنيات FUE وDHI المتاحة، ويزرع الطعوم بالزاوية والكثافة المثلى لتتناسب مع نمط نمو شعرك الطبيعي. تقلل القنوات الدقيقة بشفرة الياقوت من الصدمة، بينما يسرّع علاج PRP الشفاء ويزيد من نسبة نجاة الطعوم. والنتيجة خط شعر طبيعي لا يمكن تمييزه عن شعرك الأصلي.',
        features: ['طريقتا FUE و DHI', 'نتائج مدى الحياة', 'تعافٍ 3–5 أيام'],
        stats: [
          { label: 'التعافي', value: '3–5 أيام' },
          { label: 'المدة', value: '6–8 ساعات' },
          { label: 'الطعوم', value: 'حتى 5,000' },
          { label: 'الإقامة', value: '3–4 ليالٍ' }
        ],
      },
      {
        category: 'نحت الجسم',
        title: 'شفط الدهون والـ BBL',
        subtitle: 'تشكيل الجسم',
        description:
          'إجراءات متقدمة لتشكيل الجسم لنحت قوامك المثالي بدقة عالية وأدنى وقت توقف.',
        longDescription:
          'يتيح شفط الدهون بمساعدة الموجات فوق الصوتية VASER لجراحينا نحت الجسم بدقة لا مثيل لها، مع استهداف ترسبات الدهون العنيدة والحفاظ على الأنسجة المحيطة. ثم يُنقل الدهن المُنقى بشكل استراتيجي لإنشاء منحنيات طبيعية دائمة. يدعم برنامج الملابس الضاغطة المخصصة نتيجتك في كل مرحلة من مراحل التعافي.',
        features: ['نحت 360°', 'شفط HD', 'تعافٍ 10–14 يومًا'],
      },
      {
        category: 'تجميل الأسنان',
        title: 'ابتسامة هوليوود',
        subtitle: 'قشور وزراعة أسنان',
        description:
          'حوّل ابتسامتك بقشور خزفية فاخرة وزراعات أسنان مُصنوعة من قِبَل خبراء التعويضات الأسنانية.',
        longDescription:
          'يصمم أخصائيو التعويضات الأسنانية لدينا ابتسامتك باستخدام برنامج تصوير رقمي متقدم وتصميم الابتسامة قبل البدء بأي تحضير. تحافظ قشور E-Max الخزفية فائقة الرقة بسماكة 0.3 ملم على أقصى قدر من بنية الأسنان الطبيعية مع تحقيق نتيجة مضيئة ومتماثلة تمامًا. وتتيح تقنية CEREC إتمام حالات الزراعة في زيارة واحدة في أغلب الأحيان.',
        features: ['قشور E-Max', 'تيجان في يوم واحد', 'علاج 5–7 أيام'],
      },
      {
        category: 'تجديد الوجه',
        title: 'شد الوجه والجفون',
        subtitle: 'جراحة التجديد',
        description:
          'تجديد متطور للوجه يُعيد ملامح الشباب عبر تقنيات طفيفة التوغل.',
        longDescription:
          'يعالج شد الوجه العميق الطبقات الهيكلية الأعمق للوجه، ما يُعطي نتائج أكثر وضوحًا وأطول أمدًا من التقنيات التقليدية وتمتد عادةً من 10 إلى 15 عامًا. تُدمج جراحة الجفون بعناية عند الحاجة لإزالة الجلد الزائد وإعادة تموضع وسائد الدهون لاستعادة مظهر مرتاح وشبابي دون مظهر مجري عليه عملية.',
        features: ['رفع طبيعي', 'بدون ندوب ظاهرة', 'تعافٍ 10–14 يومًا'],
      },
      {
        category: 'تجميل الصدر',
        title: 'جراحة الثدي',
        subtitle: 'تكبير ورفع',
        description:
          'عمليات احترافية لتكبير وتصغير ورفع الثدي باستخدام غرسات فاخرة وتقنيات متطورة.',
        longDescription:
          'نُقدّم الطيف الكامل لجراحة الثدي: التكبير بغرسات Motiva أو Mentor المتميزة، والتصغير لتحسين الراحة والقوام، والمستوبكسي لإعادة التشكيل دون تغيير الحجم. يُوفّر وضع الغرسة ثنائية المستوى أكثر ملمس وملمح طبيعيين، ويحصل كل مريض على جلسة محاكاة ثلاثية الأبعاد مخصصة قبل تأكيد اختيار الحجم والشكل.',
        features: ['غرسات فاخرة', 'مقاسات مخصصة', 'تعافٍ 7–10 أيام'],
      }
    ]
  },
  beforeAfter: {
    badge: 'نتائج حقيقية',
    headline1: 'قبل',
    headline2: 'وبعد',
    subtitle:
      'شاهد التحولات التي غيّرت حياة مرضانا الدوليين. كل نتيجة تحكي قصة ثقة مُستعادة.',
    duration: 'المدة',
    recovery: 'التعافي',
    satisfaction: 'الرضا',
    dragHint: 'اسحب للمقارنة',
    disclaimer:
      '* جميع الصور معروضة لأغراض توضيحية. قد تختلف النتائج الفردية. تُجرى جميع الإجراءات من قِبَل متخصصين معتمدين.',
    cases: [
      {
        category: 'تجميل الأنف',
        label: 'إعادة تشكيل الأنف',
        description: 'نتيجة طبيعية ومتوازنة تحققت بتقنية تجميل الأنف المغلقة.'
      },
      {
        category: 'زراعة الشعر',
        label: 'ترميم شعر FUE',
        description: '4,200 طعم مُزروع بتقنية DHI لأقصى كثافة ممكنة.'
      },
      {
        category: 'ابتسامة هوليوود',
        label: 'قشور خزفية',
        description: '20 قشرة خزفية E-Max لابتسامة مثالية ومشرقة.'
      },
      {
        category: 'نحت الجسم',
        label: 'شفط دهون والـ BBL',
        description: 'شفط دهون 360° مع رفع البرازيلي للحصول على قوام منحوت.'
      }
    ]
  },
  doctors: {
    badge: 'فريقنا الطبي',
    headline1: 'الجراحون',
    headline2: 'المتخصصون',
    headline3: '',
    subtitle:
      'كل إجراء مُسنَد إلى متخصص مُختار بعناية ذي تدريب دولي وشهادات معتمدة وسجل حافل بالتميز.',
    experience: 'سنوات خبرة',
    cases: 'حالة',
    doctors: [
      {
        name: 'د. آيشه بوغاتير',
        specialty: 'زركونيا، لامينيت، All-on-4، All-on-6',
        experience: '12',
        education: 'جامعة إسطنبول · طب أسنان فيينا'
      },
      {
        name: 'ط. فوركان إريللي',
        specialty: 'زراعة الأسنان',
        experience: '8',
        education: 'جامعة مرمرة · برلين شاريتيه'
      },
      {
        name: 'د. إمري كايا',
        specialty: 'نحت الجسم والـ BBL',
        experience: '15',
        education: 'جامعة أنقرة · جونز هوبكينز'
      },
      {
        name: 'ط. محمت يغيت أوزغور',
        specialty: 'علاج جذور الأسنان وتنظيف وتبييض الأسنان',
        experience: '10',
        education: 'جامعة هاجيتيبي · لندن KCL'
      },
      {
        name: 'د. أحمد كيليش',
        specialty: 'تجميل الأنف',
        experience: '15',
        education: 'جامعة إسطنبول · AKH فيينا'
      },
      {
        name: 'ط. بشرى جاغيرجي',
        specialty: 'زركونيا، لامينيت، All-on-4، All-on-6',
        experience: '7',
        education: 'جامعة أنقرة · مدريد كومبلوتنسه'
      },
      {
        name: 'ط. إتكين جان أوغورلو',
        specialty: 'حشوات وعلاج الجذور والتنظيف والتبييض',
        experience: '9',
        education: 'جامعة إيجه · APHP باريس'
      },
      {
        name: 'د. طارق يلدز',
        specialty: 'الأمراض الجلدية وترميم الشعر',
        experience: '9',
        education: 'جامعة مرمرة · لندن UCL'
      }
    ]
  },
  contact: {
    badge: 'تواصل معنا',
    headline1: 'ابدأ رحلتك',
    headline2: 'الفاخرة',
    subtitle:
      'منسقو المرضى لدينا متاحون على مدار الساعة طوال أيام الأسبوع للإجابة على استفساراتك وبناء باقة علاجك الشخصية.',
    form: {
      name: 'الاسم الكامل',
      namePlaceholder: 'محمد العلي',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'mohammed@example.com',
      phone: 'الهاتف / واتساب',
      phonePlaceholder: '+966 5xx xxx xxxx',
      country: 'بلد الإقامة',
      countryPlaceholder: 'المملكة العربية السعودية',
      treatment: 'العلاج المطلوب',
      treatmentPlaceholder: 'اختر علاجًا...',
      message: 'تفاصيل إضافية',
      messagePlaceholder:
        'أخبرنا عن توقعاتك أو أي تاريخ طبي أو أسئلة محددة...',
      privacy:
        'معلوماتك سرية بالكامل وتُستخدم فقط لإعداد عرض العلاج الشخصي الخاص بك. لا نشارك بيانات المرضى مطلقًا.',
      submit: 'إرسال طلب VIP',
      successTitle: 'تم استلام طلبك!',
      successMessage:
        'سيتواصل معك منسقك الشخصي خلال ساعتين بخطة علاج مخصصة.',
      successRetry: 'إرسال طلب آخر'
    },
    treatments: [
      'تجميل الأنف (الرينوبلاستي)',
      'زراعة الشعر (FUE/DHI)',
      'ابتسامة هوليوود / القشور الخزفية',
      'شفط الدهون ونحت الجسم',
      'رفع المؤخرة البرازيلي (BBL)',
      'شد الوجه وتجميل الجفون',
      'تكبير / رفع الثدي',
      'شد البطن (عملية ابدومينوبلاستي)',
      'زراعة الأسنان',
      'أخرى / استفسار عام'
    ],
    infoPhone: { label: 'الهاتف / واتساب', sub: 'متاح 24/7' },
    infoEmail: { label: 'البريد الإلكتروني', sub: 'رد خلال ساعتين' },
    infoLocation: { label: 'الموقع', sub: 'بالقرب من شيشلي / مجيدية كوي' },
    languagesTitle: 'نتحدث لغتك',
    responseValue: '< ساعتان',
    responseLabel: 'متوسط وقت الرد',
    responseSub: 'الاثنين–الأحد، بما في ذلك عطلات نهاية الأسبوع والأعياد'
  },
  footer: {
    tagline:
      'الكونسيرج الرائد للسياحة الطبية في إسطنبول. نربط المرضى الدوليين بالمتخصصين من الطراز الأول من خلال تجربة فاخرة لا مثيل لها.',
    treatmentsTitle: 'العلاجات',
    servicesTitle: 'الخدمات',
    companyTitle: 'الشركة',
    copyright: 'برايم كلينيك إسطنبول. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    cookies: 'سياسة ملفات تعريف الارتباط'
  }
}

export const translations: Record<Language, Translations> = { en, tr, ru, ar }


