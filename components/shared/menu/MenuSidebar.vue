<template lang="html">
    <ul class="menu">
        <li v-for="item in menuItems" :key="item.text">
            <nuxt-link :to="item.url" class="menu__text">
                <i :class="item.icon"> </i>
                <span>{{ item.text }}</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'MenuSidebar',
    data() {
        return {
            menuItems: [
                {
                    text: 'Dashboard',
                    url: '/',
                    icon: 'icon-home'
                },
                {
                    text: 'Servicios',
                    url: '/products',
                    icon: 'icon-database'
                },
                                {
                    text: 'Portafolio',
                    url: '/products',
                    icon: 'icon-database'
                },
                                                {
                    text: 'Clientes',
                    url: '/products',
                    icon: 'icon-database'
                },
                {
                    text: 'Presupuestos',
                    url: '/orders',
                    icon: 'icon-bag2'
                },
                {
                    text: 'Usuarios',
                    url: '/customers',
                    icon: 'icon-users2'
                },
                {
                    text: 'Email',
                    url: '/categories',
                    icon: 'icon-users2'
                },
                                {
                    text: 'Gastos',
                    url: '/categories',
                    icon: 'icon-users2'
                },
                {
                    text: 'Configuración',
                    url: '/settings',
                    icon: 'icon-cog'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
