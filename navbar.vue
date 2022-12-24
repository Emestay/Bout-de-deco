Copy code
<template>
  <nav>
    <!-- navbar items -->
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <!-- dropdown menu -->
      <li>
        <a href="#" @click="showDropdown = !showDropdown">
          Services
          <i class="fas fa-caret-down"></i>
        </a>
        <ul v-if="showDropdown">
          <li><a href="#">Design</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">Consulting</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    }
  }
}
</script>