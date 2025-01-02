<template>
  <header class="header">
    <div class="header__wrapper container">
      <router-link to="/" class="header__logo">
        <img src="@/assets/logo.png" alt="Kazus Podatkowy" />
      </router-link>

      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu-item">
            <router-link to="/o-kazusie">O Kazusie</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/o-firmie">O Firmie</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/czasopisma">Czasopisma</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/szkolenia">Szkolenia</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/baza-wiedzy">Baza Wiedzy</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/kazus-tv">Kazus TV</router-link>
          </li>
          <li class="header__menu-item">
            <router-link to="/kontakt">Kontakt</router-link>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <button class="header__action-btn header__search-icon">
          <SearchIcon />
        </button>
        <button class="header__action-btn header__user-icon">
          <UserIcon />
        </button>
        <button class="header__action-btn header__cart_icon">
          <CartIcon />
          <span class="header__cart-count">0</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 0 .75rem;
  background: white;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    img {
      height: 2.8125rem;
    }
  }

  &__nav {
    margin-left: 6.875rem;
  }

  &__menu {
    display: flex;
    gap: 2.3125rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__menu-item {
    a {
      text-decoration: none;
      color: var(--color-text);
      font-size: 0.875rem;
      transition: color 0.2s ease;

      &:hover,
      &.router-link-active {
        color: var(--color-secondary);
      }
    }
  }

  &__actions {
    display: flex;
    gap: .8125rem;
    margin-right: -1.0625rem;
    align-items: center;
  }

  &__action-btn {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-text);
    transition: color 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  &__cart_icon {
    position: relative;
  }

  &__cart-count {
    position: absolute;
    top: .3125rem;
    right: .0625rem;
    background: var(--color-primary);
    color: white;
    font-size: .5625rem;
    min-width: .8125rem;
    height: .8125rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__search-icon{
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    &:hover{
      background-color: var(--color-secondary);
    }
  }
}
</style>

