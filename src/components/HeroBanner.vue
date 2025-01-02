<template>
  <section class="hero-banner">
    <div class="hero-banner__greenWrapper">
      <div class="hero-banner__wrapper container">
        <div class="hero-banner__content">
          <h1 class="hero-banner__title">Czasopisma</h1>
        <div class="hero-banner__text">
          <p class="hero-banner__paragraph">
            Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego", który tym razem poświęcony jest w dużej części zmianom w podatkach w roku 2019.
          </p>
          <p class="hero-banner__paragraph-small">
            Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów używania samochodów osobowych, wprowadzenie „exit tax" czy zmiany dotyczące poboru podatku u źródła na gruncie podatków dochodowych, poświęcając im odrębne artykuły.
          </p>
        </div>
      </div>
      <div class="hero-banner__image">
        <img src="@/assets/heroImage.png" alt="Kazus Podatkowy czasopismo" />
      </div>
    </div>
    </div>
    <div class="hero-banner__bottom"></div>
  </section>
</template>

<style lang="scss" scoped>
.hero-banner {
  color: white;
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;

  &__greenWrapper {
    background-color: #0A655E;
    padding-top: 55px;
    padding-bottom: 32px;
    position: relative;

      &::before {
        content: "";
        position: absolute;
        top: -36px;
        left: 185px;
        right: 0;
        bottom: 0;
        width: 442px;
        height: auto;
        background-image: url(/src/assets/heroBackground.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
  }

  &__bottom {
    padding: 50px;
  }

  &__wrapper {
    display: flex;
  }

  &__content {
    max-width: 560px;
  }

  &__title {
    font-family: 'Roboto', sans-serif;
    font-size: 53px;
    font-weight: 700;
    margin-bottom: 16px;

  }

  &__text {
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
  }

  &__paragraph {
    margin-bottom: 1.5rem;
    font-weight: bold;
    letter-spacing: 0px;
    line-height: 2;
  }

  &__paragraph-small {
    font-weight: 300;
    line-height: 1.7;
    font-size: 14px;
  }

  &__image {
    max-width: 31.25rem;
    margin-left: 94px;
    margin-top: -40px;

    img {
    position: absolute;
    width: 550px;
    height: auto;
    }
  }
}
</style>
