<template>
    <header>
        <nav class="navbar navbar-dark navbar-expand-lg text-light">
            <div class="container">
                <a class="navbar-brand" href="/"><i class="bi bi-code-slash"></i> <span class="navbar-brand">Elder Borges</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto d-flex justify-content-center align-items-center gap-3">                 
                        <div class="d-flex gap-3">
                            <router-link to="/" class="text-light link-custom navbar-brand">
                                <i class="bi bi-hash fs-7"></i>Home
                            </router-link>
                            <router-link to="/about" class="text-light link-custom navbar-brand">
                                <i class="bi bi-hash fs-7"></i>Sobre mim
                            </router-link> 
                        </div>                 
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/in/elders3288/" target="_blank"><i class="bi bi-linkedin fs-4" abbr title="elders3288"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mailto:elders3288@gmail.com" target="_blank">
                                <i class="bi bi-envelope fs-4" abbr title="elders3288@gmail.com"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://wa.me/5571986987120" target="_blank">
                                <i class="bi bi-whatsapp fs-4"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://github.com/eldersb"><i class="bi bi-github fs-4" abbr title="eldersb"></i></a>
                        </li>
                                
                  </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>


</script>


<style>

.link-custom {
    text-decoration: none;
}

.navbar {
    border-bottom: 2px solid #7276d5 ;
    
}

.navbar-brand {
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px !important;
}

.bi-hash, .bi-code-slash {
   color: #7276d5;
}

.navbar {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 400;
    font-style: normal; 
}

</style>