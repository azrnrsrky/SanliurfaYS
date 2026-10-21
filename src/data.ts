export const config = { publishedUrl: 'https://sanliurfa-sinif-rehberi-2026.zanydeer128.chatgpt.site', contact: { unit: 'Şanlıurfa İl Millî Eğitim Müdürlüğü · Yenilikçi Sınıflar Koordinasyonu', email: '', phone: '', url: 'https://sanliurfa.meb.gov.tr/' } };
export const motivationalQuotes = [
 'Yenilikçi fikirler, cesur öğretmenlerle sınıfta hayat bulur.',
 'Bugün denediğiniz küçük bir yenilik, yarının büyük keşfine dönüşebilir.',
 'Geleceğin sınıfı, bugün attığınız cesur adımlarla şekillenir.',
 'Teknoloji bir araçtır; öğrenmeye hayat veren öğretmendir.',
 'Her yeni yöntem, öğrencilerinize açılan yeni bir kapıdır.',
 'Bir öğrencinin merakını uyandırmak, geleceğe atılan güçlü bir adımdır.',
 'Yenilik, farklı düşünmeye cesaret eden öğretmenlerle başlar.',
 'Bazen tek bir soru, bir öğrencinin dünyasını değiştirebilir.',
 'Öğrenmenin sınırlarını genişleten, öğretmenin hayal gücüdür.',
 'Her yeni ders, farklı bir keşfin başlangıcı olabilir.',
 'Birlikte düşünen bir sınıf, birlikte büyüyen bir gelecektir.',
 'Merakla başlayan her yol, öğrenmeye çıkar.',
 'Öğrencinize sunduğunuz bir deneme fırsatı, yeni bir cesaret doğurur.',
 'Bir fikri denemek, onu anlatmaktan daha çok kapı açabilir.',
 'Sınıfınızdaki küçük bir soru, büyük bir tasarımın ilk adımıdır.',
 'STEM, merakı düşünceye; düşünceyi üretime dönüştürür.',
 'Öğrenciler birlikte ürettikçe, fikirler yeni yollar bulur.',
 'Her öğretmen, geleceğin öğrenme ortamına bir iz bırakır.',
 'Yeni bir araç öğrenmek, yeni bir öğrenme fırsatı yaratır.',
 'Yaratıcılık, farklı cevaplara yer açtığınızda büyür.',
 'Öğrenme, denemeye değer veren bir sınıfta kök salar.',
 'Birlikte çözüm aramak, birlikte öğrenmenin başlangıcıdır.',
 'Bugünkü cesaretiniz, bir öğrencinin yarınki ilhamıdır.',
 'Hayal kurmaya alan açın; öğrencileriniz sizi şaşırtsın.',
 'Her öğrenci, keşfedilmeyi bekleyen bir fikir taşır.',
 'Dijital araçlar, iyi sorularla anlam kazanır.',
 'Bir problemi yeniden düşünmek, çözümün ilk adımıdır.',
 'Paylaşılan her deneyim, başka bir sınıfa ışık olur.',
 'Öğretmenin rehberliği, teknolojiyi öğrenme deneyimine dönüştürür.',
 'Geleceği tasarlamak, bugün merak etmeye izin vermekle başlar.',
 'Küçük adımlarla deneyin; öğrenmenin yeni yollarını keşfedin.',
 'Sınıfınızda her fikre yer açtığınızda, olasılıklar çoğalır.'
];
export type Resource = { id:string; title:string; description:string; category:string; type?:string; url?:string; date?:string };
export const documents: Resource[] = [
 {id:'resmi-yazilar',title:'Yenilikçi Sınıflar resmî yazıları',description:'Koordinasyon tarafından paylaşılacak resmî yazılar için ayrılan alan.',category:'Resmî Yazılar',type:'PDF'},
 {id:'toplanti',title:'Toplantı tutanağı şablonu',description:'Okul içi hazırlık toplantıları için düzenlenebilir şablon alanı.',category:'Toplantı Tutanakları',type:'Word'},
 {id:'yillik-plan',title:'Yıllık çalışma ve planlama şablonu',description:'Yerel planlama çalışmalarını destekleyecek belge alanı.',category:'Yıllık Çalışma ve Planlama Belgeleri',type:'Excel'},
 {id:'hazir-sablon',title:'Ders hazırlık materyali şablonu',description:'Öğretmenler için önceden hazırlanmış kaynak alanı.',category:'Hazır Şablonlar',type:'Word'},
 {id:'cihaz-kilavuz',title:'Cihaz kullanım kılavuzları',description:'Cihaz modeline uygun üretici belgeleri burada paylaşılacak.',category:'Kullanım Kılavuzları',type:'PDF'},
 {id:'kontrol',title:'Ders öncesi kontrol listesi',description:'Yazdırılabilir ve tarayıcı içinde işaretlenebilir yerel hazırlık listesi.',category:'Kontrol Listeleri',type:'Web',url:'#/sorumlu-ogretmen'},
 {id:'diger',title:'Diğer öğretmen kaynakları',description:'Doğrulanmış ek kaynaklar için ayrılan alan.',category:'Diğer Kaynaklar',type:'PDF'}
];
export type Training = {id:string;title:string;description:string;category:string;directUrl:string|null;duration?:string|null;plannedDate?:string|null;location?:string|null;applicationInfo?:string|null;applicationUrl?:string|null};
export const trainings:Training[] = [
 {id:'ogrenme-tasarimi',title:'Yenilikçi Öğrenme Ortamı Tasarımı Eğitimi Kursu',description:'Öğrenme alanlarının pedagojik amaçlarla tasarımına odaklanan eğitim.',category:'ÖBA Eğitimleri',directUrl:null},
 {id:'aktif-ogrenme',title:'Aktif Öğrenme ve Yenilikçi Öğrenme Ortamları Kursu',description:'Öğrencinin katılımını destekleyen öğrenme yaklaşımlarını keşfedin.',category:'ÖBA Eğitimleri',directUrl:null},
 {id:'3b-egitim',title:'Yenilikçi Sınıflarda 3B Yazıcı Kullanımı Kursu',description:'Üç boyutlu üretimi öğrenme deneyimleriyle ilişkilendirin.',category:'ÖBA Eğitimleri',directUrl:null},
 {id:'meb-kit-egitim',title:'MEB-KİT Robotik Kodlama Seti Eğitimi Kursu',description:'Robotik kodlama ve problem çözme odaklı eğitim başlığı.',category:'ÖBA Eğitimleri',directUrl:null},
 {id:'mahalli-aktif',title:'Yenilikçi Öğrenme Alanlarında Aktif Öğrenme Eğitimi',description:'Şanlıurfa için yerel eğitim bilgileri resmî duyuru sonrasında eklenecek.',category:'Mahallî Hizmet İçi Eğitimler',directUrl:null},
 {id:'mahalli-dijital',title:'Yenilikçi Sınıflarda Dijital Teknolojiler Kursu',description:'Dijital teknolojilerin öğrenme ortamında kullanımına yönelik eğitim başlığı.',category:'Mahallî Hizmet İçi Eğitimler',directUrl:null}
];
export type Competition = {id:string;title:string;organizer:string;audience:string[];category:string;description:string;start:string|null;end:string|null;verified:boolean;url:string;specUrl:string|null};
export const competitions:Competition[] = [
 {id:'robot',title:'Uluslararası MEB Robot Yarışması',organizer:'Millî Eğitim Bakanlığı',audience:['Ortaokul','Lise','Öğretmen'],category:'MEB Yarışmaları',description:'Robotik alanındaki yarışma duyuruları ve katılım koşulları için resmî kaynağı inceleyin.',start:null,end:null,verified:false,url:'https://robot.meb.gov.tr/',specUrl:null},
 {id:'2204-a',title:'TÜBİTAK 2204-A',organizer:'TÜBİTAK',audience:['Lise'],category:'Diğer Yarışmalar',description:'Lise Öğrencileri Araştırma Projeleri Yarışması.',start:null,end:null,verified:false,url:'https://tubitak.gov.tr/',specUrl:null},
 {id:'2204-b',title:'TÜBİTAK 2204-B',organizer:'TÜBİTAK',audience:['Ortaokul'],category:'Diğer Yarışmalar',description:'Ortaokul Öğrencileri Araştırma Projeleri Yarışması.',start:null,end:null,verified:false,url:'https://tubitak.gov.tr/',specUrl:null},
 {id:'teknofest',title:'TEKNOFEST Teknoloji Yarışmaları',organizer:'TEKNOFEST',audience:['Ortaokul','Lise','Öğretmen'],category:'Diğer Yarışmalar',description:'Kategoriye göre değişen katılım koşulları için resmî yarışma sayfalarını kontrol edin.',start:null,end:null,verified:false,url:'https://www.teknofest.org/',specUrl:null}
];
export type Announcement = Resource & {example:boolean;eventDate?:string};
export const announcements:Announcement[] = [
 {id:'platform-rehberi',title:'Dijital rehberde neler bulabilirsiniz?',description:'Belgeler, eğitim bağlantıları ve teknoloji rehberlerine tek yerden ulaşmanın yollarını keşfedin. Bu bir platform tanıtım içeriğidir; resmî duyuru değildir.',category:'Resmî Bilgilendirmeler',example:true},
 {id:'egitim-duyurusu',title:'Yerel eğitim duyuruları için bu alanı takip edin',description:'Mahallî eğitimlerin tarih, yer ve başvuru bağlantıları doğrulanmış resmî duyuru alındığında eklenecek. Henüz bir eğitim takvimi yayımlanmadı.',category:'Öğretmen Eğitimleri',example:true},
 {id:'teknolojiye-baslangic',title:'Teknolojiye güvenli bir başlangıç',description:'Ders öncesi kontrol listesi ve genel kullanım rehberleriyle sınıfınızı hazırlayın.',category:'Yeni Belgeler',example:true}
];
export const technologyGuides = [
 {id:'tahta',title:'Etkileşimli Tahta',description:'Dijital içerikleri birlikte keşfedin, öğrenmeyi görünür kılın.',purpose:'Sunum, ortak tartışma ve etkileşimli içerik kullanımı.',steps:['Cihazın çevresinin kuru ve güvenli olduğunu gözle kontrol edin.','Üretici kılavuzuna uygun açma düğmesini kullanın.','Gerekliyse doğru görüntü kaynağını seçin.','İçeriği açıp görüntü ve sesi ders öncesinde deneyin.'],problems:'Görüntü ve ses sorunları için Sorun Çözme Merkezi’ni inceleyin.'},
 {id:'robotik',title:'Robotik Kodlama Setleri',description:'Algoritmik düşünme ve birlikte problem çözme.',purpose:'Kodlama ve tasarım odaklı öğrenme.',steps:['Parçaları ve kabloları gözle kontrol edin.','Üreticinin desteklediği yazılım ve bağlantı türünü belirleyin.','Enerji bağlantısını yalnızca kılavuzda belirtilen biçimde yapın.','Basit bir örnekle bağlantıyı sınayın.'],problems:'Bağlantı türü ve yazılım sürümü modele göre değişir.'},
 {id:'meb-kit',title:'MEB-KİT',description:'Fikirden çalışan bir projeye uzanan keşif.',purpose:'Robotik kodlama ve temel proje geliştirme.',steps:['Setin envanterini ve sağlamlığını kontrol edin.','Setle sağlanan resmî kılavuzu inceleyin.','Bağlantıları kılavuzdaki sırayla hazırlayın.','Kılavuzdaki başlangıç örneğini uygulayın.'],problems:'Set sürümüne uygun kılavuzu okulunuzdan veya YEĞİTEK’ten isteyin.'},
 {id:'3b-yazici',title:'3B Yazıcı',description:'Düşünceleri somut tasarımlara dönüştürün.',purpose:'Tasarım, prototipleme ve üretim süreçlerini tanıma.',steps:['Yazıcıyı havalandırılan, sabit ve güvenli bir alanda kontrol edin.','Üretici kılavuzundaki malzeme ve dosya uyumluluğunu doğrulayın.','Baskı alanının hazır olduğunu dışarıdan kontrol edin.','Yalnızca eğitimini aldığınız ve kılavuzda belirtilen başlatma işlemini uygulayın.'],problems:'Sıcak nozula ve hareketli parçalara dokunmayın. Tıkanma veya mekanik arızada yetkili servise başvurun.'},
 {id:'sanal-gerceklik',title:'Sanal Gerçeklik Araçları',description:'Farklı öğrenme deneyimlerine güvenli bir pencere.',purpose:'Sürükleyici görsel öğrenme deneyimleri.',steps:['Üreticinin yaş ve sağlık uyarılarını kontrol edin.','Çevrede güvenli ve boş bir kullanım alanı hazırlayın.','Hijyen ve cihaz ayarlarını kılavuza göre kontrol edin.','Kısa bir deneme yapın; rahatsızlık olursa kullanımı durdurun.'],problems:'Uyumluluk ve kullanım süresi cihazın üretici talimatına göre belirlenir.'},
 {id:'sunum',title:'Dijital Sunum Teknolojileri',description:'Fikirlerinizi herkes için erişilebilir kılın.',purpose:'Görsel ve işitsel içerik paylaşımı.',steps:['Cihazların uyumlu girişlerini belirleyin.','Hasarsız bağlantı kablolarını kontrol edin.','Ekrandan uygun kaynak seçimini yapın.','Sunumun okunabilirliğini ve sesini deneyin.'],problems:'Görüntü yansıtma sorunlarında bağlantı ve kaynak seçimini kontrol edin.'},
 {id:'bilgisayar',title:'Bilgisayar ve Ağ Donanımları',description:'Kesintisiz dersler için temel hazırlık.',purpose:'Eğitim kaynaklarına erişim ve dijital çalışma.',steps:['Kablo ve çevre güvenliğini gözle kontrol edin.','Okulun yetkilendirdiği hesap ve bağlantıları kullanın.','Tarayıcıdan resmî bir eğitim kaynağını açın.','Sorunu okulun yetkili teknik sorumlusuna iletin.'],problems:'Ağ ayarlarını, güvenlik yazılımlarını ve yönetici izinlerini değiştirmeyin.'}
];
export const troubleshooting = [
 {id:'tahta-acilmiyor',title:'Etkileşimli tahta açılmıyor',category:'Etkileşimli Tahta',steps:['Yanık kokusu, sıvı veya hasar varsa kullanmayın; yetkili kişiye haber verin.','Cihazın gösterge ışığını ve açma düğmesini kontrol edin.','Güç kablosunun dışarıdan görünen durumunu inceleyin; hasarlı kabloya dokunmayın.','Sorun sürerse okulun teknik sorumlusuna veya yetkili servise başvurun.']},
 {id:'internet',title:'İnternet bağlantısı çalışmıyor',category:'Ağ ve İnternet',steps:['Başka bir resmî sayfanın açılıp açılmadığını kontrol edin.','Bağlantı simgesini ve seçili okul ağını kontrol edin.','Kabloyu yalnızca hasarsız ve güvenle erişilebilir durumdaysa kontrol edin.','Ağ yapılandırmasını değiştirmeden okulun teknik sorumlusuna başvurun.']},
 {id:'ses',title:'Cihazdan ses gelmiyor',category:'Ses ve Görüntü',steps:['Uygulamanın ve cihazın sessize alınmadığını kontrol edin.','Ses düzeyini makul bir seviyeye getirin.','İşletim sisteminde seçili ses çıkışını kontrol edin.','Başka bir içerikle deneyin; devam ederse teknik sorumluya başvurun.']},
 {id:'baski',title:'3B yazıcı baskı başlatmıyor',category:'3B Yazıcı',steps:['Ekrandaki uyarıyı okuyun ve üretici kılavuzuyla karşılaştırın.','Dosya biçimi ve malzeme uyumluluğunu kontrol edin.','Sıcak ve hareketli parçalara dokunmayın, tıkanıklığı kendiniz açmayın.','Sorun sürerse baskıyı durdurup yetkili servise danışın.']},
 {id:'robot-baglanti',title:'Robotik kodlama seti bağlantı kurmuyor',category:'Robotik',steps:['Setin üretici kılavuzundaki bağlantı yöntemini doğrulayın.','Kablonun ve görünür parçaların sağlamlığını kontrol edin.','Yazılımda doğru cihazın seçildiğini kontrol edin.','Yönetici izni veya sürücü kurulumu gerekiyorsa yetkili teknik sorumluya danışın.']},
 {id:'yansitma',title:'Bilgisayar görüntüsü ekrana yansımıyor',category:'Ses ve Görüntü',steps:['Ekranın açık ve uygun giriş kaynağında olduğunu kontrol edin.','Görüntü kablosunun hasarsızlığını ve bağlantısını kontrol edin.','Bilgisayarın ekran yansıtma menüsünden uygun seçeneği belirleyin.','Devam ederse cihaz modelinin kılavuzuna ve teknik sorumluya başvurun.']}
];
export const faqs = [
 {id:'kullanim',title:'Yenilikçi Sınıfı kimler kullanabilir?',description:'Okulunuzdaki kullanım düzeni ve yetkilendirmeler için okul yönetiminin bilgilendirmesini esas alın.'},
 {id:'ornekler',title:'Yenilikçi Sınıf etkinlik örneklerine nereden ulaşabilirim?',description:'Bakanlığın MEB Yenilikçi Sınıf Platformu üzerinden ders ve etkinlik örneklerini inceleyebilirsiniz.'},
 {id:'oba',title:'ÖBA eğitimlerine nasıl erişebilirim?',description:'Öğretmen Eğitimleri bölümünden ÖBA’ya geçin. Kursun erişim ve başvuru koşullarını ÖBA üzerinde kontrol edin.'},
 {id:'mahalli',title:'Mahallî hizmet içi eğitimlere nasıl başvurabilirim?',description:'Resmî duyurudaki başvuru kanalını kullanın. MEBBİS üzerinden başvuru isteniyorsa işlemi doğrudan MEBBİS’te tamamlayın.'},
 {id:'belgeler',title:'Yenilikçi Sınıf için hangi belgeleri kullanabilirim?',description:'Belgeler ve Şablonlar bölümündeki kaynakları inceleyin. Bağlantısı henüz eklenmemiş belgeler indirilemez. Güncel resmî yazıyı okul yönetiminizden doğrulayın.'},
 {id:'teknik',title:'Teknik sorun yaşadığımda ne yapmalıyım?',description:'Sorun Çözme Merkezi’ndeki güvenli kontrolleri uygulayın. Elektriksel ya da mekanik arızada müdahale etmeden yetkili teknik servise başvurun.'},
 {id:'yarisma',title:'Yarışma duyurularını nereden takip edebilirim?',description:'Yarışmalar ve Projeler bölümündeki resmî kurum bağlantılarını izleyin. Başvuru takvimini ve şartnameyi ilgili kurumun sitesinden doğrulayın.'}
];
export const usefulLinks = [
 {title:'MEB Yenilikçi Sınıf Platformu',description:'Ders örnekleri, etkinlikler ve Bakanlığın resmî içerikleri.',url:'https://yenilikcisinif.eba.gov.tr/'},
 {title:'ÖBA',description:'Öğretmen Bilişim Ağı ve mesleki gelişim eğitimleri.',url:'https://oba.gov.tr/'},
 {title:'EBA',description:'Eğitim Bilişim Ağı ve dijital öğrenme kaynakları.',url:'https://www.eba.gov.tr/'},
 {title:'MEBBİS',description:'Bakanlığın bilgi sistemleri ve hizmet içi eğitim işlemleri.',url:'https://mebbis.meb.gov.tr/'},
 {title:'YEĞİTEK',description:'Yenilik ve Eğitim Teknolojileri Genel Müdürlüğü.',url:'https://yegitek.meb.gov.tr/'},
 {title:'Scientix',description:'Avrupa fen eğitimi topluluğu ve STEM kaynakları.',url:'https://www.scientix.eu/'},
 {title:'TÜBİTAK',description:'Bilimsel araştırma ve proje destekleri.',url:'https://tubitak.gov.tr/'},
 {title:'TEKNOFEST',description:'Teknoloji yarışmaları ve festival duyuruları.',url:'https://www.teknofest.org/'}
];
export const checklists:Record<string,string[]> = {
 'Ders Öncesi Kontrol':['Etkileşimli tahta hazır mı?','İnternet bağlantısı çalışıyor mu?','Kullanılacak teknolojik araçlar hazır mı?','Gerekli materyaller kontrol edildi mi?','Güvenlik açısından sorun var mı?'],
 'Dönem Başı Hazırlıkları':['Cihazların görünür durumu kontrol edildi mi?','Güncel üretici kılavuzları erişilebilir mi?','Okulun kullanım düzeni gözden geçirildi mi?','Teknik destek kanalı öğrenildi mi?'],
 'Dönem Sonu Kontrolleri':['Araçlar kılavuzlarına uygun kapatıldı mı?','Materyaller güvenli şekilde yerleştirildi mi?','Görülen sorunlar yetkili kişiye iletildi mi?']
};
