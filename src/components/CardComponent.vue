<template>
    
    <div class="card m-1 shadow" style="width: 18rem;">
        <img class="card-img-top" :src="card.image" alt="Imagem do projeto">
        <div class="card-body fixed-height">
            <h5 class="card-title">
                <i class="bi bi-asterisk fs-6"></i> 
                 {{ card.title }}
            </h5>
            <p class="card-text">{{ card.description  }}</p>
            <p class="card-text"><strong class="text-strong">Tecnologias:</strong> {{ card.technologies }}</p>      
        </div>
        <div class="card-body d-flex justify-content-center gap-2 mt-2 body-2">
            <a :href="card.linkCode" class="btn text-light d-flex gap-1 " target="_blank">code</a>
            <a :href="card.linkDeploy" class="btn text-light d-flex gap-1" target="_blank">deploy </a>
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
    height: 200px; 
    overflow-y: auto;
    scrollbar-width: none;
}

.body-2, .fixed-height {
    border-top: 2px solid gray;
}


.card-title, .text-strong {
    color: #7276d5;
}

.card{
    background-color: #333 ;
    color: gray;
    border: 2px solid gray;
    font-family: "Fira Code", monospace;
    font-weight: 400;
    font-style: normal; 
  
}



.btn {
    background-color: #3b4bd7; 
}

.btn:hover {
    color: #333;
    border: 2px solid #3b4bd7;

}

</style>