<template>
    <div class="search-bar">
        <i class="iconfont search"/>
        <input type="text" placeholder="搜索"/>
        <div class="search-bar-line"></div>
    </div>
</template>

<script>
export default {
    name: 'search-bar'
}
</script>

<style lang="less" scoped>
@import '../assets/styles/theme.less';
.search-bar {
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 3px;
    i {
        font-size: 24px;
        color: @placeholder-color;
    }
    .search-bar-line {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
    }
    input {
        padding-top: 1px;
    }
    input:focus ~ div.search-bar-line {
        animation: focus-ani .3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }
    @keyframes focus-ani {
        0% {
            width: 0;
            background: transparent;
        }
        100% {
            width: 100%;
            background: @theme-color;
        }
    }
}
</style>