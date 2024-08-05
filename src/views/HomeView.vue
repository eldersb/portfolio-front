<template>

    
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-9">

            <div class="jumbotron">
                <h1 class="display-4 text-center mt-5">Projetos em destaque</h1>
                    <p class="lead">
                        Este é meu portifolio pessoal de desenvolvedor, aqui você pode conhecer um pouco
                        sobre mim, minhas habilidades e projetos que estou desenvolvendo. Estou aberto
                        para qualquer contato e feedback que me façam crescer como um desenvolvedor web!! 
                    </p>
                    <hr class="my-4">
                    <p>Fique por dentro do que estou estudando:</p>
            </div>
            
            <section class=" mt-3 mb-5col ">
                <article class="row gap-4 m-0 p-0 justify-content-center align-items-center">
                    <CardComponent 
                        v-for="qtd in cardCount"
                        :key="qtd"
                        class="mb-4 "
                    />
                </article>
            </section>
       
        </div>
    </div>
</div>

</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
    name: 'HomeView',
    components: {
        CardComponent
    },
    data() {
        return {
            cardCount: 9
        }
    }
}


</script>