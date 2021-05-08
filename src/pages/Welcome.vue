<template>
<div class="container d-flex align-items-center justify-content-center">
    <div class="row">
        <div class="col-xs-12 d-flex justify-content-center">
            <p>welcome to my application {{ $store.getters.name }}</p>
        </div>
    </div>
</div>
</template>


<style scoped>
    .container{
        height: 80vh;
    }

    p{
        font-size: 35pt;
    }
</style>