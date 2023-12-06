import Counter from "./counter.js"
const Counters = {
    data() {
        return {
            total : 0
        }
    },
    components : {
        Counter:Counter
    },
    props : ["nb"],
    computed : {
        nb() {
            var tab = [];
            for(var i = 0; i <this.nb; i++)
            return tab;
        }
    },
    template : `
        <div v-for="i in NB">
            Counter {{i}} : <counter @add="add($event)"
            @sub="sub($event)" />
        </div>
        <br>
        Total : {{total}} <br>
        `,
    methods : {
        add(value) {
            this.total += parseInt(value);
        },
        sub(value) {
            this.total -= parseInt(value);
        }
    },
}
export default Counters;