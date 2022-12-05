<script setup>
import { ref } from 'vue'

const emit = defineEmits(['input'])
const filesSelected = ref(false)

function handleFileChange(e) {
    // Whenever the file changes, emit the 'input' event with the file data.
    emit('input', e.target.files)
    filesSelected.value = e.target.files.length != 0
}
</script>


<template>
    <form>
        <label class="file-select">
            <div class="btn select-button">
                Select Files
            </div>
            <input @change="handleFileChange" type="file" multiple="true" required="true" accept=".png, .jpeg, .jpg" />
        </label>
        <label class="file-submit">
            <div class="btn submit-button" :class="{ disabled: !filesSelected }">
                Upload
            </div>
            <input type="submit" :disabled="filesSelected" />
        </label>
    </form>
</template>

<style scoped>
.btn {
    margin: 10px;
    outline: none !important;
    border: none;
}

.btn:hover {
    outline: none !important;
    border: none;
    filter: brightness(1.1)
}

.file-select>.select-button {
    padding: 1rem;

    color: var(--platinum);
    background-color: var(--iris);

    border-radius: .3rem;

    text-align: center;
    font-weight: bold;
}

.file-submit>.submit-button {
    padding: 1rem;

    color: var(--platinum);
    background-color: var(--forest-green-crayola);

    border-radius: .3rem;

    text-align: center;
    font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select>input[type="file"] {
    display: none;
}

.file-submit>input[type="submit"] {
    display: none;
}
</style>