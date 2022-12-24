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