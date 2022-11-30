<script setup>

    const props = defineProps({
    value: String
    })
    const emit = defineEmits(['input'])

    function handleFileChange(e) {
      // Whenever the file changes, emit the 'input' event with the file data.
      emit('input', e.target.files)
    }
</script>


<template>
    <!-- <input type="file" multiple="true" required="true" accept="image/*"/> -->
    <label class="file-select">
        <div class="btn select-button">
            <span v-if="value">Selected File: {{ value.name }}</span>
            <span v-else> Select File </span>
        </div>
        <input @change="handleFileChange" type="file" multiple="true" required="true" accept="image/*" />
    </label>
</template>

<style scoped>
.file-select > .select-button {
  padding: 1rem;

  color: var(--platinum);
  background-color: var(--iris);

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>