<template>
    <header class="app-header">
        <div class="app-header-wrapper">
            <div class="">
                <img src="../assets/images/logo.png" class="app-logo"/>
                <ul class="app-menu">
                    <li class="app-menu-item float-left">首页</li>
                    <li class="app-menu-item float-left">关于</li>
                </ul>
            </div>
            <div>
                <SearchBar/>
                <AppButton text="写文章" type="text" icon="article" size="large"/>
            </div>
        </div>
    </header>
</template>

<script>
import AppButton from '../components/AppButton';
import SearchBar from '../components/SearchBar';

export default {
    name: 'app-header',
    components: {
        AppButton,
        SearchBar,
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/theme.less';
.app-header {
    height: 58px;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    box-shadow: @box-shadow;
    .app-header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        max-width: 960px;
        margin: 0 auto;
        & > div {
            display: flex;
            align-items: center;
        }
        .app-logo {
            height: 46px;
            margin-right: 30px;
        }
        .app-menu {
            .app-menu-item {
                margin: 0 10px;
                cursor: pointer;
                &:hover {
                    color: @theme-color;
                }
            }
        }
    }
}
</style>