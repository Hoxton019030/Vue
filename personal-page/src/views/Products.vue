<template>
    <div>
        <h3>&Products&</h3>
        <p>{{$route.params.sn}}</p>
        <p>{{ product }}</p>
    </div>
</template>

<script>
const items = {
    10: 'T-Shirt',
    20: 'Hat',
    30: 'iPad mini',
    40: 'Mac Pro',
    50: 'HomePod mini',
    60: 'AirPods',
}
export default {
    computed: {
        product() {
            // return this.$route.params.sn
            return items[this.$route.params.sn]     // http://127.0.0.1:5500/products/30
            // return items[this.$route.query.sn]     // http://127.0.0.1:5500/products?sn=30
        },
    },
}
</script>