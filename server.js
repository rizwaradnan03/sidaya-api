const express = require('express')
const cors = require('cors')

const PeriodeRoutes = require('./routes/PeriodeRoutes')
const SpeciesRoutes = require('./routes/SpeciesRoutes')
const SupplyRoutes = require('./routes/SupplyRoutes')
const AreasRoutes = require('./routes/AreaRoutes')
const ActivityRoutes = require('./routes/ActivityRoutes')
const ActivitySupplyRoutes = require('./routes/ActivitySupplyRoutes')
const ActivityTemplateRoutes = require('./routes/ActivityTemplateRoutes')
const ActivitySupplyTemplateRoutes = require('./routes/ActivitySupplyTemplateRoutes')
const ActivityTemplateDetailRoutes = require('./routes/ActivityTemplateDetailRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', (req,res) => {
    // res.json({message: 'halo geys'})
})

app.use('/api/periode', PeriodeRoutes)
app.use('/api/species', SpeciesRoutes)
app.use('/api/supply', SupplyRoutes)
app.use('/api/area', AreasRoutes)
app.use('/api/activity', ActivityRoutes)
app.use('/api/activity-supply', ActivitySupplyRoutes)
app.use('/api/activity-template', ActivityTemplateRoutes)
app.use('/api/activity-supply-template', ActivitySupplyTemplateRoutes)
app.use('/api/activity-template-detail', ActivityTemplateDetailRoutes)

app.listen(9001,"0.0.0.0",() => {
    console.log('Succesfully Connected')
})