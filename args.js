const envPort = process.env.PORT
const defaultPort = isNaN(envPort) ? 8000 : parseInt(envPort, 10)

exports.examples = [
    {
        usage: "csv-server",
        description: "serving current folder with default options"
    },
    {
        usage: "csv-server -p /csv -a col csv_folder",
        description: "serving csv_folder as api with prefix '/csv/' and converting csv to json by col"
    }
]
exports.options = [
    {
        name: 'port',
        description: "port to listen",
        defaultValue: defaultPort
    },
    {
        name: 'prefix',
        description: "url prefix to use",
        defaultValue: '/'
    },
    {
        name: 'trim',
        description: "whether to trim whitespace for each csv cell",
        defaultValue: true
    },
    {
        name: 'axis',
        description: "convert to json by row or by col",
        defaultValue: 'row'
    },
    {
        name: 'delimiter',
        description: "csv delimiter",
        defaultValue: ','
    }
]
