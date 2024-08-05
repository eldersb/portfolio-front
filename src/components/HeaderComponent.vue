<template>
    <header>
        <nav class="navbar navbar-dark navbar-expand-lg bg-primary text-light">
            <div class="container">
                <a class="navbar-brand" href="#">Portifólio - Elder Borges</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto d-flex justify-content-center align-items-center">                 
                        <div class="d-flex gap-3">
                            <router-link to="/home" class="text-light link-custom">
                                 Home
                            </router-link>
                            <router-link to="/about" class="text-light link-custom">
                                Sobre mim
                            </router-link> 
                        </div>                  
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/in/elders3288/" target="_blank"><i class="bi bi-linkedin fs-4"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-envelope fs-4"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-telephone fs-4"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://github.com/eldersb"><i class="bi bi-github fs-4"></i></a>
                        </li>
                                
                  </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
// export default {
//     name: 'HeaderComponent'
// }

</script>



<style>

.link-custom {
    text-decoration: none;
}

</style>