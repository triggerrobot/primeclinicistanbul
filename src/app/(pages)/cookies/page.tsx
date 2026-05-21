import type { Metadata } from 'next'
import LegalLayout, { type LegalContent } from '@/components/blocks/legal/legal-layout'

export const metadata: Metadata = { title: 'Cookie Policy' }

const content: Record<string, LegalContent> = {
  en: {
    title: 'Cookie Policy',
    subtitle: 'How we use cookies and similar technologies on our website.',
    lastUpdated: 'Last updated: May 2026',
    sections: [
      {
        heading: '1. What Are Cookies?',
        body: 'Cookies are small text files placed on your device when you visit our website. They help us deliver a consistent experience, remember your preferences and understand how visitors interact with our content.'
      },
      {
        heading: '2. Essential Cookies',
        body: [
          'Required for the website to function correctly.',
          'Enable core features such as page navigation, language preferences and security.',
          'These cookies cannot be disabled as they are strictly necessary.',
          'No personal data is transmitted to third parties via essential cookies.',
        ]
      },
      {
        heading: '3. Analytics Cookies (Google Analytics 4)',
        body: [
          'We use Google Analytics (GA4) to understand how visitors use our website.',
          'Data collected includes: pages viewed, session duration, device type and approximate location (country/city level).',
          'All data is anonymised — IP addresses are truncated before processing.',
          'You can opt out via the Google Analytics opt-out browser add-on: tools.google.com/dlpage/gaoptout.',
        ]
      },
      {
        heading: '4. Preference Cookies',
        body: [
          'Store your language selection (English, Turkish, Russian or Arabic) so you see the site in your preferred language on return visits.',
          'Stored locally in your browser\'s localStorage under the key "prime-clinic-lang".',
          'These cookies contain no personally identifiable information.',
        ]
      },
      {
        heading: '5. Third-Party Cookies',
        body: [
          'WhatsApp Chat: when you use our WhatsApp links, WhatsApp may set its own cookies. Please refer to Meta\'s privacy policy.',
          'Google Analytics: governed by Google\'s Privacy Policy (policies.google.com/privacy).',
          'We do not use any advertising, remarketing or social media tracking cookies.',
        ]
      },
      {
        heading: '6. Managing & Disabling Cookies',
        body: [
          'You can control and delete cookies through your browser settings.',
          'Chrome: Settings → Privacy and Security → Cookies and other site data.',
          'Firefox: Settings → Privacy & Security → Cookies and Site Data.',
          'Safari: Preferences → Privacy → Manage Website Data.',
          'Disabling analytics cookies will not affect website functionality.',
        ]
      },
      {
        heading: '7. Changes to This Policy',
        body: 'We may update this Cookie Policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of the website after updates constitutes acceptance of the revised policy.'
      },
      {
        heading: '8. Contact',
        body: 'For any questions about our use of cookies, contact us via WhatsApp: +90 535 915 6434.'
      }
    ]
  },
  tr: {
    title: 'Çerez Politikası',
    subtitle: 'Web sitemizde çerezleri ve benzer teknolojileri nasıl kullandığımız.',
    lastUpdated: 'Son güncelleme: Mayıs 2026',
    sections: [
      {
        heading: '1. Çerez Nedir?',
        body: 'Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır. Tutarlı bir deneyim sunmamıza, tercihlerinizi hatırlamamıza ve ziyaretçilerin içeriğimizle nasıl etkileşime geçtiğini anlamamıza yardımcı olurlar.'
      },
      {
        heading: '2. Zorunlu Çerezler',
        body: [
          'Web sitesinin doğru çalışması için gereklidir.',
          'Sayfa gezintisi, dil tercihleri ve güvenlik gibi temel işlevleri etkinleştirir.',
          'Kesinlikle gerekli oldukları için devre dışı bırakılamazlar.',
          'Zorunlu çerezler aracılığıyla üçüncü taraflara kişisel veri iletilmez.',
        ]
      },
      {
        heading: '3. Analitik Çerezler (Google Analytics 4)',
        body: [
          'Ziyaretçilerin sitemizi nasıl kullandığını anlamak için Google Analytics (GA4) kullanıyoruz.',
          'Toplanan veriler: görüntülenen sayfalar, oturum süresi, cihaz türü ve yaklaşık konum (ülke/şehir düzeyi).',
          'Tüm veriler anonimleştirilmiştir — IP adresleri işlenmeden önce kısaltılır.',
          'Google Analytics devre dışı bırakma eklentisi ile çıkış yapabilirsiniz: tools.google.com/dlpage/gaoptout.',
        ]
      },
      {
        heading: '4. Tercih Çerezleri',
        body: [
          'Dil seçiminizi (Türkçe, İngilizce, Rusça veya Arapça) kaydeder; böylece sonraki ziyaretlerde sitenin tercih ettiğiniz dilde görünmesini sağlar.',
          '"prime-clinic-lang" anahtarıyla tarayıcınızın localStorage\'ında saklanır.',
          'Bu çerezler kişisel olarak tanımlanabilir bilgi içermez.',
        ]
      },
      {
        heading: '5. Üçüncü Taraf Çerezleri',
        body: [
          'WhatsApp Bağlantıları: WhatsApp linklerini kullandığınızda WhatsApp kendi çerezlerini yerleştirebilir. Meta\'nın gizlilik politikasına bakınız.',
          'Google Analytics: Google Gizlilik Politikası\'na (policies.google.com/privacy) tabidir.',
          'Reklam, yeniden hedefleme veya sosyal medya izleme çerezi kullanmıyoruz.',
        ]
      },
      {
        heading: '6. Çerezlerin Yönetimi ve Devre Dışı Bırakılması',
        body: [
          'Çerezleri tarayıcı ayarlarınız aracılığıyla kontrol edip silebilirsiniz.',
          'Chrome: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve diğer site verileri.',
          'Firefox: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri.',
          'Safari: Tercihler → Gizlilik → Web Sitesi Verilerini Yönet.',
          'Analitik çerezlerin devre dışı bırakılması web sitesi işlevselliğini etkilemez.',
        ]
      },
      {
        heading: '7. İletişim',
        body: 'Çerez kullanımımıza ilişkin sorularınız için WhatsApp: +90 535 915 6434.'
      }
    ]
  },
  ru: {
    title: 'Политика использования файлов cookie',
    subtitle: 'Как мы используем файлы cookie и аналогичные технологии на нашем сайте.',
    lastUpdated: 'Последнее обновление: май 2026 г.',
    sections: [
      {
        heading: '1. Что такое файлы cookie?',
        body: 'Файлы cookie — это небольшие текстовые файлы, размещаемые на вашем устройстве при посещении нашего сайта. Они помогают нам обеспечить стабильный опыт, запомнить ваши предпочтения и понять, как посетители взаимодействуют с контентом.'
      },
      {
        heading: '2. Обязательные файлы cookie',
        body: [
          'Необходимы для корректной работы сайта.',
          'Обеспечивают навигацию, языковые предпочтения и безопасность.',
          'Не могут быть отключены, так как являются строго необходимыми.',
        ]
      },
      {
        heading: '3. Аналитические файлы cookie (Google Analytics 4)',
        body: [
          'Мы используем Google Analytics (GA4) для анализа посещаемости сайта.',
          'Собираемые данные: просмотренные страницы, длительность сессии, тип устройства, приблизительное местоположение.',
          'Все данные анонимизированы — IP-адреса усекаются до обработки.',
        ]
      },
      {
        heading: '4. Файлы cookie предпочтений',
        body: [
          'Сохраняют ваш выбор языка (русский, английский, турецкий или арабский) в localStorage браузера.',
          'Не содержат личных данных.',
        ]
      },
      {
        heading: '5. Управление файлами cookie',
        body: [
          'Вы можете управлять файлами cookie в настройках браузера.',
          'Отключение аналитических cookie не влияет на функциональность сайта.',
        ]
      },
      {
        heading: '6. Контакты',
        body: 'По вопросам использования файлов cookie: WhatsApp +90 535 915 6434.'
      }
    ]
  },
  ar: {
    title: 'سياسة ملفات تعريف الارتباط',
    subtitle: 'كيف نستخدم ملفات تعريف الارتباط والتقنيات المشابهة على موقعنا.',
    lastUpdated: 'آخر تحديث: مايو 2026',
    sections: [
      {
        heading: '١. ما هي ملفات تعريف الارتباط؟',
        body: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة تُوضَع على جهازك عند زيارة موقعنا. تساعدنا في تقديم تجربة متسقة وتذكّر تفضيلاتك وفهم كيفية تفاعل الزوار مع محتوانا.'
      },
      {
        heading: '٢. ملفات تعريف الارتباط الأساسية',
        body: [
          'ضرورية لعمل الموقع بشكل صحيح.',
          'تُمكّن التنقل وتفضيلات اللغة والأمان.',
          'لا يمكن تعطيلها لأنها ضرورية تماماً.',
        ]
      },
      {
        heading: '٣. ملفات تعريف الارتباط التحليلية (Google Analytics 4)',
        body: [
          'نستخدم Google Analytics لفهم كيفية استخدام الزوار لموقعنا.',
          'البيانات المجمعة: الصفحات المعروضة، مدة الجلسة، نوع الجهاز، الموقع التقريبي.',
          'جميع البيانات مجهولة الهوية — يتم اقتطاع عناوين IP قبل المعالجة.',
        ]
      },
      {
        heading: '٤. ملفات تعريف ارتباط التفضيلات',
        body: [
          'تحفظ اختيارك للغة (العربية، الإنجليزية، التركية أو الروسية) في localStorage المتصفح.',
          'لا تحتوي على أي معلومات تعريفية شخصية.',
        ]
      },
      {
        heading: '٥. إدارة ملفات تعريف الارتباط',
        body: [
          'يمكنك التحكم في ملفات تعريف الارتباط وحذفها من إعدادات متصفحك.',
          'لن يؤثر تعطيل ملفات تعريف الارتباط التحليلية على وظائف الموقع.',
        ]
      },
      {
        heading: '٦. التواصل',
        body: 'لأي استفسارات حول استخدامنا لملفات تعريف الارتباط: تواصل عبر واتساب +90 535 915 6434.'
      }
    ]
  }
}

export default function CookiesPage() {
  return <LegalLayout content={content} />
}
