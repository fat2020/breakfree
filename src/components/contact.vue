<template>
  <section class="our-publication pt-100 pb-70">
    <div class="container">
      <div class="section-header">
        <h2>Nos Produit</h2>
      </div>
      <div class="row">
        <div
          class="col-sm-6 col-lg-3"
          v-for="produit in produits"
          :key="produit.id"
        >
          <div class="single-publication">
            <figure>
              <a>
                <img
                  :src="require(`@/assets/${produit.imgs[0]}.jpeg`)"
                  alt="publication Image"
                  width="100"
                  height="200"
                />
              </a>
            </figure>

            <div class="publication-content">
              <h3>
                <a href="">{{ produit.ref }}</a>
              </h3>
              <p class="text-block">{{ produit.description }}</p>
              <h4 class="price">{{ produit.prix }}</h4>
            </div>
            <div class="add-to-cart">
              <a
                @click="ajouter(produit.id, produit.nom, produit.prix)"
                class="default-btn"
              >
                Add to Cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
