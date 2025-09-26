// 1. Define the articles array
const articlesData = [
    // -------------------------------------------------------------
    // EXISTING ARTICLES (for reference)
    // -------------------------------------------------------------
    {
        id: 'malaria',
        icon: '🦟',
        category: 'Cututtuka',
        title: 'Yadda za a kare kansa daga Zazzabin Cizon Sauro',
        excerpt: 'Koyi yadda za ka kare kanka da iyalinka daga zazzabin cizon sauro ta hanyar amfani da rigakafi da kuma tsaftar muhalli.',
        date: 'Jiya',
        views: 245,
        fullContent: `
            Zazzabin cizon sauro yana daya daga cikin cututtuka masu haddasa mutuwa a Afrika. Don haka, muhimmanci ne mu koyi yadda za mu kare kanmu.
            
            ### Hanyoyin Kariya
            1.  **Amfani da Gidan Sauro:** Yi amfani da gidan sauro mai sinadarin kariya (Insecticide-Treated Net) lokacin barci.
            2.  **Tsaftar Muhalli:** Ka kawar da ruwan da ya taru a kusa da gidanka domin a nan ne sauro ke kiwo.
            3.  **Fesa Maganin Sauro:** Yin amfani da maganin sauro a cikin gida na iya taimakawa.
            4.  **Rigakafi na Wucin Gadi:** Ga mata masu juna biyu da yara, akwai maganin rigakafi na lokaci-lokaci (IPT) wanda ya kamata a bi.
        `
    },
    {
        id: 'nutrition',
        icon: '🥗',
        category: 'Abinci',
        title: 'Muhimmancin Cin Abinci Mai Gina Jiki',
        excerpt: 'Fahimci yadda abinci mai gina jiki ke taimakawa wajen kiyaye lafiya da kuma karfafa tsarin garkuwar jiki.',
        date: 'Kwana 2 da suka wuce',
        views: 189,
        fullContent: `
            Abinci mai gina jiki yana da muhimmanci sosai wajen kiyaye lafiyar jiki da kuma karfafa tsarin garkuwar jiki.
            
            ### Abincin da Ya Kamata a Fi Ci
            1.  **Protein:** Naman kaji, kifi, kwai, da kuma wake suna da mahimmanci wajen gina tsokoki.
            2.  **Fiber:** Kayayyakin hatsi (whole grains), ganyaye, da kayan marmari suna taimakawa wajen narkewar abinci.
            3.  **Ruwa:** Tabbatar cewa kana shan ruwa mai yamma a kowace rana don kiyaye jiki.
        `
    },
    {
        id: 'hygiene',
        icon: '🧼',
        category: 'Tsafta',
        title: 'Muhimmancin Wanke Hannu',
        excerpt: 'Koyi yadda wanke hannu ke hana yaduwar cututtuka da kuma kiyaye lafiyar al\'umma.',
        date: 'Mako guda da ya wuce',
        views: 312,
        fullContent: `
            Wanke hannu yana daya daga cikin hanyoyin da suka fi saukin hana yaduwar cututtuka kamar su sanyi da zawo.
            
            ### Yaushe Ya Kamata a Wanke Hannu?
            1.  Kafin da kuma bayan cin abinci.
            2.  Bayan zuwa bandaki.
            3.  Bayan tari ko atishawa.
            4.  Bayan kula da dabba ko shara.
            
            Ka yi amfani da sabulu da ruwa mai tsafta, kuma ka wanke na tsawon sakan 20.
        `
    },
    {
        id: 'exercise',
        icon: '🏃‍♂️',
        category: 'Motsa Jiki',
        title: 'Fa\'idodin Motsa Jiki ga Lafiya',
        excerpt: 'Gano yadda motsa jiki na yau da kullun ke inganta lafiyar zuciya da kuma rage hadarin cututtuka.',
        date: 'Kwanaki 3 da suka wuce',
        views: 156,
        fullContent: `
            Motsa jiki na yau da kullun yana da fa\'idodi masu yawa ga lafiyar jiki da hankali.
            
            ### Fa\'idodin Motsa Jiki
            1.  **Lafiyar Zuciya:** Yana rage hawan jini da karfafa zuciya.
            2.  **Kiyaye Kiba:** Yana taimakawa wajen rage kiba da kuma kiyaye lafiyar kasusuwa.
            3.  **Lafiyar Hankali:** Yana rage damuwa da kuma kara farin ciki ta hanyar samar da sinadaran "endorphins".
            
            Ka yi niyyar yin akalla minti 30 na motsa jiki sau 5 a mako.
        `
    },
    {
        id: 'water',
        icon: '💧',
        category: 'Ruwa',
        title: 'Muhimmancin Shan Ruwa Mai Tsafta',
        excerpt: 'Koyi yadda za ka tabbatar da cewa ruwan da kake sha yana da tsafta kuma bai da illa ga lafiya.',
        date: 'Mako guda da ya wuce',
        views: 278,
        fullContent: `
            Ruwa mai tsafta yana da muhimmanci sosai ga rayuwa. Kashi 60% na jikinmu ruwa ne.
            
            ### Muhimmancin Ruwa
            1.  **Daukar Abinci:** Ruwa yana taimakawa wajen daukar sinadaran abinci zuwa sassan jiki.
            2.  **Sarrafa Zafi:** Yana daidaita yanayin zafin jiki (temperature) ta hanyar gumi.
            3.  **Kiyaye Jiki:** Yana taimakawa wajen fitar da datti (toxins) daga jiki.
            
            Tabbatar cewa ruwan da kake sha an tafasa shi ko kuma an tace shi yadda ya kamata.
        `
    },
    {
        id: 'mental-health',
        icon: '🧠',
        category: 'Lafiyar Hankali',
        title: 'Kula da Lafiyar Hankali',
        excerpt: 'Fahimci alamun damuwa da kuma yadda za ka kula da lafiyar hankalinka a rayuwar yau da kullun.',
        date: 'Kwanaki 5 da suka wuce',
        views: 203,
        fullContent: `
            Lafiyar hankali tana da muhimmanci kamar lafiyar jiki. Mu koyi yadda za mu kula da hankalinmu.
            
            ### Hanyoyin Kula da Hankali
            1.  **Hutu:** Ka ba wa kanka lokaci don hutu da nishadi.
            2.  **Magana:** Yi magana da abokin amana game da damuwarka.
            3.  **Motsa Jiki:** Motsa Jiki na taimakawa wajen rage damuwa.
            
            Idan kana jin cewa hankalinka yana damunka, ka nemi taimakon likita.
        `
    },
    // -------------------------------------------------------------
    // NEW ARTICLES
    // -------------------------------------------------------------
    {
        id: 'diabetes-prevention',
        icon: '🍎',
        category: 'Cututtuka',
        title: 'Hanyoyin Kariya daga Ciwon Suga (Diabetes)',
        excerpt: 'Koyi matakai masu sauki da za ku iya ɗauka don rage haɗarin kamuwa da ciwon suga, ta hanyar cin abinci da motsa jiki.',
        date: 'A Yau',
        views: 410,
        fullContent: `
            Ciwon Suga (Diabetes) cuta ce da ke addabar mutane da yawa a duniya, amma akwai matakai masu sauki da za a iya ɗauka don rage haɗarinsa. Muhimmin abu shi ne tsarin rayuwa (lifestyle) da kuma abinci.

            ### 1. Kula da Abincin da Ake Ci
            * **Rage Zaki:** Ka guji shan abubuwan sha masu zaki da abinci mai yawan sikari (sugar). Wannan ya haɗa da lemu da ruwan 'ya'yan itace (fruit juice) da aka sarrafa.
            * **Cin Abinci Mai Gina Jiki:** Ka fi cin kayan marmari da ganyaye da kuma hatsi gabaɗaya (whole grains) kamar su gero, masara, shinkafa, da gero wanda ba a cire masa ƙwaifi ba.
            * **Rage Kitsen Kiba:** Ka guji kitse mai yawa (saturated and trans fats) da ake samu a soyayyun abinci ko nama mai yawan kitse.

            ### 2. Motsa Jiki na Yau da Kullun
            Motsa jiki yana taimakawa wajen sa jiki ya yi amfani da insulin yadda ya kamata, wanda ke rage matakin sukari a cikin jini.
            * **Auna Motsi:** Ka yi ƙoƙarin yin motsa jiki mai tsanani na tsawon minti 150 a kowanne mako. Wannan na iya zama tafiya da sauri, gudu, ko hawan keke.
            * **Guje wa Zama a Wuri Guda:** Ka tashi ka motsa kowane minti 30 a lokacin da kake zaune na dogon lokaci.

            ### 3. Kula da Nauyin Jiki
            Rage kiba, koda kaɗan ne, na iya rage haɗarin kamuwa da ciwon suga sosai. Idan ka rage 5% zuwa 7% na nauyin jikinka, zai iya kawo babban canji.
        `
    },
    {
        id: 'first-aid-basics',
        icon: '🩹',
        category: 'Taimakon Gaggawa',
        title: 'Mahimman Abubuwan Taimakon Gaggawa ga Iyali',
        excerpt: 'Sanin yadda za a ba da taimakon gaggawa na iya ceton rai. Koyaushe shirya don yanayi na gaggawa.',
        date: 'Kwana 1 da suka wuce',
        views: 350,
        fullContent: `
            Sanin mahimman abubuwan taimakon gaggawa (First Aid) ba wai kawai don ceton rai bane, har ma don hana rauni ya yi tsanani kafin a kai ga asibiti.

            ### 1. Abubuwan da Dole Ne Su Kasance a Akwatin Gaggawa
            Kowane gida ya kamata ya mallaki akwatin taimakon gaggawa da yake ciki:
            * **Banda da Gauze:** Don rufe raunuka da kuma daina zubar jini.
            * **Magani:** Tylenol ko Paracetamol (don zazzabi da ciwo), da kuma maganin kashe ƙwayoyin cuta (antiseptic).
            * **Thermometer:** Don auna zafin jiki.
            * **Littafin Jagora:** Yana da kyau a ajiye lambobin wayar gaggawa (kamar asibiti da 'yan sanda) a jiki.

            ### 2. Yadda Ake Kula da Rauni Mai Sauƙi
            * **Tsaftacewa:** Ka fara wanke raunin da ruwa mai tsafta da sabulu.
            * **Sanyawa Magani:** Shafa maganin kashe ƙwayoyin cuta (antiseptic cream) a kan raunin.
            * **Rufe Raunin:** Yi amfani da bandeji mai tsafta don rufe raunin, wanda zai taimaka wajen hana shigar ƙwayoyin cuta.

            ### 3. Idan Mutum Ya Suma (Unconsciousness)
            Kira taimakon gaggawa nan da nan. A lokacin jira:
            * **A Bude Hanyar Numfashi:** Tabbatar cewa ba a toshe hanyar numfashinsa ba.
            * **Sanya shi a Wuri Mai Dadi:** Kwantar da shi a gefe (recovery position) don hana haɗarin matsewar iska idan ya yi amai.
        `
    },
    {
        id: 'sleep-importance',
        icon: '😴',
        category: 'Lafiya Gabaɗaya',
        title: 'Muhimmancin Barci Mai Inganci ga Lafiya',
        excerpt: 'Fahimci yadda barci mai kyau ke shafar lafiyar jikinka da ta hankalinka, da kuma shawarwari don inganta shi.',
        date: 'Kwanaki 4 da suka wuce',
        views: 290,
        fullContent: `
            Barci ba lokacin hutu kawai bane. Yana da matukar muhimmanci ga aikin kwakwalwa da kuma gyaran jiki. Rashin barci mai inganci na iya shafar dukkan bangarorin rayuwarka.

            ### 1. Fa'idodin Barci Ga Kwakwalwa
            * **Inganta Tunani:** Barci na taimakawa wajen maido da ƙarfin kwakwalwa, yana mai sa ka mai da hankali da kuma tunani da kyau a rana mai zuwa.
            * **Karfafa Ƙwaƙwalwa:** Yana taimakawa wajen adana abubuwan da ka koya a cikin yini.
            * **Inganta Lafiyar Hankali:** Rashin barci na da alaƙa da ƙaruwar damuwa (stress) da baƙin ciki (depression).

            ### 2. Fa'idodin Barci Ga Jiki
            * **Gyaran Jiki:** A lokacin barci ne jiki ke gyara kansa, yana maido da ƙwayoyin halitta da kuma tsokoki.
            * **Karfafa Rigakafi:** Barci mai kyau yana taimakawa tsarin rigakafin jiki ya yi aiki yadda ya kamata, yana kare ka daga rashin lafiya.

            ### 3. Shawarwari Don Barci Mai Inganci
            * **Tsare Lokaci:** Ka kwanta kuma ka tashi a lokaci guda kowace rana, har ma a karshen wako.
            * **Guje wa Na'ura:** Ka guji kallon waya ko talabijin aƙalla awa ɗaya kafin ka kwanta.
            * **Muhalli Mai Dadi:** Tabbatar cewa ɗakinka yana da sanyi, duhu, kuma shiru.
        `
    },
    {
        id: 'vaccination-benefits',
        icon: '💉',
        category: 'Rigakafi',
        title: 'Fa\'idodin Rigakafi (Alurar Riga-Kafi) ga Yaro da Iyali',
        excerpt: 'Sanin mahimmancin rigakafi wajen kare yara da al\'umma daga cututtuka masu haɗari.',
        date: 'Mako 2 da suka wuce',
        views: 500,
        fullContent: `
            Rigakafi (Vaccination) na ɗaya daga cikin manyan nasarorin kiwon lafiya. Ba wai kawai yana kare yaronka bane, har ma yana kare al'ummar da kuke zaune tare.

            ### 1. Yadda Rigakafi Ke Aiki
            Alurar riga-kafi tana koya wa tsarin rigakafin jiki yadda zai gane kuma ya yaƙi ƙwayoyin cututtuka masu haɗari (kamar su Polio, Kyanda, da Zazzabin Yellow Fever) kafin su sa ka rashin lafiya. Yana gina kariya ba tare da shiga cikin haɗarin cutar ba.

            ### 2. Fa'idodin Kai Tsaye ga Yaro
            * **Kariya daga Cututtuka Masu Tsanani:** Rigakafi na hana cututtuka waɗanda a da suka kashe yara da dama.
            * **Inganta Ci Gaba:** Yaron da ke da lafiya zai iya koyo da girma da kyau a makaranta da kuma rayuwa.

            ### 3. Kariyar Al'umma (Herd Immunity)
            Lokacin da mutane da yawa a cikin al'umma suka yi rigakafi, wannan yana samar da wata kariya ta musamman da ake kira **Kariyar Al'umma**. Wannan yana kare waɗanda ba za su iya karɓar rigakafin ba, kamar jarirai ko mutanen da ke da raunin garkuwar jiki.

            ### 4. Amintaccen Hanyar Kariya
            Likita Ba Boka Ba yana bada shawara cewa rigakafi amintacce ne kuma ingantacce. Masana kimiyya sun gwada su sosai, kuma amfanin su ya ninka haɗarinsu na wucin gadi da yawa.
        `
    },
    {
        id: 'stress-management',
        icon: '🧘‍♀️',
        category: 'Lafiyar Hankali',
        title: 'Hanyoyin Rage Damuwa da Inganta Zaman Lafiya',
        excerpt: 'Koyi dabarun da za ku iya amfani da su don sarrafa damuwa da kiyaye lafiyar hankalinku a rayuwar yau da kullun.',
        date: 'Kwana 6 da suka wuce',
        views: 220,
        fullContent: `
            Damuwa (Stress) wani abu ne na rayuwa, amma idan ta yi yawa, tana iya shafar lafiyar jiki da ta hankali. Sanin dabarun sarrafa damuwa yana da mahimmanci don samun kwanciyar hankali.

            ### 1. Fahimtar Alamun Damuwa
            Alamun damuwa na iya haɗawa da:
            * **Ta Jiki:** Ciwon kai, ciwon ciki, ko rashin barci.
            * **Ta Hankali:** Jin damuwa, yawan fushi, ko samun matsala wajen mai da hankali.

            ### 2. Dabaru don Sarrafa Damuwa
            * **Motsa Jiki:** Ko da tafiya na minti 20 zai iya rage damuwa ta hanyar fitar da sinadarai masu sanyaya zuciya a cikin kwakwalwa.
            * **Fasahar Numfashi:** Lokacin da kake jin damuwa, ka yi numfashi mai zurfi: shaka sannu a hankali, riƙe, sannan fitar da iska sannu a hankali. Wannan yana sanyaya tsarin jijiyoyin ka.
            * **Tsare Iyakoki:** Koyi yadda za a ce **"A'a"** ga abubuwan da za su iya zama nauyi a gareka.
            * **Barci Mai Inganci:** Ka tabbatar kana samun isasshen barci a kowace dare, kamar yadda muka tattauna a labarin baya.

            ### 3. Neman Taimako
            Idan damuwa ta yi tsanani har ta shafi rayuwar ka ta yau da kullum, kada ka ji tsoron neman shawara daga likita ko mai ba da shawarar lafiyar hankali. Neman taimako yana nuna ƙarfi, ba rauni ba.
        `
    },
];

// 2. Define the categories array
const categoriesData = [
    { name: "Cututtuka", icon: "🤒", count: 4 },
    { name: "Abinci", icon: "🍎", count: 1 },
    { name: "Tsafta", icon: "🧼", count: 1 },
    { name: "Motsa Jiki", icon: "🏃", count: 1 },
    { name: "Lafiya Gabaɗaya", icon: "💪", count: 1 },
    { name: "Rigakafi", icon: "💉", count: 1 },
    { name: "Lafiyar Hankali", icon: "🧠", count: 2 },
    { name: "Taimakon Gaggawa", icon: "🩹", count: 1 },
    { name: "Ruwa", icon: "💧", count: 1 },
];

// 3. Export both arrays together as a single default object
export default { articlesData, categoriesData };
