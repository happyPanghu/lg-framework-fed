<template>
    <div v-html="htmlCode">
    </div>
</template>

<script>
    import htmlCode from '../../../src/header/html/index.html.js';
    export default {
        name: "Hea",
        data() {
            return {
                htmlCode: htmlCode
            }
        }
    }
</script>
<style lang="less">
    @import "../../../src/header/less/index.less";
</style>