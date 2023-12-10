const Element = {
    data () {
        return {
        }
    },
    template : `
    <li>
    <span> {{text}} </span>
    <button @click="remove()"> Remove </button>
    <button> Modify </button>
    `,
    props : ["text", "index"],
    methods : {
        remove() {
            this.$emit("remove", { index : this.index });
        },
    },
    emits : ["remove"]
}

export default Element;