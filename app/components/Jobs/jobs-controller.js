function JobsController() {
    var jobsService = new JobsService()

    function drawJobs(jobs) {
        var template = ''
        jobs.forEach((job) => {
            template += `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="card">
                        <img class="card-img-top listing-image" src="${job.img}" alt="placeholder image">
                        <div class="card-block">
                            <h4>Description: ${job.description}</h4>
                            <h4>Hours: ${jobs.hours}</h4>
                            <h4>Price: $${job.salary}</h4>
                        </div>
                    </div>
                </div>
            `
        })
        document.getElementById('results').innerHTML = template
    }

    this.addJob = function(event){
        event.preventDefault()
        var form = event.target

        var job = {
            description: form.description.value,
            hours: form.hours.value,
            salary: form.salary.value,
            img: form.img.value
        }

        jobsService.addJob(job)
        jobsService.getJobs(drawJobs)
        form.reset()
    }

    this.addForm = function() {
        var template = ''
        template += `
            <div class="row">
                <div class="col-xs-12">
                    <form onsubmit="app.controllers.jobsController.addJob(event)">
                        <div class="form-group">
                            <input type="text" name="description" placeholder="Job description" required>
                        </div>
                        <div class="form-group">
                            <input type="number" name="hours" placeholder="Weekly Hours">
                        </div>
                        <div class="form-group">
                            <input type="number" name="salary" placeholder="Salary">
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

    // jobsService.getJobs(drawJobs)

}