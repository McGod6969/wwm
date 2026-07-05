/* =============================================================================
   Tanko Malaysia (Primaxs Marketing) — Catalog data (bilingual: en / zh-Hant)
   Real Tanko models & photography (assets/products/*). Loaded as a global.
   Full range mirrored from https://www.tanko.com.tw/en/products/
   ========================================================================== */

/* ---- Category icons (inline SVG paths on a 24x24 grid; used in menus/hero) - */
const ICONS = {
  workstation: '<path d="M3 5h18v10H3z"/><path d="M3 15v4M21 15v4M3 9h18M8 9v6"/>',
  workbench: '<path d="M2 8h20v4H2z"/><path d="M4 12v8M20 12v8M4 20h5v-4H4zM15 16h5"/>',
  'tool-cabinet': '<path d="M5 3h14v18H5z"/><path d="M5 9h14M5 15h14M10 6h4M10 12h4M10 18h4"/>',
  'cnc-tool': '<path d="M12 3v6M9 6h6"/><circle cx="12" cy="14" r="4"/><path d="M4 21h16"/>',
  'mould-rack': '<path d="M4 4h16v16H4z"/><path d="M4 10h16M4 15h16M12 4v16"/>',
  'hanger-rack': '<path d="M3 4h18M6 4v16M18 4v16"/><path d="M6 9h12M6 14h12"/>',
  locker: '<path d="M6 3h12v18H6z"/><path d="M6 12h12M15 7v2M15 16v2"/>',
  'parts-cabinet': '<path d="M4 4h16v16H4z"/><path d="M4 9h16M4 14h16M9 4v16M15 4v16"/>',
  'documents-cabinet': '<path d="M6 3h12v18H6z"/><path d="M6 8h12M6 13h12M10 5h4M10 10h4M10 15h4"/>',
  'perforated-board': '<path d="M4 4h16v16H4z"/><circle cx="8" cy="8" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="8" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="16" cy="16" r="1"/>',
  home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>'
};

/* ---- Categories (with illustration photo + real subcategories) ----------- */
const CATEGORIES = [
  { slug: 'workstation', name: { en: 'Workstation', zh: '工作站系統' }, img: 'ry.png',
    tag: { en: 'Modular assembly & production stations', zh: '模組化組裝與生產工作站' },
    desc: { en: 'Fully modular workstations combining benches, racks, drawers and cabinets into an efficient, 5S-ready production cell.',
            zh: '全模組化工作站，結合工作桌、層架、抽屜與櫥櫃，打造符合 5S 的高效生產單元。' },
    subs: [ { slug: 'professional', name: { en: 'Professional', zh: '專業型' } },
            { slug: 'classic', name: { en: 'Classic', zh: '經典型' } } ] },
  { slug: 'workbench', name: { en: 'Workbench', zh: '工作桌' }, img: 'wa-57.png',
    tag: { en: 'Heavy-duty to stainless work surfaces', zh: '重型至不鏽鋼工作檯面' },
    desc: { en: 'Industrial workbenches engineered for stability under load — heavy-duty, professional, performance, stainless and accessories.',
            zh: '為承重穩定而設計的工業工作桌——重型、專業、效能、不鏽鋼與配件一應俱全。' },
    subs: [ { slug: 'heavy-duty', name: { en: 'Heavy-Duty', zh: '重型' } },
            { slug: 'professional', name: { en: 'Professional', zh: '專業型' } },
            { slug: 'performance', name: { en: 'Performance', zh: '效能型' } },
            { slug: 'stainless', name: { en: 'Stainless Steel', zh: '不鏽鋼' } },
            { slug: 'hexagonal', name: { en: 'Hexagonal', zh: '六角型' } },
            { slug: 'accessories', name: { en: 'Accessories', zh: '配件' } } ] },
  { slug: 'tool-cabinet', name: { en: 'Tool Cabinet', zh: '工具櫃' }, img: 'ega.png',
    tag: { en: 'Standard, heavy-duty, trolleys & bin carts', zh: '標準、重型、工具車與零件車' },
    desc: { en: 'Drawer tool cabinets with full-extension slides and high load ratings — fixed, mobile, or as tilt-out bin carts.',
            zh: '附全展開滑軌與高承重抽屜的工具櫃，提供固定式、移動式或傾倒式零件車。' },
    subs: [ { slug: 'standard-c', name: { en: 'Standard', zh: '標準型' } },
            { slug: 'heavy-duty-c', name: { en: 'Heavy-Duty', zh: '重型' } },
            { slug: 'trolley', name: { en: 'Trolley', zh: '工具車' } },
            { slug: 'ekc-cart', name: { en: 'Tilt-Out Bins Cart', zh: '傾倒式零件車' } } ] },
  { slug: 'cnc-tool', name: { en: 'CNC Tool Cabinet', zh: 'CNC 刀具櫃' }, img: 'cnc-h1000.png',
    tag: { en: 'Cabinets, trolleys & enclosed BT/HSK storage', zh: '刀具櫃、刀具車與封閉式 BT／HSK 收納' },
    desc: { en: 'Purpose-built cabinets and trolleys that protect and organise CNC tool holders (BT/HSK) at the point of use.',
            zh: '專為保護與整理 CNC 刀把（BT／HSK）而設計的刀具櫃與刀具車，就近取用。' },
    subs: [] },
  { slug: 'mould-rack', name: { en: 'Mould Rack', zh: '模具架' }, img: 'mb-2.jpg',
    tag: { en: 'High-capacity die & mould shelving', zh: '高承重模具層架' },
    desc: { en: 'Reinforced shelving with 30 mm tops to store heavy dies and moulds safely, with adjustable levels.',
            zh: '附 30mm 厚檯面的強化層架，可安全存放重型模具，層高可調。' },
    subs: [] },
  { slug: 'hanger-rack', name: { en: 'Hanger Rack', zh: '掛板層架' }, img: 'kr-13.jpg',
    tag: { en: 'Shelving & display racking', zh: '層架與展示架' },
    desc: { en: 'Flexible boltless shelving and display racking for parts, inventory and retail presentation.',
            zh: '免螺絲彈性層架與展示架，適用於零件、庫存及零售陳列。' },
    subs: [ { slug: 'shelf', name: { en: 'Shelf', zh: '層架' } },
            { slug: 'display', name: { en: 'Display', zh: '展示架' } } ] },
  { slug: 'locker', name: { en: 'Locker', zh: '置物櫃' }, img: 'fba.jpg',
    tag: { en: 'Personnel & linkable steel lockers', zh: '員工與可併接鋼製置物櫃' },
    desc: { en: 'Ventilated steel lockers for staff belongings — lockable and linkable into banks.',
            zh: '通風鋼製置物櫃，收納員工個人物品，可上鎖並可併接成排。' },
    subs: [] },
  { slug: 'parts-cabinet', name: { en: 'Parts Cabinet', zh: '零件櫃' }, img: 'ta.jpg',
    tag: { en: 'Team Bins, cases & drawer cabinets', zh: '組立盒、零件盒與抽屜櫃' },
    desc: { en: 'Small-parts storage — stackable Team Bins, portable cases and multi-drawer cabinets for fasteners and components.',
            zh: '小零件收納——可堆疊組立盒、可攜零件盒與多抽屜櫃，收納螺絲與零組件。' },
    subs: [ { slug: 'team-bin', name: { en: 'Team Bin', zh: '組立零件盒' } },
            { slug: 'team-case', name: { en: 'Team Case', zh: '零件盒箱' } },
            { slug: 'parts', name: { en: 'Parts Drawer', zh: '零件抽屜櫃' } } ] },
  { slug: 'documents-cabinet', name: { en: 'Documents Cabinet', zh: '文件櫃' }, img: 'a4l-204.png',
    tag: { en: 'A4 filing trays & cabinets', zh: 'A4 文件盤與文件櫃' },
    desc: { en: 'Steel A4 filing trays and cabinets for documents and supplies — desktop and floor-standing.',
            zh: '鋼製 A4 文件盤與文件櫃，收納文件與用品——桌上型與落地型。' },
    subs: [ { slug: 'desktop', name: { en: 'Desktop', zh: '桌上型' } },
            { slug: 'floor', name: { en: 'Floor-standing', zh: '落地型' } } ] },
  { slug: 'perforated-board', name: { en: 'Perforated Board', zh: '洞洞板' }, img: 'kq-34.png',
    tag: { en: 'Pegboard walls, hooks & hangers', zh: '洞洞板牆、掛鉤與掛架' },
    desc: { en: 'Steel and stainless pegboard panels with a full range of hooks and hangers to keep tools within reach.',
            zh: '鋼製與不鏽鋼洞洞板，搭配完整掛鉤與掛架，讓常用工具隨手可取。' },
    subs: [ { slug: 'board', name: { en: 'Board', zh: '洞洞板' } },
            { slug: 'hooks', name: { en: 'Hooks', zh: '掛鉤' } },
            { slug: 'hanger', name: { en: 'Hanger', zh: '掛架' } } ] },
  { slug: 'home', name: { en: 'For Home', zh: '居家收納' }, img: 'haa.png',
    tag: { en: 'Household chests & storage', zh: '居家收納櫃' },
    desc: { en: 'The same Tanko build quality for the home — steel storage chests for the garage, studio and household.',
            zh: '將 Tanko 的品質帶進居家——鋼製收納櫃，適用車庫、工作室與居家空間。' },
    subs: [] }
];

/* ---- Product helpers ----------------------------------------------------- */
function spec(k_en, k_zh, v) { return { k: { en: k_en, zh: k_zh }, v: v }; }
function feat(en, zh) { return { en: en, zh: zh }; }
/* P(): compact product factory -> {slug,category,sub,model,img,series,desc,specs,features} */
function P(slug, category, sub, model, img, sEn, sZh, dEn, dZh, specs, features) {
  return { slug: slug, category: category, sub: sub, model: model, img: img,
           series: { en: sEn, zh: sZh }, desc: { en: dEn, zh: dZh }, specs: specs, features: features };
}
function colour(en, zh, hex) { return { name: { en: en, zh: zh }, hex: hex }; }
/* Verified colour palettes (from Tanko detail pages). */
var TANKO_BOARD_COLOURS = [
  colour('White', '白', '#f3f4f6'), colour('Red', '紅', '#cf2130'), colour('Blue', '藍', '#1f6fb2'),
  colour('Gray', '灰', '#9aa2ab'), colour('Black', '黑', '#232a31')
];
var COL_FRAME_WB = [ colour('White', '白', '#f3f4f6'), colour('Black', '黑', '#232a31') ];
var LOUVRED_NOTE = { en: 'Perforated boards: 5 colours above · louvred boards: gray only',
                     zh: '洞洞板：以上 5 色 · 百葉板：僅灰色' };
/* PV(): a workbench variant product — verified, part of a selectable series.
   o = {slug, sub, seriesId, no, vEn, vZh, model, img, tEn, tZh, dEn, dZh,
        variants, material, load?, colours?, colourNote?, features, origin?} */
function PV(o) {
  return { slug: o.slug, category: 'workbench', sub: o.sub, model: o.model, img: o.img,
    series: { en: o.tEn, zh: o.tZh }, desc: { en: o.dEn, zh: o.dZh }, specs: [], features: o.features,
    seriesId: o.seriesId, variantName: { en: o.vEn, zh: o.vZh }, variantNo: o.no,
    variants: o.variants, material: o.material, load: o.load || null,
    origin: o.origin || 'Made in Taiwan (DIY)', colours: o.colours || null, colourNote: o.colourNote || null,
    verified: true };
}

const PRODUCTS = [
  /* ===================== WORKSTATION — Professional ===================== */
  P('ry', 'workstation', 'professional', 'RY', 'ry.png',
    'Professional Workstation — Combination', '專業工作站 — 組合式',
    'Complete combination workstation pairing a heavy work surface with modular drawer racks and overhead storage.',
    '完整組合式工作站，結合重型檯面、模組抽屜架與上方收納。',
    [spec('Dimensions', '尺寸', '1800 × 750 × 2000 mm'), spec('Worktop load', '檯面承重', '500 kg')],
    [feat('Modular — reconfigure as needs change', '模組化，可依需求重組'), feat('Full-extension ball-bearing slides', '全展開滾珠滑軌')]),
  P('rfc', 'workstation', 'professional', 'RFC', 'rfc.png',
    'Professional Workstation — Modular Rack', '專業工作站 — 模組層架',
    'Modular rack upright system carrying shelves, drawers and pegboard backs in any combination.',
    '模組層架立柱系統，可任意搭配層板、抽屜與洞洞板背板。',
    [spec('Dimensions', '尺寸', '900 × 500 × 2000 mm'), spec('Shelf load', '層板承重', '120 kg / level')],
    [feat('Boltless adjustable levels', '免螺絲高度可調'), feat('Add pegboard or drawers', '可加裝洞洞板或抽屜')]),
  P('rfa-rfb', 'workstation', 'professional', 'RFA / RFB', 'rfa-rfb.png',
    'Professional Workstation — Drawer Rack', '專業工作站 — 抽屜架',
    'Drawer rack module offering dense, organised storage of tools and small parts at the point of use.',
    '抽屜架模組，於作業處提供高密度且井然有序的工具與小零件收納。',
    [spec('Dimensions', '尺寸', '600 × 500 × 2000 mm'), spec('Drawer load', '抽屜承重', '50 kg / drawer')],
    [feat('Full-extension slides', '全展開滑軌'), feat('Lockable', '可上鎖')]),
  P('ra-9201', 'workstation', 'professional', 'RA-9201', 'ra-9201.png',
    'Professional Workstation — Storage Cabinet', '專業工作站 — 收納櫃',
    'Tall storage cabinet with adjustable shelves for bulky tooling and consumables.',
    '高身收納櫃，附可調層板，收納大型工具與耗材。',
    [spec('Dimensions', '尺寸', '900 × 500 × 2000 mm'), spec('Lock', '鎖具', '3-point cam lock / 三點式鎖')],
    [feat('Adjustable shelves', '層板高度可調'), feat('Ventilation slots', '通風孔')]),
  P('ra-6201', 'workstation', 'professional', 'RA-6201', 'ra-6201.png',
    'Professional Workstation — Storage Cabinet', '專業工作站 — 收納櫃',
    'Compact-width storage cabinet variant for narrower workstation layouts.',
    '較窄尺寸的收納櫃款式，適合較小的工作站佈局。',
    [spec('Dimensions', '尺寸', '600 × 500 × 2000 mm'), spec('Shelf load', '層板承重', '100 kg / shelf')],
    [feat('Adjustable shelves', '層板高度可調'), feat('Secure lock', '安全鎖具')]),
  P('ra-9091', 'workstation', 'professional', 'RA-9091', 'ra-9091.png',
    'Professional Workstation — Storage Cabinet', '專業工作站 — 收納櫃',
    'Half-height storage cabinet that slots beneath the workstation surface.',
    '半高收納櫃，可置於工作站檯面下方。',
    [spec('Dimensions', '尺寸', '900 × 500 × 900 mm')],
    [feat('Fits under worktop', '可置於檯面下方'), feat('Adjustable shelf', '層板可調')]),
  P('ra-6091', 'workstation', 'professional', 'RA-6091', 'ra-6091.png',
    'Professional Workstation — Storage Cabinet', '專業工作站 — 收納櫃',
    'Compact half-height storage cabinet for point-of-use consumables.',
    '精巧半高收納櫃，收納就近使用的耗材。',
    [spec('Dimensions', '尺寸', '600 × 500 × 900 mm')],
    [feat('Compact footprint', '精巧尺寸'), feat('Lockable', '可上鎖')]),
  P('re-6201', 'workstation', 'professional', 'RE-6201', 're-6201.png',
    'Professional Workstation — Clothes Locker', '專業工作站 — 衣物櫃',
    'Integrated clothes locker to keep workwear within the workstation footprint.',
    '整合式衣物櫃，讓工作服收納於工作站範圍內。',
    [spec('Dimensions', '尺寸', '600 × 500 × 2000 mm'), spec('Compartments', '隔間', '1–2 tier / 單～雙層')],
    [feat('Hanging rail', '吊衣桿'), feat('Ventilated door', '通風門板')]),
  P('rd-6091', 'workstation', 'professional', 'RD-6091', 'rd-6091.png',
    'Professional Workstation — Sink Cabinet', '專業工作站 — 水槽櫃',
    'Workstation sink cabinet module for cleaning and wet processes on the line.',
    '工作站水槽櫃模組，適用產線上的清潔與濕式作業。',
    [spec('Dimensions', '尺寸', '600 × 500 × 900 mm'), spec('Basin', '水槽', 'Stainless steel / 不鏽鋼')],
    [feat('Stainless basin', '不鏽鋼水槽'), feat('Under-sink storage', '水槽下方收納')]),
  P('rg-6091', 'workstation', 'professional', 'RG-6091', 'rg-6091.png',
    'Professional Workstation — Wastebin Cabinet', '專業工作站 — 垃圾桶櫃',
    'Enclosed wastebin cabinet that keeps refuse tidy and out of sight at the bench.',
    '封閉式垃圾桶櫃，讓廢棄物在工作桌旁整齊且不外露。',
    [spec('Dimensions', '尺寸', '600 × 500 × 900 mm')],
    [feat('Concealed bin', '隱藏式垃圾桶'), feat('Easy to empty', '易於清倒')]),
  P('rc-6094', 'workstation', 'professional', 'RC-6094', 'rc-6094.png',
    'Professional Workstation — Tool Cabinet', '專業工作站 — 工具櫃',
    'Drawer tool cabinet sized to slot beneath the workstation surface for point-of-use tooling.',
    '可置於工作站檯面下方的抽屜工具櫃，就近取用工具。',
    [spec('Dimensions', '尺寸', '600 × 500 × 940 mm'), spec('Drawers', '抽屜數', '4–6')],
    [feat('Full-extension slides', '全展開滑軌'), feat('Central lock', '中央連動鎖')]),
  P('rb-6098', 'workstation', 'professional', 'RB-6098', 'rb-6098.png',
    'Professional Workstation — Tool Cabinet', '專業工作站 — 工具櫃',
    'Taller drawer tool cabinet for higher tool capacity within the workstation.',
    '較高的抽屜工具櫃，於工作站內提供更大工具容量。',
    [spec('Dimensions', '尺寸', '600 × 500 × 980 mm'), spec('Drawers', '抽屜數', '7–8')],
    [feat('High drawer count', '抽屜數多'), feat('Anti-slip liners', '防滑墊')]),

  /* ===================== WORKSTATION — Classic ===================== */
  P('sy', 'workstation', 'classic', 'SY', 'sy.png',
    'Classic Workstation — Combination', '經典工作站 — 組合式',
    'Value-oriented classic combination workstation covering everyday assembly and maintenance.',
    '高性價比的經典組合式工作站，滿足日常組裝與維修。',
    [spec('Dimensions', '尺寸', '1500 × 750 × 1800 mm'), spec('Worktop load', '檯面承重', '400 kg')],
    [feat('Essential modular layout', '基本模組佈局'), feat('Pegboard back panel', '洞洞板背板')]),
  P('scc', 'workstation', 'classic', 'SCC', 'scc.png',
    'Classic Workstation — Modular Rack', '經典工作站 — 模組層架',
    'Classic modular rack uprights for shelves, drawers and pegboard backs.',
    '經典模組層架立柱，可搭配層板、抽屜與洞洞板背板。',
    [spec('Dimensions', '尺寸', '900 × 500 × 1800 mm')],
    [feat('Adjustable levels', '層高可調'), feat('Expandable', '可擴充')]),
  P('sca-scb', 'workstation', 'classic', 'SCA / SCB', 'sca-scb.png',
    'Classic Workstation — Drawer Rack', '經典工作站 — 抽屜架',
    'Classic drawer rack module for organised tool and small-parts storage.',
    '經典抽屜架模組，井然收納工具與小零件。',
    [spec('Dimensions', '尺寸', '600 × 500 × 1800 mm'), spec('Drawer load', '抽屜承重', '40 kg / drawer')],
    [feat('Smooth slides', '順滑滑軌'), feat('Lockable', '可上鎖')]),
  P('saa-331', 'workstation', 'classic', 'SAA-331', 'saa-331.png',
    'Classic Workstation — Storage Cabinet', '經典工作站 — 收納櫃',
    'Classic storage cabinet with adjustable shelves for tooling and consumables.',
    '經典收納櫃，附可調層板，收納工具與耗材。',
    [spec('Dimensions', '尺寸', '900 × 500 × 900 mm')],
    [feat('Adjustable shelves', '層板可調'), feat('Lockable', '可上鎖')]),
  P('sab-331', 'workstation', 'classic', 'SAB-331', 'sab-331.png',
    'Classic Workstation — Tool Cabinet', '經典工作站 — 工具櫃',
    'Classic drawer tool cabinet for point-of-use tooling under the bench.',
    '經典抽屜工具櫃，於工作桌下方就近取用工具。',
    [spec('Dimensions', '尺寸', '600 × 500 × 900 mm'), spec('Drawers', '抽屜數', '4–5')],
    [feat('Full-extension slides', '全展開滑軌'), feat('Central lock', '中央連動鎖')]),
  P('sag-231', 'workstation', 'classic', 'SAG-231', 'sag-231.png',
    'Classic Workstation — Wastebin Cabinet', '經典工作站 — 垃圾桶櫃',
    'Classic enclosed wastebin cabinet for a tidy bench area.',
    '經典封閉式垃圾桶櫃，維持工作桌整潔。',
    [spec('Dimensions', '尺寸', '450 × 500 × 900 mm')],
    [feat('Concealed bin', '隱藏式垃圾桶'), feat('Easy to empty', '易於清倒')]),

  /* ============ WORKBENCH — Heavy-Duty (series 'wa-hd': 4 selectable variants) ============ */
  PV({ slug: 'wa-standard', sub: 'heavy-duty', seriesId: 'wa-hd', no: 1, vEn: 'Standard', vZh: '標準型',
    model: 'WA-57 / WA-67 / WA-77', img: 'wa-57.png',
    tEn: 'Heavy-Duty Workbench — Standard', tZh: '重型工作桌 — 標準型',
    dEn: 'Ultra-rigid fully-welded heavy-duty bench rated to 2000 kg, in three widths.',
    dZh: '超剛性全焊接重型工作桌，承重 2000 公斤，提供三種寬度。',
    variants: [ { code: 'WA-57', dim: 'W1500 × D750 × H800 mm' }, { code: 'WA-67', dim: 'W1800 × D750 × H800 mm' }, { code: 'WA-77', dim: 'W2100 × D750 × H800 mm' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate, wood, stainless or Tanko-top', zh: '鋼架；檯面為橡膠、美耐板、木材、不鏽鋼或 Tanko 專用檯面' },
    load: { en: '2000 kg', zh: '2000 公斤' },
    features: [ feat('Fully welded, ultra-rigid frame', '全焊接超剛性框架'), feat('Configurable panels: pegboard, shelf, socket, light', '可配置面板：洞洞板、層板、插座、照明'), feat('Leveler screws included', '附水平調整螺絲') ] }),
  PV({ slug: 'wa-drawers', sub: 'heavy-duty', seriesId: 'wa-hd', no: 2, vEn: 'With Drawers', vZh: '附抽屜',
    model: 'WAT-5203 / WAT-6203 / WAT-7203', img: 'wat-5203.png',
    tEn: 'Heavy-Duty Workbench — With Drawers', tZh: '重型工作桌 — 附抽屜',
    dEn: 'Heavy-duty bench with an integrated drawer unit, in three widths.',
    dZh: '重型工作桌整合抽屜組，提供三種寬度。',
    variants: [ { code: 'WAT-5203', dim: 'W1500 × D750 mm' }, { code: 'WAT-6203', dim: 'W1800 × D750 mm' }, { code: 'WAT-7203', dim: 'W2100 × D750 mm' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate, wood, stainless or Tanko-top', zh: '鋼架；檯面為橡膠、美耐板、木材、不鏽鋼或 Tanko 專用檯面' },
    load: { en: '2000 kg', zh: '2000 公斤' },
    features: [ feat('Integrated lockable drawers', '整合可上鎖抽屜'), feat('Configurable panels', '可配置面板'), feat('Leveler screws included', '附水平調整螺絲') ] }),
  PV({ slug: 'wa-hanging', sub: 'heavy-duty', seriesId: 'wa-hd', no: 3, vEn: 'With Hanging Cabinet', vZh: '附吊櫃',
    model: 'WAS-54 / WAS-64 / WAS-74', img: 'was-54.png',
    tEn: 'Heavy-Duty Workbench — With Hanging Cabinet', tZh: '重型工作桌 — 附吊櫃',
    dEn: 'Heavy-duty bench with an overhead hanging cabinet and back panel, in three widths.',
    dZh: '重型工作桌附上方吊櫃與背板，提供三種寬度。',
    variants: [ { code: 'WAS-54', dim: 'W1500 × D750 mm' }, { code: 'WAS-64', dim: 'W1800 × D750 mm' }, { code: 'WAS-74', dim: 'W2100 × D750 mm' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate, wood, stainless or Tanko-top', zh: '鋼架；檯面為橡膠、美耐板、木材、不鏽鋼或 Tanko 專用檯面' },
    load: { en: '2000 kg', zh: '2000 公斤' },
    features: [ feat('Overhead hanging cabinet', '上方吊櫃'), feat('Pegboard back panel', '洞洞板背板'), feat('Leveler screws included', '附水平調整螺絲') ] }),
  PV({ slug: 'wa-tool', sub: 'heavy-duty', seriesId: 'wa-hd', no: 4, vEn: 'With Tool Cabinet', vZh: '附工具櫃',
    model: 'WAS-57042 / WAS-67053 / WAS-77042', img: 'was-57042.png',
    tEn: 'Heavy-Duty Workbench — With Tool Cabinet', tZh: '重型工作桌 — 附工具櫃',
    dEn: 'Heavy-duty bench combined with a drawer tool cabinet, in three widths.',
    dZh: '重型工作桌結合抽屜工具櫃，提供三種寬度。',
    variants: [ { code: 'WAS-57042', dim: 'W1500 × D750 mm' }, { code: 'WAS-67053', dim: 'W1800 × D750 mm' }, { code: 'WAS-77042', dim: 'W2100 × D750 mm' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate, wood, stainless or Tanko-top', zh: '鋼架；檯面為橡膠、美耐板、木材、不鏽鋼或 Tanko 專用檯面' },
    load: { en: '2000 kg', zh: '2000 公斤' },
    features: [ feat('Built-in drawer tool cabinet', '內建抽屜工具櫃'), feat('Overhead + drawers', '上櫃＋抽屜'), feat('Leveler screws included', '附水平調整螺絲') ] }),

  /* ====== WORKBENCH — Professional (series 'wb-pro': 4 selectable variants, verified) ====== */
  PV({ slug: 'wb-standard', sub: 'professional', seriesId: 'wb-pro', no: 1, vEn: 'Standard', vZh: '標準型',
    model: 'WB-57 / WB-67', img: 'wb-1500.png',
    tEn: 'Professional Workbench — Standard', tZh: '專業工作桌 — 標準型',
    dEn: 'Rigid professional bench with a hardwearing worktop for everyday assembly and repair.',
    dZh: '堅固的專業工作桌，耐磨檯面，適用日常組裝與維修。',
    variants: [ { code: 'WB-57', dim: 'W1500 × D750 × H800 mm' }, { code: 'WB-67', dim: 'W1800 × D750 × H800 mm' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate or rubber wood', zh: '鋼架；檯面為橡膠、美耐板或橡膠木' },
    load: { en: '600 kg', zh: '600 公斤' },
    features: [ feat('Configurable panels: pegboard, shelf, socket, light', '可配置面板：洞洞板、層板、插座、照明'), feat('Optional anti-static mat', '可選防靜電墊'), feat('Leveler screws included', '附水平調整螺絲') ] }),
  PV({ slug: 'wb-drawers', sub: 'professional', seriesId: 'wb-pro', no: 2, vEn: 'With Drawers', vZh: '附抽屜',
    model: 'WBT-5203 / WBT-6203', img: 'wbt-5203.png',
    tEn: 'Professional Workbench — With Drawers', tZh: '專業工作桌 — 附抽屜',
    dEn: 'Professional bench with an integrated drawer unit for point-of-use tools.',
    dZh: '專業工作桌整合抽屜組，就近取用工具。',
    variants: [ { code: 'WBT-5203', dim: 'W1500 × D750 × H1400 mm' }, { code: 'WBT-6203', dim: 'W1800 × D750 × H1400 mm' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate or rubber wood', zh: '鋼架；檯面為橡膠、美耐板或橡膠木' },
    load: { en: '600 kg overall · drawer 50 kg', zh: '整體 600 公斤 · 抽屜 50 公斤' },
    features: [ feat('Integrated full-extension drawers', '整合全展開抽屜'), feat('Configurable panels', '可配置面板'), feat('Leveler screws included', '附水平調整螺絲') ] }),
  PV({ slug: 'wb-hanging', sub: 'professional', seriesId: 'wb-pro', no: 3, vEn: 'With Hanging Cabinet', vZh: '附吊櫃',
    model: 'WBS-53022 / WBS-63022', img: 'wbs-1500.png',
    tEn: 'Professional Workbench — With Hanging Cabinet', tZh: '專業工作桌 — 附吊櫃',
    dEn: 'Professional bench with an overhead hanging cabinet and back panel for organised storage.',
    dZh: '專業工作桌附上方吊櫃與背板，工具收納井然有序。',
    variants: [ { code: 'WBS-53022', dim: 'W1500 × D750 × H800–1400 mm' }, { code: 'WBS-63022', dim: 'W1800 × D750 × H800–1400 mm' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate or rubber wood', zh: '鋼架；檯面為橡膠、美耐板或橡膠木' },
    load: { en: '600 kg overall · drawer 45 kg', zh: '整體 600 公斤 · 抽屜 45 公斤' },
    features: [ feat('Overhead hanging cabinet', '上方吊櫃'), feat('Pegboard back panel', '洞洞板背板'), feat('Configurable panel sets', '可配置面板組') ] }),
  PV({ slug: 'wb-tool', sub: 'professional', seriesId: 'wb-pro', no: 4, vEn: 'With Tool Cabinet', vZh: '附工具櫃',
    model: 'WB57-EGA / WB67-EGA', img: 'wb57-ega.png',
    tEn: 'Professional Workbench — With Tool Cabinet', tZh: '專業工作桌 — 附工具櫃',
    dEn: 'Professional bench paired with an EGA-7041 drawer tool cabinet for a complete work cell.',
    dZh: '專業工作桌搭配 EGA-7041 抽屜工具櫃，構成完整作業單元。',
    variants: [ { code: 'WB57-EGA', dim: 'W1500 × D750 × H800–1400 mm · cabinet EGA-7041 (W566×D510×H700)' }, { code: 'WB67-EGA', dim: 'W1800 × D750 × H800–1400 mm · cabinet EGA-7041' } ],
    material: { en: 'Steel frame; worktop in rubber, laminate or rubber wood', zh: '鋼架；檯面為橡膠、美耐板或橡膠木' },
    load: { en: '600 kg overall · drawer 45 kg', zh: '整體 600 公斤 · 抽屜 45 公斤' },
    features: [ feat('Built-in EGA-7041 tool cabinet', '內建 EGA-7041 工具櫃'), feat('Lockable drawers', '可上鎖抽屜'), feat('Configurable panels', '可配置面板') ] }),

  /* ====== WORKBENCH — Performance (series 'we-perf': 4 products, White/Black frame) ====== */
  PV({ slug: 'we-1200', sub: 'performance', seriesId: 'we-perf', no: 1, vEn: 'Standard · 1200 mm', vZh: '標準型 · 1200mm',
    model: 'WE-47W (1200 mm)', img: 'we-1200.jpg',
    tEn: 'Performance Workbench — WE (1200 mm)', tZh: '效能工作桌 — WE（1200mm）',
    dEn: 'Compact 1200 mm performance bench with a solid rubber-wood top and matte-painted steel frame.',
    dZh: '精巧 1200mm 效能工作桌，實木（橡膠木）檯面搭配霧面烤漆鋼架。',
    variants: [ { code: 'WE-47W', dim: 'W1200 × D600 × H750 mm' } ],
    material: { en: 'Solid rubber-wood top; matte-painted steel frame', zh: '實木（橡膠木）檯面；霧面烤漆鋼架' },
    colours: COL_FRAME_WB, colourNote: { en: 'Matte-finish frame: White or Black', zh: '霧面烤漆鋼架：白或黑' },
    features: [ feat('Solid rubber-wood tabletop', '實木（橡膠木）檯面'), feat('Power + lighting ready', '可加電源與照明') ] }),
  PV({ slug: 'we-1500', sub: 'performance', seriesId: 'we-perf', no: 2, vEn: 'Standard · 1500 mm', vZh: '標準型 · 1500mm',
    model: 'WE-58W (1500 mm)', img: 'we-1500.jpg',
    tEn: 'Performance Workbench — WE (1500 mm)', tZh: '效能工作桌 — WE（1500mm）',
    dEn: 'Performance bench with integrated power and lighting rails for electronics and precision work.',
    dZh: '整合電源與照明軌的效能工作桌，適合電子與精密作業。',
    variants: [ { code: 'WE-58W', dim: 'W1500 × D750 × H800 mm' } ],
    material: { en: 'Solid rubber-wood top; matte-painted steel frame', zh: '實木（橡膠木）檯面；霧面烤漆鋼架' },
    colours: COL_FRAME_WB, colourNote: { en: 'Matte-finish frame: White or Black', zh: '霧面烤漆鋼架：白或黑' },
    features: [ feat('Integrated power rail', '整合電源軌'), feat('Solid rubber-wood tabletop', '實木（橡膠木）檯面') ] }),
  PV({ slug: 'wet-1200', sub: 'performance', seriesId: 'we-perf', no: 3, vEn: 'With Drawers · 1200 mm', vZh: '附抽屜 · 1200mm',
    model: 'WET-4102W (1200 mm)', img: 'wet-1200.jpg',
    tEn: 'Performance Workbench — WET (1200 mm)', tZh: '效能工作桌 — WET（1200mm）',
    dEn: 'Compact 1200 mm performance bench with an integrated drawer unit for tools and instruments.',
    dZh: '精巧 1200mm 效能工作桌，整合抽屜組，收納工具與儀器。',
    variants: [ { code: 'WET-4102W', dim: 'W1200 × D610 × H750 mm · 45 kg per drawer' } ],
    material: { en: 'Solid rubber-wood top; matte-painted steel frame', zh: '實木（橡膠木）檯面；霧面烤漆鋼架' },
    colours: COL_FRAME_WB, colourNote: { en: 'Matte-finish frame: White or Black', zh: '霧面烤漆鋼架：白或黑' },
    features: [ feat('Integrated drawers', '整合抽屜'), feat('Solid rubber-wood top', '實木（橡膠木）檯面') ] }),
  PV({ slug: 'wet-1500', sub: 'performance', seriesId: 'we-perf', no: 4, vEn: 'With Drawers · 1500 mm', vZh: '附抽屜 · 1500mm',
    model: 'WET-5102W (1500 mm)', img: 'wet-1500.jpg',
    tEn: 'Performance Workbench — WET (1500 mm)', tZh: '效能工作桌 — WET（1500mm）',
    dEn: 'Performance bench with an integrated drawer unit and optional upper shelving.',
    dZh: '1500mm 效能工作桌，整合抽屜組與可選上方層架。',
    variants: [ { code: 'WET-5102W', dim: 'W1500 × D760 × H800 mm' } ],
    material: { en: 'Solid rubber-wood top; matte-painted steel frame', zh: '實木（橡膠木）檯面；霧面烤漆鋼架' },
    colours: COL_FRAME_WB, colourNote: { en: 'Matte-finish frame: White or Black', zh: '霧面烤漆鋼架：白或黑' },
    features: [ feat('Integrated drawers', '整合抽屜'), feat('Solid rubber-wood top', '實木（橡膠木）檯面') ] }),

  /* ====== WORKBENCH — Stainless (series 'wd-ss': 3 selectable variants) ====== */
  PV({ slug: 'wd-standard', sub: 'stainless', seriesId: 'wd-ss', no: 1, vEn: 'Standard', vZh: '標準型',
    model: 'WD-4 / WD-5 / WD-6', img: 'wd-4.png',
    tEn: 'Stainless Steel Workbench — Standard', tZh: '不鏽鋼工作桌 — 標準型',
    dEn: 'SUS stainless bench for food, medical and hygiene-critical environments, in three widths.',
    dZh: 'SUS 不鏽鋼工作桌，適用食品、醫療等衛生要求高的環境，提供三種寬度。',
    variants: [ { code: 'WD-4', dim: 'W1221 mm' }, { code: 'WD-5', dim: 'W1521 mm' }, { code: 'WD-6', dim: 'W1821 mm' } ],
    material: { en: 'SUS stainless steel', zh: 'SUS 不鏽鋼' },
    features: [ feat('Corrosion resistant', '耐腐蝕'), feat('Seamless, easy to sanitise', '無縫、易於清潔消毒') ] }),
  PV({ slug: 'wdt-drawers', sub: 'stainless', seriesId: 'wd-ss', no: 2, vEn: 'With Drawers', vZh: '附抽屜',
    model: 'WDT-4 / WDT-5 / WDT-6', img: 'wdt-5.png',
    tEn: 'Stainless Steel Workbench — With Drawers', tZh: '不鏽鋼工作桌 — 附抽屜',
    dEn: 'Stainless bench with stainless drawers for hygienic tool storage, in three widths.',
    dZh: '不鏽鋼工作桌附不鏽鋼抽屜，衛生地收納工具，提供三種寬度。',
    variants: [ { code: 'WDT-4', dim: 'W1221 mm' }, { code: 'WDT-5', dim: 'W1521 mm' }, { code: 'WDT-6', dim: 'W1821 mm' } ],
    material: { en: 'SUS stainless steel (incl. drawers)', zh: 'SUS 不鏽鋼（含抽屜）' },
    features: [ feat('Stainless drawers', '不鏽鋼抽屜'), feat('Easy to clean', '易於清潔') ] }),
  PV({ slug: 'wd-mobile', sub: 'stainless', seriesId: 'wd-ss', no: 3, vEn: 'Mobile', vZh: '移動式',
    model: 'WD/WDT-4 / -5 / -6 Mobile', img: 'wd-mobile-5.jpg',
    tEn: 'Stainless Steel Workbench — Mobile', tZh: '不鏽鋼工作桌 — 移動式',
    dEn: 'Stainless bench on castors to move between hygienic work areas, in three widths.',
    dZh: '附腳輪的不鏽鋼工作桌，可於衛生作業區之間移動，提供三種寬度。',
    variants: [ { code: 'WD/WDT-4', dim: 'W1217 mm' }, { code: 'WD/WDT-5', dim: 'W1517 mm' }, { code: 'WD/WDT-6', dim: 'W1817 mm' } ],
    material: { en: 'SUS stainless steel', zh: 'SUS 不鏽鋼' },
    features: [ feat('Mobile on castors', '腳輪移動'), feat('Corrosion resistant', '耐腐蝕') ] }),

  /* ====== WORKBENCH — Hexagonal (series 'wh-hex': 4 selectable variants) ====== */
  PV({ slug: 'whb-88', sub: 'hexagonal', seriesId: 'wh-hex', no: 1, vEn: 'Standard', vZh: '標準型',
    model: 'WHB-88', img: 'whb-88.png',
    tEn: 'Hexagonal Workbench — Standard', tZh: '六角型工作桌 — 標準型',
    dEn: 'Hexagonal team workbench seating up to six operators around a shared, ergonomic work surface.',
    dZh: '六角型團隊工作桌，最多可容納六位作業員圍繞共用、符合人體工學的檯面。',
    variants: [ { code: 'WHB-88□', dim: '2500 × 2165 × 850 mm' }, { code: 'WHB-88□1A', dim: '2500 × 2165 × 1100 mm (with power tower)' } ],
    material: { en: 'Steel; worktop rubber (N) or laminate (F)', zh: '鋼製；檯面為橡膠（N）或美耐板（F）' },
    load: { en: '600 kg', zh: '600 公斤' },
    features: [ feat('Hexagonal design for team assembly', '六角型設計，適合團隊組裝'), feat('Leveler screws included', '附水平調整螺絲'), feat('Optional power tower', '可選電源塔') ] }),
  PV({ slug: 'whb-881', sub: 'hexagonal', seriesId: 'wh-hex', no: 2, vEn: 'With Hanging Cabinet', vZh: '附吊櫃',
    model: 'WHB-881', img: 'whb-881.png',
    tEn: 'Hexagonal Workbench — With Hanging Cabinet', tZh: '六角型工作桌 — 附吊櫃',
    dEn: 'Hexagonal team workbench fitted with hanging cabinets for shared tool storage.',
    dZh: '六角型團隊工作桌，配備吊櫃，共用工具收納。',
    variants: [ { code: 'WHB-881', dim: '2500 × 2165 mm footprint' } ],
    material: { en: 'Steel; worktop rubber (N) or laminate (F)', zh: '鋼製；檯面為橡膠（N）或美耐板（F）' },
    load: { en: '600 kg', zh: '600 公斤' },
    features: [ feat('Overhead hanging cabinets', '上方吊櫃'), feat('Hexagonal team layout', '六角型團隊配置') ] }),
  PV({ slug: 'whb-882', sub: 'hexagonal', seriesId: 'wh-hex', no: 3, vEn: 'With Tool Cabinet (WHB)', vZh: '附工具櫃（WHB）',
    model: 'WHB-882', img: 'whb-882.png',
    tEn: 'Hexagonal Workbench — With Tool Cabinet (WHB)', tZh: '六角型工作桌 — 附工具櫃（WHB）',
    dEn: 'Hexagonal team workbench with integrated drawer tool cabinets.',
    dZh: '六角型團隊工作桌，整合抽屜工具櫃。',
    variants: [ { code: 'WHB-882', dim: '2500 × 2165 mm footprint' } ],
    material: { en: 'Steel; worktop rubber (N) or laminate (F)', zh: '鋼製；檯面為橡膠（N）或美耐板（F）' },
    load: { en: '600 kg', zh: '600 公斤' },
    features: [ feat('Integrated tool cabinets', '整合工具櫃'), feat('Hexagonal team layout', '六角型團隊配置') ] }),
  PV({ slug: 'wha-882', sub: 'hexagonal', seriesId: 'wh-hex', no: 4, vEn: 'With Tool Cabinet (WHA)', vZh: '附工具櫃（WHA）',
    model: 'WHA-882', img: 'wha-882.png',
    tEn: 'Hexagonal Workbench — With Tool Cabinet (WHA)', tZh: '六角型工作桌 — 附工具櫃（WHA）',
    dEn: 'Hexagonal team workbench with the WHA heavy-duty tool cabinet configuration.',
    dZh: '六角型團隊工作桌，採 WHA 重型工具櫃配置。',
    variants: [ { code: 'WHA-882', dim: '2500 × 2165 mm footprint' } ],
    material: { en: 'Steel; worktop rubber (N) or laminate (F)', zh: '鋼製；檯面為橡膠（N）或美耐板（F）' },
    load: { en: '600 kg', zh: '600 公斤' },
    features: [ feat('WHA heavy-duty tool cabinets', 'WHA 重型工具櫃'), feat('Hexagonal team layout', '六角型團隊配置') ] }),

  /* ===================== WORKBENCH — Accessories ===================== */
  P('wp-6', 'workbench', 'accessories', 'WP-6', 'wp-6.jpg',
    'Workbench Seating — WP-6', '工作椅 — WP-6',
    'Industrial workbench seating, available in four styles for different tasks.',
    '工業工作椅，提供四種款式因應不同作業。',
    [spec('Styles', '款式', '4 / 四款')],
    [feat('Height adjustable', '高度可調'), feat('Durable build', '耐用結構')]),
  P('wp51', 'workbench', 'accessories', 'WP51', 'wp51.jpg',
    'Bench Vise — WP51', '虎鉗 — WP51',
    'Taiwan-made bench vise for firm workholding during fitting and filing.',
    '台灣製虎鉗，於鉗工與銼修作業中穩固夾持工件。',
    [spec('Origin', '產地', 'Taiwan / 台灣')],
    [feat('Firm clamping', '穩固夾持'), feat('Bolts to bench', '鎖固於工作桌')]),
  P('wp53', 'workbench', 'accessories', 'WP53', 'wp53.jpg',
    'Bench Vise — WP53 (HEUER)', '虎鉗 — WP53（HEUER）',
    'Premium HEUER-brand bench vise for demanding workholding.',
    '高階 HEUER 品牌虎鉗，適用嚴苛夾持需求。',
    [spec('Brand', '品牌', 'HEUER')],
    [feat('Premium quality', '高階品質'), feat('High clamping force', '高夾持力')]),
  P('wp-9003', 'workbench', 'accessories', 'WP-9003 / WP-9004', 'wp-9003.jpg',
    'Ultra-Thin LED Work Light — WP-9003', '超薄 LED 作業燈 — WP-9003',
    'Ultra-thin LED task light to mount above the bench for shadow-free work.',
    '超薄 LED 作業燈，安裝於工作桌上方，提供無陰影照明。',
    [spec('Models', '型號', 'WP-9003 / WP-9004')],
    [feat('Even, bright light', '均勻明亮'), feat('Slim profile', '超薄外型')]),

  /* ===================== TOOL CABINET — Standard ===================== */
  P('ega', 'tool-cabinet', 'standard-c', 'EGA', 'ega.png',
    'Tool Cabinet — Standard (EGA)', '工具櫃 — 標準型（EGA）',
    'Seven-drawer standard tool cabinet with full-extension slides and central locking.',
    '七抽標準工具櫃，附全展開滑軌與中央連動鎖。',
    [spec('Dimensions', '尺寸', '717 × 459 × 1000 mm'), spec('Drawers', '抽屜數', '7')],
    [feat('Central cam lock', '中央連動鎖'), feat('Colour drawer fronts', '彩色抽屜面板')]),
  P('ega-m', 'tool-cabinet', 'standard-c', 'EGA (Mobile)', 'ega-m.png',
    'Mobile Tool Cabinet — EGA', '移動工具櫃 — EGA',
    'The EGA cabinet on heavy-duty castors — the same storage, now mobile.',
    'EGA 工具櫃搭載重型腳輪——相同收納，現可移動。',
    [spec('Dimensions', '尺寸', '717 × 459 × 1030 mm'), spec('Castors', '腳輪', '4 (2 braked)')],
    [feat('Two braked castors', '兩個煞車腳輪'), feat('Push handle', '推把')]),
  P('egl', 'tool-cabinet', 'standard-c', 'EGL', 'egl.png',
    'Mobile Tool Cabinet — EGL', '移動工具櫃 — EGL',
    'Standard mobile tool cabinet configuration for flexible workshop use.',
    '標準移動工具櫃配置，靈活運用於工廠各處。',
    [spec('Dimensions', '尺寸', '717 × 459 × 1030 mm')],
    [feat('Mobile on castors', '腳輪移動'), feat('Full-extension drawers', '全展開抽屜')]),
  P('egm', 'tool-cabinet', 'standard-c', 'EGM', 'egm.png',
    'Mobile Tool Cabinet — EGM', '移動工具櫃 — EGM',
    'Compact mobile tool cabinet for tighter work cells.',
    '精巧移動工具櫃，適合較小的作業單元。',
    [spec('Dimensions', '尺寸', '717 × 459 × 900 mm'), spec('Drawers', '抽屜數', '5–6')],
    [feat('Compact', '精巧'), feat('Central lock', '中央連動鎖')]),
  P('ela', 'tool-cabinet', 'standard-c', 'ELA', 'ela.png',
    'Mobile Tool Cabinet — ELA', '移動工具櫃 — ELA',
    'Wider mobile tool cabinet layout for more drawer capacity.',
    '較寬的移動工具櫃配置，抽屜容量更大。',
    [spec('Dimensions', '尺寸', '900 × 459 × 1000 mm')],
    [feat('Wider body', '加寬機身'), feat('Lockable', '可上鎖')]),
  P('els', 'tool-cabinet', 'standard-c', 'ELS', 'els.png',
    'Mobile Tool Cabinet — ELS', '移動工具櫃 — ELS',
    'Mobile tool cabinet variant with mixed drawer heights.',
    '移動工具櫃款式，抽屜高度可混搭。',
    [spec('Dimensions', '尺寸', '900 × 459 × 1030 mm')],
    [feat('Mixed drawer heights', '抽屜高度可混搭'), feat('Braked castors', '煞車腳輪')]),

  /* ===================== TOOL CABINET — Heavy-Duty ===================== */
  P('ea-h700', 'tool-cabinet', 'heavy-duty-c', 'EA / EB — H700', 'ea-h700.png',
    'Heavy-Duty Tool Cabinet H700', '重型工具櫃 H700',
    'Compact 700 mm heavy-duty cabinet rated for 75 kg per drawer.',
    '700mm 精巧重型工具櫃，每抽承重達 75 公斤。',
    [spec('Dimensions', '尺寸', '717 × 704 × 700 mm'), spec('Drawer load', '抽屜承重', '75 kg')],
    [feat('75 kg heavy drawers', '75 公斤重型抽屜'), feat('705 mm deep', '705mm 加深')]),
  P('ea-h1000', 'tool-cabinet', 'heavy-duty-c', 'EA / EB / ED — H1000', 'ea-h1000.png',
    'Heavy-Duty Tool Cabinet H1000', '重型工具櫃 H1000',
    'Heavy-duty cabinet at 1000 mm, for die shops and heavy tooling.',
    '1000mm 重型工具櫃，適用模具廠與重型刀具。',
    [spec('Dimensions', '尺寸', '717 × 704 × 1000 mm'), spec('Drawer load', '抽屜承重', '75 kg')],
    [feat('Mix drawer heights', '抽屜高度可混搭'), feat('3-point lock', '三點式鎖')]),
  P('ea-h1200', 'tool-cabinet', 'heavy-duty-c', 'EA / EB / ED — H1200', 'ea-h1200.png',
    'Heavy-Duty Tool Cabinet H1200', '重型工具櫃 H1200',
    'Tallest 1200 mm heavy-duty cabinet for maximum drawer capacity.',
    '1200mm 最高規重型工具櫃，抽屜容量最大化。',
    [spec('Dimensions', '尺寸', '717 × 704 × 1200 mm'), spec('Drawer load', '抽屜承重', '75 kg')],
    [feat('Maximum capacity', '最大容量'), feat('Heavy-duty frame', '重型框架')]),
  P('ea-mobile', 'tool-cabinet', 'heavy-duty-c', 'EA / EB (Mobile)', 'ea-mobile.png',
    'Mobile Heavy-Duty Tool Cabinet', '移動式重型工具櫃',
    'Heavy-duty cabinet on castors to bring heavy tooling to the machine.',
    '附腳輪的重型工具櫃，將重型刀具送到機台旁。',
    [spec('Dimensions', '尺寸', '717 × 704 × 1030 mm'), spec('Castors', '腳輪', '4 heavy-duty')],
    [feat('Heavy-duty castors', '重型腳輪'), feat('75 kg drawers', '75 公斤抽屜')]),

  /* ===================== TOOL CABINET — Trolley ===================== */
  P('eka', 'tool-cabinet', 'trolley', 'EKA', 'eka.jpg',
    'Tool Trolley — EKA', '工具車 — EKA',
    'Compact roller cabinet trolley with a worktop, ideal beside the machine.',
    '附檯面的輕巧滾輪工具車，適合放置於機台旁。',
    [spec('Dimensions', '尺寸', '680 × 460 × 810 mm'), spec('Drawers', '抽屜數', '3–5')],
    [feat('Worktop surface', '工作檯面'), feat('Side tool hooks', '側邊工具掛鉤')]),
  P('ekb', 'tool-cabinet', 'trolley', 'EKB', 'ekb.jpg',
    'Tool Trolley — EKB (Drawers)', '工具車 — EKB（抽屜型）',
    'Drawer-focused trolley for organised, mobile tool storage around the shop.',
    '以抽屜為主的工具車，於廠內移動並井然收納工具。',
    [spec('Dimensions', '尺寸', '680 × 460 × 900 mm'), spec('Drawers', '抽屜數', '5–7')],
    [feat('Multiple drawers', '多層抽屜'), feat('Braked castors', '煞車腳輪')]),

  /* ===================== TOOL CABINET — Tilt-Out Bins Cart ===================== */
  P('ekc', 'tool-cabinet', 'ekc-cart', 'EKC', 'ekc.png',
    'Tilt-Out Bins Cart — EKC', '傾倒式零件車 — EKC',
    'Mobile cart of tilt-out bins for fast picking of fasteners and small components.',
    '傾倒式零件盒移動車，可快速揀取螺絲與小零件。',
    [spec('Dimensions', '尺寸', '600 × 400 × 900 mm'), spec('Bins', '零件盒', 'Configurable / 可配置')],
    [feat('Tilt-out clear bins', '透明傾倒盒'), feat('Label holders', '標籤插槽')]),

  /* ===================== CNC TOOL CABINET ===================== */
  P('cnc-h1000', 'cnc-tool', '', 'EA/EB/ED — H1000', 'cnc-h1000.png',
    'CNC Tool Cabinet H1000', 'CNC 刀具櫃 H1000',
    'Drawer cabinet with moulded inserts for CNC tool holders, protecting cutting edges.',
    '附成型內襯的抽屜櫃，收納 CNC 刀把並保護刃口。',
    [spec('Dimensions', '尺寸', '717 × 704 × 1000 mm'), spec('Holder', '刀把', 'BT30/40/50 · HSK')],
    [feat('Protective inserts', '保護成型內襯'), feat('Up to 60 holders', '最多 60 支')]),
  P('cnc-h1200', 'cnc-tool', '', 'EA/EB/ED — H1200', 'cnc-h1200.png',
    'CNC Tool Cabinet H1200', 'CNC 刀具櫃 H1200',
    'Taller CNC tool holder cabinet for higher tooling capacity.',
    '較高的 CNC 刀具櫃，刀具容量更大。',
    [spec('Dimensions', '尺寸', '717 × 704 × 1200 mm'), spec('Holder', '刀把', 'BT / HSK')],
    [feat('Higher capacity', '更高容量'), feat('Lockable drawers', '可上鎖抽屜')]),
  P('cnc-mobile', 'cnc-tool', '', 'Mobile — H1000', 'cnc-mobile.png',
    'Mobile CNC Tool Cabinet', '移動式 CNC 刀具櫃',
    'CNC tool holder cabinet on castors to bring tooling to the machine.',
    '附腳輪的 CNC 刀具櫃，將刀具送到機台旁。',
    [spec('Dimensions', '尺寸', '717 × 704 × 1030 mm')],
    [feat('Mobile on castors', '腳輪移動'), feat('Protective inserts', '保護內襯')]),
  P('cnc-ens1', 'cnc-tool', '', 'ENS-1', 'cnc-ens1.png',
    'CNC Trolley — ENS-1', 'CNC 刀具車 — ENS-1',
    'Single-bay CNC trolley to present tool holders at the machine.',
    '單排 CNC 刀具車，於機台旁呈現刀把。',
    [spec('Holders', '刀把', 'Configurable / 可配置')],
    [feat('Mobile', '可移動'), feat('Angled holder rows', '斜置刀座排')]),
  P('cnc-ens3', 'cnc-tool', '', 'ENS-3', 'cnc-ens3.png',
    'CNC Trolley — ENS-3', 'CNC 刀具車 — ENS-3',
    'Compact three-bay CNC trolley for neat tool-holder presentation.',
    '精巧三排 CNC 刀具車，整齊呈現刀把。',
    [spec('Dimensions', '尺寸', '600 × 400 × 900 mm')],
    [feat('Three holder bays', '三排刀座'), feat('Compact footprint', '精巧尺寸')]),
  P('cnc-enr', 'cnc-tool', '', 'ENR', 'cnc-enr.png',
    'CNC Trolley — ENR', 'CNC 刀具車 — ENR',
    'Rotating/rack CNC trolley variant for high-density holder access.',
    'ENR 刀具車款式，提供高密度刀把取用。',
    [spec('Holders', '刀把', 'High density / 高密度')],
    [feat('High-density storage', '高密度收納'), feat('Mobile', '可移動')]),
  P('cnc-san33', 'cnc-tool', '', 'SAN-33', 'cnc-san33.png',
    'CNC Tool Cabinet with Door — SAN-33', 'CNC 刀具櫃（附門）— SAN-33',
    'Enclosed CNC tool cabinet with doors to keep holders clean and secure.',
    '附門的封閉式 CNC 刀具櫃，保持刀把潔淨與安全。',
    [spec('Dimensions', '尺寸', '900 × 500 × 1800 mm')],
    [feat('Enclosed with doors', '附門封閉'), feat('Dust protection', '防塵保護')]),
  P('cnc-san36', 'cnc-tool', '', 'SAN-36', 'cnc-san36.png',
    'CNC Tool Cabinet with Door — SAN-36', 'CNC 刀具櫃（附門）— SAN-36',
    'Larger enclosed CNC cabinet with adjustable holder shelves.',
    '較大型封閉式 CNC 刀具櫃，刀座層板可調。',
    [spec('Dimensions', '尺寸', '900 × 500 × 1800 mm')],
    [feat('Adjustable holder shelves', '刀座層板可調'), feat('Lockable', '可上鎖')]),

  /* ===================== MOULD RACK ===================== */
  P('mb-2', 'mould-rack', '', 'MB-2', 'mb-2.jpg',
    'Mould Rack — 2 Columns', '模具架 — 二柱',
    'Two-column mould rack with 30 mm tops and ~600 kg per level for heavy dies.',
    '二柱模具架，30mm 檯面、每層約 600 公斤，適用重型模具。',
    [spec('Top', '檯面', '30 mm thick / 30mm 厚'), spec('Load', '承重', '≈ 600 kg / level')],
    [feat('Adjustable levels', '層高可調'), feat('Optional roller top', '可選滾輪層面')]),
  P('mb-3', 'mould-rack', '', 'MB-3', 'mb-3.jpg',
    'Mould Rack — 3 Columns', '模具架 — 三柱',
    'Three-column mould rack for higher-density die and mould storage.',
    '三柱模具架，提供更高密度的模具存放。',
    [spec('Top', '檯面', '30 mm thick / 30mm 厚'), spec('Load', '承重', '≈ 600 kg / level')],
    [feat('More storage bays', '更多儲位'), feat('Roller top option', '可選滾輪層面')]),

  /* ===================== HANGER RACK — Shelf ===================== */
  P('kr-13', 'hanger-rack', 'shelf', 'KR-13', 'kr-13.jpg',
    'Boltless Shelf Rack — KR-13', '免螺絲層架 — KR-13',
    'Quick-assembly boltless shelving for stores, warehouses and back-of-house.',
    '快速組裝的免螺絲層架，適用倉儲、庫房與後場。',
    [spec('Dimensions', '尺寸', '900 × 450 × 1800 mm'), spec('Shelf load', '層板承重', '150 kg / level')],
    [feat('No bolts required', '免螺絲'), feat('Link add-on bays', '可續接延伸')]),
  P('kr-14', 'hanger-rack', 'shelf', 'KR-14', 'kr-14.jpg',
    'Boltless Shelf Rack — KR-14', '免螺絲層架 — KR-14',
    'Four-level boltless shelving for general storage.',
    '四層免螺絲層架，適用一般收納。',
    [spec('Dimensions', '尺寸', '900 × 450 × 2000 mm'), spec('Levels', '層數', '4')],
    [feat('Adjustable shelves', '層板可調'), feat('Boltless build', '免螺絲組裝')]),
  P('kr-23', 'hanger-rack', 'shelf', 'KR-23', 'kr-23.jpg',
    'Boltless Shelf Rack — KR-23', '免螺絲層架 — KR-23',
    'Wider/deeper boltless shelving variant for bulkier inventory.',
    '更寬更深的免螺絲層架款式，適合較大型庫存。',
    [spec('Dimensions', '尺寸', '1200 × 600 × 2000 mm'), spec('Shelf load', '層板承重', '200 kg / level')],
    [feat('Higher capacity', '更高承重'), feat('Adjustable levels', '層高可調')]),
  P('kr-24', 'hanger-rack', 'shelf', 'KR-24', 'kr-24.jpg',
    'Boltless Shelf Rack — KR-24', '免螺絲層架 — KR-24',
    'Tall, wide boltless shelving for high-density warehouse storage.',
    '高身寬版免螺絲層架，適用高密度倉儲。',
    [spec('Dimensions', '尺寸', '1200 × 600 × 2400 mm'), spec('Levels', '層數', '5')],
    [feat('Tall capacity', '高承載'), feat('Link together', '可續接') ]),
  P('km-22', 'hanger-rack', 'shelf', 'KM-22', 'km-22.jpg',
    'Mobile Hanger Rack — KM-22', '移動層架 — KM-22',
    'Mobile shelving on castors to move stock between workstations.',
    '附腳輪的移動層架，於工作站之間搬運物料。',
    [spec('Dimensions', '尺寸', '900 × 450 × 1500 mm'), spec('Castors', '腳輪', '4 (2 braked)')],
    [feat('Mobile on castors', '腳輪移動'), feat('Adjustable shelves', '層板可調')]),
  P('km-23', 'hanger-rack', 'shelf', 'KM-23', 'km-23.jpg',
    'Mobile Hanger Rack — KM-23', '移動層架 — KM-23',
    'Larger mobile shelving unit for moving bulkier stock.',
    '較大型移動層架，搬運較大件物料。',
    [spec('Dimensions', '尺寸', '1200 × 600 × 1500 mm')],
    [feat('Higher capacity', '更高承重'), feat('Braked wheels', '煞車輪')]),

  /* ===================== HANGER RACK — Display ===================== */
  P('da', 'hanger-rack', 'display', 'DA', 'da.jpg',
    'Display Stand — DA', '展示架 — DA',
    'Presentation racking for retail and showrooms with a clean, uniform look.',
    '適用零售與展示間的陳列架，外觀簡潔一致。',
    [spec('Dimensions', '尺寸', '1200 × 400 × 1800 mm')],
    [feat('Showroom finish', '展示等級外觀'), feat('Optional hooks / rod', '可選掛鉤／掛桿')]),
  P('db-dc', 'hanger-rack', 'display', 'DB / DC', 'db-dc.jpg',
    'Display Stand — DB / DC', '展示架 — DB / DC',
    'Display stand variants for different retail merchandising layouts.',
    'DB／DC 展示架款式，因應不同零售陳列需求。',
    [spec('Dimensions', '尺寸', '900 × 400 × 1800 mm')],
    [feat('Flexible layout', '彈性配置'), feat('Adjustable shelves', '層板可調')]),
  P('dd', 'hanger-rack', 'display', 'DD', 'dd.jpg',
    'Display Stand — DD', '展示架 — DD',
    'Display stand with closet rod option for apparel and retail.',
    '附可選掛衣桿的展示架，適用服飾與零售。',
    [spec('Dimensions', '尺寸', '900 × 400 × 1800 mm')],
    [feat('Closet rod option', '可選掛衣桿'), feat('Clean display look', '簡潔展示外觀')]),

  /* ===================== LOCKER ===================== */
  P('fba', 'locker', '', 'FBA (White)', 'fba.jpg',
    'Steel Locker — FBA', '鋼製置物櫃 — FBA',
    'Ventilated steel locker in white, with individual locks and linkable into banks.',
    '白色通風鋼製置物櫃，各格獨立上鎖，可併接成排。',
    [spec('Dimensions', '尺寸', '900 × 450 × 1800 mm'), spec('Compartments', '格數', '6–12')],
    [feat('Ventilated doors', '通風門板'), feat('Linkable side-by-side', '可左右併接')]),
  P('fbb', 'locker', '', 'FBB (Grey)', 'fbb.jpg',
    'Steel Locker — FBB', '鋼製置物櫃 — FBB',
    'Grey ventilated steel locker for staff belongings in workshops and facilities.',
    '灰色通風鋼製置物櫃，收納工廠與場域員工物品。',
    [spec('Dimensions', '尺寸', '900 × 450 × 1800 mm'), spec('Compartments', '格數', '6–12')],
    [feat('Durable powder coat', '耐用粉體烤漆'), feat('Lockable', '可上鎖')]),

  /* ===================== PARTS CABINET — Team Bin ===================== */
  P('ta', 'parts-cabinet', 'team-bin', 'TA', 'ta.jpg',
    'Team Bin — TA', '組立零件盒 — TA',
    'Stackable open-front bins for organised, visible small-parts storage.',
    '可堆疊前開式零件盒，收納小零件清晰可見。',
    [spec('Sizes', '尺寸', 'S / M / L'), spec('Material', '材質', 'PP / 聚丙烯')],
    [feat('Stack or hang', '可堆疊或吊掛'), feat('Label front', '前方標籤')]),
  P('tki-1', 'parts-cabinet', 'team-bin', 'TKI-1', 'tki-1.jpg',
    'Hanging Bin — TKI-1', '掛式零件盒 — TKI-1',
    'Hanging bin system for pegboards and rails, keeping components visible.',
    '適用洞洞板與掛軌的掛式零件盒系統，零件一目了然。',
    [spec('Mounting', '安裝', 'Pegboard / rail / 洞洞板・掛軌')],
    [feat('Hangs on pegboard', '可掛於洞洞板'), feat('Stackable', '可堆疊')]),
  P('tki-2', 'parts-cabinet', 'team-bin', 'TKI-2', 'tki-2.jpg',
    'Hanging Bin — TKI-2', '掛式零件盒 — TKI-2',
    'Larger hanging bin for bigger components and higher volume.',
    '較大型掛式零件盒，收納較大零件與更高量。',
    [spec('Mounting', '安裝', 'Pegboard / rail / 洞洞板・掛軌')],
    [feat('Larger capacity', '更大容量'), feat('Clear label area', '清晰標籤區')]),
  P('tki-hanging', 'parts-cabinet', 'team-bin', 'TKI', 'tki-hanging.png',
    'Hanging Bin Rail Set — TKI', '掛式零件盒掛軌組 — TKI',
    'Bin-and-rail set to mount rows of hanging bins on a wall or bench.',
    '零件盒與掛軌組合，可於牆面或工作桌成排安裝掛式零件盒。',
    [spec('Set', '組合', 'Bins + rail / 零件盒＋掛軌')],
    [feat('Wall or bench mount', '牆面或桌面安裝'), feat('Expandable rows', '可擴充成排')]),
  P('tc-11', 'parts-cabinet', 'team-bin', 'TC-11', 'tc-11.png',
    'Tilt-Out Bin — TC-11', '傾倒式零件盒 — TC-11',
    'Wall-mounted tilt-out bins for quick picking of small parts.',
    '壁掛傾倒式零件盒，快速揀取小零件。',
    [spec('Mounting', '安裝', 'Wall / 壁掛')],
    [feat('Tilt-out access', '傾倒取用'), feat('Clear bins', '透明零件盒')]),

  /* ===================== PARTS CABINET — Team Case ===================== */
  P('tki-30', 'parts-cabinet', 'team-case', 'TKI-30', 'tki-30.png',
    'Team Case — TKI-30', '零件盒箱 — TKI-30',
    'Portable case holding a set of small parts bins for mobile picking.',
    '可攜零件盒箱，內含一組小零件盒，方便行動揀料。',
    [spec('Handle', '提把', 'Yes / 有'), spec('Bins', '零件盒', 'Assorted / 綜合組')],
    [feat('Portable carry case', '可攜手提箱'), feat('Removable bins', '可拆零件盒')]),

  /* ===================== PARTS CABINET — Parts Drawer ===================== */
  P('cea', 'parts-cabinet', 'parts', 'CEA', 'cea.png',
    'Parts Drawer Cabinet — CEA', '零件抽屜櫃 — CEA',
    'Multi-drawer steel cabinet with clear drawers and dividers for fasteners.',
    '多抽鋼製零件櫃，附透明抽屜與分隔片，收納螺絲零件。',
    [spec('Dimensions', '尺寸', '600 × 220 × 430 mm'), spec('Drawers', '抽屜數', '24')],
    [feat('Clear drawers', '透明抽屜'), feat('Removable dividers', '可拆分隔片')]),
  P('ceh', 'parts-cabinet', 'parts', 'CEH', 'ceh.png',
    'Parts Drawer Cabinet — CEH', '零件抽屜櫃 — CEH',
    'Compact parts cabinet with many small drawers for tiny components.',
    '精巧零件櫃，多個小抽屜收納微小零件。',
    [spec('Dimensions', '尺寸', '380 × 220 × 430 mm')],
    [feat('Many small drawers', '多個小抽屜'), feat('Wall-mountable', '可壁掛')]),
  P('parts-ra', 'parts-cabinet', 'parts', 'RA', 'parts-ra.jpg',
    'Parts Drawer Cabinet — RA', '零件抽屜櫃 — RA',
    'Steel parts cabinet with medium drawers for components and hardware.',
    '鋼製零件櫃，中型抽屜收納零組件與五金。',
    [spec('Dimensions', '尺寸', '600 × 220 × 880 mm')],
    [feat('Dividers included', '附分隔片'), feat('Stackable', '可堆疊')]),
  P('parts-rb', 'parts-cabinet', 'parts', 'RB', 'parts-rb.png',
    'Parts Drawer Cabinet — RB', '零件抽屜櫃 — RB',
    'Larger parts cabinet with deeper drawers for higher-volume components.',
    '較大型零件櫃，抽屜更深，收納量更大。',
    [spec('Dimensions', '尺寸', '600 × 220 × 880 mm'), spec('Drawers', '抽屜數', '48')],
    [feat('High drawer count', '抽屜數多'), feat('Clear drawers', '透明抽屜')]),

  /* ===================== DOCUMENTS — Desktop ===================== */
  P('toa-14', 'documents-cabinet', 'desktop', 'TOA-14', 'toa-14.png',
    'Documents Tray — TOA-14', '文件盤 — TOA-14',
    'Steel A4 document tray unit for sorting paperwork on the desktop.',
    '鋼製 A4 文件盤，於桌面分類整理文件。',
    [spec('Format', '規格', 'A4'), spec('Type', '型式', 'Desktop tray / 桌上文件盤')],
    [feat('Sorts paperwork', '分類文件'), feat('Stackable', '可堆疊')]),
  P('a4l-104', 'documents-cabinet', 'desktop', 'A4L-104', 'a4l-104.png',
    'A4 Desktop Cabinet — 1 Column', 'A4 桌上型文件櫃 — 單排',
    'Single-column A4 desktop filing cabinet for tidy document storage.',
    '單排 A4 桌上型文件櫃，文件收納整齊。',
    [spec('Format', '規格', 'A4'), spec('Columns', '排數', '1')],
    [feat('Fits A4 documents', '適用 A4 文件'), feat('Smooth drawers', '順滑抽屜')]),
  P('a4l-204', 'documents-cabinet', 'desktop', 'A4L-204', 'a4l-204.png',
    'A4 Desktop Cabinet — 2 Columns', 'A4 桌上型文件櫃 — 雙排',
    'Two-column A4 desktop cabinet for higher-capacity filing.',
    '雙排 A4 桌上型文件櫃，收納量更大。',
    [spec('Format', '規格', 'A4'), spec('Columns', '排數', '2')],
    [feat('Twin columns', '雙排設計'), feat('Label holders', '標籤插槽')]),

  /* ===================== DOCUMENTS — Floor-standing ===================== */
  P('a4l-110', 'documents-cabinet', 'floor', 'A4L-110', 'a4l-110.png',
    'A4 Floor Cabinet — 1 Column', 'A4 落地文件櫃 — 單排',
    'Single-column floor-standing A4 cabinet for high-capacity filing.',
    '單排落地型 A4 文件櫃，大容量收納。',
    [spec('Format', '規格', 'A4'), spec('Columns', '排數', '1')],
    [feat('Full-height storage', '全高收納'), feat('Smooth slides', '順滑滑軌')]),
  P('a4l-220', 'documents-cabinet', 'floor', 'A4L-220', 'a4l-220.png',
    'A4 Floor Cabinet — 2 Columns', 'A4 落地文件櫃 — 雙排',
    'Floor-standing two-column A4 cabinet for departmental document storage.',
    '雙排落地型 A4 文件櫃，適用部門文件收納。',
    [spec('Format', '規格', 'A4'), spec('Columns', '排數', '2')],
    [feat('High capacity', '大容量'), feat('Label holders', '標籤插槽')]),
  P('a4l-330', 'documents-cabinet', 'floor', 'A4L-330', 'a4l-330.png',
    'A4 Floor Cabinet — 3 Columns', 'A4 落地文件櫃 — 三排',
    'Three-column floor cabinet for maximum open A4 filing capacity.',
    '三排落地型文件櫃，開放式 A4 收納量最大化。',
    [spec('Format', '規格', 'A4'), spec('Columns', '排數', '3')],
    [feat('Maximum capacity', '最大容量'), feat('Adjustable shelves', '層板可調')]),
  P('a4l-330d', 'documents-cabinet', 'floor', 'A4L-330D', 'a4l-330d.png',
    'A4 Floor Cabinet — 3 Columns with Doors', 'A4 落地文件櫃 — 三排附門',
    'Three-column floor cabinet with lockable doors for secure filing.',
    '三排落地型文件櫃，附可上鎖門板，安全存放檔案。',
    [spec('Format', '規格', 'A4'), spec('Doors', '門', 'Lockable / 可上鎖')],
    [feat('Lockable doors', '可上鎖門板'), feat('Secure filing', '安全存放')]),

  /* ===================== PERFORATED BOARD — Board ===================== */
  P('kq-34', 'perforated-board', 'board', 'KQ-3 / KQ-4', 'kq-34.png',
    'Perforated Board — KQ-3 / KQ-4', '洞洞板 — KQ-3 / KQ-4',
    'Steel pegboard panel for walls or bench backs to hang tools in clear view.',
    '鋼製洞洞板，適用牆面或工作桌背板，工具掛放一目了然。',
    [spec('Dimensions', '尺寸', '900 × 450 mm'), spec('Finish', '表面', 'Powder coat / 粉體烤漆')],
    [feat('Works with all Tanko hooks', '相容所有 Tanko 掛鉤'), feat('Wall or bench mount', '牆面或桌面安裝')]),
  P('kq-306as', 'perforated-board', 'board', 'KQ-306AS', 'kq-306as.png',
    'Stainless Perforated Board — KQ-306AS', '不鏽鋼洞洞板 — KQ-306AS',
    'Stainless steel pegboard for hygienic, corrosion-prone environments.',
    '不鏽鋼洞洞板，適用衛生要求高或易腐蝕的環境。',
    [spec('Material', '材質', 'Stainless / 不鏽鋼'), spec('Dimensions', '尺寸', '900 × 600 mm')],
    [feat('Corrosion resistant', '耐腐蝕'), feat('Food / medical suitable', '適用食品／醫療')]),
  P('kh-3', 'perforated-board', 'board', 'KH-3', 'kh-3.png',
    'Louvred Panel — KH-3', '百葉掛板 — KH-3',
    'Louvred steel panel to hang plastic hanging bins for small-parts storage.',
    '鋼製百葉掛板，可掛塑膠零件盒收納小零件。',
    [spec('Dimensions', '尺寸', '900 × 450 mm'), spec('Type', '型式', 'Louvred / 百葉')],
    [feat('Holds hanging bins', '可掛零件盒'), feat('Wall mount', '壁掛安裝')]),

  /* ===================== PERFORATED BOARD — Hooks ===================== */
  P('kp-3', 'perforated-board', 'hooks', 'KP-3', 'kp-3.png',
    'Metal Hook Set — KP-3', '金屬掛鉤組 — KP-3',
    'Assorted metal hooks and holders to hang hand tools from the pegboard.',
    '各式金屬掛鉤與支架，可將手工具掛於洞洞板。',
    [spec('Set', '組數', 'Assorted / 綜合組'), spec('Material', '材質', 'Steel / 鋼')],
    [feat('Multiple hook shapes', '多種掛鉤造型'), feat('Locking option', '可選防脫落')]),
  P('kp-6', 'perforated-board', 'hooks', 'KP-6', 'kp-6.png',
    'Plastic Hook Set — KP-6', '塑膠掛鉤組 — KP-6',
    'Plastic hooks and holders for lighter tools and accessories.',
    '塑膠掛鉤與支架，適用較輕的工具與配件。',
    [spec('Material', '材質', 'Plastic / 塑膠')],
    [feat('Lightweight', '輕量'), feat('Assorted shapes', '多種造型')]),
  P('kp-7', 'perforated-board', 'hooks', 'KP-7', 'kp-7.png',
    'Stainless Hook Set — KP-7', '不鏽鋼掛鉤組 — KP-7',
    'Stainless steel hooks for hygienic or outdoor pegboard applications.',
    '不鏽鋼掛鉤，適用衛生或戶外洞洞板應用。',
    [spec('Material', '材質', 'Stainless / 不鏽鋼')],
    [feat('Corrosion resistant', '耐腐蝕'), feat('Fits KQ boards', '相容 KQ 洞洞板')]),

  /* ===================== PERFORATED BOARD — Hanger ===================== */
  P('kpq-43', 'perforated-board', 'hanger', 'KPQ-43', 'kpq-43.png',
    'Hanging Bin Set — KPQ-43', '掛式零件盒組 — KPQ-43',
    'Pegboard-mounted bin set to keep small parts organised at the bench.',
    '洞洞板掛式零件盒組，於工作桌整理小零件。',
    [spec('Set', '組合', 'Bins + rail / 零件盒＋掛軌')],
    [feat('Mounts on pegboard', '安裝於洞洞板'), feat('Clear bins', '透明零件盒')]),
  P('kp-17', 'perforated-board', 'hanger', 'KP-17', 'kp-17.png',
    'Pegboard Shelf — KP-17', '洞洞板層板 — KP-17',
    'Steel shelf that clips onto the pegboard for tools, manuals or parts.',
    '可扣於洞洞板的鋼製層板，放置工具、手冊或零件。',
    [spec('Mounting', '安裝', 'Pegboard / 洞洞板')],
    [feat('Adds a shelf', '增加層板'), feat('Tool-free fit', '免工具安裝')]),
  P('kp-4604', 'perforated-board', 'hanger', 'KP-4604', 'kp-4604.png',
    'Bottle / Can Holder — KP-4604', '瓶罐掛架 — KP-4604',
    'Pegboard holder for spray cans and bottles, freeing up bench space.',
    '洞洞板瓶罐掛架，收納噴罐與瓶類，釋放桌面空間。',
    [spec('Mounting', '安裝', 'Pegboard / 洞洞板')],
    [feat('Holds cans / bottles', '收納瓶罐'), feat('Frees bench space', '釋放桌面空間')]),
  P('kp-4504', 'perforated-board', 'hanger', 'KP-4504', 'kp-4504.png',
    'T-Handle Holder — KP-4504', 'T 型手柄掛架 — KP-4504',
    'Pegboard holder that racks T-handle tools and drivers neatly.',
    '洞洞板掛架，整齊排放 T 型手柄工具與起子。',
    [spec('Mounting', '安裝', 'Pegboard / 洞洞板')],
    [feat('Racks T-handle tools', '排放 T 型工具'), feat('Steel build', '鋼製結構')]),
  P('kp-4418', 'perforated-board', 'hanger', 'KP-4418', 'kp-4418.png',
    'Clip Holder — KP-4418', '夾式掛架 — KP-4418',
    'Spring-clip pegboard holder to grip round tools and cans.',
    '彈簧夾式洞洞板掛架，夾持圓形工具與罐類。',
    [spec('Mounting', '安裝', 'Pegboard / 洞洞板')],
    [feat('Spring grip', '彈簧夾持'), feat('Holds round items', '固定圓形物件')]),

  /* ===================== HOME ===================== */
  P('haa', 'home', '', 'HAA', 'haa.png',
    'Home Chest of Drawers — HAA', '居家收納櫃 — HAA',
    'Steel chest of drawers bringing workshop-grade quality to the garage, studio or home.',
    '鋼製抽屜收納櫃，將工坊級品質帶進車庫、工作室或居家。',
    [spec('Dimensions', '尺寸', '600 × 400 × 700 mm'), spec('Drawers', '抽屜數', '4–5')],
    [feat('Smooth slides', '順滑滑軌'), feat('Colour options', '多色可選')])
];

/* =============================================================================
   VERIFIED DATA — extracted from the official Tanko HQ product-detail pages
   (https://www.tanko.com.tw/en/products-detail/<slug>/). These override the
   representative specs above with manufacturer-verified figures and add
   product codes, per-model dimensions, materials and accessories.
   Colours / technical drawings / per-product PDFs: NOT published by Tanko on
   these pages (reported in AUDIT_REPORT.md), so they are intentionally omitted.
   Batch 1 = Workstation → Professional (12 products).
   ========================================================================== */
function acc(code, nEn, nZh, dim) { return { code: code, name: { en: nEn, zh: nZh }, dim: dim || '' }; }

const VERIFIED = {
  'ry': {
    variants: [
      { code: 'RY-01A', dim: 'W1240 × D540 × H2020 mm' },
      { code: 'RY-02A', dim: 'W2140 × D540 × H2020 mm' },
      { code: 'RY-03A', dim: 'W2760 × D540 × H2020 mm' },
      { code: 'RY-04A', dim: 'W3660 × D540 × H2020 mm' },
      { code: 'RY-05A', dim: 'W3660 × D540 × H2020 mm' }
    ],
    material: { en: 'Steel body; desktop in rubber wood or 304 stainless steel', zh: '鋼製櫃體；檯面為橡膠木或 304 不鏽鋼' },
    load: { en: 'Tool-cabinet casters: 400 kg total (4 × PU casters)', zh: '工具櫃腳輪：總承重 400 公斤（4 個 PU 腳輪）' },
    origin: 'Made in Taiwan',
    features: [ feat('Modular — combine cabinets, desktops & panels', '模組化——可組合櫥櫃、檯面與面板'),
                feat('Hydraulic lift-up wall cabinet', '氣壓上掀式吊櫃'),
                feat('Perforated boards with hooks', '洞洞板附掛鉤'),
                feat('Universal 110V–220V sockets (plugs not included)', '萬國 110V–220V 插座（不含插頭）') ],
    accessories: [ acc('—', 'Storage / tool / wall cabinets, socket panels, poles (modular add-ons)', '收納櫃／工具櫃／吊櫃、插座面板、立柱（模組配件）', '') ]
  },
  'rfc': {
    variants: [
      { code: 'RFC-131', dim: 'W1370 × D500 × H2020 mm — Independent / 獨立式' },
      { code: 'RFC-132', dim: 'W1300 × D500 × H2020 mm — Linkable / 併接式' }
    ],
    material: { en: 'Steel', zh: '鋼製' },
    load: { en: 'Shelf: 200 kg', zh: '層板：200 公斤' },
    included: { en: 'Shelf × 2', zh: '層板 × 2' },
    origin: 'Made in Taiwan (DIY)',
    features: [ feat('Independent or linkable configurations', '獨立式或可併接式'),
                feat('Vertically adjustable shelves', '層板高度可調'),
                feat('Linkable type includes linking pole', '併接式附連接立柱'),
                feat('Optional TA-154 / TA-155 Team Bins', '可選 TA-154／TA-155 組立盒') ]
  },
  'rfa-rfb': {
    variants: [
      { code: 'RFA-091', dim: 'W970 × D500 × H2020 mm — 60 drawers, Independent / 60抽・獨立' },
      { code: 'RFA-092', dim: 'W900 × D500 × H2020 mm — 60 drawers, Linkable / 60抽・併接' },
      { code: 'RFB-091', dim: 'W970 × D500 × H2020 mm — 30 drawers, Independent / 30抽・獨立' },
      { code: 'RFB-092', dim: 'W900 × D500 × H2020 mm — 30 drawers, Linkable / 30抽・併接' },
      { code: 'TB-1016', dim: 'Drawer: outer W160×D450×H117 / inner W120×D385×H98 mm' }
    ],
    material: { en: 'Rack: steel; drawers (TB-1016): PP / PS', zh: '層架：鋼製；抽屜（TB-1016）：PP／PS' },
    load: { en: 'Shelf: 100 kg · Each drawer: 10 kg', zh: '層板：100 公斤 · 每抽：10 公斤' },
    included: { en: 'RFA: 60 drawers · RFB: 30 drawers + 1 shelf', zh: 'RFA：60 抽 · RFB：30 抽 + 1 層板' },
    origin: 'Made in Taiwan',
    features: [ feat('60-drawer (RFA) or 30-drawer (RFB)', '60 抽（RFA）或 30 抽（RFB）'),
                feat('Independent or linkable', '獨立式或可併接式'),
                feat('Drawer-stop design', '抽屜止擋設計'),
                feat('Coloured labels & dividers included', '附彩色標籤與分隔片') ],
    accessories: [ acc('TB-1016', 'Drawer with coloured labels & dividers', '抽屜，附彩色標籤與分隔片', 'outer W160×D450×H117 mm') ]
  },
  'ra-9201': {
    variants: [ { code: 'RA-9201', dim: 'W900 × D510 × H2020 mm' } ],
    material: { en: 'Steel', zh: '鋼製' }, load: { en: 'Shelf: 100 kg', zh: '層板：100 公斤' },
    included: { en: 'Shelf × 4', zh: '層板 × 4' }, origin: 'Made in Taiwan (DIY)',
    features: [ feat('4 adjustable shelves included', '內含 4 層可調層板'), feat('Lockable', '可上鎖'),
                feat('Optional pull-out shelf & drawer set', '可選拉出層板與抽屜組') ],
    accessories: [ acc('RPB-92', 'Pull-out shelf', '拉出層板', 'W733×D444 mm · 45 kg'),
                   acc('RPB-91', 'Drawer set', '抽屜組', 'W865×D425×H312 mm · 45 kg') ]
  },
  'ra-6201': {
    variants: [ { code: 'RA-6201', dim: 'W620 × D510 × H2020 mm' } ],
    material: { en: 'Steel', zh: '鋼製' }, load: { en: 'Shelf: 100 kg', zh: '層板：100 公斤' },
    included: { en: 'Shelf × 4', zh: '層板 × 4' }, origin: 'Made in Taiwan (DIY)',
    features: [ feat('4 adjustable shelves included', '內含 4 層可調層板'), feat('Lockable', '可上鎖') ]
  },
  're-6201': {
    variants: [ { code: 'RE-6201', dim: 'W620 × D510 × H2020 mm' } ],
    material: { en: 'Steel', zh: '鋼製' }, load: { en: 'Shelf: 100 kg', zh: '層板：100 公斤' },
    included: { en: 'Closet rod × 1, Shelf × 2', zh: '吊衣桿 × 1、層板 × 2' }, origin: 'Made in Taiwan (DIY)',
    features: [ feat('Closet rod + 2 shelves included', '內含吊衣桿與 2 層層板'), feat('Lockable', '可上鎖') ]
  },
  'ra-9091': {
    variants: [ { code: 'RA-9091', dim: 'W900 × D510 × H970 mm' } ],
    material: { en: 'Steel body; desktop in rubber wood or 304 stainless steel', zh: '鋼製櫃體；檯面為橡膠木或 304 不鏽鋼' },
    load: { en: 'Shelf: 100 kg', zh: '層板：100 公斤' }, included: { en: 'Shelf × 2', zh: '層板 × 2' },
    origin: 'Made in Taiwan (DIY · power plugs not included)',
    features: [ feat('Desktop in rubber wood or 304 stainless', '檯面為橡膠木或 304 不鏽鋼'),
                feat('2 shelves included', '內含 2 層層板'), feat('Optional panel set & wall cabinet', '可選面板組與吊櫃') ],
    accessories: [ acc('RPB-92', 'Pull-out shelf', '拉出層板', 'W733×D444 mm · 45 kg'),
                   acc('RPB-91', 'Drawer set', '抽屜組', 'W865×D425×H312 mm · 45 kg'),
                   acc('RPQ-9103A / RPQ-9063A', 'Panel set', '面板組', ''),
                   acc('RPH-91', 'Wall cabinet', '吊櫃', ''),
                   acc('RPA-1', 'Pole (2 pcs)', '立柱（2 支）', '') ]
  },
  'ra-6091': {
    variants: [ { code: 'RA-6091', dim: 'W620 × D510 × H970 mm' } ],
    material: { en: 'Steel body; desktop in rubber wood or 304 stainless steel', zh: '鋼製櫃體；檯面為橡膠木或 304 不鏽鋼' },
    load: { en: 'Shelf: 100 kg', zh: '層板：100 公斤' }, included: { en: 'Shelf × 2', zh: '層板 × 2' },
    origin: 'Made in Taiwan (DIY · power plugs not included)',
    features: [ feat('Desktop in rubber wood or 304 stainless', '檯面為橡膠木或 304 不鏽鋼'),
                feat('Optional universal 110V–220V socket', '可選萬國 110V–220V 插座'),
                feat('Optional panel set & hydraulic wall cabinet', '可選面板組與氣壓吊櫃') ],
    accessories: [ acc('RPQ-6103A / RPQ-6063A', 'Panel set', '面板組', ''),
                   acc('RPH-61', 'Wall cabinet (hydraulic lift-up)', '吊櫃（氣壓上掀）', ''),
                   acc('RPA-1', 'Pole', '立柱', '') ]
  },
  'rd-6091': {
    variants: [ { code: 'RD-6091', dim: 'W620 × D510 × H1220 mm (base) · W620 × D540 × H2020 mm (with panel set)' } ],
    material: { en: 'Steel body; 304 stainless steel sink', zh: '鋼製櫃體；304 不鏽鋼水槽' },
    origin: 'Made in Taiwan (plumbing pipes not included)',
    features: [ feat('304 stainless steel sink', '304 不鏽鋼水槽'),
                feat('Hydraulic lift-up door panels', '氣壓上掀門板'),
                feat('Water baffle; easy to clean', '擋水設計；易於清潔'),
                feat('Lockable; pegboard-compatible', '可上鎖；相容洞洞板') ],
    accessories: [ acc('RPQ-6102 / RPQ-6062', 'Panel set', '面板組', ''),
                   acc('RPH-61', 'Wall cabinet', '吊櫃', ''),
                   acc('RPA-1', 'Poles (set of 2)', '立柱（2 支一組）', '') ]
  },
  'rg-6091': {
    variants: [ { code: 'RG-6091', dim: 'W620 × D510 × H970 mm' } ],
    material: { en: 'Steel body; 304 stainless wastebin; desktop in rubber wood or 304 stainless', zh: '鋼製櫃體；304 不鏽鋼垃圾桶；檯面為橡膠木或 304 不鏽鋼' },
    origin: 'Made in Taiwan',
    features: [ feat('304 stainless wastebin (W490×D400×H503 mm)', '304 不鏽鋼垃圾桶（W490×D400×H503mm）'),
                feat('Adjustable shelf; pegboard hooks', '可調層板；洞洞板掛鉤'),
                feat('Optional 110V–220V sockets × 2', '可選 110V–220V 插座 × 2') ],
    accessories: [ acc('RPQ-6103A / RPQ-6063A', 'Panel set', '面板組', ''),
                   acc('RPH-61', 'Wall cabinet', '吊櫃', ''),
                   acc('RPA-1', 'Pole', '立柱', '') ]
  },
  'rc-6094': {
    variants: [ { code: 'RC-6094', dim: 'W620 × D510 × H970 mm' } ],
    material: { en: 'Steel frame; desktop in rubber wood or 304 stainless steel', zh: '鋼製框架；檯面為橡膠木或 304 不鏽鋼' },
    load: { en: 'Drawer: 45 kg', zh: '抽屜：45 公斤' }, origin: 'Made in Taiwan (power plugs not included)',
    features: [ feat('Drawers rated 45 kg', '抽屜承重 45 公斤'),
                feat('Desktop in rubber wood or 304 stainless', '檯面為橡膠木或 304 不鏽鋼'),
                feat('Optional division boxes & partitions', '可選分隔盒與隔板') ],
    accessories: [ acc('TK-8721 / TK-8722 / TK-8723', 'Division boxes', '分隔盒', ''),
                   acc('EGPL-2', 'Adjustable partition', '可調隔板', ''),
                   acc('RPQ-6103A / RPQ-6063A', 'Panel set', '面板組', ''),
                   acc('RPA-1', 'Pole', '立柱', '') ]
  },
  'rb-6098': {
    variants: [ { code: 'RB-6098', dim: 'W620 × D510 × H970 mm' } ],
    material: { en: 'Steel frame; desktop in rubber wood or 304 stainless steel', zh: '鋼製框架；檯面為橡膠木或 304 不鏽鋼' },
    load: { en: 'Drawer: 45 kg', zh: '抽屜：45 公斤' }, origin: 'Made in Taiwan (power plugs not included)',
    features: [ feat('Drawers rated 45 kg', '抽屜承重 45 公斤'),
                feat('Division boxes & adjustable partitions', '分隔盒與可調隔板'),
                feat('Optional panel set & wall cabinet', '可選面板組與吊櫃') ],
    accessories: [ acc('TK-8721/22/23 · TK-8731/32/33', 'Division boxes', '分隔盒', ''),
                   acc('EGPL-2 / 3 / 4', 'Adjustable partitions', '可調隔板', ''),
                   acc('RPQ-6103A / RPQ-6063A', 'Panel set', '面板組', ''),
                   acc('RPH-61', 'Wall cabinet', '吊櫃', ''),
                   acc('RPA-1', 'Pole', '立柱', '') ]
  },

  /* ===================== HANGER RACK — Shelf (Batch 2) ===================== */
  'kr-13': {
    variants: [
      { code: 'KR-1330 / KL-1330', dim: 'W971×D360×H1453 (indep) · W931 (link) mm — 3 perforated boards' },
      { code: 'KR-1321 / KL-1321', dim: 'W971×D360×H1453 (indep) · W931 (link) mm — 2 perforated + 1 louvred' },
      { code: 'KR-1312 / KL-1312', dim: 'W971×D360×H1453 (indep) · W931 (link) mm — 1 perforated + 2 louvred' },
      { code: 'KR-1303 / KL-1303', dim: 'W971×D360×H1453 (indep) · W931 (link) mm — 3 louvred boards' }
    ],
    material: { en: 'Steel', zh: '鋼製' }, load: { en: 'Optional shelf: 50 kg', zh: '選配層板：50 公斤' },
    colours: TANKO_BOARD_COLOURS, colourNote: LOUVRED_NOTE, origin: 'Made in Taiwan (DIY)',
    features: [ feat('Single-sided; independent or linkable', '單面；獨立或可併接'),
                feat('Hooks on perforated boards; hanging bins on louvred boards', '洞洞板可掛鉤；百葉板可掛零件盒'),
                feat('Leveler screws included', '附水平調整螺絲'), feat('Optional shelf (50 kg)', '可選配層板（50 公斤）') ]
  },
  'kr-14': {
    variants: [
      { code: 'KR-1440 / KL-1440', dim: 'W971×D360×H1903 (indep) · W931 (link) mm — 4 perforated boards' },
      { code: 'KR-1431 / KL-1431', dim: 'W971×D360×H1903 (indep) · W931 (link) mm — 3 perforated + 1 louvred' },
      { code: 'KR-1422 / KL-1422', dim: 'W971×D360×H1903 (indep) · W931 (link) mm — 2 perforated + 2 louvred' },
      { code: 'KR-1413 / KL-1413', dim: 'W971×D360×H1903 (indep) · W931 (link) mm — 1 perforated + 3 louvred' },
      { code: 'KR-1404 / KL-1404', dim: 'W971×D360×H1903 (indep) · W931 (link) mm — 4 louvred boards' }
    ],
    material: { en: 'Steel', zh: '鋼製' }, load: { en: 'Optional shelf: 50 kg', zh: '選配層板：50 公斤' },
    colours: TANKO_BOARD_COLOURS, colourNote: LOUVRED_NOTE, origin: 'Made in Taiwan (DIY)',
    features: [ feat('Single-sided, 4-board; independent or linkable', '單面 4 板；獨立或可併接'),
                feat('Hooks on perforated boards; hanging bins on louvred boards', '洞洞板可掛鉤；百葉板可掛零件盒'),
                feat('Optional bottom tray & shelf (50 kg)', '可選底盤與層板（50 公斤）'), feat('Leveler screws included', '附水平調整螺絲') ]
  },
  'kr-23': {
    variants: [
      { code: 'KR-2360 / KL-2360', dim: 'W971×D620×H1453 (indep) · W931 (link) mm — 6 perforated boards' },
      { code: 'KR-2342 / KL-2342', dim: 'W971×D620×H1453 (indep) · W931 (link) mm — 4 perforated + 2 louvred' },
      { code: 'KR-2324 / KL-2324', dim: 'W971×D620×H1453 (indep) · W931 (link) mm — 2 perforated + 4 louvred' },
      { code: 'KR-2306 / KL-2306', dim: 'W971×D620×H1453 (indep) · W931 (link) mm — 6 louvred boards' }
    ],
    material: { en: 'Steel', zh: '鋼製' }, load: { en: 'Optional shelf: 50 kg', zh: '選配層板：50 公斤' },
    colours: TANKO_BOARD_COLOURS, colourNote: LOUVRED_NOTE, origin: 'Made in Taiwan (DIY)',
    features: [ feat('Double-sided; independent or linkable', '雙面；獨立或可併接'),
                feat('Hooks on perforated boards; hanging bins on louvred boards', '洞洞板可掛鉤；百葉板可掛零件盒'),
                feat('Optional bottom tray & shelf (50 kg)', '可選底盤與層板（50 公斤）'), feat('Leveler screws included', '附水平調整螺絲') ]
  },
  'kr-24': {
    variants: [
      { code: 'KR-2480 / KL-2480', dim: 'W971×D620×H1903 (indep) · W931 (link) mm — 8 perforated boards' },
      { code: 'KR-2462 / KL-2462', dim: 'W971×D620×H1903 (indep) · W931 (link) mm — 6 perforated + 2 louvred' },
      { code: 'KR-2444 / KL-2444', dim: 'W971×D620×H1903 (indep) · W931 (link) mm — 4 perforated + 4 louvred' },
      { code: 'KR-2426 / KL-2426', dim: 'W971×D620×H1903 (indep) · W931 (link) mm — 2 perforated + 6 louvred' },
      { code: 'KR-2408 / KL-2408', dim: 'W971×D620×H1903 (indep) · W931 (link) mm — 8 louvred boards' }
    ],
    material: { en: 'Steel', zh: '鋼製' }, load: { en: 'Optional shelf: 50 kg', zh: '選配層板：50 公斤' },
    colours: TANKO_BOARD_COLOURS, colourNote: LOUVRED_NOTE, origin: 'Made in Taiwan (DIY)',
    features: [ feat('Double-sided, 8-board; independent or linkable', '雙面 8 板；獨立或可併接'),
                feat('Hooks on perforated boards; hanging bins on louvred boards', '洞洞板可掛鉤；百葉板可掛零件盒'),
                feat('Bottom tray included', '附底盤'), feat('Optional shelf (50 kg)', '可選配層板（50 公斤）') ]
  },
  'km-22': {
    variants: [
      { code: 'KM-2240', dim: 'W1050×D613×H1121 mm — 4 perforated boards' },
      { code: 'KM-2222', dim: 'W1050×D613×H1121 mm — 2 perforated + 2 louvred' },
      { code: 'KM-2204', dim: 'W1050×D613×H1121 mm — 4 louvred boards' }
    ],
    material: { en: 'Steel with plastic handles', zh: '鋼製，附塑膠握把' },
    load: { en: 'PU castors: 250 kg · Optional shelf: 50 kg', zh: 'PU 腳輪：250 公斤 · 選配層板：50 公斤' },
    colours: TANKO_BOARD_COLOURS, colourNote: LOUVRED_NOTE, origin: 'Made in Taiwan (DIY)',
    features: [ feat('Mobile, double-sided on PU castors', '移動式雙面，附 PU 腳輪'),
                feat('Bottom tray included; handles', '附底盤；握把'),
                feat('Hooks & hanging bins compatible', '相容掛鉤與掛式零件盒'), feat('Optional shelf (50 kg)', '可選配層板（50 公斤）') ]
  },
  'km-23': {
    variants: [
      { code: 'KM-2360', dim: 'W1072×D613×H1571 mm — 6 perforated boards' },
      { code: 'KM-2342', dim: 'W1072×D613×H1571 mm — 4 perforated + 2 louvred' },
      { code: 'KM-2324', dim: 'W1072×D613×H1571 mm — 2 perforated + 4 louvred' },
      { code: 'KM-2306', dim: 'W1072×D613×H1571 mm — 6 louvred boards' }
    ],
    material: { en: 'Steel with plastic handles', zh: '鋼製，附塑膠握把' },
    load: { en: 'PU castors: 250 kg · Optional shelf: 50 kg', zh: 'PU 腳輪：250 公斤 · 選配層板：50 公斤' },
    colours: TANKO_BOARD_COLOURS, colourNote: LOUVRED_NOTE, origin: 'Made in Taiwan (DIY)',
    features: [ feat('Mobile, double-sided on PU castors', '移動式雙面，附 PU 腳輪'),
                feat('Hooks & hanging bins compatible', '相容掛鉤與掛式零件盒'), feat('Optional shelf (50 kg)', '可選配層板（50 公斤）') ]
  }
};

/* Merge verified data onto the matching products (overlay, non-destructive). */
(function mergeVerified() {
  Object.keys(VERIFIED).forEach(function (slug) {
    var p = PRODUCTS.find(function (x) { return x.slug === slug; });
    if (!p) return;
    var v = VERIFIED[slug];
    p.verified = true;
    if (v.variants) { p.variants = v.variants; p.sku = v.variants.map(function (r) { return r.code; }).filter(function (c) { return c && c !== '—'; }); }
    if (v.material) p.material = v.material;
    if (v.load) p.load = v.load;
    if (v.included) p.included = v.included;
    if (v.origin) p.origin = v.origin;
    if (v.accessories) p.accessories = v.accessories;
    if (v.features) p.features = v.features;
    if (v.colours) p.colours = v.colours;
    if (v.colourNote) p.colourNote = v.colourNote;
  });
})();

/* =============================================================================
   WORKBENCH — full series content, copied from the official Tanko detail pages
   (Features, "How to Choose" step guide, notes, downloads). Series-level content
   is shared by every variant in that series. Per-variant dimension tables live
   in WB_DIM below. Workbench only — no other category is affected.
   ========================================================================== */
var WB_DOWNLOADS = [
  { label: 'Full Catalogue', url: 'https://www.tanko.com.tw/en/download/full-catalogue/' },
  { label: 'Series Catalogue', url: 'https://www.tanko.com.tw/en/download/series/' },
  { label: 'Assembly Instructions', url: 'https://www.tanko.com.tw/en/download/manual/' }
];
var WB_SERIES = {
  'wb-pro': {
    features: [
      { label: 'Workbench-top', detail: 'Wood top, laminate top and rubber top.' },
      { label: 'With leveler screws' },
      { label: '600kg load capacity' },
      { label: 'Perforated boards' },
      { label: 'Shelf' },
      { label: 'Universal socket' },
      { label: 'Anti-static mat', detail: 'Optional, includes 2 snaps and 1 grounding wire. RoHS 2.0 compliant. Surface resistance: 10⁷ – 10⁹ Ω' }
    ],
    featureImages: [
      { img: 'wb-feat-top.jpg', label: 'Workbench-top options' },
      { img: 'wb-feat-leveler.jpg', label: 'Leveler screws' },
      { img: 'wb-feat-load.jpg', label: '600kg load capacity' },
      { img: 'wb-feat-pegboard.jpg', label: 'Perforated boards' },
      { img: 'wb-feat-shelf.jpg', label: 'Shelf' },
      { img: 'wb-feat-socket.jpg', label: 'Universal socket' },
      { img: 'wb-feat-esd.jpg', label: 'Anti-static mat' }
    ],
    dimImages: [
      { img: 'wb-dim-1.png', label: 'W×D×H (base)' },
      { img: 'wb-dim-2.png', label: 'W×D×H (with panel)' },
      { img: 'wb-dim-3.png', label: 'W×D×H (with shelf)' }
    ],
    howToChoose: [
      { no: 1, title: 'Workbench-Top', options: [
        { name: 'Wood top (W)', desc: 'Finger-jointed rubber wood to ensure high durability. High temperature resistance, grease and chemical resistance.', use: 'Tool makers, equipment maintenance.' },
        { name: 'Rubber top (N)', desc: 'High density fiberboard (HDF) covered with green rubber mat on top and PVC protection on four edges. High impact strength.', use: 'Machine maintenance, normal factories, production line and garages.' },
        { name: 'Laminate top (F)', desc: 'Plywood top covered with gray laminate and PVC protective edges, great performance in high temperature environment.', use: 'All electronics companies, research labs, hospitals, workshop and metrology department.' }
      ] },
      { no: 2, title: 'Drawer / Cabinet' },
      { no: 3, title: 'Panel Set', detail: 'None / Perforated board / with Shelf / with Socket / with Shelf+Socket / with Shelf+Socket+Light' },
      { no: 4, title: 'Accessories' }
    ],
    notes: ['※ Power plugs not included (models …4A, …5A, …6A)', 'DIY product, Made in Taiwan'],
    downloads: WB_DOWNLOADS
  },
  'wa-hd': {
    features: [
      { label: 'Workbench-top', detail: 'Rubber, laminate, wood, stainless steel and Tanko top.' },
      { label: 'With leveler screws' },
      { label: '2000kg load capacity' },
      { label: 'Perforated boards' },
      { label: 'Universal socket' },
      { label: 'Shelf & LED Light' },
      { label: 'Anti-static mat', detail: 'Optional, includes 2 snaps and 1 grounding wire. RoHS 2.0 compliant. Surface resistance: 10⁷ – 10⁹ Ω' }
    ],
    featureImages: [
      { img: 'wa-feat-top.jpg', label: 'Workbench-top options' },
      { img: 'wa-feat-leveler.jpg', label: 'Leveler screws' },
      { img: 'wa-feat-load.jpg', label: '2000kg load capacity' },
      { img: 'wa-feat-pegboard.jpg', label: 'Perforated boards' },
      { img: 'wa-feat-socket.jpg', label: 'Universal socket' },
      { img: 'wa-feat-shelfled.jpg', label: 'Shelf & LED light' },
      { img: 'wa-feat-esd.jpg', label: 'Anti-static mat' }
    ],
    dimImages: [
      { img: 'wa-dim-1.png', label: 'W×D×H · None (H800)' },
      { img: 'wa-dim-2.png', label: 'W×D×H · Perforated Board' },
      { img: 'wa-dim-3.png', label: 'W×D×H · + Shelf' },
      { img: 'wa-dim-4.png', label: 'W×D×H · + Socket' },
      { img: 'wa-dim-5.png', label: 'W×D×H · + Shelf + Socket' },
      { img: 'wa-dim-6.png', label: 'W×D×H · + Shelf + Socket + Light' }
    ],
    howToChoose: [
      { no: 1, title: 'Workbench-Top', detail: 'Top thickness — Tanko top: 36mm / 43mm; others: 50mm.', options: [
        { name: 'Rubber top (N)', desc: 'High density fiberboard covered with green rubber mat on top and PVC protection on four edges.', use: 'Machine maintenance, factories, production lines, garages.' },
        { name: 'Laminate top (F)', desc: 'Plywood top covered with gray laminate and PVC protective edges, great performance in high temperature environment.', use: 'Electronics companies, research labs, hospitals, workshops, metrology departments.' },
        { name: 'Stainless steel top (S)', desc: 'High density material covered with 1.2mm stainless steel sheet.', use: 'Tool makers, workshops, research labs.' },
        { name: 'Wood top (W)', desc: 'Finger-jointed rubber wood to ensure high durability.', use: 'Tool makers, equipment maintenance.' },
        { name: 'Tanko top (T)', desc: 'Multi-layer laminate and PVC protection on four edges.', use: 'Research labs, schools.' }
      ] },
      { no: 2, title: 'Drawer / Cabinet' },
      { no: 3, title: 'Panel Set', detail: 'None / Perforated board / with Shelf / with Socket / with Shelf+Socket / with Shelf+Socket+Light' },
      { no: 4, title: 'Accessories' }
    ],
    notes: ['※ Power plugs not included (models …4A, …5A, …6A)', 'DIY product, Made in Taiwan'],
    downloads: WB_DOWNLOADS
  },
  'we-perf': {
    features: [
      { label: 'Black or white color options' },
      { label: 'Rubber wood top' },
      { label: 'Leveler screws' },
      { label: 'Cable grommet' },
      { label: 'Perforated board' },
      { label: 'Monitor arm compatible' },
      { label: 'Shelf' },
      { label: 'Ultra thin LED light' }
    ],
    featureImages: [
      { img: 'we-feat-color.jpg', label: 'Black or white' },
      { img: 'we-feat-woodtop.jpg', label: 'Rubber wood top' },
      { img: 'we-feat-leveler.jpg', label: 'Leveler screws' },
      { img: 'we-feat-drawer.jpg', label: 'Drawer' },
      { img: 'we-feat-handle.jpg', label: 'G-shaped handle' },
      { img: 'we-feat-grommet.jpg', label: 'Cable grommet' },
      { img: 'we-feat-pegboard.jpg', label: 'Perforated board' },
      { img: 'we-feat-led.jpg', label: 'LED light' }
    ],
    dimImages: [
      { img: 'we-dim-1.png', label: 'W×D×H · None (H800)' },
      { img: 'we-dim-2.png', label: 'W×D×H · H600 Perforated Board' },
      { img: 'we-dim-3.png', label: 'W×D×H · H600 + Shelf' },
      { img: 'we-dim-4.png', label: 'W×D×H · H600 + Shelf + LED' },
      { img: 'we-dim-5.png', label: 'W×D×H · H900 Perforated Board' },
      { img: 'we-dim-6.png', label: 'W×D×H · H900 + Shelf' }
    ],
    notes: ['DIY product, Made in Taiwan'],
    downloads: WB_DOWNLOADS
  },
  'wd-ss': {
    features: [
      { label: '304 stainless steel', detail: 'Durable and easy to clean.' },
      { label: 'With leveler screws', detail: '600kg loading capacity.' },
      { label: 'Perforated boards', detail: 'Compatible with hooks.' },
      { label: 'Drawers', detail: 'Available as optional.' },
      { label: 'Shelf', detail: 'For additional storage.' },
      { label: 'Undershelf', detail: 'Optional accessory.' }
    ],
    featureImages: [
      { img: 'wd-feat-material.jpg', label: 'Stainless steel' },
      { img: 'wd-feat-leveler.jpg', label: 'Leveler screws' },
      { img: 'wd-feat-drawers.jpg', label: 'Drawers' },
      { img: 'wd-feat-pegboard.jpg', label: 'Perforated boards' },
      { img: 'wd-feat-shelf.jpg', label: 'Shelf' },
      { img: 'wd-feat-undershelf.jpg', label: 'Undershelf' }
    ],
    dimImages: [
      { img: 'wd-dim-1.png', label: 'WDT-4202S' },
      { img: 'wd-dim-2.png', label: 'WDT-4202S2' },
      { img: 'wd-dim-3.png', label: 'WDT-4202S3' },
      { img: 'wd-dim-4.png', label: 'WDT-4202S7' }
    ],
    notes: ['DIY product, Made in Taiwan'],
    downloads: WB_DOWNLOADS
  },
  'wh-hex': {
    features: [
      { label: 'Workbench-top', detail: 'Rubber top (N) or Laminate top (F).' },
      { label: '600kg load capacity' },
      { label: 'Leveler screws included' },
      { label: 'Hexagonal design' },
      { label: 'Accessories', detail: 'None or Power tower (Power tower: 746×646×250mm).' }
    ],
    featureImages: [
      { img: 'wh-feat-top.jpg', label: 'Workbench-top' },
      { img: 'wh-feat-power.jpg', label: 'Power tower' },
      { img: 'wh-feat-hex.jpg', label: 'Hexagonal design' },
      { img: 'wh-feat-leveler.jpg', label: 'Leveler screws' },
      { img: 'wh-feat-load.jpg', label: '600kg load capacity' }
    ],
    dimImages: [
      { img: 'wh-dim-cabinet.jpg', label: 'Cabinet height' },
      { img: 'wh-dim-size.jpg', label: 'Size reference' },
      { img: 'wh-dim-top.jpg', label: 'Top specifications' },
      { img: 'wh-dim-power.jpg', label: 'Power tower diagram' }
    ],
    howToChoose: [
      { no: 1, title: 'Cabinet', detail: 'H850mm' },
      { no: 2, title: 'Size' },
      { no: 3, title: 'Workbench-Top', options: [
        { name: 'Rubber top (N)', desc: 'Green rubber mat.', use: 'Machine maintenance and factories.' },
        { name: 'Laminate top (F)', desc: 'Gray laminate.', use: 'Electronics companies and labs.' }
      ] },
      { no: 4, title: 'Power tower accessory' }
    ],
    notes: ['※ Power plugs not included (with power tower)', 'DIY product, Made in Taiwan'],
    downloads: WB_DOWNLOADS
  }
};

/* Full verbatim dimension tables (from Tanko detail pages), keyed by variant slug. */
var WB_DIM = {
  'wb-standard': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WB-57□', 'N/F/W', '1500×750×800 mm', 'Steel', 'None'],
    ['WB-57□2', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WB-57□3', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WB-57□4A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WB-57□5A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WB-57□6A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WB-67□', 'N/F/W', '1800×750×800 mm', 'Steel', 'None'],
    ['WB-67□2', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WB-67□3', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WB-67□4A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WB-67□5A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WB-67□6A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light']
  ] },
  'wa-standard': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WA-57□', 'N/F/S/W', '1500×750×800 mm', 'Steel', 'None'],
    ['WA-57□', 'TG(H36)/TH(H43)', '1500×750×786/793 mm', 'Steel', 'None'],
    ['WA-57□2', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WA-57□2', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board'],
    ['WA-57□3', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WA-57□3', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WA-57□4A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WA-57□4A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Socket'],
    ['WA-57□5A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WA-57□5A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WA-57□6A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WA-57□6A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light']
  ] },
  'we-1200': { cols: ['Model', 'Dimensions (W×D×H)', 'Panel Set', 'Colour', 'Material'], rows: [
    ['WE-47W', '1200×600×750 mm', 'None', 'White/Black', 'Steel'],
    ['WE-47W3', '1200×620×1355 mm', 'H600 Perforated Board', 'White/Black', 'Steel'],
    ['WE-47W4', '1200×620×1355 mm', 'H600 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WE-47W5', '1200×620×1355 mm', 'H600 Perforated Board+Shelf+LED Light', 'White/Black', 'Steel'],
    ['WE-47W7', '1200×620×1655 mm', 'H900 Perforated Board', 'White/Black', 'Steel'],
    ['WE-47W8', '1200×620×1655 mm', 'H900 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WE-47W9', '1200×620×1655 mm', 'H900 Perforated Board+Shelf+LED Light', 'White/Black', 'Steel']
  ] },
  'we-1500': { cols: ['Model', 'Dimensions (W×D×H)', 'Panel Set', 'Colour', 'Material'], rows: [
    ['WE-58W', '1500×750×800 mm', 'None', 'White/Black', 'Steel'],
    ['WE-58W3', '1500×770×1405 mm', 'H600 Perforated Board', 'White/Black', 'Steel'],
    ['WE-58W4', '1500×770×1405 mm', 'H600 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WE-58W5', '1500×770×1405 mm', 'H600 Perforated Board+Shelf+LED', 'White/Black', 'Steel'],
    ['WE-58W7', '1500×770×1705 mm', 'H900 Perforated Board', 'White/Black', 'Steel'],
    ['WE-58W8', '1500×770×1705 mm', 'H900 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WE-58W9', '1500×770×1705 mm', 'H900 Perforated Board+Shelf+LED', 'White/Black', 'Steel']
  ] },
  'wd-standard': { cols: ['Model', 'Dimensions (W×D×H)', 'Material'], rows: [
    ['WD-48S', '1217×768×800 mm', '304 stainless steel'],
    ['WD-48S2', '1221×770×1405 mm', '304 stainless steel'],
    ['WD-48S3', '1221×770×1405 mm', '304 stainless steel'],
    ['WD-48S7', '1221×770×1705 mm', '304 stainless steel']
  ] },
  'whb-88': { cols: ['Model', 'Dimensions (W×D×H)', 'Material', 'Load', 'Notes'], rows: [
    ['WHB-88□', '2500×2165×850 mm', 'Steel', '600kg', 'Standard; top N or F'],
    ['WHB-88□1A', '2500×2165×1100 mm', 'Steel', '600kg', 'Includes power tower (746×646×250 mm)']
  ] },
  'wb-drawers': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WBT-5203□', 'N/F/W', '1500×750×1400 mm', 'Steel', 'None'],
    ['WBT-5203□2', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WBT-5203□3', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WBT-5203□4A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WBT-5203□5A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WBT-5203□6A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WBT-6203□', 'N/F/W', '1800×750×1400 mm', 'Steel', 'None'],
    ['WBT-6203□2', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WBT-6203□3', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WBT-6203□4A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WBT-6203□5A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WBT-6203□6A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light']
  ] },
  'wb-hanging': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WBS-53022□', 'N/F/W', '1500×750×800 mm', 'Steel', 'None'],
    ['WBS-53022□2', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WBS-53022□3', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WBS-53022□4A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WBS-53022□5A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WBS-53022□6A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WBS-63022□', 'N/F/W', '1800×750×800 mm', 'Steel', 'None'],
    ['WBS-63022□2', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WBS-63022□3', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WBS-63022□4A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WBS-63022□5A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WBS-63022□6A', 'N/F/W', '1800×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light']
  ] },
  'wb-tool': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WB-57□', 'N/F/W', '1500×750×800 mm', 'Steel', 'None'],
    ['WB-57□2', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WB-57□3', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WB-57□4A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WB-57□5A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WB-57□6A', 'N/F/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WB-67□ … □6A', 'N/F/W', '1800×750×800–1400 mm', 'Steel', 'Same panel-set options (1800 mm width)'],
    ['EGA-7041 (Tool Cabinet)', '—', 'W566×D510×H700 mm', 'Steel', '45 kg per drawer']
  ] },
  'wa-drawers': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WAT-5203□', 'N/F/S/W', '1500×750×800 mm', 'Steel', 'None'],
    ['WAT-5203□', 'TG(H36)/TH(H43)', '1500×750×786/793 mm', 'Steel', 'None'],
    ['WAT-5203□2', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WAT-5203□2', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board'],
    ['WAT-5203□3', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WAT-5203□3', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WAT-5203□4A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WAT-5203□4A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Socket'],
    ['WAT-5203□5A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WAT-5203□5A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WAT-5203□6A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WAT-5203□6A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light']
  ] },
  'wa-hanging': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WAS-54022□', 'N/F/S/W', '1500×750×800 mm', 'Steel', 'None'],
    ['WAS-54022□', 'TG(H36)/TH(H43)', '1500×750×786/793 mm', 'Steel', 'None'],
    ['WAS-54022□2', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WAS-54022□2', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board'],
    ['WAS-54022□3', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WAS-54022□3', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WAS-54022□4A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WAS-54022□4A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Socket'],
    ['WAS-54031□5A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WAS-54031□5A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WAS-54031□6A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WAS-54031□6A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light']
  ] },
  'wa-tool': { cols: ['Model', 'Top', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WAS-57042□', 'N/F/S/W', '1500×750×800 mm', 'Steel', 'None'],
    ['WAS-57042□', 'TG(H36)/TH(H43)', '1500×750×786/793 mm', 'Steel', 'None'],
    ['WAS-57042□2', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board'],
    ['WAS-57042□2', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board'],
    ['WAS-57042□3', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WAS-57042□3', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf'],
    ['WAS-57042□4A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Socket'],
    ['WAS-57042□4A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Socket'],
    ['WAS-57042□5A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WAS-57042□5A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket'],
    ['WAS-57042□6A', 'N/F/S/W', '1500×750×1400 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['WAS-57042□6A', 'TG/TH', '1500×750×1386/1393 mm', 'Steel', 'Perforated Board+Shelf+Socket+Light'],
    ['EA Tool Cabinet | H700', '—', 'W566×D607×H700 mm', 'Steel', '100 kg per drawer']
  ] },
  'wet-1200': { cols: ['Model', 'Dimensions (W×D×H)', 'Panel Set', 'Colour', 'Material'], rows: [
    ['WET-4102W', '1200×610×750 mm', 'None', 'White/Black', 'Steel'],
    ['WET-4102W3', '1200×625×1355 mm', 'H600 Perforated Board', 'White/Black', 'Steel'],
    ['WET-4102W4', '1200×625×1355 mm', 'H600 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WET-4102W5', '1200×625×1355 mm', 'H600 Perforated Board+Shelf+LED Light', 'White/Black', 'Steel'],
    ['WET-4102W7', '1200×625×1655 mm', 'H900 Perforated Board', 'White/Black', 'Steel'],
    ['WET-4102W8', '1200×625×1655 mm', 'H900 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WET-4102W9', '1200×625×1655 mm', 'H900 Perforated Board+Shelf+LED Light', 'White/Black', 'Steel']
  ] },
  'wet-1500': { cols: ['Model', 'Dimensions (W×D×H)', 'Panel Set', 'Colour', 'Material'], rows: [
    ['WET-5102W', '1500×760×800 mm', 'None', 'White/Black', 'Steel'],
    ['WET-5102W3', '1500×775×1405 mm', 'H600 Perforated Board', 'White/Black', 'Steel'],
    ['WET-5102W4', '1500×775×1405 mm', 'H600 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WET-5102W5', '1500×775×1405 mm', 'H600 Perforated Board+Shelf+LED Light', 'White/Black', 'Steel'],
    ['WET-5102W7', '1500×775×1705 mm', 'H900 Perforated Board', 'White/Black', 'Steel'],
    ['WET-5102W8', '1500×775×1705 mm', 'H900 Perforated Board+Shelf', 'White/Black', 'Steel'],
    ['WET-5102W9', '1500×775×1705 mm', 'H900 Perforated Board+Shelf+LED Light', 'White/Black', 'Steel']
  ] },
  'wdt-drawers': { cols: ['Model', 'Dimensions (W×D×H)', 'Material', 'Panel Set'], rows: [
    ['WDT-4202S', '1217×768×800 mm', '304 stainless steel', 'None'],
    ['WDT-4202S2', '1221×770×1405 mm', '304 stainless steel', 'Perforated board (H645mm)'],
    ['WDT-4202S3', '1221×770×1405 mm', '304 stainless steel', 'Perforated board (H645mm) + Shelf'],
    ['WDT-4202S7', '1221×770×1705 mm', '304 stainless steel', 'Perforated board (H945mm) + Shelf']
  ] },
  'wd-mobile': { cols: ['Model', 'Dimensions (W×D×H)', 'Material', 'Castors', 'Configuration'], rows: [
    ['WD-48MS', '1217×768×887 mm', '304 stainless steel', '3" PU (400kg)', 'Standard'],
    ['WDT-4202MS', '1217×768×887 mm', '304 stainless steel', '3" PU (400kg)', 'With drawers (35kg / drawer)']
  ] },
  'whb-881': { cols: ['Model', 'Dimensions (W×D×H)', 'Material', 'Load', 'Notes'], rows: [
    ['WHB-881□', '2500×2165×850 mm', 'Steel', '600kg total; 45kg/drawer', 'Hanging cabinet; top N or F'],
    ['WHB-881□1A', '2500×2165×1100 mm', 'Steel', '600kg total; 45kg/drawer', 'Includes power tower (746×646×250 mm)']
  ] },
  'whb-882': { cols: ['Model', 'Dimensions (W×D×H)', 'Material', 'Load', 'Notes'], rows: [
    ['WHB-882□', '2500×2165×850 mm', 'Steel', '1000kg total; 45kg/drawer', 'Tool cabinet; top N or F'],
    ['WHB-882□1A', '2500×2165×1100 mm', 'Steel', '1000kg total; 45kg/drawer', 'Includes power tower (746×646×250 mm)']
  ] },
  'wha-882': { cols: ['Model', 'Dimensions (W×D×H)', 'Material', 'Load', 'Notes'], rows: [
    ['WHA-882□', '2500×2165×850 mm', 'Steel', '1000kg total; 100kg/drawer', 'Tool cabinet; top N or F'],
    ['WHA-882□1A', '2500×2165×1100 mm', 'Steel', '1000kg total; 100kg/drawer', 'Includes power tower (746×646×250 mm)']
  ] }
};
/* Attach dimension tables to their products (workbench only, non-destructive). */
Object.keys(WB_DIM).forEach(function (slug) {
  var p = PRODUCTS.find(function (x) { return x.slug === slug; });
  if (p) p.dimTable = WB_DIM[slug];
});

/* ---- Applications / case studies ---------------------------------------- */
const APPLICATIONS = [
  { slug: 'creative-studio', cat: 'media', title: { en: 'Creative Studio Storage', zh: '創意工作室收納' },
    client: 'Studio', location: { en: 'Worldwide', zh: '全球' },
    body: { en: 'Modular workstations and pegboards keep props, parts and tools organised on fast-moving creative shoots.',
            zh: '模組工作站與洞洞板，讓道具、零件與工具在快節奏的創意拍攝中井然有序。' },
    products: ['ry', 'kq-34'] },
  { slug: 'ev-workshop', cat: 'industry', title: { en: 'EV Scooter Workshop', zh: '電動機車維修廠' },
    client: 'Manufacturer', location: { en: 'Malaysia', zh: '馬來西亞' },
    body: { en: 'Heavy-duty benches, tool trolleys and CNC tool cabinets equip an efficient 5S assembly and service line.',
            zh: '重型工作桌、工具車與 CNC 刀具櫃，打造高效的 5S 組裝與維修產線。' },
    products: ['wa-standard', 'eka', 'cnc-h1000'] },
  { slug: 'aerospace-mro', cat: 'industry', title: { en: 'Aerospace MRO Facility', zh: '航太維修基地' },
    client: 'MRO', location: { en: 'Worldwide', zh: '全球' },
    body: { en: 'Traceable tool control with lockable cabinets and pegboard shadow boards supports strict aerospace standards.',
            zh: '可上鎖工具櫃與洞洞板影形板提供可追溯的工具管理，符合嚴格航太標準。' },
    products: ['ega', 'kq-34'] },
  { slug: 'campus-racing', cat: 'campus', title: { en: 'Formula Student Team', zh: '大專方程式賽車隊' },
    client: 'University', location: { en: 'Worldwide', zh: '全球' },
    body: { en: 'A complete workshop of workbenches, tool cabinets and parts storage for student engineering teams.',
            zh: '為學生工程團隊配置完整的工作桌、工具櫃與零件收納工坊。' },
    products: ['wb-standard', 'ega', 'ta'] },
  { slug: 'tech-classroom', cat: 'campus', title: { en: 'Living Technology Classroom', zh: '生活科技教室' },
    client: 'School', location: { en: 'Malaysia', zh: '馬來西亞' },
    body: { en: 'Durable workstations and lockable storage create a safe, organised hands-on learning environment.',
            zh: '耐用工作站與可上鎖收納，營造安全且有序的動手學習環境。' },
    products: ['sy', 'fba'] },
  { slug: 'home-gym', cat: 'others', title: { en: 'Home Gym & Garage', zh: '居家健身房與車庫' },
    client: 'Residential', location: { en: 'Malaysia', zh: '馬來西亞' },
    body: { en: 'Steel chests and pegboards bring workshop-grade organisation to the home.',
            zh: '鋼製收納櫃與洞洞板，將工坊級收納帶進居家。' },
    products: ['haa', 'kq-34'] }
];

/* ---- News --------------------------------------------------------------- */
const NEWS = [
  { slug: 'metaltech-2026', date: '2026-05-20',
    title: { en: 'Meet us at METALTECH 2026', zh: 'METALTECH 2026 與我們見面' },
    excerpt: { en: 'Visit our booth to see the latest workstations, heavy-duty benches and CNC tool storage in person.',
               zh: '歡迎蒞臨攤位，親自體驗最新工作站、重型工作桌與 CNC 刀具收納。' },
    body: { en: 'Primaxs Marketing — authorised Tanko distributor — will exhibit the full storage-solutions range at METALTECH 2026 in the Klang Valley. Our team will be on hand to discuss 5S workshop planning and custom configurations.',
            zh: 'Tanko 授權經銷商 Primaxs Marketing 將於巴生谷舉行的 METALTECH 2026 展出完整儲存解決方案系列，團隊將現場說明 5S 工廠規劃與客製配置。' } },
  { slug: 'showroom-open', date: '2026-03-08',
    title: { en: 'Visit our Seri Kembangan showroom', zh: '歡迎參觀我們的 Seri Kembangan 展示間' },
    excerpt: { en: 'See and try Tanko workstations, benches and cabinets in person at our Balakong Jaya showroom.',
               zh: '在 Balakong Jaya 展示間親自體驗 Tanko 工作站、工作桌與工具櫃。' },
    body: { en: 'Our showroom in Taman Industri Balakong Jaya, Seri Kembangan is open for you to see and try the Tanko range. Contact us on WhatsApp to arrange a visit.',
            zh: '位於 Seri Kembangan、Taman Industri Balakong Jaya 的展示間已開放，歡迎前來體驗 Tanko 系列。請透過 WhatsApp 聯繫我們安排參觀。' } },
  { slug: 'linkable-locker', date: '2026-01-15',
    title: { en: 'Linkable Locker System available', zh: '可併接置物櫃系統上市' },
    excerpt: { en: 'Build locker banks of any width with the new linkable system.',
               zh: '以全新可併接系統打造任意寬度的置物櫃排。' },
    body: { en: 'The linkable locker system lets facilities scale from a single unit to a full wall of lockers while keeping a clean, uniform look.',
            zh: '可併接置物櫃系統，讓場域可從單櫃擴充至整面櫃牆，同時維持整齊一致的外觀。' } }
];

/* ---- Downloads ---------------------------------------------------------- */
const DOWNLOADS = [
  { title: { en: 'Tanko Full Product Catalog (EN)', zh: 'Tanko 完整產品型錄（英文）' }, type: 'catalog', size: 'PDF · 28 MB', lang: 'EN' },
  { title: { en: 'Tanko 完整產品型錄（中文）', zh: 'Tanko 完整產品型錄（中文）' }, type: 'catalog', size: 'PDF · 28 MB', lang: '中文' },
  { title: { en: 'Workstation Planning Guide', zh: '工作站規劃指南' }, type: 'catalog', size: 'PDF · 6 MB', lang: 'EN' },
  { title: { en: 'Tool Cabinet Assembly Instructions', zh: '工具櫃組裝說明' }, type: 'assembly', size: 'PDF · 2 MB', lang: 'EN' },
  { title: { en: 'Boltless Shelf Assembly Instructions', zh: '免螺絲層架組裝說明' }, type: 'assembly', size: 'PDF · 1.5 MB', lang: 'EN' },
  { title: { en: 'Locker Assembly Instructions', zh: '置物櫃組裝說明' }, type: 'assembly', size: 'PDF · 1.2 MB', lang: 'EN' }
];

/* ---- Company / contact (Primaxs Marketing — Tanko Malaysia) -------------- */
const COMPANY = {
  name: { en: 'Tanko Malaysia', zh: 'Tanko 馬來西亞' },
  legal: { en: 'Primaxs Marketing (M) Sdn Bhd — Authorised Tanko distributor', zh: 'Primaxs Marketing (M) Sdn Bhd — Tanko 授權經銷商' },
  address: { en: 'No. 39, Jalan Balakong Jaya 4, Taman Industri Balakong Jaya, 43300 Seri Kembangan, Selangor, Malaysia',
             zh: 'No. 39, Jalan Balakong Jaya 4, Taman Industri Balakong Jaya, 43300 Seri Kembangan, Selangor, Malaysia' },
  phone: '+60 12-616 3088',
  whatsapp: '60126163088',
  email: 'sales@storagesystem.my',
  maps: 'https://www.google.com/maps/search/?api=1&query=Taman+Industri+Balakong+Jaya+Seri+Kembangan+Selangor',
  hours: { en: 'Mon–Fri 9:00–18:00 (MYT) · Showroom visits by appointment', zh: '週一至週五 9:00–18:00（馬來西亞時間）· 展示間參觀採預約制' }
};
