<template>

    
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-12">

            <BannerComponent />

            <section>
                <div class="jumbotron">
                     <h1 class="text-destaque text-center mt-5">Projetos em destaque</h1>
                        <p class=" text-jumb text-center">
                            Este é meu portifolio pessoal de desenvolvedor, aqui você encontra um pouco
                            sobre mim, minhas habilidades e projetos que estou desenvolvendo. Estou aberto
                            para qualquer contato e feedback que me façam crescer como desenvolvedor!
                        </p>
                        <hr class="hr-cor my-4">
                </div>

            </section>
           
                    
            <section class="mt-3 mb-5 col">
                <article class="row m-0 p-0 justify-content-center align-items-center">
                    <template v-for="card in allCards" :key="card.id">
                        <div class="col-12 col-md-6 col-lg-4">
                            <CardComponent :card="card" class="mb-5" />
                        </div>
                    </template>
                    
                </article>
            </section>
       
        </div>
    </div>
</div>

</template>

<script>
import BannerComponent from '../components/BannerComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import axios from 'axios';


export default {
    name: 'HomeView',
    components: {
        CardComponent,
        BannerComponent
    },
    data() {
        return {
            allCards: []
        }
    },
    created() {
    this.fetchData();
    },
    methods: {
       async fetchData(){
            try {
                const responseCards = await  axios.get('https://portifolio-back-tfji.vercel.app/api/api/projects')
                this.allCards = responseCards.data;
                
            }
            catch(error){
                console.error('Erro ao buscar os dados: ', error);
            }
        }
    } 
}


</script>

<style>



#app {
  background-color: #1E1E1E;
}

.hr-cor {
    border: 0;
    border-top: 2px solid #7276d5;
    margin: 20px 0; 
}


.text-jumb {
    color: gray;
    font-size: 18px;
    font-family: "Fira Code", monospace;
    font-weight: 400;
    font-style: normal; 
}

.text-destaque { 
    color: #7276d5;
    font-family: "Press Start 2P", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 33px;
}

</style>