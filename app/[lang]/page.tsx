import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Github, Linkedin, Mail, User, Briefcase, GraduationCap, FolderOpen } from "lucide-react"
import { ExperienceTimer } from "../components/ExperienceTimer"
import { TypewriterText } from "../components/TypewriterText"
import { ScrollAnimation } from "../components/ScrollAnimation"
import { ScrollToTop } from "../components/ScrollToTop"
import Image from "next/image"

export async function generateStaticParams() {
    return [{ lang: "tr" }, { lang: "en" }];
  }

export default async function Home({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              <TypewriterText text={isEnglish ? "Hi, I'm Melih" : "Merhaba, Ben Melih"} />
            </h1>
            <p className="max-w-[700px] text-gray-200 md:text-xl">
              <TypewriterText 
                text={isEnglish 
                  ? "As a Full Stack Developer, I create user-friendly and innovative solutions using modern technologies for web, desktop, and mobile platforms."
                  : "Full Stack Developer olarak web, masaüstü ve mobil platformlarda modern teknolojiler ile kullanıcı dostu ve yenilikçi çözümler üretiyorum."
                } 
                delay={1000} 
              />
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-[#2563EB] text-white hover:bg-[#1d4ed8]">
                <a href={`/${lang}#contact`}>
                  {isEnglish ? 'Contact Me' : 'İletişime Geç'}
                </a>
              </Button>
              <Button variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2563EB] transition-all duration-300">
                <a href={`/${lang}#experience`}>
                  {isEnglish ? 'Experience' : 'Deneyim'}
                </a>
              </Button>
              <Button variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2563EB] transition-all duration-300">
                <a href={`/${lang}#projects`}>
                  {isEnglish ? 'View Projects' : 'Projelerimi Gör'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollAnimation>
        <section id="about" className="container mx-auto px-4 py-20 bg-white scroll-mt-16">
          <div className="flex flex-col items-center mb-12 relative">
            <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-32 h-32 flex justify-center overflow-hidden pointer-events-none select-none z-0">
              <div className="w-full h-full flex justify-center items-start relative">
                <User className="w-32 h-32 text-gray-300 opacity-30" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#111827] relative z-10 flex items-center gap-3">
              {isEnglish ? 'About' : 'Hakkımda'}
              <div className="absolute -bottom-4 left-1/2 h-1 bg-[#2563EB] rounded-full transition-all duration-500 ease-out group-data-[visible=true]:w-[120%] w-0 -translate-x-1/2" />
            </h2>
            <p className="mt-6 text-gray-600 text-center max-w-2xl">
              {isEnglish 
                ? "Discover my journey, expertise, and passion for technology"
                : "Teknoloji tutkumu, uzmanlığımı ve deneyimlerimi keşfedin"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Dokuz Eylül University - Economics (Bachelor)' : 'Dokuz Eylül Üniversitesi - İktisat (Lisans)'}
                    </h3>
                    <p className="text-sm text-gray-600">2015-2019</p>
                  </div>
                </div>
                <p className="text-[#111827] leading-relaxed">
                  {isEnglish 
                    ? "I gained fundamental knowledge and competence in economic theories, statistics, financial analysis, and data interpretation. During my undergraduate education, I developed a special interest in working with numerical data and economic modeling."
                    : "Ekonomi teorileri, istatistik, finansal analiz ve veri yorumlama konularında temel bilgi ve yetkinlik kazandım. Lisans eğitimim süresince sayısal verilerle çalışma ve ekonomik modelleme konularına özel ilgi duydum."
                  }
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish 
                        ? 'Dokuz Eylül University - Management Information Systems (Master with Thesis)'
                        : 'Dokuz Eylül Üniversitesi – Yönetim Bilişim Sistemleri (Tezli Yüksek Lisans)'
                      }
                    </h3>
                    <p className="text-sm text-gray-600">2020 – 2022</p>
                  </div>
                </div>
                <p className="text-[#111827] leading-relaxed">
                  {isEnglish
                    ? "I received in-depth training in information systems, data science, and the integration of management processes."
                    : "Bilişim sistemleri, veri bilimi ve yönetim süreçlerinin entegrasyonu konularında derinlemesine eğitim aldım."
                  }
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-[#2563EB] mb-2">
                    {isEnglish ? 'Thesis Work' : 'Tez Çalışması'}
                  </h4>
                  <p className="text-[#111827] italic mb-2">
                    {isEnglish
                      ? "Web-Based Business Intelligence Application with Machine Learning Techniques in the Automotive Industry"
                      : "Otomotiv Sektöründe Makine Öğrenimi Teknikleriyle Web Tabanlı İş Zekası Uygulaması"
                    }
                  </p>
                  <p className="text-[#111827]">
                    {isEnglish
                      ? "In this thesis, I developed a system that predicts car prices using various machine learning algorithms. The system allows users to make model-based predictions through a web-based interface. Python, scikit-learn, and data visualization tools were effectively used."
                      : "Bu tez kapsamında, çeşitli makine öğrenmesi algoritmaları kullanarak araba fiyatlarını tahmin eden bir sistem geliştirdim. Sistem, web tabanlı bir arayüzle kullanıcıların model bazlı tahminler yapmasına olanak tanımaktadır. Python, scikit-learn ve veri görselleştirme araçları etkin biçimde kullanılmıştır."
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#111827] leading-relaxed">
                  {isEnglish
                    ? "After completing my military service in 2022, I participated in various technical trainings to further deepen my expertise in software development. The most significant of these was the React.js Bootcamp program organized with the support of a sponsor company on the patika.dev platform. During this training process, I gained advanced proficiency in modern JavaScript architecture, component-based structure, API integration, and performance optimization."
                    : "2023 sonrası askerlik görevimi tamamladıktan sonra, yazılım alanında kendimi daha da derinleştirmek adına çeşitli teknik eğitimlere katıldım. Bunlardan en önemlisi, patika.dev platformunda sponsor bir şirket desteğiyle düzenlenen React.js Bootcamp programıydı. Bu eğitim sürecinde modern JavaScript mimarisi, komponent tabanlı yapı, API entegrasyonu ve performans optimizasyonu gibi konularda ileri düzey yetkinlik kazandım."
                  }
                </p>
                <p className="text-[#111827] leading-relaxed">
                  {isEnglish
                    ? "I aim to keep myself up-to-date in web, desktop, and mobile development areas and create a versatile developer profile. In this direction, I continue to produce both user-focused and technically sound projects."
                    : "Web, masaüstü ve mobil geliştirme alanlarında sürekli olarak kendimi güncel tutmayı ve çok yönlü bir geliştirici profili oluşturmayı hedefliyorum. Bu doğrultuda hem kullanıcı odaklı hem de teknik açıdan sağlam projeler üretmeye devam ediyorum."
                  }
                </p>
                <ExperienceTimer isEnglish={isEnglish} />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Experience Section */}
      <ScrollAnimation>
        <section id="experience" className="container mx-auto px-4 py-20 bg-white scroll-mt-16">
          <div className="flex flex-col items-center mb-12 relative">
            <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-32 h-32 flex justify-center overflow-hidden pointer-events-none select-none z-0">
              <div className="w-full h-full flex justify-center items-start relative">
                <Briefcase className="w-32 h-32 text-gray-300 opacity-30" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#111827] relative z-10 flex items-center gap-3">
              {isEnglish ? 'Experience' : 'Deneyim'}
              <div className="absolute -bottom-4 left-1/2 h-1 bg-[#2563EB] rounded-full transition-all duration-500 ease-out group-data-[visible=true]:w-[120%] w-0 -translate-x-1/2" />
            </h2>
            <p className="mt-6 text-gray-600 text-center max-w-2xl">
              {isEnglish 
                ? "Professional journey and career milestones"
                : "Profesyonel yolculuğum ve kariyer kilometre taşlarım"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Software Developer' : 'Yazılım Geliştirici'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Kaptan Demir Çelik Endüstrisi A.Ş. | 2024 - Present' : 'Kaptan Demir Çelik Endüstrisi A.Ş. | 2024 - Devam Ediyor'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "I work as a Full Stack Developer developing end-to-end solutions in corporate software projects. In this process, I took an active role in both client-side and server-side development."
                      : "Kurumsal yazılım projelerinde uçtan uca çözüm geliştiren Full Stack Developer olarak görev yapıyorum. Bu süreçte hem istemci tarafında hem de sunucu tarafında aktif rol aldım."
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Developed Windows Forms-based desktop applications with C# and .NET Framework with our software team, integrated with various hardware components"
                          : "Yazılım ekibimizle beraber C# ve .NET Framework ile Windows Forms tabanlı masaüstü uygulamalar geliştirdik, farklı donanımlarla entegrasyon sağladık."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Created RESTful services using ASP.NET Web API, managed data exchange with various clients"
                          : "ASP.NET Web API kullanarak RESTful servisler oluşturduk, çeşitli istemcilerle veri alışverişini yönettik."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Worked with MSSQL and Oracle databases for data modeling, performance optimization, and query improvements"
                          : "MSSQL ve Oracle veritabanlarıyla çalışarak veri modelleme, performans iyileştirme ve sorgu optimizasyonları yaptık."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Took technical responsibility for external system integrations (third-party APIs, internal services)"
                          : "Harici sistemlerle entegrasyon (üçüncü parti API'ler, kurum içi servisler) görevlerinde teknik sorumluluk üstlendik."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Developed dynamic, user-friendly web interfaces using React.js"
                          : "React.js ile dinamik, kullanıcı dostu web arayüzleri geliştirdik."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Developed mobile applications with Kotlin for specialized hardware used in production environment"
                          : "Üretim ortamında kullanılan özel donanımlar için Kotlin ile mobil uygulamalar geliştirdik."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Created web-based kiosk interfaces and touch screen systems"
                          : "Web tabanlı kiosk arayüzleri ve dokunmatik ekran sistemleri oluşturduk."
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">C#</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">.NET</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">Windows Forms</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">MSSQL</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">Oracle</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">React.js</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Translator' : 'Çevirmenlik'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Toybox Turkiye | January 2023 - February 2023' : 'Toybox Türkiye | Ocak 2023 - Şubat 2023'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "I provided language support to engineers from abroad and factory workers in the construction process of a factory in the food and beverage industry in the Thrace region."
                      : "Trakya bölgesinde yiyecek içecek sektöründe faaliyet gösteren bir şirketin fabrikasının kurulum sürecinde yurtışından gelen mühendisler ile fabrika çalışanları arasında anlaşabilmeleri için dil desteği sağladım."
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Providing language support to engineers and factory workers"
                          : "Fabrika çalışanları ile mühendisler arasında iletişimin sağlanması."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Supporting the needs of engineers in on-site and off-site organizations"
                          : "Mühendislerin ihtiyaçlarının sağlanması için şehiriçi ve şehirdışı organizyasyonlarda destek verilmesi."
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'English' : 'İngilizce'}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Language Support' : 'Dil Desteği'}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Translation' : 'Çeviri'}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Sales And Marketing Intern' : 'Satış ve Pazarlama Stajyeri'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'BILIMEVI Study Abroad Colcultancy | June 2020 -  July 2020' : 'BILIMEVI Yurtdışı Eğitim Danışmanlık | Haziran 2020 - Temmuz 2020'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "I gained experience in sales and marketing processes by working as a sales and marketing intern at an academic consultancy company in Alsancak, İzmir, for one month."
                      : "Lisans mezuniyetimin ardından Satış ve Pazarlama süreçlerini deneyimlemek adına İzmir/Alsancak mahallesinde bulunan akademik danışmanlık firmasında 1 ay Satış ve Pazarlama stajyeri olarak görev aldım."
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Identifying potential customers through social media platforms and informing them"
                          : "Sosyal medya platformları üzerinden potansiyel müşterilerin bulunması ve bilgilendirilmesi"
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Updating price lists by contacting foreign education institutions"
                          : "Yurtdışı eğitim kurumları ile iletişime geçerek fiyat listelerinin güncellenmesi."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Providing information about the opportunities of foreign education institutions"
                          : "Eğitim kurumlarının imkanlarının takip edilerek yenilikler hakkında bilgi sahibi olmak."
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Social Media' : 'Sosyal Medya'}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Marketing' : 'Pazarlama'}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Research' : 'Araştırma'}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Finance Intern' : 'Finans Stajyeri'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Coca-Cola CCI | August 2018 - September 2018' : 'Coca-Cola CCI | Ağustos 2018 - Eylül 2018'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "I gained experience in finance processes by working as a finance intern at Coca-Cola CCI in İzmir, for one month."
                      : "Yaz stajı döneminde Coca-Cola içecek firmasının İzmir ofisinde finans departmanında 1 ay süre ile stajyer olarak görev yaptım."
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Tracking finance processes"
                          : "Muhasebe ve Finans süreçlerinin takibi."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Supporting the needs of employees on the field"
                          : "Sahada çalışan personele destek çalışmaları."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Reporting and presenting the internship period to managers"
                          : "Staj bitiminde staj dönemi hakkında yöneticilere raporlama ve sunum."
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Accounting' : 'Muhasebe'}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Finance' : 'Finans'}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Reporting' : 'Raporlama'}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? 'Field Support' : 'Saha Destek'}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Purchasing and Human Resources Intern' : 'Satın Alma ve İnsan Kaynakları Stajyeri'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Pınar Entegre Et ve Un San. A.S. | July 2017 - August 2017' : 'Pınar Entegre Et ve Un San. A.S. | Temmuz 2017 - Ağustos 2017'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "I gained experience in human resources and purchasing processes by working as a purchasing and human resources intern at Pınar Entegre Et ve Un San. A.S. in İzmir, for one month."
                      : "Staj döneminin 2 haftalık sürecinde İnsan Kaynakları ve diğer 2 haftalık döneminde ise Satın Alma stajyeri olarak görev aldım."
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Tracking the leave processes of factory employees"
                          : "Fabrika çalışanlarının izin süreçlerinin takibi."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Monitoring the timekeeping processes of factory employees"
                          : "Puantaj işlemlerinin gerçekleştirilmesi"
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Monitoring the supply chain processes"
                          : "Tedarik zinciri süreçlerinin takibi."
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "Excel" : "Excel"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "SAP" : "SAP"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "ERP" : "ERP"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "Supply Chain" : "Tedarik Zinciri"}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Accounting Intern' : 'Muhasebe Stajyeri'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Çanakkale Seramik Authorized Dealer | September 2014 - June 2015' : 'Çanakkale Seramik Yetkili Satış Bayi | Eylül 2014 - Haziran 2015'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "During my last year of high school, I worked as an intern in the Accounting department at Çanakkale Seramik for 10 months."
                      : "Lise döneminin son yılında 10 ay boyunca Çanakkale Seramik'te Muhasebe departmanında stajyer olarak görev yaptım."
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Carrying out the billing processes"
                          : "Faturalandırma süreçlerinin gerçekleştirilmesi."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Tracking the bank transactions"
                          : "Banka işlemlerinin takibi."
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-[#111827]">
                        {isEnglish
                          ? "Monitoring the shipping processes"
                          : "Sevkiyat süreçlerinin takibi."
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "Accounting" : "Muhasebe"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "Financial Analysis" : "Finansal Analiz"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "Bookkeeping" : "Mali Muhasebe"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "Tax" : "Vergi"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Courses Section */}
      <ScrollAnimation>
        <section id="courses" className="container mx-auto px-4 py-20 bg-white scroll-mt-16">
          <div className="flex flex-col items-center mb-12 relative">
            <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-32 h-32 flex justify-center overflow-hidden pointer-events-none select-none z-0">
              <div className="w-full h-full flex justify-center items-start relative">
                <GraduationCap className="w-32 h-32 text-gray-300 opacity-30" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#111827] relative z-10 flex items-center gap-3">
              {isEnglish ? 'Courses & Certifications' : 'Kurslar & Sertifikalar'}
              <div className="absolute -bottom-4 left-1/2 h-1 bg-[#2563EB] rounded-full transition-all duration-500 ease-out group-data-[visible=true]:w-[120%] w-0 -translate-x-1/2" />
            </h2>
            <p className="mt-6 text-gray-600 text-center max-w-2xl">
              {isEnglish 
                ? "Continuous learning and professional development"
                : "Sürekli öğrenme ve profesyonel gelişim"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Advanced React.js Bootcamp' : 'İleri Seviye React.js Bootcamp'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Patika.dev | 2023' : 'Patika.dev | 2023'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "An intensive bootcamp program focused on modern web development with React.js, covering advanced topics and real-world projects."
                      : "React.js ile modern web geliştirme odaklı, ileri düzey konular ve gerçek dünya projeleri içeren yoğun bir bootcamp programı."
                    }
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">React.js</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">Redux Toolkit</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium"> {isEnglish ? "API Integration" : "API Entegrasyonu"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">MUI</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'React 401 - Advanced React Development' : 'React 401 - İleri Seviye React Geliştirme'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Turkcell Geleceği Yazanlar | March 2024' : 'Turkcell Geleceği Yazanlar | Mart 2024'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "Advanced React development course focusing on performance optimization, state management, and modern React patterns."
                      : "Performans optimizasyonu, durum yönetimi ve modern React desenlerine odaklanan ileri düzey React geliştirme kursu."
                    }
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">React.js</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">Redux</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Performance Optimization" : "Performans Optimizasyonu"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Advanced Patterns" : "İleri Seviye Desenler"}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'B1 Level English Language Course' : 'B1 Seviye İngilizce Dil Kursu'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'International House Language School Izmir | 2019' : 'International House Dil Okulu İzmir | 2019'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "Intermediate English language training program focusing on everyday communication, grammar, and vocabulary development."
                      : "Günlük iletişim, dilbilgisi ve kelime dağarcığı gelişimine odaklanan orta düzey İngilizce dil eğitim programı."
                    }
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Conversational English" : "Günlük İngilizce"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Grammar" : "Dilbilgisi"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Vocabulary" : "Kelime Dağarcığı"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "B1 Level" : "B1 Seviye"}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Zero to Cybersecurity Expert Training - TÜRSİB Project' : 'Sıfırdan Siber Güvenlik Uzmanlığı Eğitimi - TÜRSİB Projesi'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Udemy | November 2022' : 'Udemy | Kasım 2022'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "Comprehensive cybersecurity training program covering network security, ethical hacking, and security protocols."
                      : "Ağ güvenliği, etik hackleme ve güvenlik protokolleri konularını kapsayan kapsamlı siber güvenlik eğitim programı."
                    }
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Network Security" : "Ağ Güvenliği"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Ethical Hacking" : "Etik Hackleme"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Security Protocols" : "Güvenlik Protokolleri"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Penetration Testing" : "Penetrasyon Testi"}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'Advanced Level Excel and Adaptation Course' : 'İleri Düzey Excel ve Uyumluluk Kursu'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'Dokuz Eylül University | May 2019' : 'Dokuz Eylül Üniversitesi | Mayıs 2019'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "Advanced Excel training program focusing on data analysis, complex formulas, and business applications."
                      : "Veri analizi, karmaşık formüller ve iş uygulamalarına odaklanan ileri düzey Excel eğitim programı."
                    }
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Excel" : "Excel"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Data Analysis" : "Veri Analizi"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Business Intelligence" : "İş Zekası"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Financial Modeling" : "Finansal Modelleme"}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-[#2563EB] rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111827]">
                      {isEnglish ? 'B2 Level English Language Course' : 'B2 Seviye İngilizce Dil Kursu'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isEnglish ? 'English Time Language School | 2022' : 'English Time Dil Okulu | 2022'}
                    </p>
                  </div>
                </div>
                <div className="pl-4 space-y-2">
                  <p className="text-[#111827] leading-relaxed">
                    {isEnglish
                      ? "Advanced English language training program focusing on business communication, academic writing, and professional development."
                      : "İş iletişimi, akademik yazım ve profesyonel gelişime odaklanan ileri düzey İngilizce dil eğitim programı."
                    }
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Business English" : "İş İngilizcesi"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Academic Writing" : "Akademik Yazım"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "Professional Communication" : "Profesyonel İletişim"}</span>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">{isEnglish ? "B2 Level" : "B2 Seviye"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Projects Section */}
      <ScrollAnimation>
        <section id="projects" className="container mx-auto px-4 py-20 bg-white scroll-mt-16">
          <div className="flex flex-col items-center mb-12 relative">
            <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-32 h-32 flex justify-center overflow-hidden pointer-events-none select-none z-0">
              <div className="w-full h-full flex justify-center items-start relative">
                <FolderOpen className="w-32 h-32 text-gray-300 opacity-30" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#111827] relative z-10 flex items-center gap-3">
              {isEnglish ? 'Projects' : 'Projelerim'}
              <div className="absolute -bottom-4 left-1/2 h-1 bg-[#2563EB] rounded-full transition-all duration-500 ease-out group-data-[visible=true]:w-[120%] w-0 -translate-x-1/2" />
            </h2>
            <p className="mt-6 text-gray-600 text-center max-w-2xl">
              {isEnglish 
                ? "Showcase of my technical expertise and creativity"
                : "Teknik uzmanlığımın ve yaratıcılığımın vitrini"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Web-Based Business Intelligence Application with Machine Learning Techniques in the Automotive Industry"
                    : "Otomotiv Sektöründe Makine Öğrenimi Teknikleriyle Web Tabanlı İş Zekası Uygulaması"
                  }
                </CardTitle>
                <CardDescription>Python, Web Development, Scikit-learn, Matplotlib, Seaborn, Scikit-learn, Pandas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "A system developed within the scope of the master's thesis project that predicts car prices using various machine learning algorithms. An application enriched with data visualization tools that allows users to make model-based predictions through a web-based interface."
                    : "Yüksek lisans tez projesi kapsamında geliştirilen, çeşitli makine öğrenmesi algoritmaları kullanarak araba fiyatlarını tahmin eden bir sistem. Web tabanlı arayüz ile kullanıcıların model bazlı tahminler yapmasına olanak tanıyan, veri görselleştirme araçları ile zenginleştirilmiş bir uygulama."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://tez.yok.gov.tr/UlusalTezMerkezi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Personal Web Site Project"
                    : "Kişisel Web Sitesi Projesi"
                  }
                </CardTitle>
                <CardDescription>Next.js, TypeScript, Tailwind CSS, Shadcn UI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "A project that aims to make my career journey understandable through this web site developed with modern technologies as melihcengelli.dev."
                    : "melihcengelli.dev olarak modern teknolojileri kullanarak hazırladığım bu web sitesinde kariyer yolculuğumun anlaşılabilir bir şekilde takip edilebilmesi amaçlandı."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://melihcengelli.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Raspberry Pi Automatic Irrigation System"
                    : "Raspberry Pi Otomatik Sulama Sistemi"
                  }
                </CardTitle>
                <CardDescription>Python, Raspberry Pi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "A system developed with Python that performs automatic irrigation based on moisture sensor data. A project that gained experience in hardware and software integration."
                    : "Python ile geliştirilmiş, nem sensörü verilerine göre otomatik sulama yapan bir sistem. Donanım ve yazılım entegrasyonu konusunda deneyim kazanılmış bir proje."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://github.com/melihcengelli/Raspberry-Pi-Automatic-Irrigation-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Baykar Front-End Case"
                    : "Baykar Front-End Case"
                  }
                </CardTitle>
                <CardDescription>HTML, CSS, JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "A project prepared for Baykar's front-end development assessment. It stands out with its responsive design and user experience-focused approach for a shoe sales website."
                    : "Baykar firmasının ön yüz geliştirme değerlendirmesi için hazırlanmış bir proje. Bir ayakkabı satış sitesinin responsive tasarımı ve kullanıcı deneyimi odaklı yaklaşımı ile öne çıkıyor."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://github.com/melihcengelli/Baykar-Front-End-Case"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Baykar Case Script"
                    : "Baykar Case Script"
                  }
                </CardTitle>
                <CardDescription>React.js, HTML, CSS, JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "A Front End application developed for Baykar's assessment process that retrieves exam questions through an API, presents a specific number of questions to users, and evaluates their answers."
                    : "Baykar firmasının Front End değerlendirme sürecinde API üzerinden sınav soruları alınarak kullanıcılara belirli sayıdaki soruların sorulması ve alınan cevapların değerlendirmesini sağlayan Front End uygulaması geliştirildi."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://github.com/melihcengelli/Baykar-Front-End-Case-Script"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Jr Front-End Developer Assignment"
                    : "Jr Front-End Developer Assignment"
                  }
                </CardTitle>
                <CardDescription>TypeScript, React.js, SCSS, HTML</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "An assessment project prepared for a junior front-end developer position. It stands out with its use of modern JavaScript and TypeScript. Using the company's chosen API to display various countries in a table and enabling users to utilize various functions."
                    : "Junior seviye front-end geliştirici pozisyonu için hazırlanmış bir değerlendirme projesi. Modern JavaScript ve TypeScript kullanımı ile dikkat çekiyor. Şirketin seçmiş olduğu API'yi kullanarak çeşitli ülkelerin tabloda gösterilmesi ve çeşitli fonksiyonları kullanıcıların kullanabilmesini sağlamak."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://github.com/melihcengelli/Jr-Front-End-Developer-Assignment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Simple Banking Actions Panel"
                    : "Simple Banking Actions Panel"
                  }
                </CardTitle>
                <CardDescription>React.js, JavaScript, HTML, CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "An interface that simulates basic banking operations. A panel where users can perform operations such as depositing money, withdrawing money, and viewing balance."
                    : "Temel bankacılık işlemlerini simüle eden bir arayüz. Kullanıcıların para yatırma, çekme ve bakiye görüntüleme gibi işlemleri gerçekleştirebildiği bir panel."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://github.com/melihcengelli/Simple-Banking-Actions-Panel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Ares Automation"
                    : "Ares Otomasyon"
                  }
                </CardTitle>
                <CardDescription>React.js, Bootstrap, HTML, PHP</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "Due to the requirements of the parent company, a website was developed for Ares Automation with PHP for the BackEnd and React.js for the FrontEnd. The website introduces the company and allows job applications through the career section, with corporate email addresses created for employees. The application was published on Linux-based shared hosting."
                    : "Ares Otomasyon adındaki bir firmanın bağlı olduğu şirketin gereksinimleri dolayısıyla çalışanlara kurumsal mail adresleri oluşturularak BackEnd tarafında PHP, FrontEnd tarafında React.js olacak şekilde firmayı tanıtan ve kariyer kısmından iş başvuruları alabilecekleri internet sitesi hazırlanarak Linux tabanlı paylaşımlı hosting üzerinde yayınlandı."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://arescam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Dream Breath Shop"
                    : "Dream Breath Shop"
                  }
                </CardTitle>
                <CardDescription>React.js, HTML, CSS, PHP</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "A website was developed for a company wanting to enter the e-commerce sector, with React.js for the FrontEnd and PHP for the BackEnd. During its one year of operation, the website enabled access to various e-commerce platforms' sales addresses through products entered from the admin panel, allowing sales opportunities through different platforms in social media advertisements. The application was published on Linux-based shared hosting."
                    : "E-ticaret sektörüne giriş yapmak isteyen bir firmaya FrontEnd tarafı React.js, BackEnd kısmı ise PHP tabanlı olacak şekilde internet sitesi yapıldı. 1 yıl boyunca faaliyette kalan internet sitesinde admin panelinden girilen ürünlerin çeşitli e-ticaret platformlarındaki satış adreslerine istenilen ürün üzerinden erişilebilmesi sağlanarak sosyal medyadan yapılan reklamlarda farklı platformlar üzerinden satış imkanı yakalandı. Uygulama Linux tabanlı paylaşımlı hostinde yayınlandı."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://dreambreathshop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Next.js News Site"
                    : "Next.js Haber Sitesi"
                  }
                </CardTitle>
                <CardDescription>Next.js, JavaScript, React.js, Sanity, SCSS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "In the website developed with Next.js, content entered by users through the interface with various authorizations using Sanity CMS is displayed to users on the site through Rest API."
                    : "Next.js ile geliştirilen web sitesinde Sanity CMS kullanılarak kullanıcıların arayüzden çeşitli yetkilendirmelerle girdiği içeriklerin Rest API ile sitede kullanıcıların görüntülemesi sağlandı."
                  }
                </p>
              </CardContent>
              
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-[#2563EB]/20">
              <CardHeader>
                <CardTitle className="text-[#111827]">
                  {isEnglish
                    ? "Lüleburgaz Söve"
                    : "Lüleburgaz Söve"
                  }
                </CardTitle>
                <CardDescription>React.js, PHP, HTML, CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#111827]">
                  {isEnglish
                    ? "A website was prepared for Lüleburgaz Söve to showcase their products and services. On this site, all products produced by the company can be viewed in catalogs and all company information can be accessed. Additionally, at the company's request, the website was published on Linux-based shared hosting in three different languages: Turkish, English, and Bulgarian."
                    : "Lüleburgaz Söve isimli firmaya ürün ve hizmetlerini tanıtması amacıyla web sitesi hazırlandı. Bu sitede firmanın ürettiği tüm ürünler kataloglar halinde inceleniyor ve firmanın tüm bilgilerine erişilebiliyor. Ayrıca firmanın isteği doğrultusunda web sitesi Türkçe, İngilizce ve Bulgarca olmak üzere üç farklı dilde Linux tabanlı paylaşımlı hosting'de yayınlandı."
                  }
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://luleburgazsove.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  {isEnglish ? "Visit Site" : "Siteyi Ziyaret Et"} →
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Section */}
      <ScrollAnimation>
        <section id="contact" className="container mx-auto px-4 py-20 bg-white scroll-mt-16">
          <div className="flex flex-col items-center mb-12 relative">
            <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-32 h-32 flex justify-center overflow-hidden pointer-events-none select-none z-0">
              <div className="w-full h-full flex justify-center items-start relative">
                <Mail className="w-32 h-32 text-gray-300 opacity-30" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#111827] relative z-10 flex items-center gap-3">
              {isEnglish ? 'Contact' : 'İletişim'}
              <div className="absolute -bottom-4 left-1/2 h-1 bg-[#2563EB] rounded-full transition-all duration-500 ease-out group-data-[visible=true]:w-[120%] w-0 -translate-x-1/2" />
            </h2>
            <p className="mt-6 text-gray-600 text-center max-w-2xl">
              {isEnglish 
                ? "Let's connect and create something amazing together"
                : "Haydi birlikte harika şeyler yaratalım"
              }
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:melihcengelli@gmail.com" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/melihcengelli" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/melihcengelli" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </section>
      </ScrollAnimation>

      

      <ScrollToTop />
    </main>
  );
} 