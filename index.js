import { Drawer } from 'https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js'

const menu = document.getElementById('navDrawer')
const drawer = Drawer.getOrCreateInstance(menu)

menu.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', async e => {
        if (!menu.open) return   // desktop: inline nav, default anchor behavior
        e.preventDefault()
        await drawer.hide()
        document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' })
    })
})

// Highlight the active nav link while scrolling
const sections = document.querySelectorAll('main section[id]')
const links = document.querySelectorAll('.navbar-nav .nav-link')

const setActive = () => {
    let current = 'home'
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id
    })
    links.forEach(l => {
        const active = l.getAttribute('href') === `#${current}`
        l.classList.toggle('active', active)
        active ? l.setAttribute('aria-current', 'page') : l.removeAttribute('aria-current')
    })
}
window.addEventListener('scroll', setActive, { passive: true })
setActive()

// index.js

const TRANSLATIONS = {
    en: {
        'doc.title': 'Danila Kondyrev - Frontend | Fullstack developer',
        'menu.title': 'Menu',
        'nav.home': 'Home',
        'nav.about': 'About me',
        'nav.skills': 'Skills',
        'nav.portfolio': 'Portfolio',
        'nav.contacts': 'Contacts',
        'hero.role': 'Frontend | Fullstack developer',
        'hero.age_suffix': 'years old, Moscow',
        'about.title': 'About me',
        'about.p1': 'Hi, I\'m Danila — Frontend/Fullstack developer from Moscow.<br>I\'m interested in coding and everything connected to it. Especially, cybersecurity.',
        'about.p2': 'I studied on multiple courses on product development<br>in a well-known Russian IT school "MShP".',
        'about.p3': 'Ready to work on advanced projects<br>in a motivated group.',
        'skills.title': 'Skills',
        'skills.subtitle': 'I have the knowledge of these tools',
        'portfolio.title': 'Portfolio',
        'portfolio.item1_title': 'Florist\'s online shop',
        'portfolio.item1_desc': 'Built using <strong>Django framework</strong>',
        'portfolio.item2_title': 'Collage generator website',
        'portfolio.item2_desc': 'Currently being integrated into the site of a large online educational platform <strong>Foxford</strong>',
        'portfolio.item3_title': 'Programming school platform',
        'portfolio.item3_desc': 'Team project, <strong>Lead developer</strong>: me',
        'contacts.title': 'Contacts',
        'contacts.text': 'You can find more about me and my projects here',
        'contacts.find_me': 'Find me on',
        'contacts.or': 'or',
        'footer.copy': '© 2026 Danila Kondyrev. All rights reserved.'
    },
    ru: {
        'doc.title': 'Данила Кондырев — Frontend | Fullstack разработчик',
        'menu.title': 'Меню',
        'nav.home': 'Главная',
        'nav.about': 'Обо мне',
        'nav.skills': 'Навыки',
        'nav.portfolio': 'Портфолио',
        'nav.contacts': 'Контакты',
        'hero.role': 'Frontend | Fullstack разработчик',
        'hero.age_suffix': 'лет, Москва',
        'about.title': 'Обо мне',
        'about.p1': 'Привет, я Данила — Frontend/Fullstack разработчик из Москвы.<br>Я интересуюсь программированием и всем, что с ним связано. Особенно кибербезопасностью.',
        'about.p2': 'Я прошел несколько курсов по разработке продуктов<br>в известной российской IT-школе «МШП».',
        'about.p3': 'Готов работать над сложными проектами<br>в мотивированной команде.',
        'skills.title': 'Навыки',
        'skills.subtitle': 'Я владею следующими инструментами',
        'portfolio.title': 'Портфолио',
        'portfolio.item1_title': 'Интернет-магазин цветов',
        'portfolio.item1_desc': 'Создан на базе <strong>фреймворка Django</strong>',
        'portfolio.item2_title': 'Веб-сайт генератора коллажей',
        'portfolio.item2_desc': 'В настоящее время интегрируется в сайт крупной образовательной платформы <strong>Foxford</strong>',
        'portfolio.item3_title': 'Платформа школы программирования',
        'portfolio.item3_desc': 'Командный проект, <strong>Ведущий разработчик</strong>: я',
        'contacts.title': 'Контакты',
        'contacts.text': 'Здесь вы можете узнать больше обо мне и моих проектах',
        'contacts.find_me': 'Ищите меня в',
        'contacts.or': 'или',
        'footer.copy': '© 2026 Данила Кондырев. Все права защищены.'
    },
    zh: {
        'doc.title': '丹尼拉·孔德列夫 — 前端 | 全栈开发者',
        'menu.title': '菜单',
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.skills': '技能',
        'nav.portfolio': '作品集',
        'nav.contacts': '联系方式',
        'hero.role': '前端 | 全栈开发者',
        'hero.age_suffix': '岁，莫斯科',
        'about.title': '关于我',
        'about.p1': '你好，我是丹尼拉——来自莫斯科的前端/全栈开发者。<br>我对编程及其相关的一切都很感兴趣，尤其是网络安全。',
        'about.p2': '我在俄罗斯知名IT学校“MShP”<br>参加了多个产品开发课程。',
        'about.p3': '准备好在充满活力的团队中<br>参与高级项目。',
        'skills.title': '技能',
        'skills.subtitle': '我掌握以下工具',
        'portfolio.title': '作品集',
        'portfolio.item1_title': '花店在线商城',
        'portfolio.item1_desc': '基于 <strong>Django 框架</strong>构建',
        'portfolio.item2_title': '拼贴画生成器网站',
        'portfolio.item2_desc': '目前正在集成到大型在线教育平台 <strong>Foxford</strong> 的网站中',
        'portfolio.item3_title': '编程学校平台',
        'portfolio.item3_desc': '团队项目，<strong>首席开发者</strong>：本人',
        'contacts.title': '联系方式',
        'contacts.text': '您可以在这里找到更多关于我和我的项目的信息',
        'contacts.find_me': '在以下平台找到我',
        'contacts.or': '或',
        'footer.copy': '© 2026 丹尼拉·孔德列夫。保留所有权利。'
    }
};

const LANG_KEY = 'danila-portfolio-lang';
const langButtons = document.querySelectorAll('.lang-btn');

function applyLanguage(lang, animate = true) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Update HTML lang attribute and page title
    document.documentElement.lang = lang;
    document.title = dict['doc.title'];

    // Update all text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key];
    });

    // Update button states
    langButtons.forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    // Persist preference
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { }

    // Trigger subtle fade animation
    if (animate) {
        document.body.classList.remove('lang-fade');
        void document.body.offsetWidth;
        document.body.classList.add('lang-fade');
        setTimeout(() => document.body.classList.remove('lang-fade'), 350);
    }
}

// Initialize language switchers
langButtons.forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem(LANG_KEY) || 'en';
applyLanguage(savedLang, false);

const birthYear = 2009;
document.getElementById('age').textContent = new Date().getFullYear() - birthYear;