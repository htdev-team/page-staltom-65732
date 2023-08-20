//= swiper.js

function DOM_HH_Ready() {

    const initSliders = () => {
        // обычный слайдер с автоплеем, в мобилке автоплей отключается
        const slider = new Swiper('.tmpl_hh_slider .swiper', {
            loop: true,
            effect: 'fade',
            pagination: {
                el: '.tmpl_hh_slider .tmpl_hh_pag',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 2,
            },
            navigation: {
                prevEl: '.tmpl_hh_slider .tmpl_hh_prev',
                nextEl: '.tmpl_hh_slider .tmpl_hh_next'
            },
            autoplay: {
                delay: 5000,
                // disableOnInteraction: false
            },
            breakpoints: {
                699: {
                    autoplay: false
                }
            }
        });
    }

    const initVideoPreview = () => {
        const videos = document.querySelectorAll('.tmpl_hh_video');
     
        videos.forEach((video) => {
            const content = video.querySelector('.tmpl_hh_video__content');
            const id = video.dataset.id;
     
            content.addEventListener('click', () => {
                video.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?rel=0&enablejsapi=1&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                const iframe = video.querySelector('iframe');
     
                if (iframe !== null) {
                    iframe.addEventListener('load', function() {
                        setTimeout(() => {
                            iframe.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                        }, 100);
                    });
                }
            });
        });
    }

    const scrollToVacancies = () => {
        const vacancyBlock = document.querySelector('.tmpl_hh_vacancy_block');
        if (vacancyBlock !== null) vacancyBlock.scrollIntoView({behavior: "smooth"});
    }
     
    const initScrollToVacancies = () => {
        const btns = document.querySelectorAll('.tmpl_hh_toVacancy');
     
        btns.forEach((btn) => btn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToVacancies();
        }));
    }

    initSliders();
    initVideoPreview();
    initScrollToVacancies();


}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", DOM_HH_Ready);
} else {
    DOM_HH_Ready();
}