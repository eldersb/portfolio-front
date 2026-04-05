<template>

    
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-12">

            <BannerComponent />

              <section class="projetos">
                <p class="section-label">Projetos</p>
                <h2 class="section-title">Projetos em destaque</h2>
                <p class="projetos-desc">
                    Este é meu portfólio pessoal de desenvolvedor, aqui você encontra um pouco
                    sobre mim, minhas habilidades e projetos que estou desenvolvendo.
                </p>
            </section>    
           
                    
            <section class="mt-3 mb-5 col">
                <article class="row m-0 p-0 justify-content-center align-items-center">
                        <div v-for="card in cardsOrdenados" :key="card.id" class="col-12 col-md-6 col-lg-4">
                            <CardComponent :card="card" class="mb-5" />
                        </div>     
                </article>
            </section>
       
        </div>
    </div>
</div>

</template>

<script>
import BannerComponent from '../components/BannerComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


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

    computed: {
        cardsOrdenados() {
            return [...this.allCards].sort((a, b) => {
                if (a.emphasis && !b.emphasis) return -1;
                if (!a.emphasis && b.emphasis) return 1;
                return 0;
            });
        }
    },
    methods: {
       async fetchData(){
            try {
            const querySnapshot = await getDocs(collection(db, "projetos"));
                this.allCards = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
                }));
                
            this.allCards = data;
                
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


.projetos-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: rgba(232,228,255,0.55);
  line-height: 1.85;
  margin-bottom: 28px;
}

</style>