<template>
    <figure class="avatar" :style="imgSize"></figure>
</template>

<script>

export default {
    props: ['src', 'size'],
    computed: {
        imgSize() {
            if (!this.size) console.log('Undefined imgSize');

            let size = this.size + 'px';
            return {
                'width': size,
                'height': size,
            }
        },
    },
    ready() {
        if (!this.src) this.src = require('../media/social.png');

        let img = new Image();
        img.src = this.src;

        img.onload = () => {
            this.$el.appendChild(img);
        }
    }

}
</script>

<style lang="less">
.avatar {
    display: inline-block;
    margin: 0;
    min-width: 32px;
    min-height: 32px;
    img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
}
</style>
