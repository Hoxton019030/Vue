<template>
    <li class="item">{{xyz}}</li>
</template>

 <script>
 export default {
    props: ['xyz'],
 }
 </script>

 <style>
    .item{
        background-color: #abc;
        font: 18px Calibri;
        margin: 5px;
        padding: 5px;
    }
    .item:hover{
        background-color: #cba;
        cursor: pointer;
    }
 </style>
 
 