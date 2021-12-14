<template>
    <div id="form">    
        <div data-tf-widget="G9Nru8aM" data-tf-iframe-props="title=Portfolio" style="width:100%;height:100%;">
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.insert_script()
    },
    methods:{
        insert_script(){
            let div = document.getElementById("form");
            let script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', '//embed.typeform.com/next/embed.js');
            div.insertAdjacentElement('afterend', script)
        }
    }
}
</script>

<style scoped>
#form{
    width:100%;
    height: 100%;
}
</style>