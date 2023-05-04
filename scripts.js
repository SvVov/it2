(function() {

    (function initSlides() {
        const cards = getData();
        drawSwiperSlides(cards);
        attachAudioSwiperSlideEvents(cards);
        initSwiper();
    })();

    function getData() {
        return [
            { title: "Cat", picturePath: "cat.jpg", audioTitle: "may", audiopath: "cat.mp3"},
            { title: "Dog", picturePath: "dog.jpg", audioTitle: "gav", audiopath: "dog.mp3"},
            { title: "Bird", picturePath: "bird.jpg", audioTitle: "pii", audiopath: "bird.mp3"},
            { title: "Cat2", picturePath: "cat.jpg", audioTitle: "may", audiopath: "cat.mp3"},
            { title: "Dog2", picturePath: "dog.jpg", audioTitle: "gav", audiopath: "dog.mp3"},
            { title: "Bird2", picturePath: "bird.jpg", audioTitle: "pii", audiopath: "bird.mp3"},
        ]
    }

    function drawSwiperSlides(cards) {
        if (!cards || cards.length === 0)
            return;

        const swiperWrapper = document.getElementById('swiper-wrapper-id');
        for(let i = 0; i < cards.length; i++) {
            swiperWrapper.innerHTML += getSwiperSlideHTML(cards[i].title, cards[i].picturePath, cards[i].audioTitle, cards[i].audiopath);
        }
    }

    function attachAudioSwiperSlideEvents(cards) {
        if (!cards || cards.length === 0)
            return;

        for(let i = 0; i < cards.length; i++) {
            const playControl = document.getElementById(`play_${cards[i].title}_${cards[i].picturePath}`);
            playControl.addEventListener("click", onPlayClick);
            playControl.Card = cards[i];
        }
    }

    function getSwiperSlideHTML(title, picturePath, audioTitle, audiopath) {
        return `<div class="swiper-slide">
                    <div class="testmonialBox">
                        <audio id="audio_${title}_${picturePath}">
                            <source src="audio/${audiopath}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <div class="content">
                            <div class="slide-title">${title}</div>
                            <div class="slide-img">
                                <img src="imgs/${picturePath}">
                            </div>
                            <div class="slide-audio-title">${audioTitle.toUpperCase()}</div>
                            <div class="slide-controls">
                                <div class="slide-left-control">
                                    <img src="icons/home.svg"> 
                                </div>
                                <div class="slide-middle-control" id="play_${title}_${picturePath}">
                                    <img src="icons/play.svg">
                                </div>
                                <div class="slide-right-control">
                                    <img src="icons/notes.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    function onPlayClick(event) {
        if (!event.currentTarget.Card) 
            return;

        const card = event.currentTarget.Card;
        var audioElement = document.getElementById(`audio_${card.title}_${card.picturePath}`);
        audioElement.play();
    }

    function initSwiper() {
        new Swiper('.swiper-container', {
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows : false
            },
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            mousewheel: {
                sensitivity: 1
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
})();
