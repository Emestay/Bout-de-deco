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

<!-- This navbar has a dropdown menu that appears when the "Services" link is clicked, and disappears when the link is clicked again. The dropdown menu is displayed using a conditional (v-if) directive, which only renders the menu if the showDropdown data property is true. The showDropdown property is toggled using a click event handler (@click) that flips its value between true and false using the not operator (!).

You can customize the navbar by adding more links or changing the styles using CSS. You can also use the v-for directive to dynamically generate the links from an array of data. -->