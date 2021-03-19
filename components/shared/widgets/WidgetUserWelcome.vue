<template lang='html'>
    <div class="ps-block--user-wellcome">
        <div class="ps-block__left">
            <img src="~/static/img/user/admin.jpg" alt="" />
        </div>
        <div class="ps-block__right">
            <p>
                Hola,<a href="#">{{ companyName }}
                    
                </a>
            </p>
        </div>
        <div class="ps-block__action">
            <a href="#">
                <i class="icon-exit"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WidgetUserWelcome',
    props: ['companyName']
};
</script>

<style lang='scss' scoped>

</style>
