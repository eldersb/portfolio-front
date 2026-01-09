<template>
    
    <div class="card m-1 shadow" style="width: 18rem;">

         <div v-if="card.emphasis" class="badge-destaque">
            <i class="bi bi-star-fill"></i>
        </div>

        <img class="card-img-top" :src="card.image" alt="Imagem do projeto">
        <div class="card-body fixed-height " >
            <h5 class="card-title">
                <i class="bi bi-asterisk fs-6"></i> 
                 {{ card.title }}
            </h5>
            <p class="card-text ">{{ card.description  }}</p>
            <p class="card-text"><strong class="text-tech">Tecnologias:</strong> {{ card.technologies }}</p>      
        </div>
        <div class="card-body d-flex justify-content-center gap-2 mt-2 body-2">
            <a :href="card.linkCode" class="btn text-light d-flex gap-1 " target="_blank">code</a>
            <a 
                v-if="card.linkDeploy"
                :href="card.linkDeploy" 
                class="btn text-light d-flex gap-1" 
                target="_blank"
            >
                deploy
            </a>
            <button 
                v-else
                class="btn text-light d-flex gap-1 btn-disabled" 
                disabled
            >
                deploy
            </button>
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
            type: Object,
            required: true
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
    border-top: 1px solid gray;
}


.card-title, .text-tech {
    color: #7276d5;
    
}

.card-title {
    font-size: 18px;
}

.card{
    background-color: #333 ;
    color: gray;
    font-weight: 400;
    font-style: normal; 
}


.card-text {
  font-size: 14px;
   font-family: "Roboto", sans-serif;
   font-size: 14px;
  text-align: justify;
  hyphens: auto;

}

.btn {
    background-color: #3b4bd7; 
}

.btn:hover {
    color: #333;
    border: 2px solid #3b4bd7;

}

.badge-destaque {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ffd700;
    color: #333;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    font-size: 16px;
}
</style>