const i18nData = {
    'ja': {
       'main-title': '卓越した技術開発で<br>企業の未来を牽引する', // 替換原本的租車標題
'lang-toggle': 'EN',

// ナビゲーションバー (導航欄)
'nav-home': 'ホーム',
'nav-about': '私たちについて',
'nav-services': '技術ソリューション',
'nav-dropdown': '技術リソース',
'nav-stats': 'データインサイト',
'nav-team': '開発チーム',
'nav-portfolio': '実績・事例',
'nav-pricing': '料金プラン',
'nav-blog': 'テックブログ',
'nav-test': 'お客様の声',
'nav-contact': 'お問い合わせ',

'main-title': '卓越したソフトウェア開発<br>最適なソリューションをオーダーメイド',
'label-from': 'プロジェクトの種類',
'input-project': '例：アプリ開発', // 自動填入 placeholder
'label-to': 'メールアドレス',
'input-tech': 'メール@reiichoro', // 自動填入 placeholder
'label-submit': '今すぐ送信',
'btn-text': 'リクエストを送信',
'form-footer-info': '<b>無料の<i>技術見積もりを取得</i></b> フォームに入力してすぐに相談を開始 - または - ',

'about-sub': '私たちについて',
'about-main-title': '企業のデジタルトランスフォーメーション（DX）へ<br>最高の技術サポートを提供します',
'about-description': '私たちは、堅牢なソフトウェア開発と革新的な技術サービスの提供に注力しています。AI統合からクラウドアーキテクチャまで、当社のエキスパートチームが、急速に進化するデジタル分野においてお客様のビジネスが常に優位性を保てるようサポートします。複雑な課題を、スムーズなデジタル体験へと変革します。',
        // ... 私たちについて（選擇我們 / 特色優勢） ...
'why-sub': '選ばれる理由',
'why-title': 'テクノロジーでイノベーションを牽引する',
'why-desc': '私たちは、デジタル時代におけるお客様の企業のスケールアップと成功を支援するため、最適なカスタムソフトウェアソリューションを提供します。',
'why-btn': '詳細を見る',

'feature-t1': 'カスタム開発',
'feature-p1': '最新の技術スタックを活用し、お客様の特定のニーズに合わせて最適なソフトウェアを構築します。',

'feature-t2': 'クラウドソリューション',
'feature-p2': '高い可用性と優れたパフォーマンスを備えた、拡張性の高いクラウドインフラストラクチャ。',

'feature-t3': 'サイバーセキュリティ',
'feature-p3': 'エンタープライズレベルのセキュリティプロトコルにより、お客様のデータとデジタル資産を万全に保護します。',

'feature-t4': 'AIインテグレーション',
'feature-p4': '機械学習と人工知能（AI）を活用し、業務プロセスの自動化と深いインサイトの獲得を実現します。',
        // ... サービス内容（服務內容與四大優勢） ...
'stats-clients': 'グローバルクライアント',
'stats-projects': 'プロジェクト納品実績',
'stats-support': 'テクニカルサポート時間',
'stats-workers': 'エキスパート開発エンジニア',

// Tab タイトル (Tab 標題)
'tab-t1': '品質保証', 
'tab-t2': '迅速な納品', 
'tab-t3': 'コストの透明性', 
'tab-t4': '技術のエキスパート',

// Tab 1 (品質保証)
't1-h': '妥協のない高信頼性システム',
't1-p': '私たちは多層的なテストとコードレビューを実施し、お客様のソフトウェアの堅牢性とセキュリティを万全に担保します。',
't1-li1': 'コアアーキテクチャの動的監視：24時間365日の追跡でシステムダウンを未然に防止',
't1-li2': 'ユニットテスト網羅率：重要なロジックはすべて自動化テストで検証済み',
't1-li3': '高負荷・ストレステスト：数万人同時アクセスでも安定稼働を維持',
't1-li4': '継続的インテグレーション：CI/CDによるコードの自動再テスト環境',
't1-li5': 'エンプレプライズ級セキュリティ監査：国際標準に準拠し、データ漏洩を徹底防止',
'img-tab1': 'assets/images/JA-Systems1.webp', 

// Tab 2 (迅速な納品)
't2-h': 'アジャイル開発による迅速なリリース',
't2-p': '当社のCI/CDパイプラインにより、新機能やアップデートを圧倒的なスピードでデリバリーし、市場での先行者利益の獲得を支援します。',
't2-li1': '2週間単位のスプリント：市場のニーズに柔軟かつ迅速に適応するアジャイル開発',
't2-li2': '日次のクラウドデプロイ：自動化パイプラインにより、コードを即座に本番反映',
't2-li3': 'リアルタイム看板の透明性：各モジュールの開発進捗をいつでも追跡可能',
't2-li4': 'DevOps自動化フロー：手動操作を大幅に削減し、リリースエラーを最小化',
't2-li5': 'カナリアリリースの採用：システムの安定性を確保しながら新機能を安全に展開',
'img-tab2': 'assets/images/JA-Systems2.webp',

// Tab 3 (コストの透明性)
't3-h': 'すべてのコストをクリアに可視化',
't3-p': 'スマートなリソース配分と完全に透明化されたコスト管理システムにより、お客様の技術投資対効果（ROI）を最大化します。',
't3-li1': 'リアルタイムコストダッシュボード：支出を分単位で更新し、予期せぬ超過を防止',
't3-li2': 'クラウド資源の最適化：負荷に応じた動的調整で、不要なクラウドコストを30%削減',
't3-li3': '隠れた間接費ゼロ：ご予算の100%をコード開発とシステムの安定性に直接投入',
't3-li4': '従量課金・柔軟なプラン：必要に応じてモジュールを拡張し、初期コストを最小化',
't3-li5': '詳細な支出レポート：毎月システム保守明細を自動生成し、経理処理もスムーズ',
'img-tab3': 'assets/images/JA-Systems3.webp',

// Tab 4 (技術のエキスパート)
't4-h': '経験豊富なエンジニアチーム',
't4-p': '当社のコアメンバーはトップクラスのテック企業出身であり、フルスタック開発およびAI領域で15年以上の実戦経験を積んでいます。',
't4-li1': 'シニアアーキテクトによる牽引：低レイヤーのロジックから高可用なシステム構造を設計',
't4-li2': 'フルスタック開発力：モバイル、フロントエンド、バックエンドを網羅するワンストップソリューション',
't4-li3': 'AIインテグレーションの先駆者：生成AIを既存の業務フローに深く組み込み、効率性を劇的に向上',
't4-li4': '24時間365日の運用保守：自動化監視とエキスパート対応の二重体制でダウンタイムゼロへ',
't4-li5': 'コンサルティング型技術サポート：単なるコーダーではなく、DX（デジタルトランスフォーメーション）の戦略的パートナー',
'img-tab4': 'assets/images/JA-Systems4.webp',
        // ... 提供サービス（我們的服務） ...
'ser-sub': '提供サービス',
'ser-title': '高品質な技術ソリューション',

's1-t': 'Webアプリケーション開発', 
's1-d': 'レスポンシブかつ高性能なWebアプリケーションを構築します。',

's2-t': 'モバイルアプリ開発', 
's2-d': 'iOSおよびAndroid向けに、ネイティブおよびクロスプラットフォームのモバイルソリューションを提供します。',

's3-t': 'クラウドソリューション', 
's3-d': 'セキュアなクラウドホスティング、データ移行、およびインフラストラクチャ管理。',

's4-t': 'UI/UXデザイン', 
's4-d': 'ユーザーを中心に据え、洗練されたスムーズなデジタル体験を提供します。',

's5-t': 'AI・ビッグデータ', 
's5-d': '機械学習を活用し、ビジネスインテリジェンスと高度なデータ分析を推進します。',

's6-t': '24/7 テクニカルサポート', 
's6-d': '24時間365日體制での運用保守モニタリングと、迅速な技術サポートを提供します。',
        // ... メンバー紹介（團隊介紹） ...
'team-sub': 'コアチーム',
'team-title': '当社の技術エキスパート',

// メンバー 1 (早坂 怜一郎)
'team-p1': '分散型アーキテクチャと高負荷システム設計に15年間従事。最小限のリソースでエンタープライズ級のデジタル基盤を構築することに長ける。2010年から現在に至るまで、一貫して「技術の引き算」を追求し、最も複雑なビジネス課題を解決し続けている。',
'team-n1': '早坂 怜一郎',
'team-r1': '最高技術責任者 (CTO)',

// メンバー 2 (外山 寿姫)
'team-p2': 'デジタルロジックおよび自動化プロセスのエキスパート。優れた領域横断的な知識統合能力を持ち、複雑なビジネス要件をスムーズなデジタル体験へと変換することに注力する。システムの「欠陥ゼロ」稼働を死守する最後の防衛線を担う。',
'team-n2': '外山 寿姫',
'team-r2': '開発テックリード',

// メンバー 3 (京子)
'team-p3': 'デジタル美学および基盤アーキテクチャのデザイナー。ユーザー心理学とデジタル環境におけるインタラクションロジックを熟知。先見性のある設計を得意とし、無機質な技術体系に魂を吹き込むことで、企業に長期的なブランド価値をもたらす。',
'team-n3': '京子',
'team-r3': 'シニアソフトウェアアーキテクト',
        // 技術日誌區塊 (Blog Section)
        // ... テックブログ（技術日誌區塊） ...
'blog-sub': '最新情報',
'blog-title': '技術インサイト',

'blog-t1': '火星移住の実現可能性アーキテクチャ',
'blog-d1': 'ハードコアな技術分析と未来のビジネスインサイトの融合',

'blog-t2': '若返りを実現する細胞リプログラミング',
'blog-d2': '医療革命と超長寿社会の再構築',

'blog-t3': '液体金属ロボット',
'blog-d3': '室温液体金属・電界駆動による変形と未来への解析',
        // ... 実績・事例 ＆ 料金プラン（專案展示、評價與服務方案） ...
'port-sub': '実績・事例',
'port-title': '最近の納品実績',

'test-name1': 'デニス・ウィルソン',
'test-quote1': 'このチームによるクラウドアーキテクチャの最適化は、私たちの期待を遥かに超えるものでした。既存の技術的ボトルネックを解決しただけでなく、将来の拡張に向けた強固な基盤を築いてくれました。',

'price-sub': '料金プラン',
'price-title': '透明性の高い料金体系',

// プラン 1 (免費試用)
'p1-name': '無料トライアル', 
'p1-price': '<sup>$</sup>0<span> / 日</span>',
'p1-li1': 'コミュニティサポート', 
'p1-li2': '基本的なAPIアクセス', 
'p1-li3': '1 プロジェクト', 
'p1-li4': 'クラウドストレージ（未対応）', 
'p-btn1': '今すぐ試す',

// プラン 2 (商務版)
'p2-name': 'ビジネス版', 
'p2-price': '<sup>$</sup>49<span> / 日</span>',
'p2-li1': '24/7 テクニカルサポート', 
'p2-li2': '高度なデータ分析', 
'p2-li3': 'プロジェクト数無制限', 
'p2-li4': 'クラウドシステム統合', 
'p-btn2': '今すぐ購入',

// プラン 3 (個人專業版)
'p3-name': 'パーソナルプロ版', 
'p3-price': '<sup>$</sup>69<span> / 日</span>',
'p3-li1': '優先テクニカルサポート', 
'p3-li2': 'SEO最適化', 
'p3-li3': '5 プロジェクト', 
'p3-li4': 'データ自動バックアップ', 
'p-btn3': '今すぐ購入',

// プラン 4 (企業旗艦版)
'p4-name': 'エンタープライズ版', 
'p4-price': '<sup>$</sup>99<span> / 日</span>',
'p4-li1': 'カスタム開発', 
'p4-li2': 'マルチメディアAPIサポート', 
'p4-li3': 'グローバル分散型ストレージ', 
'p4-li4': '最高峰のセキュリティ対策', 
'p-btn4': 'エキスパートに相談',
    // ... お問い合わせ ＆ フッター（聯繫我們與頁尾） ...
'contact-sub': 'お問い合わせ',
'contact-title': 'いつでもお気軽にお問い合わせください',
'contact-desc': '私たちとのパートナーシップにより、デジタルトランスフォーメーション（DX）に必要なすべてのサポートを提供します。あらゆる技術的な問題に対し、24時間以内に対応することをお約束いたします。',
'cont-h1': '会社所在地',
'cont-p1': '東京都渋谷区桜丘町26-1 セルリアンタワー15F',
'cont-h2': 'お電話でのお問い合わせ',
'cont-h3': 'メールでのお問い合わせ',

// フォーム翻訳 (表單翻譯)
'f-name': 'お名前',
'f-email': 'メールアドレス',
'f-subject': '件名',
'f-msg': 'お問い合わせ内容（具体的なご要望など）...',
'f-btn': 'メッセージを送信',

// フッター (頁尾)
'foot-desc': '最先端のソフトウェアソリューション、クラウドアーキテクチャ、そしてAIインテグレーションに特化し、企業のデジタルトランスフォーメーション（DX）を力強く支援します。',
'foot-h1': 'クイックリンク',
'foot-h2': '提供サービス',
'foot-h3': 'ニュースレター登録',
'foot-news-desc': '最新の技術トレンドやアップデート情報を毎週お届けします。',

// フッターリンク
'f-link1': 'ホーム', 
'f-link2': '私たちについて', 
'f-link3': 'サービス内容', 
'f-link4': '利用規約', 
'f-link5': 'プライバシーポリシー',
'f-link6': 'ブログ', 
'f-link7': '統計データ', 
'f-link8': '料金プラン',

'f-input': 'メールアドレスを入力...',
'copyright': 'Copyright © 2026 早坂怜一郎. All rights reserved.',
'f-sub-btn': '登録する',
    // ... メタデータ、会社概要、技術体系（Title、Banner與架構體系） ...
'meta-title': 'REII CHIORO | アジアンプロフェッショナル APP開発・システム運用保守のエキスパート',
'meta-desc': 'アジア市場に特化したアプリ開発とシステム運用保守服務。モバイルアプリ設計からクラウド保守まで、エンドツーエンドの技術ソリューションを提供します。',

'about-title-main': '私たちについて',
'about-ch1': 'Chapter 01: リソースのミニマリズムと認知のラグジュアリー',
'about-ch2': 'Chapter 02: プロフェッショナルとしてのアイデンティティとコア技術力',
'about-ch3': 'Chapter 03: 経営者に真の「確実性」をもたらす',

// 画像パス定義（已加 JA- 前綴）
'img-about1': 'assets/images/JA-ABOUT1.webp',
'img-about2': 'assets/images/JA-ABOUT2.webp',
'img-about3': 'assets/images/JA-ABOUT3.webp',

'system-title-main': '技術ソリューション：コアアーキテクチャ体系',
'system-ch1': 'Part 01: 品質保証 - 妥協なき高信頼性',
'system-ch2': 'Part 02: 迅速な納品 - アジャイルと自動化フロー',
'system-ch3': 'Part 03: コストの透明性 - 財務の可視化とコントロール',
'system-ch4': 'Part 04: 技術のエキスパート - フルスタック・大手テック企業での実戦経験',
    'team-title-main': 'コアな魂：プロフェッショナリズムと精神',
'team-ch1': 'Part 01: 【経歴と起源】—— 技術の厚み',
'team-ch2': 'Part 02: 【精神とスタイル】—— 執行の強度',
'team-ch3': 'Part 03: 【生活と教養】—— 魂の広さ',
'img-team1': 'assets/images/JA-Team1.webp', 
'img-team2': 'assets/images/JA-Systems5.webp', 
'img-team3': 'assets/images/JA-Systems6.webp',

'team2-title-main': 'コアな魂：ロジックと効率',
'team2-ch1': 'Part 01: 【ロジックの頂点】—— 精密なアーキテクチャ定義',
'team2-ch2': 'Part 02: 【アジャイルな速度】—— ミリ秒単位の執行力',
'team2-ch3': 'Part 03: 【クロスオーバー統合】—— 技術に直感を与える',
'img-team2-1': 'assets/images/JA-Team2.webp',
'img-team2-2': 'assets/images/JA-Systems7.webp',
'img-team2-3': 'assets/images/JA-Systems8.webp',

'team3-title-main': 'コアな魂：美学とアーキテクチャ',
'team3-ch1': 'Part 01: 【美学アーキテクチャ】—— コードのエレガントな筆跡',
'team3-p1': 'デジタル美学デザイナー。ユーザー心理学をインタラクションロジックに融合させることに長ける。彼女の設計は技術的な実現にとどまらず、滑らかな五感の体験とブランドの感情的な伝達をもたらす。',
'team3-ch2': 'Part 02: 【深い洞察】—— 未来の成長を見据えて',
'team3-p2': '先見性のある拡張式アーキテクチャに注力し、企業の規模拡大に合わせてシステムが進化できるようにする。技術を負担ではなく資産に変え、長期的な拡張ポテンシャルを支える。',
'team3-ch3': 'Part 03: 【魂の注入】—— 技術とブランドの共生',
'team3-p3': '冷たいシステム体系に魂を吹き込み、あらゆる技術投資が商業的美学を備えるようにする。技術と商業の交差点に立ち、デジタル世界の価値を再構築する。',
'img-team3-1': 'assets/images/JA-Team3.webp',
'img-team3-2': 'assets/images/JA-Systems9.webp',
'img-team3-3': 'assets/images/JA-Systems10.webp',
// --- Blog 1: Mars Colonization (火星移住) ---
'blog1-title-main': '火星移住：技術アーキテクチャとビジネスビジョン',
// Slide 1
'blog1-ch1': 'Part 01: 【実現可能性】—— 惑星間技術スタック',
'blog1-p1': '大型輸送から宇宙現地資源利用（ISRU）まで、人類の惑星間移動を支えるコア技術の基盤を解析。完全閉鎖型生態系サイクルとエネルギー供給システムを含む。',
// Slide 2
'blog1-ch2': 'Part 02: 【ロードマップ】—— 前哨基地から永久移住へ',
'blog1-p2': '無人探査、サンプルリターン、有人前哨基地から、最終的な完全自治社会への進化プロセスを分析し、システムの長期的な拡張性を担保する。',
// Slide 3
'blog1-ch3': 'Part 03: 【バリューチェーン】—— ビジネスモデルと戦略的収益化',
'blog1-p3': '火星移住における長期的な投資対効果（ROI）を模索：科学データの販売、特殊材料製造、技術特許ライセンス、および富裕層向け宇宙旅行を含む。',
'img-blog1-1': 'assets/images/JA-Blog1-1.webp',
'img-blog1-2': 'assets/images/JA-Blog2-1.webp',
'img-blog1-3': 'assets/images/JA-Blog3-1.webp',

// --- Blog 2: Human Genetic Programming (人類遺伝子プログラミング) ---
'blog2-title-main': '人類遺伝子プログラミング：若返り工学',
// Slide 1
'blog2-ch1': 'Part 01: 【技術のリセット】—— エピジェネティクスの反転ロジック',
'blog2-p1': '山中因子（Yamanakaファクター）と細胞リプログラミング技術に基づき、細胞の老化マーカーのリセットを試みる。腫瘍化のリスクを伴うものの、「細胞の若返り」への技術的アプローチはすでに明確である。',
// Slide 2
'blog2-ch2': 'Part 02: 【医療変革】—— 寿命の再定義',
'blog2-p2': '疾病の治療から「老化の克服」へ。これは単なる医療モデルのパラダイムシフトにとどまらず、高齢化社会における医療負担を根本から解決し、人類の労働と定年退職の制度を再定義する。',
// Slide 3
'blog2-ch3': 'Part 03: 【長寿資本】—— ハイエンド医療のビジネス・ポートフォリオ',
'blog2-p3': '長寿技術を制することは、グローバルなバイオテクノロジーの覇権を握ることを意味する。百万ドル規模の富裕層向けセラピーから、大衆向けの特許ライセンスまで、人類文明史上最も強力な収益エンジンを始動させる。',
'img-blog2-1': 'assets/images/JA-Blog4.webp',
'img-blog2-2': 'assets/images/JA-Blog5.webp',
'img-blog2-3': 'assets/images/JA-Blog6.webp',

// --- Blog 3: Liquid Metal Robots (液体金属ロボット) ---
'blog3-title-main': '液体金属ロボット：T-1000の技術的実現へのアプローチ',
// Slide 1
'blog3-ch1': 'Part 01: 【物質的基盤】—— 室温液体金属合金',
'blog3-p1': 'ガリウム基合金（Ga-based alloys）の特性に基づき、高い導電性と表面張力制御性を備えた液体金属を検証し、形状の自己修復と柔軟なモーションを実現する。',
// Slide 2
'blog3-ch2': 'Part 02: 【変形制御】—— 電界駆動とプログラマブルな相転移',
'blog3-p2': '外部電界によって表面張力勾配を誘導し、液体金属の精密な変位、融合、および形状ロックを実現。これは「流体」から「構造体」へと転換するためのブレイクスルーとなる。',
// Slide 3
'blog3-ch3': 'Part 03: 【機能の付与】—— 戦略的価値と未来の収益性',
'blog3-p3': '災害救助における狭小空間への浸透から、体内でのマイクロ医療介入まで。この技術はロボットの定義を再構築し、最先端の国防および精密医療の領域で莫大な市場価値を創出する。',
'img-blog3-1': 'assets/images/JA-Blog7.webp',
'img-blog3-2': 'assets/images/JA-Blog8.webp',
'img-blog3-3': 'assets/images/JA-Blog9.webp',
        // --- 異星人納品実績（外星交付案例：致敬另一個時空的硬核科幻創意） ---

// Case 1: Vorlons (沃隆族)
'case1-title-main': '異星人納品実績：ヴォロン（Vorlons）高次元システムインテグレーション',
'case1-ch1': 'Part 01: 【クライアント像】—— エリダヌス座イプシロン星のエネルギーウォッチャー',
'img-case1-1': 'assets/images/JA-Case1.webp',
'case1-ch2': 'Part 02: 【開発ソフトウェア】—— Vocalis-OS 生体光学インターフェースシステム',
'img-case1-2': 'assets/images/JA-Case2.webp',
'case1-ch3': 'Part 03: 【高評価の理由】—— 肉体脱却後の「感覚の自由」を再定義',
'case1-p1': 'エリダヌス座イプシロン星に起源を持つ高次元エネルギー文明。肉体を捨て去った彼らが、物理次元の有機構造建築や環境と、ロスレスかつリアルタイムに精神的インタラクションを行うためのソリューションを開発。',
'case1-p2': '高次元周波数のトランスレーションに基づく世界初の「Vocalis-OS」を開発。ヴォロン族の思念波動を精密な生體電気コマンドへと変換し、有機宇宙船や都市の機能駆動を実現。',
'case1-p3': 'これは単なるソフトウェアの納品ではなく、文明を超えた論理的対話である。システム稼働後、物理次元における精神的インタラクションのエントロピーが劇的に低減され、真の「感覚の自由」が達成された。',
'img-case1-3': 'assets/images/JA-Case3.webp',

// Case 2: Aeldari (靈族)
'case2-title-main': '異星人納品実績：アエルダリ（Aeldari）ウェブウェイ・インテリジェントナビゲーションシステム',
'case2-ch1': 'Part 01: 【クライアント像】—— クラフトワールドの守護者',
'case2-p1': '至高の美意識と強力なサイキック（霊能）文明を持つアエルダリ。今回のプロジェクトは、名状しがたいワープの脅威を回避し、ウェブウェイ（網道）をシームレスに航行するソリューションの提供を目的とする。',
'img-case2-1': 'assets/images/JA-Case4.webp',
'case2-ch2': 'Part 02: 【納品物】—— ウェブウェイ・ワープ亀裂警告＆トポロジーシステム',
'case2-p2': 'ビッグデータと非線形アルゴリズムに基づくサイキック（霊能）変動予測モデルを開発。彼らのサイキック伝導体であるレイスボーン（霊骨）コントロールパネルへ完璧に組み込んだ。',
'img-case2-2': 'assets/images/JA-Case5.webp',
'case2-ch3': 'Part 03: 【高評価の理由】—— ワープストームの脅威を精密に回避',
'case2-p3': '「この地球人プログラマーは、星々の脈動のテンポを完全に掌握している。」システム導入後、ウェブウェイ航行における事故率は99%減少した。',
'img-case2-3': 'assets/images/JA-Case6.webp',

// Case 3: Protheans (普洛仙)
'case3-title-main': '異星人納品実績：プロセアン（Protheans）全感覚データアーカイブアレイ',
'case3-ch1': 'Part 01: 【クライアント像】—— 失われた帝国の文明伝承者',
'case3-p1': '四つの複眼を持つ甲殻類文明であり、生體触覚を通じて記憶を共有する特性を持つ。今回の協力は、経年劣化する生體記憶媒體による「文明遺忘の危機」を解決するために立ち上げられた。',
'img-case3-1': 'assets/images/JA-Case7.webp',
'case3-ch2': 'Part 02: 【納品物】—— 四目共感覚：デジタルアーカイブ＆5Dメモリ（記憶）アレイ',
'case3-p2': '5次元メモリプールロスレス圧縮アルゴリズムを開発。触覚、視覚、生體電気信号を統合し、分子レベルで精密に発光する幾何学的オベリスクへと封印することに成功。',
'img-case3-2': 'assets/images/JA-Case8.webp',
'case3-ch3': 'Part 03: 【高評価の理由】—— 時間のエントロピー増大に抗う最後の砦',
'case3-p3': '感覚情報の世代を超えた完全な伝承を実現。「この地球人プログラマーは、時の奔流の中で我が文明に永遠の命を与えてくれた」との高い評価を得た。',
'img-case3-3': 'assets/images/JA-Case9.webp',

// Case 4: Species 8472 (生命體8472)
'case4-title-main': '異星人納品実績：生命體8472（Species 8472）物理パラメータ互換制御レイヤー',
'case4-ch1': 'Part 01: 【クライアント像】—— 流體空間の頂点捕食者',
'case4-p1': '三本腳の構造と五つの冷光複眼を持つ高次元生命體。彼らの故郷は純粋な有機流體空間であり、実體宇宙への進入時、物理定数の不整合による深刻な生體組織ストレスに直面していた。',
'img-case4-1': 'assets/images/JA-Case10.webp',
'case4-ch2': 'Part 02: 【納品物】—— 物理シミュレーションミドルウェア＆重力場調整システム',
'case4-p2': '物理パラメータ互換レイヤーを開発。バイオ戦艦の周囲に局所的な流體物理フィールドを展開し、実體宇宙の重力抵抗を彼らの生體が許容できる圧力環境へと再エンコードする。',
'img-case4-2': 'assets/images/JA-Case11.webp',
'case4-ch3': 'Part 03: 【高評価の理由】—— 次元を超えた物理的自由の定義',
'case4-p3': '異次元航行における物理的拒絶反応を完璧に解消。クライアントからは「三本の腳はもう震えず、五つの眼はこの乾いた宇宙をハッキリと捉えている」との賛辭が寄せられた。',
'img-case4-3': 'assets/images/JA-Case12.webp',

// Case 5: Forerunners (先驅者)
'case5-title-main': 'フォアランナー（Forerunners）—— ハードライト動的建築コマンドセットプロジェクト',
'case5-ch1': 'Part 01: 【クライアント像】—— 銀河系秩序の絶対的守護者',
'case5-p1': '身長3メートルを超える人型文明であり、複数の指関節を持つ。極限の数学的合理性を崇拝し、その建築技術の核心は「ハードライト（硬光）」に依拠する。',
'img-case5-1': 'assets/images/JA-Case13.webp',
'case5-ch2': 'Part 02: 【納品物】—— Lux-Arch v10.0：ハードライト構造動的建築コマンドセット',
'case5-p2': 'レンダリングエンジンアルゴリズムを最適化。超巨大建造物の再構成遅延をプランク時間以下にまで短縮し、100%純粋な幾何学的対称性を実現。',
'img-case5-2': 'assets/images/JA-Case14.webp',
'case5-ch3': 'Part 03: 【高評価の理由】—— 神級文明の幾何学美の再構築',
'case5-p3': 'マクロスケールにおける同期の難題を解決。クライアントからは「彼のコードは光のように精密で、そして優雅だ」とのフィードバックを得た。',
'img-case5-3': 'assets/images/JA-Case15.webp',

// Case 6: Kryptonians (氪星文明)
'case6-title-main': 'クリプトン文明（Kryptonians）—— 液体金属インテリジェント幾何学インタラクション環境プロジェクト',
'case6-ch1': 'Part 01: 【クライアント像】—— 遺伝子最適化された究極體とリキッド（液体）建築',
'case6-p1': '赤色恒星「コル」システム出身。オブシディアン（黒曜石）の連峰から直接生え出たかのような活體建築を持ち、内装には「リキッド・ジオメトリ」技術を採用。古典貴族の贅沢さと超テクノロジーの冷徹さを追求している。',
'img-case6-1': 'assets/images/JA-Case16.webp',
'case6-ch2': 'Part 02: 【納品物】—— Liquid-Geometry UI：量子重力インタラクションエンジン',
'case6-p2': '「量子重力」に基づくUIエンジンを開発。何億もの微細な金属球の物理的衝突をコントロールし、大規模な粒子再構成時の遅延を完全に排除。完璧な流體美學を実現。',
'img-case6-2': 'assets/images/JA-Case17.webp',
'case6-ch3': 'Part 03: 【高評価の理由】—— 超テクノロジーが紡ぐ冷徹な美学の定義',
'case6-p3': 'シルクのように滑らかなリキッドUIを実現し、指先を振るうだけで星図が瞬時に形作られる。クライアントからは「クリプトン崩壊からの再生以来、最も芸術的美学に叶ったインタラクションUIだ」と絶賛された。',
'img-case6-3': 'assets/images/JA-Case18.webp'
    },
    'en': {
        'main-title': 'Advanced Tech Development<br>For Future Business',
        'lang-toggle': '曰',
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
// 點擊事件處理（修改這裡：只在 日文 ja 與 英文 en 之間二選一直接切換）
function handleLangClick() {
    const currentLang = localStorage.getItem('selectedLang') || 'ja';
    // 如果目前是 ja 就換成 en，否則就換成 ja
    const nextLang = (currentLang === 'ja') ? 'en' : 'ja';
    setLanguage(nextLang);
}

function setLanguage(lang) {
    // 防呆機制：如果傳入的語言不在 i18nData 裡面，一律預設回歸日文 ja
    if (!i18nData[lang]) lang = 'ja';
    
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

// 初始化頁面語言
// 確保這是 language.js 的最後一段
document.addEventListener('DOMContentLoaded', () => {
    // 1. 抓取網址參數 (例如：index.html?lang=ja)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    // 2. 優先級判斷：網址參數 (?lang=ja) > 瀏覽器快取記憶 > 預設日文 ja
    const savedLang = langParam || localStorage.getItem('selectedLang') || 'ja';
    
    // 3. 執行語言渲染
    setLanguage(savedLang);
});