<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <NuxtPage/>
      <UNotifications/>
  </div>
</template>

<style lang="scss">

// @import url('https://fonts.googleapis.com/css?family=Poppins:700|Poppins:400');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://cdn-uicons.flaticon.com/2.3.0/uicons-bold-straight/css/uicons-bold-straight.css');
@import url('https://cdn-uicons.flaticon.com/2.3.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://cdn-uicons.flaticon.com/2.4.2/uicons-solid-rounded/css/uicons-solid-rounded.css');
@import url('https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-straight/css/uicons-thin-straight.css');
*,
::before,
::after {

  text-decoration: none;
  list-style: none;
  // margin: 0;
  // padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {

  background-color: $background;
  &.no-scroll {
    overflow: hidden;
  }
}

body {
  // font-family: 'Poppins';
  font-family: 'Inter', sans-serif;
  // font-weight: 300;
}

h1,
h2,
h3,
h4,
h5 {
  // font-family: 'undefined';
  font-weight: 700;
}

html {
  font-size: 100%;
}

/* 16px */

h1 {
  font-size: 4.210rem;
  /* 67.36px */
}

h2 {
  font-size: 3.158rem;
  /* 50.56px */
}

h3 {
  font-size: 2.369rem;
  /* 37.92px */
}

h4 {
  font-size: 1.777rem;
  /* 28.48px */
}

h5 {
  font-size: 1.333rem;
  /* 21.28px */
}

small {
  font-size: 0.750rem;
  /* 12px */
}
</style>