<template>
    <!--верстка-->
    <div class="task-manager">
        <div class="menu">
            <img :src="src">
    <!--        Неизменный контент-->
            <div class="title">
                <h3>Задачи</h3>
                <p>Всего задач: {{tasks.length}}</p>
            </div>

            <nav>
                <router-link to="/addTask">
                    Создать задачу
                </router-link>
                <router-link to="/showTasks">
                    Просмотр задач
                </router-link>
            </nav>
        </div>
    <!--        Изменяемая часть-->
            <div class="main">
                <router-view></router-view>
            </div>
        </div>

</template>

<script>
    import {tasksFromStorage} from "./components/tasksFromStorage";

    export default {
        name: "App",
        data: function () {
            return {
                tasks: tasksFromStorage,
                src: "/src/img/pic3.jpeg"
            }
        }
    }
</script>

<style scoped>

</style>