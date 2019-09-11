<template>
    <button
        class="app-button" 
        :class="{
            'app-button-text': type === 'text', 
            'app-button-primary': type === 'primary', 
            'app-button-plain': type === 'plain', 
            'app-button-block': block, 
            'app-button-default': size === 'default', 
            'app-button-large': size === 'large', 
            'app-button-small': size === 'small'
        }"
        @click="handleClick">
        <i v-if="icon" :class="['iconfont', icon]"/>
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
        icon: {
            type: String,
        },
        size: {
            type: String,
            default: 'default',
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

<style lang="less" scoped>
    @import '../assets/styles/theme.less';
    .app-button {
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
    .app-button-large {
        padding: 8px 18px;
        font-size: 16px;
        i {
            font-size: 18px;
        }
    }
    .app-button-default {
        padding: 6px 14px;
        font-size: 14px;
        i {
            font-size: 14px;
        }
    }
    .app-button-small {
        padding: 4px 12px;
        font-size: 12px;
        i {
            font-size: 12px;
        }
    }
</style>