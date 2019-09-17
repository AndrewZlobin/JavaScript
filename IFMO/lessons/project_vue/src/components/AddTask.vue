<template>
    <div class="add-task">
        <h1>Добавить задачу</h1>
        <form @submit.prevent="addTask">
            <label for="title">Название задачи</label>
            <input v-model="title" type="text" id="title">

            <label for="description">Добавить описание</label>
            <textarea v-model="description" id="description"></textarea>

            <button :class="[(title && description) ? active : '']" type="submit">Добавить</button>
        </form>
    </div>

</template>

<script>
    import {tasksFromStorage} from "./tasksFromStorage";

    export default {
        name: "AddTask",
        data: function () {
            return {
                title: null,
                description: null,
                tasks: tasksFromStorage,
                active: 'active'
            }
        },
        methods: {
            addTask: function () {
                // console.log("lkgjdfjk= ", this.title);
                this.tasks.push({
                    title: this.title,
                    description: this.description,
                    isDel : false
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .add-task {
        flex: 1;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20%;

        label {
            padding: 10px;
            text-align: center;
        }
        button {
            margin-top: 5px;
            padding: 10px;
        }
    }

    .active {
        background: darkgoldenrod;
        /*background-blend-mode: luminosity;*/
    }
</style>