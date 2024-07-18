<script>
export default {
    name:'JumbotronAboutUs',
}
</script>


<template>
                <div class="row">
                    <div class="offset-2 col-xl-9 d-flex justify-content-between title">

                        <div>
                            <h1>About Us</h1>
                            <span>Home <i class="fa-solid fa-arrow-right-long"></i> About Us </span>
                       </div>

                         <img src="/public/rocket-banner.png" alt="">
                    </div>
                </div>
</template>


<style scoped lang="scss">
.title{
    width: 80%;
    margin: 0 auto;
    margin-top: 5rem;
}

img{
    width: 40%;
}

h1{ 
    margin-bottom: 1rem;
}

</style>