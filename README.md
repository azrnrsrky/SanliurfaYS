# Şanlıurfa Yenilikçi Sınıflar

Türkçe dijital rehber ve Google Gemini destekli **Proje Fikri Atölyesi**. React, TypeScript, React Router, Vinext/Vite, Lucide ve Cloudflare Workers kullanır. Veritabanı veya öğretmen hesabı gerektirmez.

## GitHub'a yükleme

Bu klasörün **içindeki bütün dosya ve klasörleri**, gizli `.openai` ve `.gitignore` dahil, deponun köküne yükleyin. Kök dizinde `package.json`, `pnpm-lock.yaml`, `app`, `src`, `server`, `worker`, `scripts`, `lib` ve `public` görünmelidir.

Paket gerçek API anahtarı içermez. `.env.example` ve `.dev.vars.example` yalnızca örnektir. Gerçek `.dev.vars`, `.env`, `node_modules`, `dist`, `.wrangler` ve `.sites-runtime` Git'e dahil edilmemelidir; `.gitignore` bunları dışlar.

## 1. Gereksinimler

- Node.js 22.18 veya üstü, tercihen 24.
- pnpm 10.28.2. Kurulu değilse: `npm install -g pnpm@10.28.2`.
- Yapay zekâ için Google AI Studio'da etkin, uygun kota ve izinlere sahip bir Gemini anahtarı.

## 2. Yerel çalıştırma

Terminali bu klasörde açın:

```sh
pnpm install --frozen-lockfile
```

`.dev.vars.example` dosyasını aynı klasöre **`.dev.vars`** adıyla kopyalayın. Örnek değeri kendi anahtarınızla değiştirin:

```dotenv
GEMINI_API_KEY="KENDI_GOOGLE_ANAHTARINIZ"
GEMINI_MODEL="gemini-3.8-flash"
```

Ardından:

```sh
pnpm dev
```

Terminalde gösterilen adresi açın (varsayılan `http://localhost:5173`). “Devam Et” sonrasında Yarışmalar ve Projeler sayfasındaki atölyeyi kullanın. `.dev.vars` değiştiğinde sunucuyu yeniden başlatın. Anahtar yoksa rehber çalışır; yapay zekâ bölümünde yapılandırma durumu gösterilir. İstem hazırlama ve kopyalama kullanılabilir.

## 3. Test ve üretim derlemesi

```sh
pnpm check
pnpm test
pnpm build
pnpm start
```

`check` TypeScript kontrolüdür. Testler ilham döngüsü, Türkçe arama, tarih sınırları, rotalar, özgün logolar, yapay zekâ giriş doğrulaması ve servis hata durumlarını kontrol eder. Testler anahtar gerektirmez ve API kotası tüketmez. `start` derlenmiş Worker'ı yerel olarak çalıştırır; `.dev.vars` varsa yükler.

Google modeli ve servis erişimi sağlayıcının kota, izin ve kullanılabilirlik durumuna bağlıdır. Canlı entegrasyon Gemini 3.8 Flash ile üç fikir üretilerek doğrulandı; bu durum gelecekte sağlayıcı kesintisi olmayacağı garantisi değildir.

## 4. Canlı yayın

**GitHub kodu saklar. GitHub Pages sunucu tarafındaki Gemini bağlantısını çalıştıramaz.** Bu sürüm Cloudflare Workers üzerinde çalışacak şekilde hazırlanmıştır. Yalnızca `dist/client` dosyalarını yayımlamak yeterli değildir.

Kendi Cloudflare hesabınıza terminalden yayınlamak için:

```sh
pnpm exec wrangler login
pnpm build
pnpm deploy
pnpm exec wrangler secret put GEMINI_API_KEY --config dist/server/wrangler.json
```

Son komutun gizli istemine anahtarınızı girin. Canlı Worker yerel `.dev.vars` dosyasını kullanmaz; secret ayrıca tanımlanmalıdır. Varsayılan modeli değiştirmek isterseniz Worker'da `GEMINI_MODEL` ortam değişkeni tanımlayın.

Cloudflare'ın GitHub bağlantılı Worker kurulumunda:

- Kök dizin: `package.json` dosyasının bulunduğu klasör.
- Derleme komutu: `pnpm build`.
- Yayın komutu: `pnpm deploy`.
- Node sürümü: 24; pnpm: 10.28.2.
- Worker'ın Variables and Secrets bölümünde `GEMINI_API_KEY`: **Secret**.

Derleme `dist/client` ve `dist/server/wrangler.json` üretir. `.openai/hosting.json` mevcut Sites kimliğini korur; gerçek API anahtarı içermez. Kendi Cloudflare yayınınızın erişim ayarları ayrıca belirlenmelidir. Mevcut Sites yayını özel erişimlidir; bu erişim ayarı GitHub'a kopyalanmaz.

## İçerik ve dosyalar

```text
app/                   Türkçe sayfa kabuğu
src/Platform.tsx        Rehber yönlendirmeleri
src/components/        Karşılama, menüler, ortak bileşenler ve atölye
src/views/             Rehber modülleri
src/data.ts            Duyurular, belgeler, eğitimler, yarışmalar, rehberler
src/projectIdeas.ts    Form seçenekleri, istem ve yanıt şeması
src/styles.css         Mobil, masaüstü, erişilebilirlik ve yazdırma
server/project-ideas.ts Google Gemini sunucu uç noktası
worker/index.ts        Worker ve API yönlendirmesi
public/assets/         İki özgün logo
scripts/               Derleme, çalıştırma ve doğrulama araçları
```

İletişim ve yayın adresi `src/data.ts` içindeki `config` nesnesindedir. Alan adınız değişirse QR için `config.publishedUrl` değerini güncelleyin. Belge dosyalarını `public` içine, bağlantıları veri dosyasına ekleyin. Yarışma tarihlerini yalnızca doğrulandıktan sonra `YYYY-MM-DD` biçiminde girip `verified: true` ayarlayın. İstanbul saat diliminde başlangıç/bitiş günleri dahil hesaplanır. Eksik bağlantı ve tarihler açık başvuru veya indirme olarak gösterilmez.

## Yapay zekâ ve gizlilik

Atölye; yarışma, kademe, tema, teknoloji, süre, malzeme yaklaşımı ve problem açıklamasından üç fikir üretir. Problem, çözüm, özgün yön araştırması, malzemeler, adımlar, değerlendirme ve güvenli çalışma başlıkları vardır. Sonuçlar kopyalanabilir ve yazdırılabilir. Resmî şartnameye uygunluk, kabul veya özgünlük garantisi verilmez.

Öğretmen hesabı, dosya yükleme, rezervasyon, öğrenci kaydı ve analitik yoktur. Google yalnızca fikir üretme butonuna basıldığında çağrılır. Forma kişisel bilgi yazılmaması belirtilir. İstekler/sonuçlar uygulama veritabanına veya uygulama günlüklerine kaydedilmez. Google'ın veri koşulları ve barındırma günlükleri ayrıca geçerlidir. Anahtar yalnızca sunucuda kullanılır; tarayıcıya gönderilmez. Anahtarı `VITE_` ya da `NEXT_PUBLIC_` değişkenlerine koymayın.

Origin kontrolü, giriş boyutu sınırı, yanıt şeması ve Worker örneği başına geçici istek/eşzamanlılık sınırı bulunur. Bu, bütün sunucular için ortak bir kota garantisi değildir; genel erişimde sağlayıcı bütçe ve sunucu istek sınırlarını ayrıca değerlendirin.

İlham sırası ve hazırlık listesi işaretleri yalnızca tarayıcıda tutulur. Yapay zekâ sonuçları kaydedilmez; sayfadan ayrılınca temizlenir. Teknoloji rehberleri genel güvenli hazırlık önerileridir; üretici kılavuzunu ve okul yetkilendirmelerini esas alın.

## Sorun giderme

- **Bağlantı yapılandırılmadı:** `.dev.vars` veya canlı Worker secret'ını kontrol edin.
- **Google isteği kabul etmedi:** anahtar, model adı ve proje izinlerini kontrol edin.
- **Kota / hız sınırı:** Google projesinin kota durumunu kontrol edip sonra tekrar deneyin.
- **Servise ulaşılamıyor:** sağlayıcı geçici hata verebilir; sonra deneyin veya hesabınızda erişilebilen modeli `GEMINI_MODEL` ile seçin.
- **Boş sayfa:** yalnızca istemci dosyalarını değil, Worker sürümünü yayımladığınızdan emin olun. Node 24 ile tekrar derleyin.
