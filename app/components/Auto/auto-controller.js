function AutoController() {
    var autoService = new AutoService()

    function drawAutos(autos) {
        var template = ''
        autos.forEach((auto) => {
            template += `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top listing-image" src="${auto.img}" alt="placeholder image">
                        <div class="card-block">
                            <h4>Make: ${auto.make}</h4>
                            <h4>Model: ${auto.model}</h4>
                            <h4>Price: $${auto.price}</h4>
                        </div>
                    </div>
                </div>
            `
        })
        document.getElementById('results').innerHTML = template
    }

    this.addAuto = function(event){
        event.preventDefault()
        var form = event.target

        var auto = {
            make: form.make.value,
            model: form.model.value,
            price: form.price.value,
            img: form.img.value
        }

        autoService.addAuto(auto)
        autoService.getAutos(drawAutos)
        form.reset()
    }

    this.addForm = function() {
        var template = ''
        template += `
            <div class="row">
                <div class="col-xs-12">
                    <form onsubmit="app.controllers.autoController.addAuto(event)">
                        <div class="form-group">
                            <input type="text" name="make" placeholder="Make" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="model" placeholder="Model">
                        </div>
                        <div class="form-group">
                            <input type="number" name="price" placeholder="Price">
                        </div>
                        <div class="form-group">
                            <input type="text" name="img" placeholder="image">
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        `
        document.getElementById('place-form').innerHTML = template
    }

}