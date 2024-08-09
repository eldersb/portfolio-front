<template>
    
    <div class="card m-1 shadow" style="width: 18rem;">
        <img class="card-img-top" :src="card.image" alt="Imagem do projeto">
        <div class="card-body fixed-height">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description  }}</p>
            <p class="card-text"><strong>Tecnologias:</strong> {{ card.technologies }}</p>      
        </div>
        <div class="card-body d-flex justify-content-center gap-2 mt-2 ">
            <a :href="card.linkCode" class="btn btn-primary d-flex gap-1 " target="_blank">code</a>
            <a :href="card.linkDeploy" class="btn btn-primary d-flex gap-1" target="_blank">deploy </a>
        </div>
    </div>


</template>

<script>
export default {
    name: 'CardComponent',
    components: {

    },
    data() {
        return {

        }
    },
    props: {
        card: {
            type: Object
        }
    }
}


</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.fixed-height {
    height: 200px; /* Ajuste conforme necessário */
    overflow-y: auto;
}

</style>