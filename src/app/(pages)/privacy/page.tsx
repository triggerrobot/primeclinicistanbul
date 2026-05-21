import type { Metadata } from 'next'
import LegalLayout, { type LegalContent } from '@/components/blocks/legal/legal-layout'

export const metadata: Metadata = { title: 'Privacy Policy' }

const content: Record<string, LegalContent> = {
  en: {
    title: 'Privacy Policy',
    subtitle: 'How Prime Clinic Istanbul collects, uses and protects your personal information.',
    lastUpdated: 'Last updated: May 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'Personal identifiers: full name, email address, phone number, nationality and country of residence.',
          'Health information you voluntarily share via our contact forms or direct communications, including desired treatment and relevant medical history.',
          'Technical data: IP address, browser type, pages visited and time spent on our website (collected via Google Analytics).',
        ]
      },
      {
        heading: '2. How We Use Your Information',
        body: [
          'To prepare a personalised treatment proposal and coordinate your medical journey.',
          'To communicate with you regarding appointments, procedures and aftercare.',
          'To improve our website and services based on anonymised usage statistics.',
          'To comply with legal obligations under Turkish law and applicable international regulations.',
        ]
      },
      {
        heading: '3. Legal Basis for Processing (GDPR)',
        body: 'Where you are an EU/EEA resident, we process your data on the basis of your explicit consent (Art. 6(1)(a) GDPR) and, where health data is involved, explicit consent under Art. 9(2)(a) GDPR. You may withdraw consent at any time without affecting the lawfulness of prior processing.'
      },
      {
        heading: '4. Turkish Data Protection Law (KVKK)',
        body: 'All data processing activities also comply with Turkish Law No. 6698 on the Protection of Personal Data. Prime Clinic Istanbul is registered as a data controller under KVKK. You have the right to apply to us to learn whether your data is processed, request information about it, and request correction or deletion.'
      },
      {
        heading: '5. Medical Data Confidentiality',
        body: 'Health-related information is treated with the highest level of confidentiality. It is shared exclusively with the licensed medical professionals and hospitals directly involved in your care, and only to the extent necessary for treatment planning and coordination.'
      },
      {
        heading: '6. Data Sharing & Third Parties',
        body: [
          'We do not sell, rent or trade your personal data to any third party.',
          'We may share data with partner hospitals and surgeons for treatment coordination purposes.',
          'Service providers (e.g. Google Analytics) process data on our behalf under data processing agreements.',
          'We may disclose data when required by law or court order.',
        ]
      },
      {
        heading: '7. Data Retention',
        body: 'We retain contact and consultation data for up to 3 years from your last interaction with us. Medical coordination records are retained for up to 10 years as required by Turkish health regulations. You may request earlier deletion where legally permissible.'
      },
      {
        heading: '8. Your Rights',
        body: [
          'Right to access: request a copy of the personal data we hold about you.',
          'Right to rectification: request correction of inaccurate or incomplete data.',
          'Right to erasure: request deletion of your data where there is no legitimate reason for continued processing.',
          'Right to restrict processing: request that we limit how we use your data.',
          'Right to data portability: receive your data in a structured, machine-readable format.',
          'Right to object: object to processing based on legitimate interests.',
          'To exercise any of these rights, contact us via WhatsApp at +90 535 915 6434.',
        ]
      },
      {
        heading: '9. Security',
        body: 'We implement appropriate technical and organisational measures to protect your data against unauthorised access, disclosure, alteration or destruction. All data transmissions are encrypted via TLS/HTTPS.'
      },
      {
        heading: '10. Contact',
        body: 'For any privacy-related enquiries or to exercise your rights, please contact us via WhatsApp: +90 535 915 6434.'
      }
    ]
  },
  tr: {
    title: 'Gizlilik Politikası',
    subtitle: 'Prime Clinic İstanbul\'un kişisel bilgilerinizi nasıl topladığı, kullandığı ve koruduğu.',
    lastUpdated: 'Son güncelleme: Mayıs 2026',
    sections: [
      {
        heading: '1. Topladığımız Bilgiler',
        body: [
          'Kişisel tanımlayıcılar: ad soyad, e-posta adresi, telefon numarası, uyruk ve ikamet ülkesi.',
          'İletişim formlarımız veya doğrudan iletişim yoluyla gönüllü olarak paylaştığınız sağlık bilgileri; istenen tedavi ve ilgili tıbbi geçmiş dahil.',
          'Teknik veriler: IP adresi, tarayıcı türü, ziyaret edilen sayfalar ve sitede geçirilen süre (Google Analytics aracılığıyla toplanır).',
        ]
      },
      {
        heading: '2. Bilgilerinizi Nasıl Kullanıyoruz',
        body: [
          'Kişiselleştirilmiş tedavi teklifi hazırlamak ve tıbbi yolculuğunuzu koordine etmek.',
          'Randevular, prosedürler ve sonrası bakım konusunda sizinle iletişim kurmak.',
          'Anonim kullanım istatistiklerine dayanarak web sitemizi ve hizmetlerimizi geliştirmek.',
          'Türk hukuku ve geçerli uluslararası düzenlemeler kapsamındaki yasal yükümlülükleri yerine getirmek.',
        ]
      },
      {
        heading: '3. KVKK Kapsamında Haklarınız',
        body: '6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme, eksik veya yanlış işlenmiş ise düzeltilmesini talep etme ve silinmesini talep etme haklarına sahipsiniz.'
      },
      {
        heading: '4. Sağlık Verilerinin Gizliliği',
        body: 'Sağlığa ilişkin bilgiler en yüksek gizlilik düzeyinde işlenir. Bu bilgiler yalnızca bakımınızla doğrudan ilgili lisanslı tıp uzmanları ve hastanelerle, yalnızca tedavi planlaması ve koordinasyonu için gerekli olduğu ölçüde paylaşılır.'
      },
      {
        heading: '5. Veri Paylaşımı ve Üçüncü Taraflar',
        body: [
          'Kişisel verilerinizi hiçbir üçüncü tarafa satmıyor, kiralamıyor veya ticaretini yapmıyoruz.',
          'Tedavi koordinasyonu amacıyla ortak hastaneler ve cerrahlarla veri paylaşılabilir.',
          'Hizmet sağlayıcılar (örn. Google Analytics) verilerinizi veri işleme sözleşmeleri kapsamında bizim adımıza işler.',
          'Yasal zorunluluk veya mahkeme kararı durumunda veri ifşa edilebilir.',
        ]
      },
      {
        heading: '6. Veri Saklama Süresi',
        body: 'İletişim ve danışma verileri, son etkileşim tarihinden itibaren 3 yıla kadar saklanır. Tıbbi koordinasyon kayıtları, Türk sağlık mevzuatının gerektirdiği şekilde 10 yıla kadar tutulur. Yasal olarak mümkün olduğu durumlarda daha erken silinmesini talep edebilirsiniz.'
      },
      {
        heading: '7. Güvenlik',
        body: 'Verilerinizi yetkisiz erişim, ifşa, değiştirme veya imhaya karşı korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Tüm veri iletişimleri TLS/HTTPS ile şifrelenmektedir.'
      },
      {
        heading: '8. İletişim',
        body: 'Gizlilikle ilgili sorularınız veya haklarınızı kullanmak için WhatsApp: +90 535 915 6434.'
      }
    ]
  },
  ru: {
    title: 'Политика конфиденциальности',
    subtitle: 'Как Prime Clinic Istanbul собирает, использует и защищает вашу личную информацию.',
    lastUpdated: 'Последнее обновление: май 2026 г.',
    sections: [
      {
        heading: '1. Собираемые данные',
        body: [
          'Личные идентификаторы: полное имя, адрес электронной почты, номер телефона, гражданство и страна проживания.',
          'Медицинская информация, которую вы добровольно предоставляете через формы обратной связи или в ходе общения, включая желаемое лечение и историю болезни.',
          'Технические данные: IP-адрес, тип браузера, посещённые страницы и время на сайте (через Google Analytics).',
        ]
      },
      {
        heading: '2. Использование данных',
        body: [
          'Подготовка персонального предложения по лечению и координация вашего медицинского путешествия.',
          'Общение с вами по вопросам записи, процедур и послеоперационного ухода.',
          'Улучшение сайта и сервисов на основе анонимизированной статистики.',
          'Соблюдение законодательства Турции и применимых международных норм.',
        ]
      },
      {
        heading: '3. Конфиденциальность медицинских данных',
        body: 'Информация о состоянии здоровья обрабатывается с максимальным уровнем конфиденциальности и передаётся исключительно лицензированным специалистам и клиникам, непосредственно участвующим в вашем лечении.'
      },
      {
        heading: '4. Передача данных третьим лицам',
        body: [
          'Мы не продаём и не сдаём в аренду ваши персональные данные.',
          'Данные могут передаваться клиникам-партнёрам и хирургам в целях координации лечения.',
          'Сервисы (Google Analytics и др.) обрабатывают данные в соответствии с соглашениями об обработке данных.',
          'Раскрытие данных возможно по требованию закона или суда.',
        ]
      },
      {
        heading: '5. Ваши права',
        body: [
          'Право на доступ, исправление и удаление ваших данных.',
          'Право на ограничение обработки и переносимость данных.',
          'Право на отзыв согласия в любое время.',
          'Для реализации прав обращайтесь через WhatsApp: +90 535 915 6434.',
        ]
      },
      {
        heading: '6. Безопасность',
        body: 'Мы применяем технические и организационные меры для защиты ваших данных. Все передачи данных шифруются по протоколу TLS/HTTPS.'
      },
      {
        heading: '7. Контакты',
        body: 'По вопросам конфиденциальности: WhatsApp +90 535 915 6434.'
      }
    ]
  },
  ar: {
    title: 'سياسة الخصوصية',
    subtitle: 'كيف تجمع برايم كلينيك إسطنبول معلوماتك الشخصية وتستخدمها وتحميها.',
    lastUpdated: 'آخر تحديث: مايو 2026',
    sections: [
      {
        heading: '١. المعلومات التي نجمعها',
        body: [
          'المعرّفات الشخصية: الاسم الكامل، البريد الإلكتروني، رقم الهاتف، الجنسية وبلد الإقامة.',
          'المعلومات الصحية التي تشاركها طوعاً عبر نماذج التواصل أو المراسلات المباشرة، بما في ذلك العلاج المطلوب والتاريخ الطبي ذو الصلة.',
          'البيانات التقنية: عنوان IP، نوع المتصفح، الصفحات المزارة والوقت المستغرق على الموقع (عبر Google Analytics).',
        ]
      },
      {
        heading: '٢. كيف نستخدم معلوماتك',
        body: [
          'إعداد عرض علاج مخصص وتنسيق رحلتك الطبية.',
          'التواصل معك بشأن المواعيد والإجراءات والرعاية اللاحقة.',
          'تحسين موقعنا وخدماتنا استناداً إلى إحصاءات مجهولة الهوية.',
          'الامتثال للالتزامات القانونية بموجب القانون التركي واللوائح الدولية المعمول بها.',
        ]
      },
      {
        heading: '٣. سرية البيانات الطبية',
        body: 'تُعالَج المعلومات الصحية بأعلى مستويات السرية، ولا تُشارَك إلا مع المتخصصين الطبيين المرخصين والمستشفيات المعنية مباشرة بعلاجك، وبالقدر الضروري لتخطيط العلاج وتنسيقه فحسب.'
      },
      {
        heading: '٤. مشاركة البيانات مع أطراف ثالثة',
        body: [
          'لا نبيع بياناتك الشخصية أو نؤجّرها لأي طرف ثالث.',
          'قد تُشارَك البيانات مع المستشفيات الشريكة والجراحين لأغراض تنسيق العلاج.',
          'يعالج مزودو الخدمات (مثل Google Analytics) البيانات نيابةً عنّا وفق اتفاقيات معالجة البيانات.',
          'قد يُكشَف عن البيانات عند الاقتضاء القانوني أو بأمر المحكمة.',
        ]
      },
      {
        heading: '٥. حقوقك',
        body: [
          'حق الوصول إلى نسخة من بياناتك الشخصية التي نحتفظ بها.',
          'حق التصحيح والحذف وتقييد المعالجة.',
          'حق سحب الموافقة في أي وقت.',
          'للاستفادة من هذه الحقوق: تواصل عبر واتساب +90 535 915 6434.',
        ]
      },
      {
        heading: '٦. الأمان',
        body: 'نتخذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك. تُشفَّر جميع عمليات نقل البيانات عبر بروتوكول TLS/HTTPS.'
      },
      {
        heading: '٧. التواصل',
        body: 'لأي استفسارات تتعلق بالخصوصية: تواصل عبر واتساب +90 535 915 6434.'
      }
    ]
  }
}

export default function PrivacyPage() {
  return <LegalLayout content={content} />
}
