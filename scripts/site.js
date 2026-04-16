const STORAGE_KEY = "emus-language";
const SUPPORTED_LANGUAGES = ["en", "fr"];
const FALLBACK_LANGUAGE = "en";

const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
const dictionaryNode = document.getElementById("i18n-dictionary");
const languageToggle = document.querySelector("[data-language-toggle]");

let currentLanguage = FALLBACK_LANGUAGE;
let dictionary = {};

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open");
  });
}

if (dictionaryNode) {
  try {
    dictionary = JSON.parse(dictionaryNode.textContent || "{}");
  } catch (_error) {
    dictionary = {};
  }
}

function getNestedValue(source, key) {
  return key.split(".").reduce((value, part) => {
    if (value && typeof value === "object" && part in value) {
      return value[part];
    }
    return undefined;
  }, source);
}

function getTranslation(language, key) {
  const bundle = dictionary[language] || dictionary[FALLBACK_LANGUAGE] || {};
  const value = getNestedValue(bundle, key);
  if (typeof value === "string") {
    return value;
  }
  const fallbackBundle = dictionary[FALLBACK_LANGUAGE] || {};
  const fallbackValue = getNestedValue(fallbackBundle, key);
  return typeof fallbackValue === "string" ? fallbackValue : "";
}

function translateNodeText(node, value) {
  if (node.dataset.i18nHtml === "true") {
    node.innerHTML = value;
    return;
  }
  node.textContent = value;
}

function applyDictionaryTranslations(language) {
  const translatableNodes = document.querySelectorAll("[data-i18n-key]");
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18nKey;
    if (!key) {
      return;
    }

    const value = getTranslation(language, key);
    if (!value) {
      return;
    }

    const attrs = (node.dataset.i18nAttr || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    attrs.forEach((attr) => {
      node.setAttribute(attr, value);
    });

    const attrOnly = node.dataset.i18nAttrOnly === "true";
    if (!attrOnly) {
      translateNodeText(node, value);
    }
  });
}

function applyInlineTranslations(language) {
  const inlineNodes = document.querySelectorAll("[data-i18n]");
  inlineNodes.forEach((node) => {
    const value = language === "fr" ? node.dataset.i18nFr : node.dataset.i18nEn;
    if (typeof value === "string") {
      translateNodeText(node, value);
    }
  });
}

function updateLanguageButton(language) {
  if (!languageToggle) {
    return;
  }

  const targetLanguage = language === "en" ? "fr" : "en";
  const labelKey = targetLanguage === "fr" ? "site.language.switch_to_fr" : "site.language.switch_to_en";
  const label = getTranslation(language, labelKey);

  languageToggle.textContent = targetLanguage.toUpperCase();
  languageToggle.setAttribute("aria-label", label || "Switch language");
}

function setLanguage(language, persist = true) {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    return;
  }

  currentLanguage = language;
  document.documentElement.setAttribute("lang", language);
  document.body.setAttribute("data-language", language);

  applyDictionaryTranslations(language);
  applyInlineTranslations(language);
  updateLanguageButton(language);

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
      // Ignore write errors in privacy-restricted contexts.
    }
  }

  window.dispatchEvent(
    new CustomEvent("emus:language-change", {
      detail: { language }
    })
  );
}

function getInitialLanguage() {
  try {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (_error) {
    // Ignore read errors in privacy-restricted contexts.
  }
  return FALLBACK_LANGUAGE;
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "fr" : "en";
    setLanguage(nextLanguage);
  });
}

setLanguage(getInitialLanguage(), false);
