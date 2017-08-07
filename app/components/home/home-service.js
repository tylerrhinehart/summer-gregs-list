function HomeService() {

    var homes = [{
        description: 'awesome',
        price: 100000,
        sqft: 1500,
        img: '//placehold.it/150x150'
    }, {
        description: 'super awesome',
        price: 1000000,
        sqft: 15000,
        img: '//placehold.it/300x250'
    }, {
        description: 'maximum awesome',
        price: 10000000,
        sqft: 150000,
        img: '//placehold.it/200x201'
    }]

    this.getHomes = function(cb) {
        cb(JSON.parse(JSON.stringify(homes)))
    }

    this.addHome = function(home){
        homes.push(home)
    }
}