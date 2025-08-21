// إضافة نجوم متلألئة عشوائية
function createTwinklingStars() {
    const container = document.querySelector('.stars-container');
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'twinkling-star';
        
        // موقع عشوائي
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // حجم عشوائي
        const size = Math.random() * 3 + 1;
        
        // تأخير عشوائي للتلألؤ
        const delay = Math.random() * 3;
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = delay + 's';
        
        container.appendChild(star);
    }
}

// إضافة نجوم ساقطة
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.style.position = 'absolute';
    shootingStar.style.width = '2px';
    shootingStar.style.height = '2px';
    shootingStar.style.background = '#fff';
    shootingStar.style.borderRadius = '50%';
    shootingStar.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff';
    
    // موقع البداية العشوائي
    const startX = Math.random() * window.innerWidth;
    const startY = -10;
    
    shootingStar.style.left = startX + 'px';
    shootingStar.style.top = startY + 'px';
    
    document.querySelector('.stars-container').appendChild(shootingStar);
    
    // تحريك النجم الساقط
    const duration = Math.random() * 3000 + 2000; // 2-5 ثواني
    const endX = startX + (Math.random() * 200 - 100);
    const endY = window.innerHeight + 10;
    
    shootingStar.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => {
        shootingStar.remove();
    };
}

// تأثير تفاعلي عند تحريك الماوس
function addMouseEffect() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // إنشاء نجمة صغيرة عند موقع الماوس
        const mouseStar = document.createElement('div');
        mouseStar.style.position = 'absolute';
        mouseStar.style.left = mouseX + 'px';
        mouseStar.style.top = mouseY + 'px';
        mouseStar.style.width = '3px';
        mouseStar.style.height = '3px';
        mouseStar.style.background = '#fff';
        mouseStar.style.borderRadius = '50%';
        mouseStar.style.pointerEvents = 'none';
        mouseStar.style.zIndex = '10';
        
        document.body.appendChild(mouseStar);
        
        // إزالة النجمة بعد فترة قصيرة
        setTimeout(() => {
            mouseStar.style.transition = 'opacity 1s';
            mouseStar.style.opacity = '0';
            setTimeout(() => {
                if (mouseStar.parentNode) {
                    mouseStar.remove();
                }
            }, 1000);
        }, 100);
    });
}

// إنشاء نجوم واقعية متنوعة
function createRealisticStars() {
    const container = document.querySelector('.stars-container');
    
    // نجوم لامعة كبيرة
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.className = 'bright-star';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 6 + 4; // 4-10px
        const delay = Math.random() * 3;
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = delay + 's';
        
        container.appendChild(star);
    }
    
    // نجوم الكوكبات
    for (let i = 0; i < 25; i++) {
        const star = document.createElement('div');
        star.className = 'constellation-star';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 4 + 2; // 2-6px
        const delay = Math.random() * 5;
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = delay + 's';
        
        container.appendChild(star);
    }
    
    // نجوم ملونة (عمالقة حمراء، نجوم زرقاء، نجوم صفراء)
    const coloredStarTypes = ['red-giant', 'blue-star', 'yellow-star'];
    
    for (let i = 0; i < 12; i++) {
        const star = document.createElement('div');
        const starType = coloredStarTypes[Math.floor(Math.random() * coloredStarTypes.length)];
        star.className = `bright-star ${starType}`;
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 8 + 3; // 3-11px
        const delay = Math.random() * 7;
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = delay + 's';
        
        container.appendChild(star);
    }
}

// إنشاء نجوم ساقطة واقعية
function createRealisticShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.style.position = 'absolute';
    shootingStar.style.width = '3px';
    shootingStar.style.height = '3px';
    shootingStar.style.background = 'linear-gradient(45deg, #fff, #ffeb3b)';
    shootingStar.style.borderRadius = '50%';
    shootingStar.style.boxShadow = '0 0 15px #fff, 0 0 25px #ffeb3b, 0 0 35px #ffeb3b';
    
    // ذيل النجم الساقط
    shootingStar.style.filter = 'blur(0.5px)';
    shootingStar.style.background = 'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,235,59,0.8) 50%, transparent 100%)';
    shootingStar.style.width = '40px';
    shootingStar.style.height = '2px';
    shootingStar.style.borderRadius = '50px';
    
    const startX = Math.random() * window.innerWidth;
    const startY = -20;
    
    shootingStar.style.left = startX + 'px';
    shootingStar.style.top = startY + 'px';
    
    document.querySelector('.stars-container').appendChild(shootingStar);
    
    const duration = Math.random() * 2000 + 1500; // 1.5-3.5 ثانية
    const endX = startX + (Math.random() * 400 - 200);
    const endY = window.innerHeight + 50;
    const rotation = Math.random() * 60 - 30; // دوران عشوائي
    
    shootingStar.animate([
        { 
            transform: `translate(0, 0) rotate(${rotation}deg)`, 
            opacity: 0 
        },
        { 
            transform: `translate(${(endX - startX) * 0.1}px, ${(endY - startY) * 0.1}px) rotate(${rotation}deg)`, 
            opacity: 1 
        },
        { 
            transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(${rotation}deg)`, 
            opacity: 0 
        }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => {
        shootingStar.remove();
    };
}

// إنشاء كوكبة نجوم
function createConstellation() {
    const constellationStars = [];
    const centerX = Math.random() * (window.innerWidth - 200) + 100;
    const centerY = Math.random() * (window.innerHeight - 200) + 100;
    
    // إنشاء 5-8 نجوم في الكوكبة
    const starCount = Math.floor(Math.random() * 4) + 5;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'constellation-star';
        
        const angle = (i / starCount) * Math.PI * 2;
        const radius = Math.random() * 80 + 40;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const size = Math.random() * 3 + 2;
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = (i * 0.5) + 's';
        
        document.querySelector('.stars-container').appendChild(star);
        constellationStars.push(star);
    }
}

// إنشاء الفقاعات المتحركة
function createBubbles() {
    const container = document.getElementById('bubblesContainer');
    
    // إنشاء فقاعات مستمرة
    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // أحجام مختلفة للفقاعات
        const sizes = ['bubble-small', 'bubble-medium', 'bubble-large', 'bubble-extra-large'];
        const colors = ['', 'bubble-blue', 'bubble-cyan', 'bubble-purple'];
        
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        bubble.classList.add(randomSize);
        if (randomColor) bubble.classList.add(randomColor);
        
        // موقع عشوائي أفقياً
        bubble.style.left = Math.random() * 100 + '%';
        
        // سرعة عشوائية
        const duration = Math.random() * 4 + 6; // 6-10 ثواني
        bubble.style.animationDuration = duration + 's';
        
        // تأخير عشوائي
        bubble.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(bubble);
        
        // إزالة الفقاعة بعد انتهاء الحركة
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.remove();
            }
        }, (duration + 2) * 1000);
    }, 300); // فقاعة جديدة كل 300ms
}

// تأثير تغيير لون الخلفية عند السكرول
function handleScrollBackground() {
    const body = document.body;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // حساب نسبة السكرول
    const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
    
    // إزالة جميع فئات السكرول
    body.classList.remove('scrolled-light', 'scrolled-medium', 'scrolled-dark', 'scrolled-darker', 'scrolled-darkest');
    
    // إضافة الفئة المناسبة حسب نسبة السكرول
    if (scrollPercentage > 0.8) {
        body.classList.add('scrolled-darkest');
    } else if (scrollPercentage > 0.6) {
        body.classList.add('scrolled-darker');
    } else if (scrollPercentage > 0.4) {
        body.classList.add('scrolled-dark');
    } else if (scrollPercentage > 0.2) {
        body.classList.add('scrolled-medium');
    } else if (scrollPercentage > 0.1) {
        body.classList.add('scrolled-light');
    }
}

// وظائف التنقل للجوال
function initMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const desktopNavLinks = document.querySelectorAll('.nav-link');
    
    // تبديل القائمة المحمولة
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            
            // إزالة الفئة النشطة من جميع الروابط
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            desktopNavLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة الفئة النشطة للرابط المحدد
            link.classList.add('active');
            
            // تحديث الرابط المقابل في سطح المكتب
            const href = link.getAttribute('href');
            const desktopLink = document.querySelector(`.nav-link[href="${href}"]`);
            if (desktopLink) {
                desktopLink.classList.add('active');
            }
        });
    });
    
    // التعامل مع روابط سطح المكتب
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // إزالة الفئة النشطة من جميع الروابط
            desktopNavLinks.forEach(l => l.classList.remove('active'));
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة الفئة النشطة للرابط المحدد
            link.classList.add('active');
            
            // تحديث الرابط المقابل في الجوال
            const href = link.getAttribute('href');
            const mobileLink = document.querySelector(`.mobile-nav-link[href="${href}"]`);
            if (mobileLink) {
                mobileLink.classList.add('active');
            }
        });
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
}

// تأثيرات إضافية للفقاعات
function createSpecialBubbles() {
    const container = document.getElementById('bubblesContainer');
    
    // فقاعات كبيرة نادرة
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% احتمال
            const bubble = document.createElement('div');
            bubble.className = 'bubble bubble-extra-large';
            
            const colors = ['bubble-blue', 'bubble-cyan', 'bubble-purple'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            bubble.classList.add(randomColor);
            
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDuration = (Math.random() * 3 + 12) + 's'; // 12-15 ثانية
            bubble.style.opacity = '0.6';
            
            container.appendChild(bubble);
            
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.remove();
                }
            }, 17000);
        }
    }, 2000);
}

// إنشاء جسيمات متحركة جميلة
function createFloatingParticles() {
    const container = document.getElementById('bubblesContainer');
    
    // إنشاء جسيمات مستمرة
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // أنواع مختلفة من الجسيمات
        const types = ['particle-star', 'particle-diamond', 'particle-circle', 'particle-glow'];
        const colors = ['particle-blue', 'particle-cyan', 'particle-purple', 'particle-gold', 'particle-pink'];
        
        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.classList.add(randomType, randomColor);
        
        // موقع عشوائي
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // حركة عشوائية
        const duration = Math.random() * 8 + 5; // 5-13 ثواني
        particle.style.animationDuration = duration + 's';
        
        // تأخير عشوائي
        particle.style.animationDelay = Math.random() * 3 + 's';
        
        container.appendChild(particle);
        
        // إزالة الجسيم بعد انتهاء الحركة
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, (duration + 3) * 1000);
    }, 200); // جسيم جديد كل 200ms
}

// تأثير الموجات الضوئية
function createLightWaves() {
    const container = document.getElementById('bubblesContainer');
    
    setInterval(() => {
        if (Math.random() < 0.4) { // 40% احتمال
            const wave = document.createElement('div');
            wave.className = 'light-wave';
            
            // موقع عشوائي
            wave.style.left = Math.random() * 100 + '%';
            wave.style.top = Math.random() * 100 + '%';
            
            // حجم عشوائي
            const size = Math.random() * 200 + 100;
            wave.style.width = size + 'px';
            wave.style.height = size + 'px';
            
            container.appendChild(wave);
            
            // إزالة الموجة بعد انتهاء الحركة
            setTimeout(() => {
                if (wave.parentNode) {
                    wave.remove();
                }
            }, 4000);
        }
    }, 1500);
}

// تأثير النجوم المتساقطة المحسن
function createEnhancedShootingStars() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% احتمال
            const star = document.createElement('div');
            star.className = 'shooting-star-enhanced';
            
            // موقع البداية عشوائي
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 50 + '%';
            
            // اتجاه عشوائي
            const angle = Math.random() * 60 + 15; // 15-75 درجة
            star.style.transform = `rotate(${angle}deg)`;
            
            document.body.appendChild(star);
            
            // إزالة النجم بعد انتهاء الحركة
            setTimeout(() => {
                if (star.parentNode) {
                    star.remove();
                }
            }, 3000);
        }
    }, 2000);
}

// تشغيل الوظائف عند تحميل الصفحة
window.addEventListener('load', () => {
    initMobileNavigation();
    createFloatingParticles(); // استبدال createBubbles
    createLightWaves();
    createEnhancedShootingStars();
    
    // إضافة مستمع السكرول
    window.addEventListener('scroll', handleScrollBackground);
    
    // تحديث الجسيمات عند تغيير حجم النافذة
    window.addEventListener('resize', () => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            if (Math.random() < 0.15) { // 15% احتمال إعادة تموضع
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
            }
        });
    });
});

// تأثير السكرول السلس للروابط
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});