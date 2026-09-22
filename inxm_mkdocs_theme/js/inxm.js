/* INXM MkDocs theme — progressive enhancements.
   Everything here is optional; the site works without JavaScript. */
(function () {
  "use strict";
  var doc = document;
  var root = doc.documentElement;
  var body = doc.body;

  /* ---------- Colour scheme toggle ---------- */
  function currentScheme() {
    var forced = root.getAttribute("data-theme");
    if (forced === "dark" || forced === "light") return forced;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  doc.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = currentScheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { window.localStorage.setItem("inxm-theme", next); } catch (e) {}
    });
  });

  /* ---------- Mobile navigation drawer ---------- */
  var navToggle = doc.querySelector("[data-nav-toggle]");
  var scrim = doc.querySelector("[data-nav-close]");
  function setNav(open) {
    body.classList.toggle("nav-open", open);
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    }
    if (scrim) scrim.hidden = !open;
  }
  if (navToggle) navToggle.addEventListener("click", function () { setNav(!body.classList.contains("nav-open")); });
  if (scrim) scrim.addEventListener("click", function () { setNav(false); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

  /* Keep the active sidebar link in view on load. */
  var activeLink = doc.querySelector(".nav__item.is-active > .nav__link");
  var sidebarInner = doc.querySelector(".sidebar__inner");
  if (activeLink && sidebarInner) {
    var top = activeLink.getBoundingClientRect().top - sidebarInner.getBoundingClientRect().top;
    if (top > sidebarInner.clientHeight * 0.6) sidebarInner.scrollTop = top - sidebarInner.clientHeight / 2;
  }

  /* ---------- Search: show/hide inline results, "/" shortcut ---------- */
  var searchWrap = doc.querySelector("[data-search]");
  var searchInput = doc.getElementById("mkdocs-search-query");
  var searchResults = doc.getElementById("mkdocs-search-results");
  if (searchWrap && searchInput && searchResults) {
    var sync = function () {
      var has = searchInput.value.trim().length > 0 && searchResults.childNodes.length > 0;
      searchResults.hidden = !has || doc.activeElement !== searchInput && !searchWrap.matches(":hover");
    };
    new MutationObserver(sync).observe(searchResults, { childList: true });
    /* MkDocs' search script listens to keyup only; also run it on input
       events so paste, autofill and virtual keyboards trigger a search. */
    searchInput.addEventListener("input", function () {
      if (typeof window.doSearch === "function") window.doSearch();
      sync();
    });
    searchInput.addEventListener("focus", sync);
    doc.addEventListener("click", function (e) { if (!searchWrap.contains(e.target)) searchResults.hidden = true; });
    searchInput.addEventListener("keydown", function (e) { if (e.key === "Escape") { searchInput.blur(); searchResults.hidden = true; } });
    var icon = searchWrap.querySelector(".search__icon");
    if (icon) icon.addEventListener("click", function () { searchInput.focus(); });
  }
  if (searchInput) {
    doc.addEventListener("keydown", function (e) {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    });
  }

  /* ---------- Copy buttons on code blocks ---------- */
  if (navigator.clipboard) {
    doc.querySelectorAll(".md pre").forEach(function (pre) {
      if (pre.closest(".linenos")) return;
      var code = pre.querySelector("code") || pre;
      var btn = doc.createElement("button");
      btn.type = "button";
      btn.className = "code-copy";
      btn.textContent = "Copy";
      btn.setAttribute("aria-label", "Copy code to clipboard");
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(code.innerText.replace(/\n$/, "")).then(function () {
          btn.textContent = "Copied";
          btn.classList.add("is-done");
          setTimeout(function () { btn.textContent = "Copy"; btn.classList.remove("is-done"); }, 1600);
        });
      });
      pre.appendChild(btn);
    });
  }

  /* ---------- Table of contents scroll spy ---------- */
  var tocLinks = Array.prototype.slice.call(doc.querySelectorAll("[data-toc] .toc__link"));
  if (tocLinks.length) {
    var byId = {};
    var headings = [];
    tocLinks.forEach(function (a) {
      var id = decodeURIComponent(a.getAttribute("href").replace(/^#/, ""));
      var h = doc.getElementById(id);
      if (h) { byId[id] = a; headings.push(h); }
    });
    var current = null;
    var setActive = function (id) {
      if (id === current) return;
      current = id;
      tocLinks.forEach(function (a) { a.classList.remove("is-active"); });
      if (byId[id]) byId[id].classList.add("is-active");
    };
    var headerH = parseInt(getComputedStyle(root).getPropertyValue("--header-h"), 10) || 64;
    var spy = function () {
      var line = headerH + Math.min(window.innerHeight * 0.3, 240);
      var pick = headings[0];
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].getBoundingClientRect().top <= line) pick = headings[i]; else break;
      }
      /* At the very bottom, light up the last heading. */
      if (window.innerHeight + window.scrollY >= doc.documentElement.scrollHeight - 2) pick = headings[headings.length - 1];
      if (pick) setActive(pick.id);
    };
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { spy(); ticking = false; });
    }, { passive: true });
    window.addEventListener("resize", spy);
    spy();
  }

  /* ---------- External links in content open in a new tab ---------- */
  doc.querySelectorAll(".md a[href^='http']").forEach(function (a) {
    if (a.host && a.host !== window.location.host) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }
  });
})();
