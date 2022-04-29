<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 } })">
        <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2022, jueves</span>
        </div>

        <div class="entry-description">
            Est in proident nostrud voluptate eiusmod non mollit ipsum commodo
            Lorem ex. Irure consectetur occaecat esse est id voluptate velit
            cillum esse labore incididunt consectetur. Cupidatat culpa velit
            tempor Lorem dolor ullamco. Elit ullamco aliquip nostrud quis
            consectetur eu quis voluptate reprehenderit non esse. Aute culpa
            officia ex in id esse consectetur proident ut sit eiusmod ullamco
            adipisicing.
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>
