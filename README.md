"# TheAlpayPortfolyo

Profesyonel bir portföy ve proje tanıtım websitesi. React, TypeScript ve Tailwind CSS ile geliştirilmiş modern bir web uygulaması.

## Proje Hakkında

Bu proje, kişisel portföyü ve proje çalışmalarını sergilemek için tasarlanmış bir web uygulamasıdır. Vite build tool'u ve modern React mimarisini kullanarak hızlı ve performansılı bir deneyim sunmaktadır.

### Teknolojiler
- **React 18.3** - UI framework
- **TypeScript** - Tür güvenliği için
- **Vite** - Hızlı build tool
- **Tailwind CSS** - Stil ve responsive tasarım
- **Supabase** - Backend hizmetleri
- **Lucide React** - Icon kütüphanesi

## Sistem Gereksinimleri

Projeyi çalıştırmak için sisteminizde aşağıdakilerin yüklü olması gerekir:

- **Node.js** (v18.0.0 veya daha yeni) - [Node.js indir](https://nodejs.org/)
- **npm** veya **yarn** - (Node.js ile birlikte gelir)
- **Git** (isteğe bağlı) - Projeyei klonlamak için

## Kurulum Adımları

### 1. Projeyi İndir veya Klonla

**GitHub kullanarak (Git yüklüyse):**
```bash
git clone <repository-url>
cd project
```

**Ya da ZIP dosyası olarak:**
1. GitHub/kaynak sayfasından "Code" > "Download ZIP" seçin
2. ZIP dosyasını açın
3. Klasöre girin:
```bash
cd project
```

### 2. Bağımlılıkları Yükle

Proje klasöründe terminali açarak aşağıdaki komutu çalıştırın:

```bash
npm install
```

Bu komut, `package.json` dosyasında belirtilen tüm gerekli paketleri indirir.

### 3. Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

Bu komut Vite geliştirme sunucusunu başlatır. Normalde:
- Terminal'de `http://localhost:5173` veya benzer bir URL göreceksiniz
- Tarayıcıda bu adresi açmak projeyi yükleyecektir
- Dosya değişiklikleri otomatik olarak tarayıcıya yansıtılacaktır (Hot Module Replacement)

## Mevcut Komutlar

### Geliştirme Modu
```bash
npm run dev
```
Geliştirme sunucusunu başlatır. Otomatik yeniden yükleme özelliği aktiftir.

### Üretim İçin Build Etme
```bash
npm run build
```
Projeyi optimize edilmiş bir şekilde derler. Çıktı `dist/` klasöründe yer alır.

### Derlenen Versiyonu Önizle
```bash
npm run preview
```
`npm run build` komutunun çıktısını tarayıcıda test eder.

### Kod Kalitesi Kontrolü
```bash
npm run lint
```
ESLint ile kodunuzu kontrol eder ve stil sorunlarını tespit eder.

### Tip Kontrolü
```bash
npm run typecheck
```
TypeScript tip hatalarını kontrol eder (derleme yapmadan).

## Proje Yapısı

```
project/
├── src/
│   ├── components/          # React bileşenleri
│   │   ├── About.tsx        # Hakkında bölümü
│   │   ├── CaseStudy.tsx    # Proje çalışmaları
│   │   ├── Home.tsx         # Ana sayfa
│   │   └── Navigation.tsx   # Navigasyon menüsü
│   ├── data/
│   │   └── caseStudies.ts   # Proje veri dosyası
│   ├── App.tsx              # Ana uygulama bileşeni
│   ├── main.tsx             # Giriş noktası
│   └── index.css            # Global stiller
├── public/                  # Statik dosyalar
├── package.json             # Proje bağımlılıkları
├── tsconfig.json            # TypeScript ayarları
├── vite.config.ts           # Vite ayarları
├── tailwind.config.js       # Tailwind CSS ayarları
└── README.md                # Bu dosya
```

## Geliştirmeye Başlama

1. **Bileşenleri Düzenle:** `src/components/` klasöründeki dosyaları açarak bileşenleri özelleştirin
2. **Proje Verilerini Güncelle:** `src/data/caseStudies.ts` dosyasından proje bilgilerini ekleyin
3. **Stilleri Değiştir:** `src/index.css` veya Tailwind CSS sınıflarını kullanarak tasarımı özelleştirin
4. **Yeni Sayfalar Ekle:** `src/components/` klasöründe yeni `.tsx` dosyaları oluşturup App.tsx'e ekleyin

## Ortam Değişkenleri (İsteğe Bağlı)

Eğer Supabase veya başka dış hizmetleri kullanacaksanız, proje kök klasöründe `.env.local` dosyası oluşturun:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_key
```

Dosyayı `.gitignore`'a ekleyin:
```
.env.local
```

## Dağıtım

### Vercel'e Dağıt
```bash
npm install -g vercel
vercel
```

### Netlify'a Dağıt
1. GitHub'a push yapın
2. Netlify'da yeni site oluşturun
3. Build komutu: `npm run build`
4. Publish dizini: `dist`

### GitHub Pages'a Dağıt
`vite.config.ts` dosyasında base yolunu ayarlayın:
```typescript
export default defineConfig({
  base: '/repository-name/',
  ...
})
```

Ardından build edin ve `dist` klasörünü GitHub Pages'a yükleyin.

## Sorun Giderme

### "Command not found: npm"
- Node.js yüklü değil. [nodejs.org](https://nodejs.org/) adresinden indirin

### "Port already in use"
- Başka bir uygulamanız 5173 portunu kullanıyor. Terminali kapatıp yeniden açın veya port numarasını değiştirin:
```bash
npm run dev -- --port 3000
```

### "Module not found"
- `node_modules` klasörü eksik olabilir. Aşağıdaki komutu çalıştırın:
```bash
npm install
```

## Katkıda Bulunma

Bu proje kişisel bir portföy projesidir. İyileştirme önerileri ve bug raporları için lütfen issue açınız.

## Lisans

Bu proje MIT lisansı altında lisanslıdır. Detaylar için LICENSE dosyasını inceleyin.

## İletişim

Sorularınız veya önerileriniz için lütfen iletişime geçiniz.

---

**Son Güncelleme:** Şubat 2026" 
