<template>
    <header class="fixed-top">
        <div class="col text-left">
            <button class="nav-toggle" @click="toggleClass()"></button>
            <a href="" class="brand-icon"><img src="../assets/img/logo.png" alt="Logo"></a>
        </div>

        <div class="col-auto text-center main-nav">
            <ul class="nav">
                <li class="nav-link active">
                    <a href="">Home</a>
                </li>
                <li class="nav-link">
                    <a href="">Videos</a>
                </li>
                <li class="nav-link">
                    <a href="">Playlists</a>
                </li>
                <li class="nav-link">
                    <a href="">Channels</a>
                </li>
                <li class="nav-link">
                    <a href="">About</a>
                </li>
            </ul>
            <input type="text" class="search" placeholder="Search ...">
        </div>
        <div class="col col-xs-auto text-right">
            <ul class="nav right">
                <li class="nav-link">
                    <a href=""><img src="../assets/img/ic-upload.png" alt=""></a>
                </li>
                <li class="nav-link hide-xs show-lg"></li>
                <li class="nav-link">
                    <a href=""><img src="../assets/img/ic-notification.png" alt="">
                        <span class="count"></span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="" class="userlogged">
                        <figure><img src="../assets/img/ava.png" alt=""></figure>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
// Used EventBus to share the data between the components//
import { EventBus } from '../event-bus.js'
export default { methods: { toggleClass () { EventBus.$emit('id-selected', 1) } } }
</script>
<style>

</style>

