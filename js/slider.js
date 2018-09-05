let slider = {
        quantity: 5,
        images: [],
        initQueue: [],
        DOM: {
            left: document.querySelector('.left'),
            right: document.querySelector('.right')
        },
        addListeners: function () {
            this.DOM.right.addEventListener('click', () => this.forward());
            this.DOM.left.addEventListener('click', () => this.backward());
        },
        imgArr: function () {
            for (let i = 0; i < this.quantity; i++) {
                this.images.push({ name: `img${i}`, state: i });
            }
            this.initQueue = this.images.slice(1, -1);
        },
        initPos: function () {
            document.getElementById('img0').classList.add('current');
            document.getElementById('img' + this.images[this.lastImage - 1].state).classList.add('hide');
            document.getElementById('img' + this.images[this.lastImage].state).classList.add('prev');
            for (let i = 0; i < this.initQueue.length; i++) {
                document.getElementById('img' + this.initQueue[i].state).classList.add('queue');
            }
        },
        forward: function () {
            document.getElementById('img' + this.images[0].state).classList.remove('current');
            document.getElementById('img' + this.images[0].state).classList.add('prev');
            document.getElementById('img' + this.images[1].state).classList.remove('hide');
            document.getElementById('img' + this.images[1].state).classList.remove('queue');
            document.getElementById('img' + this.images[1].state).classList.add('current');
            document.getElementById('img' + this.images[this.lastImage].state).classList.add('hide');
            document.getElementById('img' + this.images[this.lastImage].state).classList.remove('prev');
            document.getElementById('img' + this.images[this.lastImage].state).classList.add('queue');
            slider.stateUp()
        },
        backward: function () {
            document.getElementById('img' + this.images[0].state).classList.remove('current');
            document.getElementById('img' + this.images[0].state).classList.add('queue');
            document.getElementById('img' + this.images[this.lastImage - 1].state).classList.add('hide');
            document.getElementById('img' + this.images[this.lastImage - 1].state).classList.remove('queue');
            document.getElementById('img' + this.images[this.lastImage - 1].state).classList.add('prev');
            document.getElementById('img' + this.images[this.lastImage].state).classList.remove('hide');
            document.getElementById('img' + this.images[this.lastImage].state).classList.remove('prev');
            document.getElementById('img' + this.images[this.lastImage].state).classList.add('current');
            slider.stateDown()
        },
        stateUp: function () {
            for (let i = 0; i < this.quantity; i++) {
                if (this.images[i].state < this.quantity - 1) {
                    this.images[i].state = this.images[i].state + 1;
                } else {
                    this.images[i].state = 0;
                }
            }
        },
        stateDown: function () {
            for (let i = 0; i < this.quantity; i++) {
                if (this.images[i].state > 0) {
                    this.images[i].state = this.images[i].state - 1;
                } else {
                    this.images[i].state = this.lastImage;
                }
            }
        },
        sliderInit: function () {
            this.lastImage = this.quantity - 1;
            this.addListeners();
            this.imgArr();
            this.initPos();
        }
    }

    slider.sliderInit();
