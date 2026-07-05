/* =============================================================================
   Tanko Malaysia — app: hash router, views, i18n rendering
   Depends on: i18n.js, data.js  (all loaded as globals; no fetch => file:// ok)
   ========================================================================== */
'use strict';

/* ---------- helpers -------------------------------------------------------- */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function el(id) { return document.getElementById(id); }
function catBySlug(s) { return CATEGORIES.find(c => c.slug === s); }
function productBySlug(s) { return PRODUCTS.find(p => p.slug === s); }
function productsIn(catSlug, subSlug) {
  return PRODUCTS.filter(p => p.category === catSlug && (!subSlug || p.sub === subSlug));
}

/* ---------- SVG image placeholders (self-contained, offline-safe) ---------- */
function productImage(catSlug, label, tall) {
  const icon = ICONS[catSlug] || ICONS['tool-cabinet'];
  const h = tall ? 360 : 300;
  const iy = (h - 144) / 2;
  return (
    '<svg class="ph" viewBox="0 0 400 ' + h + '" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(label) + '">' +
      '<rect width="400" height="' + h + '" fill="#20262d"/>' +
      '<rect width="400" height="' + h + '" fill="#2b333c"/>' +
      '<path d="M0 0 L64 0 L0 64 Z" fill="#d71920"/>' +
      '<g transform="translate(128 ' + iy + ') scale(6)" fill="none" stroke="#7f8c99" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">' + icon + '</g>' +
      '<rect x="16" y="' + (h - 44) + '" width="' + (24 + label.length * 9.2) + '" height="28" rx="4" fill="#14181d"/>' +
      '<text x="28" y="' + (h - 25) + '" fill="#e9edf1" font-family="monospace" font-size="15" font-weight="700">' + esc(label) + '</text>' +
    '</svg>'
  );
}
function categoryImage(catSlug) {
  const icon = ICONS[catSlug] || ICONS['tool-cabinet'];
  return (
    '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<g transform="translate(24 24) scale(3)" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">' + icon + '</g>' +
    '</svg>'
  );
}
/* Real product photo when available, else generated SVG placeholder. */
function media(p, tall) {
  if (p && p.img) {
    return '<img class="photo-img" src="assets/products/' + p.img + '" alt="' + esc(L(p.series) + ' ' + p.model) + '">';
  }
  return productImage(p ? p.category : 'tool-cabinet', p ? p.model : '', tall);
}
function imgWrapClass(base, p) { return base + (p && p.img ? ' photo' : ''); }

/* ---------- cards ---------------------------------------------------------- */
function productCard(p) {
  if (!p) return '';
  const cat = catBySlug(p.category);
  return (
    '<a class="card product-card" href="#/product/' + p.slug + '">' +
      '<div class="' + imgWrapClass('card-img', p) + '">' + media(p) + '</div>' +
      '<div class="card-body">' +
        '<div class="card-cat">' + esc(L(cat.name)) + '</div>' +
        '<h3 class="card-title">' + esc(L(p.series)) + '</h3>' +
        '<div class="card-model">' + t('product.model') + ' ' + esc(p.model) + '</div>' +
      '</div>' +
    '</a>'
  );
}
function categoryCard(c) {
  var visual = c.img
    ? '<img src="assets/products/' + c.img + '" alt="' + esc(L(c.name)) + '">'
    : '<span class="cat-icon">' + categoryImage(c.slug) + '</span>';
  return (
    '<a class="cat-card" href="#/products/' + c.slug + '">' +
      '<div class="cat-photo">' + visual + '</div>' +
      '<div class="cat-card-body">' +
        '<h3>' + esc(L(c.name)) + '</h3>' +
        '<p>' + esc(L(c.tag)) + '</p>' +
      '</div>' +
    '</a>'
  );
}
function appCard(a) {
  const first = productBySlug(a.products[0]);
  return (
    '<a class="card app-card" href="#/application/' + a.slug + '">' +
      '<div class="' + imgWrapClass('card-img', first) + '">' + media(first) + '</div>' +
      '<div class="card-body">' +
        '<div class="card-cat">' + t('apps.cat.' + a.cat) + '</div>' +
        '<h3 class="card-title">' + esc(L(a.title)) + '</h3>' +
      '</div>' +
    '</a>'
  );
}
function newsCard(n) {
  return (
    '<a class="card news-card" href="#/news/' + n.slug + '">' +
      '<div class="card-body">' +
        '<div class="card-cat">' + esc(n.date) + '</div>' +
        '<h3 class="card-title">' + esc(L(n.title)) + '</h3>' +
        '<p class="card-excerpt">' + esc(L(n.excerpt)) + '</p>' +
      '</div>' +
    '</a>'
  );
}
function breadcrumb(items) {
  return '<nav class="crumbs">' + items.map(function (it, i) {
    var last = i === items.length - 1;
    return last ? '<span>' + esc(it.label) + '</span>'
                : '<a href="' + it.href + '">' + esc(it.label) + '</a><span class="sep">/</span>';
  }).join('') + '</nav>';
}

/* ---------- views ---------------------------------------------------------- */
function viewHome() {
  var cats = CATEGORIES.map(categoryCard).join('');
  var featuredSlugs = ['ry', 'wa-standard', 'ega', 'cnc-h1000', 'fba', 'kr-13', 'ta', 'kq-34'];
  var featured = featuredSlugs.map(function (s) { return productCard(productBySlug(s)); }).join('');
  var apps = APPLICATIONS.slice(0, 4).map(appCard).join('');
  var news = NEWS.slice(0, 3).map(newsCard).join('');
  var s5 = ['sort', 'set', 'shine', 'standardise', 'sustain'].map(function (k, i) {
    return '<div class="s5-step"><span class="s5-num">' + (i + 1) + '</span><span>' + t('home.s5.' + k) + '</span></div>';
  }).join('');

  return (
    '<section class="hero">' +
      '<div class="hero-inner container">' +
        '<div class="hero-copy">' +
          '<div class="kicker">' + t('home.hero.kicker') + '</div>' +
          '<h1>' + t('home.hero.title') + '</h1>' +
          '<p>' + t('home.hero.sub') + '</p>' +
          '<div class="hero-actions">' +
            '<a class="btn btn-primary" href="#/products">' + t('cta.browse') + '</a>' +
            '<a class="btn btn-ghost" href="#/contact">' + t('cta.quote') + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-art" aria-hidden="true">' +
          '<div class="hero-grid">' +
            CATEGORIES.slice(0, 6).map(function (c) { return '<div class="hero-tile">' + categoryImage(c.slug) + '</div>'; }).join('') +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section container">' +
      '<div class="section-head"><h2>' + t('home.cat.title') + '</h2><p>' + t('home.cat.sub') + '</p></div>' +
      '<div class="cat-grid">' + cats + '</div>' +
    '</section>' +

    '<section class="section section-alt"><div class="container">' +
      '<div class="section-head"><h2>' + t('home.featured.title') + '</h2><p>' + t('home.featured.sub') + '</p></div>' +
      '<div class="grid grid-4">' + featured + '</div>' +
      '<div class="center"><a class="btn btn-outline" href="#/products">' + t('cta.viewAll') + ' →</a></div>' +
    '</div></section>' +

    '<section class="about-strip"><div class="container about-strip-inner">' +
      '<div><h2>' + t('home.about.title') + '</h2><p>' + t('home.about.body') + '</p>' +
        '<a class="btn btn-primary" href="#/about">' + t('nav.about') + ' →</a></div>' +
      '<div class="stats">' +
        '<div class="stat"><b>50+</b><span>' + t('home.stats.years') + '</span></div>' +
        '<div class="stat"><b>11</b><span>' + t('home.stats.cats') + '</span></div>' +
        '<div class="stat"><b>5+</b><span>' + t('home.stats.markets') + '</span></div>' +
        '<div class="stat"><b>MY</b><span>' + t('home.stats.support') + '</span></div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section container">' +
      '<div class="section-head"><h2>' + t('home.apps.title') + '</h2><p>' + t('home.apps.sub') + '</p></div>' +
      '<div class="grid grid-4">' + apps + '</div>' +
    '</section>' +

    '<section class="s5"><div class="container">' +
      '<div class="section-head"><h2>' + t('home.s5.title') + '</h2><p>' + t('home.s5.body') + '</p></div>' +
      '<div class="s5-row">' + s5 + '</div>' +
    '</div></section>' +

    '<section class="section section-alt"><div class="container">' +
      '<div class="section-head"><h2>' + t('home.news.title') + '</h2></div>' +
      '<div class="grid grid-3">' + news + '</div>' +
    '</div></section>' +

    ctaBand()
  );
}

function ctaBand() {
  return (
    '<section class="cta-band"><div class="container cta-band-inner">' +
      '<div><h2>' + t('home.cta.title') + '</h2><p>' + t('home.cta.body') + '</p></div>' +
      '<a class="btn btn-primary btn-lg" href="#/contact">' + t('cta.quote') + '</a>' +
    '</div></section>'
  );
}

function viewProducts() {
  return (
    '<div class="page container">' +
      breadcrumb([{ label: t('nav.products'), href: '#/products' }]) +
      '<div class="page-head"><h1>' + t('products.title') + '</h1><p>' + t('products.sub') + '</p></div>' +
      '<div class="cat-grid">' + CATEGORIES.map(categoryCard).join('') + '</div>' +
    '</div>'
  );
}

function viewCategory(catSlug, subSlug) {
  var cat = catBySlug(catSlug);
  if (!cat) return viewNotFound();
  var items = productsIn(catSlug, subSlug);
  var filters = '';
  if (cat.subs && cat.subs.length) {
    filters = '<div class="filters">' +
      '<a class="chip ' + (!subSlug ? 'active' : '') + '" href="#/products/' + cat.slug + '">' + t('cat.filter.all') + '</a>' +
      cat.subs.map(function (s) {
        return '<a class="chip ' + (subSlug === s.slug ? 'active' : '') + '" href="#/products/' + cat.slug + '/' + s.slug + '">' + esc(L(s.name)) + '</a>';
      }).join('') +
    '</div>';
  }
  return (
    '<div class="page container">' +
      breadcrumb([{ label: t('nav.products'), href: '#/products' }, { label: L(cat.name), href: '#/products/' + cat.slug }]) +
      '<div class="page-head"><h1>' + esc(L(cat.name)) + '</h1><p>' + esc(L(cat.desc)) + '</p></div>' +
      filters +
      '<div class="count">' + items.length + ' ' + t('cat.count') + '</div>' +
      '<div class="grid grid-4">' + items.map(productCard).join('') + '</div>' +
    '</div>'
  );
}

/* Workbench-only extra sections copied from Tanko: Features, How to Choose, Notes, Downloads. */
function workbenchSections(p) {
  if (p.category !== 'workbench' || !p.seriesId || typeof WB_SERIES === 'undefined' || !WB_SERIES[p.seriesId]) return '';
  var wb = WB_SERIES[p.seriesId];
  var html = '';
  if (wb.features && wb.features.length) {
    html += '<section class="wb-block"><h3 class="pd-h">' + t('product.featuresExact') + '</h3><ul class="wb-features">' +
      wb.features.map(function (f) { return '<li><b>' + esc(f.label) + '</b>' + (f.detail ? ' — ' + esc(f.detail) : '') + '</li>'; }).join('') +
      '</ul>' +
      (wb.featureImages && wb.featureImages.length ? '<div class="wb-gallery">' + wb.featureImages.map(function (fi) {
        return '<figure class="wb-shot"><img src="assets/products/' + fi.img + '" alt="' + esc(fi.label) + '"><figcaption>' + esc(fi.label) + '</figcaption></figure>';
      }).join('') + '</div>' : '') +
      '</section>';
  }
  if (wb.dimImages && wb.dimImages.length) {
    html += '<section class="wb-block"><h3 class="pd-h">' + t('product.dimGuide') + '</h3><div class="wb-gallery wb-gallery-dim">' +
      wb.dimImages.map(function (di) {
        return '<figure class="wb-shot"><img src="assets/products/' + di.img + '" alt="' + esc(di.label) + '"><figcaption>' + esc(di.label) + '</figcaption></figure>';
      }).join('') + '</div></section>';
  }
  if (wb.howToChoose && wb.howToChoose.length) {
    html += '<section class="wb-block"><h3 class="pd-h">' + t('product.howToChoose') + '</h3><ol class="wb-steps">' +
      wb.howToChoose.map(function (s) {
        var opts = s.options ? '<div class="wb-opts">' + s.options.map(function (o) {
          return '<div class="wb-opt"><b>' + esc(o.name) + '</b><span>' + esc(o.desc) + '</span>' +
            (o.use ? '<em>' + t('product.recommendedUse') + ': ' + esc(o.use) + '</em>' : '') + '</div>';
        }).join('') + '</div>' : '';
        return '<li><div class="wb-step-title"><span class="sel-no">' + s.no + '</span>' + esc(s.title) + '</div>' +
          (s.detail ? '<div class="wb-step-detail">' + esc(s.detail) + '</div>' : '') + opts + '</li>';
      }).join('') + '</ol></section>';
  }
  if (wb.notes && wb.notes.length) {
    html += '<section class="wb-block"><h3 class="pd-h">' + t('product.notes') + '</h3><ul class="wb-notes">' +
      wb.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></section>';
  }
  if (wb.downloads && wb.downloads.length) {
    html += '<section class="wb-block"><h3 class="pd-h">' + t('product.downloads') + '</h3><div class="wb-downloads">' +
      wb.downloads.map(function (d) { return '<a class="btn btn-outline btn-sm" href="' + esc(d.url) + '" target="_blank" rel="noopener">⬇ ' + esc(d.label) + '</a>'; }).join('') +
      '</div></section>';
  }
  return html;
}

function viewProduct(slug) {
  var p = productBySlug(slug);
  if (!p) return viewNotFound();
  var cat = catBySlug(p.category);
  var isWbSeries = p.category === 'workbench' && p.seriesId && typeof WB_SERIES !== 'undefined' && !!WB_SERIES[p.seriesId];
  var feats = (p.features || []).map(function (f) {
    return '<li>' + esc(L(f)) + '</li>';
  }).join('');

  // Specifications block — standardized. Verified products show a models &
  // dimensions table + structured rows + accessories; others use their spec list.
  var specsBlock;
  if (p.verified) {
    var rows = [];
    if (p.sku && p.sku.length && (!p.variants || p.variants.length <= 1)) rows.push({ k: t('product.code'), v: '<span class="mono">' + esc(p.sku.join(', ')) + '</span>' });
    if (p.material) rows.push({ k: t('product.material'), v: esc(L(p.material)) });
    if (p.load) rows.push({ k: t('product.load'), v: esc(L(p.load)) });
    if (p.included) rows.push({ k: t('product.included'), v: esc(L(p.included)) });
    if (p.origin) rows.push({ k: t('product.origin'), v: esc(p.origin) });
    var kvHtml = rows.map(function (r) { return '<tr><th>' + r.k + '</th><td>' + r.v + '</td></tr>'; }).join('');
    var variantsHtml;
    if (p.dimTable) {
      // Full verbatim dimension table (workbench) — Model | Top | Dimensions | Material | Panel Set
      variantsHtml = '<h3 class="pd-h">' + t('product.variants') + '</h3>' +
        '<div class="table-wrap"><table class="spec-table dim-table"><thead><tr>' +
        p.dimTable.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        p.dimTable.rows.map(function (r) {
          return '<tr>' + r.map(function (cell, i) { return '<td' + (i === 0 ? ' class="mono"' : '') + '>' + esc(cell) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>';
    } else if (p.variants && p.variants.length) {
      variantsHtml = '<h3 class="pd-h">' + t('product.variants') + '</h3>' +
        '<table class="spec-table variants-table"><thead><tr><th>' + t('product.code') + '</th><th>' + t('product.dimensions') + '</th></tr></thead><tbody>' +
        p.variants.map(function (vr) { return '<tr><td class="mono">' + esc(vr.code) + '</td><td>' + esc(vr.dim) + '</td></tr>'; }).join('') +
        '</tbody></table>';
    } else { variantsHtml = ''; }
    var accHtml = (p.accessories && p.accessories.length) ?
      ('<h3 class="pd-h">' + t('product.accessories') + '</h3><ul class="acc-list">' +
       p.accessories.map(function (a) {
         return '<li>' + (a.code && a.code !== '—' ? '<b class="mono">' + esc(a.code) + '</b> — ' : '') + esc(L(a.name)) +
                (a.dim ? ' <span class="acc-dim">(' + esc(a.dim) + ')</span>' : '') + '</li>';
       }).join('') + '</ul>') : '';
    specsBlock = variantsHtml +
      '<h3 class="pd-h">' + t('product.specs') + '</h3><table class="spec-table"><tbody>' + kvHtml + '</tbody></table>' +
      accHtml;
  } else {
    var specs = p.specs.map(function (s) {
      return '<tr><th>' + esc(L(s.k)) + '</th><td>' + esc(s.v) + '</td></tr>';
    }).join('');
    specsBlock = '<h3 class="pd-h">' + t('product.specs') + '</h3><table class="spec-table"><tbody>' + specs + '</tbody></table>';
  }

  // Variant selector: all sibling variants in the same series, numbered & selectable.
  var siblings = p.seriesId ? PRODUCTS.filter(function (x) { return x.seriesId === p.seriesId; })
    .sort(function (a, b) { return (a.variantNo || 0) - (b.variantNo || 0); }) : [];
  var variantSelector = siblings.length > 1 ?
    ('<div class="selector"><div class="sel-label">' + t('product.chooseVariant') + '</div><div class="sel-opts">' +
     siblings.map(function (s) {
       return '<a class="sel-opt' + (s.slug === p.slug ? ' active' : '') + '" href="#/product/' + s.slug + '">' +
         '<span class="sel-no">' + (s.variantNo || '') + '</span><span>' + esc(L(s.variantName)) + '</span></a>';
     }).join('') + '</div></div>') : '';
  // Interactive colour selector (client-side highlight; no per-colour images published by Tanko).
  var colourSelector = (p.colours && p.colours.length) ?
    ('<div class="selector"><div class="sel-label">' + t('product.colour') + ': <b id="pd-colour-name">' + esc(L(p.colours[0].name)) + '</b></div>' +
     '<div class="sel-swatches">' +
     p.colours.map(function (c, i) {
       return '<button type="button" class="pd-colour-btn' + (i === 0 ? ' selected' : '') + '" data-name="' + esc(L(c.name)) + '" title="' + esc(L(c.name)) + '"><i style="background:' + c.hex + '"></i></button>';
     }).join('') + '</div>' +
     (p.colourNote ? '<div class="colour-note">' + esc(L(p.colourNote)) + '</div>' : '') + '</div>') : '';

  var related = productsIn(p.category).filter(function (x) { return x.slug !== p.slug; }).slice(0, 4);
  var relatedHtml = related.length ? (
    '<section class="section container"><div class="section-head"><h2>' + t('product.related') + '</h2></div>' +
    '<div class="grid grid-4">' + related.map(productCard).join('') + '</div></section>') : '';

  return (
    '<div class="page container">' +
      breadcrumb([
        { label: t('nav.products'), href: '#/products' },
        { label: L(cat.name), href: '#/products/' + cat.slug },
        { label: L(p.series), href: '#/product/' + p.slug }
      ]) +
      '<div class="product-detail">' +
        '<div class="' + imgWrapClass('pd-gallery', p) + '">' + media(p, true) + '</div>' +
        '<div class="pd-info">' +
          '<div class="card-cat">' + esc(L(cat.name)) + '</div>' +
          '<h1>' + esc(L(p.series)) + '</h1>' +
          '<div class="pd-model">' + t('product.model') + ' <b>' + esc(p.model) + '</b>' +
            (p.verified ? ' <span class="verified-badge" title="' + t('product.verifiedTip') + '">✓ ' + t('product.verified') + '</span>' : '') + '</div>' +
          '<p class="pd-desc">' + esc(L(p.desc)) + '</p>' +
          variantSelector + colourSelector +
          (feats && !isWbSeries ? '<h3 class="pd-h">' + t('product.features') + '</h3><ul class="pd-feats">' + feats + '</ul>' : '') +
          '<div class="pd-actions">' +
            '<a class="btn btn-primary" href="#/contact?product=' + encodeURIComponent(p.model) + '">' + t('cta.enquire') + '</a>' +
            '<a class="btn btn-outline" href="#/download">' + t('cta.download') + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="pd-specs">' + specsBlock + '</div>' +
      workbenchSections(p) +
    '</div>' +
    relatedHtml
  );
}

function viewApplications(catFilter) {
  var cats = ['media', 'industry', 'campus', 'others'];
  var items = APPLICATIONS.filter(function (a) { return !catFilter || a.cat === catFilter; });
  var filters = '<div class="filters">' +
    '<a class="chip ' + (!catFilter ? 'active' : '') + '" href="#/applications">' + t('apps.filter.all') + '</a>' +
    cats.map(function (c) {
      return '<a class="chip ' + (catFilter === c ? 'active' : '') + '" href="#/applications/' + c + '">' + t('apps.cat.' + c) + '</a>';
    }).join('') + '</div>';
  return (
    '<div class="page container">' +
      breadcrumb([{ label: t('nav.applications'), href: '#/applications' }]) +
      '<div class="page-head"><h1>' + t('apps.title') + '</h1><p>' + t('apps.sub') + '</p></div>' +
      filters +
      '<div class="grid grid-3">' + items.map(appCard).join('') + '</div>' +
    '</div>'
  );
}

function viewApplication(slug) {
  var a = APPLICATIONS.find(function (x) { return x.slug === slug; });
  if (!a) return viewNotFound();
  var used = a.products.map(function (s) { return productBySlug(s); }).filter(Boolean);
  return (
    '<div class="page container">' +
      breadcrumb([{ label: t('nav.applications'), href: '#/applications' }, { label: L(a.title), href: '#/application/' + a.slug }]) +
      '<div class="page-head"><div class="card-cat">' + t('apps.cat.' + a.cat) + '</div><h1>' + esc(L(a.title)) + '</h1></div>' +
      '<div class="app-detail">' +
        '<div class="' + imgWrapClass('pd-gallery', used[0]) + '">' + media(used[0], true) + '</div>' +
        '<div class="pd-info">' +
          '<div class="meta-row"><span>' + t('apps.client') + '</span><b>' + esc(a.client) + '</b></div>' +
          '<div class="meta-row"><span>' + t('apps.location') + '</span><b>' + esc(L(a.location)) + '</b></div>' +
          '<p class="pd-desc">' + esc(L(a.body)) + '</p>' +
        '</div>' +
      '</div>' +
      (used.length ? '<h3 class="pd-h">' + t('apps.products') + '</h3><div class="grid grid-4">' + used.map(productCard).join('') + '</div>' : '') +
    '</div>'
  );
}

function viewNews() {
  return (
    '<div class="page container">' +
      breadcrumb([{ label: t('nav.news'), href: '#/news' }]) +
      '<div class="page-head"><h1>' + t('news.title') + '</h1><p>' + t('news.sub') + '</p></div>' +
      '<div class="grid grid-3">' + NEWS.map(newsCard).join('') + '</div>' +
    '</div>'
  );
}
function viewNewsItem(slug) {
  var n = NEWS.find(function (x) { return x.slug === slug; });
  if (!n) return viewNotFound();
  return (
    '<div class="page container narrow">' +
      breadcrumb([{ label: t('nav.news'), href: '#/news' }, { label: L(n.title), href: '#/news/' + n.slug }]) +
      '<div class="card-cat">' + esc(n.date) + '</div>' +
      '<h1 class="article-title">' + esc(L(n.title)) + '</h1>' +
      '<p class="article-body">' + esc(L(n.body)) + '</p>' +
    '</div>'
  );
}

function viewDownload() {
  function row(d) {
    return '<div class="dl-row"><div class="dl-icon">PDF</div>' +
      '<div class="dl-meta"><b>' + esc(L(d.title)) + '</b><span>' + esc(d.size) + ' · ' + esc(d.lang) + '</span></div>' +
      '<a class="btn btn-outline btn-sm" href="#/download" onclick="return false">' + t('cta.download') + '</a></div>';
  }
  var catalogs = DOWNLOADS.filter(function (d) { return d.type === 'catalog'; }).map(row).join('');
  var assembly = DOWNLOADS.filter(function (d) { return d.type === 'assembly'; }).map(row).join('');
  return (
    '<div class="page container narrow">' +
      breadcrumb([{ label: t('nav.download'), href: '#/download' }]) +
      '<div class="page-head"><h1>' + t('download.title') + '</h1><p>' + t('download.sub') + '</p></div>' +
      '<h3 class="pd-h">' + t('download.catalogs') + '</h3><div class="dl-list">' + catalogs + '</div>' +
      '<h3 class="pd-h">' + t('download.assembly') + '</h3><div class="dl-list">' + assembly + '</div>' +
    '</div>'
  );
}

function viewAbout() {
  return (
    '<div class="page container narrow">' +
      breadcrumb([{ label: t('nav.about'), href: '#/about' }]) +
      '<div class="page-head"><h1>' + t('about.title') + '</h1><p class="lead">' + t('about.lead') + '</p></div>' +
      '<div class="prose">' +
        '<h2>' + t('about.story.title') + '</h2><p>' + t('about.story.body') + '</p>' +
        '<h2>' + t('about.philosophy.title') + '</h2><p>' + t('about.philosophy.body') + '</p>' +
        '<h2>' + t('about.s5.title') + '</h2><p>' + t('about.s5.body') + '</p>' +
        '<h2>' + t('about.network.title') + '</h2><p>' + t('about.network.body') + '</p>' +
        '<ul>' +
          '<li>' + esc(L({ en: 'Taiwan (HQ) — Taipei · Taichung · Kaohsiung', zh: '台灣（總部）— 台北 · 台中 · 高雄' })) + '</li>' +
          '<li>Shanghai, China</li>' +
          '<li>Hong Kong / Macau</li>' +
          '<li><b>' + esc(L(COMPANY.name)) + '</b> — ' + esc(L(COMPANY.legal)) + '</li>' +
          '<li>Thailand</li>' +
        '</ul>' +
      '</div>' +
    '</div>'
  );
}

function viewContact(prefillProduct) {
  return (
    '<div class="page container">' +
      breadcrumb([{ label: t('nav.contact'), href: '#/contact' }]) +
      '<div class="page-head"><h1>' + t('contact.title') + '</h1><p>' + t('contact.sub') + '</p></div>' +
      '<div class="contact-grid">' +
        '<form id="enquiry" class="enquiry" novalidate>' +
          '<div class="frow"><label>' + t('contact.form.name') + ' *<input name="name" required></label>' +
            '<label>' + t('contact.form.company') + '<input name="company"></label></div>' +
          '<div class="frow"><label>' + t('contact.form.email') + ' *<input name="email" type="email" required></label>' +
            '<label>' + t('contact.form.phone') + '<input name="phone"></label></div>' +
          '<div class="frow"><label>' + t('contact.form.product') + '<input name="product" value="' + esc(prefillProduct || '') + '"></label>' +
            '<label>' + t('contact.form.qty') + '<input name="qty" type="number" min="1"></label></div>' +
          '<label>' + t('contact.form.message') + '<textarea name="message" rows="4"></textarea></label>' +
          '<label class="consent"><input type="checkbox" name="consent" required> <span>' + t('contact.form.consent') + '</span></label>' +
          '<div class="form-msg" id="form-msg"></div>' +
          '<button class="btn btn-primary btn-lg" type="submit">' + t('contact.form.submit') + '</button>' +
        '</form>' +
        '<aside class="contact-info">' +
          '<h3>' + t('contact.info.title') + '</h3>' +
          '<div class="ci-row"><span>' + t('contact.info.address') + '</span><b>' + esc(L(COMPANY.address)) + '</b></div>' +
          '<div class="ci-row"><span>' + t('contact.info.phone') + '</span><b><a href="tel:' + esc(COMPANY.phone.replace(/\s/g, '')) + '">' + esc(COMPANY.phone) + '</a></b></div>' +
          '<div class="ci-row"><span>' + t('contact.info.whatsapp') + '</span><b><a href="https://wa.me/' + esc(COMPANY.whatsapp) + '" target="_blank" rel="noopener">+' + esc(COMPANY.whatsapp) + '</a></b></div>' +
          '<div class="ci-row"><span>' + t('contact.info.email') + '</span><b><a href="mailto:' + esc(COMPANY.email) + '">' + esc(COMPANY.email) + '</a></b></div>' +
          '<div class="ci-row"><span>' + t('contact.info.hours') + '</span><b>' + esc(L(COMPANY.hours)) + '</b></div>' +
          '<a class="btn btn-outline btn-sm maps-btn" href="' + esc(COMPANY.maps) + '" target="_blank" rel="noopener">📍 ' + t('contact.info.maps') + '</a>' +
          '<p class="note">' + t('contact.note') + '</p>' +
        '</aside>' +
      '</div>' +
    '</div>'
  );
}

function viewNotFound() {
  return '<div class="page container narrow center"><div class="page-head"><h1>' + t('notfound.title') + '</h1><p>' + t('notfound.body') + '</p></div><a class="btn btn-primary" href="#/">Home</a></div>';
}

/* ---------- header / footer ------------------------------------------------ */
function megaMenu() {
  return '<div class="mega">' + CATEGORIES.map(function (c) {
    var subs = (c.subs && c.subs.length)
      ? c.subs.map(function (s) { return '<a href="#/products/' + c.slug + '/' + s.slug + '">' + esc(L(s.name)) + '</a>'; }).join('')
      : '';
    return '<div class="mega-col">' +
      '<a class="mega-head" href="#/products/' + c.slug + '">' + esc(L(c.name)) + '</a>' +
      (subs ? '<div class="mega-subs">' + subs + '</div>' : '') +
      '</div>';
  }).join('') + '</div>';
}

function renderHeader() {
  var lang = getLang();
  el('header').innerHTML =
    '<div class="topbar"><div class="container topbar-inner">' +
      '<span>' + t('top.since') + '</span>' +
      '<div class="topbar-right">' +
        '<a href="mailto:' + esc(COMPANY.email) + '">' + esc(COMPANY.email) + '</a>' +
        '<span class="langsw">' +
          '<button class="' + (lang === 'en' ? 'on' : '') + '" data-lang="en">EN</button>' +
          '<button class="' + (lang === 'zh' ? 'on' : '') + '" data-lang="zh">中文</button>' +
        '</span>' +
      '</div>' +
    '</div></div>' +
    '<div class="navbar"><div class="container navbar-inner">' +
      '<a class="logo" href="#/"><span class="logo-mark">TANKO</span><span class="logo-sub">' + t('brand.suffix') + '</span></a>' +
      '<nav class="mainnav">' +
        '<a href="#/">' + t('nav.home') + '</a>' +
        '<div class="has-mega"><a href="#/products">' + t('nav.products') + ' ▾</a>' + megaMenu() + '</div>' +
        '<a href="#/applications">' + t('nav.applications') + '</a>' +
        '<a href="#/news">' + t('nav.news') + '</a>' +
        '<a href="#/download">' + t('nav.download') + '</a>' +
        '<a href="#/about">' + t('nav.about') + '</a>' +
        '<a href="#/contact">' + t('nav.contact') + '</a>' +
      '</nav>' +
      '<a class="btn btn-primary btn-sm quote-btn" href="#/contact">' + t('cta.quote') + '</a>' +
    '</div></div>' +
    // Narrow-screen nav: an always-visible horizontal scroll strip (no hidden hamburger).
    '<nav class="mobilenav"><div class="mobilenav-inner">' +
      '<a href="#/">' + t('nav.home') + '</a>' +
      '<a href="#/products">' + t('nav.products') + '</a>' +
      '<a href="#/applications">' + t('nav.applications') + '</a>' +
      '<a href="#/news">' + t('nav.news') + '</a>' +
      '<a href="#/download">' + t('nav.download') + '</a>' +
      '<a href="#/about">' + t('nav.about') + '</a>' +
      '<a href="#/contact">' + t('nav.contact') + '</a>' +
    '</div></nav>';

  // wire language buttons
  Array.prototype.forEach.call(document.querySelectorAll('.langsw button'), function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); render(); });
  });
}

function renderFooter() {
  var prodLinks = CATEGORIES.slice(0, 8).map(function (c) {
    return '<a href="#/products/' + c.slug + '">' + esc(L(c.name)) + '</a>';
  }).join('');
  el('footer').innerHTML =
    '<div class="container footer-inner">' +
      '<div class="fcol fcol-brand">' +
        '<span class="logo-mark">TANKO</span><span class="logo-sub">' + t('brand.suffix') + '</span>' +
        '<p>' + t('footer.tagline') + '</p>' +
        '<p class="small">' + t('top.since') + '</p>' +
      '</div>' +
      '<div class="fcol"><h4>' + t('footer.products') + '</h4>' + prodLinks + '</div>' +
      '<div class="fcol"><h4>' + t('footer.company') + '</h4>' +
        '<a href="#/about">' + t('nav.about') + '</a><a href="#/applications">' + t('nav.applications') + '</a>' +
        '<a href="#/news">' + t('nav.news') + '</a><a href="#/download">' + t('nav.download') + '</a></div>' +
      '<div class="fcol"><h4>' + t('footer.contact') + '</h4>' +
        '<a href="mailto:' + esc(COMPANY.email) + '">' + esc(COMPANY.email) + '</a>' +
        '<a href="tel:' + esc(COMPANY.phone.replace(/\s/g, '')) + '">' + esc(COMPANY.phone) + '</a>' +
        '<span class="small">' + esc(L(COMPANY.address)) + '</span>' +
        '<span class="small">' + esc(L(COMPANY.legal)) + '</span></div>' +
    '</div>' +
    '<div class="container footer-bottom">' +
      '<span>© ' + new Date().getFullYear() + ' ' + esc(L(COMPANY.name)) + '. ' + t('footer.rights') + '</span>' +
      '<span class="small">' + t('footer.disclaimer') + '</span>' +
    '</div>';
}

function renderFloat() {
  el('float').innerHTML =
    '<a class="wa" href="https://wa.me/' + esc(COMPANY.whatsapp) + '" target="_blank" rel="noopener" aria-label="' + t('whatsapp.label') + '">' +
      '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M.06 24l1.68-6.13A11.87 11.87 0 0 1 .16 11.9C.16 5.34 5.5 0 12.06 0a11.8 11.8 0 0 1 8.4 3.49 11.8 11.8 0 0 1 3.48 8.4c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.7-1.45L.06 24zM6.6 20.13c1.66.98 3.25 1.57 5.45 1.57 5.45 0 9.9-4.43 9.9-9.88 0-5.46-4.43-9.9-9.89-9.9C6.6 1.92 2.17 6.35 2.17 11.8c0 2.3.67 4.02 1.8 5.82l-.99 3.62 3.62-.95zm11.36-5.29c-.07-.12-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42z"/></svg>' +
    '</a>';
}

/* ---------- language UI state --------------------------------------------- */
function applyLangUI() {
  document.documentElement.setAttribute('lang', getLang() === 'zh' ? 'zh-Hant' : 'en');
  document.title = (getLang() === 'zh' ? 'Tanko 馬來西亞 — 儲存解決方案' : 'Tanko Malaysia — Storage Solutions');
}

/* ---------- router --------------------------------------------------------- */
function parseHash() {
  var raw = location.hash.replace(/^#/, '') || '/';
  var qIndex = raw.indexOf('?');
  var query = {};
  if (qIndex >= 0) {
    raw.slice(qIndex + 1).split('&').forEach(function (kv) {
      var pair = kv.split('='); query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    });
    raw = raw.slice(0, qIndex);
  }
  return { parts: raw.split('/').filter(Boolean), query: query };
}

function router() {
  var r = parseHash();
  var p = r.parts;
  var html;
  switch (p[0]) {
    case undefined: html = viewHome(); break;
    case 'products':
      html = p[1] ? viewCategory(p[1], p[2]) : viewProducts(); break;
    case 'product': html = viewProduct(p[1]); break;
    case 'applications': html = viewApplications(p[1]); break;
    case 'application': html = viewApplication(p[1]); break;
    case 'news': html = p[1] ? viewNewsItem(p[1]) : viewNews(); break;
    case 'download': html = viewDownload(); break;
    case 'about': html = viewAbout(); break;
    case 'contact': html = viewContact(r.query.product); break;
    default: html = viewNotFound();
  }
  el('app').innerHTML = html;

  // wire contact form if present
  var form = el('enquiry');
  if (form) form.addEventListener('submit', onEnquirySubmit);
}

function onEnquirySubmit(e) {
  e.preventDefault();
  var f = e.target;
  var msg = el('form-msg');
  if (!f.name.value.trim() || !f.email.value.trim() || !f.consent.checked) {
    msg.className = 'form-msg error';
    msg.textContent = t('contact.form.required');
    return;
  }
  // No backend in this static demo: prepare a mailto and confirm.
  var body =
    'Name: ' + f.name.value + '\nCompany: ' + f.company.value + '\nEmail: ' + f.email.value +
    '\nPhone: ' + f.phone.value + '\nProduct: ' + f.product.value + '\nQty: ' + f.qty.value +
    '\n\n' + f.message.value;
  var mailto = 'mailto:' + COMPANY.email + '?subject=' + encodeURIComponent('Website enquiry — ' + (f.product.value || 'General')) +
    '&body=' + encodeURIComponent(body);
  msg.className = 'form-msg ok';
  msg.innerHTML = t('contact.form.thanks') + ' <a href="' + mailto + '">✉︎ ' + COMPANY.email + '</a>';
  f.reset();
}

/* ---------- boot ----------------------------------------------------------- */
function render() {
  applyLangUI();
  renderHeader();
  renderFooter();
  renderFloat();
  router();
}
window.addEventListener('hashchange', function () {
  applyLangUI(); renderHeader(); router(); window.scrollTo(0, 0);
});
// Interactive colour selection (event delegation — survives re-renders).
document.addEventListener('click', function (e) {
  var btn = e.target.closest ? e.target.closest('.pd-colour-btn') : null;
  if (!btn) return;
  var wrap = btn.parentNode;
  Array.prototype.forEach.call(wrap.querySelectorAll('.pd-colour-btn'), function (b) { b.classList.remove('selected'); });
  btn.classList.add('selected');
  var nameEl = document.getElementById('pd-colour-name');
  if (nameEl) nameEl.textContent = btn.getAttribute('data-name');
});
document.addEventListener('DOMContentLoaded', render);
