<template>
    <nav>
        <ul>
            <!-- generate links using v-for -->
            <li v-for="(item, index) in navItems" :key="index">
                <!-- dropdown menu -->
                <template v-if="item.dropdown">
                    <a href="#" @click="showDropdown = !showDropdown">
                        {{ item.label }}
                        <i class="fas fa-caret-down"></i>
                    </a>
                    <ul v-if="showDropdown">
                        <li v-for="subitem in item.dropdown" :key="subitem.label">
                            <a :href="subitem.href">{{ subitem.label }}</a>
                        </li>
                    </ul>
                </template>
                <!-- regular link -->
                <template v-else>
                    <a :href="item.href">{{ item.label }}</a>
                </template>
            </li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            showDropdown: false,
            navItems: [
                {
                    label: 'Home',
                    href: '#'
                },
                {
                    label: 'About',
                    href: '#'
                },
                {
                    label: 'Services',
                    dropdown: [
                        {
                            label: 'Design',
                            href: '#'
                        },
                        {
                            label: 'Development',
                            href: '#'
                        },
                        {
                            label: 'Consulting',
                            href: '#'
                        }
                    ]
                },
                {
                    label: 'Contact',
                    href: '#'
                }
            ]
        }
    }
}
</script>

<!-- In this example, the navItems data property is an array of objects that represent the links in the navbar. Each object has a label property for the link text and a href property for the link destination. If the object has a dropdown property, it is treated as a dropdown menu with subitems.

The v-for directive is used to loop through the navItems array and generate a li element for each item. The v-if directive is used to conditionally render the dropdown menu or the regular link based on whether the item has a dropdown property. The v-for directive is also used to loop through the subitems in the dropdown menu and generate a li element for each subitem.

You can customize the navbar by adding more links or changing the styles using CSS. You can also add more properties to the navItems objects to store additional information about the links (e.g. an icon, a target attribute, etc.). -->