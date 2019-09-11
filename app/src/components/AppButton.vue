<template>
    <button
        class="app-button" 
        :class="{'app-button-text': type === 'text', 'app-button-primary': type === 'primary', 'app-button-plain': type === 'plain', 'app-button-block': block}"
        @click="handleClick">
        {{text}}
    </button>
</template>

<script>
export default {
    name: 'app-button',
    props: {
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'plain',
        },
        block: {
            type: Boolean,
            default: false,
        },
        click: {
            type: Function
        }
    },
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="less">
    @import '../assets/styles/theme.less';
    .app-button {
        padding: 6px 14px;
        border: 1px solid transparent;
        border-radius: 2px;
    }
    .app-button-text {
        color: @theme-color;
    }
    .app-button-primary {
        color: #fff;
        background: @theme-color;
    }
    .app-button-plain {
        color: @theme-color;
        border-color: @theme-color;
    }
    .app-button-block {
        width: 100%;
        box-sizing: border-box;
    }
</style>