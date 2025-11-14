// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 实验筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const experimentItems = document.querySelectorAll('.experiment-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // 为当前点击的按钮添加active类
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                // 筛选实验项目
                experimentItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // 平滑滚动到锚点
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航栏滚动效果
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // 页面加载动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.experiment-card, .experiment-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 设置初始状态
    const cards = document.querySelectorAll('.experiment-card, .experiment-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
    });

    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    // 初始调用一次
    animateOnScroll();
});