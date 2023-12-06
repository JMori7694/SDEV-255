const Element = {
    data () {
        return {
        }
    },
    template : `
    <li>
    <span> {{text}} </span>
    <button> Remove </button>
    <button> Modify </button>
    `,
    props : ["text"],
}

export default Element;