const i18nData = {
    'zh': {
        'main-title': '卓越技術開發<br>驅動企業未來', // 換掉租車標題
        'lang-toggle': 'EN',
        // 導航欄
        'nav-home': '首頁',
        'nav-about': '關於我們',
        'nav-services': '技術方案',
        'nav-dropdown': '技術資源',
        'nav-stats': '數據洞察',
        'nav-team': '開發團隊',
        'nav-portfolio': '案例展示',
        'nav-pricing': '服務方案',
        'nav-blog': '技術日誌',
        'nav-test': '客戶口碑',
        'nav-contact': '聯繫我們',
        'main-title': '卓越軟體開發<br>為您量身定制解決方案',
        'label-from': '項目類型',
        'input-project': '例如：開發應用', // 這裡會自動填入 placeholder
        'label-to': '您的郵件地址',
        'input-tech': '郵箱@reiichoro', // 這裡會自動填入 placeholder
        'label-submit': '立即提交',
        'btn-text': '發送請求',
        'form-footer-info': '<b>獲取<i>免費技術報價</i></b> 填寫表單即刻開啟諮詢 - 或 - ',
        'about-sub': '關於我們',
        'about-main-title': '我們為您的企業數位轉型<br>提供頂尖技術支持',
        'about-description': '我們專注於提供穩健的軟體開發與創新技術服務。從 AI 整合到雲端架構，我們的專家團隊確保您的業務在快速發展的數位領域中保持領先。我們將複雜的挑戰轉化為流暢的數位體驗。',
        // ... 關於我們 ...
        'why-sub': '選擇我們',
        'why-title': '用技術驅動創新',
        'why-desc': '我們提供定制化的軟體解決方案，助力您的企業在數位化時代實現規模化擴張與成功。',
        'why-btn': '閱讀更多',
        'feature-t1': '定制化開發',
        'feature-p1': '使用最新的技術棧，為您的特定需求量身打造軟體。',
        'feature-t2': '雲端解決方案',
        'feature-p2': '具備高可用性與高性能的可擴展雲端基礎架構。',
        'feature-t3': '網絡安全',
        'feature-p3': '企業級安全協議，全力保護您的數據與數位資產。',
        'feature-t4': 'AI 智能整合',
        'feature-p4': '利用機器學習與人工智能自動化業務流程並獲取洞察。',
        // ... 服務內容 ...
        'stats-clients': '全球客戶',
        'stats-projects': '成功交付項目',
        'stats-support': '技術支持時長',
        'stats-workers': '專家研發工程師',
        // Tab 標題
        'tab-t1': '品質保障', 'tab-t2': '高效交付', 'tab-t3': '賬變優勢', 'tab-t4': '技術專家',
        // Tab 1 (品質)
        't1-h': '零妥協的可靠系統',
        't1-p': '我們實施多層測試與代碼審查，確保您的軟體既穩健又安全。',
        't1-li1': '核心架構動態監控：24/7 追蹤預防系統崩潰',
        't1-li2': '單元測試覆蓋率：關鍵邏輯均通過自動化校驗',
        't1-li3': '高併發壓力模擬：確保萬人同時在線穩定運行',
        't1-li4': '持續集成開發：CI/CD 實現代碼自動化重測',
        't1-li5': '企業級安全審計：遵循國際標準杜絕數據外洩',
        'img-tab1': 'assets/images/Systems1.webp', 
        // Tab 2 (速度)
        't2-h': '敏捷開發，快速上線',
    't2-p': '我們的 CI/CD 流水線讓我們能以閃電般的速度交付更新與新功能，助您搶佔市場先機。',
    't2-li1': '兩週快速迭代：小步快跑，確保產品靈活響應市場需求',
    't2-li2': '每日雲端部署：自動化流水線，實現代碼即時上線',
    't2-li3': '實時看板透明化：您可以隨時追蹤每個模塊的開發進度',
    't2-li4': 'DevOps 自動化流：大幅減少人工干預，降低發布出錯率',
    't2-li5': '高性能灰度發布：在確保穩定的前提下，平滑推送新功能',
    'img-tab2': 'assets/images/Systems2.webp',
        // Tab 3 (價格)
        't3-h': '每一分錢，清晰可見',
    't3-p': '通過智能資源分配與全透明的賬務管理系統，讓您的技術投資回報率（ROI）最大化。',
    't3-li1': '實時賬務看板：項目支出分鐘級更新，拒絕月底驚喜',
    't3-li2': '雲端資源優化：動態調整負載，幫您節省 30% 無效雲支出',
    't3-li3': '無隱藏行政攤提：您的預算 100% 轉化為代碼與系統穩定性',
    't3-li4': '階梯式靈活付費：按需擴展模塊，初期投入成本降至最低',
    't3-li5': '詳細支出報告：每月自動生成技術維護清單，報賬無憂',
    'img-tab3': 'assets/images/Systems3.webp',
        // Tab 4 (專家)
        't4-h': '資深工程師團隊',
    't4-p': '我們的核心成員均來自一線技術大廠，在全棧開發與 AI 領域擁有超過 15 年的實戰積澱。',
    't4-li1': '資深架構師領軍：從底層邏輯出發，為您構建高可用的系統結構',
    't4-li2': '全棧式開發能力：涵蓋行動端、前端與後端，提供一站式解決方案',
    't4-li3': 'AI 整合先行者：擅長將生成式 AI 深度嵌入現有業務流程，提升效率',
    't4-li4': '24/7 全天候運維：自動化監控與專家介入雙重保障，系統永不下線',
    't4-li5': '顧問式技術支持：不只是代碼編寫者，更是您業務數位轉型的戰略隊友',
    'img-tab4': 'assets/images/Systems4.webp',
        // ... 我們的服務 ...
        'ser-sub': '我們的服務',
        'ser-title': '高品質技術解決方案',
        's1-t': '網頁開發', 's1-d': '構建響應式且高效能的網頁應用程序。',
        's2-t': '移動應用開發', 's2-d': '為 iOS 和 Android 提供原生及跨平台移動方案。',
        's3-t': '雲端解決方案', 's3-d': '安全的雲端託管、遷移及基礎架構管理。',
        's4-t': 'UI/UX 設計', 's4-d': '以用戶為中心，提供流暢的數位體驗。',
        's5-t': 'AI 與 大數據', 's5-d': '利用機器學習驅動商業智能與分析。',
        's6-t': '24/7 技術支持', 's6-d': '提供全天候的運維監控與技術協助。',
        // ... 團隊介紹 ...
        'team-sub': '核心團隊',
        'team-title': '我們的技術專家',
        // 成員 1
        'team-p1': '深耕分布式架構與高併發系統設計 15 載。擅長在極簡資源下構建企業級數位地基。從 2010 年至今始終堅持『技術減法』解決最複雜的商業問題。',
        'team-n1': '早坂·怜一郎',
        'team-r1': '首席技術官 (CTO)',
        // 成員 2
        'team-p2': '數位邏輯與自動化流程專家。她擁有非凡的跨領域知識整合能力，專注於將複雜的業務需求轉化為流暢的數位體驗。她主導系統零瑕疵運行的最後一道防線',
        'team-n2': '外山·壽姬',
        'team-r2': '研發技術組長',
        // 成員 3
        'team-p3': '數位美學與底層架構設計師。她深諳用戶心理學與數位環境的交互邏輯，擅長設計具備前瞻性賦予冷冰冰的技術體系以靈魂，讓企業具備長遠的品牌價值。',
        'team-n3': '京子',
        'team-r3': '高級軟體架構師',
        // 技術日誌區塊 (Blog Section)
        'blog-sub': '最新動態',
        'blog-title': '技術洞察',
        'blog-t1': '火星殖民可行性架構',
        'blog-d1': '硬核技術分析與未來商業洞察的結合',
        'blog-t2': '返老還童細胞重編程',
        'blog-d2': '醫學革命與長壽社會的重構',
        'blog-t3': '液態金屬機器人',
        'blog-d3': '解析室溫液態金屬、電場驅動形變與未來',
        'port-sub': '專案展示',
        'port-title': '近期交付案例',
        'test-name1': '丹尼斯 · 威爾遜',
        'test-quote1': '這支團隊在雲端架構優化方面的表現超出了我們的預期。他們不僅解決了現有的技術瓶頸，還為我們未來的擴展奠定了基礎。',
        'price-sub': '服務方案',
    'price-title': '透明的價格體系',
    // 方案 1
    'p1-name': '免費試用', 'p1-price': '<sup>$</sup>0<span> / 每日</span>',
    'p1-li1': '社區支持', 'p1-li2': '基礎接口存取', 'p1-li3': '1 個專案', 'p1-li4': '雲端儲存 (不含)', 'p-btn1': '立即體驗',
    // 方案 2
    'p2-name': '商務版', 'p2-price': '<sup>$</sup>49<span> / 每日</span>',
    'p2-li1': '24/7 技術支持', 'p2-li2': '高級數據分析', 'p2-li3': '無限專案數', 'p2-li4': '雲端系統整合', 'p-btn2': '立即購買',
    // 方案 3
    'p3-name': '個人專業版', 'p3-price': '<sup>$</sup>69<span> / 每日</span>',
    'p3-li1': '優先技術支持', 'p3-li2': 'SEO 搜尋優化', 'p3-li3': '5 個專案', 'p3-li4': '數據自動備份', 'p-btn3': '立即購買',
    // 方案 4
    'p4-name': '企業旗艦版', 'p4-price': '<sup>$</sup>99<span> / 每日</span>',
    'p4-li1': '定制化開發', 'p4-li2': '全媒體接口支援', 'p4-li3': '全球分佈式存儲', 'p4-li4': '頂級安全防護', 'p-btn4': '聯繫專家',
    'contact-sub': '聯繫我們',
    'contact-title': '隨時與我們取得聯繫',
    'contact-desc': '開始與我們合作，我們提供您在數位轉型中所需的一切支持。我們承諾在 24 小時內解決您的任何技術問題。',
    'cont-h1': '公司地址',
    'cont-p1': '東京都渋谷区桜丘町26-1 セルリアンタワー15F',
    'cont-h2': '致電我們',
    'cont-h3': '郵件諮詢',
    // 表單翻譯 (透過 setLanguage 自動抓取 id)
    'f-name': '您的姓名',
    'f-email': '電子郵箱',
    'f-subject': '諮詢主題',
    'f-msg': '您的具體需求...',
    'f-btn': '發送訊息',
    'foot-desc': '致力於前沿軟體解決方案，專注雲端架構與 AI 整合，助力企業數位轉型。',
    'foot-h1': '常用連結',
    'foot-h2': '我們的服務',
    'foot-h3': '訂閱電子報',
    'foot-news-desc': '獲取每週最新技術資訊與更新。',
    'f-link1': '首頁', 'f-link2': '關於我們', 'f-link3': '服務項目', 'f-link4': '服務條款', 'f-link5': '隱私政策',
    'f-link6': '部落格', 'f-link7': '數據統計', 'f-link8': '服務方案',
    'f-input': '輸入您的郵箱...',
    'copyright': 'Copyright © 2026 早坂怜一郎. 保留所有權利。',
    'f-sub-btn': '立即訂閱' ,
    'meta-title': 'REII CHIORO | 亞洲專業 APP 開發與系統運維專家',
    'meta-desc': '專注於亞洲市場的 App 開發與系統運維服務。我們提供端到端的技術解決方案，涵蓋行動應用設計與雲端維護。',
    'about-title-main': '關於我們',
        'about-ch1': 'Chapter 01: 資源的極簡與認知的奢華',
        'about-ch2': 'Chapter 02: 專業身份與核心技術能力',
        'about-ch3': 'Chapter 03: 為企業主創造真正的「確定性」',
        // 圖片路徑定義
        'img-about1': 'assets/images/ABOUT1.webp',
        'img-about2': 'assets/images/ABOUT2.webp',
        'img-about3': 'assets/images/ABOUT3.webp',
        'system-title-main': '技術方案：核心架構體系',
    'system-ch1': 'Part 01: 品質保障 - 零妥協的可靠性',
    'system-ch2': 'Part 02: 高效交付 - 敏捷與自動化流',
    'system-ch3': 'Part 03: 賬變優勢 - 財務透明化掌控',
    'system-ch4': 'Part 04: 技術專家 - 全棧大廠實戰積澱',
    'team-title-main': '核心靈魂：專業與精神',
'team-ch1': 'Part 01: 【履歷與起源】—— 技術的厚度',
'team-ch2': 'Part 02: 【精神與風格】—— 執行的強度',
'team-ch3': 'Part 03: 【生活與修養】—— 靈魂的寬度',
'img-team1': 'assets/images/Team1.webp', 
'img-team2': 'assets/images/Systems5.webp', 
'img-team3': 'assets/images/Systems6.webp',
'team2-title-main': '核心領魂：邏輯與效率',
'team2-ch1': 'Part 01: 【邏輯之巔】—— 精準定義架構',
'team2-ch2': 'Part 02: 【敏捷速度】—— 毫秒級執行力',
'team2-ch3': 'Part 03: 【跨界整合】—— 賦予技術直覺',
'img-team2-1': 'assets/images/Team2.webp',
'img-team2-2': 'assets/images/Systems7.webp',
'img-team2-3': 'assets/images/Systems8.webp',
'team3-title-main': '核心靈魂：美學與架構',
'team3-ch1': 'Part 01: 【美學架構】—— 代碼的優雅筆觸',
'team3-p1': '數位美學設計師，擅長將用戶心理學融入交互邏輯。她的設計不僅關乎技術實現，更關乎感官的流暢與品牌情感的傳遞。',
'team3-ch2': 'Part 02: 【深度洞察】—— 預見未來的增長',
'team3-p2': '專注於具備前瞻性的擴展式架構，確保系統能隨企業規模進化。她讓技術不再是負擔，而是資產，支撐長遠的擴展潛力。',
'team3-ch3': 'Part 03: 【靈魂賦予】—— 技術與品牌共生',
'team3-p3': '賦予冷冰冰的體系以靈魂，讓每一項技術投資都具備商業美學。她站在技術與商業的交匯點，重構數位世界的價值。',
'img-team3-1': 'assets/images/Team3.webp',
'img-team3-2': 'assets/images/Systems9.webp',
'img-team3-3': 'assets/images/Systems10.webp',
// Blog 1: Mars Colonization
       'blog1-title-main': '火星殖民：技術架構與商業願景',
        // Slide 1
        'blog1-ch1': 'Part 01: 【可行性】—— 跨星際技術堆疊',
        'blog1-p1': '從重型運載到在地資源利用（ISRU），解析支撐人類跨越星際的核心技術底層。包含封閉式生態循環與能源供應系統。',
        // Slide 2
        'blog1-ch2': 'Part 02: 【路徑圖】—— 從前哨站到永久殖民',
        'blog1-p2': '分析從無人探測、樣本回收、載人前哨站到最終完全自治社會的演進過程，確保系統具備長期擴展性。',
        // Slide 3
        'blog1-ch3': 'Part 03: 【價值鏈】—— 商業模型與戰略獲利',
        'blog1-p3': '探索火星殖民的長期投資回報：包含科學數據銷售、特殊材料製造、技術專利授權以及高淨值太空旅遊。',
        'img-blog1-1': 'assets/images/Blog1.webp',
        'img-blog1-2': 'assets/images/Blog2.webp',
        'img-blog1-3': 'assets/images/Blog3.webp',
        'blog2-title-main': '人類基因編程：返老還童工程',
        // Slide 1
        'blog2-ch1': 'Part 01: 【技術重置】—— 表觀遺傳的逆轉邏輯',
        'blog2-p1': '基於山中因子與細胞重編程技術，我們正在嘗試重置細胞的老化標記。雖然面臨腫瘤化風險，但「細胞年輕化」的技術路徑已然清晰。',
        // Slide 2
        'blog2-ch2': 'Part 02: 【醫學變革】—— 重新定義生命長度',
        'blog2-p2': '從治療疾病轉向消除衰老。這不僅是醫療模式的顛覆，更將徹底解決老齡化社會的醫療負擔，重新定義人類的工作與退休制度。',
        // Slide 3
        'blog2-ch3': 'Part 03: 【長壽資本】—— 頂層醫療的商業版圖',
        'blog2-p3': '掌握長壽技術即掌握全球生物科技霸權。從百萬美元級的富豪療程到面向大眾的專利授權，開啟人類文明最強大的盈利引擎。',
        
        'img-blog2-1': 'assets/images/Blog4.webp',
        'img-blog2-2': 'assets/images/Blog5.webp',
        'img-blog2-3': 'assets/images/Blog6.webp',
        'blog3-title-main': '液態金屬機器人：T-1000 的技術實現路徑',
        // Slide 1
        'blog3-ch1': 'Part 01: 【物質基礎】—— 室溫液態金屬合金',
        'blog3-p1': '基於鎵基合金（Ga-based alloys）的特性，探索具備高導電性與表面張力可控性的液態金屬，實現形體自癒與柔性運動。',
        // Slide 2
        'blog3-ch2': 'Part 02: 【形變控制】—— 電場驅動與編程相變',
        'blog3-p2': '透過外部電場誘導表面張力梯度，實現液態金屬的精準位移、融合與形狀鎖定。這是從「流體」轉向「結構體」的關鍵。',
        // Slide 3
        'blog3-ch3': 'Part 03: 【功能賦予】—— 戰略價值與未來盈利',
        'blog3-p3': '從災難救援的狹縫滲透到人體內的微型醫療介入。這項技術將重構機器人定義，並在高尖端國防與精準醫療領域創造巨額產值。',
        
        'img-blog3-1': 'assets/images/Blog7.webp',
        'img-blog3-2': 'assets/images/Blog8.webp',
        'img-blog3-3': 'assets/images/Blog9.webp',
        'case1-title-main': '外星交付案例：沃隆族 (Vorlons) 跨維度系統集成',
    // Slide 1
    'case1-ch1': 'Part 01: 【客戶畫像】—— 天苑四的能量守望者',
    'img-case1-1': 'assets/images/Case1.webp',
    // Slide 2
    'case1-ch2': 'Part 02: 【開發軟體】—— Vocalis-OS 生物光學接口系統',
    'img-case1-2': 'assets/images/Case2.webp',
    // Slide 3
    'case1-ch3': 'Part 03: 【好評原因】—— 重塑放棄肉身後的「感官自由」',
    'case1-p1': '來自天苑四的高維度能量文明。合作重點在於解決其放棄肉身後，如何與物理維度中的有機建築及環境進行無損、實時的思想交互。',
'case1-p2': '開發全球首個基於高維頻率轉譯的 Vocalis-OS，將沃隆族的意念震盪轉化為精確的生物電指令，驅動有機飛船與城市的機能運作。',
'case1-p3': '這不僅是軟體交付，更是跨文明的邏輯對話。系統上線後，顯著降低了沃隆族在物理維度的交互精神熵值，實現了真正的感官自由。',
    'img-case1-3': 'assets/images/Case3.webp',
    'case2-title-main': '外星交付案例：靈族 (Aeldari) 網道智能導航系統',
    // Slide 1
    'case2-ch1': 'Part 01: 【客戶畫像】—— 方舟世界的守望者',
    'case2-p1': '擁有極高審美與靈能文明的靈族。本次合作旨在為其提供無接縫的亞空間穿行解決方案，規避不可名狀的靈能風險。',
    'img-case2-1': 'assets/images/Case4.webp',
    // Slide 2
    'case2-ch2': 'Part 02: 【交付產物】—— 網道亞空間裂隙預警與拓撲系統',
    'case2-p2': '開發基於大數據與非線性算法的靈能漲落預測模型，完美嵌入其靈骨（Wraithbone）控制面板。',
    'img-case2-2': 'assets/images/Case5.webp',
    // Slide 3
    'case2-ch3': 'Part 03: 【好評原因】—— 精準避開亞空間風暴的威脅',
    'case2-p3': '這名地球程序員掌握了星辰跳動的節奏。系統上線後，網道航行事故率下降了 99%。',
    'img-case2-3': 'assets/images/Case6.webp',
    'case3-title-main': '外星交付案例：普洛仙 (Protheans) 全感官數據封存陣列',
    // Slide 1
    'case3-ch1': 'Part 01: 【客戶畫像】—— 失落帝國的文明傳承者',
    'case3-p1': '擁有四目複眼的甲殼類文明，通過生物觸覺交換記憶。本次合作旨在解決其生物存儲媒介隨時間降解的「文明遺忘危機」。',
    'img-case3-1': 'assets/images/Case7.webp',
    // Slide 2
    'case3-ch2': 'Part 02: 【交付產物】—— 四目聯覺：數字封存與 5D 內存陣列',
    'case3-p2': '開發五維內存池無損壓縮算法，將觸覺、視覺與生物電信號整合，封存於分子級精密發光的幾何方尖碑中。',
    'img-case3-2': 'assets/images/Case8.webp',
    // Slide 3
    'case3-ch3': 'Part 03: 【好評原因】—— 對抗時間熵增的最後防線',
    'case3-p3': '成功實現感官信息的跨世代完整傳承。客戶反饋稱：這名地球程序員，讓我們的文明在時間的洪流中永生。',
    'img-case3-3': 'assets/images/Case9.webp',
    'case4-title-main': '外星交付案例：8472 種族 (Species 8472) 物理參數兼容控制層',
    // Slide 1
    'case4-ch1': 'Part 01: 【客戶畫像】—— 流體空間的巔峰掠食者',
    'case4-p1': '擁有三足結構與五隻冷光複眼的跨維度生物。其居住環境為純有機流體維度，進入實體宇宙後常因物理常數不兼容導致生物組織應激。',
    'img-case4-1': 'assets/images/Case10.webp',
    // Slide 2
    'case4-ch2': 'Part 02: 【交付產物】—— 物理模擬中間件與引力場調節系統',
    'case4-p2': '開發物理參數兼容層，在生物戰艦周圍生成局部流體物理場，將實體宇宙的重力阻力重新編碼為生物體可承受的壓強環境。',
    'img-case4-2': 'assets/images/Case11.webp',
    // Slide 3
    'case4-ch3': 'Part 03: 【好評原因】—— 定義跨維度的物理自由',
    'case4-p3': '完美解決了跨維度航行的物理排斥反應。客戶評價道：「三足不再顫抖，五眼看清了這片乾枯的宇宙。」',
    'img-case4-3': 'assets/images/Case12.webp',
    'case5-title-main': '先驅者 (Forerunners) —— 硬光動態建築指令集專案',
    // Slide 1
    'case5-ch1': 'Part 01: 【客戶畫像】—— 銀河系秩序的終極維護者',
    'case5-p1': '身高 3 米以上的類人文明，手部擁有多指關節。崇尚極致的數學理性，其建築技術核心為「硬光（Hard Light）」。',
    'img-case5-1': 'assets/images/Case13.webp',
    // Slide 2
    'case5-ch2': 'Part 02: 【交付產物】—— Lux-Arch v10.0：硬光結構動態建築指令集',
    'case5-p2': '優化渲染引擎算法，將巨型建築重組延遲降低至普朗克時間以下，實現 100% 的純淨幾何對稱。',
    'img-case5-2': 'assets/images/Case14.webp',
    // Slide 3
    'case5-ch3': 'Part 03: 【好評原因】—— 重塑神級文明的幾何美學',
    'case5-p3': '解決了宏觀尺度下的同步難題。客戶反饋：「他的代碼，像光一樣精準且優雅。」',
    'img-case5-3': 'assets/images/Case15.webp',
    'case6-title-main': '氪星文明 (Kryptonians) —— 液態金屬智能幾何交互環境專案',
    // Slide 1
    'case6-ch1': 'Part 01: 【客戶畫像】—— 基因優化的完美體與液態建築',
    'case6-p1': '來自紅色恆星「柯魯」系統。建築如同從黑曜石山脈中直接長出的活體，內部裝飾使用「液態幾何」技術，追求古典貴族的奢靡與超前科技的冰冷。',
    'img-case6-1': 'assets/images/Case16.webp',
    // Slide 2
    'case6-ch2': 'Part 02: 【交付產物】—— Liquid-Geometry UI：量子引力交互引擎',
    'case6-p2': '開發基於「量子引力」的 UI 引擎，操控數億個細小金屬球的物理碰撞，消除大規模粒子重組時的延遲，實現完美的流體美學。',
    'img-case6-2': 'assets/images/Case17.webp',
    // Slide 3
    'case6-ch3': 'Part 03: 【好評原因】—— 定義超前科技的冰冷美學',
    'case6-p3': '成功實現絲滑的液態界面，星圖隨手指揮動瞬間成型。客戶反饋：「這是氪星重生以來，最符合藝術美學的交互界面。」',
    'img-case6-3': 'assets/images/Case18.webp'
    },
    'en': {
        'main-title': 'Advanced Tech Development<br>For Future Business',
        'lang-toggle': '中',
        // 導航欄
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Solutions',
        'nav-dropdown': 'Resources',
        'nav-stats': 'Insights',
        'nav-team': 'Engineers',
        'nav-portfolio': 'Cases',
        'nav-pricing': 'Plans',
        'nav-blog': 'Tech Blog',
        'nav-test': 'Clients',
        'nav-contact': 'Contact',
        'main-title': 'Custom Software <br> Development Solutions',
        'label-from': 'Project Type',
        'input-project': 'e.g. Web App',
        'label-to': 'Your Contact Email',
        'input-tech': 'mail@reiichoro',
        'label-submit': 'Action',
        'btn-text': 'Send request',
        'form-footer-info': '<b>Get your <i>Free Tech Quote</i></b> by completing our quick form - or - ',
        'about-sub': 'About Us',
        'about-main-title': 'We provide cutting-edge solutions<br>for your digital transformation.',
        'about-description': 'We specialize in delivering robust software development and innovative technology services. From AI integration to cloud infrastructure, our expert team ensures your business stays ahead in the rapidly evolving digital landscape. We turn complex challenges into seamless digital experiences.',
        // ... 關於我們 ...
        'why-sub': 'Why Us',
        'why-title': 'Driving Innovation with Technology',
        'why-desc': 'We deliver customized software solutions that empower your business to scale and succeed.',
        'why-btn': 'Read More',
        'feature-t1': 'Custom Development',
        'feature-p1': 'Tailor-made software built with the latest tech stacks.',
        'feature-t2': 'Cloud Solutions',
        'feature-p2': 'Scalable cloud infrastructure for high performance.',
        'feature-t3': 'Cyber Security',
        'feature-p3': 'Enterprise-grade security to protect your assets.',
        'feature-t4': 'AI Integration',
        'feature-p4': 'Leverage machine learning to automate processes.',
        // ... 服務內容 ...
        'stats-clients': 'Global Clients',
        'stats-projects': 'Projects Delivered',
        'stats-support': 'Hours Of Support',
        'stats-workers': 'Expert Engineers',
        'tab-t1': 'Guaranteed Quality', 'tab-t2': 'Get There Faster', 'tab-t3': 'Financial Transparency', 'tab-t4': 'Tech Specialists',
        't1-h': 'Reliable Systems, Zero Compromise',
        't1-p': 'We implement multi-layer testing and code reviews to ensure your software is robust and secure.',
        't1-li1': 'Real-time Monitoring: 24/7 tracking to prevent crashes',
        't1-li2': 'Unit Test Coverage: All core logics are script-verified',
        't1-li3': 'High Concurrency: Stable under massive traffic loads',
        't1-li4': 'Continuous Delivery: CI/CD automated regression tests',
        't1-li5': 'Security Audits: Enterprise-grade data protection',
        'img-tab1': 'assets/images/EN-Systems1.webp',
        't2-h': 'Agile Development, Rapid Launch',
    't2-p': 'Our CI/CD pipelines allow us to deliver updates and new features at lightning speed, keeping you ahead of the market.',
    't2-li1': '2-Week Iteration: Agile sprints for flexible market response',
    't2-li2': 'Daily Cloud Deployment: Automated pipelines for instant updates',
    't2-li3': 'Real-time Transparency: Track every module\'s progress anytime',
    't2-li4': 'DevOps Automation: Minimizing manual errors in delivery',
    't2-li5': 'Canary Release: Smoothly pushing features with zero downtime',
    'img-tab2': 'assets/images/EN-Systems2.webp',
        't3-h': 'Every Cent, Crystal Clear',
    't3-p': 'Maximize your ROI through intelligent resource allocation and a fully transparent financial management system.',
    't3-li1': 'Real-time Dashboard: Minute-level spending updates, no surprises',
    't3-li2': 'Cloud Optimization: Cutting 30% of waste via dynamic scaling',
    't3-li3': 'Zero Hidden Overhead: 100% of budget goes to code & stability',
    't3-li4': 'Flexible Tiered Pricing: Pay as you grow, minimize initial cost',
    't3-li5': 'Detailed Audit Reports: Automated monthly tech maintenance logs',
    'img-tab3': 'assets/images/EN-Systems3.webp',
        't4-h': 'Elite Engineering Team',
    't4-p': 'Our core members come from top-tier tech firms, with over 15 years of hands-on experience in full-stack dev and AI.',
    't4-li1': 'Architect-Led Strategy: Building high-availability systems from the ground up',
    't4-li2': 'Full-Stack Proficiency: One-stop solutions for Mobile, Web, and Backend',
    't4-li3': 'AI Integration Pioneers: Deeply embedding Generative AI into business flows',
    't4-li4': '24/7 Operations: Double guarantee with automated monitoring & expert support',
    't4-li5': 'Consultant Approach: We are your strategic partners in digital transformation',
    'img-tab4': 'assets/images/EN-Systems4.webp',
        'ser-sub': 'What We Offer',
        'ser-title': 'High Quality Tech Solutions',
        's1-t': 'Web Development', 's1-d': 'Building responsive and high-performance web applications.',
        's2-t': 'Mobile Apps', 's2-d': 'Native and cross-platform solutions for iOS and Android.',
        's3-t': 'Cloud Solutions', 's3-d': 'Secure cloud hosting and infrastructure management.',
        's4-t': 'UI/UX Design', 's4-d': 'User-centric design for seamless experiences.',
        's5-t': 'AI & Big Data', 's5-d': 'Leveraging machine learning to drive intelligence.',
        's6-t': '24/7 Tech Support', 's6-d': 'Round-the-clock maintenance and assistance.',
        // ... 團隊介紹 ...
        'team-sub': 'Talented Team',
        'team-title': 'Our Technical Experts',
        'team-p1': 'With 15 years of experience in distributed architecture and high-concurrency system design, she excels at building enterprise-grade digital foundations under minimal resource conditions. Since 2010',
        'team-n1': 'Hayasaka Reiichiro',
        'team-r1': 'Chief Technology Officer',
        'team-p2': 'A specialist in digital logic and automated workflows.  She is the embodiment of efficiency—and the final line of defense for flawless system performance.',
        'team-n2': 'Toyama Sugime',
        'team-r2': 'Technical Lead',
        'team-p3': 'A digital aesthetics and infrastructure designer. She breathes soul into cold, technical frameworks, turning every technological investment into a lasting source of brand value.',
        'team-n3': 'Kyoko',
        'team-r3': 'Senior Architect',
        // Blog Section
        'blog-sub': 'Latest News',
        'blog-title': 'Tech Insights',
        'blog-t1': 'MARS INFRASTRUCTURE STACK',
        'blog-d1': 'Mars Colonization: Tech Stack & Feasibility Architecture.',
        'blog-t2': 'Cellular Rejuvenation Reprogramming',
        'blog-d2': 'Medical Revolution & Reconstruction of Longevity Society.',
        'blog-t3': 'liquid metal robot',
        'blog-d3': 'Analyze electric-field-driven deformation technology',
        'port-sub': 'Portfolio',
        'port-title': 'Recent Deliveries',
        'test-name1': 'Dennis Wilson',
        'test-quote1': 'The team showed exceptional technical expertise in AI integration. Their proactive approach and 24/7 support have been a game-changer for our business.',
        'price-sub': 'Our Plans',
    'price-title': 'Pricing Plans',
    // Plan 1
    'p1-name': 'Free Trial', 'p1-price': '<sup>$</sup>0<span> / Per Day</span>',
    'p1-li1': 'Community Support', 'p1-li2': 'Basic API Access', 'p1-li3': '1 Project', 'p1-li4': 'Cloud Storage (N/A)', 'p-btn1': 'Get Started',
    // Plan 2
    'p2-name': 'Business', 'p2-price': '<sup>$</sup>49<span> / Per Day</span>',
    'p2-li1': '24/7 Support', 'p2-li2': 'Advanced Analytics', 'p2-li3': 'Unlimited Projects', 'p2-li4': 'Cloud Integration', 'p-btn2': 'Buy Now',
    // Plan 3
    'p3-name': 'Personal', 'p3-price': '<sup>$</sup>69<span> / Per Day</span>',
    'p3-li1': 'Priority Support', 'p3-li2': 'SEO Optimization', 'p3-li3': '5 Projects', 'p3-li4': 'Data Backup', 'p-btn3': 'Buy Now',
    // Plan 4
    'p4-name': 'Enterprise', 'p4-price': '<sup>$</sup>99<span> / Per Day</span>',
    'p4-li1': 'Custom Development', 'p4-li2': 'Full A/V API', 'p4-li3': 'Multi-Region Drive', 'p4-li4': 'Enterprise Security', 'p-btn4': 'Buy Now',
    'contact-sub': 'Contact Us',
    'contact-title': 'Get In Touch With Us',
    'contact-desc': 'Start working with Us that can provide everything you need to generate awareness, drive traffic, connect.',
    'cont-h1': 'Company Address',
    'cont-p1': '15F Cerulean Tower, 26-1 Sakuragaokacho, Shibuya City, Tokyo, Japan',
    'cont-h2': 'Call Us',
    'cont-h3': 'Email Us',
    'f-name': 'Name',
    'f-email': 'Email',
    'f-subject': 'Subject',
    'f-msg': 'Message',
    'f-btn': 'Send Message',
    'foot-desc': 'Leading software solutions focusing on cloud architecture and AI integration.',
    'foot-h1': 'Useful Links',
    'foot-h2': 'Our Services',
    'foot-h3': 'Join Our Newsletter',
    'foot-news-desc': 'Get updates by subscribing to our weekly newsletter.',
    'f-link1': 'Home', 'f-link2': 'About us', 'f-link3': 'Services', 'f-link4': 'Terms', 'f-link5': 'Privacy',
    'f-link6': 'Blog', 'f-link7': 'Stats', 'f-link8': 'Plans',
    'f-input': 'Enter Your Email',
    'copyright': 'Copyright © 2026 REII CHORO. All rights reserved.',
    'f-sub-btn': 'Subscribe',
    'meta-title': 'REII CHORO | Expert App Development & IT Operations in Asia',
    'meta-desc': 'Professional software development in Asia. Specializing in Mobile App Development, Cloud Operations (DevOps), and Managed IT Services.',
    'about-title-main': 'About Us',
        'about-ch1': 'Chapter 01: Minimal Resources, Luxury Vision',
        'about-ch2': 'Chapter 02: Professional Identity & Core Expertise',
        'about-ch3': 'Chapter 03: Creating "Certainty" for Business Owners',
        // 圖片路徑定義 (指向你剛做好的英文版圖片)
        'img-about1': 'assets/images/EN-ABOUT1.webp',
        'img-about2': 'assets/images/EN-ABOUT2.webp',
        'img-about3': 'assets/images/EN-ABOUT3.webp',
        'system-title-main': 'Technical Solutions: Core Architecture',
    'system-ch1': 'Part 01: Quality Assurance - Zero Compromise',
    'system-ch2': 'Part 02: Rapid Delivery - Agile & Automation',
    'system-ch3': 'Part 03: Financial Transparency - Total Control',
    'system-ch4': 'Part 04: Technical Experts - Industry Experience',
    'team-title-main': 'Core Soul: Professionalism & Spirit',
'team-ch1': 'Part 01: [Background & Origin] — Depth of Tech',
'team-ch2': 'Part 02: [Spirit & Style] — Intensity of Execution',
'team-ch3': 'Part 03: [Life & Cultivation] — Breadth of Soul',
'img-team1': 'assets/images/EN-Team1.webp', 
'img-team2': 'assets/images/EN-Systems5.webp', 
'img-team3': 'assets/images/EN-Systems6.webp',
'team2-title-main': 'Core Soul: Logic & Efficiency',
'team2-ch1': 'Part 01: [Logic Peak] — Defining Architecture',
'team2-ch2': 'Part 02: [Agile Speed] — Millisecond Execution',
'team2-ch3': 'Part 03: [Cross-Integration] — Intuitive Tech',
'img-team2-1': 'assets/images/EN-Team2.webp',
'img-team2-2': 'assets/images/EN-Systems7.webp',
'img-team2-3': 'assets/images/EN-Systems8.webp',
'team3-title-main': 'Core Soul: Aesthetics & Architecture',
'team3-ch1': 'Part 01: [Aesthetic Arch] — Elegant Strokes of Code',
'team3-p1': 'Expert in digital aesthetics, integrating user psychology into interaction logic to create brand-focused digital experiences.',
'team3-ch2': 'Part 02: [Deep Insight] — Foreseeing Growth',
'team3-p2': 'Designing forward-thinking scalable architectures that evolve with your business, turning technology into a long-term asset.',
'team3-ch3': 'Part 03: [Soul Infusion] — Tech-Brand Symbiosis',
'team3-p3': 'Infusing cold technical systems with soul, ensuring every investment delivers aesthetic and commercial value.',
'img-team3-1': 'assets/images/EN-Team3.webp',
'img-team3-2': 'assets/images/EN-Systems9.webp',
'img-team3-3': 'assets/images/EN-Systems10.webp',
// Blog 1: Mars Colonization
        'blog1-title-main': 'Mars Colonization: Tech & Vision',
        // Slide 1
        'blog1-ch1': 'Part 01: [Feasibility] — Interplanetary Tech Stack',
        'blog1-p1': 'From heavy-lift vehicles to ISRU, analyzing core technologies for survival, including CELSS and fission power systems.',
        // Slide 2
        'blog1-ch2': 'Part 02: [Roadmap] — From Outpost to Colony',
        'blog1-p2': 'Mapping the evolution from unmanned probes to fully autonomous societies, ensuring long-term systemic scalability.',
        // Slide 3
        'blog1-ch3': 'Part 03: [Value Chain] — Commercial ROI',
        'blog1-p3': 'Exploring ROI in Mars colonization: including data sales, specialty manufacturing, patent licensing, and high-end space tourism.',
        
        'img-blog1-1': 'assets/images/EN-Blog1.webp',
        'img-blog1-2': 'assets/images/EN-Blog2.webp',
        'img-blog1-3': 'assets/images/EN-Blog3.webp',
        'blog2-title-main': 'Genetic Programming: Human Rejuvenation',
        // Slide 1
        'blog2-ch1': 'Part 01: [The Reset] — Epigenetic Reversal Logic',
        'blog2-p1': 'Utilizing Yamanaka factors and cellular reprogramming to reset aging markers. Despite oncogenic risks, the path to cellular rejuvenation is now technically clear.',
        // Slide 2
        'blog2-ch2': 'Part 02: [The Revolution] — Redefining Lifespan',
        'blog2-p2': 'Shifting from treating disease to eradicating aging. This revolution will reshape healthcare models and social structures of retired life.',
        // Slide 3
        'blog2-ch3': 'Part 03: [Longevity Capital] — The Biotech Hegemony',
        'blog2-p3': 'Longevity technology is the ultimate capital. From million-dollar treatments for elites to mass-market patents, it drives the most powerful revenue engine.',
        
        'img-blog2-1': 'assets/images/EN-Blog4.webp',
        'img-blog2-2': 'assets/images/EN-Blog5.webp',
        'img-blog2-3': 'assets/images/EN-Blog6.webp',
        // Blog 3: Liquid Metal Robot
    'blog3-title-main': 'Liquid Metal Robots: Technical Path to T-1000',
    // Slide 1
    'blog3-ch1': 'Part 01: [Material Foundation] — Room Temp Liquid Metal Alloys',
    'blog3-p1': 'Exploring Ga-based alloys with high conductivity and controllable surface tension to achieve self-healing and flexible locomotion.',
    // Slide 2
    'blog3-ch2': 'Part 02: [Deformation Control] — Electric Field Drive & Programmable Phase Change',
    'blog3-p2': 'Inducing surface tension gradients via external electric fields to enable precise displacement, fusion, and shape-locking of liquid metals.',
    // Slide 3
    'blog3-ch3': 'Part 03: [Functional Empowerment] — Strategic Value & Future Profitability',
    'blog3-p3': 'From infiltration through cracks in disaster rescue to micro-medical intervention within the human body, redefining robotics and creating immense value in defense and healthcare.',
    'img-blog3-1': 'assets/images/EN-Blog7.webp',
    'img-blog3-2': 'assets/images/EN-Blog8.webp',
    'img-blog3-3': 'assets/images/EN-Blog9.webp',
    'case1-title-main': 'Interstellar Case: Vorlon Dimension System Integration',
    // Slide 1
    'case1-ch1': 'Part 01: [Client Profile] — Energy Watchers of Epsilon Eridani',
    'img-case1-1': 'assets/images/EN-Case1.webp',
    // Slide 2
    'case1-ch2': 'Part 02: [Deliverable] — Vocalis-OS Bio-Optical Interface',
    'img-case1-2': 'assets/images/EN-Case2.webp',
    // Slide 3
    'case1-ch3': 'Part 03: [Success Factors] — Redefining Sensory Freedom',
    'img-case1-3': 'assets/images/EN-Case3.webp',
    'case1-p1': 'A high-dimensional energy civilization from Epsilon Eridani. The project focused on seamless, real-time thought interaction with organic structures after their physical forms were shed.',
'case1-p2': 'Developed the first-ever high-frequency translation Vocalis-OS, converting Vorlon neural vibrations into precise bio-electric commands to operate organic fleets and cities.',
'case1-p3': 'More than a software delivery, it was a logic dialogue across civilizations. Post-deployment, it significantly reduced interaction entropy in the physical dimension.',
    'case2-title-main': 'Interstellar Case: Aeldari Webway Navigation System',
    // Slide 1
    'case2-ch1': 'Part 01: [Client Profile] — Guardians of the Craftworlds',
    'case2-p1': 'The Aeldari are an ancient race with hyper-intelligent civilization. This project provides seamless warp-travel solutions within the Webway.',
    'img-case2-1': 'assets/images/EN-Case4.webp',
    // Slide 2
    'case2-ch2': 'Part 02: [Deliverable] — Webway Warp-Rift Topology System',
    'case2-p2': 'Developing a psionic fluctuation prediction model based on non-linear algorithms, integrated into Wraithbone consoles.',
    'img-case2-2': 'assets/images/EN-Case5.webp',
    // Slide 3
    'case2-ch3': 'Part 03: [Success Factors] — Navigating Millennia-old Risks',
    'case2-p3': 'The human programmer has mastered the rhythm of the stars. Navigation accidents decreased by 99% post-deployment.',
    'img-case2-3': 'assets/images/EN-Case6.webp',
    'case3-title-main': 'Interstellar Case: Prothean Total Sensory Archiving Array',
    // Slide 1
    'case3-ch1': 'Part 01: [Client Profile] — Guardians of the Vanished Empire',
    'case3-p1': 'A quad-eyed crustacean civilization using tactile memory exchange. This project prevents the "Crisis of Oblivion" caused by bio-medium degradation.',
    'img-case3-1': 'assets/images/EN-Case7.webp',
    // Slide 2
    'case3-ch2': 'Part 02: [Deliverable] — Quad-Link: 5D Memory Pool & Digital Array',
    'case3-p2': 'Developing 5D Memory Pool algorithms to compress tactile and bio-electric signals into molecular-level luminous obelisks.',
    'img-case3-2': 'assets/images/EN-Case8.webp',
    // Slide 3
    'case3-ch3': 'Part 03: [Success Factors] — Defense Against Temporal Entropy',
    'case3-p3': 'Enabling intact cross-generational sensory transmission. The client stated: The human programmer has granted our civilization immortality.',
    'img-case3-3': 'assets/images/EN-Case9.webp',
    'case4-title-main': 'Interstellar Case: Species 8472 Physical Compatibility Layer',
    // Slide 1
    'case4-ch1': 'Part 01: [Client Profile] — Apex Predators of Fluidic Space',
    'case4-p1': 'Tripodal beings from a fluidic dimension with five bioluminescent eyes. This project addresses the biological stress caused by physical constant mismatch in the material universe.',
    'img-case4-1': 'assets/images/EN-Case10.webp',
    // Slide 2
    'case4-ch2': 'Part 02: [Deliverable] — Physics Middleware & Gravity Modulation System',
    'case4-p2': 'Developing a compatibility layer that generates localized fluidic fields around bio-vessels, re-encoding external gravity into tolerable pressure.',
    'img-case4-2': 'assets/images/EN-Case11.webp',
    // Slide 3
    'case4-ch3': 'Part 03: [Success Factors] — Defining Multi-Dimensional Freedom',
    'case4-p3': 'Successfully eliminated physical rejection during travel. The client remarked: "The three legs no longer tremble; the five eyes see this parched universe clearly."',
    'img-case4-3': 'assets/images/EN-Case12.webp',
    'case5-title-main': 'Forerunner Case: Dynamic Hard Light Instruction Set Project',
    // Slide 1
    'case5-ch1': 'Part 01: [Client Profile] — Ultimate Stewards of Galactic Order',
    'case5-p1': 'Towering beings (3m+) embodying absolute mathematical logic. Their architecture relies on "Hard Light," allowing structures to reconfigure or levitate via commands.',
    'img-case5-1': 'assets/images/EN-Case13.webp',
    // Slide 2
    'case5-ch2': 'Part 02: [Deliverable] — Lux-Arch v10.0: Dynamic Hard Light Instruction Set',
    'case5-p2': 'Optimized rendering engine algorithms to reduce reconfiguration latency below Planck time, achieving 100% pure geometric symmetry.',
    'img-case5-2': 'assets/images/EN-Case14.webp',
    // Slide 3
    'case5-ch3': 'Part 03: [Success Factors] — Redefining the Aesthetics of God-like Civilizations',
    'case5-p3': 'Solved synchronization challenges at macro-scales. The client remarked: "His code is as precise and elegant as light itself."',
    'img-case5-3': 'assets/images/EN-Case15.webp',
    'case6-title-main': 'Kryptonian Case: Liquid-Geometry Intelligent Interaction Environment',
    // Slide 1
    'case6-ch1': 'Part 01: [Client Profile] — Genetically Optimized Perfection & Liquid Architecture',
    'case6-p1': 'From the Rao system. Their "Liquid Geometry" technology allows metal spheres to form structures dynamically within obsidian-like spires, blending ancient luxury with cold technology.',
    'img-case6-1': 'assets/images/EN-Case16.webp',
    // Slide 2
    'case6-ch2': 'Part 02: [Deliverable] — Liquid-Geometry UI: Quantum Gravity Engine',
    'case6-p2': 'A UI engine based on "Quantum Gravity" to manage physical collisions of billions of micro-spheres, achieving zero-latency fluid reconfiguration.',
    'img-case6-2': 'assets/images/EN-Case17.webp',
    // Slide 3
    'case6-ch3': 'Part 03: [Success Factors] — Defining the Aesthetic of Hyper-Advanced Tech',
    'case6-p3': 'Client remarked: "The most aesthetic interface since Krypton\'s rebirth." Seamless star maps manifest instantly with a simple gesture.',
    'img-case6-3': 'assets/images/EN-Case18.webp'
    }
};

// 點擊事件處理
function handleLangClick() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';
    const nextLang = (currentLang === 'en') ? 'zh' : 'en';
    setLanguage(nextLang);
}

function setLanguage(lang) {
     if (lang === 'cn') lang = 'zh';
    
    if (!i18nData[lang]) lang = 'en';
    localStorage.setItem('selectedLang', lang);
    document.documentElement.lang = lang;
    const data = i18nData[lang];

    Object.keys(data).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // 1. 如果是圖片標籤，切換圖片來源
            if (element.tagName === 'IMG') {
                element.src = data[id];
            } 
            // 2. 如果是輸入框，改 placeholder
            else if (element.tagName === 'INPUT') {
                element.setAttribute('placeholder', data[id]);
            } 
            // 3. 其他標籤改內容
            else {
                element.innerHTML = data[id];
            }
        }
    });
}

// 初始化
// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('selectedLang') || 'en';
//     setLanguage(savedLang);
// });
// 確保這是 language.js 的最後一段
document.addEventListener('DOMContentLoaded', () => {
    // 1. 抓取網址參數
    const urlParams = new URLSearchParams(window.location.search);
    let langParam = urlParams.get('lang');

    // 2. 容錯處理：如果輸入 cn 則轉向 zh
    if (langParam === 'cn') langParam = 'zh';

    // 3. 優先級判斷：網址參數 > 瀏覽器記憶 > 預設英文
    const savedLang = langParam || localStorage.getItem('selectedLang') || 'en';
    
    // 4. 執行切換
    setLanguage(savedLang);
});
