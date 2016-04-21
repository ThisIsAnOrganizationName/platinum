<template>
    <navbar v-show="userLogin" transition="navbar"></navbar>
    <div class="login" :class="{'user--login': userLogin}">
        <avatar src="https://secure.gravatar.com/avatar/ed3b797144404a1221afa09bef680eb4?s=200&r=pg&d=https%3A%2F%2Fdeveloper.cdn.mozilla.net%2Fmedia%2Fimg%2Favatar.png" :size="size"></avatar>
        <div class="login-username" v-if="!userLogin" transition="login">yneear</div>
        <div class="login-input-group" v-if="!userLogin" transition="login">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
        </div>
    </div>
    <overview v-show="userLogin" transition="overview"></overview>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Avatar from '../components/Avatar.vue'
import Overview from '../components/Overview.vue'

export default {
    data() {
        return {
            userLogin: false,
            size: 64,
        }
    },
    ready() {

    },
    components: {
        Navbar,
        Avatar,
        Overview,
    }
}
</script>

<style lang="less">
@fontColor: #CFD8DC;

.navbar {
    &-transition {
        transition: all 1s ease;
        margin-top: 0;
    }
    &-enter, &-leave {
        margin-top: -60px;
    }
}

.overview {
    &-transition {
        transition: all 1s ease;
        position: absolute;
        bottom: 0;
    }
    &-enter, &-leave {
        bottom: -50%;
    }
}

.login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: all 1s ease;
    &.user--login {
        width: 0;
        top: 30px;
        left: 7%;
    }
    &-transition {
        transition: all .3s ease;
    }
    &-enter, &-leave {
        transform: scaleY(0);
    }
}

.login-username {
    margin-bottom: 10px;
    font-size: 14px;
    color: @fontColor;
}

.login-input-group {
    input {
        width: 100%;
        background: #607D8B;
        color: @fontColor;
        box-sizing: border-box;
        margin-bottom: 6px;
        padding: 8px 12px;
    }
}


</style>
