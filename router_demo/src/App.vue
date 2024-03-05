<template>

 <router-link to="/Home">首頁</router-link>|
 <router-link to="/Blog">部落格</router-link>

 <router-view></router-view>
</template>
<script>

export default {
  name: 'App',
}
</script>
