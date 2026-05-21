import type { Metadata } from 'next'
import LegalLayout, { type LegalContent } from '@/components/blocks/legal/legal-layout'

export const metadata: Metadata = { title: 'Terms of Service' }

const content: Record<string, LegalContent> = {
  en: {
    title: 'Terms of Service',
    subtitle: 'Please read these terms carefully before using our services.',
    lastUpdated: 'Last updated: May 2026',
    sections: [
      {
        heading: '1. About Prime Clinic Istanbul',
        body: 'Prime Clinic Istanbul is a health tourism facilitation company registered in Turkey. We connect international patients with licensed medical professionals, accredited hospitals and specialist clinics in Istanbul. We do not directly employ surgeons or provide medical treatment.'
      },
      {
        heading: '2. Medical Disclaimer',
        body: [
          'All medical procedures are performed by independently licensed surgeons and medical specialists.',
          'Prime Clinic Istanbul acts solely as a coordination and concierge service.',
          'We do not provide medical advice. Information on our website is for general purposes only and does not constitute a diagnosis or treatment recommendation.',
          'Final clinical decisions rest exclusively with the treating physician.',
        ]
      },
      {
        heading: '3. Consultations & Pricing',
        body: [
          'Treatment quotes provided are initial estimates based on information shared prior to consultation.',
          'Final pricing is confirmed in writing after an in-person or video consultation with the specialist.',
          'Prices may vary based on individual clinical assessment, additional diagnostics or complications identified during examination.',
          'All prices include the services explicitly listed in your personalised package. Ancillary costs (e.g. flights, additional tests) are not included unless stated.',
        ]
      },
      {
        heading: '4. Booking & Payment',
        body: [
          'A reservation deposit may be required to confirm your procedure date and accommodation.',
          'Payment terms and accepted methods will be communicated in your personalised proposal.',
          'All transactions are conducted in Turkish Lira or the currency stated in your proposal.',
        ]
      },
      {
        heading: '5. Cancellation & Refund Policy',
        body: [
          'Cancellations made more than 14 days before the scheduled procedure: full refund of any deposit paid.',
          'Cancellations 7–14 days before: 50% of the deposit is retained as an administrative fee.',
          'Cancellations within 7 days: deposit is non-refundable.',
          'Cancellations due to medical unsuitability confirmed by our specialist are fully refundable.',
          'Refunds are processed within 10 business days.',
        ]
      },
      {
        heading: '6. Patient Responsibilities',
        body: [
          'You must disclose all relevant medical history, current medications and allergies accurately.',
          'You are responsible for ensuring you are medically fit to travel internationally.',
          'You must follow all pre- and post-operative instructions provided by the medical team.',
          'Prime Clinic Istanbul is not liable for complications arising from undisclosed medical conditions.',
        ]
      },
      {
        heading: '7. Limitation of Liability',
        body: 'Prime Clinic Istanbul\'s liability is limited to the coordination and facilitation fees paid. We are not liable for the clinical outcomes of medical procedures performed by partner surgeons or hospitals, travel disruptions, force majeure events or any indirect or consequential losses.'
      },
      {
        heading: '8. Intellectual Property',
        body: 'All content on this website — including text, images, logos and design — is the property of Prime Clinic Istanbul and may not be reproduced without written permission.'
      },
      {
        heading: '9. Governing Law & Dispute Resolution',
        body: 'These terms are governed by the laws of the Republic of Turkey. Any disputes shall be subject to the exclusive jurisdiction of the courts of Istanbul.'
      },
      {
        heading: '10. Changes to These Terms',
        body: 'We reserve the right to update these terms at any time. The latest version will always be available on this page. Continued use of our services after changes constitutes acceptance of the new terms.'
      }
    ]
  },
  tr: {
    title: 'Kullanım Koşulları',
    subtitle: 'Hizmetlerimizi kullanmadan önce lütfen bu koşulları dikkatlice okuyun.',
    lastUpdated: 'Son güncelleme: Mayıs 2026',
    sections: [
      {
        heading: '1. Prime Clinic İstanbul Hakkında',
        body: 'Prime Clinic İstanbul, Türkiye\'de kayıtlı bir sağlık turizmi kolaylaştırma şirketidir. Uluslararası hastaları İstanbul\'daki lisanslı tıp uzmanları, akrediteli hastaneler ve uzman kliniklerle buluşturuyoruz. Doğrudan cerrah istihdam etmiyor veya tıbbi tedavi sağlamıyoruz.'
      },
      {
        heading: '2. Tıbbi Sorumluluk Reddi',
        body: [
          'Tüm tıbbi prosedürler bağımsız lisanslı cerrahlar ve tıp uzmanları tarafından gerçekleştirilir.',
          'Prime Clinic İstanbul yalnızca koordinasyon ve danışmanlık hizmeti sunar.',
          'Tıbbi tavsiye vermiyoruz; web sitemizdeki bilgiler yalnızca genel amaçlıdır ve tanı veya tedavi önerisi teşkil etmez.',
          'Nihai klinik kararlar münhasıran tedavi eden hekime aittir.',
        ]
      },
      {
        heading: '3. Konsültasyon ve Fiyatlandırma',
        body: [
          'Sağlanan tedavi teklifleri, konsültasyon öncesinde paylaşılan bilgilere dayalı ilk tahminlerdir.',
          'Nihai fiyatlandırma, uzmanla yüz yüze veya video konsültasyonunun ardından yazılı olarak teyit edilir.',
          'Fiyatlar, bireysel klinik değerlendirme, ek tanı testleri veya muayene sırasında tespit edilen komplikasyonlara göre değişebilir.',
        ]
      },
      {
        heading: '4. İptal ve İade Politikası',
        body: [
          'Planlanmış prosedürden 14 günden fazla önce yapılan iptaller: ödenen depozitoin tam iadesi.',
          '7–14 gün önce yapılan iptaller: depozitoin %50\'si idari ücret olarak tutulur.',
          '7 gün içinde yapılan iptaller: depozito iade edilmez.',
          'Uzmanımız tarafından teyit edilen tıbbi uygunsuzluk nedeniyle yapılan iptaller tam iade kapsamındadır.',
          'İadeler 10 iş günü içinde işleme alınır.',
        ]
      },
      {
        heading: '5. Hasta Sorumlulukları',
        body: [
          'Tüm ilgili tıbbi geçmişinizi, mevcut ilaçlarınızı ve alerjilerinizi doğru şekilde bildirmeniz gerekmektedir.',
          'Uluslararası seyahat için tıbbi açıdan uygun olduğunuzdan emin olmak sizin sorumluluğunuzdadır.',
          'Tıbbi ekip tarafından verilen ameliyat öncesi ve sonrası talimatların tamamına uymanız zorunludur.',
        ]
      },
      {
        heading: '6. Sorumluluğun Sınırlandırılması',
        body: 'Prime Clinic İstanbul\'un sorumluluğu, ödenen koordinasyon ve hizmet ücretleriyle sınırlıdır. Ortak cerrahlar veya hastaneler tarafından gerçekleştirilen tıbbi prosedürlerin klinik sonuçlarından, seyahat aksaklıklarından veya mücbir sebepler nedeniyle yaşanan kayıplardan sorumlu tutulamayız.'
      },
      {
        heading: '7. Uygulanacak Hukuk ve Uyuşmazlık Çözümü',
        body: 'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Tüm uyuşmazlıklar İstanbul mahkemelerinin münhasır yargı yetkisi altındadır.'
      },
      {
        heading: '8. Değişiklikler',
        body: 'Bu koşulları istediğimiz zaman güncelleme hakkımız saklıdır. Güncel versiyon her zaman bu sayfada yayımlanacaktır. Değişiklikler sonrası hizmetlerimizi kullanmaya devam etmeniz yeni koşulları kabul ettiğiniz anlamına gelir.'
      }
    ]
  },
  ru: {
    title: 'Условия использования',
    subtitle: 'Пожалуйста, внимательно прочитайте эти условия перед использованием наших услуг.',
    lastUpdated: 'Последнее обновление: май 2026 г.',
    sections: [
      {
        heading: '1. О Prime Clinic Istanbul',
        body: 'Prime Clinic Istanbul — компания медицинского туризма, зарегистрированная в Турции. Мы связываем международных пациентов с лицензированными врачами, аккредитованными больницами и специализированными клиниками Стамбула. Мы не являемся прямым работодателем хирургов и не оказываем медицинских услуг напрямую.'
      },
      {
        heading: '2. Медицинская оговорка',
        body: [
          'Все медицинские процедуры выполняются независимыми лицензированными хирургами и специалистами.',
          'Prime Clinic Istanbul действует исключительно как координационный и консьерж-сервис.',
          'Информация на сайте носит общий характер и не является медицинским советом, диагнозом или рекомендацией по лечению.',
        ]
      },
      {
        heading: '3. Консультации и ценообразование',
        body: [
          'Предоставляемые котировки являются предварительными оценками на основе первоначально предоставленной информации.',
          'Окончательная стоимость подтверждается письменно после очной или видеоконсультации со специалистом.',
          'Цены могут варьироваться по результатам клинической оценки или дополнительных обследований.',
        ]
      },
      {
        heading: '4. Отмена и возврат средств',
        body: [
          'Отмена более чем за 14 дней до процедуры: полный возврат депозита.',
          'Отмена за 7–14 дней: 50% депозита удерживается в качестве административного сбора.',
          'Отмена менее чем за 7 дней: депозит не возвращается.',
          'Отмена по медицинским показаниям, подтверждённым специалистом: полный возврат.',
        ]
      },
      {
        heading: '5. Ограничение ответственности',
        body: 'Ответственность Prime Clinic Istanbul ограничена суммой уплаченных координационных сборов. Мы не несём ответственности за клинические результаты процедур, выполненных партнёрскими хирургами, перебои в поездках или форс-мажорные обстоятельства.'
      },
      {
        heading: '6. Применимое право',
        body: 'Настоящие условия регулируются законодательством Турецкой Республики. Все споры подлежат рассмотрению судами Стамбула.'
      }
    ]
  },
  ar: {
    title: 'شروط الخدمة',
    subtitle: 'يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.',
    lastUpdated: 'آخر تحديث: مايو 2026',
    sections: [
      {
        heading: '١. عن برايم كلينيك إسطنبول',
        body: 'برايم كلينيك إسطنبول شركة تيسير سياحة طبية مسجلة في تركيا. نربط المرضى الدوليين بالمتخصصين الطبيين المرخصين والمستشفيات المعتمدة والعيادات المتخصصة في إسطنبول. لا نوظّف الجراحين مباشرة ولا نقدم علاجاً طبياً بصورة مباشرة.'
      },
      {
        heading: '٢. إخلاء المسؤولية الطبية',
        body: [
          'تُنفَّذ جميع الإجراءات الطبية من قِبَل جراحين ومتخصصين طبيين مرخصين بصورة مستقلة.',
          'تعمل برايم كلينيك إسطنبول بوصفها خدمة تنسيق وكونسيرج فحسب.',
          'المعلومات الواردة في موقعنا للأغراض العامة فقط ولا تشكّل تشخيصاً أو توصية علاجية.',
        ]
      },
      {
        heading: '٣. الاستشارات والتسعير',
        body: [
          'عروض الأسعار المقدَّمة تقديرات أولية بناءً على المعلومات المشتركة قبل الاستشارة.',
          'يُؤكَّد السعر النهائي كتابياً بعد الاستشارة الشخصية أو المرئية مع المتخصص.',
          'قد تتفاوت الأسعار بناءً على التقييم السريري الفردي أو الفحوصات الإضافية.',
        ]
      },
      {
        heading: '٤. سياسة الإلغاء والاسترداد',
        body: [
          'الإلغاء قبل أكثر من 14 يوماً من الإجراء: استرداد كامل للوديعة.',
          'الإلغاء قبل 7–14 يوماً: يُحتجَز 50% من الوديعة رسوماً إدارية.',
          'الإلغاء في غضون 7 أيام: الوديعة غير قابلة للاسترداد.',
          'الإلغاء بسبب عدم الملاءمة الطبية المؤكدة من متخصصنا: استرداد كامل.',
        ]
      },
      {
        heading: '٥. تحديد المسؤولية',
        body: 'تقتصر مسؤولية برايم كلينيك إسطنبول على رسوم التنسيق المدفوعة. لسنا مسؤولين عن النتائج السريرية للإجراءات التي يجريها الجراحون الشركاء، أو انقطاعات السفر، أو أحداث القوة القاهرة.'
      },
      {
        heading: '٦. القانون الحاكم',
        body: 'تخضع هذه الشروط لقوانين جمهورية تركيا. تختص محاكم إسطنبول بالنظر في أي نزاعات.'
      }
    ]
  }
}

export default function TermsPage() {
  return <LegalLayout content={content} />
}
