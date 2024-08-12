<template>
    <div class="container mt-5 ">
    <div class="row m-0 p-0 align-items-center">
       
        <div class="col-md-6 text text-center text-md-left">
            <h2 class="mt-3 text-center">
                <p class="mb-3">Hello World <i class="bi bi-code-slash fs-2"></i>  </p>
               
                
                 Meu nome é
                 <span class="text-span">Elder Borges</span>
                 e sou um 
                 <span class="text-span">desenvolvedor!</span>
            </h2>
            <div class="mt-4">
                <p class="text-frase">
                    A repetição é a mãe da aprendizagem, o pai da ação,
                    o que a torna o arquiteto da concretização.
                </p>
                <p class="text-frase">- Zig Ziglar</p>

                <router-link to="/about" @click="scroll" >
                    <button type="button" class="btn btn-outline"><i class="bi bi-code-slash"></i> Contact me!!</button>
                </router-link>


            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center mt-3 ">
            <img class="img-fluid" src="/public/elder-menor.jpeg" alt="Elder">
        </div>
    </div>
</div>
</template>


<script>
export default {
  methods: {
    scroll(event) {
      this.$router.push('/about')
        .then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight);
            }, 0);
          });
        });
    }
  }
}
</script>

<style scoped>

.text {
    color: gray;
}

.text-span {
    color: #3b4bd7;
}

.text-frase {
    font-size: 22px;
}

h2 {
    font-family: "Press Start 2P", system-ui;
    font-style: normal;
    font-size: 24px;
}


.btn-outline {
    border: 2px solid #3b4bd7;
    color: gray;
}

.btn-outline:hover {
    background-color: #3b4bd7;
    border:none;
    color: gray;
}


</style>