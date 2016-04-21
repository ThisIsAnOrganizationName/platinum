<template>
    <navbar></navbar>
    <div class="login">
        <avatar class="login-avatar" src="https://secure.gravatar.com/avatar/ed3b797144404a1221afa09bef680eb4?s=200&r=pg&d=https%3A%2F%2Fdeveloper.cdn.mozilla.net%2Fmedia%2Fimg%2Favatar.png" size="64"></avatar>
        <div class="login-username">yneear</div>
        <div class="login-input-group">
            <input type="text" name="email" placeholder="Email" />
        </div>
        <div class="login-input-group">
            <input type="password" name="password" placeholder="Password" />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Avatar from '../components/Avatar.vue'

export default {
    props: [],
    components: {
        Navbar,
        Avatar,
    }
}
</script>

<style lang="less">
@fontColor: #CFD8DC;

.login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    transform: translate(-50%, -50%);
    text-align: center;
}

.login-avatar {
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
