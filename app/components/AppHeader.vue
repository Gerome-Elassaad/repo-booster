<script setup lang="ts">
// Combine manually mapped content navigation with static links
const links = [
  {
    label: 'Docs',
    to: 'https://docs.repo-booster.com',
    icon: 'i-heroicons-book-open-20-solid',
    external: true
  },
  {
    label: 'Pricing',
    to: '/pricing',
    icon: 'i-heroicons-currency-dollar-20-solid'
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'i-heroicons-newspaper-20-solid',
    ]
  
</script>

<template>
  <UHeader :links="links">
    <!-- Logo -->
    <template #logo>
      Repo-Booster
      <UBadge
        label="Go Pro"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <!-- Right Section: Buttons -->
    <template #right>
      <UButton
        label="Sign in"
        icon="i-heroicons-user-20-solid"
        color="gray"
        to="/login"
      />
      <UButton
        label="Sign up"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/signup"
        class="hidden lg:flex"
      />
    </template>

    <!-- Panel Section -->
    <template #panel>
      <UNavigationTree
        :links="links"
        default-open
      >
        <template #link="{ link }">
          <!-- Render icon if available -->
          <span
            v-if="link.icon"
            :class="link.icon"
            class="mr-2"
          />
          {{ link.label }}
        </template>
      </UNavigationTree>
    </template>
  </UHeader>
</template>
