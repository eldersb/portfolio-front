<template>
  <div class="container mt-5">
    <section>
  <div class="row m-0 p-0 align-items-start">

    <div class="col-md-6">
      <h2 class="mt-3 mb-3 text">
        <i class="bi bi-hash"></i>Sobre mim  
        <img src="/public/line.png" alt="Linha decorativa do título">
      </h2>

      <p class="text-principal text-justify">
        Estou sempre disposto a aprender e obter novas experiências.
        Concluí o ensino médio-técnico na instituição CEEP/TIC, e neste processo fui consolidando meu interesse por tecnologia.
        Atualmente, sou formado em Sistemas de Informação pela UNIME, tendo como foco profissional o Desenvolvimento Web.
        Tenho experiência na área de Suporte, tendo atuado como estagiário e Analista de Suporte Técnico.
        Hoje, atuo como desenvolvedor, tendo experiências com projetos em PHP e Java.
      </p>
    </div>

    <div class="col-md-6 d-flex justify-content-center align-items-start">
      <img class="img-fluid" src="/public/elder-terno.png" alt="Elder">
    </div>

  </div>
</section>

   

    <section>
      <div class="row m-0 p-0 align-items-center">
               
               <h2 class="mt-3 mb-3 text">
                 <i class="bi bi-hash"></i>Skills <img src="/public/line.png" alt="Linha decorativa do título">
               </h2>
             
               <div class="card text-white bg-secondary mb-3 ms-3" style="max-width: 16rem;">
                   <div class="card-header">
                     <i class="bi bi-braces fs-4"></i> 
                     Front-End
                   </div>
                   <div class="card-body">
                     <ul>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>Javascript</li>
                       <li>Vue</li>
                       <li>Alpine</li>
                     </ul>
                   </div>
               </div>
       
             <div class="card text-white bg-secondary mb-3 ms-3" style="max-width: 16rem;">
                 <div class="card-header">
                   <i class="bi bi-braces fs-4"></i> 
                   Back-End
                 </div>
                 <div class="card-body">
                   <ul>
                     <li>PHP</li>
                     <li>Java</li>
                     <li>Laravel</li>
                     <li>Spring Boot</li> 
                   </ul>
                 </div>
             </div>
       
             
             <div class="card text-white bg-secondary mb-3 ms-3" style="max-width: 18rem;">
                 <div class="card-header"> 
                   <i class="bi bi-braces fs-4"></i> 
                   Versionamento
                 </div>
                 <div class="card-body">
                   <ul>
                     <li>Git</li>
                     <li>Github</li>
                   </ul>
                 </div>
             </div>
             
       
           <div class="card text-white bg-secondary mb-3 ms-3" style="max-width: 14rem;">
               <div class="card-header"> 
                 <i class="bi bi-database text-light fs-4"></i> 
                 Databases
               </div>
                 <div class="card-body">
                   <p class="card-text">MySQL</p>
                   <p class="card-text">PostgreSQL</p>
                 </div>
           </div>
       
           </div>
    </section>
  


    <section>
      <div class="row m-0 p-0">

          <h2 class="mt-5 mb-3 text">
                <i class="bi bi-hash "></i>Contact me <img src="/public/line.png" alt="Linha decorativa do título">
          </h2>

          <div class="col-md-8 mt-3">
            <p class="text-final">Se tiver interessado em meus trabalhos, ou deseja me orientar profissionalmente,
            não hesite e entre em contato comigo.
            </p>
                
          </div>

            <div class="col-md-4">
                <div class="card text-white bg-secondary mb-3 ms-3" style="max-width: 18rem;">
                    <div class="card-header">Contatos</div>
                    <div class="card-body">
                      <a class="nav-link" target="_blank" href="https://github.com/eldersb"><i class="bi bi-github fs-4" abbr title="eldersb"></i> Github</a>
                      <a class="nav-link" href="https://www.linkedin.com/in/elders3288/" target="_blank"><i class="bi bi-linkedin fs-4" abbr title="elders3288"></i> LinkedIn</a>
                      <a class="nav-link" href="#"><i class="bi bi-envelope fs-4" abbr title="elders787@gmail.com"></i> E-mail</a>
                      <a class="nav-link" href="#"><i class="bi bi-discord fs-4" abbr title="elders787@gmail.com"></i> Discord</a>
                    </div>
                </div>
            </div>
      </div>
  </section>
   
</div>
</template>

<style>

.text-justify {
    text-align: justify;
}

.text, .text-principal, .text-final{
    color: gray;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;  
}

.text {
  font-size: 30px;
}

.text-principal{
    font-size: 20px; 
}

.text-final {
  font-size: 22px;
}


.card {
    font-family: "Fira Code", monospace;
    font-weight: 400;
    font-style: normal;  
    font-size: 16px; 
}

.card-header {
    font-family: "Press Start 2P", system-ui;
    font-weight: 400;
    font-style: normal;  
    font-size: 14px; 
}


.img-fluid {
    border-radius: 10%;
}



li {
  list-style-type: none;
}




</style>