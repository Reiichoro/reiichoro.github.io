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
        'input-project': '例如：網頁應用', // 這裡會自動填入 placeholder
        'label-to': '技術棧需求',
        'input-tech': '例如：React/Python', // 這裡會自動填入 placeholder
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
        'blog-t1': 'AI 整合的未來',
        'blog-d1': '探索機器學習如何重塑企業級軟體架構。',
        'blog-t2': '雲端原生優化',
        'blog-d2': '在保持高性能的同時降低雲端成本的 5 大策略。',
        'blog-t3': '2024 網絡安全標準',
        'blog-d3': '現今數位企業必須實施的基本安全協議。',
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
        'label-to': 'Tech Stack',
        'input-tech': 'e.g. React/Python',
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
        'blog-t1': 'The Future of AI Integration',
        'blog-d1': 'Exploring how machine learning is reshaping enterprise software architecture.',
        'blog-t2': 'Cloud-Native Optimization',
        'blog-d2': 'Top 5 strategies to reduce cloud costs while maintaining high performance.',
        'blog-t3': 'Cybersecurity Standards 2024',
        'blog-d3': 'Essential security protocols every digital business must implement today.',
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
    }
};

// 點擊事件處理
function handleLangClick() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';
    const nextLang = (currentLang === 'en') ? 'zh' : 'en';
    setLanguage(nextLang);
}

function setLanguage(lang) {
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
// function setLanguage(lang) {
//    // console.log("切換語言至: " + lang);
//     localStorage.setItem('selectedLang', lang);
//     document.documentElement.lang = lang;
    

//     const data = i18nData[lang];

//     Object.keys(data).forEach(id => {
//         const element = document.getElementById(id);
//         if (element) {
//             // 1. 如果是輸入框，改它的 placeholder
//             if (element.tagName === 'INPUT') {
//                 element.setAttribute('placeholder', data[id]);
//             } 
//             // 2. 如果是其他標籤，統一用 innerHTML 確保 <b> <i> 生效
//             else {
//                 element.innerHTML = data[id];
//             }
//         }
//     });
// }
// 初始化
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    setLanguage(savedLang);
});
