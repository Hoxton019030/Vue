<template>
    <div>
                <h3>&Products&</h3>
                <p>{{product}}</p>
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
    product(){
        return items[this.$route.params.sn]
    }
}
</script>