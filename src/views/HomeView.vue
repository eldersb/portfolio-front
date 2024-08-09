<template>

    
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-12">

            <div class="jumbotron">
                <h1 class="display-4 text-center mt-5">Projetos em destaque</h1>
                    <p class="lead text-center">
                        Este é meu portifolio pessoal de desenvolvedor, aqui você encontra um pouco
                        sobre mim, minhas habilidades e projetos que estou desenvolvendo. Estou aberto
                        para qualquer contato e feedback que me façam crescer como desenvolvedor!
                    </p>
                    <hr class="my-4">
            </div>
            
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
import CardComponent from '../components/CardComponent.vue';
import axios from 'axios';


export default {
    name: 'HomeView',
    components: {
        CardComponent
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