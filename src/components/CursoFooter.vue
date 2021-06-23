<template>
    <footer id="footer" class="footer">
        <div class="container">
            <div class="row">
                    <div class="four columns">
                            <nav id="principal" class="menu">
                                <a class="enlace" href="#">Para tu Negocio</a>
                                <a class="enlace" href="#">Conviertete en Instructor</a>
                                <a class="enlace" href="#">Aplicaciones Móviles</a>
                                <a class="enlace" href="#">Soporte</a>
                                <a class="enlace" href="#">Temas</a>
                            </nav>
                    </div>
                    <div class="four columns">
                            <nav id="secundaria" class="menu">
                                <a class="enlace" href="#">¿Quienes Somos?</a>
                                <a class="enlace" href="#">Empleo</a>
                                <a class="enlace" href="#">Blog</a>
                            </nav>
                    </div>
            </div>
        </div>
    </footer>
</template>
<script>

export default {
    name: 'CursoFooter',
    props: {
        title: String
    }
}
</script>

<style scoped>

.footer {
    margin-top: 40px;
    border-top:1px solid #aaa;;
    padding-top: 40px;   
}

.footer .menu a{
display: block;
margin-bottom: 10px;
text-decoration: none;
}

</style>