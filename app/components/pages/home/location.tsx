'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 1;
    const width = window.innerWidth;
    if (width >= 1280) return 3;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
};

interface SlideItem {
    img: string;
    title: string;
    distance: string;
    desc: string;
    more: string;
    category: string;
}

const allSlides: SlideItem[] = [
    {
        img: 'location-u-1.png',
        title: 'Dolina Kościeliska',
        distance: '7,5 km',
        desc: 'Spokojna, szeroka dolina z łagodnym szlakiem przy potoku – doskonała na rodzinne spacery i bliskie spotkania z naturą. Na trasie czekają jaskinie, malownicze formacje skalne oraz klimatyczne schronisko – idealne na chwilę odpoczynku.',
        more: 'Dolina Kościeliska to jedna z najpiękniejszych i najczęściej odwiedzanych dolin Tatr Zachodnich, licząca około 9 km i prowadzona szeroką, łagodnie wznoszącą się drogą idealną dla rodzin z dziećmi i wózkami. Wędrując tędy, możesz odwiedzić liczne jaskinie (np. Mroźna, Mylna), przejść przez malownicze "bramy" i zatrzymać się w schronisku PTTK na Hali Ornak, aby posilić się oscypkiem lub herbatą.',
        category: 'Wycieczki',
    },
    {
        img: 'location-u-2.png',
        title: 'Dolina Chochołowska',
        distance: '6 km',
        desc: 'Marzysz o spokojnych, rodzinnych spacerach wśród szumiącego potoku i tatrzańskich szczytów? To miejsce jest idealne na relaks w górskim rytmie. Wiosną pola krokusów rozkwitają tutaj feerią barw, a schronisko PTTK na Polanie Chochołowskiej zaprasza na góralskie przysmaki i chwilę wytchnienia.',
        more: 'Dolina Chochołowska to najdłuższa dolina w polskich Tatrach, licząca około 10 km godnych ścieżek idealnych dla rodzin. Ścieżka od Siwej Polany do schroniska to łatwy, szeroki szlak – możliwy do pokonania z wózkiem lub rowerem. W sezonie wiosennym urocze pola krokusów przyciągają całe rodziny, a w schronisku można odpocząć przy oscypku lub cieplej herbacie.',
        category: 'Wycieczki',
    },
    {
        img: 'location-u-3.png',
        title: 'Dolina Małej Łąki',
        distance: '10 km',
        desc: 'Malowniczy spacer z dziećmi wśród reglowego lasu i potoku – bez trudnych podejść, za to pełen przestrzeni i spokoju. W sercu doliny rozciąga się Wielka Polana Małołącka – prawdziwy raj na piknik, z oszałamiającymi widokami na Giewont i Czerwone Wierchy.',
        more: 'Dolina Małej Łąki, najkrótsza z walnych dolin Tatr, ma zaledwie 5,4 km długości i idealny, rodzinny szlak – łatwy, szeroki i malowniczy. Jej centralnym punktem jest Wielka Polana Małołącka – dawne jezioro polodowcowe z panoramą skał i turni oraz ławkami do odpoczynku. W podziemiach kryją się także najgłębsze polskie jaskinie – Wielka Śnieżna i Śnieżna Studnia, fascynujące, choć dostępne tylko dla doświadczonych eksploratorów z pozwoleniem TPN.',
        category: 'Wycieczki',
    },
    {
        img: 'location-u-4.png',
        title: 'Zakopane Dworzec Pks',
        distance: '16 km',
        desc: 'Zakopane Dworzec PKS Nowoczesne przejście – blisko centrum, z wygodnym dojściem i podstawową infrastrukturą dla rodzin z bagażem. Zadaszone perony, poczekalnia z ławkami i szybki dostęp do busów turystycznych – idealny transportowy przystanek po przyjeździe.',
        more: 'Nowy dworzec autobusowy w Zakopanem, zlokalizowany przy ul. Chramcówki, oferuje wygodne warunki podróży: zadaszone perony, poczekalnię, ławki i postój taksówek. Z tego punktu odjeżdżają busy i autobusy w kierunku Tatr i okolicznych atrakcji – to doskonałe miejsce startu dla rodzin planujących wycieczki.',
        category: 'Sklepy',
    },
    {
        img: 'location-u-5.png',
        title: 'Chochołowskie Termy',
        distance: '2,1 km',
        desc: 'Rodzinna przygoda w największym kompleksie basenów termalnych na Podhalu — z rwącą rzeką, sztuczną falą, hydromasażem i zjeżdżalniami. Moc relaksu w wodach bogatych w minerały, strefa lecznicza, SPA i plac zabaw dla najmłodszych — doskonałe zakończenie górskiego dnia.',
        more: 'Chochołowskie Termy to ponad 30 basenów i niecka basenowa z wodą termalną, bogatą w minerały o właściwościach zdrowotnych. Dla dzieci przygotowano wodny plac zabaw, brodziki i zjeżdżalnie, a dorośli mogą skorzystać z saunarium, strefy wellness oraz zabiegów SPA. To miejsce, które łączy relaks, zabawę i troskę o zdrowie, idealne dla całej rodziny po dniu spędzonym w Tatrach.',
        category: 'Baseny termalne',
    },
    {
        img: 'location-u-6.png',
        title: 'Oravice Termy',
        distance: '20 km',
        desc: 'Wyjątkowe kąpiele w geotermalnych basenach z górskim pejzażem – idealne dla rodzin przez cały rok. Bogata w minerały woda koi ciało i duszę. Dzieci bawią się na zjeżdżalni, a dorośli relaksują się w saunie, podczas masażu lub na leżaku z widokiem na Tatry Zachodnie.',
        more: 'Termy Oravice, znane też jako Meander Thermal Park, położone są u podnóża Tatr Zachodnich, tuż przy granicy polsko-słowackiej. Obiekt oferuje 9 basenów o łącznej powierzchni ponad 1 500 m², w tym basen z falą i 100-metrową zjeżdżalnię, strefę relaksu z sauną i masażem oraz kryty łącznik wodny utrzymujący temperaturę ok. 38 °C nawet zimą. Woda termalna pochodzi z głębokości ponad 1 600 m i jest wysoko zmineralizowana, co sprawia, że kąpiel leczy i odpręża o każdej porze roku.',
        category: 'Baseny termalne',
    },
    {
        img: 'location-u-7.png',
        title: 'Tatralandia',
        distance: '31 km',
        desc: 'Tropikalny aquapark u stóp Tatr – ze zjeżdżalniami, basenami i animacjami, idealny na rodzinne szaleństwo przez cały rok. Relaks w ciepłych termalnych wodach, sauna, wellness i atrakcje dla najmłodszych – wszystko w jednym miejscu.',
        more: 'Tatralandia to największy aquapark Słowacji i jeden z największych w Europie Środkowej, położony w Liptovskim Mikulaszu, tuż przy Tatrach. Oferuje ponad 14 basenów (termalnych, słonych, świeżych), 30 zjeżdżalni, w tym mega zjeżdżalnie Flamingo i Duo Race, tropikalną halę „Tropical Paradise” oraz liczne animacje i relaksacyjne strefy wellness. Rodziny mogą korzystać z dziecięcych basenów, placów zabaw wodnych, surfowania na sztucznej fali i spokojnych zakątków, takich jak Baby Silent Zone czy pirackie place zabaw. Tatralandia to gwarancja wodnej zabawy i wypoczynku – niezależnie od pogody czy pory roku!',
        category: 'Baseny termalne',
    },
    {
        img: 'location-u-8.png',
        title: 'Witów SKI',
        distance: '1,5 km',
        desc: 'Przyjazny zimowy zakątek – idealny na rodzinne szaleństwo. Łagodne stoki dla początkujących, snowpark i widoki na Tatry czekają blisko Family House. Śnieg i zabawa tuż przy domu – oświetlone, zaśnieżane trasy, szkolenie w szkółce Jagny Marczułajtis i pyszna karczma “Witowianka” na krótką przerwę.',
        more: 'Witów Ski to kameralny, rodzinny ośrodek narciarski u podnóża Tatr Zachodnich, oferujący dwie szerokie trasy (ok. 1000 m i 120 m), zarówno dla początkujących, jak i tych, którzy chcą doskonalić technikę. Trasy są sztucznie naśnieżane, oświetlone, ratrakowane i nagłośnione, dzięki czemu są bezpieczne i dostępne przez cały sezon. W ośrodku działa szkoła narciarska „Szkoła Jagny” oraz popularny snowpark „Head Snowpark”. Dodatkowo goście mają dostęp do wypożyczalni sprzętu, serwisu, sklepiku sportowego, a także regionalnych restauracji i bezpłatnego parkingu przy dolnej stacji.',
        category: 'Wyciągi narciarskie',
    },
    {
        img: 'location-u-9.png',
        title: 'Wyciąg Uboc',
        distance: '160 m',
        desc: 'Łagodny stok i krótka trasa – idealne miejsce na pierwsze kroki w nartach. Blisko i wygodnie, wręcz przy domu Family House. Oświetlony, ratrakowany, sztucznie naśnieżany – doskonała propozycja dla rodzin i początkujących narciarzy. Szkółka, wypożyczalnia i karczma blisko stoku.',
        more: 'Wyciąg Uboc to ośrodek narciarski z 450‑metrową trasą orczykową, położony w centrum Witowa, który oferuje świetne warunki do nauki jazdy na nartach i snowboardzie. Stok jest oświetlony, ratrakowany i sztucznie naśnieżany, co zapewnia bezpieczeństwo i dostępność. Na miejscu działa wypożyczalnia sprzętu, szkółka narciarska, a także karczma „Uboc” oraz bezpłatny parking.',
        category: 'Wyciągi narciarskie',
    },
    {
        img: 'location-u-10.png',
        title: 'Polana Szymoszkowa',
        distance: '14 km',
        desc: 'Rodzinne zimowe szaleństwo na stokach z panoramicznym widokiem na Tatry i Giewont. Kolejka wjeżdża na Gubałówkę, zachwyt gwarantowany. Latem – unikalne kąpielisko geotermalne z widokiem na góry, plac zabaw dla dzieci i relaks wśród górskiej atmosfery.',
        more: 'Polana Szymoszkowa to ośrodek narciarski i rekreacyjny położony w Zakopanem. Dysponuje nowoczesną infrastrukturą: dwiema kolejkami (6- i 4-osobową), trasami narciarskimi (1,7 km) oświetlonymi i sztucznie naśnieżanymi, Kids Parkiem dla najmłodszych oraz wypożyczalnią sprzętu. Latem można tu korzystać z kąpieliska geotermalnego (czynne od czerwca), basenu z widokiem na góry, zjeżdżalni i plażowych rozrywek. To miejsce, gdzie aktywny wypoczynek łączy się z malowniczymi panoramami — idealne na rodzinny dzień niezależnie od sezonu.',
        category: 'Wyciągi narciarskie',
    },
    {
        img: 'location-u-11.png',
        title: 'Sezamek',
        distance: '400 m',
        desc: 'Witów 137 – codzienna wygoda tuż za progiem: sklep samoobsługowy z parkingiem i możliwością płatności kartą. Świeże pieczywo, nabiał, owoce, przekąski i wszystko, czego potrzeba na rodzinne śniadanie.',
        more: 'Sezamek w Witowie to lokalny sklep spożywczo‑przemysłowy, czynny od poniedziałku do soboty między 06:30 a 19:00. Dzięki samoobsłudze i płatności kartą zakupy są szybkie i wygodne. Sklep oferuje codzienne produkty – świeże owoce, warzywa, pieczywo, nabiał, przekąski oraz artykuły gospodarstwa domowego. Obok znajduje się parking dla klientów.',
        category: 'Sklepy',
    },
    {
        img: 'location-u-12.png',
        title: 'U Teresy',
        distance: '900 m',
        desc: 'Mały, rodzinny sklep w sercu Witowa – zawsze świeże produkty i życzliwa obsługa, idealny na codzienne zakupy podczas pobytu. Pieczywo, nabiał, słodycze i napoje – wszystko, czego potrzeba, by uzupełnić zapasy po dniu pełnym górskich atrakcji.',
        more: 'Sklep spożywczy U Teresy (adres: Witów 162C) to kameralne miejsce, w którym można kupić podstawowe produkty potrzebne na co dzień. Świeże pieczywo, nabiał, owoce, warzywa oraz drobne artykuły przemysłowe sprawiają, że nie trzeba wybierać się do większych sklepów w Zakopanem. Bliskość i lokalny charakter sklepu to wygodne rozwiązanie dla rodzin spędzających urlop w Family House – szybkie zakupy bez tracenia czasu na długie dojazdy.',
        category: 'Sklepy',
    },
    {
        img: 'location-u-13.png',
        title: 'U Bachledy',
        distance: '750 m',
        desc: 'Tradycyjny sklep spożywczy przy głównej drodze DW958 – wygodne miejsce na szybkie zakupy w drodze do Zakopanego lub na szlak. Znajdziesz tu pieczywo, nabiał, napoje i przekąski – idealne, by uzupełnić prowiant na górską wyprawę z całą rodziną.',
        more: 'Sklep spożywczy U Bachledy to lokalny punkt handlowy położony przy głównej trasie prowadzącej w stronę Zakopanego. Dzięki dogodnej lokalizacji jest chętnie wybierany przez turystów jako szybki przystanek na zakupy. Oferuje podstawowe produkty spożywcze – świeże pieczywo, nabiał, owoce, warzywa oraz słodkie i słone przekąski. To praktyczne i bliskie rozwiązanie dla rodzin spędzających urlop w Family House, pozwalające uzupełnić zapasy przed kolejną wycieczką.',
        category: 'Sklepy',
    },
    {
        img: 'location-u-14.png',
        title: 'Delikatesy u Leji',
        distance: '1,8 km',
        desc: 'Nowoczesny sklep w centrum Witowa – szeroki wybór produktów dla całej rodziny i wygodne zakupy blisko domu. Owoce, warzywa, nabiał, słodycze, pieczywo i napoje – wszystko w jednym miejscu.',
        more: 'Delikatesy u Leji (adres: Witów 145) to sklep o zróżnicowanej ofercie dla rodzin – świeże produkty, artykuły spożywcze, nabiał, pieczywo, napoje, słodycze i lokalne produkty regionalne. Sklep zapewnia wygodne zakupy dzięki przejrzystemu układowi i lokalizacji w centrum Witowa, co sprawia, że jest łatwo dostępny dla wszystkich mieszkańców i turystów.',
        category: 'Sklepy',
    },
    {
        img: 'location-u-15.png',
        title: 'Supermarket Chochołów',
        distance: '2,2 km',
        desc: 'Duży sklep z szerokim asortymentem – idealny na większe zakupy w pobliżu Family House. Produkty spożywcze, chemia gospodarcza, artykuły dziecięce, świeże pieczywo i warzywa – wszystko w jednym miejscu.',
        more: 'Supermarket Chochołów (adres: Chochołów 317E) to nowoczesny punkt handlowy z bogatym asortymentem – od produktów spożywczych, poprzez chemię gospodarczą, artykuły dziecięce, świeże pieczywo, owoce i warzywa, po napoje i produkty regionalne. Sklep jest dobrze zorganizowany, posiada parking i pozwala na szybkie zakupy zarówno dla rodzin, jak i turystów spędzających czas w okolicy.',
        category: 'Sklepy',
    },
    {
        img: 'location-u-16.png',
        title: 'Karczma Witówka',
        distance: '1,5 km',
        desc: 'Regionalna restauracja w pobliżu stoków – kuchnia podhalańska w klasycznym góralskim klimacie. Oscypek, kwaśnica, pierogi i gorące napoje po dniu pełnym atrakcji w górach.',
        more: 'Karczma Witówka to tradycyjna restauracja położona w Witowie, oferująca dania kuchni podhalańskiej i polskiej. Specjalnością są oscypki, kwaśnica, pierogi, a także różnorodne mięsa z grilla. Restauracja dysponuje przestronnym tarasem i salą wewnętrzną, zapewniając komfortowe warunki dla rodzin z dziećmi. Lokalizacja przy stokach narciarskich Witów SKI i Uboc sprawia, że jest to doskonały wybór na obiad lub kolację po dniu pełnym zimowych atrakcji.',
        category: 'Restauracje',
    },
    {
        img: 'location-u-17.png',
        title: 'Witowianka',
        distance: '1,5 km',
        desc: 'Regionalna restauracja z duszą – położona tuż przy wyciągu Witów‑Ski. Podhalańskie potrawy, tradycja i ciepła atmosfera w jednym miejscu.',
        more: 'Witowianka to wyjątkowe miejsce, gdzie kuchnia polska i europejska wzbogacona jest podhalańską tradycją. Goście mogą spróbować lokalnych specjałów, takich jak oscypek, kwaśnica, pierogi i gulasze, a także wypić regionalne napoje. Restauracja oferuje przestronną salę oraz taras z pięknym widokiem na Tatry, zapewniając komfortowy wypoczynek dla całej rodziny.',
        category: 'Restauracje',
    },
    {
        img: 'location-u-18.png',
        title: 'Restauracja U Kowala',
        distance: '2 km',
        desc: 'Stylowa restauracja w Chochołowie – kuchnia polska i europejska w nowoczesnym wydaniu. Idealne miejsce na romantyczną kolację lub rodzinny obiad.',
        more: 'Restauracja U Kowala w Chochołowie oferuje nowoczesną kuchnię polską i europejską, z daniami przygotowywanymi z lokalnych składników. Wnętrze jest stylowe i przestronne, z przytulną atmosferą dla rodzin i par. Na gości czekają zarówno tradycyjne potrawy, jak i nowoczesne kompozycje kulinarne.',
        category: 'Restauracje',
    },
    {
        img: 'location-u-19.png',
        title: 'Restauracja Góralska',
        distance: '2,5 km',
        desc: 'Autentyczna góralska kuchnia w Chochołowie – oscypek, kwaśnica, moskole. Ciepła atmosfera i lokalny klimat dla całej rodziny.',
        more: 'Restauracja Góralska to miejsce, gdzie serwowane są tradycyjne dania regionalne: oscypek w różnych odsłonach, kwaśnica, moskole oraz gulasze. Lokal posiada przestronną salę jadalną oraz taras, co pozwala na wygodne posiłki dla rodzin z dziećmi i większych grup. To idealne miejsce na degustację autentycznych smaków Podhala.',
        category: 'Restauracje',
    },
    {
        img: 'location-u-20.png',
        title: 'Karczma Pod Giewontem',
        distance: '3 km',
        desc: 'Restauracja w Zakopanem z widokiem na Giewont – kuchnia polska i regionalna, przyjazna dla rodzin z dziećmi.',
        more: 'Karczma Pod Giewontem oferuje dania kuchni polskiej i podhalańskiej, z widokiem na Giewont i Tatry. W menu znajdzysz oscypki, kwaśnicę, pierogi oraz dania mięsne z grilla. Restauracja jest przystosowana dla rodzin, posiada kącik dla dzieci, a także przestronny taras z panoramą gór.',
        category: 'Restauracje',
    },
    {
        img: 'location-u-21.png',
        title: 'Karczma U Fiakra',
        distance: '3,5 km',
        desc: 'Autentyczne góralskie dania w klimacie zakopiańskiej wsi – doskonałe dla rodzin i turystów.',
        more: 'Karczma U Fiakra to tradycyjna restauracja podhalańska, która serwuje dania kuchni regionalnej: oscypek, kwaśnicę, moskole, pierogi i mięsa z grilla. Wnętrze urządzone jest w góralskim stylu, a przyjazna obsługa gwarantuje komfortowy pobyt dla rodzin z dziećmi i turystów. Lokal położony jest w pobliżu atrakcji turystycznych Zakopanego i Witowa.',
        category: 'Restauracje',
    },
];

const categories = ['Wycieczki', 'Baseny termalne', 'Wyciągi narciarskie', 'Sklepy', 'Restauracje'];

const Location: React.FC = () => {
    const [openSlides, setOpenSlides] = useState<{ [key: number]: boolean }>({});
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleReadMore = (index: number) => {
        setOpenSlides((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleCategoryClick = (cat: string) => {
        setIsLoading(true);
        setTimeout(() => {
            setSelectedCategory(selectedCategory === cat ? null : cat);
            setIsLoading(false);
        }, 500);
    };

    const filteredSlides = selectedCategory
        ? allSlides.filter((slide) => slide.category === selectedCategory)
        : allSlides;


    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

    useEffect(() => {
        const handleResize = () => setVisibleSlides(getVisibleSlides());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (previewImage) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
    }, [previewImage]);

    const SkeletonLoader = ({ count }: { count: number }) => {
        // Use the current viewport to decide how many skeleton slides to show
        const [visibleSlides, setVisibleSlides] = React.useState(getVisibleSlides());

        React.useEffect(() => {
            const handleResize = () => setVisibleSlides(getVisibleSlides());
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        // Limit skeleton slides to the number of visible slides
        const displayCount = Math.min(count, visibleSlides);

        return (
            <div className="location-skeleton-slider">
                <div className="swiper-wrapper gap-4 xl:gap-7">
                    {[...Array(displayCount)].map((_, index) => (
                        <div
                            key={index}
                            className="swiper-slide !w-full md:!w-[calc(50%-7.5px)] lg:!w-[calc(33.333%-20px)] xl:!w-[calc(33.333%-20px)]"
                        >
                            <div className="w-full animate-pulse">
                                <div className="w-full h-[260px] sm:h-[300px] xl:h-[380px] 2xl:h-[475px] bg-gray-300 rounded-[20px]"></div>
                                <div className="mt-6">
                                    <div className="h-3 bg-gray-300 rounded-[4px] w-1/8"></div>
                                    <div className="h-6 bg-gray-300 rounded w-full mt-3 mb-[24px] xl:mb-[30px]"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-[24px] xl:mb-[34px]"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    return (

        <section className="bg-white pt-[120px] md:pt-[100px] lg:pt-[176px] pb-[52px] sm:pb-[70px] md:pb-[100px] xl:pb-[148px]">
            <div className="container">

                <p className="text-black text-lg lg:text-xl font-light leading-[170%] uppercase" data-aos="fade-up">
                    lokalizacja
                </p>

                <h3 className="text-black text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[111.111%] lg:tracking-[-1px]" data-aos="fade-up">
                    Co znajduje się w naszej okolicy?
                </h3>

                <div className="pt-[24px] md:pt-[70px] lg:pt-[100px] xl:pt-[110px] flex flex-col lg:flex-row lg:items-start lg:justify-between" data-aos="fade-up">

                    <div className="w-full lg:w-[20%]">
                        <ul>
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`text-lg 2xl:text-xl font-normal leading-[170%] transition-all hover:text-brown flex items-center gap-2 cursor-pointer ${selectedCategory === cat ? 'text-brown font-medium' : 'text-black'
                                            }`}
                                    >
                                        <span className="text-brown">&gt;</span> {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full lg:w-[80%] relative mt-[20px] lg:mt-0">

                        {isLoading ? (
                            <SkeletonLoader count={filteredSlides.length} />
                        ) : (
                            <>
                                <Swiper
                                    className="location_slider"
                                    navigation={{
                                        nextEl: '.location-button-next',
                                        prevEl: '.location-button-prev',
                                    }}
                                    spaceBetween={30}
                                    breakpoints={{
                                        0: { slidesPerView: 1, spaceBetween: 15 },
                                        768: { slidesPerView: 2, spaceBetween: 15 },
                                        1024: { slidesPerView: 3, spaceBetween: 15 },
                                        1280: { slidesPerView: 3, spaceBetween: 30 },
                                    }}
                                    modules={[Navigation]}
                                >
                                    {filteredSlides.map((slide, index) => (
                                        <SwiperSlide key={index}>
                                            <div>
                                                <div className="relative">
                                                    <Image
                                                        src={`/assets/img/${slide.img}`}
                                                        alt={slide.title}
                                                        width={800}
                                                        height={400}
                                                        className="w-full h-[260px] sm:h-[300px] xl:h-[380px] 2xl:h-[475px] object-cover rounded-[20px]"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setPreviewImage(`/assets/img/${slide.img}`)}
                                                        className="w-[48px] absolute bottom-[30px] right-[30px] cursor-pointer"
                                                    >
                                                        <Image
                                                            src="/assets/img/zoom.svg"
                                                            alt="Zoom"
                                                            width={48}
                                                            height={48}
                                                            className="w-full"
                                                        />
                                                    </button>

                                                </div>
                                                <div className="mt-4">
                                                    <Link
                                                        href="#"
                                                        className="text-[#707070] text-xs font-normal tracking-[0.12px] underline"
                                                    >
                                                        źródło
                                                    </Link>
                                                    <h4 className="text-black text-xl 2xl:text-2xl !font-work-sans font-medium leading-[137.5%] tracking-[0.24px] flex items-center justify-between mt-[6px] mb-[24px] xl:mb-[30px]">
                                                        {slide.title}
                                                        <span className="text-black text-xs font-medium tracking-[0.12px] inline-block border border-[#DFDFDF] px-2.5 py-0.5 rounded-[10px]">
                                                            {slide.distance}
                                                        </span>
                                                    </h4>
                                                    <p className="text-primary text-base 2xl:text-lg font-normal leading-[155.556%] tracking-[-0.18px] mb-[24px] xl:mb-[30px]">
                                                        {slide.desc}
                                                    </p>
                                                    <div
                                                        className={`more_text ${openSlides[index] ? 'max-h-[500px]' : 'max-h-0'
                                                            } overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                                                    >
                                                        <p className="text-primary text-base 2xl:text-lg font-normal leading-[155.556%] tracking-[-0.18px] mb-[24px] xl:mb-[30px]">
                                                            {slide.more}
                                                        </p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="group more_btn text-primary text-base font-normal leading-[180%] tracking-[-0.16px] inline-flex items-center gap-2.5 cursor-pointer"
                                                    >
                                                        Czytaj więcej
                                                        <Image
                                                            src="/assets/img/right-arrow-black.svg"
                                                            alt="Arrow"
                                                            width={20}
                                                            height={20}
                                                            className="w-5 transform transition-transform duration-300 group-hover:translate-x-2"
                                                        />
                                                    </button>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="w-full flex items-center justify-end gap-4 xl:gap-5 bottom-0 right-0 select-none pt-[50px] lg:pt-[85px] relative before:w-[75%] sm:before:w-[80%] lg:before:w-[84%] xl:before:w-[85%] 2xl:before:w-[88%] before:h-[1px] before:bg-[rgba(0,0,0,0.50)] before:block before:absolute before:left-0 before:bottom-[22px]">
                                    <div className="swiper-button-prev location-button-prev after:hidden !w-[30px] md:!w-[36px] lg:!w-[40px] xl:!w-[48px] !static">
                                        <Image src="/assets/img/left.svg" alt="Previous" width={48} height={48} className="w-full" />
                                    </div>
                                    <div className="swiper-button-next location-button-next after:hidden !w-[30px] md:!w-[36px] lg:!w-[40px] xl:!w-[48px] !static">
                                        <Image src="/assets/img/right.svg" alt="Next" width={48} height={48} className="w-full" />
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                </div>

            </div>

            {
                previewImage && (
                    <div onClick={() => setPreviewImage(null)} className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999999999999999]">
                        <div className="w-full h-full relative flex justify-center items-center">
                            <button
                                className="absolute top-4 cursor-pointer right-4 text-white text-4xl"
                                onClick={() => setPreviewImage(null)}
                            >
                                &times;
                            </button>

                            <div className="max-w-4xl max-h-[90%] w-full h-full flex items-center justify-center p-4">
                                <Image
                                    src={previewImage}
                                    alt="Preview"
                                    width={3000}
                                    height={3000}
                                    quality={100}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                )
            }

        </section >

    );
};

export default Location;