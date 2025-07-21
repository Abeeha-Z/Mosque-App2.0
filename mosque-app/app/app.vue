<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <nav>
      <RouterView>
              <RouterLink to="/"></RouterLink>
      </RouterView>
    </nav>
    
  </div>
</template>
