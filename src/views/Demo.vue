<template>
    <div>
        <div class="demoDonut">
            <Donut/>
        </div>
    </div>
</template>

<script>
    import Donut from '@/components/DonutChart'
    export default {
        created() {
            console.log(this.sum(2))
        },
        mounted() {
        },
        components: {
            Donut
        },
        methods: {
            sum(...rest) {
                let add = function(...rest1) {
                    rest = [...rest, ...rest1]
                    return add
                }
                add.toString = function() {
                    let total = 0
                    rest.forEach(el => {
                        total += el
                    })
                    return total
                }
                return add
            }
        },
    }
</script>

<style lang="scss" scoped>
.demoDonut{
    width: 10rem;
    height: 10rem;
}
</style>