<template>
<div class="row">
            <div class="four columns" v-for="(course, index) in CourseList" :key="index">
                <div class="card" id="{{course.id}}" data-cantidad="{{course.cantidad}}">
                    <img :src="course.image" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>{{course.titulo}}</h4>
                        <p>{{course.nombre}}</p>
                        <img src="img/estrellas.png">
                        <p class="precio">{{course.precio}} <span class="u-pull-right ">$15</span></p>
                        <a href="" class="u-full-width button-primary button input agregar-carrito" @click="$emit('agregarCurso', $event, index, course)">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
</div>
</template>
<script>

export default {
    name: 'CardCourse',
    props: {
        CourseList: Array,
    }
}
</script>

<style scoped>

#lista-cursos .row {
    margin-bottom:20px;
}
.agregar-carrito {
    margin:10px 0;
}

.card {
    text-align: center;
    border: 1px solid #e1e1e1;
    background: white;
}
@media (min-width: 550px) {
    .card {
        text-align: left;
    }
}
.info-card  {
    padding: 10px 20px;
}

.info-card p, 
.card h4 {
    margin-bottom: 5px;
}
.info-card .precio {
    text-decoration: line-through;
    font-size: 18px;
    margin-top: 10px;
}
.info-card .precio span {
    font-weight: 700;
    font-size: 22px;
}

</style>