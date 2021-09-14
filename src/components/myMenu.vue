<template>
  <div class="main-menu" id="menu">
      <!-- Logo -->
    <nav>
        <img class="img-fluid" src="img/logo_breakfree.png" alt="">
        <ul class="nav nav-tabs">

            <!-- Bannière - Menu déroulant -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Activités</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="activites/loisirs.html">Loisirs</a>
                    <a class="dropdown-item" href="activites/salle_de_casse.html">Salle de casse</a>
                    <a class="dropdown-item" href="activites/enfants.html">Enfants</a>
                    <a class="dropdown-item" href="activites/therapie.html">Thérapie</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/tarifs">Tarifs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="reservation.html">Reservez</a>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name:"myMenu",
    
}
</script>