<template>

    <div class="scrollBar">

        <form class="scrollBar__search">
            <input class="search__inputText"
                type="text" 
                placeholder="Search.." 
                @input="onSearch($event)"/>
            <img class="search__img"
                src='https://img.icons8.com/ios-glyphs/30/000000/search.png'/>
        </form>
        
        <ul class="scrollBar__clients">
            <li class="clients__li"
                v-for="(client, index) in clients" 
                :key="index"
                :ref="'clients__li-' + index"
                @click="onClientSelected(client, index)">
                
                <img class="clients__avatar" 
                    :src="client['general'].avatar">
                    
                <span class="clients__info">
                    <p>
                        <b>Name:</b> {{ client['general'].firstName + ' ' + client['general'].lastName }}
                    </p>
                    <p>
                        <b>Job:</b> {{  client['job'].title }}
                    </p>
                </span>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'ClientsList',
    data: function() {
        return {
            selectedLi: ''
        }
    },
    computed: {
        clients: function () {
            return this.$store.getters.getClients
        }
    },
    methods: {
        onClientSelected(client, index) {
            let li = this.$refs['clients__li-' + index][0];
            this.addLiClass(li);

            this.$store.dispatch('selectedClient', client);
        },
        onSearch(event) {
            this.$store.dispatch('search', event.target.value)
        },
        addLiClass(li) {
            let classStyle = 'clients__liSelected';

            if(this.selectedLi != ''){
                this.selectedLi.classList.remove(classStyle);
            }
            this.selectedLi = li;

            this.selectedLi.classList.add(classStyle);
        }

    },
    created: function() {
        this.$store.dispatch('search', '');
        this.$store.dispatch('selectedClient', this.clients[0]);
    },
    mounted: function() {
        let li = this.$refs['clients__li-' + 0][0];
        this.addLiClass(li);
    }
}
</script>

<style scoped>

.scrollBar {
    background-color: yellow;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.scrollBar__search {
    width: 100%;
    height: 5%;
    display: flex;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
}

.search__inputText {
    margin: 0;
    width: 90%;
    border: none;
    padding: 10px;
    margin: 0;
}

.search__img {
    border-right: 5px solid grey;
    width: 10%;
}

.scrollBar__clients {
    width: 100%;
    height: 95%;
    padding: 0;
    margin-top: 0;
    overflow-y: scroll;
    list-style-type: none;
}

.scrollBar__clients::-webkit-scrollbar { 
    width: 0; 
}

.clients__li {
    height: auto;
    display: flex;
    padding: 5px;
    border-right: 5px solid grey;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
}

.clients__liSelected {
    border-left: 5px solid grey;
    border-bottom: 5px solid grey;
    border-top: 5px solid grey;
    border-right: none;
}

.clients__avatar {
    width: 75px;
    height: 75px;
}

.clients__info {
    margin-left: 10px;
}

</style>

