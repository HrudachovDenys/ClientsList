<template>
    <div class='clientInfo'>
        <div class='clientInfo__client'>
            <img class='client__avatar' :src="avatar"/>

            <div class='client__info'>
                <h1>{{ fullName }}</h1>
                <h4>{{ job }}</h4>
                <h3>Contacts: </h3>
                <p>Email: <b>{{ contacts.email }}</b></p>
                <p>Phone: <b>{{ contacts.phone }}</b></p>
                <h3>Address: </h3>
                <p>Country: <b>{{ address.country }}</b></p>
                <p>City: <b>{{ address.city }}</b></p>
                <p>Street: <b>{{ address.street }}</b></p>
                <p>ZipCode: <b>{{ address.zipCode }}</b></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClientInfo',
    computed: {
        client: function() {
            return this.$store.getters.getClient
        },
        avatar: function() {
            return this.client['general'].avatar;
        },
        fullName: function() {
            return this.client['general'].firstName + ' ' + this.client['general'].lastName;
        },
        job: function() {
            return this.client['job'].title + ' - ' + this.client['job'].company
        },
        contacts: function() {
            return {
                email: this.client['contact'].email,
                phone: this.client['contact'].phone
            }
        },
        address: function() {
            return {
                street: this.client['address'].street,
                city: this.client['address'].city,
                zipCode: this.client['address'].zipCode,
                country: this.client['address'].country
            }
        }
    }
}
</script>

<style scoped>

.clientInfo {
    background-color: rgb(255, 255, 65);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.clientInfo__client {
    width: 70%;
    height: 70%;
    display: flex;
}

.client__info {
    padding-left: 10px;
}

.client__info p {
    padding-left: 25px;
}

.client__avatar {
    width: 128px;
    height: 128px;
}

</style>


