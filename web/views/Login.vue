<template>
    <div class="login">
        <img class="login-avatar" src="https://avatars3.githubusercontent.com/u/5675564?v=3&amp;s=200" alt="avatar">
        <div class="login-username">yneear</div>
        <div class="login-input-group">
            <input type="text" name="email" placeholder="Email" />
        </div>
        <div class="login-input-group">
            <input type="password" name="password" placeholder="Password" />
        </div>
    </div>
</template>

<style>
.login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    transform: translate(-50%, -50%);
    text-align: center;
}

.login-avatar {
    border-radius: 50%;
    width: 64px;
}

.login-username {
    margin-bottom: 10px;
    font-size: 14px;
    color: #CFD8DC;
}

.login-input-group input {
    width: 100%;
    background: #607D8B;
    color: #CFD8DC;
    box-sizing: border-box;
    margin-bottom: 6px;
    padding: 8px 12px;
}


</style>
