import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  Factory,
  Handshake,
  HeartPulse,
  Hotel,
  MonitorCheck,
  ShieldCheck,
  ShieldUser,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

export const company = {
  name: "USR Özel Güvenlik",
  slogan: "Güvenliği Profesyonellere Bırakın.",
  phone: "0 535 082 84 60",
  phoneHref: "tel:+905350828460",
  whatsapp: "https://wa.me/905350828460",
  instagram: "https://www.instagram.com/usrozelguvenlik/",
  email: "bilgi@usrozelguvenlik.com",
  address:
    "Selahattin Pınar Caddesi No: 23/1 B Blok, Nilüfer Apartmanı, Daire 3, Mecidiyeköy - Şişli / İstanbul",
  shortAddress: "Mecidiyeköy - Şişli / İstanbul",
};

export const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "İletişim", href: "/iletisim" },
];

export const services = [
  {
    title: "Özel Güvenlik Hizmetleri",
    slug: "ozel-guvenlik-hizmetleri",
    image: "/images/services/ozel-guvenlik.jpg",
    icon: ShieldCheck,
    category: "Güvenlik",
    summary: "Kurumsal tesisler, yaşam alanları ve organizasyonlar için risk odaklı özel güvenlik operasyonları.",
    description:
      "USR Özel Güvenlik, kurumunuzun faaliyet yapısını, insan trafiğini, vardiya düzenini ve risk profilini analiz ederek ölçülebilir güvenlik planları oluşturur. Eğitimli ekiplerimiz, görünür caydırıcılığı profesyonel iletişimle birleştirir.",
    advantages: ["Risk analiziyle başlayan planlama", "Denetlenebilir vardiya ve raporlama", "Kurumsal temsil gücü yüksek ekipler", "7/24 operasyon koordinasyonu"],
    process: ["Keşif ve ihtiyaç analizi", "Güvenlik planı ve kadro kurgusu", "Personel seçimi ve saha eğitimi", "Canlı raporlama ve periyodik denetim"],
  },
  {
    title: "Silahlı Güvenlik",
    slug: "silahli-guvenlik",
    image: "/images/services/silahli-guvenlik.jpg",
    icon: ShieldUser,
    category: "Güvenlik",
    summary: "Yüksek riskli alanlar için mevzuata uygun, disiplinli ve deneyimli silahlı güvenlik personeli.",
    description:
      "Silahlı güvenlik hizmetlerimiz; banka, depo, stratejik tesis, değerli evrak ve kritik görev noktalarında yasal gerekliliklere uygun şekilde yürütülür. Personel seçimi, psikolojik uygunluk ve saha disiplini önceliklidir.",
    advantages: ["Mevzuata uygun görevlendirme", "Kritik tesis deneyimi", "Düzenli atış ve mevzuat eğitimleri", "Gizlilik ve disiplin standartları"],
    process: ["Risk ve izin uygunluğu kontrolü", "Görev tanımı netleştirme", "Silahlı personel ataması", "Denetim ve olay raporlama"],
  },
  {
    title: "Silahsız Güvenlik",
    slug: "silahsiz-guvenlik",
    image: "/images/services/silahsiz-guvenlik.jpg",
    icon: MonitorCheck,
    category: "Güvenlik",
    summary: "Giriş kontrolü, devriye, danışma ve kamera izleme süreçlerini kapsayan profesyonel güvenlik.",
    description:
      "Silahsız güvenlik ekiplerimiz, müşteri deneyimini bozmadan düzeni korur. Site, plaza, hastane, okul, otel ve etkinlik alanlarında iletişim becerisi yüksek personelle kesintisiz hizmet sağlarız.",
    advantages: ["Nazik ve net iletişim", "Ziyaretçi ve araç kontrolü", "Kamera izleme ve devriye takibi", "Esnek vardiya planı"],
    process: ["Lokasyon incelemesi", "Giriş-çıkış prosedürleri", "Personel görevlendirme", "Günlük raporlama"],
  },
  {
    title: "Site ve Residence Güvenliği",
    slug: "site-residence-guvenligi",
    image: "/images/services/site-residence-guvenligi.jpg",
    icon: Building2,
    category: "Güvenlik",
    summary: "Yaşam alanlarında sakin memnuniyetini, erişim kontrolünü ve düzenli devriyeyi bir araya getirir.",
    description:
      "Site ve residence güvenliğinde amaç yalnızca kontrol noktası kurmak değildir. USR, yönetim planına uyumlu, sakinlerle doğru iletişim kuran ve acil durumlara hazırlıklı ekipler görevlendirir.",
    advantages: ["Sakin odaklı iletişim", "Araç ve ziyaretçi yönetimi", "Ortak alan devriyeleri", "Acil durum prosedürleri"],
    process: ["Yönetim beklentilerinin alınması", "Nokta ve devriye planı", "Personel uyum eğitimi", "Aylık performans toplantısı"],
  },
  {
    title: "AVM Güvenliği",
    slug: "avm-guvenligi",
    image: "/images/services/avm-guvenligi.jpg",
    icon: Store,
    category: "Güvenlik",
    summary: "Yoğun ziyaretçi trafiğine sahip alışveriş merkezleri için görünür, koordineli ve hızlı güvenlik hizmeti.",
    description:
      "AVM güvenliği; ziyaretçi yönlendirme, mağaza destekleri, kayıp çocuk prosedürleri, acil tahliye ve kamera izleme gibi çok katmanlı süreçler gerektirir. USR bu yapıyı tek operasyon masasında yönetir.",
    advantages: ["Yoğun trafik yönetimi", "Mağaza ve yönetim koordinasyonu", "Acil tahliye hazırlığı", "Temsil kalitesi yüksek ekipler"],
    process: ["Alan ve risk haritalama", "Nokta görevleri", "Kriz senaryosu eğitimi", "Operasyon raporları"],
  },
  {
    title: "Fabrika Güvenliği",
    slug: "fabrika-guvenligi",
    image: "/images/services/fabrika-guvenligi.jpg",
    icon: Factory,
    category: "Güvenlik",
    summary: "Üretim tesisleri, depolar ve lojistik alanlar için giriş, çevre ve sevkiyat güvenliği.",
    description:
      "Fabrika güvenliği, üretim sürekliliğini koruyan kritik bir fonksiyondur. Personel girişleri, ziyaretçi yönetimi, araç kontrolü, çevre devriyesi ve sevkiyat kayıtları disiplinli şekilde yürütülür.",
    advantages: ["Sevkiyat ve araç kontrolü", "Çevre devriye planları", "Vardiyalı üretime uyum", "Endüstriyel saha deneyimi"],
    process: ["Üretim akışı analizi", "Kontrol noktası tasarımı", "Vardiya ve devriye planı", "Kayıt ve denetim düzeni"],
  },
  {
    title: "Hastane Güvenliği",
    slug: "hastane-guvenligi",
    image: "/images/services/hastane-guvenligi.jpg",
    icon: HeartPulse,
    category: "Güvenlik",
    summary: "Hasta, ziyaretçi ve sağlık personeli güvenliğini önceliklendiren hassas güvenlik organizasyonu.",
    description:
      "Hastane güvenliği, empati ve kontrol dengesini gerektirir. USR ekipleri hasta yakınlarıyla iletişim, acil servis yoğunluğu, gece devriyeleri ve kriz anlarında hızlı koordinasyon için özel hazırlanır.",
    advantages: ["Empatik iletişim eğitimi", "Acil servis ve yoğun alan deneyimi", "Ziyaretçi kontrol prosedürleri", "Kriz yönetimi desteği"],
    process: ["Hastane akış analizi", "Hassas alanların belirlenmesi", "Ekip eğitimleri", "Anlık olay raporlama"],
  },
  {
    title: "Etkinlik ve Organizasyon Güvenliği",
    slug: "etkinlik-organizasyon-guvenligi",
    image: "/images/services/etkinlik-guvenligi.jpg",
    icon: CalendarCheck,
    category: "Organizasyon",
    summary: "Konser, fuar, lansman, konferans ve özel davetlerde planlı, görünür ve kontrollü güvenlik.",
    description:
      "Etkinliklerde güvenlik, misafir deneyiminin ayrılmaz parçasıdır. Giriş kontrolü, alan yönlendirme, sahne arkası güvenliği ve VIP geçişleri tek operasyon planıyla koordine edilir.",
    advantages: ["Kalabalık yönetimi", "Akreditasyon kontrolü", "VIP geçiş koordinasyonu", "Etkinlik sonrası rapor"],
    process: ["Etkinlik planı inceleme", "Alan ve nokta kurgusu", "Brifing ve görev dağılımı", "Canlı operasyon yönetimi"],
  },
  {
    title: "VIP Koruma Hizmetleri",
    slug: "vip-koruma",
    image: "/images/services/vip-koruma.jpg",
    icon: ShieldUser,
    category: "Güvenlik",
    summary: "Yönetici, sanatçı, yabancı konuk ve özel misafirler için gizlilik odaklı yakın koruma.",
    description:
      "VIP koruma hizmetimiz, görünür güç gösterisinden çok doğru planlama, rota kontrolü ve sakin profesyonellik üzerine kuruludur. Her görev gizlilik, protokol ve risk azaltma prensipleriyle yönetilir.",
    advantages: ["Gizlilik ve protokol hassasiyeti", "Rota ve alan ön kontrolü", "Deneyimli yakın koruma ekibi", "Esnek görev planlama"],
    process: ["Risk ve rota analizi", "Koruma planı", "Saha uygulaması", "Görev sonrası değerlendirme"],
  },
  {
    title: "Temizlik Hizmetleri",
    slug: "temizlik-hizmetleri",
    image: "/images/services/ozel-guvenlik.jpg",
    icon: Sparkles,
    category: "Tesis Hizmetleri",
    summary: "Ofis, tesis, site ve etkinlik alanları için düzenli, hijyenik ve denetlenebilir temizlik operasyonu.",
    description:
      "Temizlik hizmetlerimiz, günlük görünür temizlikten periyodik derin temizliğe kadar planlı şekilde yürütülür. Kullanılan ekipman, personel standardı ve denetim takibi net prosedürlere bağlıdır.",
    advantages: ["Hijyen odaklı planlama", "Kontrollü sarf ve ekipman yönetimi", "Periyodik denetim", "Güvenlik hizmetleriyle entegre yapı"],
    process: ["Alan keşfi", "Temizlik planı", "Ekip ve malzeme hazırlığı", "Kalite kontrol"],
  },
  {
    title: "Profesyonel Personel Temini",
    slug: "profesyonel-personel-temini",
    image: "/images/services/ozel-guvenlik.jpg",
    icon: Users,
    category: "Personel",
    summary: "Kurumsal ihtiyaçlara uygun, eğitimli ve temsil gücü yüksek operasyon personeli temini.",
    description:
      "USR, yalnızca personel yönlendirmez; doğru profil seçimi, eğitim, vardiya planı ve performans takibiyle sürdürülebilir bir ekip kurgusu oluşturur.",
    advantages: ["Profil bazlı seçme ve yerleştirme", "Vardiya ve puantaj takibi", "Kurumsal temsil standardı", "Hızlı ölçeklenebilir ekip"],
    process: ["Pozisyon analizi", "Aday seçimi", "Eğitim ve oryantasyon", "Performans izleme"],
  },
  {
    title: "Hostes ve Organizasyon Ekibi Temini",
    slug: "hostes-organizasyon-ekibi-temini",
    image: "/images/services/etkinlik-guvenligi.jpg",
    icon: Handshake,
    category: "Organizasyon",
    summary: "Lansman, gala, konferans ve özel davetler için profesyonel karşılama ve yönlendirme ekipleri.",
    description:
      "Organizasyon ekiplerimiz, markanızın misafirle ilk temas noktasında güçlü ve zarif bir temsil sağlar. Karşılama, kayıt, yönlendirme ve sahne arkası destek süreçleri net brieflerle yürütülür.",
    advantages: ["Marka diline uygun temsil", "Kayıt ve yönlendirme deneyimi", "Kıyafet ve görünüm standardı", "Etkinlik brief disiplini"],
    process: ["Etkinlik briefi", "Profil seçimi", "Ekip oryantasyonu", "Saha koordinasyonu"],
  },
  {
    title: "Fuar ve Etkinlik Personeli",
    slug: "fuar-etkinlik-personeli",
    image: "/images/services/etkinlik-guvenligi.jpg",
    icon: BadgeCheck,
    category: "Organizasyon",
    summary: "Fuar standı, ürün tanıtımı, ziyaretçi akışı ve operasyon desteği için eğitimli ekipler.",
    description:
      "Fuar personeli, standınızın temposunu ve ziyaretçi deneyimini doğrudan etkiler. USR; ürün tanıtımına uyum sağlayan, dikkatli ve çözüm odaklı ekiplerle markanızın sahadaki gücünü artırır.",
    advantages: ["Stand ve ziyaretçi yönetimi", "Ürün tanıtım desteği", "Çok günlü etkinlik planı", "Raporlanabilir performans"],
    process: ["Fuar hedeflerinin alınması", "Ekip ve görev planı", "Stand briefi", "Gün sonu değerlendirme"],
  },
  {
    title: "Danışma ve Karşılama Personeli",
    slug: "danisma-karsilama-personeli",
    image: "/images/services/avm-guvenligi.jpg",
    icon: Hotel,
    category: "Personel",
    summary: "Plaza, otel, hastane ve kurumsal ofislerde profesyonel ilk temas deneyimi.",
    description:
      "Danışma ve karşılama personelimiz, kurumunuzun ziyaretçiyle kurduğu ilk ilişkinin kalitesini yükseltir. Telefon, yönlendirme, kayıt ve protokol süreçleri düzenli şekilde yönetilir.",
    advantages: ["Güçlü ilk izlenim", "Ziyaretçi kayıt disiplini", "Telefon ve yönlendirme becerisi", "Kurumsal görünüm standardı"],
    process: ["Görev tanımı", "Personel seçimi", "Protokol eğitimi", "Performans takibi"],
  },
] as const;

export const stats = [
  { value: "81", label: "İlde hizmet ağı" },
  { value: "7/24", label: "Operasyon desteği" },
  { value: "500+", label: "Saha personeli kapasitesi" },
  { value: "%98", label: "Sözleşme yenileme memnuniyeti" },
];

export const references = [
  { name: "Galatasaray", sector: "Spor Organizasyonları", service: "Etkinlik ve Organizasyon Güvenliği", city: "İstanbul", logo: "/reference-logos/image1.jpeg" },
  { name: "Fenerbahçe", sector: "Spor Organizasyonları", service: "Etkinlik ve Organizasyon Güvenliği", city: "İstanbul", logo: "/reference-logos/image2.jpeg" },
  { name: "Ülker Arena", sector: "Salon ve Etkinlikler", service: "AVM ve Etkinlik Güvenliği", city: "İstanbul", logo: "/reference-logos/image10.png" },
  { name: "Kale Outlet Center", sector: "AVM", service: "AVM Güvenliği", city: "İstanbul", logo: "/reference-logos/image23.jpeg" },
  { name: "All Sports", sector: "Spor Tesisleri", service: "Özel Güvenlik Hizmetleri", city: "İstanbul", logo: "/reference-logos/image17.png" },
  { name: "Titanic Hotels", sector: "Otelcilik", service: "Danışma ve Karşılama Personeli", city: "Türkiye", logo: "/reference-logos/image20.png" },
  { name: "Koç", sector: "Kurumsal", service: "Profesyonel Personel Temini", city: "İstanbul", logo: "/reference-logos/image21.jpeg" },
  { name: "İKSV", sector: "Kültür Sanat", service: "Etkinlik ve Organizasyon Güvenliği", city: "İstanbul", logo: "/reference-logos/image10.png" },
  { name: "UEFA", sector: "Uluslararası Organizasyon", service: "VIP Koruma Hizmetleri", city: "Uluslararası", logo: "/reference-logos/image11.jpeg" },
  { name: "Cuno", sector: "Kurumsal", service: "Silahsız Güvenlik", city: "Türkiye", logo: "/reference-logos/image12.jpeg" },
  { name: "Koçfest", sector: "Festival", service: "Etkinlik ve Organizasyon Güvenliği", city: "İstanbul", logo: "/reference-logos/image13.jpeg" },
  { name: "Bağcılar", sector: "Kamu", service: "Site ve Residence Güvenliği", city: "İstanbul", logo: "/reference-logos/image14.jpeg" },
  { name: "DSM", sector: "Kurumsal", service: "Profesyonel Personel Temini", city: "Türkiye", logo: "/reference-logos/image24.jpeg" },
  { name: "Red Bull", sector: "Marka Etkinlikleri", service: "Fuar ve Etkinlik Personeli", city: "Türkiye", logo: "/reference-logos/image16.jpeg" },
  { name: "Eti", sector: "Kurumsal", service: "Fabrika Güvenliği", city: "Eskişehir", logo: "/reference-logos/image18.jpeg" },
  { name: "Formula 1", sector: "Uluslararası Organizasyon", service: "Etkinlik ve Organizasyon Güvenliği", city: "Uluslararası", logo: "/reference-logos/image19.jpeg" },
];

export const referenceLogos = [
  { name: "Galatasaray", src: "/reference-logos/image1.jpeg" },
  { name: "Fenerbahçe", src: "/reference-logos/image2.jpeg" },
  { name: "İKSV", src: "/reference-logos/image10.png" },
  { name: "UEFA", src: "/reference-logos/image11.jpeg" },
  { name: "Cuno", src: "/reference-logos/image12.jpeg" },
  { name: "Koçfest", src: "/reference-logos/image13.jpeg" },
  { name: "Bağcılar Belediyesi", src: "/reference-logos/image14.jpeg" },
  { name: "Red Bull", src: "/reference-logos/image16.jpeg" },
  { name: "Acun Medya", src: "/reference-logos/image17.png" },
  { name: "Eti", src: "/reference-logos/image18.jpeg" },
  { name: "Formula 1", src: "/reference-logos/image19.jpeg" },
  { name: "Tüyap", src: "/reference-logos/image21.jpeg" },
  { name: "İntes Park Evleri", src: "/reference-logos/image23.jpeg" },
  { name: "EMSA Generator", src: "/reference-logos/image25.jpeg" },
  { name: "CNR Expo İstanbul", src: "/reference-logos/image26.jpeg" },
  { name: "BKM", src: "/reference-logos/image27.jpeg" },
] as const;

export const testimonials = [
  {
    quote: "USR ekibi devreye girdikten sonra giriş kontrolü, raporlama ve sakin iletişimi belirgin şekilde iyileşti.",
    author: "Ayşe Karaca",
    role: "Site Yönetim Kurulu Başkanı",
  },
  {
    quote: "Fabrika sahamızda vardiya geçişleri ve sevkiyat güvenliği artık ölçülebilir bir düzende ilerliyor.",
    author: "Murat Demir",
    role: "Operasyon Direktörü",
  },
  {
    quote: "Lansman etkinliğimizde güvenlik ve karşılama ekipleri marka dilimize çok hızlı uyum sağladı.",
    author: "Selin Aksoy",
    role: "Etkinlik Ajansı Kurucusu",
  },
];

export const faqs = [
  {
    question: "USR Özel Güvenlik Türkiye genelinde hizmet veriyor mu?",
    answer: "Evet. İstanbul merkezli operasyon yapımızla Türkiye genelinde güvenlik, temizlik ve personel temini hizmetleri sunuyoruz.",
  },
  {
    question: "Teklif süreci ne kadar sürer?",
    answer: "İhtiyacın kapsamına göre aynı gün ön değerlendirme yapılır. Keşif gerektiren projelerde saha incelemesi sonrası detaylı teklif hazırlanır.",
  },
  {
    question: "Personel denetimi nasıl yapılıyor?",
    answer: "Vardiya planı, nokta kontrolü, saha amiri denetimi ve düzenli performans raporlarıyla operasyon takip edilir.",
  },
  {
    question: "Silahlı güvenlik hizmeti için hangi süreçler gerekir?",
    answer: "Görev alanı ve yasal uygunluk incelendikten sonra mevzuata uygun personel seçimi ve izin süreçleri netleştirilir.",
  },
];

export const blogPosts = [
  {
    title: "Kurumsal Güvenlik Hizmeti Seçerken Nelere Dikkat Edilmeli?",
    slug: "kurumsal-guvenlik-hizmeti-secerken",
    category: "Güvenlik",
    excerpt: "Doğru güvenlik firması seçimi, yalnızca personel sayısına değil; denetim, eğitim ve raporlama kalitesine bağlıdır.",
    date: "2026-05-18",
    readingTime: "5 dk",
    content: [
      "Kurumsal güvenlik hizmeti, işletmenin sürekliliğini ve marka itibarını koruyan stratejik bir karardır. Bu nedenle teklifleri yalnızca fiyat üzerinden kıyaslamak uzun vadede risk oluşturabilir.",
      "Etkili bir güvenlik sağlayıcısı; keşif, risk analizi, görev tanımı, personel eğitimi ve düzenli denetim süreçlerini şeffaf şekilde yönetmelidir. Raporlama düzeni olmayan operasyonlarda sorunlar geç fark edilir.",
      "Ayrıca personelin iletişim becerisi, dış görünüm standardı ve kriz anındaki davranışı kurumunuzun ziyaretçiler üzerindeki algısını doğrudan etkiler.",
    ],
  },
  {
    title: "Site ve Residence Güvenliğinde Modern Yaklaşım",
    slug: "site-residence-guvenliginde-modern-yaklasim",
    category: "Güvenlik",
    excerpt: "Yaşam alanlarında güvenlik; sakin memnuniyeti, erişim kontrolü ve acil durum hazırlığını birlikte ele almalıdır.",
    date: "2026-04-30",
    readingTime: "4 dk",
    content: [
      "Site güvenliği, klasik kapı bekçiliğinin çok ötesine geçmiştir. Günümüzde ziyaretçi yönetimi, araç geçişleri, kargo trafiği ve ortak alan devriyeleri entegre bir sistem gerektirir.",
      "Modern yaklaşımda güvenlik personeli sakinlerle doğru iletişim kurar, kuralları tutarlı uygular ve olağan dışı durumları hızlı şekilde yönetime raporlar.",
      "Başarılı bir operasyonun temeli net prosedürler, düzenli eğitim ve yönetime sunulan anlaşılır raporlardır.",
    ],
  },
  {
    title: "Etkinliklerde Güvenlik ve Karşılama Ekibi Nasıl Planlanır?",
    slug: "etkinliklerde-guvenlik-karsilama-ekibi-planlama",
    category: "Organizasyon",
    excerpt: "Konser, fuar ve lansmanlarda doğru ekip planı hem güvenliği hem de misafir deneyimini yükseltir.",
    date: "2026-03-22",
    readingTime: "4 dk",
    content: [
      "Etkinlik operasyonlarında güvenlik ve karşılama ekipleri aynı planın iki kritik parçasıdır. Misafir akışı, giriş kontrolü, VIP geçişleri ve sahne arkası alanlar önceden belirlenmelidir.",
      "Ekiplerin etkinlik öncesi brief alması, kıyafet standardının netleşmesi ve kriz senaryolarının paylaşılması sahada hız kazandırır.",
      "Doğru planlama, kalabalık yönetiminde görünür bir düzen ve misafir tarafında güçlü bir marka algısı oluşturur.",
    ],
  },
  {
    title: "Profesyonel Temizlik Hizmetlerinde Kalite Kontrolün Önemi",
    slug: "profesyonel-temizlik-hizmetlerinde-kalite-kontrol",
    category: "Temizlik",
    excerpt: "Temizlik operasyonunun sürdürülebilir olması için görev planı, ekipman yönetimi ve denetim düzeni birlikte çalışmalıdır.",
    date: "2026-02-14",
    readingTime: "3 dk",
    content: [
      "Profesyonel temizlik hizmeti, görünür temizlikten ibaret değildir. Alanın kullanım yoğunluğu, hijyen gereksinimleri ve periyodik bakım ihtiyaçları analiz edilmelidir.",
      "Kalite kontrol listeleri, sarf malzeme takibi ve saha amiri denetimleri hizmet standardının sürekliliğini sağlar.",
      "Kurumsal tesislerde temizlik ve güvenlik ekiplerinin koordineli çalışması ziyaretçi deneyimini belirgin şekilde iyileştirir.",
    ],
  },
];

export const whyUsr = [
  "Saha gerçekliğine göre tasarlanmış güvenlik planları",
  "Eğitimli, denetlenen ve kurumsal temsil gücü yüksek personel",
  "Şeffaf raporlama, düzenli performans takibi ve hızlı aksiyon",
  "Güvenlik, temizlik ve organizasyon ekiplerini tek çatı altında yönetme kabiliyeti",
];
