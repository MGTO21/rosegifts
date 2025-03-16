// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // Removed login button and form functionality
});

// تأثير التمرير على قسم الهيرو
document.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero'); // تحديد قسم الهيرو
    const scrollPosition = window.scrollY; // الحصول على موضع التمرير
    hero.style.opacity = 1 - scrollPosition / 500; // تقليل الشفافية بناءً على التمرير
});

// تأثير التمرير على العناصر
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // الحصول على موضع التمرير
    const elements = document.querySelectorAll('.scroll-effect'); // تحديد العناصر ذات التأثير
    elements.forEach(element => {
        if (scrollPosition > element.offsetTop - window.innerHeight + 100) {
            element.classList.remove('scroll-effect-hidden'); // إظهار العنصر
            element.classList.add('scroll-effect-visible'); // إضافة تأثير الظهور
        } else {
            element.classList.remove('scroll-effect-visible'); // إخفاء العنصر
            element.classList.add('scroll-effect-hidden'); // إضافة تأثير الإخفاء
        }
    });
});

document.querySelector('.lang-toggle').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'ar') {
        document.documentElement.lang = 'en';
        document.querySelector('title').textContent = 'Gift Shop';
        document.querySelector('.hero h1').textContent = 'Welcome to Rose Gift';
        document.querySelector('.hero p').textContent = 'Find the perfect gift for your loved ones';
        document.querySelector('.hero button').textContent = 'Shop Now';
        document.querySelector('a[href="#home"]').textContent = 'Home';
        document.querySelector('a[href="#shop"]').textContent = 'Shop';
        document.querySelector('a[href="#about"]').textContent = 'About';
        document.querySelector('a[href="#contact"]').textContent = 'Contact';
        document.querySelector('.about h2').textContent = 'About Our Shop';
        document.querySelector('.about p').innerHTML = 'Our shop specializes in all kinds of gifts such as <span class="highlight">bouquets</span>, <span class="highlight">boxes</span>, and <span class="highlight">women\'s</span>, <span class="highlight">men\'s</span> and even <span class="highlight">children\'s</span> gifts. We are ready to meet all customer needs, whatever they may be, at the best prices and in the fastest time. We offer luxurious, high-quality gifts.';
        document.querySelector('.service:nth-child(1) h3').textContent = 'Bouquets';
        document.querySelector('.service:nth-child(1) p').textContent = 'A wide range of beautiful bouquets suitable for all occasions.';
        document.querySelector('.service:nth-child(2) h3').textContent = 'Boxes';
        document.querySelector('.service:nth-child(2) p').textContent = 'A variety of luxurious boxes that suit all tastes.';
        document.querySelector('.service:nth-child(3) h3').textContent = 'Women\'s Gifts';
        document.querySelector('.service:nth-child(3) p').textContent = 'Unique and luxurious gifts suitable for all women on various occasions.';
        document.querySelector('.service:nth-child(4) h3').textContent = 'Men\'s Gifts';
        document.querySelector('.service:nth-child(4) p').textContent = 'Elegant and modern gifts suitable for all men on various occasions.';
        document.querySelector('.service:nth-child(5) h3').textContent = 'Children\'s Gifts';
        document.querySelector('.service:nth-child(5) p').textContent = 'A wonderful collection of gifts suitable for children of all ages.';
        document.querySelector('.categories h2').textContent = 'Categories';
        document.querySelector('.category:nth-child(1) h3').textContent = 'Men\'s Gifts';
        document.querySelector('.category:nth-child(2) h3').textContent = 'Women\'s Gifts';
        document.querySelector('.category:nth-child(3) h3').textContent = 'Boxes';
        document.querySelector('.category:nth-child(4) h3').textContent = 'Bouquets';
        document.querySelector('.products h2').textContent = 'Products and Offers';
        document.querySelectorAll('.product').forEach((product, index) => {
            product.querySelector('h3').textContent = `Gift ${index + 1}`;
            product.querySelector('.price').textContent = `${(index + 1) * 100} EGP`;
            product.querySelector('.whatsapp-button').textContent = 'Contact via WhatsApp';
        });
        document.querySelector('.contact h2').textContent = 'Contact Us';
        document.querySelector('.contact-method:nth-child(1) h3').textContent = 'Facebook';
        document.querySelector('.contact-method:nth-child(1) p a').innerHTML = '<i class="fab fa-facebook-f"></i> Follow us on Facebook';
        document.querySelector('.contact-method:nth-child(2) h3').textContent = 'WhatsApp';
        document.querySelector('.contact-method:nth-child(2) p a').innerHTML = '<i class="fab fa-whatsapp"></i> Contact via WhatsApp';
        document.querySelector('.contact-method:nth-child(3) h3').textContent = 'Phone Call';
        document.querySelector('.contact-method:nth-child(3) p a').innerHTML = '<i class="fas fa-phone"></i> Call Us';
        document.querySelector('.contact-method:nth-child(4) h3').textContent = 'Email';
        document.querySelector('.contact-method:nth-child(4) p a').innerHTML = '<i class="fas fa-envelope"></i> Send us an Email';
        document.querySelector('.footer p').textContent = 'All rights reserved &copy; 2023 by Mohamed Mutasim';
        document.querySelector('.lang-toggle').textContent = 'AR';
        document.querySelector('.theme-toggle').textContent = 'Dark Mode';
    } else {
        document.documentElement.lang = 'ar';
        document.querySelector('title').textContent = 'متجر الهدايا';
        document.querySelector('.hero h1').textContent = 'مرحبًا بكم في متجر روز للهدايا';
        document.querySelector('.hero p').textContent = 'اعثر على الهدية المثالية لأحبائك';
        document.querySelector('.hero button').textContent = 'تسوق الآن';
        document.querySelector('a[href="#home"]').textContent = 'الرئيسية';
        document.querySelector('a[href="#shop"]').textContent = 'المتجر';
        document.querySelector('a[href="#about"]').textContent = 'من نحن';
        document.querySelector('a[href="#contact"]').textContent = 'اتصل بنا';
        document.querySelector('.about h2').textContent = 'نبذة عن متجرنا';
        document.querySelector('.about p').innerHTML = 'متجرنا متخصص في جميع أنواع الهدايا مثل <span class="highlight">البوكيهات</span>، <span class="highlight">البوكسات</span>، والهدايا <span class="highlight">النسائية</span>، <span class="highlight">الرجالية</span> وحتى <span class="highlight">الأطفال</span>. نحن مستعدون لتلبية جميع احتياجات العملاء مهما كانت بأفضل الأسعار وبأسرع وقت. نقدم الهدايا الفاخرة ذات الجودة العالية.';
        document.querySelector('.service:nth-child(1) h3').textContent = 'البوكيهات';
        document.querySelector('.service:nth-child(1) p').textContent = 'تشكيلة واسعة من البوكيهات الجميلة والمناسبة لجميع المناسبات.';
        document.querySelector('.service:nth-child(2) h3').textContent = 'البوكسات';
        document.querySelector('.service:nth-child(2) p').textContent = 'مجموعة متنوعة من البوكسات الفاخرة التي تناسب جميع الأذواق.';
        document.querySelector('.service:nth-child(3) h3').textContent = 'الهدايا النسائية';
        document.querySelector('.service:nth-child(3) p').textContent = 'هدايا مميزة وفاخرة تناسب جميع النساء في مختلف المناسبات.';
        document.querySelector('.service:nth-child(4) h3').textContent = 'الهدايا الرجالية';
        document.querySelector('.service:nth-child(4) p').textContent = 'هدايا أنيقة وعصرية تناسب جميع الرجال في مختلف المناسبات.';
        document.querySelector('.service:nth-child(5) h3').textContent = 'هدايا الأطفال';
        document.querySelector('.service:nth-child(5) p').textContent = 'مجموعة رائعة من الهدايا التي تناسب الأطفال من جميع الأعمار.';
        document.querySelector('.categories h2').textContent = 'الأقسام';
        document.querySelector('.category:nth-child(1) h3').textContent = 'الهدايا الرجالية';
        document.querySelector('.category:nth-child(2) h3').textContent = 'الهدايا النسائية';
        document.querySelector('.category:nth-child(3) h3').textContent = 'البوكسات';
        document.querySelector('.category:nth-child(4) h3').textContent = 'البوكيهات';
        document.querySelector('.products h2').textContent = 'المنتجات والعروض';
        document.querySelectorAll('.product').forEach((product, index) => {
            product.querySelector('h3').textContent = `الهديه ${index + 1}`;
            product.querySelector('.price').textContent = `${(index + 1) * 100} جنيه`;
            product.querySelector('.whatsapp-button').textContent = 'تواصل عبر واتساب';
        });
        document.querySelector('.contact h2').textContent = 'تواصل معنا';
        document.querySelector('.contact-method:nth-child(1) h3').textContent = 'فيس بوك';
        document.querySelector('.contact-method:nth-child(1) p a').innerHTML = '<i class="fab fa-facebook-f"></i> تابعنا على فيس بوك';
        document.querySelector('.contact-method:nth-child(2) h3').textContent = 'واتساب';
        document.querySelector('.contact-method:nth-child(2) p a').innerHTML = '<i class="fab fa-whatsapp"></i> تواصل عبر واتساب';
        document.querySelector('.contact-method:nth-child(3) h3').textContent = 'مكالمة هاتفية';
        document.querySelector('.contact-method:nth-child(3) p a').innerHTML = '<i class="fas fa-phone"></i> اتصل بنا';
        document.querySelector('.contact-method:nth-child(4) h3').textContent = 'البريد الإلكتروني';
        document.querySelector('.contact-method:nth-child(4) p a').innerHTML = '<i class="fas fa-envelope"></i> أرسل لنا بريد إلكتروني';
        document.querySelector('.footer p').textContent = 'جميع الحقوق محفوظة &copy; 2023 بواسطة Mohamed Mutasim';
        document.querySelector('.lang-toggle').textContent = 'EN';
        document.querySelector('.theme-toggle').textContent = 'Light Mode';
    }
});

document.querySelector('.theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.querySelector('.theme-toggle').textContent = 'Dark Mode';
    }
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function() {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', function() {
    moveToPrevSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        moveToSlide(index);
    });
});

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
        slide.style.opacity = index === slideIndex ? '1' : '0';
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

function moveToNextSlide() {
    if (slideIndex === totalSlides - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slideIndex === 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex--;
    }
    updateSlidePosition();
}

function moveToSlide(index) {
    slideIndex = index;
    updateSlidePosition();
}

setInterval(moveToNextSlide, 3000); // Automatically move to the next slide every 3 seconds

// Ensure images are loaded smoothly
document.querySelectorAll('.slide-img').forEach(img => {
    img.onload = () => {
        img.classList.add('loaded');
    };
});

// Full-screen image view functionality
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeButton = document.getElementById('closeButton');

document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('click', () => {
        fullscreenImage.src = img.src;
        fullscreenOverlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    fullscreenOverlay.style.display = 'none';
});

fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) {
        fullscreenOverlay.style.display = 'none';
    }
});

updateSlidePosition();
