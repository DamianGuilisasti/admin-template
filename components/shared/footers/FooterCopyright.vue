<template lang="html">
    <div className="ps-copyright">
        <img src="~/static/img/logo.png" alt="" width="50%" />
        <p>
            &copy;{{ new Date().getFullYear() }} <a href="https://damianguilisasti.com.ar" target="_blank">Damián Guilisasti.</a><br />
            Todos los derechos reservados.
        </p>
    </div>
</template>

<script>
export default {
    name: 'FooterCopyright'
};
</script>

<style lang="scss" scoped></style>
